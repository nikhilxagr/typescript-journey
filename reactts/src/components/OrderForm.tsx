// Chai order form with input validation and price calculation

import { useState, useRef, useMemo } from 'react'
import type { ChangeEvent, FormEvent } from 'react'

export type DeliveryMethod = 'drone-express' | 'hyperloop' | 'standard'
export type SweetnessLevel = 'zero' | 'low' | 'balanced' | 'extra'
export type FormStatus = 'idle' | 'transmitting' | 'confirmed' | 'error'

export interface OrderFormState {
  orderId: string
  customerName: string
  chaiType: string
  quantity: number
  sweetness: SweetnessLevel
  deliveryMethod: DeliveryMethod
  notes: string
  needSpecialThermos: boolean
}

export interface ChaiMenuOption {
  id: string
  name: string
  basePrice: number
}

const CHAI_MENU: ChaiMenuOption[] = [
  { id: 'masala', name: 'Quantum Masala Kadak', basePrice: 35 },
  { id: 'ginger', name: 'Ginger Zest Infusion', basePrice: 25 },
  { id: 'matcha', name: 'Emerald Matcha Mist', basePrice: 55 },
  { id: 'cardamom', name: 'Royal Cardamom Elixir', basePrice: 40 },
  { id: 'kahwa', name: 'Kashmiri Kahwa Amber', basePrice: 65 },
]

const INITIAL_FORM: OrderFormState = {
  orderId: 'ORD-' + Math.floor(1000 + Math.random() * 9000),
  customerName: '',
  chaiType: CHAI_MENU[0].name,
  quantity: 2,
  sweetness: 'balanced',
  deliveryMethod: 'drone-express',
  notes: '',
  needSpecialThermos: true,
}

interface OrderFormProps {
  onSuccessOrder?: (order: OrderFormState, total: number) => void
}

