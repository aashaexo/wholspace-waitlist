const perks = [
  '5% platform fee forever (vs 10%)',
  'Priority campaign matching',
  'Founding member badge',
  'Direct input on features we build',
]

const TOTAL_SPOTS = 500
const SPOTS_TAKEN = 437
const SPOTS_REMAINING = TOTAL_SPOTS - SPOTS_TAKEN
const PROGRESS_PERCENT = (SPOTS_TAKEN / TOTAL_SPOTS) * 100

export default function FoundingPerks() {
  return (
    <section id="perks" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Main Card */}
        <div className="glass-card rounded-3xl p-8 sm:p-12">
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              First 500 creators get <span className="accent-underline">lifetime perks</span>
            </h2>
          </div>

          {/* Perks List */}
          <div className="max-w-md mx-auto mb-10">
            <ul className="space-y-4">
              {perks.map((perk, index) => (
                <li 
                  key={index}
                  className="flex items-start gap-3 group"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-0.5">
                    <svg 
                      className="w-4 h-4 text-accent" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2.5} 
                        d="M5 13l4 4L19 7" 
                      />
                    </svg>
                  </div>
                  <span className="text-text-primary font-medium group-hover:text-accent transition-colors">
                    {perk}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Progress Section */}
          <div className="max-w-md mx-auto">
            {/* Progress Bar */}
            <div className="relative mb-4">
              <div className="h-3 bg-dark rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-accent to-orange-400 rounded-full transition-all duration-1000 animate-pulse-glow"
                  style={{ width: `${PROGRESS_PERCENT}%` }}
                />
              </div>
            </div>

            {/* Stats */}
            <div className="flex items-center justify-center gap-2 text-sm mb-2">
              <span className="text-xl">🔥</span>
              <span className="text-white font-bold">{SPOTS_TAKEN}</span>
              <span className="text-text-secondary">/ {TOTAL_SPOTS} spots claimed</span>
            </div>
            
            {/* Progress percentage */}
            <div className="text-center mb-4">
              <span className="text-2xl font-bold text-accent">{Math.round(PROGRESS_PERCENT)}%</span>
              <span className="text-text-secondary ml-2">full</span>
            </div>

            {/* CTA */}
            <div className="mt-8 text-center">
              <a 
                href="#waitlist"
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-bold rounded-xl hover:bg-accent-hover transition-all hover:scale-105 hover:shadow-lg hover:shadow-accent/20"
              >
                <span>Claim Your Spot</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
