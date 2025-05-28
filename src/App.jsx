import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import TermsOfService from './pages/TermsOfService.jsx'
import FAQ from './pages/FAQ.jsx'

// Announcement Bar Component
const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY < 100)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
      transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
      transition: 'transform 0.3s ease',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
    }
  },
    React.createElement('div', { className: 'container' },
      '🚀 Built by students, free for everyone — Premium coming soon!'
    )
  )
}

// New Hero Component
const Hero = () => {
  return React.createElement('section', {
    style: {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      color: 'white',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '60px' // Account for announcement bar
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
            
            React.createElement('a', {
              href: '#demo',
              style: {
                color: 'rgba(255,255,255,0.9)',
                textDecoration: 'underline',
                fontSize: '1.1rem',
                fontWeight: '500',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }
            }, '▶️ Watch 45-second demo')
          ),
          
          // Trust indicators
          React.createElement('div', {
            style: {
              display: 'flex',
              alignItems: 'center',
              gap: '2rem',
              opacity: 0.8,
              fontSize: '0.875rem'
            }
          },
            React.createElement('div', null, '⭐ 5.0 stars'),
            React.createElement('div', null, '🎓 1.6M+ students'),
            React.createElement('div', null, '🔒 100% secure')
          )
        ),
        
        // Right side - Demo visual
        React.createElement('div', {
          style: {
            position: 'relative',
            height: '500px',
            background: 'rgba(255,255,255,0.1)',
            borderRadius: 'var(--radius-xl)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.2)'
          }
        },
          React.createElement('div', {
            style: {
              textAlign: 'center',
              padding: '2rem'
            }
          },
            React.createElement('div', {
              style: { fontSize: '4rem', marginBottom: '1rem' }
            }, '🎬'),
            React.createElement('h3', {
              style: { marginBottom: '1rem' }
            }, 'Canvas Transformation Demo'),
            React.createElement('p', {
              style: { opacity: 0.8 }
            }, 'See the magic happen in real-time')
          )
        )
      )
    )
  )
}

// University Trust Bar
const UniversityTrustBar = () => {
  const universities = [
    { name: 'UT Austin', color: '#BF5700', initials: 'UT' },
    { name: 'UCLA', color: '#2774AE', initials: 'UCLA' },
    { name: 'UMich', color: '#00274C', initials: 'M' },
    { name: 'Stanford', color: '#8C1515', initials: 'S' },
    { name: 'MIT', color: '#750014', initials: 'MIT' },
    { name: 'Harvard', color: '#A51C30', initials: 'H' },
    { name: 'UC Berkeley', color: '#003262', initials: 'CAL' },
    { name: 'NYU', color: '#57068C', initials: 'NYU' }
  ]

  return React.createElement('section', {
    style: {
      background: 'var(--surface)',
      padding: '2rem 0',
      borderBottom: '1px solid var(--border-light)'
    }
  },
    React.createElement('div', { className: 'container text-center' },
      React.createElement('p', {
        className: 'mb-lg',
        style: {
          color: 'var(--text-secondary)',
          fontSize: '1rem',
          fontWeight: '500'
        }
      }, 'Trusted by 1.6 million students at 2,000+ campuses'),
      
      React.createElement('div', {
        style: {
          display: 'flex',
          overflow: 'hidden',
          whiteSpace: 'nowrap'
        }
      },
        React.createElement('div', {
          style: {
            display: 'flex',
            animation: 'scroll 20s linear infinite',
            gap: '2rem'
          }
        },
          ...universities.concat(universities).map((uni, index) =>
            React.createElement('div', {
              key: index,
              style: {
                minWidth: '80px',
                height: '60px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                filter: 'grayscale(1)',
                opacity: 0.6,
                transition: 'all var(--transition)'
              }
            },
              React.createElement('div', {
                style: {
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: uni.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '0.25rem'
                }
              },
                React.createElement('span', {
                  style: {
                    color: 'white',
                    fontSize: '0.6rem',
                    fontWeight: '700'
                  }
                }, uni.initials)
              ),
              React.createElement('div', {
                style: {
                  fontSize: '0.65rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)'
                }
              }, uni.name)
            )
          )
        )
      )
    )
  )
}

