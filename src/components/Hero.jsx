import { motion } from 'framer-motion'
import { business } from '../data/businessInfo'

export default function Hero() {
  return (
    <section className="hero-section">
      <img
        src="/images/hero.png"
        alt="Maverick Automotive shop exterior in Liberal, KS"
        className="hero-image"
      />
      <div className="hero-overlay" aria-hidden="true" />

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <p className="hero-eyebrow">Reliable Auto Repair in Liberal, KS</p>
        <h1>Honest Service, Quality Repairs — Every Time</h1>
        <p className="hero-text">
          {business.name} is your local go-to for all automotive repairs.
          From daily drivers to weekend toys — custom work, lift kits, and more.
        </p>
        <motion.a
          href="#contact"
          className="hero-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          Schedule Your Service Today
        </motion.a>
      </motion.div>
    </section>
  )
}
