import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { business } from '../data/businessInfo'

const LOGO_SRC = '/images/Screenshot_2026-06-20_at_11.18.25_PM-removebg-preview.png'

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <motion.header
      className="site-header"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <a href="#" className="logo-link" aria-label={`${business.name} home`}>
        <img src={LOGO_SRC} alt={business.name} className="site-logo" />
      </a>

      <nav className="site-nav desktop-nav" aria-label="Main navigation">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href}>{link.label}</a>
        ))}
      </nav>

      <a href="#contact" className="header-cta desktop-cta">Schedule Service</a>

      <button
        type="button"
        className="menu-toggle"
        onClick={() => setMenuOpen((open) => !open)}
        aria-expanded={menuOpen}
        aria-label="Toggle menu"
      >
        <span className={`hamburger ${menuOpen ? 'open' : ''}`} />
      </button>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            aria-label="Mobile navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" className="mobile-nav-cta" onClick={() => setMenuOpen(false)}>
              Schedule Service
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
