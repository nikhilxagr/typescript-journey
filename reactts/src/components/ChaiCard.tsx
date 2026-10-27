// Card component to display single chai item details

export interface ChaiCardProps {
  id?: number
  name: string
  price: number
  isSpecial?: boolean
  origin?: string
  rating?: number
  spiciness?: 1 | 2 | 3
  tags?: string[]
  onOrder?: (name: string, price: number) => void
}

export function ChaiCard({
  name,
  price,
  isSpecial = false,
  origin,
  rating = 4.8,
  spiciness = 2,
  tags = ['Aromatic', 'Artisan'],
  onOrder,
}: ChaiCardProps) {
  const spiceDots = '🌶️'.repeat(spiciness)

  return (
    <article className={`ts-card ai-chai-card ${isSpecial ? 'ai-chai-special' : ''}`}>
      <div className="ai-chai-badge-row">
        <span className="ai-chai-origin">📍 {origin ?? 'Himalayan Foothills'}</span>
        {isSpecial && <span className="ts-badge ts-badge-gold">⭐ Reserve Brew</span>}
      </div>

      <div className="ai-chai-header">
        <h3 className="ai-chai-name">🍵 {name}</h3>
        <span className="ai-chai-rating">★ {rating.toFixed(1)}</span>
      </div>

      <div className="ai-chai-tags">
        {tags.map((tag, idx) => (
          <span key={idx} className="ai-tag-chip">
            {tag}
          </span>
        ))}
      </div>

      <div className="ai-chai-details">
        <div className="ai-detail-item">
          <span className="ai-detail-label">Spice Matrix</span>
          <span className="ai-detail-value">{spiceDots}</span>
        </div>
        <div className="ai-detail-item">
          <span className="ai-detail-label">Price</span>
          <span className="ai-chai-price">
            ₹{price.toFixed(2)}
            <span className="ai-credit-sub"> / {(price * 1.2).toFixed(0)} credits</span>
          </span>
        </div>
      </div>

      {onOrder && (
        <button
          className="ts-btn ai-brew-btn"
          type="button"
          onClick={() => onOrder(name, price)}
        >
          <span>Synthesize Brew</span>
          <span className="ai-brew-icon">⚡</span>
        </button>
      )}
    </article>
  )
}

export default ChaiCard
