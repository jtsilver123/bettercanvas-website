import React from 'react';
import '../styles/SharedPages.css';
import '../styles/ForInstitutions.css';

// School Logos Marquee Component
const SchoolLogos = () => {
  const schools = [
    {
      name: 'Harvard University',
      logo: '/images/schools/Harvard_University_coat_of_arms.svg.png',
      alt: 'Harvard University Logo'
    },
    {
      name: 'Yale University',
      logo: '/images/schools/Yale-Logo.png',
      alt: 'Yale University Logo'
    },
    {
      name: 'UCLA',
      logo: '/images/schools/University_of_California,_Los_Angeles_logo.png',
      alt: 'UCLA Logo'
    },
    {
      name: 'University of Texas',
      logo: '/images/schools/0_Texas-Longhorns-01.png',
      alt: 'University of Texas Logo'
    },
    {
      name: 'Texas A&M University',
      logo: '/images/schools/Texas_A&M_University_logo.svg.png',
      alt: 'Texas A&M University Logo'
    },
    {
      name: 'Arizona State University',
      logo: '/images/schools/ASU-logo.png',
      alt: 'Arizona State University Logo'
    },
    {
      name: 'University of Wisconsin',
      logo: '/images/schools/Wisconsin_Badgers_logo.svg.png',
      alt: 'University of Wisconsin Logo'
    }
  ]

  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768)
  
  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  React.useEffect(() => {
    const style = document.createElement('style')
    style.textContent = `
      @keyframes scrollLogos {
        0% { transform: translateX(0); }
        100% { transform: translateX(calc(-50% - clamp(2rem, 4vw, 3rem))); }
      }
    `
    document.head.appendChild(style)
    return () => document.head.removeChild(style)
  }, [])

  return React.createElement('section', {
    style: {
      position: 'relative',
      width: '100%',
      overflow: 'hidden',
      padding: isMobile ? 'clamp(1.5rem, 3vw, 2rem) 0' : 'clamp(2rem, 4vw, 3rem) 0',
      background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%)',
      borderTop: '1px solid rgba(102, 126, 234, 0.1)',
      borderBottom: '1px solid rgba(102, 126, 234, 0.1)',
      height: 'auto',
      minHeight: 'fit-content'
    }
  },
    React.createElement('div', { className: 'container' },
      React.createElement('div', {
        style: {
          textAlign: 'center',
          marginBottom: isMobile ? '1rem' : 'clamp(1.5rem, 3vw, 2rem)'
        }
      },
        React.createElement('p', {
          style: {
            fontSize: isMobile ? '0.875rem' : 'clamp(0.875rem, 2vw, 1rem)',
            color: 'var(--text-secondary)',
            fontWeight: '600'
          }
        }, 'Trusted by students at 500+ schools including:')
      )
    ),
    React.createElement('div', {
      style: {
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
        height: isMobile ? '60px' : 'clamp(70px, 10vw, 90px)',
        display: 'flex',
        alignItems: 'center'
      }
    },
      React.createElement('div', {
        style: {
          display: 'flex',
          gap: isMobile ? '2rem' : 'clamp(3rem, 6vw, 5rem)',
          animation: `scrollLogos ${isMobile ? '30s' : '45s'} linear infinite`,
          paddingLeft: isMobile ? '2rem' : 'clamp(3rem, 6vw, 5rem)',
          alignItems: 'center'
        }
      },
        [...schools, ...schools, ...schools].map((school, i) => 
          React.createElement('div', {
            key: i,
            style: {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: isMobile ? '100px' : 'clamp(120px, 18vw, 160px)',
              height: isMobile ? '50px' : 'clamp(65px, 9vw, 85px)',
              flexShrink: 0,
              padding: isMobile ? '8px' : '10px'
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
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: 'scale(1)',
                willChange: 'transform, filter, opacity'
              },
              onMouseEnter: (e) => {
                e.target.style.filter = 'grayscale(0) brightness(1.1)'
                e.target.style.opacity = '1'
                e.target.style.transform = isMobile ? 'scale(1.1)' : 'scale(1.2)'
              },
              onMouseLeave: (e) => {
                e.target.style.filter = 'grayscale(1) brightness(0.8)'
                e.target.style.opacity = '0.7'
                e.target.style.transform = 'scale(1)'
              }
            })
          )
        )
      )
    )
  )
}

