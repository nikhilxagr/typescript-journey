// Card component demonstrating typed props and optional callbacks

import type { FC } from 'react'

export interface CardProps {
  title: string
  description: string
  badge?: string
  category?: string
  codeSnippet?: string
  onClick?: () => void
}

export const Card: FC<CardProps> = ({
  title,
  description,
  badge,
  category = 'TypeScript Interface',
  codeSnippet,
  onClick,
}) => {
  return (
    <div
      className={`ts-card ai-glass-card ${onClick ? 'ts-card-interactive' : ''}`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={e => {
        if (onClick && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault()
          onClick()
        }
      }}
    >
      {/* Top accent highlight */}
      <div className="ai-card-glow-bar" />

      <div className="ts-card-header">
        <span className="ai-card-category">{category}</span>
        {badge && <span className="ts-badge ai-badge-glow">{badge}</span>}
      </div>

      <h3 className="ts-card-title">{title}</h3>
      <p className="ts-card-desc">{description}</p>

      {codeSnippet && (
        <div className="ai-code-mini">
          <code>{codeSnippet}</code>
        </div>
      )}

      {onClick && (
        <div className="ts-card-action">
          <button className="ts-btn ts-btn-sm ai-interactive-btn" type="button">
            <span>Execute Action</span>
            <span className="ai-arrow-icon">→</span>
          </button>
        </div>
      )}
    </div>
  )
}

export default Card
