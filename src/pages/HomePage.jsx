import React from 'react'
import Hero from '../components/Hero.jsx'
import Features from '../components/Features.jsx'
import Installation from '../components/Installation.jsx'

// School Logos Marquee Component
const SchoolLogos = () => {
  const schools = [
    {
      name: 'Harvard University',
      logo: '/images/schools/harvard.png',
      alt: 'Harvard University Logo'
    },
    {
      name: 'Stanford University',
      logo: '/images/schools/stanford.png',
      alt: 'Stanford University Logo'
    },
    {
      name: 'MIT',
      logo: '/images/schools/mit.png',
      alt: 'MIT Logo'
    },
    {
      name: 'UC Berkeley',
      logo: '/images/schools/berkeley.png',
      alt: 'UC Berkeley Logo'
    },
    {
      name: 'Yale University',
      logo: '/images/schools/yale.png',
      alt: 'Yale University Logo'
    },
    {
      name: 'Princeton University',
      logo: '/images/schools/princeton.png',
      alt: 'Princeton University Logo'
    },
    {
      name: 'Columbia University',
      logo: '/images/schools/columbia.png',
      alt: 'Columbia University Logo'
    },
    {
      name: 'Cornell University',
      logo: '/images/schools/cornell.png',
      alt: 'Cornell University Logo'
    },
    {
      name: 'UCLA',
      logo: '/images/schools/ucla.png',
      alt: 'UCLA Logo'
    },
    {
      name: 'USC',
      logo: '/images/schools/usc.png',
      alt: 'USC Logo'
    },
    {
      name: 'University of Michigan',
      logo: '/images/schools/michigan.png',
      alt: 'University of Michigan Logo'
    },
    {
      name: 'NYU',
      logo: '/images/schools/nyu.png',
      alt: 'NYU Logo'
    }
  ]

  return React.createElement('section', {
    style: {
      position: 'relative',
      width: '100%',
      overflow: 'hidden',
      padding: 'clamp(2rem, 4vw, 3rem) 0',
      background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%)',
      borderTop: '1px solid rgba(102, 126, 234, 0.1)',
      borderBottom: '1px solid rgba(102, 126, 234, 0.1)'
    }
  },
    React.createElement('div', { className: 'container' },
      React.createElement('div', {
        style: {
          textAlign: 'center',
          marginBottom: 'clamp(1.5rem, 3vw, 2rem)'
        }
      },
        React.createElement('p', {
          style: {
            fontSize: 'clamp(0.875rem, 2vw, 1rem)',
            color: 'var(--text-secondary)',
            fontWeight: '600'
          }
        }, 'Trusted by students at 500+ schools including:')
      )
    ),
    React.createElement('div', {
      style: {
        display: 'flex',
        animation: 'scroll 30s linear infinite',
        gap: 'clamp(2rem, 5vw, 4rem)',
        opacity: 0.8,
        padding: '0 clamp(1rem, 3vw, 2rem)'
      }
    },
      [...schools, ...schools].map((school, i) => 
        React.createElement('div', {
          key: i,
          style: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minWidth: 'clamp(80px, 15vw, 120px)',
            height: 'clamp(40px, 8vw, 60px)'
          }
        },
          React.createElement('img', {
            src: school.logo,
            alt: school.alt,
            style: {
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'contain',
              filter: 'grayscale(1) brightness(0.8)',
              opacity: '0.7',
              transition: 'all 0.3s ease'
            },
            onMouseEnter: (e) => {
              e.target.style.filter = 'grayscale(0) brightness(1)'
              e.target.style.opacity = '1'
            },
            onMouseLeave: (e) => {
              e.target.style.filter = 'grayscale(1) brightness(0.8)'
              e.target.style.opacity = '0.7'
            }
          })
        )
      )
    )
  )
}