// Pain Points to Solutions
const PainToSolution = () => {
  const painPoints = [
    {
      problem: 'Missed deadlines',
      icon: '⏰',
      solution: 'Smart reminders & calendar sync'
    },
    {
      problem: 'Messy UI',
      icon: '🎨',
      solution: 'Clean themes & custom layouts'
    },
    {
      problem: 'No study insights',
      icon: '📊',
      solution: 'GPA tracking & progress analytics'
    }
  ]

  return React.createElement('section', {
    className: 'section',
    style: { background: 'var(--background)' }
  },
    React.createElement('div', { className: 'container' },
      React.createElement('div', { className: 'text-center mb-2xl' },
        React.createElement('h2', {
          className: 'gradient-text mb-lg',
          style: { fontFamily: 'var(--font-serif)' }
        }, 'Canvas problems, meet simple solutions')
      ),
      
      React.createElement('div', { className: 'grid grid-3' },
        ...painPoints.map((item, index) =>
          React.createElement('div', {
            key: index,
            className: 'card text-center',
            style: { position: 'relative' }
          },
            React.createElement('div', {
              style: { fontSize: '3rem', marginBottom: '1rem' }
            }, item.icon),
            
            React.createElement('h3', {
              className: 'mb-md',
              style: {
                color: '#e74c3c',
                textDecoration: 'line-through',
                opacity: 0.7
              }
            }, item.problem),
            
            React.createElement('div', {
              style: {
                background: 'linear-gradient(135deg, #27ae60, #2ecc71)',
                color: 'white',
                padding: '0.5rem 1rem',
                borderRadius: '2rem',
                fontSize: '0.875rem',
                fontWeight: '600',
                marginBottom: '1rem'
              }
            }, '✅ Solved by BetterCanvas'),
            
            React.createElement('p', {
              style: {
                color: 'var(--text-secondary)',
                fontWeight: '500'
              }
            }, item.solution)
          )
        )
      )
    )
  )
}

// Feature Snapshots
const FeatureSnapshots = () => {
  const features = [
    {
      title: 'Pin, don\'t hunt',
      description: 'Customize your sidebar with pinned courses and quick access to everything that matters.',
      icon: '📌',
      image: '🎯',
      side: 'left'
    },
    {
      title: 'Ask, don\'t click',
      description: 'AI Copilot answers "What\'s due next week?" instantly — no more hunting through tabs.',
      icon: '🤖',
      image: '💬',
      side: 'right'
    },
    {
      title: 'Track, don\'t guess',
      description: 'Live GPA tracking and grade insights help you stay on top of your academic goals.',
      icon: '📈',
      image: '📊',
      side: 'left'
    }
  ]

  return React.createElement('section', {
    className: 'section',
    style: { background: 'var(--surface)' }
  },
    React.createElement('div', { className: 'container' },
      ...features.map((feature, index) =>
        React.createElement('div', {
          key: index,
          className: 'mb-4xl',
          style: {
            display: 'grid',
            gridTemplateColumns: feature.side === 'left' ? '1fr 1fr' : '1fr 1fr',
            gap: '3rem',
            alignItems: 'center'
          }
        },
          // Content side
          React.createElement('div', {
            style: {
              order: feature.side === 'left' ? 1 : 2
            }
          },
            React.createElement('div', {
              style: {
                fontSize: '3rem',
                marginBottom: '1rem'
              }
            }, feature.icon),
            
            React.createElement('h3', {
              className: 'gradient-text mb-md',
              style: {
                fontFamily: 'var(--font-serif)',
                fontSize: '2rem'
              }
            }, feature.title),
            
            React.createElement('p', {
              className: 'text-large',
              style: {
                color: 'var(--text-secondary)',
                lineHeight: '1.6'
              }
            }, feature.description)
          ),
          
          // Visual side
          React.createElement('div', {
            className: 'card',
            style: {
              order: feature.side === 'left' ? 2 : 1,
              height: '300px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)',
              color: 'white',
              textAlign: 'center'
            }
          },
            React.createElement('div', null,
              React.createElement('div', {
                style: { fontSize: '4rem', marginBottom: '1rem' }
              }, feature.image),
              React.createElement('p', {
                style: { opacity: 0.9 }
              }, 'Feature Demo')
            )
          )
        )
      )
    )
  )
}

