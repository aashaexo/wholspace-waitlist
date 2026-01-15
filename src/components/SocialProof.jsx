const niches = ['Tech', 'SaaS', 'Crypto', 'Fitness', 'Finance', 'Marketing']

export default function SocialProof() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark">
      <div className="max-w-4xl mx-auto text-center">
        {/* Niches */}
        <div className="mb-8">
          <p className="text-text-secondary mb-4">
            If you are a creator in one of these niches, you are eligible to join the waitlist:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {niches.map((niche, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full bg-dark-card border border-dark-border text-white font-medium text-sm"
              >
                {niche}
              </span>
            ))}
          </div>
        </div>

        {/* Follower Range */}
        <p className="text-lg text-text-secondary">
          And you have <span className="text-white font-semibold">1K - 100K</span> followers on Twitter or LinkedIn
        </p>
      </div>
    </section>
  )
}
