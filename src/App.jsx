import React, { useState, useEffect, useRef } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import ForPartners from './pages/ForPartners'
import ForInstitutions from './pages/ForInstitutions.jsx'
import AboutUs from './pages/AboutUs.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import TermsOfService from './pages/TermsOfService.jsx'
import FAQ from './pages/FAQ.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

// Announcement Bar Component
const AnnouncementBar = () => {
  return React.createElement('div', {
    style: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1001,
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      textAlign: 'center',
      fontSize: 'clamp(0.75rem, 2vw, 0.875rem)',
      fontWeight: '600',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      height: '3rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 1rem'
    }
  },
      '🚀 Premium features coming soon — Join 1.5M+ students using BetterCanvas!'
  )
}

// Main App Component with Router and AnnouncementBar
function App() {
  return React.createElement(Router, null,
    React.createElement('div', null,
      React.createElement(AnnouncementBar),
      React.createElement(Header),
      React.createElement(Routes, null,
        React.createElement(Route, { path: '/', element: React.createElement(HomePage) }),
        React.createElement(Route, { path: '/for-partners', element: React.createElement(ForPartners) }),
        React.createElement(Route, { path: '/for-institutions', element: React.createElement(ForInstitutions) }),
        React.createElement(Route, { path: '/about', element: React.createElement(AboutUs, { title: 'Our Story' }) }),
        React.createElement(Route, { path: '/faq', element: React.createElement(FAQ) }),
        React.createElement(Route, { path: '/privacy', element: React.createElement(PrivacyPolicy) }),
        React.createElement(Route, { path: '/terms', element: React.createElement(TermsOfService) })
      ),
      React.createElement(Footer)
    )
  )
}

export default App 