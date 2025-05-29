import React, { useState, useEffect, useRef } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import TermsOfService from './pages/TermsOfService.jsx'
import FAQ from './pages/FAQ.jsx'

// Announcement Bar Component
const AnnouncementBar = () => {
  return React.createElement('div', {
    style: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1001,
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      padding: '0.75rem 0',
      textAlign: 'center',
      fontSize: '0.875rem',
      fontWeight: '600',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      margin: 0
    }
  },
    React.createElement('div', { className: 'container' },
      '🚀 Built by students, free for everyone — Premium coming soon!'
    )
  )
}

// Before/After Slider Component
const BeforeAfterSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef(null)

  // Canvas transformation images - replace these URLs with your actual hosted screenshots
  const beforeImageSrc = '/images/canvas-before.jpg' // Original Canvas with red sidebar
  const afterImageSrc = '/images/canvas-after.jpg'   // BetterCanvas with coffee theme

  const handleMouseDown = (e) => {
    setIsDragging(true)
    updateSliderPosition(e)
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return
    updateSliderPosition(e)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleTouchStart = (e) => {
    setIsDragging(true)
    updateSliderPosition(e.touches[0])
  }

  const handleTouchMove = (e) => {
    if (!isDragging) return
    e.preventDefault()
    updateSliderPosition(e.touches[0])
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  const updateSliderPosition = (event) => {
    if (!containerRef.current) return
    
    const rect = containerRef.current.getBoundingClientRect()
    const x = event.clientX - rect.left
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPosition(percentage)
  }

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
      document.addEventListener('touchmove', handleTouchMove, { passive: false })
      document.addEventListener('touchend', handleTouchEnd)
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('touchmove', handleTouchMove)
      document.removeEventListener('touchend', handleTouchEnd)
    }
  }, [isDragging])

  return React.createElement('div', {
    ref: containerRef,
    style: {
      position: 'relative',
      width: '100%',
      height: '400px', // Reduced height for better fit
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      cursor: isDragging ? 'grabbing' : 'grab',
      boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
      border: '1px solid rgba(255,255,255,0.2)',
      background: '#f8f9fa' // Light background in case images don't fill completely
    },
    onMouseDown: handleMouseDown,
    onTouchStart: handleTouchStart
  },
    // Before Image (Original Canvas)
    React.createElement('div', {
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `url(${beforeImageSrc})`,
        backgroundSize: 'contain', // Changed from 'cover' to 'contain'
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }
    }),
    
    // After Image (BetterCanvas) with clip path
    React.createElement('div', {
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `url(${afterImageSrc})`,
        backgroundSize: 'contain', // Changed from 'cover' to 'contain'
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        clipPath: `polygon(${sliderPosition}% 0%, 100% 0%, 100% 100%, ${sliderPosition}% 100%)`
      }
    }),
    
    // Slider Handle
    React.createElement('div', {
      style: {
        position: 'absolute',
        left: `${sliderPosition}%`,
        top: 0,
        height: '100%',
        width: '4px',
        background: 'white',
        transform: 'translateX(-50%)',
        boxShadow: '0 0 20px rgba(0,0,0,0.3)',
        zIndex: 2
      }
    }),
    
    // Drag Handle Circle
    React.createElement('div', {
      style: {
        position: 'absolute',
        left: `${sliderPosition}%`,
        top: '50%',
        width: '50px',
        height: '50px',
        background: 'white',
        borderRadius: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
        cursor: isDragging ? 'grabbing' : 'grab',
        transition: isDragging ? 'none' : 'transform 0.1s ease',
        zIndex: 3
      }
    },
      React.createElement('div', {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: '2px'
        }
      },
        React.createElement('div', {
          style: {
            width: '0',
            height: '0',
            borderTop: '6px solid transparent',
            borderBottom: '6px solid transparent',
            borderRight: '8px solid #667eea'
          }
        }),
        React.createElement('div', {
          style: {
            width: '0',
            height: '0',
            borderTop: '6px solid transparent',
            borderBottom: '6px solid transparent',
            borderLeft: '8px solid #667eea'
          }
        })
      )
    ),
    
    // Dynamic Labels - show based on slider position
    React.createElement('div', {
      style: {
        position: 'absolute',
        top: '20px',
        left: '20px',
        background: 'rgba(0,0,0,0.8)',
        color: 'white',
        padding: '0.5rem 1rem',
        borderRadius: '2rem',
        fontSize: '0.875rem',
        fontWeight: '600',
        zIndex: 4,
        transition: 'all 0.3s ease',
        opacity: sliderPosition < 80 ? 1 : 0.5,
        transform: sliderPosition > 70 ? 'scale(0.9)' : 'scale(1)'
      }
    }, sliderPosition > 60 ? '👈 Drag left to see original' : 'Before: Original Canvas'),
    
    React.createElement('div', {
      style: {
        position: 'absolute',
        top: '20px',
        right: '20px',
        background: 'rgba(0,0,0,0.8)',
        color: 'white',
        padding: '0.5rem 1rem',
        borderRadius: '2rem',
        fontSize: '0.875rem',
        fontWeight: '600',
        zIndex: 4,
        transition: 'all 0.3s ease',
        opacity: sliderPosition > 20 ? 1 : 0.5,
        transform: sliderPosition < 30 ? 'scale(0.9)' : 'scale(1)'
      }
    }, sliderPosition < 40 ? 'Drag right to see transformation 👉' : 'After: BetterCanvas'),
    
    // Updated Instructions
    React.createElement('div', {
      style: {
        position: 'absolute',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        background: 'rgba(255,255,255,0.95)',
        color: 'var(--text-primary)',
        padding: '0.75rem 1.5rem',
        borderRadius: '2rem',
        fontSize: '0.875rem',
        fontWeight: '600',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        zIndex: 4
      }
    },
      React.createElement('span', null, '✨'),
      React.createElement('span', null, 'Drag to transform')
    )
  )
}

