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
      paddingTop: '48px' // Account for announcement bar
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
      
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-grid">
          {/* Left Side - Text Content */}
          <div>
            <h1 style={{
              fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
              fontWeight: '800',
              marginBottom: '1.25rem',
              lineHeight: '1.2'
            }}>
              Make Canvas feel like home and watch your grades climb
            </h1>
            
            <p style={{
              fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)',
              marginBottom: '1.75rem',
              opacity: 0.9,
              lineHeight: '1.6'
            }}>
              All your courses, deadlines, and study tools in one upgraded dashboard — no more tab chaos
            </p>
            
            <div style={{
              display: 'flex',
              gap: '0.75rem',
              marginBottom: '1.75rem',
              flexWrap: 'nowrap',
              alignItems: 'center'
            }}>
              <a 
                href="https://chromewebstore.google.com/detail/bettercanvas/cndibmoanboadcifjkjbdpjgfedanolh"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-glass"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.875rem 1.25rem',
                  fontSize: 'clamp(0.85rem, 2.25vw, 1rem)',
                  flexShrink: 0,
                  whiteSpace: 'nowrap'
                }}
              >
                <img 
                  src="/images/chrome-logo.png" 
                  alt="Chrome"
                  style={{
                    width: '1.2em',
                    height: '1.2em',
                    objectFit: 'contain'
                  }}
                /> Add to Chrome — it's free
              </a>
              
              <button 
                onClick={handleDemoClick}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background: 'none',
                  border: 'none',
                  color: 'white',
                  textDecoration: 'underline',
                  fontSize: 'clamp(0.85rem, 2.25vw, 1rem)',
                  cursor: 'pointer',
                  padding: '0.875rem 0.5rem',
                  flexShrink: 0,
                  whiteSpace: 'nowrap'
                }}
              >
                ▶ Watch 45-second demo
              </button>
            </div>
            
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.5rem',
              fontSize: '0.85rem',
              opacity: 0.8,
              flexWrap: 'wrap'
            }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                ⭐ 5.0 stars
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                🎓 1.5M+ students
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                🏫 500+ schools
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                🔒 100% secure
              </span>
            </div>
          </div>

          {/* Right Side - Before/After Slider */}
          <div style={{
            position: 'relative',
            width: '100%'
          }}>
            <div 
              ref={sliderRef}
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '7 / 3',
                borderRadius: '1rem',
                overflow: 'hidden',
                cursor: isDragging ? 'grabbing' : 'grab',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                userSelect: 'none'
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
                  objectFit: 'cover',
                  objectPosition: 'center top'
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
                borderRight: '4px solid white'
              }}>
                <img 
                  src="/images/canvas-after.jpg" 
                  alt="BetterCanvas Interface"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: `${100 / sliderPosition * 100}%`,
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top'
                  }}
                  draggable={false}
                />
              </div>
              
              {/* Slider Handle */}
              <div style={{
                position: 'absolute',
                left: `${sliderPosition}%`,
                top: '0',
                bottom: '0',
                width: '4px',
                background: 'white',
                transform: 'translateX(-50%)',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
                zIndex: 10
              }}>
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '44px',
                  height: '44px',
                  background: 'white',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                  cursor: isDragging ? 'grabbing' : 'grab'
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>

                {/* Right Arrow Indicator */}
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: 'calc(100% + 20px)',
                  transform: 'translateY(-50%)',
                  background: 'rgba(0, 0, 0, 0.85)',
                  color: 'white',
                  padding: '0.75rem 1rem',
                  borderRadius: '0.5rem',
                  fontSize: '1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  animation: 'bounceRight 1.5s ease-in-out infinite',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  whiteSpace: 'nowrap',
                  zIndex: 20,
                  opacity: sliderPosition > 70 ? 0 : 1,
                  transition: 'opacity 0.3s ease'
                }}>
                  👉 Drag right to upgrade
                </div>
              </div>
              
              {/* Labels */}
              <div style={{
                position: 'absolute',
                bottom: '1rem',
                left: '1rem',
                background: 'rgba(0, 0, 0, 0.85)',
                color: 'white',
                padding: '0.5rem 1rem',
                borderRadius: '0.5rem',
                fontSize: '0.875rem',
                fontWeight: '600',
                display: sliderPosition < 70 ? 'flex' : 'none',
                alignItems: 'center',
                gap: '0.5rem',
                opacity: Math.min(1, (70 - sliderPosition) / 30),
                transition: 'opacity 0.2s ease'
              }}>
                <span>👎 Original Canvas</span>
              </div>
              
              <div style={{
                position: 'absolute',
                bottom: '1rem',
                right: '1rem',
                background: 'rgba(0, 0, 0, 0.85)',
                color: 'white',
                padding: '0.5rem 1rem',
                borderRadius: '0.5rem',
                fontSize: '0.875rem',
                fontWeight: '600',
                display: sliderPosition > 30 ? 'flex' : 'none',
                alignItems: 'center',
                gap: '0.5rem',
                opacity: Math.min(1, (sliderPosition - 30) / 30),
                transition: 'opacity 0.2s ease',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}>
                <span>✨ BetterCanvas</span>
              </div>
            </div>
            
            {/* Instructions */}
            <p style={{
              textAlign: 'center',
              marginTop: '1rem',
              fontSize: '0.875rem',
              opacity: 0.7
            }}>
              ↔️ Drag slider to compare interfaces
            </p>
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
          alignItems: 'center',
          justifyContent: 'center',
          padding: 'clamp(1rem, 4vw, 2rem)',
          backdropFilter: 'blur(10px)'
        }}
        onClick={() => setShowDemoModal(false)}
      >
        <div style={{
          position: 'relative',
          maxWidth: '500px',
          width: '100%',
          height: 'clamp(500px, 80vh, 700px)',
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