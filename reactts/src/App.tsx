// Main application shell and tab navigation

import { useState } from 'react'
import Card from './components/Card'
import Counter from './components/Counter'
import ChaiList from './components/ChaiList'
import OrderForm, { type OrderFormState } from './components/OrderForm'
import AiStudio from './components/AiStudio'
import useFetch from './Hooks/useFetch'
import './App.css'

export type TabId = 'aiStudio' | 'chaiList' | 'orderForm' | 'counter' | 'card' | 'hooks'

export interface TabConfig {
  id: TabId
  label: string
  badge?: string
  icon: string
}

export interface ToastMessage {
  id: string
  text: string
  type: 'info' | 'success' | 'ai'
  timestamp: string
}

const TABS: TabConfig[] = [
  { id: 'aiStudio',  label: 'AI Neural Studio', icon: '🤖', badge: 'Flagship' },
  { id: 'chaiList',  label: 'Chai Matrix',      icon: '☕', badge: 'Typed Arrays' },
  { id: 'orderForm', label: 'Order Terminal',   icon: '📝', badge: 'Forms & Refs' },
  { id: 'counter',   label: 'Quantum Counter',  icon: '🔢', badge: 'Generics' },
  { id: 'card',      label: 'Typed Props',      icon: '🃏', badge: 'Interfaces' },
  { id: 'hooks',     label: 'useFetch<T>',      icon: '🧪', badge: 'Custom Hook' },
]

// Mock data type for useFetch hook demonstration
interface SimulatedApiResponse {
  systemUptime: string
  activePipelines: number
  neuralCoreVersion: string
  safetyCheck: boolean
}

