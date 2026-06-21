import { motion } from 'framer-motion'
import { business } from '../data/businessInfo'
import SectionHeader from './SectionHeader'

export default function About() {
  return (
    <section id="about" className="about-section">
      <SectionHeader
        label="Meet the Shop"
        title="Welcome to Maverick Automotive"
        subtitle="Your local auto experts in Liberal, Kansas"
      />

      <div className="about-inner">
        <motion.div
          className="about-images"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="/images/hero.png"
            alt="Maverick Automotive shop exterior in Liberal, KS"
            className="about-image"
          />
          <img
            src="/images/hero-2.png"
            alt="Maverick Automotive shop entrance and service bay"
            className="about-image"
          />
        </motion.div>

        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p>
            {business.name} is the local go-to for all automotive repairs in Liberal, Kansas.
            We're more than mechanics — we're neighbors who care about keeping Southwest Kansas
            on the road. Whether you drive a daily commuter or a weekend toy, every vehicle gets
            treated with the same care and attention.
          </p>
          <p>
            We offer custom work, lift kits, performance upgrades, and light-duty diesel repair.
            Our team specializes in honest diagnostics, quality repairs, and getting you back
            on the road safely — with straight answers and fair pricing every time.
          </p>
          <ul className="about-highlights">
            <li>✓ Honest diagnostics — no unnecessary repairs</li>
            <li>✓ Custom automotive & off-road work</li>
            <li>✓ Daily drivers to performance builds</li>
            <li>✓ Locally owned and operated</li>
          </ul>
          <motion.a
            href="#contact"
            className="about-btn"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
          >
            Visit Our Shop
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
