import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import AgitateProblem from './components/AgitateProblem'
import VideoSection from './components/VideoSection'
import HowItWorks from './components/HowItWorks'
import SocialProof from './components/SocialProof'
import FoundingPerks from './components/FoundingPerks'
import Footer from './components/Footer'

function App() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    
    // Basic email validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address')
      return
    }

    setIsSubmitting(true)
    
    try {
      // Firebase integration will be added here
      const { addToWaitlist } = await import('./lib/firebase')
      await addToWaitlist(email)
      setIsSubmitted(true)
      setEmail('')
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-dark">
      <Header />
      <main>
        <Hero 
          email={email}
          setEmail={setEmail}
          onSubmit={handleSubmit}
          isSubmitting={isSubmitting}
          isSubmitted={isSubmitted}
          error={error}
        />
        <AgitateProblem />
        <VideoSection />
        <HowItWorks />
        <SocialProof />
        <FoundingPerks />
      </main>
      <Footer />
    </div>
  )
}

export default App
