// Placeholder data - will be updated with actual assets
const creatorCards = [
  {
    id: 1,
    image: '/placeholder-card-1.jpg', // Replace with actual image/video
    label: null,
    overlayText: null,
  },
  {
    id: 2,
    image: '/placeholder-card-2.jpg',
    label: 'human-vetted',
    overlayText: null,
  },
  {
    id: 3,
    image: '/placeholder-card-3.jpg',
    label: 'viewsss',
    overlayText: '24mm',
  },
  {
    id: 4,
    image: '/placeholder-card-4.jpg',
    label: null,
    overlayText: 'in less than 2 minutes..',
  },
  {
    id: 5,
    image: '/placeholder-card-5.jpg',
    label: null,
    overlayText: 'MILLIONAIRES ARE BEING MADE',
  },
  {
    id: 6,
    image: '/placeholder-card-6.jpg',
    label: 'AI analysed',
    overlayText: 'Language apps to learn language',
  },
]

const socialPlatforms = [
  { name: 'TikTok', icon: '/icons/tiktok.svg', href: '#' },
  { name: 'Instagram', icon: '/icons/instagram.svg', href: '#' },
  { name: 'YouTube', icon: '/icons/youtube.svg', href: '#' },
  { name: 'X', icon: '/icons/x.svg', href: '#' },
  { name: 'LinkedIn', icon: '/icons/linkedin.svg', href: '#', comingSoon: true },
]

export default function CreatorShowcase() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Curved Card Arrangement */}
        <div className="relative mb-16">
          {/* Container with curved perspective */}
          <div className="flex items-center justify-center gap-4 md:gap-6 lg:gap-8 perspective-1000">
            {creatorCards.map((card, index) => {
              // Calculate rotation and translation for curved effect
              const totalCards = creatorCards.length
              const centerIndex = Math.floor(totalCards / 2)
              const distanceFromCenter = index - centerIndex
              const rotation = distanceFromCenter * 8 // degrees
              const translateY = Math.abs(distanceFromCenter) * 20 // pixels
              const translateZ = -Math.abs(distanceFromCenter) * 30 // 3D depth
              
              return (
                <div
                  key={card.id}
                  className="relative group"
                  style={{
                    transform: `perspective(1000px) rotateY(${rotation}deg) translateY(${translateY}px) translateZ(${translateZ}px)`,
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* Card */}
                  <div className="relative w-48 md:w-56 lg:w-64 h-64 md:h-72 lg:h-80 rounded-2xl overflow-hidden bg-dark-card border border-dark-border group-hover:border-accent/50 transition-all duration-300 group-hover:scale-105 shadow-xl">
                    {/* Image/Video */}
                    <div className="absolute inset-0">
                      <img
                        src={card.image}
                        alt={`Creator ${card.id}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback to gradient if image doesn't load
                          e.target.style.display = 'none'
                          e.target.parentElement.style.background = 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)'
                        }}
                      />
                    </div>

                    {/* Overlay Text */}
                    {card.overlayText && (
                      <div className="absolute inset-0 p-4 flex items-end">
                        <p className="text-white text-sm font-semibold drop-shadow-lg">
                          {card.overlayText}
                        </p>
                      </div>
                    )}

                    {/* Label Below Card */}
                    {card.label && (
                      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                        <span className="text-xs font-semibold text-text-secondary uppercase tracking-wider">
                          {card.label}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center justify-center gap-6 md:gap-8 mb-12">
          {socialPlatforms.map((platform) => (
            <div key={platform.name} className="relative group">
              <a
                href={platform.href}
                className="block w-10 h-10 md:w-12 md:h-12 rounded-lg bg-dark-card border border-dark-border hover:border-accent transition-all duration-300 hover:scale-110 flex items-center justify-center"
                aria-label={platform.name}
              >
                {platform.icon ? (
                  <img
                    src={platform.icon}
                    alt={platform.name}
                    className="w-6 h-6 md:w-7 md:h-7"
                    onError={(e) => {
                      // Fallback to text if icon doesn't load
                      e.target.style.display = 'none'
                      e.target.parentElement.innerHTML = `<span class="text-white text-xs font-bold">${platform.name[0]}</span>`
                    }}
                  />
                ) : (
                  <span className="text-white text-xs font-bold">
                    {platform.name[0]}
                  </span>
                )}
              </a>
            </div>
          ))}
        </div>

        {/* Tagline */}
        <div className="text-center">
          <p className="text-2xl md:text-3xl lg:text-4xl font-serif text-white italic">
            Your hunt for creators ends here...
          </p>
        </div>
      </div>
    </section>
  )
}
