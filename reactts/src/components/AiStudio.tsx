
// AI Studio component for generating and previewing code templates

import { useState, useEffect, useRef } from 'react'

export type ModelId = 'claude-3-7' | 'deepseek-r1' | 'gpt-4o' | 'gemini-2-5'
export type OutputFormat = 'typescript' | 'json' | 'markdown'

export interface AiModelMeta {
  id: ModelId
  name: string
  provider: string
  badge: string
  accentColor: string
  latencyMs: number
}

export interface PromptPreset {
  id: string
  title: string
  icon: string
  description: string
  format: OutputFormat
  prompt: string
  generatedCode: string
}

export interface InferenceMetrics {
  tokensGenerated: number
  latencyMs: number
  confidenceScore: number
  modelUsed: ModelId
}

const AI_MODELS: AiModelMeta[] = [
  {
    id: 'deepseek-r1',
    name: 'DeepSeek R1',
    provider: 'DeepSeek Neural',
    badge: 'Reasoner',
    accentColor: '#38bdf8',
    latencyMs: 14,
  },
  {
    id: 'claude-3-7',
    name: 'Claude 3.7',
    provider: 'Anthropic Thinking',
    badge: 'Cognitive',
    accentColor: '#fb923c',
    latencyMs: 19,
  },
  {
    id: 'gpt-4o',
    name: 'GPT-4o Omniscient',
    provider: 'OpenAI Core',
    badge: 'Ultra Fast',
    accentColor: '#34d399',
    latencyMs: 11,
  },
  {
    id: 'gemini-2-5',
    name: 'Gemini 2.5 Pro',
    provider: 'Google DeepMind',
    badge: 'Multimodal',
    accentColor: '#818cf8',
    latencyMs: 16,
  },
]

const PROMPT_PRESETS: PromptPreset[] = [
  {
    id: 'type-guard',
    title: 'Type Guard Synthesizer',
    icon: '🛡️',
    description: 'Generates user-defined type predicates (arg is ChaiItem)',
    format: 'typescript',
    prompt: 'Write an exhaustive TypeScript Type Guard for validating ChaiItem payloads at runtime.',
    generatedCode: `// 🤖 AI Generated: Exhaustive Type Predicate Guard
export interface ValidatedChai {
  id: number
  name: string
  price: number
  isSpecial: boolean
  origin?: string
}

/**
 * Strict Type Guard: validates untyped network payloads
 * Returns true if raw conforms to ValidatedChai
 */
export function isChaiItem(raw: unknown): raw is ValidatedChai {
  if (typeof raw !== 'object' || raw === null) return false

  const candidate = raw as Record<string, unknown>

  return (
    typeof candidate.id === 'number' &&
    typeof candidate.name === 'string' &&
    typeof candidate.price === 'number' &&
    candidate.price > 0 &&
    (candidate.isSpecial === undefined || typeof candidate.isSpecial === 'boolean') &&
    (candidate.origin === undefined || typeof candidate.origin === 'string')
  )
}

// ✨ Safe runtime narrowing:
export function processPayload(data: unknown) {
  if (isChaiItem(data)) {
    console.log(\`✅ Validated: \${data.name} for ₹\${data.price}\`)
    return data.price
  }
  throw new TypeError("Invalid Chai payload schema")
}`,
  },
  {
    id: 'chai-recipe',
    title: 'Cyber-Masala Recipe Synthesizer',
    icon: '☕',
    description: 'AI-engineered precise brewing parameters with typed telemetry',
    format: 'json',
    prompt: 'Synthesize optimal thermodynamic brewing matrix for Indian Masala Kadak Chai.',
    generatedCode: `{
  "aiEngine": "DeepSeek-R1-V2",
  "recipe": {
    "name": "Quantum Cyber-Masala Kadak",
    "brewCycle": "Triple Decoction",
    "thermodynamics": {
      "waterTempC": 98.4,
      "milkToWaterRatio": "60:40",
      "infusionTimeSeconds": 240
    },
    "spiceMatrix": [
      { "spice": "Green Cardamom", "ratioMg": 350, "crushState": "Coarse" },
      { "spice": "Fresh Ginger Root", "ratioMg": 800, "crushState": "Micro-grated" },
      { "spice": "Black Peppercorn", "ratioMg": 120, "crushState": "Fine Cracked" },
      { "spice": "Ceylon Cinnamon", "ratioMg": 200, "crushState": "Quill Bark" }
    ],
    "caffeineMg": 115,
    "aromaScore": 9.94
  }
}`,
  },
  {
    id: 'generic-hook',
    title: 'Generic State Machine Hook',
    icon: '⚡',
    description: 'Typed useReducer state machine with Discriminated Unions',
    format: 'typescript',
    prompt: 'Synthesize a type-safe generic Reducer hook for async operations with Discriminated Action Unions.',
    generatedCode: `// 🤖 AI Generated: Generic Async Reducer Hook
export type AsyncAction<T> =
  | { type: 'FETCH_START' }
  | { type: 'FETCH_SUCCESS'; payload: T }
  | { type: 'FETCH_FAILURE'; error: Error }
  | { type: 'RESET' }

export interface AsyncState<T> {
  status: 'idle' | 'pending' | 'resolved' | 'rejected'
  data: T | null
  error: Error | null
}

export function asyncReducer<T>(
  state: AsyncState<T>,
  action: AsyncAction<T>
): AsyncState<T> {
  switch (action.type) {
    case 'FETCH_START':
      return { status: 'pending', data: null, error: null }
    case 'FETCH_SUCCESS':
      return { status: 'resolved', data: action.payload, error: null }
    case 'FETCH_FAILURE':
      return { status: 'rejected', data: null, error: action.error }
    case 'RESET':
      return { status: 'idle', data: null, error: null }
  }
}`,
  },
]

