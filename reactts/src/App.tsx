import React, { useState } from 'react'
import Card      from './components/Card'
import Counter   from './components/Counter'
import ChaiList  from './components/ChaiList'
import OrderForm from './components/OrderForm'
import './App.css'

// Tab union type — only these exact strings are valid
type Tab = 'card' | 'counter' | 'chaiList' | 'orderForm'

interface TabConfig {
  id: Tab
  label: string
  emoji: string
}

const TABS: TabConfig[] = [
  { id: 'card',      label: 'Typed Props',   emoji: '🃏' },
  { id: 'counter',   label: 'useState',      emoji: '🔢' },
  { id: 'chaiList',  label: 'Typed Arrays',  emoji: '☕' },
  { id: 'orderForm', label: 'Forms & Refs',  emoji: '📝' },
]

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('card')

  const handleCardClick = (): void => {
    alert('Card clicked! — onClick is typed as () => void')
  }

  return (
    <div className="app-wrapper">
      {/* ── Header ── */}
      <header className="app-header">
        <div className="app-header-inner">
          <h1 className="app-title">
            <span className="ts-badge ts-badge-blue">TS</span>
            React + TypeScript Examples
          </h1>
          <p className="app-subtitle">
            Each tab demonstrates a different TypeScript concept in React
          </p>
        </div>
      </header>

      {/* ── Tab Navigation ── */}
      <nav className="ts-tabs">
        {TABS.map(tab => (
          <button
            key={tab.id}
            className={`ts-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
            type="button"
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.emoji} {tab.label}
          </button>
        ))}
      </nav>

      {/* ── Tab Content ── */}
      <main className="app-content">
        {activeTab === 'card' && (
          <section className="ts-section">
            <h2 className="ts-section-title">🃏 Typed Props (interface)</h2>
            <p className="ts-section-sub">
              <code>interface CardProps</code> — required, optional, and callback props.
            </p>
            <div className="ts-grid">
              <Card
                title="Basic Card"
                description="This card has no optional props. TypeScript ensures they are not required."
              />
              <Card
                title="Card with Badge"
                description="The `badge` prop is optional (badge?: string). Here it has a value."
                badge="New"
              />
              <Card
                title="Interactive Card"
                description="The `onClick` prop is typed as () => void. Click it!"
                badge="Click me"
                onClick={handleCardClick}
              />
            </div>
          </section>
        )}

        {activeTab === 'counter' && (
          <section className="ts-section">
            <h2 className="ts-section-title">🔢 useState with Generics</h2>
            <p className="ts-section-sub">
              <code>useState&lt;number&gt;</code>, union types for step, typed event handlers.
            </p>
            <div className="ts-grid ts-grid-2">
              <Counter label="Counter A" initialValue={0}  />
              <Counter label="Counter B" initialValue={10} />
            </div>
          </section>
        )}

        {activeTab === 'chaiList' && <ChaiList />}

        {activeTab === 'orderForm' && <OrderForm />}
      </main>
    </div>
  )
}

export default App