// TikTok Grid Component
const TikTokGrid = () => {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768)
  
  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  
  return React.createElement('section', {
    style: {
      padding: isMobile ? 'clamp(2rem, 4vw, 3rem) 0' : 'clamp(3rem, 6vw, 5rem) 0',
      background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.02) 0%, rgba(118, 75, 162, 0.02) 100%)'
    }
  },
    React.createElement('div', { 
      className: 'container',
      style: {
        padding: isMobile ? '0 clamp(0.5rem, 2vw, 1rem)' : '0 var(--space-lg)'
      }
    },
      React.createElement('div', {
        style: {
          textAlign: 'center',
          marginBottom: 'clamp(2rem, 6vw, 4rem)'
        }
      },
        React.createElement('h2', {
          style: {
            fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
            marginBottom: '1rem',
            color: 'var(--text-primary)'
          }
        }, 'See how students use BetterCanvas'),
        React.createElement('p', {
          style: {
            fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)',
            color: 'var(--text-secondary)',
            maxWidth: '600px',
            margin: '0 auto'
          }
        }, 'Join 1.5M+ students improving their Canvas experience')
      ),
      
      React.createElement('div', {
        style: {
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
          gap: 'clamp(1rem, 3vw, 1.5rem)',
          marginBottom: 'clamp(2rem, 4vw, 3rem)',
          maxWidth: isMobile ? '400px' : '1200px',
          margin: '0 auto clamp(2rem, 4vw, 3rem)',
          '@media (max-width: 480px)': {
            maxWidth: '100%',
            padding: '0 1rem'
          }
        }
      },
        [
          '7286662760245579050',
          '7406355670825454890', 
          '7323368950534851883'
        ].map((videoId) =>
          React.createElement('div', {
            key: videoId,
            style: {
              aspectRatio: '9/16',
              background: 'black',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              maxWidth: isMobile ? '100%' : 'none',
              margin: '0 auto',
              '@media (max-width: 480px)': {
                maxWidth: '280px'
              }
            }
          },
            React.createElement('iframe', {
              src: `https://www.tiktok.com/embed/v2/${videoId}`,
              style: {
                width: '100%',
                height: '100%',
                border: 'none'
              },
              loading: 'lazy',
              allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
              allowFullScreen: true
            })
          )
        )
      ),

      React.createElement('div', {
        style: {
          textAlign: 'center'
        }
      },
        React.createElement('a', {
          href: 'https://www.tiktok.com/search?lang=en&q=bettercanvas&t=1748480638590',
          target: '_blank',
          rel: 'noopener noreferrer',
          className: 'btn btn-primary',
          style: {
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
            padding: 'clamp(0.9rem, 3vw, 1rem) clamp(1.5rem, 4vw, 2rem)'
          }
        }, '📱 See more on TikTok')
      )
    )
  )
}

