import React from 'react'

function Installation() {
  return (
    <section id="installation" className="section-padding">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
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
            fontSize: '1.2rem',
            color: 'var(--text-secondary)',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Install Better Canvas on your favorite browser and start customizing immediately
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          {/* Chrome Installation */}
          <div style={{
            background: 'white',
            borderRadius: '1.5rem',
            padding: '2.5rem',
            border: '1px solid var(--border)',
            textAlign: 'center'
          }}>
            <div style={{
              fontSize: '4rem',
              marginBottom: '1.5rem'
            }}>
              🌐
            </div>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              marginBottom: '1rem'
            }}>
              Google Chrome
            </h3>
            <p style={{
              color: 'var(--text-secondary)',
              marginBottom: '2rem'
            }}>
              Available on the Chrome Web Store with over 1,000,000+ users
            </p>
            <a 
              href="https://chromewebstore.google.com/detail/bettercanvas/cndibmoanboadcifjkjbdpjgfedanolh"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ width: '100%' }}
            >
              Add to Chrome
            </a>
          </div>

          {/* Firefox Installation */}
          <div style={{
            background: 'white',
            borderRadius: '1.5rem',
            padding: '2.5rem',
            border: '1px solid var(--border)',
            textAlign: 'center'
          }}>
            <div style={{
              fontSize: '4rem',
              marginBottom: '1.5rem'
            }}>
              🦊
            </div>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              marginBottom: '1rem'
            }}>
              Mozilla Firefox
            </h3>
            <p style={{
              color: 'var(--text-secondary)',
              marginBottom: '2rem'
            }}>
              Available on Firefox Add-ons with the same great features
            </p>
            <a 
              href="https://addons.mozilla.org/addon/better-canvas/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ width: '100%' }}
            >
              Add to Firefox
            </a>
          </div>
        </div>

        {/* Installation Steps */}
        <div style={{
          background: 'var(--surface)',
          borderRadius: '1.5rem',
          padding: '3rem',
          marginBottom: '3rem'
        }}>
          <h3 style={{
            fontSize: '1.8rem',
            fontWeight: '700',
            textAlign: 'center',
            marginBottom: '2rem',
            color: 'var(--text-primary)'
          }}>
            Installation Steps
          </h3>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'var(--primary-gradient)',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                fontWeight: '700',
                margin: '0 auto 1rem'
              }}>
                1
              </div>
              <h4 style={{ marginBottom: '0.5rem', fontWeight: '600' }}>
                Click Install
              </h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                Click the extension link for your browser
              </p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'var(--primary-gradient)',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                fontWeight: '700',
                margin: '0 auto 1rem'
              }}>
                2
              </div>
              <h4 style={{ marginBottom: '0.5rem', fontWeight: '600' }}>
                Add to Browser
              </h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                Confirm the installation in your browser
              </p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'var(--primary-gradient)',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                fontWeight: '700',
                margin: '0 auto 1rem'
              }}>
                3
              </div>
              <h4 style={{ marginBottom: '0.5rem', fontWeight: '600' }}>
                Visit Canvas
              </h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                Navigate to your Canvas and enjoy!
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem',
          textAlign: 'center'
        }}>
          <div>
            <div style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              background: 'var(--primary-gradient)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '0.5rem'
            }}>
              1M+
            </div>
            <p style={{ color: 'var(--text-secondary)' }}>Active Users</p>
          </div>
          
          <div>
            <div style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              background: 'var(--secondary-gradient)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '0.5rem'
            }}>
              5.0★
            </div>
            <p style={{ color: 'var(--text-secondary)' }}>Average Rating</p>
          </div>
          
          <div>
            <div style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              background: 'var(--primary-gradient)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '0.5rem'
            }}>
              7.4K
            </div>
            <p style={{ color: 'var(--text-secondary)' }}>Reviews</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Installation 