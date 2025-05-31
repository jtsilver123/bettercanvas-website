import React from 'react'

function ForPartners() {
  return React.createElement('main', {
    style: {
      paddingTop: '0',
      paddingBottom: 'clamp(3rem, 6vw, 5rem)'
    }
  },
    // Hero Section
    React.createElement('section', {
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
        }, 'Partner with BetterCanvas'),
        React.createElement('p', {
          style: {
            fontSize: 'clamp(1.1rem, 3vw, 1.4rem)',
            opacity: 0.9,
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.6',
            marginBottom: 'clamp(2rem, 4vw, 3rem)'
          }
        }, 'Reach 1.5M+ engaged high school and college students through exclusive deals and strategic partnerships'),
        React.createElement('div', {
          style: {
            display: 'flex',
            justifyContent: 'center',
            gap: 'clamp(2rem, 5vw, 3rem)',
            flexWrap: 'wrap',
            marginBottom: 'clamp(2rem, 4vw, 3rem)'
          }
        },
          React.createElement('div', {
            style: {
              textAlign: 'center'
            }
          },
            React.createElement('div', {
              style: {
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                fontWeight: '800',
                marginBottom: '0.5rem'
              }
            }, '1.5M+'),
            React.createElement('div', {
              style: {
                fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                opacity: 0.8
              }
            }, 'Active Students')
          ),
          React.createElement('div', {
            style: {
              textAlign: 'center'
            }
          },
            React.createElement('div', {
              style: {
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                fontWeight: '800',
                marginBottom: '0.5rem'
              }
            }, '500+'),
            React.createElement('div', {
              style: {
                fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                opacity: 0.8
              }
            }, 'Universities')
          ),
          React.createElement('div', {
            style: {
              textAlign: 'center'
            }
          },
            React.createElement('div', {
              style: {
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                fontWeight: '800',
                marginBottom: '0.5rem'
              }
            }, '18-24'),
            React.createElement('div', {
              style: {
                fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                opacity: 0.8
              }
            }, 'Age Range')
          )
        ),
        React.createElement('a', {
          href: 'mailto:partners@bettercanvas.org?subject=Partnership Inquiry&body=Hi BetterCanvas Partnership Team,%0D%0A%0D%0AI am interested in partnering with BetterCanvas to offer exclusive deals to your student community.%0D%0A%0D%0A--Company Information--%0D%0ACompany Name:%0D%0AWebsite:%0D%0AIndustry:%0D%0A%0D%0A--Partnership Details--%0D%0AProposed Deal/Offer:%0D%0ATarget Student Demographic:%0D%0ADesired Partnership Duration:%0D%0A%0D%0A--Contact Information--%0D%0AContact Name:%0D%0APosition:%0D%0APhone (optional):%0D%0A%0D%0AAdditional Comments:%0D%0A%0D%0AThank you for considering a partnership with BetterCanvas!',
          style: {
            display: 'inline-flex',
            alignItems: 'center',
            gap: 'clamp(0.5rem, 2vw, 0.75rem)',
            padding: 'clamp(1rem, 3vw, 1.25rem) clamp(2rem, 5vw, 2.5rem)',
            background: 'rgba(255, 255, 255, 0.15)',
            border: '2px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '3rem',
            color: 'white',
            textDecoration: 'none',
            fontWeight: '700',
            fontSize: 'clamp(1rem, 3vw, 1.2rem)',
            transition: 'all 0.3s ease',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
            marginTop: 'clamp(1rem, 3vw, 2rem)',
            transform: 'translateY(0)',
            willChange: 'transform, box-shadow'
          },
          onMouseOver: (e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)'
            e.currentTarget.style.transform = 'translateY(-2px)'
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.15)'
          },
          onMouseOut: (e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)'
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.1)'
          }
        },
          React.createElement('span', {
            style: { fontSize: 'clamp(1.2rem, 4vw, 1.5rem)' }
          }, '🤝'),
          React.createElement('span', null, 'Start Partnership')
        )
      )
    ),

    // How It Works Section
    React.createElement('section', {
      style: {
        padding: 'clamp(4rem, 8vw, 6rem) 0',
        background: 'var(--background)'
      }
    },
      React.createElement('div', { className: 'container' },
        React.createElement('div', {
          style: {
            textAlign: 'center',
            marginBottom: 'clamp(3rem, 6vw, 4rem)'
          }
        },
          React.createElement('h2', {
            style: {
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontFamily: 'var(--font-serif)',
              fontWeight: '700',
              color: 'var(--text-primary)',
              marginBottom: 'clamp(1rem, 2vw, 1.5rem)'
            }
          }, 'How Partnership Works'),
          React.createElement('p', {
            style: {
              fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
              color: 'var(--text-secondary)',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6'
            }
          }, 'Simple, effective, and mutually beneficial partnerships that drive results')
        ),

        React.createElement('div', {
          style: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: 'clamp(2rem, 5vw, 3rem)',
            marginBottom: 'clamp(3rem, 6vw, 4rem)'
          }
        },
          React.createElement('div', {
            style: {
              textAlign: 'center'
            }
          },
            React.createElement('div', {
              style: {
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                fontSize: '2rem',
                fontWeight: '700'
              }
            }, '1'),
            React.createElement('h3', {
              style: {
                fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
                fontWeight: '700',
                color: 'var(--text-primary)',
                marginBottom: '1rem'
              }
            }, 'Partner with Us'),
            React.createElement('p', {
              style: {
                color: 'var(--text-secondary)',
                lineHeight: '1.6',
                fontSize: 'clamp(0.9rem, 2vw, 1rem)'
              }
            }, 'Share your exclusive student deals and offers with our partnership team')
          ),

          React.createElement('div', {
            style: {
              textAlign: 'center'
            }
          },
            React.createElement('div', {
              style: {
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                fontSize: '2rem',
                fontWeight: '700'
              }
            }, '2'),
            React.createElement('h3', {
              style: {
                fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
                fontWeight: '700',
                color: 'var(--text-primary)',
                marginBottom: '1rem'
              }
            }, 'We Promote'),
            React.createElement('p', {
              style: {
                color: 'var(--text-secondary)',
                lineHeight: '1.6',
                fontSize: 'clamp(0.9rem, 2vw, 1rem)'
              }
            }, 'Your deals get featured on our exclusive student perks page and extension')
          ),

          React.createElement('div', {
            style: {
              textAlign: 'center'
            }
          },
            React.createElement('div', {
              style: {
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                fontSize: '2rem',
                fontWeight: '700'
              }
            }, '3'),
            React.createElement('h3', {
              style: {
                fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
                fontWeight: '700',
                color: 'var(--text-primary)',
                marginBottom: '1rem'
              }
            }, 'Everyone Wins'),
            React.createElement('p', {
              style: {
                color: 'var(--text-secondary)',
                lineHeight: '1.6',
                fontSize: 'clamp(0.9rem, 2vw, 1rem)'
              }
            }, 'Students save money, you gain customers, and we earn commission on conversions')
          )
        )
      )
    ),

    // Benefits Section
    React.createElement('section', {
      style: {
        padding: 'clamp(4rem, 8vw, 6rem) 0',
        background: 'var(--surface)'
      }
    },
      React.createElement('div', { className: 'container' },
        React.createElement('div', {
          style: {
            textAlign: 'center',
            marginBottom: 'clamp(3rem, 6vw, 4rem)'
          }
        },
          React.createElement('h2', {
            style: {
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontFamily: 'var(--font-serif)',
              fontWeight: '700',
              color: 'var(--text-primary)',
              marginBottom: 'clamp(1rem, 2vw, 1.5rem)'
            }
          }, 'Why Partner with BetterCanvas?'),
          React.createElement('p', {
            style: {
              fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
              color: 'var(--text-secondary)',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6'
            }
          }, 'Access a highly engaged student audience actively looking for ways to save money')
        ),

        React.createElement('div', {
          style: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: 'clamp(2rem, 5vw, 3rem)'
          }
        },
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
                fontSize: 'clamp(3rem, 8vw, 4rem)',
                marginBottom: 'clamp(1rem, 3vw, 1.5rem)'
              }
            }, '🎯'),
            React.createElement('h3', {
              style: {
                fontSize: 'clamp(1.25rem, 3vw, 1.6rem)',
                fontWeight: '700',
                color: 'var(--text-primary)',
                marginBottom: 'clamp(0.75rem, 2vw, 1rem)'
              }
            }, 'Targeted Reach'),
            React.createElement('p', {
              style: {
                color: 'var(--text-secondary)',
                lineHeight: '1.7',
                fontSize: 'clamp(0.9rem, 2vw, 1rem)'
              }
            }, React.createElement('span', null, 'Direct access to ', React.createElement('strong', null, '1.5M+ students'), ' across 500+ universities who actively use our platform daily'))
          ),

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
                fontSize: 'clamp(3rem, 8vw, 4rem)',
                marginBottom: 'clamp(1rem, 3vw, 1.5rem)'
              }
            }, '💰'),
            React.createElement('h3', {
              style: {
                fontSize: 'clamp(1.25rem, 3vw, 1.6rem)',
                fontWeight: '700',
                color: 'var(--text-primary)',
                marginBottom: 'clamp(0.75rem, 2vw, 1rem)'
              }
            }, 'Performance-Based'),
            React.createElement('p', {
              style: {
                color: 'var(--text-secondary)',
                lineHeight: '1.7',
                fontSize: 'clamp(0.9rem, 2vw, 1rem)'
              }
            }, React.createElement('span', null, 'Only pay for results with our ', React.createElement('strong', null, 'commission-based model'), '. Track conversions and ROI with detailed analytics'))
          ),

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
                fontSize: 'clamp(3rem, 8vw, 4rem)',
                marginBottom: 'clamp(1rem, 3vw, 1.5rem)'
              }
            }, '🚀'),
            React.createElement('h3', {
              style: {
                fontSize: 'clamp(1.25rem, 3vw, 1.6rem)',
                fontWeight: '700',
                color: 'var(--text-primary)',
                marginBottom: 'clamp(0.75rem, 2vw, 1rem)'
              }
            }, 'Brand Exposure'),
            React.createElement('p', {
              style: {
                color: 'var(--text-secondary)',
                lineHeight: '1.7',
                fontSize: 'clamp(0.9rem, 2vw, 1rem)'
              }
            }, React.createElement('span', null, 'Get your brand in front of ', React.createElement('strong', null, 'highly engaged students'), ' through our perks page and in-extension promotions'))
          ),

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
                fontSize: 'clamp(3rem, 8vw, 4rem)',
                marginBottom: 'clamp(1rem, 3vw, 1.5rem)'
              }
            }, '📊'),
            React.createElement('h3', {
              style: {
                fontSize: 'clamp(1.25rem, 3vw, 1.6rem)',
                fontWeight: '700',
                color: 'var(--text-primary)',
                marginBottom: 'clamp(0.75rem, 2vw, 1rem)'
              }
            }, 'Detailed Analytics'),
            React.createElement('p', {
              style: {
                color: 'var(--text-secondary)',
                lineHeight: '1.7',
                fontSize: 'clamp(0.9rem, 2vw, 1rem)'
              }
            }, React.createElement('span', null, 'Comprehensive reporting on ', React.createElement('strong', null, 'clicks, conversions, and student engagement'), ' to optimize your partnerships'))
          ),

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
                fontSize: 'clamp(3rem, 8vw, 4rem)',
                marginBottom: 'clamp(1rem, 3vw, 1.5rem)'
              }
            }, '🤝'),
            React.createElement('h3', {
              style: {
                fontSize: 'clamp(1.25rem, 3vw, 1.6rem)',
                fontWeight: '700',
                color: 'var(--text-primary)',
                marginBottom: 'clamp(0.75rem, 2vw, 1rem)'
              }
            }, 'Dedicated Support'),
            React.createElement('p', {
              style: {
                color: 'var(--text-secondary)',
                lineHeight: '1.7',
                fontSize: 'clamp(0.9rem, 2vw, 1rem)'
              }
            }, React.createElement('span', null, 'Work directly with our partnerships team to ', React.createElement('strong', null, 'optimize campaigns and maximize results'), ' for your brand'))
          ),

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
                fontSize: 'clamp(3rem, 8vw, 4rem)',
                marginBottom: 'clamp(1rem, 3vw, 1.5rem)'
              }
            }, '⚡'),
            React.createElement('h3', {
              style: {
                fontSize: 'clamp(1.25rem, 3vw, 1.6rem)',
                fontWeight: '700',
                color: 'var(--text-primary)',
                marginBottom: 'clamp(0.75rem, 2vw, 1rem)'
              }
            }, 'Quick Setup'),
            React.createElement('p', {
              style: {
                color: 'var(--text-secondary)',
                lineHeight: '1.7',
                fontSize: 'clamp(0.9rem, 2vw, 1rem)'
              }
            }, React.createElement('span', null, 'Get started in days, not months. ', React.createElement('strong', null, 'Simple integration process'), ' with minimal technical requirements'))
          )
        )
      )
    ),

    // Stats Section
    React.createElement('section', {
      style: {
        padding: 'clamp(2rem, 4vw, 3rem) 0',
        background: 'var(--background)'
      }
    },
      React.createElement('div', {
        style: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 'clamp(2rem, 5vw, 3rem)',
          marginBottom: 'clamp(3rem, 6vw, 4rem)',
          flexWrap: 'wrap'
        }
      },
        React.createElement('div', {
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: 'clamp(0.75rem, 2vw, 1rem)'
          }
        },
          React.createElement('div', {
            style: {
              display: 'flex',
              marginRight: '0.5rem'
            }
          },
            React.createElement('div', {
              style: {
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
              }
            }, '👨‍🎓'),
            React.createElement('div', {
              style: {
                width: 'clamp(32px, 8vw, 40px)',
                height: 'clamp(32px, 8vw, 40px)',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
                border: '2px solid white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 'clamp(14px, 3vw, 18px)',
                color: 'white',
                fontWeight: '600',
                position: 'relative',
                marginLeft: '-12px',
                zIndex: 3
              }
            }, '👩‍🎓'),
            React.createElement('div', {
              style: {
                width: 'clamp(32px, 8vw, 40px)',
                height: 'clamp(32px, 8vw, 40px)',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                border: '2px solid white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 'clamp(14px, 3vw, 18px)',
                color: 'white',
                fontWeight: '600',
                position: 'relative',
                marginLeft: '-12px',
                zIndex: 2
              }
            }, '👨‍🎓'),
            React.createElement('div', {
              style: {
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
                marginLeft: '-12px',
                zIndex: 1
              }
            }, '👩‍🎓')
          )
        ),

        React.createElement('div', {
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: 'clamp(1rem, 3vw, 1.5rem)',
            fontSize: 'clamp(0.9rem, 2.3vw, 1.1rem)',
            opacity: 0.85,
            flexWrap: 'wrap'
          }
        },
          React.createElement('span', {
            style: {
              fontWeight: '500',
              whiteSpace: 'nowrap'
            }
          }, '1.5M+ students love us'),
          React.createElement('span', {
            style: {
              color: 'var(--text-secondary)',
              fontSize: 'clamp(0.8rem, 2vw, 1rem)',
              whiteSpace: 'nowrap'
            }
          }, '• ', React.createElement('a', {
            href: 'https://chromewebstore.google.com/detail/bettercanvas/cndibmoanboadcifjkjbdpjgfedanolh/reviews',
            target: '_blank',
            rel: 'noopener noreferrer',
            style: {
              color: 'inherit',
              textDecoration: 'underline',
              transition: 'opacity 0.3s ease'
            },
            onMouseEnter: (e) => e.target.style.opacity = '0.8',
            onMouseLeave: (e) => e.target.style.opacity = '1'
          }, '7.4K reviews'))
        )
      )
    ),

    // CTA Section
    React.createElement('section', {
      style: {
        padding: 'clamp(4rem, 8vw, 6rem) 0',
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
        }, 'Ready to Reach 1.5M+ Students?'),
        React.createElement('p', {
          style: {
            fontSize: 'clamp(1.1rem, 3vw, 1.3rem)',
            opacity: 0.9,
            marginBottom: 'clamp(2rem, 4vw, 3rem)',
            maxWidth: '600px',
            margin: '0 auto clamp(2rem, 4vw, 3rem)',
            lineHeight: '1.6'
          }
        }, 'Join innovative companies already partnering with BetterCanvas to provide exclusive student deals and drive meaningful results.'),
        React.createElement('div', {
          style: {
            display: 'flex',
            justifyContent: 'center',
            gap: 'clamp(1rem, 3vw, 1.5rem)',
            flexWrap: 'wrap'
          }
        },
          React.createElement('a', {
            href: 'mailto:partners@bettercanvas.org?subject=Partnership Inquiry&body=Hi BetterCanvas Partnership Team,%0D%0A%0D%0AI am interested in partnering with BetterCanvas to offer exclusive deals to your student community.%0D%0A%0D%0A--Company Information--%0D%0ACompany Name:%0D%0AWebsite:%0D%0AIndustry:%0D%0A%0D%0A--Partnership Details--%0D%0AProposed Deal/Offer:%0D%0ATarget Student Demographic:%0D%0ADesired Partnership Duration:%0D%0A%0D%0A--Contact Information--%0D%0AContact Name:%0D%0APosition:%0D%0APhone (optional):%0D%0A%0D%0AAdditional Comments:%0D%0A%0D%0AThank you for considering a partnership with BetterCanvas!',
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
          }, '🤝 Start Partnership'),
          React.createElement('a', {
            href: 'mailto:partners@bettercanvas.org?subject=Partnership Questions&body=Hi BetterCanvas Partnership Team,%0D%0A%0D%0AI have some questions about partnering with BetterCanvas:%0D%0A%0D%0A--Company Information--%0D%0ACompany Name:%0D%0AWebsite:%0D%0A%0D%0A--Questions--%0D%0A1.%0D%0A2.%0D%0A3.%0D%0A%0D%0A--Contact Information--%0D%0AContact Name:%0D%0APosition:%0D%0APreferred Contact Method (email/phone):%0D%0A%0D%0AThank you for your interest in partnering with BetterCanvas!',
            style: {
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: 'clamp(1rem, 3vw, 1.25rem) clamp(2rem, 5vw, 2.5rem)',
              fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
              fontWeight: '600',
              background: 'transparent',
              color: 'white',
              border: '2px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '50px',
              textDecoration: 'none',
              transition: 'all 0.3s ease'
            }
          }, '📧 Ask Questions')
        )
      )
    )
  )
}

export default ForPartners 