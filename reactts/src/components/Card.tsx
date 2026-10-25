// ──────────────────────────────────────────────────────────────────────────────
// Card.tsx — Demonstrates: TypeScript interfaces for props, optional props,
//            and React.FC type annotation
// ──────────────────────────────────────────────────────────────────────────────

import React from 'react'

// 1️⃣  Define a TypeScript interface for the component's props
interface CardProps {
  title: string           // required
  description: string     // required
  badge?: string          // optional  (note the `?`)
  onClick?: () => void    // optional callback — typed as a function returning void
}

// 2️⃣  React.FC<CardProps> tells TypeScript exactly what props this component accepts
const Card: React.FC<CardProps> = ({ title, description, badge, onClick }) => {
  return (
    <div className="ts-card" onClick={onClick} style={{ cursor: onClick ? 'pointer' : 'default' }}>
      {/* Conditional rendering — badge is only shown when it exists */}
      {badge && <span className="ts-badge">{badge}</span>}
      <h3 className="ts-card-title">{title}</h3>
      <p className="ts-card-desc">{description}</p>
      {onClick && (
        <button className="ts-btn" type="button">
          Click me →
        </button>
      )}
    </div>
  )
}

export default Card
