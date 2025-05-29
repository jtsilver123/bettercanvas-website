import React, { useState, useEffect, useRef } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import ForSchools from './pages/ForSchools.jsx'
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
      padding: '0.75rem 0',
      textAlign: 'center',
      fontSize: '0.875rem',
      fontWeight: '600',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      margin: 0
    }
  },
    React.createElement('div', { className: 'container' },
      '🚀 Built by students, free for everyone — Premium coming soon!'
    )
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
        React.createElement(Route, { path: '/for-schools', element: React.createElement(ForSchools) }),
        React.createElement(Route, { path: '/faq', element: React.createElement(FAQ) }),
        React.createElement(Route, { path: '/privacy', element: React.createElement(PrivacyPolicy) }),
        React.createElement(Route, { path: '/terms', element: React.createElement(TermsOfService) })
      ),
      React.createElement(Footer)
    )
  )
}

export default App 