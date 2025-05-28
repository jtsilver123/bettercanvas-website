import React from 'react'

function Footer() {
  return (
    <footer style={{
      background: 'var(--dark-gradient)',
      color: 'white',
      padding: '3rem 0 2rem'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '3rem',
          marginBottom: '2rem'
        }}>
          <div>
            <div style={{
              fontSize: '1.5rem',
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
              marginBottom: '1.5rem'
            }}>
              Transforming the Canvas learning experience for over 1 million students worldwide.
            </p>
            <div style={{
              display: 'flex',
              gap: '1rem'
            }}>
              <a 
                href="https://github.com/ksucpea/bettercanvas"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: 'white',
                  opacity: 0.8,
                  textDecoration: 'none',
                  transition: 'opacity 0.3s ease'
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
                  transition: 'opacity 0.3s ease'
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
              fontSize: '1.2rem',
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
                  transition: 'opacity 0.3s ease'
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
                  transition: 'opacity 0.3s ease'
                }}
                onMouseOver={(e) => e.target.style.opacity = '1'}
                onMouseOut={(e) => e.target.style.opacity = '0.8'}
              >
                Firefox Add-on
              </a>
              <a 
                href="https://github.com/ksucpea/bettercanvas"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: 'white',
                  opacity: 0.8,
                  textDecoration: 'none',
                  transition: 'opacity 0.3s ease'
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
              fontSize: '1.2rem',
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
              <span style={{ opacity: 0.8 }}>Dark Mode</span>
              <span style={{ opacity: 0.8 }}>Card Customization</span>
              <span style={{ opacity: 0.8 }}>Better Todo Lists</span>
              <span style={{ opacity: 0.8 }}>GPA Calculator</span>
              <span style={{ opacity: 0.8 }}>Custom Themes</span>
            </div>
          </div>

          <div>
            <h4 style={{
              fontSize: '1.2rem',
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
                  transition: 'opacity 0.3s ease'
                }}
                onMouseOver={(e) => e.target.style.opacity = '1'}
                onMouseOut={(e) => e.target.style.opacity = '0.8'}
              >
                support@bettercanvas.org
              </a>
              <span style={{ opacity: 0.8 }}>Privacy focused</span>
              <span style={{ opacity: 0.8 }}>Open source</span>
            </div>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.2)',
          paddingTop: '2rem',
          textAlign: 'center'
        }}>
          <p style={{ opacity: 0.6 }}>
            © 2025 Better Canvas. Made with ❤️ for students everywhere.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 