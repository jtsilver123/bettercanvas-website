import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [showDemoModal, setShowDemoModal] = useState(false)
  const [showReviewsModal, setShowReviewsModal] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleDemoClick = (e) => {
    e.preventDefault()
    setShowDemoModal(true)
    setIsMobileMenuOpen(false) // Close mobile menu
  }

  const handleReviewsClick = (e) => {
    e.preventDefault()
    setShowReviewsModal(true)
    setIsMobileMenuOpen(false) // Close mobile menu
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header style={{
      position: 'fixed',
      top: 48, // Account for announcement bar
      left: 0,
      right: 0,
      zIndex: 1000,
      background: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
      backdropFilter: isScrolled ? 'blur(10px)' : 'none',
      borderBottom: isScrolled ? '1px solid var(--border)' : 'none',
      transition: 'all 0.3s ease'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem 1.5rem'
      }}>
        <Link 
          to="/"
          onClick={closeMobileMenu}
          style={{
            fontSize: 'clamp(1.2rem, 4vw, 1.5rem)',
            fontWeight: '700',
            color: isScrolled ? '#667eea' : 'white',
            textDecoration: 'none',
            transition: 'all 0.3s ease'
          }}
        >
          BetterCanvas
        </Link>
        
        {/* Desktop Navigation */}
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2rem',
          '@media (max-width: 768px)': {
            display: 'none'
          }
        }} className="desktop-nav">
          <a href="#features" style={{
            textDecoration: 'none',
            color: isScrolled ? 'var(--text-primary)' : 'rgba(255,255,255,0.9)',
            fontWeight: '500',
            transition: 'color 0.3s ease'
          }}>
            Features
          </a>
          <Link to="/for-schools" style={{
            textDecoration: 'none',
            color: isScrolled ? 'var(--text-primary)' : 'rgba(255,255,255,0.9)',
            fontWeight: '500',
            transition: 'color 0.3s ease'
          }}>
            For Schools
          </Link>
          <button
            onClick={handleDemoClick}
            style={{
              background: 'none',
              border: 'none',
              color: isScrolled ? 'var(--text-primary)' : 'rgba(255,255,255,0.9)',
              fontWeight: '500',
              transition: 'color 0.3s ease',
              cursor: 'pointer',
              textDecoration: 'underline',
              fontSize: '1rem'
            }}
          >
            Demo
          </button>
          <button
            onClick={handleReviewsClick}
            style={{
              background: 'none',
              border: 'none',
              color: isScrolled ? 'var(--text-primary)' : 'rgba(255,255,255,0.9)',
              fontWeight: '500',
              transition: 'color 0.3s ease',
              cursor: 'pointer',
              textDecoration: 'underline',
              fontSize: '1rem'
            }}
          >
            Reviews
          </button>
          <a 
            href="https://chromewebstore.google.com/detail/bettercanvas/cndibmoanboadcifjkjbdpjgfedanolh"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ 
              marginLeft: '1rem',
              fontSize: '0.9rem',
              padding: '0.75rem 1.5rem'
            }}
          >
            Get Extension
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMobileMenu}
          className="mobile-menu-btn"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0.5rem',
            color: isScrolled ? 'var(--text-primary)' : 'white',
            fontSize: '1.5rem'
          }}
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-nav" style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          background: 'rgba(255, 255, 255, 0.98)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid var(--border)',
          padding: '1rem 0',
          boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
        }}>
          <div className="container" style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            <a 
              href="#features" 
              onClick={closeMobileMenu}
              style={{
                padding: '0.75rem 1.5rem',
                textDecoration: 'none',
                color: 'var(--text-primary)',
                fontWeight: '500',
                borderRadius: '0.5rem',
                transition: 'background 0.3s ease'
              }}
            >
              Features
            </a>
            <Link 
              to="/for-schools" 
              onClick={closeMobileMenu}
              style={{
                padding: '0.75rem 1.5rem',
                textDecoration: 'none',
                color: 'var(--text-primary)',
                fontWeight: '500',
                borderRadius: '0.5rem',
                transition: 'background 0.3s ease'
              }}
            >
              For Schools
            </Link>
            <button
              onClick={handleDemoClick}
              style={{
                padding: '0.75rem 1.5rem',
                background: 'none',
                border: 'none',
                color: 'var(--text-primary)',
                fontWeight: '500',
                cursor: 'pointer',
                textAlign: 'left',
                borderRadius: '0.5rem',
                fontSize: '1rem'
              }}
            >
              Demo
            </button>
            <button
              onClick={handleReviewsClick}
              style={{
                padding: '0.75rem 1.5rem',
                background: 'none',
                border: 'none',
                color: 'var(--text-primary)',
                fontWeight: '500',
                cursor: 'pointer',
                textAlign: 'left',
                borderRadius: '0.5rem',
                fontSize: '1rem'
              }}
            >
              Reviews
            </button>
            <a 
              href="https://chromewebstore.google.com/detail/bettercanvas/cndibmoanboadcifjkjbdpjgfedanolh"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
              className="btn btn-primary"
              style={{ 
                margin: '0.5rem 1.5rem',
                fontSize: '0.9rem',
                padding: '0.75rem 1.5rem',
                textAlign: 'center'
              }}
            >
              Get Extension
            </a>
          </div>
        </div>
      )}

      {/* Demo Modal */}
      {showDemoModal && React.createElement('div', {
        style: {
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
        },
        onClick: () => setShowDemoModal(false)
      },
        React.createElement('div', {
          style: {
            position: 'relative',
            maxWidth: '500px',
            width: '100%',
            height: 'clamp(500px, 80vh, 700px)',
            background: 'black',
            borderRadius: 'var(--radius-xl)',
            overflow: 'hidden',
            boxShadow: '0 20px 60px rgba(0,0,0,0.5)'
          },
          onClick: (e) => e.stopPropagation()
        },
          // Close Button
          React.createElement('button', {
            style: {
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
            },
            onClick: () => setShowDemoModal(false)
          }, '×'),
          
          // TikTok Embed
          React.createElement('iframe', {
            src: 'https://www.tiktok.com/embed/v2/7486339714144914695',
            style: {
              width: '100%',
              height: '100%',
              border: 'none',
              borderRadius: 'var(--radius-xl)'
            },
            allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
            allowFullScreen: true
          })
        )
      )}

      {/* Reviews Modal */}
      {showReviewsModal && React.createElement('div', {
        style: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.8)',
          zIndex: 10000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 'clamp(1rem, 4vw, 2rem)',
          backdropFilter: 'blur(10px)'
        },
        onClick: () => setShowReviewsModal(false)
      },
        React.createElement('div', {
          style: {
            position: 'relative',
            maxWidth: '800px',
            width: '100%',
            maxHeight: '80vh',
            background: 'white',
            borderRadius: 'var(--radius-xl)',
            overflow: 'hidden',
            boxShadow: '0 20px 60px rgba(0,0,0,0.5)'
          },
          onClick: (e) => e.stopPropagation()
        },
          // Close Button
          React.createElement('button', {
            style: {
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
            },
            onClick: () => setShowReviewsModal(false)
          }, '×'),
          
          // Reviews Content
          React.createElement('div', {
            style: {
              padding: 'clamp(2rem, 5vw, 3rem) clamp(1rem, 4vw, 2rem)',
              textAlign: 'center'
            }
          },
            React.createElement('div', {
              style: {
                fontSize: 'clamp(2.5rem, 8vw, 4rem)',
                marginBottom: '1.5rem'
              }
            }, '⭐'),
            
            React.createElement('h2', {
              style: {
                fontSize: 'clamp(1.5rem, 6vw, 2rem)',
                fontFamily: 'var(--font-serif)',
                marginBottom: '1rem',
                color: 'var(--text-primary)'
              }
            }, 'BetterCanvas Reviews'),
            
            React.createElement('div', {
              style: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 'clamp(0.5rem, 2vw, 1rem)',
                marginBottom: '2rem',
                flexWrap: 'wrap'
              }
            },
              React.createElement('div', {
                style: {
                  display: 'flex',
                  gap: '0.25rem'
                }
              },
                ...Array(5).fill(0).map((_, i) =>
                  React.createElement('span', {
                    key: i,
                    style: {
                      color: '#ffc107',
                      fontSize: 'clamp(1.2rem, 4vw, 2rem)'
                    }
                  }, '⭐')
                )
              ),
              React.createElement('div', {
                style: {
                  marginLeft: 'clamp(0.5rem, 2vw, 1rem)'
                }
              },
                React.createElement('div', {
                  style: {
                    fontSize: 'clamp(1rem, 4vw, 1.5rem)',
                    fontWeight: '600',
                    color: 'var(--text-primary)'
                  }
                }, '5.0 / 5'),
                React.createElement('div', {
                  style: {
                    color: 'var(--text-secondary)',
                    fontSize: 'clamp(0.75rem, 3vw, 0.875rem)'
                  }
                }, '8,400+ reviews')
              )
            ),
            
            React.createElement('p', {
              style: {
                color: 'var(--text-secondary)',
                marginBottom: '2rem',
                fontSize: 'clamp(0.9rem, 3vw, 1.1rem)',
                lineHeight: '1.6'
              }
            }, 'Join thousands of students who love BetterCanvas!'),
            
            React.createElement('a', {
              href: 'https://chromewebstore.google.com/detail/bettercanvas/cndibmoanboadcifjkjbdpjgfedanolh',
              target: '_blank',
              rel: 'noopener noreferrer',
              className: 'btn btn-primary',
              onClick: () => setShowReviewsModal(false),
              style: {
                fontSize: 'clamp(0.9rem, 3vw, 1rem)',
                padding: 'clamp(0.75rem, 3vw, 1rem) clamp(1.5rem, 5vw, 2rem)'
              }
            }, '📝 Read All Reviews')
          )
        )
      )}
    </header>
  )
}

export default Header 