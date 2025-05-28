import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import TermsOfService from './pages/TermsOfService.jsx'
import FAQ from './pages/FAQ.jsx'

// Header Component
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return React.createElement('header', {
    style: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      background: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
      backdropFilter: isScrolled ? 'blur(20px)' : 'none',
      borderBottom: isScrolled ? '1px solid var(--border-light)' : 'none',
      transition: 'all var(--transition)',
      padding: '1rem 0'
    }
  },
    React.createElement('div', { className: 'container' },
      React.createElement('nav', {
        style: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }
      },
        React.createElement(Link, {
          to: '/',
          className: 'gradient-text',
          style: {
            fontFamily: 'var(--font-serif)',
            fontSize: '1.5rem',
            fontWeight: '500',
            textDecoration: 'none'
          }
        }, 'BetterCanvas'),
        
        React.createElement('div', {
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: '2rem'
          }
        },
          React.createElement('a', {
            href: '#features',
            style: {
              textDecoration: 'none',
              color: 'var(--text-primary)',
              fontWeight: '500',
              transition: 'color var(--transition)'
            }
          }, 'Features'),
          React.createElement(Link, {
            to: '/faq',
            style: {
              textDecoration: 'none',
              color: 'var(--text-primary)',
              fontWeight: '500',
              transition: 'color var(--transition)'
            }
          }, 'FAQ'),
          React.createElement('a', {
            href: '#installation',
            style: {
              textDecoration: 'none',
              color: 'var(--text-primary)',
              fontWeight: '500',
              transition: 'color var(--transition)'
            }
          }, 'Install'),
          React.createElement('a', {
            href: 'https://chromewebstore.google.com/detail/bettercanvas/cndibmoanboadcifjkjbdpjgfedanolh',
            target: '_blank',
            rel: 'noopener noreferrer',
            className: 'btn btn-primary'
          }, 'Get Extension')
        )
      )
    )
  )
}

// Hero Component
const Hero = () => {
  return React.createElement('section', {
    style: {
      background: 'var(--primary-gradient)',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      color: 'white',
      position: 'relative',
      overflow: 'hidden'
    }
  },
    // Background decoration
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
        className: 'text-center',
        style: {
          maxWidth: '900px',
          margin: '0 auto'
        }
      },
        React.createElement('h1', {
          className: 'mb-lg fade-in',
          style: {
            fontFamily: 'var(--font-serif)',
            fontWeight: '500'
          }
        }, 
          'Say goodbye to your ',
          React.createElement('em', {
            style: {
              background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontStyle: 'italic'
            }
          }, 'bland Canvas')
        ),
        
        React.createElement('p', {
          className: 'text-large mb-2xl slide-up',
          style: {
            opacity: 0.9,
            maxWidth: '600px',
            margin: '0 auto 3rem'
          }
        }, 'Personalize your dashboard like never before. Transform Canvas with dark mode, custom themes, better todo lists, and powerful productivity features.'),
        
        React.createElement('div', {
          className: 'slide-up',
          style: {
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '3rem'
          }
        },
          React.createElement('a', {
            href: 'https://chromewebstore.google.com/detail/bettercanvas/cndibmoanboadcifjkjbdpjgfedanolh',
            target: '_blank',
            rel: 'noopener noreferrer',
            className: 'btn btn-glass'
          }, '🌐 Chrome Extension'),
          
          React.createElement('a', {
            href: 'https://addons.mozilla.org/addon/better-canvas/',
            target: '_blank',
            rel: 'noopener noreferrer',
            className: 'btn btn-glass'
          }, '🦊 Firefox Add-on')
        ),
        
        React.createElement('div', {
          className: 'text-small',
          style: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2rem',
            opacity: 0.8,
            flexWrap: 'wrap'
          }
        },
          React.createElement('span', null, '✦ 1.5M+ Users'),
          React.createElement('span', null, '✦ 5.0★ Rating'),
          React.createElement('span', null, '✦ Open Source')
        )
      )
    )
  )
}

