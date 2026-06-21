import { motion } from 'framer-motion'

export default function SectionHeader({ label, title, subtitle, variant = 'default' }) {
  return (
    <motion.div
      className={`section-header section-header--${variant}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <span className="section-label">{label}</span>
      <h2>{title}</h2>
      <motion.div
        className="section-header-line"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      />
      {subtitle && <p>{subtitle}</p>}
    </motion.div>
  )
}
