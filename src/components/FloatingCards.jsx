import { motion } from 'framer-motion'

const services = [
  {
    title: 'Scheduled Maintenance',
    description: 'Oil changes, tune-ups, and preventative inspections to keep your car running smoothly.',
    image: '/images/scheduled-maintenance.jpg',
    imageAlt: 'Technicians performing scheduled maintenance inspection',
  },
  {
    title: 'A/C Service & Repair',
    description: 'Expert air conditioning repair and recharging for peak cooling performance.',
    image: '/images/ac-service.jpg',
    imageAlt: 'Technician performing A/C service and diagnostics',
  },
  {
    title: 'Transmission Service',
    description: 'Fluid changes, diagnostics, and repairs for smooth shifting and long life.',
    image: '/images/transmission-service.jpg',
    imageAlt: 'Mechanic working on vehicle transmission internals',
  },
  {
    title: 'Brake Service',
    description: 'Pads, rotors, and full brake system repair for safe, confident stopping.',
    image: '/images/brake-service.jpg',
    imageAlt: 'Mechanic servicing vehicle brake rotor and caliper',
  },
  {
    title: 'Engine & Diagnostics',
    description: 'Check engine light analysis and thorough troubleshooting for any issue.',
    image: '/images/engine-diagnostics.jpg',
    imageAlt: 'Mechanics performing engine diagnostics with laptop',
  },
  {
    title: 'Custom Work & Lift Kits',
    description: 'Lift kits, performance upgrades, and custom builds for trucks and off-road vehicles.',
    image: '/images/custom-work-lift.jpg',
    imageAlt: 'Mechanic working on vehicle on hydraulic lift in shop',
  },
  {
    title: 'Light-Duty Diesel',
    description: 'Diesel maintenance and repair for trucks and light-duty diesel vehicles.',
    image: '/images/light-duty-diesel.jpg',
    imageAlt: 'Mechanic working on diesel engine components',
  },
  {
    title: 'Steering & Suspension',
    description: 'Alignment, shocks, struts, and suspension work for a smooth ride.',
    image: '/images/steering-suspension.jpg',
    imageAlt: 'Vehicle steering and suspension components close-up',
  },
]

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 48, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 90, damping: 14 },
  },
}

export default function FloatingCards() {
  return (
    <section id="services" className="services-section">
      <div className="services-section-bg" aria-hidden="true" />

      <motion.div
        className="services-header"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.span
          className="services-label"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          What We Do
        </motion.span>
        <h2>Our Services</h2>
        <motion.div
          className="services-header-line"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />
        <p>Professional automotive care for every vehicle — from daily drivers to custom builds.</p>
      </motion.div>

      <motion.div
        className="services-grid"
        variants={gridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
      >
        {services.map((service, i) => (
          <motion.article
            key={service.title}
            className="service-card"
            variants={cardVariants}
            whileHover={{ y: -10 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <div className="service-card-media">
              <motion.img
                src={service.image}
                alt={service.imageAlt || service.title}
                className="service-card-image"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              />
              <div className="service-card-media-overlay" />
              <motion.span
                className="service-card-index"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.05, type: 'spring', stiffness: 200 }}
              >
                {String(i + 1).padStart(2, '0')}
              </motion.span>
            </div>

            <div className="service-card-body">
              <motion.h3
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + i * 0.05, duration: 0.4 }}
              >
                {service.title}
              </motion.h3>
              <p>{service.description}</p>
              <motion.a
                href="#contact"
                className="service-card-link"
                whileHover={{ x: 6 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              >
                <span>Request Service</span>
                <motion.span
                  className="service-card-arrow"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                >
                  →
                </motion.span>
              </motion.a>
            </div>

            <motion.div
              className="service-card-accent"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            />
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}