export function OrderForm({ onSuccessOrder }: OrderFormProps) {
  const [form, setForm] = useState<OrderFormState>(INITIAL_FORM)
  const [status, setStatus] = useState<FormStatus>('idle')
  const [copied, setCopied] = useState<boolean>(false)

  const nameInputRef = useRef<HTMLInputElement>(null)

  // Calculate order total based on quantity and extras
  const orderTotal = useMemo<number>(() => {
    const selected = CHAI_MENU.find(c => c.name === form.chaiType) ?? CHAI_MENU[0]
    let total = selected.basePrice * form.quantity
    if (form.deliveryMethod === 'drone-express') total += 15
    if (form.needSpecialThermos) total += 20
    return total
  }, [form])

  // Handle change events for text, select, and checkbox inputs
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ): void => {
    const { name, value, type } = e.target

    setForm(prev => {
      if (type === 'checkbox') {
        const checked = (e.target as HTMLInputElement).checked
        return { ...prev, [name]: checked }
      }
      return {
        ...prev,
        [name]: name === 'quantity' ? Math.max(1, Math.min(50, Number(value))) : value,
      }
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    setStatus('transmitting')

    // Simulate network submission
    setTimeout(() => {
      setStatus('confirmed')
      if (onSuccessOrder) {
        onSuccessOrder(form, orderTotal)
      }

      // Reset form with new order ID
      setForm(prev => ({
        ...INITIAL_FORM,
        orderId: 'ORD-' + Math.floor(1000 + Math.random() * 9000),
        customerName: prev.customerName,
      }))

      nameInputRef.current?.focus()
    }, 1400)
  }

  const handleReset = (): void => {
    setForm({
      ...INITIAL_FORM,
      orderId: 'ORD-' + Math.floor(1000 + Math.random() * 9000),
    })
    setStatus('idle')
  }

  const handleCopyPayload = async () => {
    await navigator.clipboard.writeText(JSON.stringify(form, null, 2))
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="ts-section">
      <div className="ai-section-header">
        <div>
          <h2 className="ts-section-title">📝 Neural Order Terminal</h2>
          <p className="ts-section-sub">
            Strongly typed form state with real-time payload compilation and telemetry.
          </p>
        </div>
        <div className="ai-status-pill">
          <span>Status: <strong>{status.toUpperCase()}</strong></span>
        </div>
      </div>

      {status === 'confirmed' && (
        <div className="ai-alert-banner">
          <div className="ai-alert-icon">⚡</div>
          <div className="ai-alert-body">
            <strong>Order Transmitted &amp; Brewing Activated!</strong>
            <p>Dispatched to drone delivery network. Estimated ETA: 12 minutes.</p>
          </div>
        </div>
      )}

      <div className="ai-order-layout">
        {/* Form Console */}
        <form className="ts-form ai-cyber-form" onSubmit={handleSubmit}>
          <div className="ai-form-row ai-grid-2">
            <div className="ts-form-group">
              <label className="ts-label" htmlFor="orderId">
                <span>Unique Order ID</span>
                <span className="ai-read-only-badge">Auto-assigned</span>
              </label>
              <input
                id="orderId"
                className="ts-input ai-input-readonly"
                value={form.orderId}
                readOnly
              />
            </div>

            <div className="ts-form-group">
              <label className="ts-label" htmlFor="customerName">
                <span>Commander Name</span>
                <span className="ai-required-star">*</span>
              </label>
              <input
                ref={nameInputRef}
                id="customerName"
                name="customerName"
                type="text"
                className="ts-input"
                placeholder="e.g. Nikhil"
                value={form.customerName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="ai-form-row ai-grid-2">
            <div className="ts-form-group">
              <label className="ts-label" htmlFor="chaiType">Selected Formulation</label>
              <select
                id="chaiType"
                name="chaiType"
                className="ts-select"
                value={form.chaiType}
                onChange={handleChange}
              >
                {CHAI_MENU.map(item => (
                  <option key={item.id} value={item.name}>
                    {item.name} (₹{item.basePrice})
                  </option>
                ))}
              </select>
            </div>

            <div className="ts-form-group">
              <label className="ts-label" htmlFor="quantity">
                <span>Batch Quantity</span>
                <span className="ai-sub-info">(1 – 50 cups)</span>
              </label>
              <input
                id="quantity"
                name="quantity"
                type="number"
                min={1}
                max={50}
                className="ts-input"
                value={form.quantity}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="ai-form-row ai-grid-2">
            <div className="ts-form-group">
              <label className="ts-label" htmlFor="sweetness">Sweetness Calibration</label>
              <select
                id="sweetness"
                name="sweetness"
                className="ts-select"
                value={form.sweetness}
                onChange={handleChange}
              >
                <option value="zero">Zero Sugar (Keto)</option>
                <option value="low">Subtle (25% Honey)</option>
                <option value="balanced">Balanced Standard (50%)</option>
                <option value="extra">Desi Kadak Sweet (100% Jaggery)</option>
              </select>
            </div>

            <div className="ts-form-group">
              <label className="ts-label" htmlFor="deliveryMethod">Dispatch Vector</label>
              <select
                id="deliveryMethod"
                name="deliveryMethod"
                className="ts-select"
                value={form.deliveryMethod}
                onChange={handleChange}
              >
                <option value="drone-express">Autonomous Drone (+₹15, 12m)</option>
                <option value="hyperloop">Hyperloop Metro (+₹0, 25m)</option>
                <option value="standard">Ground Courier (+₹0, 45m)</option>
              </select>
            </div>
          </div>

          <div className="ts-form-group">
            <label className="ts-label" htmlFor="notes">Special Thermodynamic Directives</label>
            <textarea
              id="notes"
              name="notes"
              rows={2}
              className="ts-input ts-textarea"
              placeholder="e.g. Extra cracked ginger, simmer for additional 90 seconds..."
              value={form.notes}
              onChange={handleChange}
            />
          </div>

          <div className="ai-checkbox-group">
            <label className="ai-checkbox-label">
              <input
                type="checkbox"
                name="needSpecialThermos"
                checked={form.needSpecialThermos}
                onChange={handleChange}
                className="ai-cyber-checkbox"
              />
              <span>Include Vacuum Thermal Insulated Cyber-Flask (+₹20)</span>
            </label>
          </div>

          {/* Form Actions & Total Summary */}
          <div className="ai-form-footer">
            <div className="ai-live-price">
              <span className="ai-price-label">Calculated Total:</span>
              <span className="ai-price-val">₹{orderTotal.toFixed(2)}</span>
            </div>

            <div className="ts-form-actions">
              <button
                type="button"
                className="ts-btn ts-btn-ghost"
                onClick={handleReset}
              >
                Reset
              </button>
              <button
                type="submit"
                className="ts-btn ai-submit-glow-btn"
                disabled={status === 'transmitting'}
              >
                {status === 'transmitting' ? (
                  <>
                    <span className="ai-btn-spinner" /> Routing Packet...
                  </>
                ) : (
                  <>🚀 Transmit Order</>
                )}
              </button>
            </div>
          </div>
        </form>

        {/* Live Payload Stream Inspector */}
        <div className="ai-payload-inspector">
          <div className="ai-inspector-header">
            <span className="ai-inspector-title">⚡ Live Payload Stream</span>
            <button
              type="button"
              className="ai-copy-btn-sm"
              onClick={handleCopyPayload}
            >
              {copied ? '✓ Copied' : 'Copy JSON'}
            </button>
          </div>

          <pre className="ai-json-view">
            <code>{JSON.stringify(form, null, 2)}</code>
          </pre>

          <div className="ai-payload-meta">
            <span>Payload Size: ~{JSON.stringify(form).length} bytes</span>
            <span>Schema: Validated</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OrderForm
