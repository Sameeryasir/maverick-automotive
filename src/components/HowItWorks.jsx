import { motion } from 'framer-motion'

const steps = [
  {
    step: '01',
    title: 'Call or Message Us',
    text: 'Reach out by phone, contact form, or walk in. Tell us what your vehicle needs.',
  },
  {
    step: '02',
    title: 'We Diagnose & Quote',
    text: 'Our team inspects your vehicle and gives you a clear, honest estimate before any work.',
  },
  {
    step: '03',
    title: 'Drive Away Fixed',
    text: 'We complete the repair with quality parts and get you back on the road safely.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="how-section">
      <motion.div
        className="how-header"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="section-label">Simple Process</span>
        <h2>How It Works</h2>
        <p>Getting your vehicle serviced is easy in three steps.</p>
      </motion.div>

      <div className="how-steps">
        {steps.map((item, i) => (
          <motion.div
            key={item.step}
            className="how-step"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
          >
            <motion.span
              className="how-step-num"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              {item.step}
            </motion.span>
            <div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
            {i < steps.length - 1 && <div className="how-connector" aria-hidden="true" />}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
