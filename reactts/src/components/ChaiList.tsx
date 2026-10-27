// Chai catalog list with search and filtering

import { useState, useMemo } from 'react'
import { ChaiCard } from './ChaiCard'

export interface ChaiItem {
  id: number
  name: string
  price: number
  isSpecial?: boolean
  origin?: string
  rating?: number
  spiciness?: 1 | 2 | 3
  tags?: string[]
}

export type ChaiFilter = 'all' | 'special' | 'budget' | 'spicy'

const CHAI_DATABASE: ChaiItem[] = [
  {
    id: 1,
    name: 'Quantum Masala Kadak',
    price: 35,
    isSpecial: true,
    origin: 'Assam High-Lands',
    rating: 4.95,
    spiciness: 3,
    tags: ['Cardamom', 'Ginger', 'Black Pepper'],
  },
  {
    id: 2,
    name: 'Ginger Zest Infusion',
    price: 25,
    isSpecial: false,
    origin: 'Wayanad, Kerala',
    rating: 4.75,
    spiciness: 2,
    tags: ['Fresh Ginger', 'Lemon Grass'],
  },
  {
    id: 3,
    name: 'Emerald Matcha Mist',
    price: 55,
    isSpecial: true,
    origin: 'Darjeeling Estate',
    rating: 4.9,
    spiciness: 1,
    tags: ['Antioxidant', 'First Flush'],
  },
  {
    id: 4,
    name: 'Royal Cardamom Elixir',
    price: 40,
    isSpecial: true,
    origin: 'Idukki Hills',
    rating: 4.85,
    spiciness: 2,
    tags: ['Green Elaichi', 'Saffron'],
  },
  {
    id: 5,
    name: 'Kashmiri Kahwa Amber',
    price: 65,
    isSpecial: true,
    origin: 'Kashmir Valley',
    rating: 4.98,
    spiciness: 1,
    tags: ['Almonds', 'Kashmir Saffron', 'Cinnamon'],
  },
  {
    id: 6,
    name: 'Classic Tapri Chai',
    price: 20,
    isSpecial: false,
    origin: 'Mumbai Streets',
    rating: 4.8,
    spiciness: 2,
    tags: ['Full Body', 'Robust CTC'],
  },
]

interface ChaiListProps {
  onOrderBrew?: (name: string, price: number) => void
}

export function ChaiList({ onOrderBrew }: ChaiListProps) {
  const [filter, setFilter] = useState<ChaiFilter>('all')
  const [searchQuery, setSearchQuery] = useState<string>('')

  // Type-safe filtering using useMemo
  const filteredChai = useMemo<ChaiItem[]>(() => {
    return CHAI_DATABASE.filter(item => {
      // Matches search term
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.origin && item.origin.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (item.tags && item.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())))

      if (!matchesSearch) return false

      // Matches filter tab
      if (filter === 'special') return !!item.isSpecial
      if (filter === 'budget') return item.price <= 30
      if (filter === 'spicy') return (item.spiciness ?? 0) >= 2
      return true
    })
  }, [filter, searchQuery])

  // Derived statistics with typed array methods
  const averagePrice = useMemo<number>(() => {
    if (filteredChai.length === 0) return 0
    const sum = filteredChai.reduce((acc, curr) => acc + curr.price, 0)
    return Math.round((sum / filteredChai.length) * 10) / 10
  }, [filteredChai])

  return (
    <section className="ts-section">
      <div className="ai-section-header">
        <div>
          <h2 className="ts-section-title">☕ Chai Matrix &amp; Synthesizer Menu</h2>
          <p className="ts-section-sub">
            Demonstrates <code>ChaiItem[]</code> strongly typed arrays, Array methods, and reactive filters.
          </p>
        </div>
        <div className="ai-stat-pill">
          <span>Catalog: <strong>{CHAI_DATABASE.length} blends</strong></span>
        </div>
      </div>

      {/* Search and filter controls */}
      <div className="ai-filter-bar">
        <div className="ai-search-box">
          <span className="ai-search-icon">🔍</span>
          <input
            type="text"
            className="ai-search-input"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search by blend name, origin, or ingredient (e.g. Saffron)..."
          />
          {searchQuery && (
            <button
              type="button"
              className="ai-clear-btn"
              onClick={() => setSearchQuery('')}
            >
              ×
            </button>
          )}
        </div>

        <div className="ai-filter-tabs">
          <button
            type="button"
            className={`ai-filter-tab ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Blends ({CHAI_DATABASE.length})
          </button>
          <button
            type="button"
            className={`ai-filter-tab ${filter === 'special' ? 'active' : ''}`}
            onClick={() => setFilter('special')}
          >
            ⭐ Special Reserve
          </button>
          <button
            type="button"
            className={`ai-filter-tab ${filter === 'budget' ? 'active' : ''}`}
            onClick={() => setFilter('budget')}
          >
            💰 Budget Friendly (≤₹30)
          </button>
          <button
            type="button"
            className={`ai-filter-tab ${filter === 'spicy' ? 'active' : ''}`}
            onClick={() => setFilter('spicy')}
          >
            🌶️ Kadak Spicy
          </button>
        </div>
      </div>

      {/* Chai cards grid */}
      {filteredChai.length > 0 ? (
        <div className="ts-grid">
          {filteredChai.map((chai: ChaiItem) => (
            <ChaiCard
              key={chai.id}
              name={chai.name}
              price={chai.price}
              isSpecial={chai.isSpecial}
              origin={chai.origin}
              rating={chai.rating}
              spiciness={chai.spiciness}
              tags={chai.tags}
              onOrder={onOrderBrew}
            />
          ))}
        </div>
      ) : (
        <div className="ai-empty-state">
          <span className="ai-empty-icon">☕</span>
          <h4>No chai blends found</h4>
          <p>Try resetting the search query or changing active filter.</p>
          <button
            type="button"
            className="ts-btn ts-btn-secondary"
            onClick={() => {
              setSearchQuery('')
              setFilter('all')
            }}
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Summary status bar */}
      <div className="ai-telemetry-bar">
        <div className="ai-telemetry-stat">
          <span className="ai-tlabel">Active Filter:</span>
          <span className="ai-tvalue"><code>{filter.toUpperCase()}</code></span>
        </div>
        <div className="ai-telemetry-stat">
          <span className="ai-tlabel">Visible Items:</span>
          <span className="ai-tvalue">{filteredChai.length} / {CHAI_DATABASE.length}</span>
        </div>
        <div className="ai-telemetry-stat">
          <span className="ai-tlabel">Average Price:</span>
          <span className="ai-tvalue">₹{averagePrice.toFixed(2)}</span>
        </div>
        <div className="ai-telemetry-stat">
          <span className="ai-tlabel">Type Safety:</span>
          <span className="ai-tvalue ai-text-green">100% Inferred</span>
        </div>
      </div>
    </section>
  )
}

export default ChaiList
