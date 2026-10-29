

// Generic custom hook to fetch data with loading, error, and cancellation support

import { useState, useEffect, useCallback, useRef } from 'react'

export type FetchStatus = 'idle' | 'loading' | 'success' | 'error'

export interface FetchResult<T> {
  data: T | null
  loading: boolean
  error: Error | null
  status: FetchStatus
  refetch: () => void
  timestamp: number | null
}

export interface UseFetchOptions<T> {
  immediate?: boolean
  initialData?: T | null
  transform?: (raw: unknown) => T
}

// Fetch helper with type parameter T
export function useFetch<T = unknown>(
  url: string,
  options: UseFetchOptions<T> = {}
): FetchResult<T> {
  const { immediate = true, initialData = null, transform } = options

  const [data, setData] = useState<T | null>(initialData)
  const [loading, setLoading] = useState<boolean>(immediate)
  const [error, setError] = useState<Error | null>(null)
  const [status, setStatus] = useState<FetchStatus>(immediate ? 'loading' : 'idle')
  const [timestamp, setTimestamp] = useState<number | null>(null)

  const abortControllerRef = useRef<AbortController | null>(null)

  const execute = useCallback(async (): Promise<void> => {
    // Cancel any ongoing request before firing a new one
    if (abortControllerRef.current) {
      abortControllerRef.current.abort()
    }

    const controller = new AbortController()
    abortControllerRef.current = controller

    setLoading(true)
    setError(null)
    setStatus('loading')

    try {
      const response = await fetch(url, { signal: controller.signal })
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status} (${response.statusText})`)
      }

      const rawJson = (await response.json()) as unknown
      const parsedData: T = transform ? transform(rawJson) : (rawJson as T)

      setData(parsedData)
      setStatus('success')
      setTimestamp(Date.now())
    } catch (err: unknown) {
      if (err instanceof Error) {
        if (err.name === 'AbortError') return
        setError(err)
      } else {
        setError(new Error('An unexpected network error occurred'))
      }
      setStatus('error')
    } finally {
      setLoading(false)
    }
  }, [url, transform])

  useEffect(() => {
    let isMounted = true

    if (immediate) {
      const controller = new AbortController()
      abortControllerRef.current = controller

      fetch(url, { signal: controller.signal })
        .then(async response => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
          }
          const rawJson = (await response.json()) as unknown
          const parsedData: T = transform ? transform(rawJson) : (rawJson as T)
          if (isMounted) {
            setData(parsedData)
            setStatus('success')
            setTimestamp(Date.now())
            setLoading(false)
          }
        })
        .catch((err: unknown) => {
          if (isMounted && err instanceof Error && err.name !== 'AbortError') {
            setError(err)
            setStatus('error')
            setLoading(false)
          }
        })
    }

    return () => {
      isMounted = false
      if (abortControllerRef.current) {
        abortControllerRef.current.abort()
      }
    }
  }, [url, transform, immediate])

  return {
    data,
    loading,
    error,
    status,
    refetch: execute,
    timestamp,
  }
}

export default useFetch
