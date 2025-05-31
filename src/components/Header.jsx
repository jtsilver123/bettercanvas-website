import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [showDemoModal, setShowDemoModal] = useState(false)
  const [showReviewsModal, setShowReviewsModal] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  
  // Check if we're on the homepage
  const isHomePage = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Header should have background if:
  // 1. We're scrolled down, OR
  // 2. We're not on the homepage, OR
  // 3. Always show blue background to avoid white gap with banner
  const shouldShowBackground = true // Always show background

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const handleDemoClick = (e) => {
    e.preventDefault()
    setShowDemoModal(true)
    setIsMobileMenuOpen(false) // Close mobile menu
  }

  const handleReviewsClick = (e) => {
    e.preventDefault()
    if (!isHomePage) {
      // If not on homepage, navigate to home first
      window.location.href = '/#testimonials'
    } else {
      // If already on homepage, just scroll
      const testimonialsSection = document.getElementById('testimonials')
      if (testimonialsSection) {
        testimonialsSection.scrollIntoView({ behavior: 'smooth' })
      }
    }
    closeMobileMenu()
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  // Add click outside handler
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.mobile-nav') && !event.target.closest('.mobile-menu-btn')) {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isMobileMenuOpen])

  const handleNavClick = () => {
    scrollToTop()
    closeMobileMenu()
  }

  const handleFeatureClick = (e) => {
    e.preventDefault()
    if (!isHomePage) {
      // If not on homepage, navigate to home first
      window.location.href = '/#features'
    } else {
      // If already on homepage, just scroll
      const featuresSection = document.getElementById('features')
      if (featuresSection) {
        featuresSection.scrollIntoView({ behavior: 'smooth' })
      }
    }
    closeMobileMenu()
  }

  return (
    <header style={{
      position: 'fixed',
      top: '3rem',
      left: 'clamp(2rem, 8vw, 6rem)',
      right: 'clamp(2rem, 8vw, 6rem)',
      zIndex: 1000,
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(20px)',
      border: '1px solid rgba(0, 0, 0, 0.1)',
      borderRadius: 'clamp(1.5rem, 4vw, 2.5rem)',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
      '@media (max-width: 768px)': {
        top: '3rem',
        left: 0,
        right: 0,
        height: '48px',
        borderRadius: 0,
        border: 'none',
        borderTop: 'none',
        borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
        background: 'white',
        boxShadow: 'none',
        display: 'flex',
        alignItems: 'center',
        margin: 0
      }
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '100%',
        padding: 'clamp(0.5rem, 1.5vw, 0.75rem) clamp(0.75rem, 2vw, 1rem)',
        '@media (max-width: 768px)': {
          padding: '0 1.25rem',
          maxWidth: '100%',
          width: '100%'
        }
      }}>
        <Link 
          to="/"
          onClick={handleNavClick}
          style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
            fontWeight: '700',
            color: '#667eea',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
            '@media (max-width: 768px)': {
              fontSize: '1.2rem'
            }
          }}
        >
          BetterCanvas
        </Link>
        
        {/* Desktop Navigation */}
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flex: 1,
          maxWidth: 'clamp(450px, 55vw, 600px)',
          margin: '0 clamp(1rem, 3vw, 2rem)',
          '@media (max-width: 768px)': {
            display: 'none'
          }
        }} className="desktop-nav">
          <Link to="/" onClick={handleNavClick} style={{
            textDecoration: 'none',
            color: location.pathname === '/' ? '#667eea' : 'var(--text-primary)',
            fontWeight: location.pathname === '/' ? '600' : '500',
            fontSize: 'clamp(0.8rem, 1.8vw, 0.9rem)',
            transition: 'all 0.3s ease',
            padding: '0.5rem 0.75rem',
            borderRadius: '0.5rem',
            ':hover': {
              color: '#667eea',
              background: 'rgba(102, 126, 234, 0.1)'
            }
          }}>
            For Students
          </Link>
          <Link to="/for-institutions" onClick={handleNavClick} style={{
            textDecoration: 'none',
            color: location.pathname === '/for-institutions' ? '#667eea' : 'var(--text-primary)',
            fontWeight: location.pathname === '/for-institutions' ? '600' : '500',
            fontSize: 'clamp(0.8rem, 1.8vw, 0.9rem)',
            transition: 'all 0.3s ease',
            padding: '0.5rem 0.75rem',
            borderRadius: '0.5rem',
            ':hover': {
              color: '#667eea',
              background: 'rgba(102, 126, 234, 0.1)'
            }
          }}>
            For Institutions
          </Link>
          <Link to="/for-partners" onClick={handleNavClick} style={{
            textDecoration: 'none',
            color: location.pathname === '/for-partners' ? '#667eea' : 'var(--text-primary)',
            fontWeight: location.pathname === '/for-partners' ? '600' : '500',
              fontSize: 'clamp(0.8rem, 1.8vw, 0.9rem)',
            transition: 'all 0.3s ease',
            padding: '0.5rem 0.75rem',
            borderRadius: '0.5rem',
            ':hover': {
              color: '#667eea',
              background: 'rgba(102, 126, 234, 0.1)'
            }
          }}>
            For Partners
          </Link>
          <Link to="/faq" onClick={handleNavClick} style={{
            textDecoration: 'none',
            color: location.pathname === '/faq' ? '#667eea' : 'var(--text-primary)',
            fontWeight: location.pathname === '/faq' ? '600' : '500',
            fontSize: 'clamp(0.8rem, 1.8vw, 0.9rem)',
            transition: 'all 0.3s ease',
            padding: '0.5rem 0.75rem',
            borderRadius: '0.5rem',
            ':hover': {
              color: '#667eea',
              background: 'rgba(102, 126, 234, 0.1)'
            }
          }}>
            FAQ
          </Link>
          <Link to="/about" onClick={handleNavClick} style={{
            textDecoration: 'none',
            color: location.pathname === '/about' ? '#667eea' : 'var(--text-primary)',
            fontWeight: location.pathname === '/about' ? '600' : '500',
            fontSize: 'clamp(0.8rem, 1.8vw, 0.9rem)',
            transition: 'all 0.3s ease',
            padding: '0.5rem 0.75rem',
            borderRadius: '0.5rem',
            ':hover': {
              color: '#667eea',
              background: 'rgba(102, 126, 234, 0.1)'
            }
          }}>
            Our Story
          </Link>
        </nav>

        {/* More compact CTA button */}
        <a 
          href="https://chromewebstore.google.com/detail/bettercanvas/cndibmoanboadcifjkjbdpjgfedanolh"
          target="_blank"
          rel="noopener noreferrer"
          className="desktop-nav"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.375rem',
            padding: 'clamp(0.4rem, 1.2vw, 0.6rem) clamp(0.8rem, 2vw, 1rem)', // More compact padding
            fontSize: 'clamp(0.75rem, 1.8vw, 0.85rem)', // Smaller font
            fontWeight: '600',
            background: 'var(--primary-gradient)', // Always use gradient background
            color: 'white', // Always use white text
            borderRadius: 'clamp(1rem, 2.5vw, 1.5rem)', // Smaller pill shape
            textDecoration: 'none',
            transition: 'all 0.3s ease',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 2px 6px rgba(0, 0, 0, 0.08)', // Smaller shadow
            flexShrink: 0
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-1px)'
            e.target.style.boxShadow = '0 3px 10px rgba(0, 0, 0, 0.12)'
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)'
            e.target.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.08)'
          }}
        >
          Get Extension
        </a>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMobileMenu}
          className="mobile-menu-btn"
          style={{
            display: 'none',
            '@media (max-width: 768px)': {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2.25rem',
              width: '44px',
              height: '44px',
              padding: 0,
              color: '#1a202c',
              background: 'transparent',
            border: 'none',
            cursor: 'pointer',
              marginRight: '-0.5rem'
            }
          }}
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <>
          <div 
            onClick={closeMobileMenu}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.3)',
              zIndex: 998
            }}
          />
        <div className="mobile-nav" style={{
            position: 'fixed',
            top: 'calc(3rem + 57px)',
          left: 0,
          right: 0,
            background: 'white',
            padding: '0.5rem 0',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            zIndex: 999,
            maxHeight: 'calc(100vh - 3rem - 57px)',
            overflowY: 'auto'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'clamp(0.25rem, 1.5vw, 0.5rem)', // Smaller gaps
            padding: '0 clamp(0.75rem, 2.5vw, 1rem)'
          }}>
              <Link 
                to="/" 
                onClick={handleNavClick}
                style={{
                  padding: 'clamp(0.4rem, 1.5vw, 0.6rem) clamp(0.75rem, 2.5vw, 1rem)',
                  textDecoration: 'none',
                  color: location.pathname === '/' ? '#667eea' : 'var(--text-primary)',
                  fontWeight: location.pathname === '/' ? '600' : '500',
                  borderRadius: 'clamp(0.375rem, 1vw, 0.5rem)',
                  transition: 'all 0.3s ease',
                  fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
                  ':hover': {
                    background: 'rgba(102, 126, 234, 0.1)',
                    color: '#667eea'
                  }
                }}
              >
                For Students
              </Link>
              <Link 
                to="/for-institutions" 
                onClick={handleNavClick}
              style={{
                padding: 'clamp(0.4rem, 1.5vw, 0.6rem) clamp(0.75rem, 2.5vw, 1rem)',
                textDecoration: 'none',
                  color: location.pathname === '/for-institutions' ? '#667eea' : 'var(--text-primary)',
                  fontWeight: location.pathname === '/for-institutions' ? '600' : '500',
                borderRadius: 'clamp(0.375rem, 1vw, 0.5rem)',
                  transition: 'all 0.3s ease',
                  fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
                  ':hover': {
                    background: 'rgba(102, 126, 234, 0.1)',
                    color: '#667eea'
                  }
              }}
            >
                For Institutions
              </Link>
              <Link 
                to="/for-partners" 
                onClick={handleNavClick}
              style={{
                padding: 'clamp(0.4rem, 1.5vw, 0.6rem) clamp(0.75rem, 2.5vw, 1rem)',
                  textDecoration: 'none',
                  color: location.pathname === '/for-partners' ? '#667eea' : 'var(--text-primary)',
                  fontWeight: location.pathname === '/for-partners' ? '600' : '500',
                borderRadius: 'clamp(0.375rem, 1vw, 0.5rem)',
                  transition: 'all 0.3s ease',
                  fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
                  ':hover': {
                    background: 'rgba(102, 126, 234, 0.1)',
                    color: '#667eea'
                  }
              }}
            >
                For Partners
              </Link>
            <Link 
              to="/faq" 
              onClick={handleNavClick}
              style={{
                padding: 'clamp(0.4rem, 1.5vw, 0.6rem) clamp(0.75rem, 2.5vw, 1rem)',
                textDecoration: 'none',
                  color: location.pathname === '/faq' ? '#667eea' : 'var(--text-primary)',
                  fontWeight: location.pathname === '/faq' ? '600' : '500',
                borderRadius: 'clamp(0.375rem, 1vw, 0.5rem)',
                  transition: 'all 0.3s ease',
                  fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
                  ':hover': {
                    background: 'rgba(102, 126, 234, 0.1)',
                    color: '#667eea'
                  }
              }}
            >
              FAQ
            </Link>
            <Link 
                to="/about" 
              onClick={handleNavClick}
              style={{
                padding: 'clamp(0.4rem, 1.5vw, 0.6rem) clamp(0.75rem, 2.5vw, 1rem)',
                textDecoration: 'none',
                  color: location.pathname === '/about' ? '#667eea' : 'var(--text-primary)',
                  fontWeight: location.pathname === '/about' ? '600' : '500',
                borderRadius: 'clamp(0.375rem, 1vw, 0.5rem)',
                  transition: 'all 0.3s ease',
                  fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
                  ':hover': {
                    background: 'rgba(102, 126, 234, 0.1)',
                    color: '#667eea'
                  }
              }}
            >
                Our Story
            </Link>
            <a 
              href="https://chromewebstore.google.com/detail/bettercanvas/cndibmoanboadcifjkjbdpjgfedanolh"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.375rem',
                margin: 'clamp(0.4rem, 1.5vw, 0.75rem) clamp(0.75rem, 2.5vw, 1rem)',
                padding: 'clamp(0.6rem, 2vw, 0.8rem) clamp(1.2rem, 3.5vw, 1.6rem)',
                fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
                fontWeight: '600',
                background: 'var(--primary-gradient)',
                color: 'white',
                borderRadius: 'clamp(1rem, 3vw, 1.5rem)',
                textDecoration: 'none',
                textAlign: 'center',
                boxShadow: '0 3px 10px rgba(0, 0, 0, 0.1)'
              }}
            >
              Get Extension
            </a>
          </div>
        </div>
        </>
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