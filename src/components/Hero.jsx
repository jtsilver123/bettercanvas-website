import React, { useState, useRef } from 'react'

function Hero() {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const [showDemoModal, setShowDemoModal] = useState(false)
  const sliderRef = useRef(null)

  const handleMouseDown = (e) => {
    setIsDragging(true)
    updateSliderPosition(e)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e) => {
    if (isDragging) {
      updateSliderPosition(e)
    }
  }

  const updateSliderPosition = (e) => {
    if (sliderRef.current) {
      const rect = sliderRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
      setSliderPosition(percentage)
    }
  }

  const handleTouchStart = (e) => {
    setIsDragging(true)
    updateSliderPositionTouch(e)
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  const handleTouchMove = (e) => {
    if (isDragging) {
      updateSliderPositionTouch(e)
    }
  }

  const updateSliderPositionTouch = (e) => {
    if (sliderRef.current) {
      const rect = sliderRef.current.getBoundingClientRect()
      const x = e.touches[0].clientX - rect.left
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
      setSliderPosition(percentage)
    }
  }

  const handleDemoClick = (e) => {
    e.preventDefault()
    setShowDemoModal(true)
  }

  React.useEffect(() => {
    document.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('touchend', handleTouchEnd)
    document.addEventListener('touchmove', handleTouchMove)

    return () => {
      document.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('touchend', handleTouchEnd)
      document.removeEventListener('touchmove', handleTouchMove)
    }
  }, [isDragging])

  return (
    <section style={{
      background: 'var(--primary-gradient)',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      color: 'white',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: 'clamp(6rem, 10vw, 8rem)', // Reduced from clamp(7rem, 12vw, 10rem)
      paddingBottom: '2rem'
    }}>
      {/* Background decoration */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)',
        pointerEvents: 'none'
      }} />
      
      <div className="container" style={{ 
        position: 'relative', 
        zIndex: 1,
        maxWidth: '1400px' // Increased from default 1200px
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 'clamp(1.75rem, 3.5vw, 2.5rem)' // Reduced from clamp(2rem, 4vw, 3rem)
        }}>
          {/* Text Content - Now on top and centered */}
          <div style={{
            textAlign: 'center',
            maxWidth: '1000px'
          }}>
            {/* Small subtitle above main header */}
            <div style={{
              fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
              fontWeight: '500',
              color: 'rgba(255, 255, 255, 0.7)',
              marginBottom: 'clamp(0.75rem, 2vw, 1.25rem)', // Reduced from clamp(1rem, 2.5vw, 1.5rem)
              letterSpacing: '0.5px'
            }}>
              🎓 Canvas Enhancement Tool
            </div>
            
            <h1 style={{
              fontSize: 'clamp(3rem, 7vw, 5.5rem)',
              fontWeight: '800',
              marginBottom: 'clamp(1.25rem, 2.5vw, 1.75rem)', // Reduced from clamp(1.5rem, 3vw, 2rem)
              lineHeight: '1.1',
              letterSpacing: '-0.02em'
            }}>
              Make Canvas LMS Like Home
            </h1>
            
            <p style={{
              fontSize: 'clamp(1.2rem, 3vw, 1.6rem)',
              opacity: 0.85,
              lineHeight: '1.5',
              maxWidth: '800px',
              margin: '0 auto',
              marginBottom: 'clamp(2rem, 4vw, 3rem)', // Reduced from clamp(2.5rem, 5vw, 3.5rem)
              fontWeight: '400'
            }}>
              Your personalized, AI-powered study hub <strong>you'll actually love</strong> ❤️
            </p>
            
            {/* Updated CTA buttons to match reference style */}
            <div style={{
              display: 'flex',
              gap: 'clamp(1rem, 3vw, 1.5rem)',
              marginBottom: 'clamp(2rem, 4vw, 2.5rem)',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <a 
                href="https://chromewebstore.google.com/detail/bettercanvas/cndibmoanboadcifjkjbdpjgfedanolh"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 'clamp(0.5rem, 1.5vw, 0.75rem)',
                  padding: 'clamp(1rem, 3vw, 1.25rem) clamp(1.75rem, 4vw, 2.25rem)',
                  fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                  fontWeight: '600',
                  background: 'white', // Fixed to pure white background
                  color: '#667eea', // Fixed to primary color text
                  borderRadius: '50px', // Pill shaped like reference
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  border: 'none',
                  cursor: 'pointer',
                  minHeight: '52px',
                  boxShadow: '0 4px 20px rgba(255, 255, 255, 0.2)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)'
                  e.target.style.boxShadow = '0 6px 25px rgba(255, 255, 255, 0.3)'
                  e.target.style.background = 'rgba(255, 255, 255, 0.95)' // Slight transparency on hover
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)'
                  e.target.style.boxShadow = '0 4px 20px rgba(255, 255, 255, 0.2)'
                  e.target.style.background = 'white' // Back to pure white
                }}
              >
                <img 
                  src="/images/chrome-logo.png" 
                  alt="Chrome"
                  style={{
                    width: 'clamp(1.1rem, 3vw, 1.4rem)',
                    height: 'clamp(1.1rem, 3vw, 1.4rem)',
                    objectFit: 'contain'
                  }}
                /> Add to Chrome
              </a>

              <button 
                onClick={handleDemoClick}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 'clamp(0.5rem, 1.5vw, 0.75rem)',
                  padding: 'clamp(1rem, 3vw, 1.25rem) clamp(1.75rem, 4vw, 2.25rem)',
                  fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                  fontWeight: '600',
                  background: 'transparent',
                  color: 'white',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: '50px',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  minHeight: '52px',
                  zIndex: 2
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.1)'
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.5)'
                  e.target.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'transparent'
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)'
                  e.target.style.transform = 'translateY(0)'
                }}
              >
                ▶ Watch Demo
              </button>
            </div>
            
            {/* Updated stats to match reference */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 'clamp(1rem, 3vw, 1.5rem)',
              fontSize: 'clamp(0.9rem, 2.3vw, 1.1rem)',
              opacity: 0.85,
              flexWrap: 'wrap'
            }}>
              {/* Student profile images */}
              <div style={{ 
                display: 'flex', 
                alignItems: 'center',
                gap: 'clamp(0.75rem, 2vw, 1rem)'
              }}>
                <div style={{ display: 'flex', marginRight: '0.5rem' }}>
                  {/* Student avatar placeholders - overlapping circles */}
                  <div style={{
                    width: 'clamp(32px, 8vw, 40px)',
                    height: 'clamp(32px, 8vw, 40px)',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    border: '2px solid white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 'clamp(14px, 3vw, 18px)',
                    color: 'white',
                    fontWeight: '600',
                    position: 'relative',
                    zIndex: 4
                  }}>
                    👨‍🎓
                  </div>
                  <div style={{
                    width: 'clamp(32px, 8vw, 40px)',
                    height: 'clamp(32px, 8vw, 40px)',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                    border: '2px solid white',
                    marginLeft: '-8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 'clamp(14px, 3vw, 18px)',
                    color: 'white',
                    fontWeight: '600',
                    position: 'relative',
                    zIndex: 3
                  }}>
                    👩‍🎓
                  </div>
                  <div style={{
                    width: 'clamp(32px, 8vw, 40px)',
                    height: 'clamp(32px, 8vw, 40px)',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                    border: '2px solid white',
                    marginLeft: '-8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 'clamp(14px, 3vw, 18px)',
                    color: 'white',
                    fontWeight: '600',
                    position: 'relative',
                    zIndex: 2
                  }}>
                    👨‍💻
                  </div>
                  <div style={{
                    width: 'clamp(32px, 8vw, 40px)',
                    height: 'clamp(32px, 8vw, 40px)',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
                    border: '2px solid white',
                    marginLeft: '-8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 'clamp(14px, 3vw, 18px)',
                    color: 'white',
                    fontWeight: '600',
                    position: 'relative',
                    zIndex: 1
                  }}>
                    👩‍💻
                  </div>
                </div>

                {/* Stars */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  {[...Array(5)].map((_, i) => (
                    <span key={i} style={{ color: '#FFD700', fontSize: 'clamp(16px, 4vw, 20px)' }}>⭐</span>
                  ))}
                </div>
              </div>

              {/* Text content */}
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: 'clamp(0.5rem, 1.5vw, 1rem)',
                flexWrap: 'wrap',
                justifyContent: 'center'
              }}>
                <span style={{ fontWeight: '500', whiteSpace: 'nowrap' }}>
                  1.5M+ students love us
                </span>
                <span style={{ 
                  color: 'rgba(255, 255, 255, 0.7)', 
                  fontSize: 'clamp(0.8rem, 2vw, 1rem)',
                  whiteSpace: 'nowrap'
                }}>
                  • <a 
                    href="https://chromewebstore.google.com/detail/bettercanvas/cndibmoanboadcifjkjbdpjgfedanolh/reviews"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: 'inherit',
                      textDecoration: 'underline',
                      transition: 'opacity 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.opacity = '0.8'}
                    onMouseLeave={(e) => e.target.style.opacity = '1'}
                  >
                    7.4K reviews
                  </a>
                </span>
              </div>
            </div>
          </div>

          {/* Slider */}
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '1300px',
            margin: '0 auto'
          }}>
            {/* Slider container */}
            <div 
              ref={sliderRef}
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '2 / 1',
                borderRadius: '12px',
                overflow: 'hidden',
                cursor: isDragging ? 'grabbing' : 'grab',
                boxShadow: '0 25px 80px rgba(0, 0, 0, 0.3)',
                userSelect: 'none',
                background: '#f5f5f5'
              }}
              onMouseDown={handleMouseDown}
              onTouchStart={handleTouchStart}
            >
              {/* Before Image */}
              <img 
                src="/images/canvas-before.jpg" 
                alt="Original Canvas Interface"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  objectPosition: 'center'
                }}
                draggable={false}
              />
              
              {/* After Image */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: `${sliderPosition}%`,
                height: '100%',
                overflow: 'hidden',
                borderRight: '3px solid white'
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: `${100 / (sliderPosition / 100)}%`,
                  height: '100%'
                }}>
                  <img 
                    src="/images/canvas-after.jpg" 
                    alt="BetterCanvas Interface"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      objectPosition: 'center'
                    }}
                    draggable={false}
                  />
                </div>
              </div>
              
              {/* Slider Handle */}
              <div style={{
                position: 'absolute',
                left: `${sliderPosition}%`,
                top: '0',
                bottom: '0',
                width: '3px',
                background: 'white',
                transform: 'translateX(-50%)',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
                zIndex: 10
              }}>
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '40px',
                  height: '40px',
                  background: 'white',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                  cursor: isDragging ? 'grabbing' : 'grab'
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>

                {/* Drag instruction */}
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: 'calc(100% + 20px)',
                  transform: 'translateY(-50%)',
                  background: 'rgba(0, 0, 0, 0.8)',
                  color: 'white',
                  padding: '0.5rem 1rem',
                  borderRadius: '20px',
                  fontSize: '0.9rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  animation: 'bounceRight 1.5s ease-in-out infinite',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
                  whiteSpace: 'nowrap',
                  zIndex: 20,
                  opacity: sliderPosition > 70 ? 0 : 1,
                  transition: 'opacity 0.3s ease'
                }}>
                  👉 Drag Right
                </div>
              </div>

              {/* Labels */}
              <div style={{
                position: 'absolute',
                bottom: '1rem',
                left: '1rem',
                background: 'rgba(0, 0, 0, 0.8)',
                color: 'white',
                padding: '0.5rem 1rem',
                borderRadius: '20px',
                fontSize: '0.85rem',
                fontWeight: '600',
                display: sliderPosition > 30 ? 'flex' : 'none',
                alignItems: 'center',
                gap: '0.5rem',
                opacity: Math.min(1, (sliderPosition - 30) / 30),
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)'
              }}>
                <span>✨ BetterCanvas</span>
              </div>
              
              <div style={{
                position: 'absolute',
                bottom: '1rem',
                right: '1rem',
                background: 'rgba(0, 0, 0, 0.8)',
                color: 'white',
                padding: '0.5rem 1rem',
                borderRadius: '20px',
                fontSize: '0.85rem',
                fontWeight: '600',
                display: sliderPosition < 70 ? 'flex' : 'none',
                alignItems: 'center',
                gap: '0.5rem',
                opacity: Math.min(1, (70 - sliderPosition) / 30),
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)'
              }}>
                <span>👎 Original Canvas</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Demo Modal */}
      {showDemoModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.9)',
          zIndex: 10000,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 'clamp(1rem, 4vw, 2rem)',
          backdropFilter: 'blur(10px)'
        }}
        onClick={() => setShowDemoModal(false)}
      >
        <h2 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
          color: 'white',
          marginBottom: 'clamp(1.5rem, 3vw, 2rem)',
          textAlign: 'center',
          fontWeight: '700'
        }}>
          Upgrade your Canvas today!
        </h2>
        
        <div style={{
          position: 'relative',
          maxWidth: '300px',
          width: '100%',
          height: isMobile ? '700px' : '800px',
          background: 'black',
          borderRadius: 'var(--radius-xl)',
          overflow: 'hidden',
          boxShadow: '0 20px 60px rgba(0,0,0,0.5)'
        }}
        onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            zIndex: 1,
            background: 'rgba(0,0,0,0.8)',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            width: '44px',
            height: '44px',
            fontSize: '24px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all var(--transition)'
          }}
          onClick={() => setShowDemoModal(false)}
          >×</button>
          
          {/* TikTok Embed */}
          <iframe
            src="https://www.tiktok.com/embed/v2/7486339714144914695"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 'none',
              borderRadius: 'var(--radius-xl)'
            }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
      )}
    </section>
  )
}

export default Hero 