interface AiStudioProps {
  onNotify?: (message: string) => void
}

export function AiStudio({ onNotify }: AiStudioProps) {
  const [selectedModel, setSelectedModel] = useState<ModelId>('deepseek-r1')
  const [activePreset, setActivePreset] = useState<PromptPreset>(PROMPT_PRESETS[0])
  const [customPrompt, setCustomPrompt] = useState<string>(PROMPT_PRESETS[0].prompt)
  const [temperature, setTemperature] = useState<number>(0.7)
  const [topP, setTopP] = useState<number>(0.95)
  const [isGenerating, setIsGenerating] = useState<boolean>(false)
  const [displayedText, setDisplayedText] = useState<string>(PROMPT_PRESETS[0].generatedCode)
  const [copied, setCopied] = useState<boolean>(false)
  const [metrics, setMetrics] = useState<InferenceMetrics>({
    tokensGenerated: 342,
    latencyMs: 14,
    confidenceScore: 99.4,
    modelUsed: 'deepseek-r1',
  })

  const streamIntervalRef = useRef<number | null>(null)

  const activeModelMeta = AI_MODELS.find(m => m.id === selectedModel) ?? AI_MODELS[0]

  // Cleanup streaming timer on unmount
  useEffect(() => {
    return () => {
      if (streamIntervalRef.current) {
        clearInterval(streamIntervalRef.current)
      }
    }
  }, [])

  const handleSelectPreset = (preset: PromptPreset) => {
    setActivePreset(preset)
    setCustomPrompt(preset.prompt)
    triggerInference(preset.generatedCode, preset.title)
  }

  const triggerInference = (targetCode: string, title: string) => {
    if (streamIntervalRef.current) {
      clearInterval(streamIntervalRef.current)
    }

    setIsGenerating(true)
    setDisplayedText('')

    let currentIndex = 0
    const stepSize = Math.max(4, Math.floor(targetCode.length / 45))

    streamIntervalRef.current = window.setInterval(() => {
      currentIndex += stepSize
      if (currentIndex >= targetCode.length) {
        setDisplayedText(targetCode)
        setIsGenerating(false)
        if (streamIntervalRef.current) clearInterval(streamIntervalRef.current)

        const estTokens = Math.floor(targetCode.length / 3.8)
        setMetrics({
          tokensGenerated: estTokens,
          latencyMs: activeModelMeta.latencyMs + Math.floor(Math.random() * 6),
          confidenceScore: 98 + Math.round(Math.random() * 19) / 10,
          modelUsed: selectedModel,
        })

        if (onNotify) {
          onNotify(`⚡ AI Generation Complete: "${title}" (${estTokens} tokens)`)
        }
      } else {
        setDisplayedText(targetCode.slice(0, currentIndex))
      }
    }, 25)
  }

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!customPrompt.trim()) return

    // Generate custom dynamic response based on prompt
    const generated = `// 🤖 AI Copilot Synthesized Result for:
// "${customPrompt}"
// Model: ${activeModelMeta.name} (${activeModelMeta.provider})
// Temperature: ${temperature.toFixed(2)} | Top-P: ${topP.toFixed(2)}

export interface AIResponsePayload<T = unknown> {
  success: boolean
  model: "${selectedModel}"
  timestamp: string
  data: T
  telemetry: {
    latency: "${activeModelMeta.latencyMs}ms"
    tokens: number
  }
}

export function createNeuralResult<T>(data: T): AIResponsePayload<T> {
  return {
    success: true,
    model: "${selectedModel}",
    timestamp: new Date().toISOString(),
    data,
    telemetry: {
      latency: "${activeModelMeta.latencyMs}ms",
      tokens: ${Math.floor(customPrompt.length * 2.4 + 120)}
    }
  }
}`

    triggerInference(generated, customPrompt.slice(0, 24) + '...')
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(displayedText)
      setCopied(true)
      if (onNotify) onNotify('📋 Code copied to clipboard with type signatures!')
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Fallback
    }
  }

  return (
    <section className="ts-section ai-studio-section">
      {/* Status bar */}
      <div className="ai-header-bar">
        <div className="ai-badge-group">
          <span className="ai-pulse-dot" />
          <span className="ai-pill-tag">NEURAL SYNTHESIZER v3.4</span>
          <span className="ai-model-tag" style={{ borderColor: activeModelMeta.accentColor }}>
            {activeModelMeta.badge} • {activeModelMeta.latencyMs}ms
          </span>
        </div>
        <div className="ai-status-telemetry">
          <span>Tokens: <strong>{metrics.tokensGenerated}</strong></span>
          <span className="ai-divider">/</span>
          <span>Confidence: <strong>{metrics.confidenceScore}%</strong></span>
          <span className="ai-divider">/</span>
          <span className="ai-status-online">● KERNEL ACTIVE</span>
        </div>
      </div>

      <div className="ai-banner">
        <div className="ai-banner-content">
          <h2 className="ai-banner-title">
            <span className="ai-glow-text">Neural Studio</span> &amp; Copilot Engine
          </h2>
          <p className="ai-banner-desc">
            Explore AI generation patterns with strict TypeScript typing, live token streaming,
            and parameterized inference models.
          </p>
        </div>
      </div>

      {/* Model selection */}
      <div className="ai-model-selector">
        <label className="ai-section-label">Select Active Inference Model:</label>
        <div className="ai-model-cards">
          {AI_MODELS.map(model => (
            <button
              key={model.id}
              type="button"
              className={`ai-model-card ${selectedModel === model.id ? 'active' : ''}`}
              onClick={() => {
                setSelectedModel(model.id)
                if (onNotify) onNotify(`Switched active AI engine to ${model.name}`)
              }}
            >
              <div className="ai-model-top">
                <span className="ai-model-name">{model.name}</span>
                <span className="ai-model-chip" style={{ color: model.accentColor }}>
                  {model.badge}
                </span>
              </div>
              <span className="ai-model-provider">{model.provider}</span>
              <div className="ai-model-meta-row">
                <span>Latency ~{model.latencyMs}ms</span>
                <span className="ai-ping-indicator" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Preset prompt templates */}
      <div className="ai-presets-container">
        <label className="ai-section-label">Neural Prompt Presets (Click to Synthesize):</label>
        <div className="ai-preset-chips">
          {PROMPT_PRESETS.map(preset => (
            <button
              key={preset.id}
              type="button"
              className={`ai-preset-chip ${activePreset.id === preset.id ? 'active' : ''}`}
              onClick={() => handleSelectPreset(preset)}
            >
              <span className="ai-preset-icon">{preset.icon}</span>
              <div className="ai-preset-text">
                <span className="ai-preset-title">{preset.title}</span>
                <span className="ai-preset-sub">{preset.description}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Prompt input and settings */}
      <form className="ai-prompt-box" onSubmit={handleCustomSubmit}>
        <div className="ai-prompt-input-row">
          <span className="ai-prompt-sparkle">✨</span>
          <input
            type="text"
            className="ai-prompt-input"
            value={customPrompt}
            onChange={e => setCustomPrompt(e.target.value)}
            placeholder="Type your AI prompt or request TypeScript architecture..."
          />
          <button
            type="submit"
            className="ts-btn ai-generate-btn"
            disabled={isGenerating || !customPrompt.trim()}
          >
            {isGenerating ? (
              <>
                <span className="ai-btn-spinner" /> Streaming...
              </>
            ) : (
              <>⚡ Synthesize</>
            )}
          </button>
        </div>

        {/* Hyperparameter Controls */}
        <div className="ai-hyperparams">
          <div className="ai-param-item">
            <label>
              Temperature: <code>{temperature.toFixed(2)}</code>
            </label>
            <input
              type="range"
              min="0.1"
              max="1.0"
              step="0.05"
              value={temperature}
              onChange={e => setTemperature(parseFloat(e.target.value))}
              className="ai-slider"
            />
          </div>
          <div className="ai-param-item">
            <label>
              Top-P Nucleus: <code>{topP.toFixed(2)}</code>
            </label>
            <input
              type="range"
              min="0.5"
              max="1.0"
              step="0.05"
              value={topP}
              onChange={e => setTopP(parseFloat(e.target.value))}
              className="ai-slider"
            />
          </div>
          <div className="ai-param-badge">
            Format: <strong>{activePreset.format.toUpperCase()}</strong>
          </div>
        </div>
      </form>

      {/* Generated output terminal */}
      <div className="ai-terminal-wrapper">
        <div className="ai-terminal-bar">
          <div className="ai-terminal-dots">
            <span className="dot red" />
            <span className="dot yellow" />
            <span className="dot green" />
          </div>
          <div className="ai-terminal-title">
            <span>neural_output.{activePreset.format === 'json' ? 'json' : 'ts'}</span>
            <span className="ai-stream-status">
              {isGenerating ? '● STREAMING INFERENCE...' : '✓ COMPILED STRICT TS'}
            </span>
          </div>
          <button
            type="button"
            className="ai-copy-btn"
            onClick={handleCopy}
            title="Copy code"
          >
            {copied ? '✓ Copied!' : '📋 Copy Code'}
          </button>
        </div>

        <div className="ai-terminal-body">
          <pre className="ai-code-view">
            <code>
              {displayedText}
              {isGenerating && <span className="ai-cursor">▋</span>}
            </code>
          </pre>
        </div>
      </div>

      {/* TypeScript concept summary */}
      <div className="ai-ts-breakdown">
        <div className="ai-ts-card">
          <h4>🧩 TypeScript Concept in Action: Generics &amp; Predicates</h4>
          <p>
            This module combines <code>Type Predicates (val is T)</code>, generic constraints{' '}
            <code>&lt;T = unknown&gt;</code>, and discriminated action unions to ensure zero runtime
            type drift during AI inference streaming.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AiStudio
