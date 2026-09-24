import Icon from './Icon'

/**
 * Compact payment method marks shown under the registration button.
 * Inline SVG wordmarks, no images.
 */
export default function PaymentMethods() {
  return (
    <div className="form-payments" role="list" aria-label="Supported payment methods">
      <span className="form-payments__item" role="listitem">
        <svg viewBox="0 0 42 14" width="42" height="14" aria-hidden="true">
          <text
            x="0"
            y="12"
            fontFamily="Arial, sans-serif"
            fontSize="14"
            fontWeight="800"
            fontStyle="italic"
            letterSpacing="-0.5"
            fill="#1a1f71"
          >
            VISA
          </text>
        </svg>
      </span>

      <span className="form-payments__item" role="listitem">
        <svg viewBox="0 0 34 20" width="26" height="15" aria-hidden="true">
          <circle cx="13" cy="10" r="9" fill="#eb001b" />
          <circle cx="21" cy="10" r="9" fill="#f79e1b" opacity="0.85" />
        </svg>
      </span>

      <span className="form-payments__item" role="listitem">
        <svg viewBox="0 0 48 14" width="48" height="14" aria-hidden="true">
          <text
            x="0"
            y="12"
            fontFamily="Arial, sans-serif"
            fontSize="14"
            fontWeight="800"
            fontStyle="italic"
            fill="#003087"
          >
            Pay
          </text>
          <text
            x="24"
            y="12"
            fontFamily="Arial, sans-serif"
            fontSize="14"
            fontWeight="800"
            fontStyle="italic"
            fill="#009cde"
          >
            Pal
          </text>
        </svg>
      </span>

      <span className="form-payments__item" role="listitem">
        <svg viewBox="0 0 40 16" width="40" height="16" aria-hidden="true">
          <rect x="0" y="0" width="15" height="15" rx="3.5" fill="#000000" />
          <text
            x="7.5"
            y="12"
            textAnchor="middle"
            fontFamily="Arial, sans-serif"
            fontSize="11"
            fontWeight="700"
            fill="#ffffff"
          >
            G
          </text>
          <text x="18" y="12" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="700" fill="#5f6368">
            Pay
          </text>
        </svg>
      </span>

      <span className="form-payments__item" role="listitem" aria-label="Bank transfer">
        <Icon name="bank" size={16} strokeWidth={2} />
      </span>
    </div>
  )
}
