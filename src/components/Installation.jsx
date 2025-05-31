import React from 'react'

function Installation() {
  return (
    <section id="installation" className="section-padding">
      <div className="container">
        {/* Installation Steps */}
        <div style={{
          background: 'var(--surface)',
          borderRadius: '1.5rem',
          padding: 'clamp(2rem, 6vw, 3rem)',
          marginBottom: 'clamp(2.5rem, 6vw, 3rem)'
        }}>
          <h3 style={{
            fontSize: 'clamp(1.5rem, 5vw, 1.8rem)',
            fontWeight: '700',
            textAlign: 'center',
            marginBottom: 'clamp(1.5rem, 4vw, 2rem)',
            color: 'var(--text-primary)'
          }}>
            Installation Steps
          </h3>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
            gap: 'clamp(1.5rem, 4vw, 2rem)'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: 'clamp(50px, 12vw, 60px)',
                height: 'clamp(50px, 12vw, 60px)',
                borderRadius: '50%',
                background: 'var(--primary-gradient)',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 'clamp(1.2rem, 4vw, 1.5rem)',
                fontWeight: '700',
                margin: '0 auto 1rem'
              }}>
                1
              </div>
              <h4 style={{ 
                marginBottom: '0.5rem', 
                fontWeight: '600',
                fontSize: 'clamp(1rem, 3vw, 1.125rem)'
              }}>
                Click Install
              </h4>
              <p style={{ 
                color: 'var(--text-secondary)', 
                fontSize: 'clamp(0.85rem, 2.5vw, 0.9rem)',
                lineHeight: '1.5'
              }}>
                Click the extension link for your browser
              </p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: 'clamp(50px, 12vw, 60px)',
                height: 'clamp(50px, 12vw, 60px)',
                borderRadius: '50%',
                background: 'var(--primary-gradient)',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 'clamp(1.2rem, 4vw, 1.5rem)',
                fontWeight: '700',
                margin: '0 auto 1rem'
              }}>
                2
              </div>
              <h4 style={{ 
                marginBottom: '0.5rem', 
                fontWeight: '600',
                fontSize: 'clamp(1rem, 3vw, 1.125rem)'
              }}>
                Add to Browser
              </h4>
              <p style={{ 
                color: 'var(--text-secondary)', 
                fontSize: 'clamp(0.85rem, 2.5vw, 0.9rem)',
                lineHeight: '1.5'
              }}>
                Confirm the installation in your browser
              </p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: 'clamp(50px, 12vw, 60px)',
                height: 'clamp(50px, 12vw, 60px)',
                borderRadius: '50%',
                background: 'var(--primary-gradient)',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 'clamp(1.2rem, 4vw, 1.5rem)',
                fontWeight: '700',
                margin: '0 auto 1rem'
              }}>
                3
              </div>
              <h4 style={{ 
                marginBottom: '0.5rem', 
                fontWeight: '600',
                fontSize: 'clamp(1rem, 3vw, 1.125rem)'
              }}>
                Visit Canvas
              </h4>
              <p style={{ 
                color: 'var(--text-secondary)', 
                fontSize: 'clamp(0.85rem, 2.5vw, 0.9rem)',
                lineHeight: '1.5'
              }}>
                Open Canvas and enjoy your transformed experience
              </p>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div style={{
          textAlign: 'center',
          padding: 'clamp(2rem, 6vw, 3rem)',
          background: 'white',
          borderRadius: '1.5rem',
          border: '1px solid var(--border)',
          marginBottom: 'clamp(2.5rem, 6vw, 3rem)'
        }}>
          <h3 style={{
            fontSize: 'clamp(1.5rem, 5vw, 2rem)',
            fontWeight: '700',
            marginBottom: 'clamp(1.5rem, 4vw, 2rem)',
            color: 'var(--text-primary)'
          }}>
            Trusted by Students Worldwide
          </h3>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 150px), 1fr))',
            gap: 'clamp(2rem, 6vw, 3rem)',
            alignItems: 'center'
          }}>
            <div>
              <div style={{
                fontSize: 'clamp(2rem, 8vw, 2.5rem)',
                fontWeight: '700',
                background: 'var(--primary-gradient)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '0.5rem'
              }}>
                1.5M+
              </div>
              <p style={{ 
                color: 'var(--text-secondary)',
                fontSize: 'clamp(0.9rem, 2.5vw, 1rem)'
              }}>Active Users</p>
            </div>
            
            <div>
              <div style={{
                fontSize: 'clamp(2rem, 8vw, 2.5rem)',
                fontWeight: '700',
                background: 'var(--secondary-gradient)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '0.5rem'
              }}>
                5.0★
              </div>
              <p style={{ 
                color: 'var(--text-secondary)',
                fontSize: 'clamp(0.9rem, 2.5vw, 1rem)'
              }}>Average Rating</p>
            </div>
            
            <div>
              <div style={{
                fontSize: 'clamp(2rem, 8vw, 2.5rem)',
                fontWeight: '700',
                background: 'var(--primary-gradient)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '0.5rem'
              }}>
                7.4K
              </div>
              <p style={{ 
                color: 'var(--text-secondary)',
                fontSize: 'clamp(0.9rem, 2.5vw, 1rem)'
              }}>Reviews</p>
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginBottom: 'clamp(3rem, 8vw, 4rem)' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 6vw, 3rem)',
            fontWeight: '700',
            marginBottom: '1rem',
            background: 'var(--primary-gradient)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Get Started in Seconds
          </h2>
          <p style={{
            fontSize: 'clamp(1rem, 3vw, 1.2rem)',
            color: 'var(--text-secondary)',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Install Better Canvas on your favorite browser and start customizing immediately
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
          gap: 'clamp(1.5rem, 4vw, 2rem)',
          marginBottom: 'clamp(3rem, 8vw, 4rem)'
        }}>
          {/* Chrome Installation */}
          <div style={{
            background: 'white',
            borderRadius: '1.5rem',
            padding: 'clamp(2rem, 6vw, 2.5rem)',
            border: '1px solid var(--border)',
            textAlign: 'center',
            transition: 'all 0.3s ease',
            display: 'flex',
            flexDirection: 'column',
            height: '100%' // Ensure equal height
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: 'clamp(5rem, 15vw, 6rem)', // Fixed height for icon area
              marginBottom: '1.5rem'
            }}>
              <img 
                src="/images/chrome-logo.png" 
                alt="Google Chrome"
                style={{
                  width: 'clamp(4rem, 12vw, 5rem)',
                  height: 'clamp(4rem, 12vw, 5rem)',
                  objectFit: 'contain'
                }}
              />
            </div>
            <h3 style={{
              fontSize: 'clamp(1.25rem, 4vw, 1.5rem)',
              fontWeight: '700',
              marginBottom: '1rem'
            }}>
              Google Chrome
            </h3>
            <p style={{
              color: 'var(--text-secondary)',
              marginBottom: '2rem',
              fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
              lineHeight: '1.5',
              flex: 1 // Take up available space
            }}>
              Available on the Chrome Web Store with over 1,000,000+ users
            </p>
            <a 
              href="https://chromewebstore.google.com/detail/bettercanvas/cndibmoanboadcifjkjbdpjgfedanolh"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ 
                width: '100%',
                fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
                padding: 'clamp(0.75rem, 3vw, 1rem) clamp(1.5rem, 5vw, 2rem)',
                marginTop: 'auto' // Push to bottom
              }}
            >
              Add to Chrome
            </a>
          </div>

          {/* Firefox Installation */}
          <div style={{
            background: 'white',
            borderRadius: '1.5rem',
            padding: 'clamp(2rem, 6vw, 2.5rem)',
            border: '1px solid var(--border)',
            textAlign: 'center',
            transition: 'all 0.3s ease',
            display: 'flex',
            flexDirection: 'column',
            height: '100%' // Ensure equal height
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: 'clamp(5rem, 15vw, 6rem)', // Fixed height for icon area to match Chrome
              marginBottom: '1.5rem'
            }}>
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Firefox_logo%2C_2019.svg" 
                alt="Mozilla Firefox"
                style={{
                  width: 'clamp(4rem, 12vw, 5rem)',
                  height: 'clamp(4rem, 12vw, 5rem)',
                  objectFit: 'contain'
                }}
              />
            </div>
            <h3 style={{
              fontSize: 'clamp(1.25rem, 4vw, 1.5rem)',
              fontWeight: '700',
              marginBottom: '1rem'
            }}>
              Mozilla Firefox
            </h3>
            <p style={{
              color: 'var(--text-secondary)',
              marginBottom: '2rem',
              fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
              lineHeight: '1.5',
              flex: 1 // Take up available space
            }}>
              Available on Firefox Add-ons with the same great features
            </p>
            <a 
              href="https://addons.mozilla.org/addon/better-canvas/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ 
                width: '100%',
                fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
                padding: 'clamp(0.75rem, 3vw, 1rem) clamp(1.5rem, 5vw, 2rem)',
                marginTop: 'auto' // Push to bottom
              }}
            >
              Add to Firefox
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Installation 