import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const reviews = [
  {
    name: 'Dustin M.',
    rating: 5,
    text: 'Best shop in Liberal hands down. They fixed my truck fast and didn\'t try to sell me stuff I didn\'t need. Honest people.',
    date: 'Google Review',
  },
  {
    name: 'Amanda K.',
    rating: 5,
    text: 'Took my SUV in for brakes and they explained everything clearly. Fair price and great communication throughout.',
    date: 'Google Review',
  },
  {
    name: 'Tyler R.',
    rating: 5,
    text: 'Had a lift kit installed on my truck — came out perfect. These guys know custom work and off-road builds.',
    date: 'Google Review',
  },
  {
    name: 'Jason P.',
    rating: 5,
    text: 'Check engine light had me worried. They diagnosed it quickly and got me back on the road same day. Highly recommend.',
    date: 'Google Review',
  },
  {
    name: 'Maria S.',
    rating: 5,
    text: 'Local shop that actually cares. They treat you like family, not just another customer. Will be coming back.',
    date: 'Google Review',
  },
  {
    name: 'Chris B.',
    rating: 5,
    text: 'Diesel work on my pickup was done right. Professional, knowledgeable, and the price was very reasonable.',
    date: 'Google Review',
  },
]

function getInitials(name) {
  return name
    .replace(/\./g, '')
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

function Stars({ count }) {
  return (
    <span className="review-stars" aria-label={`${count} out of 5 stars`}>
      {'★'.repeat(count)}
    </span>
  )
}

function ReviewCard({ review }) {
  return (
    <article className="review-card">
      <span className="review-quote" aria-hidden="true">❝</span>
      <Stars count={review.rating} />
      <p className="review-text">{review.text}</p>
      <div className="review-footer">
        <div className="review-avatar" aria-hidden="true">
          {getInitials(review.name)}
        </div>
        <div className="review-author">
          <strong>{review.name}</strong>
          <span className="review-google-badge">
            <span className="review-google-g">G</span> {review.date}
          </span>
        </div>
      </div>
    </article>
  )
}

function getPerPage(width) {
  if (width < 640) return 1
  if (width < 960) return 2
  return 3
}

export default function Reviews() {
  const [page, setPage] = useState(0)
  const [perPage, setPerPage] = useState(3)
  const [direction, setDirection] = useState(1)

  const totalPages = Math.ceil(reviews.length / perPage)

  useEffect(() => {
    const onResize = () => {
      const next = getPerPage(window.innerWidth)
      setPerPage(next)
      setPage(0)
    }
    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    if (page >= totalPages) setPage(0)
  }, [totalPages, page])

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setPage((p) => (p + 1) % totalPages)
    }, 5000)
    return () => clearInterval(timer)
  }, [totalPages])

  const goTo = useCallback((next, dir) => {
    setDirection(dir)
    setPage(next)
  }, [])

  const prev = () => goTo((page - 1 + totalPages) % totalPages, -1)
  const next = () => goTo((page + 1) % totalPages, 1)

  const visible = reviews.slice(page * perPage, page * perPage + perPage)

  const slideVariants = {
    enter: (d) => ({ opacity: 0, x: d > 0 ? 80 : -80 }),
    center: { opacity: 1, x: 0 },
    exit: (d) => ({ opacity: 0, x: d > 0 ? -80 : 80 }),
  }

  return (
    <section id="reviews" className="reviews-section">
      <motion.div
        className="reviews-header"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="section-label">Customer Reviews</span>
        <h2>What Our Customers Say</h2>
        <div className="reviews-score-row">
          <span className="reviews-score">5.0</span>
          <div className="reviews-score-detail">
            <Stars count={5} />
            <span>Based on Google reviews · Southwest Kansas</span>
          </div>
        </div>
      </motion.div>

      <div className="reviews-carousel">
        <button
          type="button"
          className="reviews-arrow reviews-arrow-prev"
          onClick={prev}
          aria-label="Previous reviews"
        >
          ‹
        </button>

        <div className="reviews-track-wrap">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={`${page}-${perPage}`}
              className="reviews-track"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              {visible.map((review) => (
                <ReviewCard key={review.name} review={review} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          type="button"
          className="reviews-arrow reviews-arrow-next"
          onClick={next}
          aria-label="Next reviews"
        >
          ›
        </button>
      </div>

      <div className="reviews-dots" role="tablist" aria-label="Review pages">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={page === i}
            aria-label={`Review page ${i + 1}`}
            className={`reviews-dot ${page === i ? 'active' : ''}`}
            onClick={() => goTo(i, i > page ? 1 : -1)}
          />
        ))}
      </div>
    </section>
  )
}
