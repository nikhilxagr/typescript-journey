// Counter component with generic state and step size options

import { useState } from 'react'
import type { FC, MouseEvent } from 'react'

// Step size union type
export type StepSize = 1 | 2 | 5 | 10 | 25 | 50

export interface CounterProps {
  initialValue?: number
  label?: string
  minLimit?: number
  maxLimit?: number
  onCountChange?: (val: number) => void
}

export const Counter: FC<CounterProps> = ({
  initialValue = 0,
  label = 'Quantum Flux Counter',
  minLimit = -500,
  maxLimit = 500,
  onCountChange,
}) => {
  const [count, setCount] = useState<number>(initialValue)
  const [step, setStep] = useState<StepSize>(1)
  const [history, setHistory] = useState<number[]>([initialValue])

  const updateCount = (newCount: number): void => {
    const clamped = Math.max(minLimit, Math.min(maxLimit, newCount))
    setCount(clamped)
    setHistory(prev => [clamped, ...prev.slice(0, 4)])
    if (onCountChange) onCountChange(clamped)
  }

  // Event handlers for counter actions
  const handleIncrement = (_e: MouseEvent<HTMLButtonElement>): void => {
    updateCount(count + step)
  }

  const handleDecrement = (_e: MouseEvent<HTMLButtonElement>): void => {
    updateCount(count - step)
  }

  const handleReset = (): void => {
    updateCount(initialValue)
  }

  const handleDouble = (): void => {
    updateCount(count === 0 ? step : count * 2)
  }

  const handleHalve = (): void => {
    updateCount(Math.round(count / 2))
  }

  const STEPS: StepSize[] = [1, 2, 5, 10, 25, 50]

  // Calculate gauge fill percentage
  const range = maxLimit - minLimit
  const percentage = Math.round(((count - minLimit) / range) * 100)

  return (
    <div className="ts-counter ai-glass-panel">
      <div className="ai-counter-top">
        <span className="ai-counter-label">{label}</span>
        <span className="ai-chip-pill">useState&lt;number&gt;</span>
      </div>

      {/* Counter display */}
      <div className="ai-digital-display">
        <div className="ai-display-backdrop">8888</div>
        <div
          className={`ts-count-value ${
            count > 0 ? 'positive' : count < 0 ? 'negative' : 'neutral'
          }`}
        >
          {count > 0 ? `+${count}` : count}
        </div>
      </div>

      {/* Progress gauge */}
      <div className="ai-gauge-container">
        <div className="ai-gauge-track">
          <div
            className="ai-gauge-fill"
            style={{ width: `${percentage}%` }}
          />
        </div>
        <div className="ai-gauge-labels">
          <span>Min: {minLimit}</span>
          <span>{percentage}%</span>
          <span>Max: {maxLimit}</span>
        </div>
      </div>

      {/* Increment and decrement buttons */}
      <div className="ts-counter-controls">
        <button
          className="ts-btn ts-btn-secondary ai-glow-btn"
          type="button"
          onClick={handleDecrement}
          disabled={count <= minLimit}
          title={`Decrement by ${step}`}
        >
          − {step}
        </button>

        <button
          className="ts-btn ts-btn-ghost"
          type="button"
          onClick={handleReset}
          title="Reset to initial value"
        >
          ↺ Reset
        </button>

        <button
          className="ts-btn ai-primary-glow-btn"
          type="button"
          onClick={handleIncrement}
          disabled={count >= maxLimit}
          title={`Increment by ${step}`}
        >
          + {step}
        </button>
      </div>

      {/* Quick multiplier actions */}
      <div className="ai-quick-ops">
        <button
          type="button"
          className="ai-op-chip"
          onClick={handleDouble}
        >
          ×2 Double
        </button>
        <button
          type="button"
          className="ai-op-chip"
          onClick={handleHalve}
        >
          ÷2 Halve
        </button>
        <button
          type="button"
          className="ai-op-chip"
          onClick={() => updateCount(-count)}
        >
          ± Invert
        </button>
      </div>

      {/* Step size selector */}
      <div className="ai-step-section">
        <span className="ai-step-title">
          Step Factor (<code>type StepSize = 1 | 2 | 5 | 10 | 25 | 50</code>):
        </span>
        <div className="ai-step-chips">
          {STEPS.map(s => (
            <button
              key={s}
              type="button"
              className={`ai-step-btn ${step === s ? 'active' : ''}`}
              onClick={() => setStep(s)}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Recent history list */}
      <div className="ai-counter-history">
        <span className="ai-hist-title">Recent Telemetry:</span>
        <div className="ai-hist-stream">
          {history.map((val, idx) => (
            <span key={idx} className="ai-hist-badge">
              #{idx}: {val}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Counter
