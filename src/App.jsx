import TopBar from './components/TopBar'
import Header from './components/Header'
import Hero from './components/Hero'
import FloatingCards from './components/FloatingCards'
import WhyChooseUs from './components/WhyChooseUs'
import StatsBar from './components/StatsBar'
import HowItWorks from './components/HowItWorks'
import About from './components/About'
import Reviews from './components/Reviews'
import Specials from './components/Specials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CallNowButton from './components/CallNowButton'
import './App.css'

function App() {
  return (
    <div className="app">
      <TopBar />
      <Header />
      <main>
        <Hero />
        <FloatingCards />
        <WhyChooseUs />
        <StatsBar />
        <HowItWorks />
        <About />
        <Reviews />
        <Specials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <CallNowButton />
    </div>
  )
}

export default App
