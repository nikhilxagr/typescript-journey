// ──────────────────────────────────────────────────────────────────────────────
// OrderForm.tsx — Demonstrates: useRef, useState with object type, typed form
//                events, and controlled inputs
// ──────────────────────────────────────────────────────────────────────────────

import React, { useState, useRef } from 'react'

// 1️⃣  Interface for the form state — strongly typed object
interface OrderFormState {
  customerName: string
  chaiType: string
  quantity: number
  notes: string
}

// 2️⃣  Union type for possible form statuses
type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

const CHAI_OPTIONS = ['Masala Chai', 'Ginger Chai', 'Green Tea', 'Cardamom Chai']

// Initial state satisfies the OrderFormState interface
const INITIAL_STATE: OrderFormState = {
  customerName: '',
  chaiType: CHAI_OPTIONS[0],
  quantity: 1,
  notes: '',
}

const OrderForm: React.FC = () => {
  // useState with a typed object
  const [form,   setForm]   = useState<OrderFormState>(INITIAL_STATE)
  const [status, setStatus] = useState<FormStatus>('idle')

  // useRef typed to an HTML element
  const nameInputRef = useRef<HTMLInputElement>(null)

  // Generic handler — works for text, number, select inputs
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target
    setForm(prev => ({
      ...prev,
      // Cast quantity to number when the field is `quantity`
      [name]: name === 'quantity' ? Number(value) : value,
    }))
  }

  // Typed submit handler
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    setStatus('submitting')

    // Simulate async submission (e.g., API call)
    setTimeout(() => {
      setStatus('success')
      setForm(INITIAL_STATE)
      nameInputRef.current?.focus()   // optional chaining on the ref
    }, 1200)
  }

  const handleReset = (): void => {
    setForm(INITIAL_STATE)
    setStatus('idle')
  }

  return (
    <section className="ts-section">
      <h2 className="ts-section-title">📝 Order Form</h2>
      <p className="ts-section-sub">Controlled inputs with TypeScript typed state &amp; events.</p>

      {status === 'success' && (
        <div className="ts-alert ts-alert-success">
          ✅ Order placed! Check the console for the typed data.
        </div>
      )}

      <form className="ts-form" onSubmit={handleSubmit}>
        {/* Controlled text input */}
        <div className="ts-form-group">
          <label className="ts-label" htmlFor="customerName">Your Name</label>
          <input
            ref={nameInputRef}
            id="customerName"
            className="ts-input"
            type="text"
            name="customerName"
            value={form.customerName}
            onChange={handleChange}
            placeholder="e.g. Nikhil"
            required
          />
        </div>

        {/* Typed select */}
        <div className="ts-form-group">
          <label className="ts-label" htmlFor="chaiType">Chai Type</label>
          <select
            id="chaiType"
            className="ts-select"
            name="chaiType"
            value={form.chaiType}
            onChange={handleChange}
          >
            {CHAI_OPTIONS.map(opt => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>

        {/* Numeric input */}
        <div className="ts-form-group">
          <label className="ts-label" htmlFor="quantity">Quantity</label>
          <input
            id="quantity"
            className="ts-input"
            type="number"
            name="quantity"
            value={form.quantity}
            onChange={handleChange}
            min={1}
            max={20}
          />
        </div>

        {/* Textarea */}
        <div className="ts-form-group">
          <label className="ts-label" htmlFor="notes">Special Notes</label>
          <textarea
            id="notes"
            className="ts-input ts-textarea"
            name="notes"
            value={form.notes}
            onChange={handleChange}
            placeholder="Extra ginger, less sugar…"
            rows={3}
          />
        </div>

        <div className="ts-form-actions">
          <button
            className="ts-btn ts-btn-ghost"
            type="button"
            onClick={handleReset}
          >
            Reset
          </button>
          <button
            className="ts-btn"
            type="submit"
            disabled={status === 'submitting'}
          >
            {status === 'submitting' ? 'Placing order…' : 'Place Order 🍵'}
          </button>
        </div>
      </form>

      {/* Live preview — only useful data thanks to TypeScript types */}
      <div className="ts-preview">
        <h4>Live State Preview</h4>
        <pre>{JSON.stringify(form, null, 2)}</pre>
        <p>Form status: <code>{status}</code></p>
      </div>
    </section>
  )
}

export default OrderForm
