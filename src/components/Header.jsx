import React, { useState, useEffect } from 'react'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      background: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
      backdropFilter: isScrolled ? 'blur(10px)' : 'none',
      borderBottom: isScrolled ? '1px solid var(--border)' : 'none',
      transition: 'all 0.3s ease'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem 1.5rem'
      }}>
        <div style={{
          fontSize: '1.5rem',
          fontWeight: '700',
          background: 'var(--primary-gradient)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          Better Canvas
        </div>
        
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2rem'
        }}>
          <a href="#features" style={{
            textDecoration: 'none',
            color: 'var(--text-primary)',
            fontWeight: '500',
            transition: 'color 0.3s ease'
          }}>
            Features
          </a>
          <a href="#installation" style={{
            textDecoration: 'none',
            color: 'var(--text-primary)',
            fontWeight: '500',
            transition: 'color 0.3s ease'
          }}>
            Install
          </a>
          <a 
            href="https://chromewebstore.google.com/detail/bettercanvas/cndibmoanboadcifjkjbdpjgfedanolh"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ marginLeft: '1rem' }}
          >
            Get Extension
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header 