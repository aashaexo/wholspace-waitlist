const steps = [
  {
    number: '1',
    title: 'Create your profile',
    description: 'One-time setup with your rates and niche',
  },
  {
    number: '2',
    title: 'Brands find you',
    description: 'Campaigns land in your dashboard',
  },
  {
    number: '3',
    title: 'Get paid safely',
    description: 'Escrow protection, no chasing invoices',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Here's how it <span className="accent-underline">works</span>
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-dark-card border border-dark-border hover:border-accent/50 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                <span className="text-white font-bold text-lg">{step.number}</span>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-3 mt-2">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-text-secondary leading-relaxed">
                {step.description}
              </p>

              {/* Connector Arrow (hidden on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 lg:-right-6 transform -translate-y-1/2 z-10">
                  <svg 
                    className="w-8 h-8 lg:w-12 lg:h-12 text-accent/30" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7" 
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
