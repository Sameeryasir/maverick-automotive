import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeader from './SectionHeader'

const faqs = [
  {
    q: 'Do I need an appointment?',
    a: 'Walk-ins are welcome, but we recommend calling ahead to schedule so we can get you in faster.',
  },
  {
    q: 'What types of vehicles do you work on?',
    a: 'We work on daily drivers, trucks, SUVs, off-road vehicles, and weekend toys. We also handle custom work and lift kits.',
  },
  {
    q: 'Do you offer warranties on repairs?',
    a: 'Yes — most repairs come with a warranty on parts and labor. Ask us for details on your specific service.',
  },
  {
    q: 'How long will my repair take?',
    a: 'It depends on the job. Simple maintenance can be done same-day. Larger repairs may take a few days. We always keep you informed.',
  },
  {
    q: 'Do you work on diesel vehicles?',
    a: 'Yes, we offer light-duty diesel repair and maintenance.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="faq" className="faq-section">
      <SectionHeader
        label="Got Questions"
        title="Frequently Asked Questions"
        subtitle="Quick answers to common questions"
      />

      <div className="faq-list">
        {faqs.map((faq, i) => (
          <div key={faq.q} className="faq-item">
            <button
              type="button"
              className="faq-question"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              aria-expanded={openIndex === i}
            >
              {faq.q}
              <span className="faq-icon">{openIndex === i ? '−' : '+'}</span>
            </button>
            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  className="faq-answer"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <p>{faq.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  )
}
