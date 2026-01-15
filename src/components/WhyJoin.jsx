const features = [
  {
    icon: '⚡',
    label: 'LIGHTNING FAST',
    title: 'Blazing',
    titleAccent: 'Performance',
    description: 'Experience instant loading times and buttery smooth interactions. Built with modern tech for maximum speed.',
  },
  {
    icon: '🎨',
    label: 'BEAUTIFULLY DESIGNED',
    title: 'Stunning',
    titleAccent: 'Interface',
    description: 'A workspace that\'s as beautiful as it is functional. Every pixel crafted with care and attention to detail.',
  },
  {
    icon: '🔒',
    label: 'PRIVACY FIRST',
    title: 'Your Data,',
    titleAccent: 'Your Control',
    description: 'End-to-end encryption and zero-knowledge architecture. We can\'t see your data, and neither can anyone else.',
  },
]

export default function WhyJoin() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Why <span className="accent-underline">join</span> early?
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Get exclusive access to features and pricing that won't be available after launch.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-dark-card border border-dark-border hover:border-accent/50 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>

              {/* Label */}
              <span className="text-xs font-semibold tracking-wider text-text-muted uppercase">
                {feature.label}
              </span>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mt-2 mb-3">
                {feature.title}{' '}
                <span className="accent-underline">{feature.titleAccent}</span>
              </h3>

              {/* Description */}
              <p className="text-text-secondary leading-relaxed">
                {feature.description}
              </p>

              {/* Learn More Link */}
              <a 
                href="#waitlist" 
                className="inline-flex items-center gap-1 mt-6 text-accent font-semibold text-sm hover:gap-2 transition-all"
              >
                Learn more
                <span>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