// Testimonials Component
const Testimonials = () => {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768)
  
  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const testimonials = [
    {
      name: "Jordan",
      school: "UC Berkeley",
      review: "BetterCanvas has been a total game-changer for me this semester! The dark mode is so much easier on my eyes during late-night study sessions, and I love how it shows all my upcoming assignments right on the dashboard. Can't imagine going back to regular Canvas now.",
      rating: 5
    },
    {
      name: "Hailey",
      school: "University of Michigan",
      review: "Finally found a way to make Canvas actually enjoyable to use! The custom themes are super fun (I'm obsessed with the pastel one), and the AI summarizer helps me quickly catch up on discussion posts. My friends all installed it after seeing mine.",
      rating: 5
    },
    {
      name: "Alex",
      school: "NYU",
      review: "As someone with ADHD, the clean layout and better organization has helped me stay on top of my assignments so much better. The color coding and priority sorting are exactly what I needed. 100% recommend to anyone who struggles with Canvas!",
      rating: 5
    },
    {
      name: "Mitchell",
      school: "Stanford",
      review: "The automatic grade calculator is literally saving my life this semester! No more stressing about what grade I need on finals. Plus the UI just makes so much more sense - everything is where it should be.",
      rating: 5
    },
    {
      name: "Theron",
      school: "UCLA",
      review: "Been using BetterCanvas for 2 semesters now and it just keeps getting better. The new AI features are super helpful for planning study schedules, and the dark mode is perfect for my night classes. My whole study group uses it now!",
      rating: 5
    },
    {
      name: "Sophia",
      school: "Columbia",
      review: "The AI flashcards feature is a game-changer for exam prep! It automatically creates study sets from my lecture notes and readings. Plus the spaced repetition helps me actually remember everything. Definitely worth installing!",
      rating: 5
    }
  ]

  return React.createElement('section', {
    id: 'testimonials',
    style: {
      padding: isMobile ? 'clamp(3rem, 6vw, 4rem) 0' : 'clamp(4rem, 8vw, 6rem) 0',
      background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.02) 0%, rgba(118, 75, 162, 0.02) 100%)'
    }
  },
    React.createElement('div', { 
      className: 'container',
      style: {
        padding: isMobile ? '0 clamp(1rem, 3vw, 1.5rem)' : '0 var(--space-lg)'
      }
    },
      React.createElement('div', {
        style: {
          textAlign: 'center',
          marginBottom: isMobile ? 'clamp(2rem, 4vw, 3rem)' : 'clamp(3rem, 6vw, 4rem)'
        }
      },
        React.createElement('h2', {
          style: {
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: '700',
            marginBottom: '1rem',
            background: 'var(--primary-gradient)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }
        }, 'What Students Are Saying'),
        React.createElement('p', {
          style: {
            fontSize: 'clamp(1rem, 3vw, 1.2rem)',
            color: 'var(--text-secondary)',
            maxWidth: '600px',
            margin: '0 auto'
          }
        }, 'Join 1.5M+ students who love BetterCanvas'),
        React.createElement('div', {
          style: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            marginTop: '1rem'
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
                  color: '#FFD700',
                  fontSize: 'clamp(1.2rem, 3vw, 1.5rem)'
                }
              }, '⭐')
            )
          ),
          React.createElement('span', {
            style: {
              fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
              fontWeight: '600',
              color: 'var(--text-primary)',
              marginLeft: '0.5rem'
            }
          }, '5.0 (7.4K reviews)')
        )
      ),
      
      React.createElement('div', {
        style: {
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
          gap: isMobile ? 'clamp(1.25rem, 3vw, 1.5rem)' : 'clamp(1.5rem, 4vw, 2rem)',
          marginBottom: isMobile ? 'clamp(2rem, 4vw, 2.5rem)' : 'clamp(2.5rem, 5vw, 3rem)'
        }
      },
        testimonials.map((testimonial, index) =>
          React.createElement('div', {
            key: index,
            style: {
              background: 'white',
              borderRadius: '1rem',
              padding: 'clamp(1.5rem, 4vw, 2rem)',
              border: '1px solid var(--border)',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }
          },
            React.createElement('div', {
              style: {
                display: 'flex',
                gap: '0.25rem',
                marginBottom: '1rem'
              }
            },
              ...Array(testimonial.rating).fill(0).map((_, i) =>
                React.createElement('span', {
                  key: i,
                  style: {
                    color: '#FFD700',
                    fontSize: '1.1rem'
                  }
                }, '⭐')
              )
            ),
            React.createElement('p', {
              style: {
                fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
                lineHeight: '1.6',
                color: 'var(--text-primary)',
                marginBottom: '1rem',
                fontStyle: 'italic'
              }
            }, `"${testimonial.review}"`),
            React.createElement('div', {
              style: {
                fontWeight: '600',
                color: 'var(--text-primary)',
                fontSize: 'clamp(0.85rem, 2vw, 0.95rem)'
              }
            }, `— ${testimonial.name}, ${testimonial.school}`)
          )
        )
      ),

      React.createElement('div', {
        style: {
          textAlign: 'center'
        }
      },
        React.createElement('a', {
          href: 'https://chromewebstore.google.com/detail/bettercanvas/cndibmoanboadcifjkjbdpjgfedanolh/reviews?hl=en',
          target: '_blank',
          rel: 'noopener noreferrer',
          className: 'btn btn-primary',
          style: {
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
            padding: 'clamp(1rem, 3vw, 1.25rem) clamp(2rem, 5vw, 2.5rem)'
          }
        }, '📝 See More Reviews')
      )
    )
  )
}

