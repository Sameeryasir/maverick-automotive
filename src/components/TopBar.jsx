import { business } from '../data/businessInfo'

export default function TopBar() {
  return (
    <div className="top-bar">
      <div className="top-bar-inner">
        <a href={business.phoneLink} className="top-bar-item">
          📞 {business.phone}
        </a>
        <span className="top-bar-item top-bar-address">
          📍 {business.fullAddress}
        </span>
        <span className="top-bar-item">{business.hoursSummary}</span>
        <a
          href={business.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="top-bar-social"
          aria-label="Facebook"
        >
          Facebook
        </a>
      </div>
    </div>
  )
}
