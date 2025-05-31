import React from 'react'

function AboutUs() {
  const [activeTimelineItem, setActiveTimelineItem] = React.useState(0)
  const [isMobile, setIsMobile] = React.useState(false)
  const [showTimeline, setShowTimeline] = React.useState(false)
  
  React.useEffect(() => {
    // Force timeline to be hidden initially
    setShowTimeline(false)

    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1024)
    }
    checkMobile()
    
    const handleScroll = () => {
      const sections = document.querySelectorAll('[data-timeline]')
      const foundersSection = document.querySelector('[data-section="founders"]')
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight

      // Check founders section first
      if (foundersSection) {
        const founderRect = foundersSection.getBoundingClientRect()
        if (founderRect.top <= windowHeight * 0.8) {
          setShowTimeline(false)
          return
        }
      }

      // Then check scroll position
      if (scrollY > 150) {
        setShowTimeline(true)
      } else {
        setShowTimeline(false)
      }
      
      // Update active timeline item
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect()
        if (rect.top < windowHeight * 0.6 && rect.bottom > windowHeight * 0.4) {
          setActiveTimelineItem(index)
        }
      })
    }
    
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', checkMobile)
    
    // Call once to set initial state
    handleScroll()
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  const timelineItems = [
    { year: '2020', title: 'The Pandemic Spark', icon: '🦠', color: '#ff6b6b' },
    { year: '2021-2023', title: 'Building in the Dorm', icon: '🏫', color: '#4ecdc4' },
    { year: '2024', title: 'TikTok Phenomenon', icon: '📱', color: '#45b7d1' },
    { year: 'Mid-2024', title: 'Perfect Partnership', icon: '🤝', color: '#f9ca24' },
    { year: 'Today', title: 'Reimagining Education', icon: '🚀', color: '#6c5ce7' }
  ]

  return React.createElement('main', {
    style: {
      paddingTop: '0',
      position: 'relative'
    }
  },
    // Timeline Component - Only show on desktop
    !isMobile && React.createElement('div', {
      'data-timeline-container': '',
      style: {
        position: 'fixed',
        left: 'clamp(2rem, 5vw, 4rem)',
        top: '50%',
        transform: showTimeline 
          ? 'translate3d(0, -50%, 0) scale(1)'
          : 'translate3d(-30px, -50%, 0) scale(0.95)',
        zIndex: 100,
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(20px)',
        borderRadius: '20px',
        padding: '1.75rem 1.25rem',
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
        border: '1px solid rgba(102, 126, 234, 0.1)',
        minWidth: '240px',
        transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        opacity: showTimeline ? 1 : 0,
        visibility: showTimeline ? 'visible' : 'hidden',
        pointerEvents: showTimeline ? 'auto' : 'none'
      }
    },
      React.createElement('div', {
        style: {
          fontSize: '0.95rem',
          fontWeight: '600',
          color: '#667eea',
          marginBottom: '1.25rem',
          textAlign: 'center'
        }
      }, 'Our Journey'),
      
      React.createElement('div', {
        style: {
          position: 'relative'
        }
      },
        // Vertical line
        React.createElement('div', {
          style: {
            position: 'absolute',
            left: '12px',
            top: '0',
            bottom: '0',
            width: '2px',
            background: 'rgba(102, 126, 234, 0.2)',
            borderRadius: '1px'
          }
        }),
        
        // Progress line
        React.createElement('div', {
          style: {
            position: 'absolute',
            left: '12px',
            top: '0',
            width: '2px',
            height: `${Math.min(100, ((activeTimelineItem + 1) / timelineItems.length) * 100)}%`,
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: '1px',
            transition: 'height 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
          }
        }),
        
        // Timeline items
        timelineItems.map((item, index) =>
          React.createElement('div', {
            key: index,
            style: {
              position: 'relative',
              paddingLeft: '2.5rem',
              paddingBottom: index === timelineItems.length - 1 ? '0' : '2rem',
              opacity: activeTimelineItem >= index ? 1 : 0.5,
              transform: activeTimelineItem === index ? 'scale(1.02)' : 'scale(1)',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
            }
          },
            // Timeline dot
            React.createElement('div', {
              style: {
                position: 'absolute',
                left: '8px',
                top: '0.25rem',
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                background: activeTimelineItem >= index 
                  ? item.color
                  : 'rgba(102, 126, 234, 0.3)',
                border: `2px solid ${activeTimelineItem >= index ? 'white' : 'transparent'}`,
                boxShadow: activeTimelineItem >= index 
                  ? `0 0 0 2px ${item.color}, 0 4px 12px rgba(0,0,0,0.15)`
                  : 'none',
                transform: activeTimelineItem === index ? 'scale(1.4)' : 'scale(1)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
              }
            }),
            
            // Content
            React.createElement('div', null,
              React.createElement('div', {
                style: {
                  fontSize: '0.85rem',
                  fontWeight: '700',
                  color: activeTimelineItem >= index ? item.color : 'var(--text-tertiary)',
                  marginBottom: '0.35rem',
                  transition: 'color 0.3s ease'
                }
              }, item.year),
              React.createElement('div', {
                style: {
                  fontSize: '0.8rem',
                  color: activeTimelineItem >= index ? 'var(--text-primary)' : 'var(--text-tertiary)',
                  fontWeight: '500',
                  lineHeight: '1.4',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  transition: 'color 0.3s ease'
                }
              },
                React.createElement('span', {
                  style: {
                    fontSize: '0.95rem',
                    opacity: activeTimelineItem >= index ? 1 : 0.6
                  }
                }, item.icon),
                React.createElement('span', null, item.title)
              )
            )
          )
        )
      )
    ),

    // Mobile Timeline Indicator
    isMobile && React.createElement('div', {
      style: {
        position: 'fixed',
        bottom: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 100,
        background: 'rgba(102, 126, 234, 0.9)',
        color: 'white',
        padding: '0.75rem 1.5rem',
        borderRadius: '25px',
        fontSize: '0.8rem',
        fontWeight: '600',
        boxShadow: '0 8px 25px rgba(102, 126, 234, 0.3)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.2)'
      }
    },
      React.createElement('span', null, timelineItems[activeTimelineItem]?.icon + ' ' + timelineItems[activeTimelineItem]?.year)
    ),

    // Hero Section
    React.createElement('section', {
      'data-section': 'hero',
      style: {
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: 'clamp(8rem, 12vw, 10rem) 0 clamp(4rem, 8vw, 6rem) 0',
        textAlign: 'center'
      }
    },
      React.createElement('div', { className: 'container' },
        React.createElement('h1', {
          style: {
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontFamily: 'var(--font-serif)',
            fontWeight: '700',
            marginBottom: 'clamp(1rem, 3vw, 1.5rem)',
            lineHeight: '1.1'
          }
        }, 'Our Story'),
        React.createElement('p', {
          style: {
            fontSize: 'clamp(1.1rem, 3vw, 1.4rem)',
            opacity: 0.9,
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.6'
          }
        }, 'From a high school project to revolutionizing how 1.5M+ students experience their digital classroom')
      )
    ),

    // Main Story Section
    React.createElement('section', {
      style: {
        padding: 'clamp(4rem, 8vw, 6rem) 0',
        background: 'var(--background)'
      }
    },
      React.createElement('div', { className: 'container' },
        React.createElement('div', {
          style: {
            maxWidth: '800px',
            margin: '0 auto'
          }
        },
          // The Beginning
          React.createElement('div', {
            'data-timeline': 0,
            style: {
              marginBottom: 'clamp(3rem, 6vw, 4rem)'
            }
          },
            React.createElement('h2', {
              style: {
                fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                fontFamily: 'var(--font-serif)',
                fontWeight: '600',
                color: 'var(--text-primary)',
                marginBottom: 'clamp(1rem, 2vw, 1.5rem)',
                textAlign: 'center'
              }
            }, '2020: The Pandemic Spark 🦠'),
            React.createElement('p', {
              style: {
                fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                lineHeight: '1.7',
                color: 'var(--text-secondary)',
                marginBottom: '1.5rem'
              }
            }, React.createElement('span', null, 'When COVID-19 hit in 2020, George was just a high school student watching the world transform overnight. Suddenly, Canvas LMS wasn\'t just a supplementary tool—', React.createElement('strong', null, 'it became the entire classroom'), '. Every assignment, every discussion, every moment of learning happened through this one platform.')),
            React.createElement('p', {
              style: {
                fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                lineHeight: '1.7',
                color: 'var(--text-secondary)'
              }
            }, React.createElement('span', null, 'But Canvas felt cold, sterile, and impersonal. George thought: ', React.createElement('strong', null, '"If we\'re going to spend our entire educational experience here, why can\'t it feel like home?"'), ' So he started coding—first as a simple Chrome extension to add dark mode, then expanding to themes, better navigation, and productivity tools.'))
          ),

          // College Years
          React.createElement('div', {
            'data-timeline': 1,
            style: {
              marginBottom: 'clamp(3rem, 6vw, 4rem)'
            }
          },
            React.createElement('h2', {
              style: {
                fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                fontFamily: 'var(--font-serif)',
                fontWeight: '600',
                color: 'var(--text-primary)',
                marginBottom: 'clamp(1rem, 2vw, 1.5rem)',
                textAlign: 'center'
              }
            }, '2021-2023: Building in the Dorm 🏫'),
            React.createElement('p', {
              style: {
                fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                lineHeight: '1.7',
                color: 'var(--text-secondary)',
                marginBottom: '1.5rem'
              }
            }, React.createElement('span', null, 'George took his passion project to the University of Maryland, continuing to develop BetterCanvas from his dorm room. ', React.createElement('strong', null, 'Late nights were spent coding new features, responding to user feedback'), ', and slowly building a community of students who shared his vision.')),
            React.createElement('p', {
              style: {
                fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                lineHeight: '1.7',
                color: 'var(--text-secondary)'
              }
            }, React.createElement('span', null, 'Word spread organically—', React.createElement('strong', null, 'friend to friend, dorm to dorm, campus to campus'), '. Students started customizing their Canvas experiences with themes, better todo lists, GPA calculators, and improved navigation. What started as one student\'s frustration was becoming thousands of students\' solution.'))
          ),

          // The TikTok Explosion
          React.createElement('div', {
            'data-timeline': 2,
            style: {
              marginBottom: 'clamp(3rem, 6vw, 4rem)'
            }
          },
            React.createElement('h2', {
              style: {
                fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                fontFamily: 'var(--font-serif)',
                fontWeight: '600',
                color: 'var(--text-primary)',
                marginBottom: 'clamp(1rem, 2vw, 1.5rem)',
                textAlign: 'center'
              }
            }, '2024: The TikTok Phenomenon 📱'),
            React.createElement('p', {
              style: {
                fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                lineHeight: '1.7',
                color: 'var(--text-secondary)',
                marginBottom: '1.5rem'
              }
            }, React.createElement('span', null, 'Then something magical happened in early 2024. ', React.createElement('strong', null, 'Students started posting their customized Canvas setups on TikTok'), ', showing off their personalized themes, productivity dashboards, and study workflows. Videos with hashtags like #BetterCanvas and #CanvasCustomization started going viral.')),
            React.createElement('p', {
              style: {
                fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                lineHeight: '1.7',
                color: 'var(--text-secondary)'
              }
            }, React.createElement('span', null, 'Suddenly, ', React.createElement('strong', null, 'George\'s dorm room project was catching fire across social media'), '. Students everywhere wanted to transform their digital classroom experience. Downloads skyrocketed, and the BetterCanvas community exploded from thousands to over a million users.'))
          ),

          // The Partnership
          React.createElement('div', {
            'data-timeline': 3,
            style: {
              marginBottom: 'clamp(3rem, 6vw, 4rem)'
            }
          },
            React.createElement('h2', {
              style: {
                fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                fontFamily: 'var(--font-serif)',
                fontWeight: '600',
                color: 'var(--text-primary)',
                marginBottom: 'clamp(1rem, 2vw, 1.5rem)',
                textAlign: 'center'
              }
            }, 'Mid-2024: The Perfect Partnership 🤝'),
            React.createElement('p', {
              style: {
                fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                lineHeight: '1.7',
                color: 'var(--text-secondary)',
                marginBottom: '1.5rem'
              }
            }, React.createElement('span', null, 'That\'s when Jake entered the picture. With years of experience in ed-tech startups, ', React.createElement('strong', null, 'Jake had already helped save students over $7 million in tuition costs'), ' and had worked within Deloitte\'s Business Innovation Group. He saw what George had built and recognized its massive potential.')),
            React.createElement('p', {
              style: {
                fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                lineHeight: '1.7',
                color: 'var(--text-secondary)'
              }
            }, React.createElement('span', null, 'The partnership was perfect: ', React.createElement('strong', null, 'George brought deep technical expertise and an authentic understanding of student needs'), ', while Jake contributed business strategy, product vision, and go-to-market experience. Together, they began reimagining BetterCanvas not just as a design tool, but as a comprehensive platform for customizing the entire digital classroom experience.'))
          ),

          // The Future
          React.createElement('div', {
            'data-timeline': 4,
            style: {
              background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%)',
              padding: 'clamp(2rem, 5vw, 3rem)',
              borderRadius: 'var(--radius-xl)',
              border: '1px solid rgba(102, 126, 234, 0.1)',
              textAlign: 'center'
            }
          },
            React.createElement('h2', {
              style: {
                fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                fontFamily: 'var(--font-serif)',
                fontWeight: '600',
                color: 'var(--text-primary)',
                marginBottom: 'clamp(1rem, 2vw, 1.5rem)'
              }
            }, 'Today: Reimagining Digital Education 🚀'),
            React.createElement('p', {
              style: {
                fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                lineHeight: '1.7',
                color: 'var(--text-secondary)',
                marginBottom: '1.5rem'
              }
            }, 'Today, BetterCanvas serves over 1.5 million students across 500+ universities. But we\'re just getting started. We\'re evolving from a simple customization tool into a comprehensive platform that makes digital learning personal, engaging, and effective.'),
            React.createElement('p', {
              style: {
                fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                lineHeight: '1.7',
                color: 'var(--text-primary)',
                fontWeight: '600'
              }
            }, 'Because every student deserves a digital classroom that feels like home.')
          )
        )
      )
    ),

    // Meet the Team Section
    React.createElement('section', {
      'data-section': 'founders',
      style: {
        padding: 'clamp(4rem, 8vw, 6rem) 0',
        background: 'var(--surface)'
      }
    },
      React.createElement('div', { className: 'container' },
        React.createElement('h2', {
          style: {
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontFamily: 'var(--font-serif)',
            fontWeight: '700',
            color: 'var(--text-primary)',
            textAlign: 'center',
            marginBottom: 'clamp(2rem, 4vw, 3rem)'
          }
        }, 'Meet the Founders'),
        
        React.createElement('div', {
          style: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: 'clamp(2rem, 5vw, 3rem)',
            maxWidth: '1000px',
            margin: '0 auto'
          }
        },
          // George
          React.createElement('div', {
            style: {
              background: 'white',
              padding: 'clamp(2rem, 5vw, 3rem)',
              borderRadius: 'var(--radius-xl)',
              textAlign: 'center',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
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
            }, '👨‍💻'),
            React.createElement('h3', {
              style: {
                fontSize: 'clamp(1.3rem, 3vw, 1.6rem)',
                fontWeight: '700',
                color: 'var(--text-primary)',
                marginBottom: '0.5rem'
              }
            }, 'George'),
            React.createElement('p', {
              style: {
                color: 'var(--text-secondary)',
                fontWeight: '600',
                marginBottom: '1rem',
                fontSize: 'clamp(0.9rem, 2vw, 1rem)'
              }
            }, 'Engineering'),
            React.createElement('p', {
              style: {
                color: 'var(--text-secondary)',
                lineHeight: '1.6',
                fontSize: 'clamp(0.9rem, 2vw, 1rem)'
              }
            }, React.createElement('span', null, 'Started BetterCanvas in high school during the pandemic. University of Maryland student with a passion for ', React.createElement('strong', null, 'making digital education personal and engaging'), '.'))
          ),

          // Jake
          React.createElement('div', {
            style: {
              background: 'white',
              padding: 'clamp(2rem, 5vw, 3rem)',
              borderRadius: 'var(--radius-xl)',
              textAlign: 'center',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              border: '1px solid var(--border)'
            }
          },
            React.createElement('div', {
              style: {
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                fontSize: '2rem'
              }
            }, '🚀'),
            React.createElement('h3', {
              style: {
                fontSize: 'clamp(1.3rem, 3vw, 1.6rem)',
                fontWeight: '700',
                color: 'var(--text-primary)',
                marginBottom: '0.5rem'
              }
            }, 'Jake'),
            React.createElement('p', {
              style: {
                color: 'var(--text-secondary)',
                fontWeight: '600',
                marginBottom: '1rem',
                fontSize: 'clamp(0.9rem, 2vw, 1rem)'
              }
            }, 'Business'),
            React.createElement('p', {
              style: {
                color: 'var(--text-secondary)',
                lineHeight: '1.6',
                fontSize: 'clamp(0.9rem, 2vw, 1rem)'
              }
            }, React.createElement('span', null, 'Ed-tech veteran who\'s saved students $7M+ in tuition. Former Deloitte Business Innovation Group. Expert in ', React.createElement('strong', null, 'product strategy and scaling educational technology'), '.'))
          ),

          // Aiden
          React.createElement('div', {
            style: {
              background: 'white',
              padding: 'clamp(2rem, 5vw, 3rem)',
              borderRadius: 'var(--radius-xl)',
              textAlign: 'center',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              border: '1px solid var(--border)'
            }
          },
            React.createElement('div', {
              style: {
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                fontSize: '2rem'
              }
            }, '🛠️'),
            React.createElement('h3', {
              style: {
                fontSize: 'clamp(1.3rem, 3vw, 1.6rem)',
                fontWeight: '700',
                color: 'var(--text-primary)',
                marginBottom: '0.5rem'
              }
            }, 'Aiden'),
            React.createElement('p', {
              style: {
                color: 'var(--text-secondary)',
                fontWeight: '600',
                marginBottom: '1rem',
                fontSize: 'clamp(0.9rem, 2vw, 1rem)'
              }
            }, 'Engineering Intern'),
            React.createElement('p', {
              style: {
                color: 'var(--text-secondary)',
                lineHeight: '1.6',
                fontSize: 'clamp(0.9rem, 2vw, 1rem)'
              }
            }, React.createElement('span', null, 'UT Austin student who\'s been building Chrome extensions for years. Created a Canvas extension that ', React.createElement('strong', null, 'helps UT Austin students celebrate their achievements'), ' and academic milestones.'))
          )
        )
      )
    ),

    // Call to Action
    React.createElement('section', {
      style: {
        padding: 'clamp(4rem, 8vw, 6rem) 0 clamp(6rem, 10vw, 8rem) 0',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        textAlign: 'center'
      }
    },
      React.createElement('div', { className: 'container' },
        React.createElement('h2', {
          style: {
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontFamily: 'var(--font-serif)',
            fontWeight: '700',
            marginBottom: 'clamp(1rem, 2vw, 1.5rem)'
          }
        }, 'Join Our Story'),
        React.createElement('p', {
          style: {
            fontSize: 'clamp(1.1rem, 3vw, 1.3rem)',
            opacity: 0.9,
            marginBottom: 'clamp(2rem, 4vw, 3rem)',
            maxWidth: '600px',
            margin: '0 auto clamp(2rem, 4vw, 3rem)'
          }
        }, 'Be part of the movement that\'s transforming digital education for millions of students worldwide.'),
        React.createElement('a', {
          href: 'https://chromewebstore.google.com/detail/bettercanvas/cndibmoanboadcifjkjbdpjgfedanolh',
          target: '_blank',
          rel: 'noopener noreferrer',
          style: {
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
            padding: 'clamp(1rem, 3vw, 1.25rem) clamp(2rem, 5vw, 2.5rem)',
            fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
            fontWeight: '600',
            background: 'white',
            color: '#667eea',
            borderRadius: '50px',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 20px rgba(255, 255, 255, 0.2)'
          }
        }, '🚀 Get BetterCanvas')
      )
    )
  )
}

export default AboutUs 