// Features Component
const Features = () => {
  const features = [
    {
      icon: '🌙',
      title: 'Dark Mode',
      description: 'BetterCanvas is your best option for making Canvas dark mode. Choose from presets or create your own palette.'
    },
    {
      icon: '🎨',
      title: 'Card Customization',
      description: 'Customize your cards however you want in the card customization tab.'
    },
    {
      icon: '📋',
      title: 'Card Assignments',
      description: 'Easily locate your assignments under each class and see everything you need to do.'
    },
    {
      icon: '✅',
      title: 'Better Todo',
      description: 'Dramatically improve your productivity using the much better todo list.'
    },
    {
      icon: '📊',
      title: 'GPA Calculator',
      description: 'Stay updated on your grades or calculate what-if scores.'
    },
    {
      icon: '🎭',
      title: 'Themes',
      description: 'Make your canvas pop with one of the hundreds of user made themes.'
    }
  ]

  return React.createElement('section', {
    id: 'features',
    className: 'section',
    style: { background: 'var(--surface)' }
  },
    React.createElement('div', { className: 'container' },
      React.createElement('div', { className: 'text-center mb-2xl' },
        React.createElement('h2', { className: 'gradient-text mb-lg' }, 'Powerful Features'),
        React.createElement('p', {
          className: 'text-large',
          style: {
            color: 'var(--text-secondary)',
            maxWidth: '600px',
            margin: '0 auto'
          }
        }, 'Transform your Canvas experience with features designed for modern students')
      ),

      React.createElement('div', {
        className: 'grid grid-responsive mb-2xl'
      }, ...features.map((feature, index) =>
        React.createElement('div', {
          key: index,
          className: 'card card-feature'
        },
          React.createElement('div', {
            style: { fontSize: '3rem', marginBottom: '1.5rem' }
          }, feature.icon),
          
          React.createElement('h3', {
            className: 'mb-md',
            style: { fontFamily: 'var(--font-serif)' }
          }, feature.title),
          
          React.createElement('p', {
            style: { color: 'var(--text-secondary)' }
          }, feature.description)
        )
      )),

      React.createElement('div', {
        className: 'card text-center',
        style: { maxWidth: '800px', margin: '0 auto' }
      },
        React.createElement('h3', {
          className: 'gradient-text-secondary mb-md',
          style: { fontFamily: 'var(--font-serif)' }
        }, 'So much more'),
        React.createElement('p', {
          className: 'text-large mb-xl',
          style: { color: 'var(--text-secondary)' }
        }, 'That\'s not all BetterCanvas has. Install it today and give all the features a try!'),
        React.createElement('div', {
          style: {
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            flexWrap: 'wrap'
          }
        },
          React.createElement('a', {
            href: 'https://chromewebstore.google.com/detail/bettercanvas/cndibmoanboadcifjkjbdpjgfedanolh',
            target: '_blank',
            rel: 'noopener noreferrer',
            className: 'btn btn-primary'
          }, 'Install for Chrome'),
          React.createElement('a', {
            href: 'https://addons.mozilla.org/addon/better-canvas/',
            target: '_blank',
            rel: 'noopener noreferrer',
            className: 'btn btn-outline'
          }, 'Install for Firefox')
        )
      )
    )
  )
}