// Social Proof Quotes
const SocialProof = () => {
  const testimonials = [
    {
      name: 'Leah',
      school: 'Purdue',
      quote: 'BetterCanvas saved me two all-nighters last semester 😊',
      avatar: '👩‍🎓'
    },
    {
      name: 'Marcus',
      school: 'UMich',
      quote: 'My GPA went up 0.3 points after using this!',
      avatar: '👨‍💻'
    },
    {
      name: 'Sarah',
      school: 'UCLA',
      quote: 'Finally, Canvas doesn\'t look like it\'s from 2010 ✨',
      avatar: '👩‍🔬'
    },
    {
      name: 'David',
      school: 'UT Austin',
      quote: 'The AI copilot is like having a personal assistant 🤖',
      avatar: '👨‍🎓'
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return React.createElement('section', {
    className: 'section',
    style: { 
      background: 'linear-gradient(135deg, var(--background) 0%, var(--surface) 100%)',
      overflow: 'hidden'
    }
  },
    React.createElement('div', { className: 'container text-center' },
      React.createElement('h2', {
        className: 'gradient-text mb-2xl',
        style: { fontFamily: 'var(--font-serif)' }
      }, 'Real students, real results'),
      
      React.createElement('div', {
        className: 'card',
        style: {
          maxWidth: '600px',
          margin: '0 auto',
          padding: '3rem 2rem',
          position: 'relative',
          minHeight: '200px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }
      },
        React.createElement('div', {
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem'
          }
        },
          React.createElement('div', {
            style: {
              fontSize: '4rem',
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }
          }, testimonials[currentIndex].avatar),
          
          React.createElement('div', {
            style: { textAlign: 'left', flex: 1 }
          },
            React.createElement('p', {
              className: 'text-large mb-md',
              style: {
                fontStyle: 'italic',
                color: 'var(--text-primary)'
              }
            }, `"${testimonials[currentIndex].quote}"`),
            
            React.createElement('div', {
              style: {
                fontWeight: '600',
                color: 'var(--text-secondary)'
              }
            }, `${testimonials[currentIndex].name}, ${testimonials[currentIndex].school}`)
          )
        )
      ),
      
      // Dots indicator
      React.createElement('div', {
        style: {
          display: 'flex',
          justifyContent: 'center',
          gap: '0.5rem',
          marginTop: '2rem'
        }
      },
        ...testimonials.map((_, index) =>
          React.createElement('div', {
            key: index,
            style: {
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: index === currentIndex ? 'var(--primary)' : 'var(--border-light)',
              transition: 'all var(--transition)'
            }
          })
        )
      )
    )
  )
}

// How It Works
const HowItWorks = () => {
  const steps = [
    { number: '1', title: 'Install', description: 'Add BetterCanvas to Chrome in one click', icon: '⬇️' },
    { number: '2', title: 'Sync Canvas', description: 'Automatically connects to your school\'s Canvas', icon: '🔗' },
    { number: '3', title: 'Study smarter', description: 'Enjoy your upgraded, personalized dashboard', icon: '🚀' }
  ]

  return React.createElement('section', {
    className: 'section',
    style: { background: 'var(--background)' }
  },
    React.createElement('div', { className: 'container text-center' },
      React.createElement('h2', {
        className: 'gradient-text mb-2xl',
        style: { fontFamily: 'var(--font-serif)' }
      }, 'Get started in 3 simple steps'),
      
      React.createElement('div', { className: 'grid grid-3' },
        ...steps.map((step, index) =>
          React.createElement('div', {
            key: index,
            className: 'card text-center'
          },
            React.createElement('div', {
              style: {
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                fontWeight: '700',
                margin: '0 auto 1.5rem'
              }
            }, step.number),
            
            React.createElement('div', {
              style: { fontSize: '2rem', marginBottom: '1rem' }
            }, step.icon),
            
            React.createElement('h3', {
              className: 'mb-md',
              style: { fontFamily: 'var(--font-serif)' }
            }, step.title),
            
            React.createElement('p', {
              style: { color: 'var(--text-secondary)' }
            }, step.description)
          )
        )
      )
    )
  )
}

// Free vs Premium
const FreePremiumComparison = () => {
  return React.createElement('section', {
    className: 'section',
    style: { background: 'var(--surface)' }
  },
    React.createElement('div', { className: 'container' },
      React.createElement('div', { className: 'text-center mb-2xl' },
        React.createElement('h2', {
          className: 'gradient-text mb-lg',
          style: { fontFamily: 'var(--font-serif)' }
        }, 'Free forever, premium coming soon'),
        React.createElement('p', {
          className: 'text-large',
          style: { color: 'var(--text-secondary)' }
        }, 'Pro costs less than one boba a month')
      ),
      
      React.createElement('div', {
        style: {
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2rem',
          maxWidth: '800px',
          margin: '0 auto'
        }
      },
        // Free column
        React.createElement('div', {
          className: 'card',
          style: { padding: '2rem' }
        },
          React.createElement('h3', {
            className: 'mb-lg text-center',
            style: { fontFamily: 'var(--font-serif)' }
          }, 'Free Forever'),
          
          React.createElement('ul', {
            style: { listStyle: 'none', padding: 0 }
          },
            ['Dark mode & themes', 'Custom sidebar', 'GPA calculator', 'Todo lists', 'Basic analytics'].map((feature, index) =>
              React.createElement('li', {
                key: index,
                style: {
                  padding: '0.5rem 0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }
              },
                React.createElement('span', { style: { color: '#27ae60' } }, '✅'),
                React.createElement('span', null, feature)
              )
            )
          )
        ),
        
        // Premium column
        React.createElement('div', {
          className: 'card',
          style: {
            padding: '2rem',
            border: '2px solid var(--primary)',
            position: 'relative'
          }
        },
          React.createElement('div', {
            style: {
              position: 'absolute',
              top: '-12px',
              left: '50%',
              transform: 'translateX(-50%)',
              background: 'var(--primary)',
              color: 'white',
              padding: '0.5rem 1rem',
              borderRadius: '1rem',
              fontSize: '0.875rem',
              fontWeight: '600'
            }
          }, 'Coming Fall 2025'),
          
          React.createElement('h3', {
            className: 'mb-lg text-center',
            style: { fontFamily: 'var(--font-serif)' }
          }, 'Premium'),
          
          React.createElement('ul', {
            style: { listStyle: 'none', padding: 0 }
          },
            ['Everything in Free', 'AI Study Copilot', 'Advanced analytics', 'Study time tracking', 'Grade predictions', 'Priority support'].map((feature, index) =>
              React.createElement('li', {
                key: index,
                style: {
                  padding: '0.5rem 0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }
              },
                React.createElement('span', { style: { color: 'var(--primary)' } }, '⭐'),
                React.createElement('span', null, feature)
              )
            )
          )
        )
      )
    )
  )
}

// Discord Community Banner
const DiscordBanner = () => {
  return React.createElement('section', {
    style: {
      background: 'linear-gradient(135deg, #5865F2 0%, #7289DA 100%)',
      color: 'white',
      padding: '3rem 0'
    }
  },
    React.createElement('div', { className: 'container text-center' },
      React.createElement('div', {
        style: { fontSize: '3rem', marginBottom: '1rem' }
      }, '💬'),
      
      React.createElement('h3', {
        className: 'mb-md',
        style: { fontFamily: 'var(--font-serif)' }
      }, 'Join 5k study pals swapping hacks'),
      
      React.createElement('p', {
        className: 'mb-xl',
        style: { opacity: 0.9 }
      }, 'Get study tips, share themes, and connect with students using BetterCanvas'),
      
      React.createElement('a', {
        href: 'https://discord.gg/bettercanvas',
        target: '_blank',
        rel: 'noopener noreferrer',
        className: 'btn btn-glass'
      }, '🎮 Join Discord Community')
    )
  )
}

// FAQ Accordion
const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null)
  
  const faqs = [
    {
      question: 'Will my school ban me?',
      answer: 'No! BetterCanvas is just a browser extension that enhances your Canvas interface. It doesn\'t modify Canvas servers or violate any terms of service. Thousands of students use it safely.'
    },
    {
      question: 'Do you sell my data?',
      answer: 'Never. We don\'t collect personal data, grades, or course content. BetterCanvas works locally in your browser and only stores your preferences and settings.'
    },
    {
      question: 'Are you affiliated with Instructure?',
      answer: 'No, BetterCanvas is an independent tool created by students. We\'re not affiliated with Instructure, Canvas, or any university.'
    },
    {
      question: 'Does it work on mobile?',
      answer: 'BetterCanvas is designed for desktop/laptop use with Chrome and Firefox. Mobile browser extensions have limited capabilities, but we\'re exploring mobile solutions.'
    },
    {
      question: 'Is it really free?',
      answer: 'Yes! All core features are free forever. We\'re working on premium features for power users, but the essential tools will always be free.'
    }
  ]

  return React.createElement('section', {
    className: 'section',
    style: { background: 'var(--background)' }
  },
    React.createElement('div', { className: 'container' },
      React.createElement('div', { className: 'text-center mb-2xl' },
        React.createElement('h2', {
          className: 'gradient-text mb-lg',
          style: { fontFamily: 'var(--font-serif)' }
        }, 'Frequently asked questions')
      ),
      
      React.createElement('div', {
        style: { maxWidth: '800px', margin: '0 auto' }
      },
        ...faqs.map((faq, index) =>
          React.createElement('div', {
            key: index,
            className: 'card mb-md',
            style: { padding: 0 }
          },
            React.createElement('button', {
              style: {
                width: '100%',
                padding: '1.5rem 2rem',
                textAlign: 'left',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontWeight: '600',
                fontSize: '1.1rem'
              },
              onClick: () => setOpenIndex(openIndex === index ? null : index)
            },
              React.createElement('span', null, faq.question),
              React.createElement('span', {
                style: {
                  transform: openIndex === index ? 'rotate(45deg)' : 'rotate(0deg)',
                  transition: 'transform var(--transition)',
                  fontSize: '1.5rem'
                }
              }, '+')
            ),
            
            openIndex === index && React.createElement('div', {
              style: {
                padding: '0 2rem 1.5rem',
                color: 'var(--text-secondary)',
                lineHeight: '1.6'
              }
            }, faq.answer)
          )
        )
      )
    )
  )
}

// Final CTA Banner
const FinalCTA = () => {
  return React.createElement('section', {
    style: {
      background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)',
      color: 'white',
      padding: '4rem 0'
    }
  },
    React.createElement('div', { className: 'container text-center' },
      React.createElement('h2', {
        className: 'mb-lg',
        style: {
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(2rem, 4vw, 3rem)'
        }
      }, 'Turn Canvas into the ultimate study hub — in one click'),
      
      React.createElement('p', {
        className: 'text-xl mb-2xl',
        style: { opacity: 0.9 }
      }, 'Join 1.6 million students who transformed their Canvas experience'),
      
      React.createElement('a', {
        href: 'https://chromewebstore.google.com/detail/bettercanvas/cndibmoanboadcifjkjbdpjgfedanolh',
        target: '_blank',
        rel: 'noopener noreferrer',
        className: 'btn btn-glass',
        style: {
          fontSize: '1.2rem',
          padding: '1.25rem 2.5rem'
        }
      }, '🚀 Add to Chrome — Free Forever')
    )
  )
}

// Updated Footer
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
              fontWeight: '500'
            }
          }, 'BetterCanvas'),
          React.createElement('p', {
            className: 'mb-lg',
            style: { opacity: 0.8, lineHeight: '1.6' }
          }, 'Built by students, for students. Making Canvas better, one extension at a time.'),
          React.createElement('div', {
            style: { display: 'flex', gap: '1rem' }
          },
            React.createElement('a', {
              href: 'https://github.com/UseBetterCanvas/bettercanvas',
              target: '_blank',
              rel: 'noopener noreferrer',
              style: { color: 'white', opacity: 0.8, textDecoration: 'none' }
            }, 'GitHub'),
            React.createElement('a', {
              href: 'https://discord.gg/bettercanvas',
              target: '_blank',
              rel: 'noopener noreferrer',
              style: { color: 'white', opacity: 0.8, textDecoration: 'none' }
            }, 'Discord'),
            React.createElement('a', {
              href: 'mailto:support@bettercanvas.org',
              style: { color: 'white', opacity: 0.8, textDecoration: 'none' }
            }, 'Support')
          )
        ),
        
        React.createElement('div', null,
          React.createElement('h4', {
            className: 'mb-md',
            style: { fontFamily: 'var(--font-serif)' }
          }, 'Community'),
          React.createElement('div', {
            style: { display: 'flex', flexDirection: 'column', gap: '0.5rem' }
          },
            React.createElement('a', {
              href: '#campus-rep',
              style: { color: 'white', opacity: 0.8, textDecoration: 'none' }
            }, 'Campus Rep Program'),
            React.createElement('a', {
              href: 'https://discord.gg/bettercanvas',
              target: '_blank',
              rel: 'noopener noreferrer',
              style: { color: 'white', opacity: 0.8, textDecoration: 'none' }
            }, 'Discord Community'),
            React.createElement(Link, {
              to: '/faq',
              style: { color: 'white', opacity: 0.8, textDecoration: 'none' }
            }, 'FAQ')
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
              style: { color: 'white', opacity: 0.8, textDecoration: 'none' }
            }, 'Privacy Policy'),
            React.createElement(Link, {
              to: '/terms',
              style: { color: 'white', opacity: 0.8, textDecoration: 'none' }
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
            fontStyle: 'italic',
            opacity: 0.7,
            fontSize: '0.875rem',
            marginBottom: '1rem'
          }
        }, 'BetterCanvas is an independent tool and is not affiliated with Instructure, Canvas, or any university.'),
        React.createElement('p', {
          style: { opacity: 0.6 }
        }, '© 2025 BetterCanvas. Made with ❤️ by students, for students.')
      )
    )
  )
}

