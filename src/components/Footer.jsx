export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-dark-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <img 
              src="/logo.svg" 
              alt="Wholspace" 
              className="h-5 w-auto opacity-80"
            />
            <span className="text-sm text-text-secondary">
              © {currentYear} Wholspace. All rights reserved.
            </span>
          </div>

          {/* Building in Public */}
          <div className="flex items-center gap-4">
            <span className="text-sm text-text-secondary">
              Building in public by
            </span>
            <a 
              href="https://twitter.com/wholspace" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white hover:text-accent transition-colors font-medium"
            >
              <svg 
                className="w-5 h-5" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <span>@wholspace</span>
            </a>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm">
            <a 
              href="#" 
              className="text-text-secondary hover:text-white transition-colors"
            >
              Privacy
            </a>
            <a 
              href="#" 
              className="text-text-secondary hover:text-white transition-colors"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