function App() {
  const [activeTab, setActiveTab] = useState<TabId>('aiStudio')
  const [toasts, setToasts] = useState<ToastMessage[]>([
    {
      id: 'init-toast',
      text: '✨ NeuralTS v3.4 Engine initialized with strict TypeScript verification',
      type: 'ai',
      timestamp: 'just now',
    },
  ])

  // Custom generic hook invocation demonstration
  const { data: systemData, loading: sysLoading, refetch: refetchSys } = useFetch<SimulatedApiResponse>(
    'https://dummyjson.com/test',
    {
      immediate: false,
      initialData: {
        systemUptime: '99.98%',
        activePipelines: 12,
        neuralCoreVersion: 'v4.2-quantum',
        safetyCheck: true,
      },
    }
  )

  const addToast = (text: string, type: 'info' | 'success' | 'ai' = 'info') => {
    const newToast: ToastMessage = {
      id: Math.random().toString(36).substring(2, 9),
      text,
      type,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
    }
    setToasts(prev => [newToast, ...prev.slice(0, 3)])

    // Auto dismiss after 4 seconds
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== newToast.id))
    }, 4000)
  }

  const dismissToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id))
  }

  const handleCardClick = (title: string): void => {
    addToast(`🃏 Triggered card action: "${title}" — onClick is typed as () => void`, 'ai')
  }

  const handleOrderBrew = (name: string, price: number) => {
    addToast(`🍵 Brewing initialized for "${name}" (₹${price.toFixed(2)})`, 'success')
  }

  const handleOrderSubmitted = (order: OrderFormState, total: number) => {
    addToast(`🚀 Order ${order.orderId} dispatched for ${order.customerName} (₹${total.toFixed(2)})`, 'success')
  }

  return (
    <div className="app-wrapper ai-app-theme">
      {/* Ambient background glow */}
      <div className="ai-ambient-glow glow-cyan" />
      <div className="ai-ambient-glow glow-violet" />
      <div className="ai-ambient-glow glow-pink" />

      {/* Header */}
      <header className="app-header ai-header">
        <div className="app-header-inner">
          <div className="ai-top-status-bar">
            <div className="ai-status-left">
              <span className="ai-pulse-dot-green" />
              <span className="ai-status-text">NEURAL KERNEL 5.8 ACTIVE</span>
              <span className="ai-tag-ts">TS STRICT MODE</span>
            </div>
            <div className="ai-status-right">
              <span className="ai-clock-text">Latency: <strong>11ms</strong></span>
              <span className="ai-clock-text">Inference: <strong>Online</strong></span>
            </div>
          </div>

          <div className="ai-brand-headline">
            <div className="ai-logo-icon">
              <span className="ai-icon-symbol">⚡</span>
            </div>
            <div>
              <h1 className="app-title">
                NeuralTS <span className="ai-title-gradient">Journey</span>
              </h1>
              <p className="app-subtitle">
                Next-Generation React + TypeScript Studio with AI Aesthetics &amp; Type-Safe Architecture
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Tab navigation */}
      <nav className="ts-tabs-container">
        <div className="ts-tabs">
          {TABS.map(tab => {
            const isActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                className={`ts-tab-btn ${isActive ? 'active' : ''}`}
                type="button"
                onClick={() => setActiveTab(tab.id)}
              >
                <span className="ts-tab-icon">{tab.icon}</span>
                <span className="ts-tab-label">{tab.label}</span>
                {tab.badge && (
                  <span className={`ts-tab-badge ${isActive ? 'active-badge' : ''}`}>
                    {tab.badge}
                  </span>
                )}
                {isActive && <span className="ts-tab-active-indicator" />}
              </button>
            )
          })}
        </div>
      </nav>

      {/* Tab content */}
      <main className="app-content">
        {/* AI Studio */}
        {activeTab === 'aiStudio' && (
          <AiStudio onNotify={msg => addToast(msg, 'ai')} />
        )}

        {/* Chai menu */}
        {activeTab === 'chaiList' && (
          <ChaiList onOrderBrew={handleOrderBrew} />
        )}

        {/* Order form */}
        {activeTab === 'orderForm' && (
          <OrderForm onSuccessOrder={handleOrderSubmitted} />
        )}

        {/* Counter */}
        {activeTab === 'counter' && (
          <section className="ts-section">
            <div className="ai-section-header">
              <div>
                <h2 className="ts-section-title">🔢 Quantum State &amp; Generics</h2>
                <p className="ts-section-sub">
                  Demonstrates <code>useState&lt;number&gt;</code>, union types, and telemetry metrics.
                </p>
              </div>
            </div>
            <div className="ts-grid ts-grid-2">
              <Counter
                label="Flux Core Primary"
                initialValue={42}
                minLimit={-100}
                maxLimit={500}
                onCountChange={val => addToast(`Flux Core value shifted to ${val}`, 'info')}
              />
              <Counter
                label="Neural Sync Secondary"
                initialValue={0}
                minLimit={-50}
                maxLimit={100}
                onCountChange={val => addToast(`Neural Sync value shifted to ${val}`, 'info')}
              />
            </div>
          </section>
        )}

        {/* Props tab */}
        {activeTab === 'card' && (
          <section className="ts-section">
            <div className="ai-section-header">
              <div>
                <h2 className="ts-section-title">🃏 Typed Component Interfaces</h2>
                <p className="ts-section-sub">
                  Demonstrates <code>interface CardProps</code> with required, optional, and function callback props.
                </p>
              </div>
            </div>

            <div className="ts-grid">
              <Card
                title="Strict Required Props"
                category="Props Verification"
                description="Title & description are required fields. TypeScript prevents component rendering if omitted."
                codeSnippet="interface CardProps { title: string; description: string; }"
              />

              <Card
                title="Optional Badge Prop"
                category="Optional Modifier"
                badge="✨ AI Verified"
                description="The badge property is marked with the optional modifier (badge?: string). Handled cleanly via conditional rendering."
                codeSnippet="badge?: string"
              />

              <Card
                title="Typed Callback Trigger"
                category="Event Emitter"
                badge="Clickable"
                description="Interactive callback typed strictly as (() => void). Click below to trigger the AI toast notification pipeline."
                codeSnippet="onClick?: () => void"
                onClick={() => handleCardClick('Typed Callback Trigger')}
              />

              <Card
                title="Generic Union Discriminator"
                category="Advanced TS"
                badge="Union Types"
                description="Components can consume union literal strings (type Variant = 'default' | 'elevated' | 'glass') with zero type drift."
                codeSnippet="type Variant = 'default' | 'glass'"
                onClick={() => handleCardClick('Generic Union Discriminator')}
              />
            </div>
          </section>
        )}

        {/* Custom hook demo */}
        {activeTab === 'hooks' && (
          <section className="ts-section">
            <div className="ai-section-header">
              <div>
                <h2 className="ts-section-title">🧪 Generic Custom Hooks: useFetch&lt;T&gt;</h2>
                <p className="ts-section-sub">
                  Demonstrates <code>useFetch&lt;SimulatedApiResponse&gt;</code> with generics, AbortController, and status unions.
                </p>
              </div>
              <button
                type="button"
                className="ts-btn ai-primary-glow-btn"
                onClick={() => {
                  refetchSys()
                  addToast('Refetching telemetry from generic useFetch hook...', 'ai')
                }}
              >
                ↻ Refetch Telemetry
              </button>
            </div>

            <div className="ai-hook-card">
              <div className="ai-hook-header">
                <span className="ai-hook-status">
                  Status: <strong>{sysLoading ? 'FETCHING...' : 'ONLINE (SUCCESS)'}</strong>
                </span>
                <span className="ai-pill-tag">Type: SimulatedApiResponse</span>
              </div>

              <div className="ts-grid ts-grid-2">
                <div className="ai-hook-stat-panel">
                  <span className="ai-hook-stat-label">System Uptime</span>
                  <span className="ai-hook-stat-val">{systemData?.systemUptime ?? 'N/A'}</span>
                </div>
                <div className="ai-hook-stat-panel">
                  <span className="ai-hook-stat-label">Active Neural Pipelines</span>
                  <span className="ai-hook-stat-val">{systemData?.activePipelines ?? 0}</span>
                </div>
                <div className="ai-hook-stat-panel">
                  <span className="ai-hook-stat-label">Core Engine</span>
                  <span className="ai-hook-stat-val">{systemData?.neuralCoreVersion ?? 'N/A'}</span>
                </div>
                <div className="ai-hook-stat-panel">
                  <span className="ai-hook-stat-label">Safety Verification</span>
                  <span className="ai-hook-stat-val ai-text-green">
                    {systemData?.safetyCheck ? 'PASSED (STRICT)' : 'FAILED'}
                  </span>
                </div>
              </div>

              <div className="ai-hook-code-block">
                <div className="ai-hook-code-title">TypeScript Generic Signature:</div>
                <pre>
                  <code>
{`// Calling code provides the exact data interface:
const { data, loading, error, refetch } = useFetch<SimulatedApiResponse>('/api/telemetry')

// data is automatically typed as SimulatedApiResponse | null
console.log(data?.systemUptime) // ✨ Auto-completed & type-checked!`}
                  </code>
                </pre>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Toast notifications */}
      <div className="ai-toast-stack">
        {toasts.map(toast => (
          <div key={toast.id} className={`ai-toast-card ai-toast-${toast.type}`}>
            <span className="ai-toast-icon">
              {toast.type === 'ai' ? '🤖' : toast.type === 'success' ? '✅' : 'ℹ️'}
            </span>
            <div className="ai-toast-content">
              <span className="ai-toast-text">{toast.text}</span>
              <span className="ai-toast-time">{toast.timestamp}</span>
            </div>
            <button
              type="button"
              className="ai-toast-close"
              onClick={() => dismissToast(toast.id)}
            >
              ×
            </button>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="ai-footer">
        <div className="ai-footer-inner">
          <p>
            Powered by <strong>React 19 + TypeScript 5.8</strong> • Designed with Futuristic AI Aesthetics
          </p>
          <div className="ai-footer-tags">
            <span className="ai-footer-pill">Zero Type Errors</span>
            <span className="ai-footer-pill">Discriminated Unions</span>
            <span className="ai-footer-pill">Generic Hooks</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
