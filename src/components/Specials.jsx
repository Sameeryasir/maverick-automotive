import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'

const specials = [
  {
    title: '$25 Off Oil Change',
    description: 'Full synthetic or conventional oil change with multi-point inspection.',
    code: 'OIL25',
  },
  {
    title: 'Free Brake Inspection',
    description: 'Complimentary brake check with any service. No obligation.',
    code: 'BRAKE-FREE',
  },
  {
    title: '10% Off First Visit',
    description: 'New customers save 10% on their first repair service.',
    code: 'WELCOME10',
  },
]

export default function Specials() {
  return (
    <section id="specials" className="specials-section">
      <SectionHeader
        variant="light"
        label="Save Today"
        title="Coupons & Specials"
        subtitle="Save on quality auto care — mention the offer when you call"
      />

      <div className="specials-grid">
        {specials.map((special, i) => (
          <motion.article
            key={special.title}
            className="special-card"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            whileHover={{ y: -4 }}
          >
            <h3>{special.title}</h3>
            <p>{special.description}</p>
            <span className="special-code">Code: {special.code}</span>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
