// ──────────────────────────────────────────────────────────────────────────────
// Counter.tsx — Demonstrates: useState with explicit TypeScript generics,
//               typed event handlers, and union types
// ──────────────────────────────────────────────────────────────────────────────

import React, { useState } from 'react'

// Union type — step can only be one of these specific numbers
type Step = 1 | 2 | 5 | 10

interface CounterProps {
  initialValue?: number   // optional — defaults to 0
  label?: string
}

const Counter: React.FC<CounterProps> = ({ initialValue = 0, label = 'Counter' }) => {
  // useState<number> — TypeScript knows `count` is always a number
  const [count, setCount] = useState<number>(initialValue)
  const [step, setStep]   = useState<Step>(1)

  // Typed event handler: React.MouseEvent<HTMLButtonElement>
  const handleIncrement = (_e: React.MouseEvent<HTMLButtonElement>): void => {
    setCount(prev => prev + step)
  }

  const handleDecrement = (_e: React.MouseEvent<HTMLButtonElement>): void => {
    setCount(prev => prev - step)
  }

  const handleReset = (): void => setCount(initialValue)

  // Typed change handler for <select>
  const handleStepChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setStep(Number(e.target.value) as Step)
  }

  return (
    <div className="ts-counter">
      <h3 className="ts-card-title">{label}</h3>

      <div className="ts-counter-display">
        <span className={`ts-count-value ${count < 0 ? 'negative' : count > 0 ? 'positive' : ''}`}>
          {count}
        </span>
      </div>

      <div className="ts-counter-controls">
        <button className="ts-btn ts-btn-secondary" type="button" onClick={handleDecrement}>− {step}</button>
        <button className="ts-btn ts-btn-ghost"    type="button" onClick={handleReset}>Reset</button>
        <button className="ts-btn"                 type="button" onClick={handleIncrement}>+ {step}</button>
      </div>

      <label className="ts-label">
        Step size:&nbsp;
        <select className="ts-select" value={step} onChange={handleStepChange}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={5}>5</option>
          <option value={10}>10</option>
        </select>
      </label>
    </div>
  )
}

export default Counter
