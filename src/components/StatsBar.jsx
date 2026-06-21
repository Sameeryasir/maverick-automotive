import { motion } from 'framer-motion'
import { business } from '../data/businessInfo'

export default function StatsBar() {
  return (
    <section className="stats-bar" aria-label="Shop highlights">
      <div className="stats-inner">
        {business.stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="stat-item"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, type: 'spring', stiffness: 120 }}
          >
            <motion.span
              className="stat-value"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
            >
              {stat.value}
            </motion.span>
            <span className="stat-label">{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