// Ending CTA Component
const EndingCTA = () => {
  return React.createElement('section', {
    style: {
      padding: 'clamp(3rem, 6vw, 5rem) 0',
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
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: '700',
            marginBottom: 'clamp(1rem, 3vw, 1.5rem)',
            lineHeight: '1.2'
          }
        }, 'Ready to Transform Your Canvas Experience?'),
        
        React.createElement('p', {
          style: {
            fontSize: 'clamp(1rem, 3vw, 1.3rem)',
            opacity: 0.95,
            lineHeight: '1.6',
            marginBottom: 'clamp(2rem, 5vw, 3rem)'
          }
        }, 'Join 1.5M+ students who have already enhanced their learning journey with BetterCanvas.'),
        
        React.createElement('a', {
          href: 'https://chromewebstore.google.com/detail/bettercanvas/cndibmoanboadcifjkjbdpjgfedanolh',
          target: '_blank',
          rel: 'noopener noreferrer',
          style: {
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
            padding: 'clamp(1rem, 3vw, 1.25rem) clamp(1.5rem, 5vw, 2.5rem)',
            fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
            fontWeight: '600',
            background: 'white',
            color: '#667eea',
            borderRadius: '50px',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 20px rgba(255, 255, 255, 0.2)'
          }
        },
          React.createElement('img', {
            src: '/images/chrome-logo.png',
            alt: 'Chrome',
            style: {
              width: 'clamp(1.2rem, 3vw, 1.4rem)',
              height: 'clamp(1.2rem, 3vw, 1.4rem)'
            }
          }),
          'Add to Chrome — It\'s Free'
        )
      )
    )
  )
}

