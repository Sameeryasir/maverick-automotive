import { motion } from 'framer-motion'

const reasons = [
  {
    icon: '🛡️',
    title: 'Honest Diagnostics',
    text: 'We tell you what actually needs fixing — no unnecessary upsells or hidden fees.',
  },
  {
    icon: '🔧',
    title: 'Full-Service Shop',
    text: 'From oil changes to transmission work, custom lift kits, and light-duty diesel.',
  },
  {
    icon: '🚙',
    title: 'Custom & Off-Road',
    text: 'Lift kits, performance upgrades, and builds for trucks and weekend toys.',
  },
  {
    icon: '🏠',
    title: 'Locally Owned',
    text: 'Proudly serving Liberal and Southwest Kansas with hometown service.',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="why-section">
      <motion.div
        className="why-header"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-label">Why Maverick</span>
        <h2>Why Choose Us</h2>
        <p>Trusted automotive repair built on honesty, skill, and local pride.</p>
      </motion.div>

      <div className="why-grid">
        {reasons.map((item, i) => (
          <motion.article
            key={item.title}
            className="why-card"
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            whileHover={{ y: -6, scale: 1.02 }}
          >
            <span className="why-icon" aria-hidden="true">{item.icon}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
