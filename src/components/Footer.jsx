import React from 'react'

function Footer() {
  return (
    <footer style={{
      background: 'var(--dark-gradient)',
      color: 'white',
      padding: 'clamp(2rem, 6vw, 3rem) 0 clamp(1.5rem, 4vw, 2rem)'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
          gap: 'clamp(2rem, 6vw, 3rem)',
          marginBottom: 'clamp(1.5rem, 4vw, 2rem)'
        }}>
          <div>
            <div style={{
              fontSize: 'clamp(1.25rem, 4vw, 1.5rem)',
              fontWeight: '700',
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #fff 0%, #f0f0f0 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Better Canvas
            </div>
            <p style={{
              opacity: 0.8,
              lineHeight: '1.6',
              marginBottom: '1.5rem',
              fontSize: 'clamp(0.9rem, 2.5vw, 1rem)'
            }}>
              Transforming the Canvas learning experience for over 1 million students worldwide.
            </p>
            <div style={{
              display: 'flex',
              gap: 'clamp(0.75rem, 3vw, 1rem)',
              flexWrap: 'wrap'
            }}>
              <a 
                href="https://github.com/UseBetterCanvas/bettercanvas"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: 'white',
                  opacity: 0.8,
                  textDecoration: 'none',
                  transition: 'opacity 0.3s ease',
                  fontSize: 'clamp(0.9rem, 2.5vw, 1rem)'
                }}
                onMouseOver={(e) => e.target.style.opacity = '1'}
                onMouseOut={(e) => e.target.style.opacity = '0.8'}
              >
                GitHub
              </a>
              <a 
                href="mailto:support@bettercanvas.org"
                style={{
                  color: 'white',
                  opacity: 0.8,
                  textDecoration: 'none',
                  transition: 'opacity 0.3s ease',
                  fontSize: 'clamp(0.9rem, 2.5vw, 1rem)'
                }}
                onMouseOver={(e) => e.target.style.opacity = '1'}
                onMouseOut={(e) => e.target.style.opacity = '0.8'}
              >
                Support
              </a>
            </div>
          </div>

          <div>
            <h4 style={{
              fontSize: 'clamp(1rem, 3vw, 1.2rem)',
              fontWeight: '600',
              marginBottom: '1rem'
            }}>
              Quick Links
            </h4>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem'
            }}>
              <a 
                href="https://chromewebstore.google.com/detail/bettercanvas/cndibmoanboadcifjkjbdpjgfedanolh"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: 'white',
                  opacity: 0.8,
                  textDecoration: 'none',
                  transition: 'opacity 0.3s ease',
                  fontSize: 'clamp(0.85rem, 2.5vw, 0.95rem)'
                }}
                onMouseOver={(e) => e.target.style.opacity = '1'}
                onMouseOut={(e) => e.target.style.opacity = '0.8'}
              >
                Chrome Extension
              </a>
              <a 
                href="https://addons.mozilla.org/addon/better-canvas/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: 'white',
                  opacity: 0.8,
                  textDecoration: 'none',
                  transition: 'opacity 0.3s ease',
                  fontSize: 'clamp(0.85rem, 2.5vw, 0.95rem)'
                }}
                onMouseOver={(e) => e.target.style.opacity = '1'}
                onMouseOut={(e) => e.target.style.opacity = '0.8'}
              >
                Firefox Add-on
              </a>
              <a 
                href="https://github.com/UseBetterCanvas/bettercanvas"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: 'white',
                  opacity: 0.8,
                  textDecoration: 'none',
                  transition: 'opacity 0.3s ease',
                  fontSize: 'clamp(0.85rem, 2.5vw, 0.95rem)'
                }}
                onMouseOver={(e) => e.target.style.opacity = '1'}
                onMouseOut={(e) => e.target.style.opacity = '0.8'}
              >
                Source Code
              </a>
            </div>
          </div>

          <div>
            <h4 style={{
              fontSize: 'clamp(1rem, 3vw, 1.2rem)',
              fontWeight: '600',
              marginBottom: '1rem'
            }}>
              Features
            </h4>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem'
            }}>
              <span style={{ 
                opacity: 0.8,
                fontSize: 'clamp(0.85rem, 2.5vw, 0.95rem)'
              }}>Dark Mode</span>
              <span style={{ 
                opacity: 0.8,
                fontSize: 'clamp(0.85rem, 2.5vw, 0.95rem)'
              }}>Card Customization</span>
              <span style={{ 
                opacity: 0.8,
                fontSize: 'clamp(0.85rem, 2.5vw, 0.95rem)'
              }}>Better Todo Lists</span>
              <span style={{ 
                opacity: 0.8,
                fontSize: 'clamp(0.85rem, 2.5vw, 0.95rem)'
              }}>GPA Calculator</span>
              <span style={{ 
                opacity: 0.8,
                fontSize: 'clamp(0.85rem, 2.5vw, 0.95rem)'
              }}>Custom Themes</span>
            </div>
          </div>

          <div>
            <h4 style={{
              fontSize: 'clamp(1rem, 3vw, 1.2rem)',
              fontWeight: '600',
              marginBottom: '1rem'
            }}>
              Contact
            </h4>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem'
            }}>
              <a 
                href="mailto:support@bettercanvas.org"
                style={{
                  color: 'white',
                  opacity: 0.8,
                  textDecoration: 'none',
                  transition: 'opacity 0.3s ease',
                  fontSize: 'clamp(0.85rem, 2.5vw, 0.95rem)',
                  wordBreak: 'break-word'
                }}
                onMouseOver={(e) => e.target.style.opacity = '1'}
                onMouseOut={(e) => e.target.style.opacity = '0.8'}
              >
                support@bettercanvas.org
              </a>
              <span style={{ 
                opacity: 0.8,
                fontSize: 'clamp(0.85rem, 2.5vw, 0.95rem)'
              }}>Privacy focused</span>
              <span style={{ 
                opacity: 0.8,
                fontSize: 'clamp(0.85rem, 2.5vw, 0.95rem)'
              }}>Open source</span>
            </div>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.2)',
          paddingTop: 'clamp(1.5rem, 4vw, 2rem)',
          textAlign: 'center'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 'clamp(1rem, 4vw, 2rem)',
            marginBottom: 'clamp(1rem, 3vw, 1.5rem)',
            flexWrap: 'wrap'
          }}>
            <a 
              href="/privacy"
              style={{
                color: 'white',
                opacity: 0.7,
                textDecoration: 'none',
                transition: 'opacity 0.3s ease',
                fontSize: 'clamp(0.8rem, 2.5vw, 0.9rem)'
              }}
              onMouseOver={(e) => e.target.style.opacity = '1'}
              onMouseOut={(e) => e.target.style.opacity = '0.7'}
            >
              Privacy Policy
            </a>
            <a 
              href="/terms"
              style={{
                color: 'white',
                opacity: 0.7,
                textDecoration: 'none',
                transition: 'opacity 0.3s ease',
                fontSize: 'clamp(0.8rem, 2.5vw, 0.9rem)'
              }}
              onMouseOver={(e) => e.target.style.opacity = '1'}
              onMouseOut={(e) => e.target.style.opacity = '0.7'}
            >
              Terms of Service
            </a>
            <a 
              href="/faq"
              style={{
                color: 'white',
                opacity: 0.7,
                textDecoration: 'none',
                transition: 'opacity 0.3s ease',
                fontSize: 'clamp(0.8rem, 2.5vw, 0.9rem)'
              }}
              onMouseOver={(e) => e.target.style.opacity = '1'}
              onMouseOut={(e) => e.target.style.opacity = '0.7'}
            >
              FAQ
            </a>
          </div>
          
          <p style={{ 
            opacity: 0.5,
            fontSize: 'clamp(0.75rem, 2vw, 0.85rem)',
            marginBottom: 'clamp(0.75rem, 2vw, 1rem)',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.4'
          }}>
            <strong>Disclaimer:</strong> BetterCanvas is an independent browser extension created by students to enhance the Canvas learning experience. 
            We are not affiliated with, endorsed by, or connected to Instructure Inc. or Canvas LMS. 
            Canvas is a trademark of Instructure, Inc. Use of BetterCanvas is at your own discretion and risk.
          </p>
          
          <p style={{ 
            opacity: 0.6,
            fontSize: 'clamp(0.8rem, 2.5vw, 0.9rem)'
          }}>
            © 2025 Better Canvas. Made with ❤️ for students everywhere.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 