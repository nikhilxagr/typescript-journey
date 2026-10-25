// ──────────────────────────────────────────────────────────────────────────────
// ChaiCard.tsx — Demonstrates: TypeScript interface with default prop values
//               and typed props (proper TS upgrade of the original file)
// ──────────────────────────────────────────────────────────────────────────────

import React from 'react'

// Strongly-typed interface replaces untyped destructured params
interface ChaiCardProps {
  name: string
  price: number           // `number` instead of `any`
  isSpecial?: boolean     // optional with a default below
  origin?: string         // bonus typed optional prop
}

export function ChaiCard({ name, price, isSpecial = false, origin }: ChaiCardProps) {
  return (
    <article className="ts-card">
      <div className="ts-card-header">
        <h3 className="ts-card-title">🍵 {name}</h3>
        {isSpecial && <span className="ts-badge ts-badge-gold">⭐ Special</span>}
      </div>

      {origin && (
        <p className="ts-card-origin">Origin: <strong>{origin}</strong></p>
      )}

      <p className="ts-card-desc">
        Price: <strong>₹{price.toFixed(2)}</strong>
        {/* .toFixed(2) only works because TypeScript guarantees `price` is a number */}
      </p>
    </article>
  )
}
