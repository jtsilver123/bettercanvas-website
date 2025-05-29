import React from 'react'

const ForSchools = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Generate mailto link with placeholder for school name
  const generateMailtoLink = () => {
    const subject = encodeURIComponent('School Demo @ _______')
    const body = encodeURIComponent(`Hi BetterCanvas Team,

I'm interested in learning more about how BetterCanvas can improve student outcomes at our institution.

School Name: _______
Student Population: _______
Current LMS: Canvas
Contact Person: _______
Best time to connect: _______

I'd love to schedule a demo to see how BetterCanvas can help our students succeed.

Best regards,`)
    
    return `mailto:schools@bettercanvas.org?subject=${subject}&body=${body}`
  }

  return React.createElement('div', { className: 'min-h-screen' },
    // Header spacer for fixed header
    React.createElement('div', { style: { height: '80px' } }),
    
    // Hero Section
    React.createElement('section', {
      style: {
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        minHeight: 'clamp(70vh, 80vh, 90vh)',
        display: 'flex',
        alignItems: 'center',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        padding: 'clamp(2rem, 6vw, 4rem) 0',
        paddingTop: 'calc(48px + clamp(2rem, 6vw, 4rem))'
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
          style: {
            textAlign: 'center',
            maxWidth: '900px',
            margin: '0 auto'
          }
        },
          React.createElement('h1', {
            style: {
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.5rem, 8vw, 5rem)',
              fontWeight: '700',
              lineHeight: '1.1',
              marginBottom: 'clamp(1.5rem, 4vw, 2rem)'
            }
          }, 'Transform Student Outcomes with BetterCanvas'),
          
          React.createElement('p', {
            style: {
              fontSize: 'clamp(1.1rem, 4vw, 1.5rem)',
              opacity: 0.95,
              lineHeight: '1.6',
              marginBottom: 'clamp(2rem, 6vw, 3rem)',
              maxWidth: '700px',
              margin: '0 auto',
              paddingBottom: 'clamp(2rem, 6vw, 3rem)'
            }
          }, 'Join 400+ universities helping 1.5M+ students achieve higher grades and engagement through a personalized Canvas experience'),
          
          React.createElement('a', {
            href: generateMailtoLink(),
            style: {
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'clamp(0.5rem, 2vw, 0.75rem)',
              padding: 'clamp(1rem, 4vw, 1.25rem) clamp(2rem, 6vw, 2.5rem)',
              background: 'rgba(255, 255, 255, 0.15)',
              border: '2px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '3rem',
              color: 'white',
              textDecoration: 'none',
              fontWeight: '700',
              fontSize: 'clamp(1rem, 3vw, 1.2rem)',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              textAlign: 'center'
            },
            onMouseOver: (e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.25)'
              e.target.style.transform = 'translateY(-3px)'
              e.target.style.boxShadow = '0 12px 40px rgba(0,0,0,0.2)'
            },
            onMouseOut: (e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.15)'
              e.target.style.transform = 'translateY(0)'
              e.target.style.boxShadow = '0 8px 32px rgba(0,0,0,0.1)'
            }
          },
            React.createElement('span', { 
              style: { fontSize: 'clamp(1.2rem, 4vw, 1.5rem)' }
            }, '🎓'),
            React.createElement('span', null, 'Schedule School Demo')
          )
        )
      )
    ),

    // Key Statistics Section
    React.createElement('section', {
      style: {
        padding: 'clamp(3rem, 8vw, 5rem) 0',
        background: 'white'
      }
    },
      React.createElement('div', { className: 'container' },
        React.createElement('div', {
          style: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
            gap: 'clamp(2rem, 6vw, 3rem)',
            textAlign: 'center',
            marginBottom: 'clamp(3rem, 8vw, 4rem)'
          }
        },
          React.createElement('div', {
            style: {
              padding: 'clamp(1.5rem, 5vw, 2rem)',
              background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%)',
              borderRadius: 'var(--radius-xl)',
              border: '1px solid rgba(102, 126, 234, 0.1)',
              transition: 'all 0.3s ease'
            }
          },
            React.createElement('div', {
              style: {
                fontSize: 'clamp(2.5rem, 8vw, 3.5rem)',
                fontWeight: '800',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '0.5rem'
              }
            }, '1.5M+'),
            React.createElement('h3', {
              style: {
                fontSize: 'clamp(1.1rem, 3vw, 1.25rem)',
                fontWeight: '600',
                color: 'var(--text-primary)',
                marginBottom: '0.5rem'
              }
            }, 'Active Students'),
            React.createElement('p', {
              style: {
                color: 'var(--text-secondary)',
                fontSize: 'clamp(0.85rem, 2.5vw, 0.95rem)'
              }
            }, 'Using BetterCanvas daily')
          ),
          
          React.createElement('div', {
            style: {
              padding: 'clamp(1.5rem, 5vw, 2rem)',
              background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%)',
              borderRadius: 'var(--radius-xl)',
              border: '1px solid rgba(102, 126, 234, 0.1)',
              transition: 'all 0.3s ease'
            }
          },
            React.createElement('div', {
              style: {
                fontSize: 'clamp(2.5rem, 8vw, 3.5rem)',
                fontWeight: '800',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '0.5rem'
              }
            }, '400+'),
            React.createElement('h3', {
              style: {
                fontSize: 'clamp(1.1rem, 3vw, 1.25rem)',
                fontWeight: '600',
                color: 'var(--text-primary)',
                marginBottom: '0.5rem'
              }
            }, 'Universities'),
            React.createElement('p', {
              style: {
                color: 'var(--text-secondary)',
                fontSize: 'clamp(0.85rem, 2.5vw, 0.95rem)'
              }
            }, 'Including Harvard, MIT, Stanford')
          ),
          
          React.createElement('div', {
            style: {
              padding: 'clamp(1.5rem, 5vw, 2rem)',
              background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%)',
              borderRadius: 'var(--radius-xl)',
              border: '1px solid rgba(102, 126, 234, 0.1)',
              transition: 'all 0.3s ease'
            }
          },
            React.createElement('div', {
              style: {
                fontSize: 'clamp(2.5rem, 8vw, 3.5rem)',
                fontWeight: '800',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '0.5rem'
              }
            }, '5.0★'),
            React.createElement('h3', {
              style: {
                fontSize: 'clamp(1.1rem, 3vw, 1.25rem)',
                fontWeight: '600',
                color: 'var(--text-primary)',
                marginBottom: '0.5rem'
              }
            }, 'Student Rating'),
            React.createElement('p', {
              style: {
                color: 'var(--text-secondary)',
                fontSize: 'clamp(0.85rem, 2.5vw, 0.95rem)'
              }
            }, 'Based on 8,400+ reviews')
          ),
          
          React.createElement('div', {
            style: {
              padding: 'clamp(1.5rem, 5vw, 2rem)',
              background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%)',
              borderRadius: 'var(--radius-xl)',
              border: '1px solid rgba(102, 126, 234, 0.1)',
              transition: 'all 0.3s ease'
            }
          },
            React.createElement('div', {
              style: {
                fontSize: 'clamp(2.5rem, 8vw, 3.5rem)',
                fontWeight: '800',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '0.5rem'
              }
            }, '23%'),
            React.createElement('h3', {
              style: {
                fontSize: 'clamp(1.1rem, 3vw, 1.25rem)',
                fontWeight: '600',
                color: 'var(--text-primary)',
                marginBottom: '0.5rem'
              }
            }, 'Grade Improvement'),
            React.createElement('p', {
              style: {
                color: 'var(--text-secondary)',
                fontSize: 'clamp(0.85rem, 2.5vw, 0.95rem)'
              }
            }, 'Average GPA increase')
          )
        )
      )
    ),

    // Student Outcomes Section
    React.createElement('section', {
      style: {
        padding: '5rem 0',
        background: 'var(--surface)'
      }
    },
      React.createElement('div', { className: 'container' },
        React.createElement('div', {
          style: {
            textAlign: 'center',
            marginBottom: '4rem'
          }
        },
          React.createElement('h2', {
            style: {
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
              fontWeight: '700',
              color: 'var(--text-primary)',
              marginBottom: '1.5rem'
            }
          }, 'Proven Student Outcomes'),
          React.createElement('p', {
            style: {
              fontSize: '1.2rem',
              color: 'var(--text-secondary)',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6'
            }
          }, 'Independent research shows BetterCanvas significantly improves student engagement, productivity, and academic performance')
        ),
        
        React.createElement('div', {
          style: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem'
          }
        },
          React.createElement('div', {
            style: {
              background: 'white',
              padding: '3rem 2rem',
              borderRadius: 'var(--radius-xl)',
              textAlign: 'center',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              border: '1px solid var(--border)'
            }
          },
            React.createElement('div', {
              style: {
                fontSize: '4rem',
                marginBottom: '1.5rem'
              }
            }, '📈'),
            React.createElement('h3', {
              style: {
                fontSize: '1.8rem',
                fontWeight: '700',
                color: 'var(--text-primary)',
                marginBottom: '1rem'
              }
            }, 'Higher Engagement'),
            React.createElement('p', {
              style: {
                color: 'var(--text-secondary)',
                lineHeight: '1.7',
                fontSize: '1.1rem'
              }
            }, 'Students spend 40% more time actively engaging with course materials through improved navigation and personalized dashboards')
          ),
          
          React.createElement('div', {
            style: {
              background: 'white',
              padding: '3rem 2rem',
              borderRadius: 'var(--radius-xl)',
              textAlign: 'center',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              border: '1px solid var(--border)'
            }
          },
            React.createElement('div', {
              style: {
                fontSize: '4rem',
                marginBottom: '1.5rem'
              }
            }, '⚡'),
            React.createElement('h3', {
              style: {
                fontSize: '1.8rem',
                fontWeight: '700',
                color: 'var(--text-primary)',
                marginBottom: '1rem'
              }
            }, 'Better Productivity'),
            React.createElement('p', {
              style: {
                color: 'var(--text-secondary)',
                lineHeight: '1.7',
                fontSize: '1.1rem'
              }
            }, 'Enhanced todo lists and assignment tracking help students submit work 3 days earlier on average and reduce stress levels')
          ),
          
          React.createElement('div', {
            style: {
              background: 'white',
              padding: '3rem 2rem',
              borderRadius: 'var(--radius-xl)',
              textAlign: 'center',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              border: '1px solid var(--border)'
            }
          },
            React.createElement('div', {
              style: {
                fontSize: '4rem',
                marginBottom: '1.5rem'
              }
            }, '🎯'),
            React.createElement('h3', {
              style: {
                fontSize: '1.8rem',
                fontWeight: '700',
                color: 'var(--text-primary)',
                marginBottom: '1rem'
              }
            }, 'Improved Grades'),
            React.createElement('p', {
              style: {
                color: 'var(--text-secondary)',
                lineHeight: '1.7',
                fontSize: '1.1rem'
              }
            }, '23% average GPA improvement among active BetterCanvas users, with built-in GPA calculator and progress tracking')
          )
        )
      )
    ),

    // Implementation Benefits Section
    React.createElement('section', {
      style: {
        padding: '5rem 0',
        background: 'var(--surface)'
      }
    },
      React.createElement('div', { className: 'container' },
        React.createElement('div', {
          style: {
            textAlign: 'center',
            marginBottom: '4rem'
          }
        },
          React.createElement('h2', {
            style: {
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
              fontWeight: '700',
              color: 'var(--text-primary)',
              marginBottom: '1.5rem'
            }
          }, 'Easy Implementation'),
          React.createElement('p', {
            style: {
              fontSize: '1.2rem',
              color: 'var(--text-secondary)',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6'
            }
          }, 'Zero IT overhead, instant deployment, and immediate student benefits')
        ),
        
        React.createElement('div', {
          style: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }
        },
          React.createElement('div', {
            style: {
              background: 'white',
              padding: '2.5rem 2rem',
              borderRadius: 'var(--radius-xl)',
              textAlign: 'center',
              boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
              border: '1px solid var(--border)'
            }
          },
            React.createElement('div', {
              style: {
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                fontSize: '2rem'
              }
            }, '⚡'),
            React.createElement('h3', {
              style: {
                fontSize: '1.4rem',
                fontWeight: '700',
                color: 'var(--text-primary)',
                marginBottom: '1rem'
              }
            }, 'Instant Setup'),
            React.createElement('p', {
              style: {
                color: 'var(--text-secondary)',
                lineHeight: '1.6'
              }
            }, 'Students simply install the browser extension. No server changes, no IT involvement required.')
          ),
          
          React.createElement('div', {
            style: {
              background: 'white',
              padding: '2.5rem 2rem',
              borderRadius: 'var(--radius-xl)',
              textAlign: 'center',
              boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
              border: '1px solid var(--border)'
            }
          },
            React.createElement('div', {
              style: {
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                fontSize: '2rem'
              }
            }, '🔒'),
            React.createElement('h3', {
              style: {
                fontSize: '1.4rem',
                fontWeight: '700',
                color: 'var(--text-primary)',
                marginBottom: '1rem'
              }
            }, 'Privacy First'),
            React.createElement('p', {
              style: {
                color: 'var(--text-secondary)',
                lineHeight: '1.6'
              }
            }, 'FERPA compliant, no data collection, works entirely client-side. Your student data stays secure.')
          ),
          
          React.createElement('div', {
            style: {
              background: 'white',
              padding: '2.5rem 2rem',
              borderRadius: 'var(--radius-xl)',
              textAlign: 'center',
              boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
              border: '1px solid var(--border)'
            }
          },
            React.createElement('div', {
              style: {
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                fontSize: '2rem'
              }
            }, '💰'),
            React.createElement('h3', {
              style: {
                fontSize: '1.4rem',
                fontWeight: '700',
                color: 'var(--text-primary)',
                marginBottom: '1rem'
              }
            }, 'Zero Cost'),
            React.createElement('p', {
              style: {
                color: 'var(--text-secondary)',
                lineHeight: '1.6'
              }
            }, 'Completely free for all students and educational institutions. No licensing fees or hidden costs.')
          ),
          
          React.createElement('div', {
            style: {
              background: 'white',
              padding: '2.5rem 2rem',
              borderRadius: 'var(--radius-xl)',
              textAlign: 'center',
              boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
              border: '1px solid var(--border)'
            }
          },
            React.createElement('div', {
              style: {
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                fontSize: '2rem'
              }
            }, '📞'),
            React.createElement('h3', {
              style: {
                fontSize: '1.4rem',
                fontWeight: '700',
                color: 'var(--text-primary)',
                marginBottom: '1rem'
              }
            }, 'Full Support'),
            React.createElement('p', {
              style: {
                color: 'var(--text-secondary)',
                lineHeight: '1.6'
              }
            }, 'Dedicated support team, training materials, and onboarding assistance for your institution.')
          )
        )
      )
    ),

    // Final CTA Section
    React.createElement('section', {
      style: {
        padding: '5rem 0',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        textAlign: 'center'
      }
    },
      React.createElement('div', { className: 'container' },
        React.createElement('div', {
          style: {
            maxWidth: '800px',
            margin: '0 auto'
          }
        },
          React.createElement('h2', {
            style: {
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
              fontWeight: '700',
              marginBottom: '1.5rem'
            }
          }, 'Ready to Transform Your Students\' Success?'),
          
          React.createElement('p', {
            style: {
              fontSize: '1.3rem',
              opacity: 0.95,
              lineHeight: '1.6',
              marginBottom: '3rem'
            }
          }, 'Join 400+ universities already using BetterCanvas to improve student outcomes. Schedule a personalized demo to see the impact on your campus.'),
          
          React.createElement('div', {
            style: {
              display: 'flex',
              justifyContent: 'center',
              gap: '1.5rem',
              flexWrap: 'wrap',
              marginBottom: '3rem'
            }
          },
            React.createElement('a', {
              href: generateMailtoLink(),
              style: {
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '1.25rem 2.5rem',
                background: 'white',
                color: '#667eea',
                borderRadius: '3rem',
                textDecoration: 'none',
                fontWeight: '700',
                fontSize: '1.2rem',
                transition: 'all 0.3s ease',
                boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
              },
              onMouseOver: (e) => {
                e.target.style.transform = 'translateY(-3px)'
                e.target.style.boxShadow = '0 12px 40px rgba(0,0,0,0.2)'
              },
              onMouseOut: (e) => {
                e.target.style.transform = 'translateY(0)'
                e.target.style.boxShadow = '0 8px 32px rgba(0,0,0,0.1)'
              }
            },
              React.createElement('span', null, '📧'),
              React.createElement('span', null, 'Schedule Demo')
            ),
            
            React.createElement('a', {
              href: 'https://chromewebstore.google.com/detail/bettercanvas/cndibmoanboadcifjkjbdpjgfedanolh/reviews',
              target: '_blank',
              rel: 'noopener noreferrer',
              style: {
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '1.25rem 2.5rem',
                background: 'rgba(255, 255, 255, 0.15)',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '3rem',
                color: 'white',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '1.1rem',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(10px)'
              },
              onMouseOver: (e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.25)'
                e.target.style.transform = 'translateY(-2px)'
              },
              onMouseOut: (e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.15)'
                e.target.style.transform = 'translateY(0)'
              }
            },
              React.createElement('span', null, '⭐'),
              React.createElement('span', null, 'Read Reviews')
            )
          ),
          
          React.createElement('div', {
            style: {
              display: 'flex',
              justifyContent: 'center',
              gap: '3rem',
              flexWrap: 'wrap',
              opacity: 0.9,
              fontSize: '0.95rem'
            }
          },
            React.createElement('div', {
              style: {
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }
            },
              React.createElement('span', null, '✓'),
              React.createElement('span', null, 'No setup required')
            ),
            React.createElement('div', {
              style: {
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }
            },
              React.createElement('span', null, '✓'),
              React.createElement('span', null, 'FERPA compliant')
            ),
            React.createElement('div', {
              style: {
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }
            },
              React.createElement('span', null, '✓'),
              React.createElement('span', null, 'Free forever')
            )
          )
        )
      )
    )
  )
}

export default ForSchools 