// Social Impact Component
const SocialImpact = () => {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768)
  
  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return React.createElement('section', {
    style: {
      padding: isMobile ? 'clamp(3rem, 6vw, 4rem) 0' : 'clamp(4rem, 8vw, 6rem) 0',
      background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%)',
      borderTop: '1px solid rgba(102, 126, 234, 0.1)',
      borderBottom: '1px solid rgba(102, 126, 234, 0.1)'
    }
  },
    React.createElement('div', { 
      className: 'container',
      style: {
        padding: isMobile ? '0 clamp(1rem, 3vw, 1.5rem)' : '0 var(--space-lg)'
      }
    },
      // Section Header
      React.createElement('div', {
        style: {
          textAlign: 'center',
          marginBottom: isMobile ? 'clamp(2rem, 4vw, 3rem)' : 'clamp(3rem, 6vw, 4rem)'
        }
      },
        React.createElement('h2', {
          style: {
            fontSize: 'clamp(2rem, 4vw, 2.5rem)',
            fontWeight: '700',
            color: 'var(--text-primary)',
            marginBottom: 'clamp(1rem, 2vw, 1.5rem)'
          }
        }, '🌍 Our Social Impact'),
        React.createElement('p', {
          style: {
            fontSize: 'clamp(1.1rem, 2.5vw, 1.25rem)',
            color: 'var(--text-secondary)',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.6'
          }
        }, 'BetterCanvas is committed to the UN Sustainable Development Goals, focusing on quality education and reducing inequalities.')
      ),

      // SDG Goals Grid
      React.createElement('div', {
        style: {
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: isMobile ? 'clamp(1.5rem, 3vw, 2rem)' : 'clamp(2rem, 4vw, 3rem)',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: isMobile ? '0 clamp(1rem, 3vw, 1.5rem)' : 0
        }
      },
        // SDG 4: Quality Education
        React.createElement('div', {
          style: {
            background: 'white',
            borderRadius: 'var(--radius-lg)',
            padding: isMobile ? 'clamp(1.5rem, 3vw, 2rem)' : 'clamp(2rem, 4vw, 2.5rem)',
            boxShadow: 'var(--shadow-sm)',
            border: '1px solid var(--border)',
            height: '100%'
          }
        },
          React.createElement('div', {
            style: {
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: 'clamp(1.5rem, 3vw, 2rem)'
            }
          },
            React.createElement('span', {
              style: {
                fontSize: '2rem'
              }
            }, '🎯'),
            React.createElement('h3', {
              style: {
                fontSize: 'clamp(1.3rem, 3vw, 1.5rem)',
                fontWeight: '600',
                color: 'var(--text-primary)'
              }
            }, 'Goal 4: Quality Education')
          ),
          React.createElement('p', {
            style: {
              fontSize: 'clamp(0.95rem, 2vw, 1rem)',
              color: 'var(--text-secondary)',
              marginBottom: '1.5rem',
              lineHeight: '1.6'
            }
          }, 'Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all.'),
          React.createElement('ul', {
            style: {
              listStyle: 'none',
              padding: 0,
              margin: 0
            }
          },
            ['Enhancing accessibility and usability of Canvas LMS',
             'Providing AI tools that support diverse learning styles',
             'Making it easier for students to stay organized and successful'].map((item, index) =>
              React.createElement('li', {
                key: index,
                style: {
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem',
                  marginBottom: '1rem',
                  fontSize: 'clamp(0.9rem, 2vw, 0.95rem)',
                  color: 'var(--text-secondary)'
                }
              },
                React.createElement('span', {
                  style: { color: '#667eea' }
                }, '✓'),
                item
              )
            )
          )
        ),

        // SDG 10: Reduced Inequalities
        React.createElement('div', {
          style: {
            background: 'white',
            borderRadius: 'var(--radius-lg)',
            padding: 'clamp(2rem, 4vw, 2.5rem)',
            boxShadow: 'var(--shadow-sm)',
            border: '1px solid var(--border)'
          }
        },
          React.createElement('div', {
            style: {
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: 'clamp(1.5rem, 3vw, 2rem)'
            }
          },
            React.createElement('span', {
              style: {
                fontSize: '2rem'
              }
            }, '🌍'),
            React.createElement('h3', {
              style: {
                fontSize: 'clamp(1.3rem, 3vw, 1.5rem)',
                fontWeight: '600',
                color: 'var(--text-primary)'
              }
            }, 'Goal 10: Reduced Inequalities')
          ),
          React.createElement('p', {
            style: {
              fontSize: 'clamp(0.95rem, 2vw, 1rem)',
              color: 'var(--text-secondary)',
              marginBottom: '1.5rem',
              lineHeight: '1.6'
            }
          }, 'Reduce inequality within and among countries.'),
          React.createElement('ul', {
            style: {
              listStyle: 'none',
              padding: 0,
              margin: 0
            }
          },
            ['Level the academic playing field with free learning tools',
             'Compensate for gaps in school-provided resources',
             'Support students at underfunded institutions'].map((item, index) =>
              React.createElement('li', {
                key: index,
                style: {
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem',
                  marginBottom: '1rem',
                  fontSize: 'clamp(0.9rem, 2vw, 0.95rem)',
                  color: 'var(--text-secondary)'
                }
              },
                React.createElement('span', {
                  style: { color: '#667eea' }
                }, '✓'),
                item
              )
            )
          )
        )
      )
    )
  )
}

const HomePage = () => {
  React.useEffect(() => {
    // Check for hash in URL and scroll to section after render
    const hash = window.location.hash
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
  }, [])

  return React.createElement('div', null,
    React.createElement(Hero),
    React.createElement(SchoolLogos),
    React.createElement(TikTokGrid),
    React.createElement('div', { id: 'features' },
      React.createElement(Features)
    ),
    React.createElement(SocialImpact),
    React.createElement('div', { id: 'testimonials' },
      React.createElement(Testimonials)
    ),
    React.createElement(Installation),
    React.createElement(EndingCTA)
  )
}

export default HomePage 