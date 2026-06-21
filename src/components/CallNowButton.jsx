import { motion } from 'framer-motion'
import { business } from '../data/businessInfo'

export default function CallNowButton() {
  return (
    <motion.a
      href={business.phoneLink}
      className="call-now-btn"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Call ${business.phone}`}
    >
      <span className="call-now-icon">📞</span>
      <span className="call-now-text">Call Now</span>
    </motion.a>
  )
}
