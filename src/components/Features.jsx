import React from 'react'

function Features() {
  const features = [
    {
      title: "Dark Mode",
      description: "Better Canvas is your best option for making Canvas dark mode. Choose from presets or create your own palette.",
      icon: "🌙",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      title: "Card Customization",
      description: "Customize your cards however you want in the card customization tab.",
      icon: "🎨",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      title: "Card Assignments",
      description: "Easily locate your assignments under each class and see everything you need to do.",
      icon: "📋",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
      title: "Better Todo",
      description: "Dramatically improve your productivity using the much better todo list.",
      icon: "✅",
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    },
    {
      title: "GPA Calculator",
      description: "Stay updated on your grades or calculate what-if scores.",
      icon: "📊",
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    },
    {
      title: "Themes",
      description: "Make your canvas pop with one of the hundreds of user made themes.",
      icon: "🎭",
      gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)"
    }
  ]

  return (
    <section id="features" className="section-padding" style={{ background: 'var(--surface)' }}>
      <div className="container">
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
            Powerful Features
          </h2>
          <p style={{
            fontSize: 'clamp(1rem, 3vw, 1.2rem)',
            color: 'var(--text-secondary)',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Transform your Canvas experience with features designed for modern students
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
          gap: 'clamp(1.5rem, 4vw, 2rem)',
          marginBottom: 'clamp(3rem, 8vw, 4rem)'
        }}>
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card"
              style={{
                background: 'white',
                borderRadius: '1.5rem',
                padding: 'clamp(1.5rem, 5vw, 2.5rem)',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                border: '1px solid var(--border-light)'
              }}
            >
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: feature.gradient
              }} />
              
              <div style={{
                fontSize: 'clamp(2.5rem, 8vw, 3rem)',
                marginBottom: '1.5rem'
              }}>
                {feature.icon}
              </div>
              
              <h3 style={{
                fontSize: 'clamp(1.25rem, 4vw, 1.5rem)',
                fontWeight: '700',
                marginBottom: '1rem',
                color: 'var(--text-primary)'
              }}>
                {feature.title}
              </h3>
              
              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.6',
                fontSize: 'clamp(0.9rem, 2.5vw, 1rem)'
              }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features 