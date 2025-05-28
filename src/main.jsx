import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Performance monitoring
if (typeof window !== 'undefined' && 'performance' in window) {
  window.addEventListener('load', () => {
    // Log performance metrics
    const perfData = performance.getEntriesByType('navigation')[0]
    console.log('Page Load Time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms')
  })
}

// Create root with better error handling
const container = document.getElementById('root')
if (!container) {
  throw new Error('Root element not found')
}

const root = ReactDOM.createRoot(container)

// Render with error boundary considerations
root.render(
  React.createElement(React.StrictMode, null,
    React.createElement(App)
  )
) 