export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark/80 backdrop-blur-md border-b border-dark-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <img 
              src="/logo.svg" 
              alt="Wholspace" 
              className="h-8 w-auto transition-transform group-hover:scale-105"
            />
            <span className="text-xl font-bold text-white">Wholspace</span>
          </a>

      
      

          {/* CTA Button */}
          <a 
            href="#waitlist"
            className="bg-white text-dark px-5 py-2 rounded-full font-bold text-sm hover:bg-gray-100 transition-all hover:scale-105"
          >
            Join Waitlist
          </a>
        </div>
      </div>
    </header>
  )
}