// Installation Component
const Installation = () => {
  return React.createElement('section', {
    id: 'installation',
    className: 'section'
  },
    React.createElement('div', { className: 'container' },
      React.createElement('div', { className: 'text-center mb-2xl' },
        React.createElement('h2', { className: 'gradient-text mb-lg' }, 'Get Started in Seconds'),
        React.createElement('p', {
          className: 'text-large',
          style: {
            color: 'var(--text-secondary)',
            maxWidth: '600px',
            margin: '0 auto'
          }
        }, 'Install BetterCanvas on your favorite browser and start customizing immediately')
      ),

      React.createElement('div', { className: 'grid grid-2 mb-2xl' },
        // Chrome Installation
        React.createElement('div', { className: 'card text-center' },
          React.createElement('div', {
            style: { fontSize: '4rem', marginBottom: '1.5rem' }
          }, '🌐'),
          React.createElement('h3', {
            className: 'mb-md',
            style: { fontFamily: 'var(--font-serif)' }
          }, 'Google Chrome'),
          React.createElement('p', {
            className: 'mb-xl',
            style: { color: 'var(--text-secondary)' }
          }, 'Available on the Chrome Web Store with over 1,500,000+ users'),
          React.createElement('a', {
            href: 'https://chromewebstore.google.com/detail/bettercanvas/cndibmoanboadcifjkjbdpjgfedanolh',
            target: '_blank',
            rel: 'noopener noreferrer',
            className: 'btn btn-primary',
            style: { width: '100%' }
          }, 'Add to Chrome')
        ),

        // Firefox Installation
        React.createElement('div', { className: 'card text-center' },
          React.createElement('div', {
            style: { fontSize: '4rem', marginBottom: '1.5rem' }
          }, '🦊'),
          React.createElement('h3', {
            className: 'mb-md',
            style: { fontFamily: 'var(--font-serif)' }
          }, 'Mozilla Firefox'),
          React.createElement('p', {
            className: 'mb-xl',
            style: { color: 'var(--text-secondary)' }
          }, 'Available on Firefox Add-ons with the same great features'),
          React.createElement('a', {
            href: 'https://addons.mozilla.org/addon/better-canvas/',
            target: '_blank',
            rel: 'noopener noreferrer',
            className: 'btn btn-secondary',
            style: { width: '100%' }
          }, 'Add to Firefox')
        )
      ),

      // Stats
      React.createElement('div', { className: 'grid grid-3 text-center' },
        React.createElement('div', null,
          React.createElement('div', {
            className: 'gradient-text mb-sm',
            style: {
              fontSize: '2.5rem',
              fontFamily: 'var(--font-serif)',
              fontWeight: '500'
            }
          }, '1.5M+'),
          React.createElement('p', {
            style: { color: 'var(--text-secondary)' }
          }, 'Active Users')
        ),
        
        React.createElement('div', null,
          React.createElement('div', {
            className: 'gradient-text-secondary mb-sm',
            style: {
              fontSize: '2.5rem',
              fontFamily: 'var(--font-serif)',
              fontWeight: '500'
            }
          }, '5.0★'),
          React.createElement('p', {
            style: { color: 'var(--text-secondary)' }
          }, 'Average Rating')
        ),
        
        React.createElement('div', null,
          React.createElement('div', {
            className: 'gradient-text mb-sm',
            style: {
              fontSize: '2.5rem',
              fontFamily: 'var(--font-serif)',
              fontWeight: '500'
            }
          }, '7.4K'),
          React.createElement('p', {
            style: { color: 'var(--text-secondary)' }
          }, 'Reviews')
        )
      )
    )
  )
}