// Updated Header with announcement bar offset
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return React.createElement('header', {
    style: {
      position: 'fixed',
      top: isScrolled ? 0 : '60px', // Offset by announcement bar when visible
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
          style: {
            fontFamily: 'var(--font-serif)',
            fontSize: '1.5rem',
            fontWeight: '500',
            textDecoration: 'none',
            color: isScrolled ? '#667eea' : 'white',
            transition: 'all var(--transition)'
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
              color: isScrolled ? 'var(--text-primary)' : 'rgba(255,255,255,0.9)',
              fontWeight: '500',
              transition: 'color var(--transition)'
            }
          }, 'Features'),
          React.createElement(Link, {
            to: '/faq',
            style: {
              textDecoration: 'none',
              color: isScrolled ? 'var(--text-primary)' : 'rgba(255,255,255,0.9)',
              fontWeight: '500',
              transition: 'color var(--transition)'
            }
          }, 'FAQ'),
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

// Updated Homepage Component
const HomePage = () => {
  return React.createElement('div', { className: 'App' },
    React.createElement(Hero),
    React.createElement(UniversityTrustBar),
    React.createElement(PainToSolution),
    React.createElement(FeatureSnapshots),
    React.createElement(SocialProof),
    React.createElement(TikTokFeed),
    React.createElement(HowItWorks),
    React.createElement(FreePremiumComparison),
    React.createElement(DiscordBanner),
    React.createElement(FAQAccordion),
    React.createElement(FinalCTA),
    React.createElement(Footer)
  )
}

// TikTok Feed Component
const TikTokFeed = () => {
  // Real TikTok videos from #bettercanvas search
  const tiktokVideos = [
    {
      id: '7409365794259340587',
      videoUrl: 'https://www.tiktok.com/@nixxalicious/video/7409365794259340587?lang=en&q=bettercanvas',
      embedUrl: 'https://www.tiktok.com/embed/v2/7409365794259340587',
      title: 'BetterCanvas extension review - game changer for Canvas! 🔥',
      username: '@nixxalicious',
      displayName: 'Nixxalicious',
      likes: '2.8K',
      views: '45.2K',
      shares: '312',
      comments: '156',
      // TikTok thumbnail URL (will show gradient fallback until real thumbnail loads)
      thumbnail: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/nixxalicious-thumb.jpg',
      isVerified: false,
      duration: '0:24'
    },
    {
      id: '7329957623598533931',
      videoUrl: 'https://www.tiktok.com/@xoreree/video/7329957623598533931?lang=en&q=bettercanvas',
      embedUrl: 'https://www.tiktok.com/embed/v2/7329957623598533931',
      title: 'How BetterCanvas changed my Canvas experience completely ✨',
      username: '@xoreree',
      displayName: 'Xoreree',
      likes: '1.9K',
      views: '28.7K',
      shares: '189',
      comments: '93',
      thumbnail: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/xoreree-thumb.jpg',
      isVerified: false,
      duration: '0:31'
    },
    {
      id: '7286662760245579050',
      videoUrl: 'https://www.tiktok.com/@milowmusi/video/7286662760245579050?lang=en&q=bettercanvas',
      embedUrl: 'https://www.tiktok.com/embed/v2/7286662760245579050',
      title: 'BetterCanvas dark mode hits different 🌙 Canvas customization tips',
      username: '@milowmusi',
      displayName: 'Milow Musi',
      likes: '4.1K',
      views: '67.3K',
      shares: '528',
      comments: '247',
      thumbnail: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/milowmusi-thumb.jpg',
      isVerified: false,
      duration: '0:42'
    }
  ]

  const [selectedVideo, setSelectedVideo] = React.useState(null)

  // Function to handle video selection and popup
  const openVideoPopup = (video) => {
    setSelectedVideo(video)
  }

  // Function to close video popup
  const closeVideoPopup = () => {
    setSelectedVideo(null)
  }

  // Function to format numbers (e.g., 1200 -> 1.2K)
  const formatNumber = (num) => {
    const number = parseInt(num.replace(/[^\d]/g, ''))
    if (number >= 1000000) {
      return (number / 1000000).toFixed(1) + 'M'
    } else if (number >= 1000) {
      return (number / 1000).toFixed(1) + 'K'
    }
    return number.toString()
  }

  return React.createElement('section', {
    className: 'section',
    style: { 
      background: 'linear-gradient(135deg, var(--background) 0%, var(--surface) 100%)',
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
        background: 'radial-gradient(circle at 80% 20%, rgba(102, 126, 234, 0.05) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(118, 75, 162, 0.05) 0%, transparent 50%)',
        pointerEvents: 'none'
      }
    }),

    React.createElement('div', { 
      className: 'container',
      style: { position: 'relative', zIndex: 1 }
    },
      React.createElement('div', { className: 'text-center mb-2xl' },
        React.createElement('div', {
          style: {
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'linear-gradient(135deg, #ff0050, #ff4081)',
            color: 'white',
            padding: '0.5rem 1rem',
            borderRadius: '2rem',
            fontSize: '0.875rem',
            fontWeight: '600',
            marginBottom: '1rem'
          }
        },
          React.createElement('span', null, '🔥'),
          React.createElement('span', null, 'TRENDING ON TIKTOK')
        ),
        
        React.createElement('h2', { 
          className: 'gradient-text mb-lg',
          style: { 
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2rem, 5vw, 3rem)'
          }
        }, 'See BetterCanvas in Action'),
        
        React.createElement('p', {
          className: 'text-large mb-md',
          style: {
            color: 'var(--text-secondary)',
            maxWidth: '600px',
            margin: '0 auto'
          }
        }, 'Watch real students transform their Canvas experience with BetterCanvas features'),
        
        React.createElement('div', {
          style: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            flexWrap: 'wrap',
            color: 'var(--text-secondary)',
            fontSize: '0.875rem'
          }
        },
          React.createElement('div', {
            style: {
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }
          },
            React.createElement('span', null, '📱'),
            React.createElement('span', null, 'Follow '),
            React.createElement('a', {
              href: 'https://www.tiktok.com/search?lang=en&q=bettercanvas',
              target: '_blank',
              rel: 'noopener noreferrer',
              style: {
                color: 'var(--primary)',
                textDecoration: 'none',
                fontWeight: '600'
              }
            },
              React.createElement('span', null, '#bettercanvas'),
              React.createElement('span', null, ' on TikTok')
            ),
            React.createElement('div', {
              style: {
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }
            },
              React.createElement('span', null, '👥'),
              React.createElement('span', null, '500K+ views this week')
            )
          ),
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

      // TikTok Videos Grid
      React.createElement('div', {
        className: 'grid grid-responsive mb-xl',
        style: { gap: '1.5rem' }
      }, ...tiktokVideos.map((video, index) =>
        React.createElement('div', {
          key: video.id,
          className: 'card',
          style: {
            padding: '0',
            overflow: 'hidden',
            cursor: 'pointer',
            transition: 'all var(--transition)',
            border: '1px solid var(--border-light)',
            position: 'relative',
            borderRadius: 'var(--radius-lg)',
            background: 'var(--surface)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
            transform: 'translateY(0)',
            '&:hover': {
              transform: 'translateY(-4px)',
              boxShadow: '0 8px 30px rgba(0,0,0,0.12)'
            }
          },
          onClick: () => openVideoPopup(video),
          onMouseEnter: (e) => {
            e.currentTarget.style.transform = 'translateY(-4px)'
            e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.12)'
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)'
          }
        },
          // Video Thumbnail Container
          React.createElement('div', {
            style: {
              position: 'relative',
              paddingBottom: '133.33%', // 3:4 aspect ratio for TikTok
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              overflow: 'hidden'
            }
          },
            // Actual thumbnail (will show gradient fallback until real thumbnail loads)
            React.createElement('div', {
              style: {
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: `url(${video.thumbnail})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                // Fallback gradient if thumbnail fails to load
                background: `linear-gradient(135deg, #667eea 0%, #764ba2 100%), url(${video.thumbnail})`,
                backgroundBlendMode: 'overlay'
              }
            }),
            
            // Video Duration
            React.createElement('div', {
              style: {
                position: 'absolute',
                bottom: '0.75rem',
                right: '0.75rem',
                background: 'rgba(0,0,0,0.8)',
                color: 'white',
                padding: '0.25rem 0.5rem',
                borderRadius: '0.5rem',
                fontSize: '0.75rem',
                fontWeight: '600'
              }
            }, video.duration),
            
            // Play Button Overlay with Animation
            React.createElement('div', {
              style: {
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.95)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '28px',
                color: '#ff0050',
                transition: 'all var(--transition)',
                zIndex: 2,
                boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
              }
            }, '▶️'),
            
            // TikTok Logo
            React.createElement('div', {
              style: {
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: '#ff0050',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '0.75rem',
                zIndex: 2,
                boxShadow: '0 2px 8px rgba(255,0,80,0.3)'
              }
            }, 'TT'),

            // Verified Badge (removed since none of these users are verified)
            video.isVerified && React.createElement('div', {
              style: {
                position: 'absolute',
                top: '1rem',
                left: '1rem',
                background: 'rgba(29,155,240,0.95)',
                color: 'white',
                padding: '0.25rem 0.5rem',
                borderRadius: '1rem',
                fontSize: '0.75rem',
                fontWeight: '600',
                zIndex: 2,
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem'
              }
            }, 
              React.createElement('span', null, '✓'),
              React.createElement('span', null, 'Verified')
            )
          ),
          
          // Video Info
          React.createElement('div', {
            style: { padding: '1.25rem' }
          },
            React.createElement('div', {
              style: {
                fontWeight: '600',
                marginBottom: '0.75rem',
                fontSize: '0.95rem',
                lineHeight: '1.4',
                color: 'var(--text-primary)',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden'
              }
            }, video.title),
            
            React.createElement('div', {
              style: {
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '0.75rem'
              }
            },
              React.createElement('div', {
                style: {
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '0.75rem',
                  fontWeight: '600'
                }
              }, video.username.charAt(1).toUpperCase()),
              
              React.createElement('div', null,
                React.createElement('div', {
                  style: {
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    color: 'var(--text-primary)'
                  }
                }, video.displayName),
                React.createElement('div', {
                  style: {
                    fontSize: '0.75rem',
                    color: 'var(--text-secondary)'
                  }
                }, video.username)
              ),
              
              video.isVerified && React.createElement('div', {
                style: {
                  color: '#1d9bf0',
                  fontSize: '0.875rem'
                }
              }, '✓')
            ),
            
            // Engagement Stats
            React.createElement('div', {
              style: {
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '0.75rem',
                fontSize: '0.75rem',
                color: 'var(--text-secondary)'
              }
            },
              React.createElement('div', {
                style: {
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25rem'
                }
              },
                React.createElement('span', null, '❤️'),
                React.createElement('span', null, formatNumber(video.likes))
              ),
              React.createElement('div', {
                style: {
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25rem'
                }
              },
                React.createElement('span', null, '💬'),
                React.createElement('span', null, formatNumber(video.comments))
              ),
              React.createElement('div', {
                style: {
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25rem'
                }
              },
                React.createElement('span', null, '📤'),
                React.createElement('span', null, formatNumber(video.shares))
              )
            )
          )
        )
      )),

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