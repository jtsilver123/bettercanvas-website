import React from 'react'
import Hero from '../components/Hero.jsx'
import Features from '../components/Features.jsx'
import Installation from '../components/Installation.jsx'
import Footer from '../components/Footer.jsx'

// School Logos Marquee Component
const SchoolLogos = () => {
  return React.createElement('section', {
    style: {
      position: 'relative',
      width: '100%',
      overflow: 'hidden',
      padding: '3rem 0',
      background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%)',
      borderTop: '1px solid rgba(102, 126, 234, 0.1)',
      borderBottom: '1px solid rgba(102, 126, 234, 0.1)'
    }
  },
    React.createElement('div', { className: 'container' },
      React.createElement('div', {
        style: {
          textAlign: 'center',
          marginBottom: '2rem'
        }
      },
        React.createElement('p', {
          style: {
            fontSize: '1rem',
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
        gap: '4rem',
        opacity: 0.8
      }
    },
      [
        'Harvard University',
        'Stanford University', 
        'MIT',
        'UC Berkeley',
        'Yale University',
        'Princeton University',
        'Columbia University',
        'Cornell University',
        'UCLA',
        'USC',
        'University of Michigan',
        'NYU'
      ].concat([
        'Harvard University',
        'Stanford University', 
        'MIT',
        'UC Berkeley',
        'Yale University',
        'Princeton University',
        'Columbia University',
        'Cornell University',
        'UCLA',
        'USC',
        'University of Michigan',
        'NYU'
      ]).map((school, i) => 
        React.createElement('span', {
          key: i,
          style: {
            whiteSpace: 'nowrap',
            fontSize: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: 'var(--text-primary)',
            fontWeight: '500'
          }
        }, `🏫 ${school}`)
      )
    )
  )
}

// TikTok Grid Component
const TikTokGrid = () => {
  return React.createElement('section', {
    style: {
      padding: '5rem 0',
      background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.02) 0%, rgba(118, 75, 162, 0.02) 100%)'
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
            fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
            marginBottom: '1rem',
            color: 'var(--text-primary)'
          }
        }, 'See how students use BetterCanvas'),
        React.createElement('p', {
          style: {
            fontSize: '1.1rem',
            color: 'var(--text-secondary)',
            maxWidth: '600px',
            margin: '0 auto'
          }
        }, 'Join 1.5M+ students improving their Canvas experience')
      ),
      
      React.createElement('div', {
        style: {
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.5rem',
          marginBottom: '3rem',
          maxWidth: '1200px',
          margin: '0 auto 3rem'
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
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }
          },
            React.createElement('iframe', {
              src: `https://www.tiktok.com/embed/v2/${videoId}`,
              style: {
                width: '100%',
                height: '100%',
                border: 'none'
              },
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
            fontSize: '1.1rem',
            padding: '1rem 2rem'
          }
        }, '📱 See more on TikTok')
      )
    )
  )
}

const HomePage = () => {
  return React.createElement('div', null,
    React.createElement(Hero),
    React.createElement(SchoolLogos),
    React.createElement(TikTokGrid),
    React.createElement(Features),
    React.createElement(Installation),
    React.createElement(Footer)
  )
}

export default HomePage 