const painPoints = [
  {
    icon: '😵',
    text: 'Cold DMing brands that ghost you',
  },
  {
    icon: '🤷',
    text: 'No idea what to charge',
  },
  {
    icon: '😤',
    text: 'Chasing payments for weeks',
  },
]

export default function AgitateProblem() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Tired of <span className="accent-underline">this?</span>
          </h2>
        </div>

        {/* Pain Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-dark-card border border-dark-border hover:border-accent/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl flex-shrink-0">{point.icon}</span>
                <p className="text-text-primary font-medium leading-relaxed">
                  {point.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