const ForInstitutions = () => {
  return (
    <div className="page">
      <div className="page-wrapper">
        {/* Hero Section */}
        <section className="page-header" style={{
          padding: 'clamp(2rem, 6vw, 6rem) 0'
        }}>
          <div className="hero__content" style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <span className="badge" style={{
              color: 'white',
              textAlign: 'center',
              display: 'block',
              marginBottom: '1.5rem',
              fontSize: 'clamp(1rem, 2.2vw, 1.2rem)'
            }}>Trusted by 500+ Universities & 1.5M+ Students</span>
            <h1 style={{
              fontSize: 'clamp(3rem, 8vw, 5rem)',
              fontFamily: 'var(--font-serif)',
              fontWeight: '700',
              marginBottom: 'clamp(1.5rem, 3vw, 2rem)',
              lineHeight: '1.1',
              maxWidth: '1200px',
              margin: '0 auto'
            }}>Transform Student Experiences with BetterCanvas</h1>
            <p className="hero__subtitle" style={{
              fontSize: 'clamp(1.2rem, 3.5vw, 1.6rem)',
              opacity: 0.9,
              maxWidth: '900px',
              margin: '0 auto',
              lineHeight: '1.6',
              marginBottom: 'clamp(2.5rem, 4vw, 3.5rem)'
            }}>
              Drive measurable improvements in student engagement, accessibility, and academic outcomes.
            </p>
            <div className="button-group" style={{ 
              marginTop: '2.5rem', 
              marginBottom: '3rem',
              display: 'flex',
              justifyContent: 'center'
            }}>
              <a href="https://calendly.com/bettercanvas/30min"
                className="button button--primary"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: 'white',
                  color: '#667eea',
                  padding: '1rem 2rem',
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  borderRadius: '0.75rem',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  textDecoration: 'none',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  cursor: 'pointer',
                  maxWidth: '280px',
                  width: 'auto',
                  justifyContent: 'center',
                  ':hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 15px rgba(0, 0, 0, 0.15)',
                    background: '#f8f9ff'
                  }
                }}>
                Let's Chat
                <span className="icon" style={{ fontSize: '1.25rem' }}>→</span>
              </a>
            </div>
            <div className="stats" style={{ color: '#FFFFFF', marginTop: '2rem' }}>
              <div className="stat">
                <span className="stat__number" style={{ 
                  color: '#FFFFFF !important', 
                  fontSize: '2.5rem', 
                  fontWeight: '700', 
                  display: 'block',
                  lineHeight: '1',
                  WebkitTextFillColor: '#FFFFFF'
                }}>94%*</span>
                <span className="stat__label" style={{ 
                  color: 'rgba(255, 255, 255, 0.9)',
                  marginTop: '0.5rem',
                  display: 'block'
                }}>Assignment<br/>Completion</span>
              </div>
              <div className="stat">
                <span className="stat__number" style={{ 
                  color: '#FFFFFF !important', 
                  fontSize: '2.5rem', 
                  fontWeight: '700', 
                  display: 'block',
                  lineHeight: '1',
                  WebkitTextFillColor: '#FFFFFF'
                }}>3.2x*</span>
                <span className="stat__label" style={{ 
                  color: 'rgba(255, 255, 255, 0.9)',
                  marginTop: '0.5rem',
                  display: 'block'
                }}>Student<br/>Engagement</span>
              </div>
              <div className="stat">
                <span className="stat__number" style={{ 
                  color: '#FFFFFF !important', 
                  fontSize: '2.5rem', 
                  fontWeight: '700', 
                  display: 'block',
                  lineHeight: '1',
                  WebkitTextFillColor: '#FFFFFF'
                }}>27%*</span>
                <span className="stat__label" style={{ 
                  color: 'rgba(255, 255, 255, 0.9)',
                  marginTop: '0.5rem',
                  display: 'block'
                }}>Higher Course<br/>Completion</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* School Logos Marquee */}
      <SchoolLogos />

      <div className="container">
        {/* Outcomes Section */}
        <section className="section">
          <h2 className="section__title">
            Proven Student Outcomes*
          </h2>
          <div className="features">
            <div className="feature">
              <h3 className="feature__title">Performance</h3>
              <ul className="feature__list">
                <li>27% higher course completion rates</li>
                <li>32% improvement in assignment submissions</li>
                <li>Reduced late submissions by 45%</li>
                <li>Better grade distribution across courses</li>
              </ul>
            </div>
            <div className="feature">
              <h3 className="feature__title">Engagement</h3>
              <ul className="feature__list">
                <li>3.2x increase in Canvas platform usage</li>
                <li>58% more student-faculty interactions</li>
                <li>Higher participation in discussions</li>
                <li>More time spent on learning materials</li>
              </ul>
            </div>
            <div className="feature">
              <h3 className="feature__title">Satisfaction</h3>
              <ul className="feature__list">
                <li>94% student satisfaction rate</li>
                <li>Students report "more enjoyable" learning</li>
                <li>Increased classroom enthusiasm</li>
                <li>More positive digital learning experience</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Enterprise Features */}
        <section className="section section--alt" style={{
          background: '#f8fafc',
          margin: '0 calc(-50vw + 50%)',
          width: '100vw',
          padding: '4rem calc(50vw - 50%)'
        }}>
          <h2 className="section__title">Enterprise-Grade Tools</h2>
          <div className="features">
            <div className="feature">
              <h3 className="feature__title">Analytics & Impact Metrics</h3>
              <ul className="feature__list">
                <li>Track student adoption rates</li>
                <li>Monitor feature usage patterns</li>
                <li>Measure aggregated KPIs</li>
                <li>Analyze student outcome improvements</li>
              </ul>
            </div>
            <div className="feature">
              <h3 className="feature__title">Permission Management</h3>
              <ul className="feature__list">
                <li>Enable/disable features per group</li>
                <li>Customize system prompts</li>
                <li>Set feature access levels</li>
                <li>Control AI capabilities</li>
              </ul>
            </div>
            <div className="feature">
              <h3 className="feature__title">Theme Customization</h3>
              <ul className="feature__list">
                <li>Add custom themes</li>
                <li>Brand-aligned styling</li>
                <li>Theme management portal</li>
                <li>Visual customization tools</li>
              </ul>
            </div>
            <div className="feature">
              <h3 className="feature__title">Premium Support</h3>
              <ul className="feature__list">
                <li>24/7 priority support</li>
                <li>Dedicated success manager</li>
                <li>Faculty training program</li>
                <li>Implementation assistance</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Compatibility Section */}
        <section className="section section--alt" style={{
          background: 'linear-gradient(135deg, #a8b5ff 0%, #7c8eff 100%)',
          margin: '0 calc(-50vw + 50%)',
          width: '100vw',
          padding: '4rem calc(50vw - 50%)',
          color: 'white'
        }}>
          <h2 className="section__title" style={{ color: 'white' }}>Seamless Integration & Compatibility</h2>
          <div className="grid">
            <div className="card" style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}>
              <div className="card__icon">✓</div>
              <h3 className="card__title" style={{ color: 'white' }}>Canvas LMS Compatible</h3>
              <p className="card__text" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                Works with all Canvas instances, including self-hosted and cloud-hosted environments
              </p>
            </div>
            <div className="card" style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}>
              <div className="card__icon">🔒</div>
              <h3 className="card__title" style={{ color: 'white' }}>Enterprise Security</h3>
              <p className="card__text" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                FERPA compliant. SOC 2 Type II certification and SSO/LTI integration coming Q4 2025
              </p>
            </div>
            <div className="card" style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}>
              <div className="card__icon">🌐</div>
              <h3 className="card__title" style={{ color: 'white' }}>Browser Support</h3>
              <p className="card__text" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                Fully supported on Chrome and Firefox. Safari and Edge support coming Q4 2025
              </p>
            </div>
          </div>
        </section>

        {/* Implementation Process */}
        <section className="section">
          <h2 className="section__title">Simple 4-Step Onboarding Process</h2>
          <div className="steps">
            <div className="step">
              <div className="step__number">1</div>
              <h3 className="step__title">Initial Chat</h3>
              <p className="step__text">Quick discussion to understand your needs and answer any questions</p>
            </div>
            <div className="step">
              <div className="step__number">2</div>
              <h3 className="step__title">Pilot Setup</h3>
              <p className="step__text">Start with a small group to see the impact firsthand</p>
            </div>
            <div className="step">
              <div className="step__number">3</div>
              <h3 className="step__title">Team Preview</h3>
              <p className="step__text">Brief demo session for faculty and staff to get comfortable</p>
            </div>
            <div className="step">
              <div className="step__number">4</div>
              <h3 className="step__title">Roll Out</h3>
              <p className="step__text">Expand access to all students with ongoing support</p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section section--cta" style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          borderRadius: 'var(--radius-xl)',
          margin: '2rem 0',
          padding: '4rem',
          textAlign: 'center',
          boxShadow: '0 20px 40px rgba(102, 126, 234, 0.25)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at top right, rgba(255,255,255,0.1) 0%, transparent 60%)',
            pointerEvents: 'none'
          }}></div>
          <h2 className="section__title" style={{ 
            color: '#ffffff',
            fontSize: 'clamp(1.5rem, 4vw, 2.75rem)',
            marginBottom: '1.5rem',
            fontWeight: '700',
            position: 'relative',
            whiteSpace: 'nowrap'
          }}>See BetterCanvas Pro in Action</h2>
          <p className="section__subtitle" style={{ 
            color: 'rgba(255, 255, 255, 0.9)',
            fontSize: '1.25rem',
            marginBottom: '2.5rem',
            maxWidth: '800px',
            margin: '0 auto 2.5rem',
            position: 'relative'
          }}>
            Join a live demo to see how BetterCanvas Pro can transform your institution's Canvas experience
          </p>
          <div className="cta" style={{ position: 'relative' }}>
            <a href="https://calendly.com/bettercanvas/30min"
              className="button button--primary button--large"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'white',
                color: '#667eea',
                padding: '1.25rem 3rem',
                fontSize: '1.25rem',
                fontWeight: '600',
                borderRadius: '1rem',
                transition: 'all 0.3s ease',
                boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                textDecoration: 'none',
                border: '2px solid transparent',
                cursor: 'pointer',
                maxWidth: '320px',
                width: 'auto',
                justifyContent: 'center',
                ':hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 15px 30px rgba(0, 0, 0, 0.15)',
                  background: '#f8f9ff'
                }
              }}>
              Let's Chat
              <span className="icon" style={{ fontSize: '1.5rem' }}>→</span>
            </a>
            <div className="stats" style={{ 
              marginTop: '4rem',
              display: 'flex',
              justifyContent: 'center',
              gap: 'clamp(1rem, 3vw, 5rem)',
              textAlign: 'center',
              flexWrap: 'wrap',
              flexDirection: 'row'
            }}>
              <div className="stat">
                <span className="stat__number" style={{ 
                  color: '#FFFFFF !important', 
                  fontSize: '3.5rem', 
                  fontWeight: '700', 
                  display: 'block',
                  lineHeight: '1',
                  WebkitTextFillColor: '#FFFFFF',
                  textShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}>94%*</span>
                <span className="stat__label" style={{ 
                  color: 'rgba(255, 255, 255, 0.9)', 
                  fontSize: '1.1rem', 
                  marginTop: '0.75rem', 
                  display: 'block' 
                }}>Assignment<br/>Completion</span>
              </div>
              <div className="stat">
                <span className="stat__number" style={{ 
                  color: '#FFFFFF !important', 
                  fontSize: '3.5rem', 
                  fontWeight: '700', 
                  display: 'block',
                  lineHeight: '1',
                  WebkitTextFillColor: '#FFFFFF',
                  textShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}>3.2x*</span>
                <span className="stat__label" style={{ 
                  color: 'rgba(255, 255, 255, 0.9)', 
                  fontSize: '1.1rem', 
                  marginTop: '0.75rem', 
                  display: 'block' 
                }}>Student<br/>Engagement</span>
              </div>
              <div className="stat">
                <span className="stat__number" style={{ 
                  color: '#FFFFFF !important', 
                  fontSize: '3.5rem', 
                  fontWeight: '700', 
                  display: 'block',
                  lineHeight: '1',
                  WebkitTextFillColor: '#FFFFFF',
                  textShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}>27%*</span>
                <span className="stat__label" style={{ 
                  color: 'rgba(255, 255, 255, 0.9)', 
                  fontSize: '1.1rem', 
                  marginTop: '0.75rem', 
                  display: 'block' 
                }}>Higher Course<br/>Completion</span>
              </div>
            </div>
          </div>
        </section>

        {/* Asterisk Explanation */}
        <div style={{ 
          fontSize: '0.9rem', 
          color: '#666', 
          fontStyle: 'italic',
          textAlign: 'center',
          padding: '2rem 0',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          *These metrics are qualitative and currently being measured through our institutional research program
        </div>
      </div>
    </div>
  );
};

export default ForInstitutions; 