// Utility function for opening popups
const openPopup = (url, title = 'Popup', width = 800, height = 600) => {
  const left = window.screen.width / 2 - width / 2
  const top = window.screen.height / 2 - height / 2
  const features = `width=${width},height=${height},left=${left},top=${top},scrollbars=yes,resizable=yes`
  window.open(url, title, features)
}

// Updated Hero Component with Modal State
const Hero = () => {
  const [showDemoModal, setShowDemoModal] = useState(false)
  const [showReviewsModal, setShowReviewsModal] = useState(false)

  const handleDemoClick = (e) => {
    e.preventDefault()
    setShowDemoModal(true)
  }

  const handleReviewsClick = (e) => {
    e.preventDefault()
    setShowReviewsModal(true)
  }

  return React.createElement('section', {
    style: {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      color: 'white',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '48px' // Account for announcement bar
    }
  },
    // Animated background elements
    React.createElement('div', {
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)',
        pointerEvents: 'none'
      }
    }),
    
    React.createElement('div', { 
      className: 'container',
      style: { position: 'relative', zIndex: 1 }
    },
      React.createElement('div', {
        style: {
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'center',
          minHeight: '70vh'
        }
      },
        // Left side - Copy
        React.createElement('div', null,
          React.createElement('h1', {
            className: 'mb-lg',
            style: {
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: '600',
              lineHeight: '1.1',
              marginBottom: '1.5rem'
            }
          }, 'Make Canvas feel like home and watch your grades climb'),
          
          React.createElement('p', {
            className: 'text-xl mb-2xl',
            style: {
              opacity: 0.9,
              lineHeight: '1.6',
              fontSize: '1.25rem',
              marginBottom: '3rem'
            }
          }, 'All your courses, deadlines, and study tools in one upgraded dashboard — no more tab chaos'),
          
          React.createElement('div', {
            style: {
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap',
              marginBottom: '2rem'
            }
          },
            React.createElement('a', {
              href: 'https://chromewebstore.google.com/detail/bettercanvas/cndibmoanboadcifjkjbdpjgfedanolh',
              target: '_blank',
              rel: 'noopener noreferrer',
              className: 'btn btn-glass',
              style: {
                fontSize: '1.1rem',
                padding: '1rem 2rem',
                fontWeight: '600'
              }
            }, '🌐 Add to Chrome — it\'s free'),
            
            React.createElement('button', {
              onClick: handleDemoClick,
              style: {
                background: 'none',
                border: 'none',
                color: 'rgba(255,255,255,0.9)',
                textDecoration: 'underline',
                fontSize: '1.1rem',
                fontWeight: '500',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                cursor: 'pointer'
              }
            }, '▶️ Watch 45-second demo')
          ),
          
          // Trust indicators with reviews popup
          React.createElement('div', {
            style: {
              display: 'flex',
              alignItems: 'center',
              gap: '2rem',
              opacity: 0.8,
              fontSize: '0.875rem'
            }
          },
            React.createElement('button', {
              onClick: handleReviewsClick,
              style: {
                background: 'none',
                border: 'none',
                color: 'inherit',
                textDecoration: 'none',
                cursor: 'pointer',
                transition: 'opacity 0.2s',
                fontSize: 'inherit'
              },
              onMouseEnter: (e) => e.target.style.opacity = '1',
              onMouseLeave: (e) => e.target.style.opacity = '0.8'
            }, '⭐ 5.0 stars'),
            React.createElement('div', null, '🎓 1.6M+ students'),
            React.createElement('div', null, '🔒 100% secure')
          )
        ),
        
        // Right side - Interactive Before/After Slider
        React.createElement('div', {
          style: {
            position: 'relative'
          }
        },
          React.createElement(BeforeAfterSlider)
        )
      )
    ),

    // Demo Modal
    showDemoModal && React.createElement('div', {
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
        padding: '2rem',
        backdropFilter: 'blur(10px)'
      },
      onClick: () => setShowDemoModal(false)
    },
      React.createElement('div', {
        style: {
          position: 'relative',
          maxWidth: '500px',
          width: '100%',
          height: '700px',
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
    ),

    // Reviews Modal
    showReviewsModal && React.createElement('div', {
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
        padding: '2rem',
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
        
        // Reviews Content - Fallback since Chrome Web Store blocks iframe embedding
        React.createElement('div', {
          style: {
            padding: '3rem 2rem',
            textAlign: 'center'
          }
        },
          React.createElement('div', {
            style: {
              fontSize: '4rem',
              marginBottom: '1.5rem'
            }
          }, '⭐'),
          
          React.createElement('h2', {
            style: {
              fontSize: '2rem',
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
              gap: '0.5rem',
              marginBottom: '2rem'
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
                    fontSize: '2rem'
                  }
                }, '⭐')
              )
            ),
            React.createElement('div', {
              style: {
                marginLeft: '1rem'
              }
            },
              React.createElement('div', {
                style: {
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)'
                }
              }, '5.0 / 5'),
              React.createElement('div', {
                style: {
                  color: 'var(--text-secondary)',
                  fontSize: '0.875rem'
                }
              }, '1,847 reviews')
            )
          ),
          
          React.createElement('p', {
            style: {
              color: 'var(--text-secondary)',
              fontSize: '1.1rem',
              marginBottom: '2rem',
              lineHeight: '1.6',
              maxWidth: '500px',
              margin: '0 auto 2rem'
            }
          }, 'Join over 1.6 million students who love BetterCanvas! See what they\'re saying about their Canvas transformation.'),
          
          React.createElement('div', {
            style: {
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              alignItems: 'center'
            }
          },
            React.createElement('a', {
              href: 'https://chromewebstore.google.com/detail/bettercanvas/cndibmoanboadcifjkjbdpjgfedanolh/reviews',
              target: '_blank',
              rel: 'noopener noreferrer',
              style: {
                background: 'var(--primary)',
                color: 'white',
                padding: '1rem 2rem',
                borderRadius: '2rem',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '1.1rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all var(--transition)'
              },
              onClick: () => setShowReviewsModal(false)
            }, 
              React.createElement('span', null, '📝'),
              React.createElement('span', null, 'Read All Reviews')
            ),
            
            React.createElement('div', {
              style: {
                color: 'var(--text-secondary)',
                fontSize: '0.875rem'
              }
            }, 'Opens Chrome Web Store in new tab')
          )
        )
      )
    ),

    // Enhanced Call to Action - View More Videos
    React.createElement('div', {
      className: 'card text-center',
      style: { 
        maxWidth: '800px', 
        margin: '0 auto',
        background: 'linear-gradient(135deg, rgba(255,0,80,0.05) 0%, rgba(255,64,129,0.05) 100%)',
        border: '2px solid rgba(255,0,80,0.1)',
        borderRadius: 'var(--radius-xl)',
        padding: '3rem 2rem',
        position: 'relative',
        overflow: 'hidden'
      }
    },
      // Background decoration
      React.createElement('div', {
        style: {
          position: 'absolute',
          top: '-50%',
          right: '-50%',
          width: '200%',
          height: '200%',
          background: 'radial-gradient(circle, rgba(255,0,80,0.1) 0%, transparent 50%)',
          pointerEvents: 'none'
        }
      }),
      
      React.createElement('div', {
        style: {
          position: 'relative',
          zIndex: 1
        }
      },
        React.createElement('div', {
          style: {
            fontSize: '3rem',
            marginBottom: '1.5rem'
          }
        }, '🚀'),
        
        React.createElement('h3', {
          className: 'gradient-text-secondary mb-lg',
          style: { 
            fontFamily: 'var(--font-serif)',
            fontSize: '2rem'
          }
        }, 'Want to See More?'),
        
        React.createElement('p', {
          className: 'text-large mb-xl',
          style: { 
            color: 'var(--text-secondary)',
            maxWidth: '500px',
            margin: '0 auto 2rem'
          }
        }, 'Discover hundreds more BetterCanvas videos from students worldwide! Share your own Canvas transformation story and join the movement.'),
        
        React.createElement('div', {
          style: {
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            flexWrap: 'wrap',
            marginBottom: '1.5rem'
          }
        },
          React.createElement('a', {
            href: 'https://www.tiktok.com/search?lang=en&q=bettercanvas',
            target: '_blank',
            rel: 'noopener noreferrer',
            className: 'btn btn-primary',
            style: {
              background: 'linear-gradient(135deg, #ff0050 0%, #ff4081 100%)',
              border: 'none',
              fontSize: '1.1rem',
              fontWeight: '600',
              padding: '1rem 2rem'
            }
          }, '🔍 View All BetterCanvas TikToks'),
          
          React.createElement('a', {
            href: 'https://www.tiktok.com/upload',
            target: '_blank',
            rel: 'noopener noreferrer',
            className: 'btn btn-outline',
            style: {
              borderColor: '#ff0050',
              color: '#ff0050',
              fontSize: '1.1rem',
              fontWeight: '600',
              padding: '1rem 2rem'
            }
          }, '📱 Create Your TikTok')
        ),
        
        // Trending hashtags
        React.createElement('div', {
          style: {
            display: 'flex',
            justifyContent: 'center',
            gap: '0.5rem',
            flexWrap: 'wrap'
          }
        },
          ['#bettercanvas', '#canvashacks', '#studylife', '#collegetips'].map((hashtag, index) =>
            React.createElement('span', {
              key: index,
              style: {
                background: 'rgba(255,0,80,0.1)',
                color: '#ff0050',
                padding: '0.25rem 0.75rem',
                borderRadius: '1rem',
                fontSize: '0.875rem',
                fontWeight: '500'
              }
            }, hashtag)
          )
        )
      )
    ),

    // Enhanced Video Modal/Popup
    selectedVideo && React.createElement('div', {
      style: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0,0,0,0.95)',
        zIndex: 10000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        backdropFilter: 'blur(10px)'
      },
      onClick: closeVideoPopup
    },
      React.createElement('div', {
        style: {
          position: 'relative',
          maxWidth: '420px',
          width: '100%',
          height: '600px',
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
          onClick: closeVideoPopup,
          onMouseEnter: (e) => {
            e.target.style.background = 'rgba(255,255,255,0.2)'
          },
          onMouseLeave: (e) => {
            e.target.style.background = 'rgba(0,0,0,0.8)'
          }
        }, '×'),
        
        // TikTok Embed Frame
        React.createElement('iframe', {
          src: selectedVideo.embedUrl,
          style: {
            width: '100%',
            height: '100%',
            border: 'none',
            borderRadius: 'var(--radius-xl)'
          },
          allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
          allowFullScreen: true
        }),
        
        // Fallback content if embed fails
        React.createElement('div', {
          style: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            textAlign: 'center',
            zIndex: -1
          }
        },
          React.createElement('div', null,
            React.createElement('div', {
              style: { fontSize: '4rem', marginBottom: '1rem' }
            }, '📱'),
            React.createElement('h3', {
              style: { marginBottom: '1rem' }
            }, selectedVideo.title),
            React.createElement('p', {
              style: { marginBottom: '1.5rem', opacity: 0.9 }
            }, 'by ' + selectedVideo.displayName),
            React.createElement('a', {
              href: selectedVideo.videoUrl,
              target: '_blank',
              rel: 'noopener noreferrer',
              style: {
                background: 'rgba(255,255,255,0.2)',
                color: 'white',
                padding: '0.75rem 1.5rem',
                borderRadius: '2rem',
                textDecoration: 'none',
                fontWeight: '600'
              }
            }, 'Watch on TikTok')
          )
        )
      )
    )
  )
}

// Main App Component with Router and AnnouncementBar
function App() {
  return React.createElement(Router, null,
    React.createElement('div', null,
      React.createElement(AnnouncementBar),
      React.createElement(Header),
      React.createElement(Routes, null,
        React.createElement(Route, { path: '/', element: React.createElement(HomePage) }),
        React.createElement(Route, { path: '/faq', element: React.createElement(FAQ) }),
        React.createElement(Route, { path: '/privacy', element: React.createElement(PrivacyPolicy) }),
        React.createElement(Route, { path: '/terms', element: React.createElement(TermsOfService) })
      )
    )
  )
}

export default App 