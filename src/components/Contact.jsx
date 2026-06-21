import { useState } from 'react'
import { motion } from 'framer-motion'
import { business } from '../data/businessInfo'
import SectionHeader from './SectionHeader'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="contact-section">
      <SectionHeader
        label="Get In Touch"
        title="Contact Us"
        subtitle="Schedule a service or ask us a question"
      />

      <div className="contact-inner">
        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          {submitted ? (
            <div className="form-success">
              <h3>Thank you!</h3>
              <p>We'll get back to you shortly. For urgent matters, call us directly.</p>
              <a href={business.phoneLink} className="about-btn">{business.phone}</a>
            </div>
          ) : (
            <>
              <div className="form-row">
                <label>
                  Name
                  <input type="text" name="name" required placeholder="Your name" />
                </label>
                <label>
                  Phone
                  <input type="tel" name="phone" required placeholder="(620) 555-0123" />
                </label>
              </div>
              <label>
                Email
                <input type="email" name="email" placeholder="you@email.com" />
              </label>
              <label>
                Message
                <textarea
                  name="message"
                  rows={4}
                  required
                  placeholder="Describe your vehicle issue or service needed..."
                />
              </label>
              <button type="submit" className="form-submit">Send Message</button>
            </>
          )}
        </motion.form>

        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="contact-card">
            <h3>Visit Us</h3>
            <p>{business.fullAddress}</p>
            <a href={business.mapsLink} target="_blank" rel="noopener noreferrer" className="contact-map-link">
              View on Google Maps →
            </a>
          </div>
          <div className="contact-card">
            <h3>Call Us</h3>
            <a href={business.phoneLink}>{business.phone}</a>
          </div>
          <div className="contact-card">
            <h3>Email Us</h3>
            <a href={business.emailLink}>{business.email}</a>
          </div>
          <div className="contact-card">
            <h3>Hours</h3>
            <ul className="hours-list">
              {business.hours.map((row) => (
                <li key={row.day}>
                  <span>{row.day}</span>
                  <span>{row.time}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="contact-map">
            <iframe
              title="Maverick Automotive location"
              src={business.mapEmbed}
              width="100%"
              height="220"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