// Footer Component
const Footer = () => {
  return React.createElement('footer', {
    style: {
      background: 'var(--dark-gradient)',
      color: 'white',
      padding: '3rem 0 2rem'
    }
  },
    React.createElement('div', { className: 'container' },
      React.createElement('div', { className: 'grid grid-responsive mb-xl' },
        React.createElement('div', null,
          React.createElement('div', {
            className: 'mb-md',
            style: {
              fontSize: '1.5rem',
              fontFamily: 'var(--font-serif)',
              fontWeight: '500',
              background: 'linear-gradient(135deg, #fff 0%, #f0f0f0 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }
          }, 'BetterCanvas'),
          React.createElement('p', {
            className: 'mb-lg',
            style: { opacity: 0.8, lineHeight: '1.6' }
          }, 'Transforming the Canvas learning experience for over 1.5 million students worldwide.'),
          React.createElement('div', {
            style: { display: 'flex', gap: '1rem' }
          },
            React.createElement('a', {
              href: 'https://github.com/UseBetterCanvas/bettercanvas',
              target: '_blank',
              rel: 'noopener noreferrer',
              style: {
                color: 'white',
                opacity: 0.8,
                textDecoration: 'none',
                transition: 'opacity var(--transition)'
              }
            }, 'GitHub'),
            React.createElement('a', {
              href: 'mailto:support@bettercanvas.org',
              style: {
                color: 'white',
                opacity: 0.8,
                textDecoration: 'none',
                transition: 'opacity var(--transition)'
              }
            }, 'Support')
          )
        ),
        
        React.createElement('div', null,
          React.createElement('h4', {
            className: 'mb-md',
            style: { fontFamily: 'var(--font-serif)' }
          }, 'Support'),
          React.createElement('div', {
            style: { display: 'flex', flexDirection: 'column', gap: '0.5rem' }
          },
            React.createElement(Link, {
              to: '/faq',
              style: {
                color: 'white',
                opacity: 0.8,
                textDecoration: 'none',
                transition: 'opacity var(--transition)'
              }
            }, 'FAQ'),
            React.createElement('a', {
              href: 'mailto:support@bettercanvas.org',
              style: {
                color: 'white',
                opacity: 0.8,
                textDecoration: 'none',
                transition: 'opacity var(--transition)'
              }
            }, 'Contact Support')
          )
        ),
        
        React.createElement('div', null,
          React.createElement('h4', {
            className: 'mb-md',
            style: { fontFamily: 'var(--font-serif)' }
          }, 'Legal'),
          React.createElement('div', {
            style: { display: 'flex', flexDirection: 'column', gap: '0.5rem' }
          },
            React.createElement(Link, {
              to: '/privacy',
              style: {
                color: 'white',
                opacity: 0.8,
                textDecoration: 'none',
                transition: 'opacity var(--transition)'
              }
            }, 'Privacy Policy'),
            React.createElement(Link, {
              to: '/terms',
              style: {
                color: 'white',
                opacity: 0.8,
                textDecoration: 'none',
                transition: 'opacity var(--transition)'
              }
            }, 'Terms of Service')
          )
        )
      ),

      React.createElement('div', {
        style: {
          borderTop: '1px solid rgba(255, 255, 255, 0.2)',
          paddingTop: '2rem',
          textAlign: 'center'
        }
      },
        React.createElement('p', {
          style: { 
            opacity: 0.6,
            fontSize: '0.875rem',
            maxWidth: '800px',
            margin: '0 auto 1.5rem',
            lineHeight: '1.6'
          }
        }, 'BetterCanvas is an independent browser extension developed by BetterCanvas, LLC. We are not affiliated with, endorsed by, or sponsored by Instructure, Inc. (the makers of Canvas LMS), any university, college, school district, or educational institution. "Canvas" and "Canvas LMS" are trademarks of Instructure, Inc.; all other product and company names are the property of their respective owners and are used here solely for identification purposes.'),
        React.createElement('p', {
          style: { opacity: 0.6 }
        }, '© 2025 BetterCanvas. Made with ❤️ for students everywhere.')
      )
    )
  )
}

// Homepage Component (existing components combined)
const HomePage = () => {
  return React.createElement('div', { className: 'App' },
    React.createElement(Header),
    React.createElement(Hero),
    React.createElement(Features),
    React.createElement(Installation),
    React.createElement(Footer)
  )
}

// Main App Component with Router
function App() {
  return React.createElement(Router, null,
    React.createElement(Routes, null,
      React.createElement(Route, { path: '/', element: React.createElement(HomePage) }),
      React.createElement(Route, { path: '/faq', element: React.createElement(FAQ) }),
      React.createElement(Route, { path: '/privacy', element: React.createElement(PrivacyPolicy) }),
      React.createElement(Route, { path: '/terms', element: React.createElement(TermsOfService) })
    )
  )
}

export default App 