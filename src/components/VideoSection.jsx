import { useState } from 'react'

export default function VideoSection() {
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [videoError, setVideoError] = useState(false)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:max-w-5xl lg:mr-0">
          {/* Left Side - Video */}
          <div className="order-1 lg:order-1 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-video rounded-2xl overflow-hidden bg-dark-card border border-dark-border">
              <video
                className="w-full h-full object-cover"
                controls
                preload="metadata"
                poster="/video-poster.jpg"
                onLoadedData={() => setVideoLoaded(true)}
                onError={() => setVideoError(true)}
                style={{ display: videoLoaded ? 'block' : 'none' }}
              >
                <source src="/wholspacevideo1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Placeholder if video not loaded */}
              {(videoError || !videoLoaded) && (
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-dark-card to-dark-border">
                  <div className="text-center p-8">
                    <svg 
                      className="w-16 h-16 mx-auto mb-4 text-text-muted" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" 
                      />
                    </svg>
                    <p className="text-text-secondary text-sm">
                      Upload your video to /public/video.mp4
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Side - Text */}
          <div className="order-2 lg:order-2">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              This is the era of{' '}
              <span className="accent-underline">tech creators</span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  )
}
