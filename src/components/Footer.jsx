import { business } from '../data/businessInfo'

const LOGO_SRC = '/images/footer-logo.png'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-col">
          <img src={LOGO_SRC} alt={business.name} className="footer-logo" />
          <p className="footer-tagline">
            Your local go-to for honest automotive repair in Liberal, KS.
          </p>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#reviews">Reviews</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <p>{business.fullAddress}</p>
          <p><a href={business.phoneLink}>{business.phone}</a></p>
          <p><a href={business.emailLink}>{business.email}</a></p>
          <p><a href={business.facebook} target="_blank" rel="noopener noreferrer">Facebook</a></p>
        </div>

        <div className="footer-col">
          <h4>Hours</h4>
          <ul className="footer-hours">
            {business.hours.slice(0, 5).map((row) => (
              <li key={row.day}>{row.day}: {row.time}</li>
            ))}
            <li>Sat–Sun: Closed</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {year} {business.name}. All Rights Reserved.</p>
      </div>
    </footer>
  )
}
