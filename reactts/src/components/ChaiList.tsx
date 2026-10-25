// ──────────────────────────────────────────────────────────────────────────────
// ChaiList.tsx — Demonstrates: Array types, typed objects, .map() with index,
//                and rendering a list of typed components
// ──────────────────────────────────────────────────────────────────────────────

import React from 'react'
import { ChaiCard } from './ChaiCard'

// 1️⃣  Define the shape of a single chai item using an interface
interface ChaiItem {
  id: number
  name: string
  price: number
  isSpecial?: boolean
  origin?: string
}

// 2️⃣  Static typed array — TypeScript enforces every object matches ChaiItem
const CHAI_LIST: ChaiItem[] = [
  { id: 1, name: 'Masala Chai',   price: 30,  isSpecial: true,  origin: 'India'     },
  { id: 2, name: 'Ginger Chai',   price: 25,  isSpecial: false, origin: 'Sri Lanka' },
  { id: 3, name: 'Green Tea',     price: 45,  isSpecial: true,  origin: 'Darjeeling'},
  { id: 4, name: 'Cardamom Chai', price: 35,  isSpecial: false, origin: 'Kerala'    },
]

// 3️⃣  Component — returns JSX.Element (explicit return type annotation)
const ChaiList: React.FC = (): React.JSX.Element => {
  return (
    <section className="ts-section">
      <h2 className="ts-section-title">☕ Chai Menu</h2>
      <p className="ts-section-sub">TypeScript ensures every item has the correct shape.</p>

      <div className="ts-grid">
        {/* Mapping over a typed array — `chai` is automatically inferred as ChaiItem */}
        {CHAI_LIST.map((chai: ChaiItem) => (
          <ChaiCard
            key={chai.id}
            name={chai.name}
            price={chai.price}
            isSpecial={chai.isSpecial}
            origin={chai.origin}
          />
        ))}
      </div>

      {/* Derived typed value */}
      <p className="ts-total">
        Total items: <strong>{CHAI_LIST.length}</strong> | Special items:{' '}
        <strong>{CHAI_LIST.filter(c => c.isSpecial).length}</strong>
      </p>
    </section>
  )
}

export default ChaiList
