export default function Hero({ email, setEmail, onSubmit, isSubmitting, isSubmitted, error }) {
  return (
    <section id="waitlist" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark-card border border-dark-border mb-8 animate-fade-in">
          <span className="text-sm text-text-secondary font-medium">Get early access</span>
        </div>

        {/* Headline */}
        <h1 
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-slide-up"
          style={{ animationDelay: '0.1s' }}
        >
          Get Paid to <span className="accent-underline">Tweet</span>
        </h1>

        {/* Subheadline */}
        <p 
          className="text-lg sm:text-xl text-text-secondary max-w-xl mx-auto mb-10 animate-slide-up"
          style={{ animationDelay: '0.2s' }}
        >
          The first marketplace where Twitter and LinkedIn creators get paid for their posts.
        </p>

        {/* Email Form */}
        {!isSubmitted ? (
          <form 
            onSubmit={onSubmit} 
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-8 animate-slide-up"
            style={{ animationDelay: '0.3s' }}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com"
              className="flex-1 px-5 py-3.5 rounded-xl bg-dark-card border border-dark-border text-white placeholder-text-muted focus:border-accent focus:ring-1 focus:ring-accent transition-all outline-none"
              disabled={isSubmitting}
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-3.5 bg-white text-dark font-bold rounded-xl hover:bg-gray-100 transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2 whitespace-nowrap"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  <span>Joining...</span>
                </>
              ) : (
                <>
                  <span>Join waitlist</span>
                  <span>→</span>
                </>
              )}
            </button>
          </form>
        ) : (
          <div 
            className="max-w-md mx-auto mb-8 p-6 rounded-xl bg-dark-card border border-accent/30 animate-fade-in"
          >
            <div className="flex items-center justify-center gap-3 text-accent mb-2">
              <span className="text-2xl">🎉</span>
              <span className="text-xl font-bold">You're in!</span>
            </div>
            <p className="text-text-secondary">
              We'll email you the moment we launch.
            </p>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <p className="text-red-400 text-sm mb-6 animate-fade-in">{error}</p>
        )}

        {/* Social Proof */}
        <div 
          className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm animate-slide-up"
          style={{ animationDelay: '0.4s' }}
        >
          <div className="flex items-center gap-2">
            <span className="text-xl">🔥</span>
            <span className="text-white font-semibold">437</span>
            <span className="text-text-secondary">creators joined</span>
          </div>
        </div>

        {/* Decorative gradient */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-96 bg-gradient-to-b from-accent/5 via-transparent to-transparent pointer-events-none -z-10" />
      </div>
    </section>
  )
}