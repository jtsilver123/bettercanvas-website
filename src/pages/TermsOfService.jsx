import React from 'react'

const TermsOfService = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return React.createElement('div', { className: 'min-h-screen' },
    // Header spacer
    React.createElement('div', { style: { height: '80px' } }),
    
    React.createElement('div', { className: 'container section' },
      React.createElement('div', { 
        style: { maxWidth: '800px', margin: '0 auto' }
      },
        React.createElement('h1', { 
          className: 'text-center mb-lg',
          style: { fontFamily: 'var(--font-serif)' }
        }, 'BetterCanvas — Terms of Service'),
        
        React.createElement('p', { 
          className: 'text-center text-small mb-2xl',
          style: { color: 'var(--text-secondary)' }
        }, 'Last updated: 27 May 2025'),
        
        React.createElement('div', { className: 'card' },
          React.createElement('div', { style: { lineHeight: '1.7' } },
            
            // Section divider
            React.createElement('div', {
              style: {
                textAlign: 'center',
                margin: '2rem 0',
                color: 'var(--text-secondary)',
                fontWeight: '300',
                fontSize: '1.2rem'
              }
            }, '⸻'),

            // 1. Acceptance of Terms
            React.createElement('section', { className: 'mb-xl' },
              React.createElement('h2', { 
                className: 'mb-md',
                style: { fontFamily: 'var(--font-serif)' }
              }, '1. Acceptance of Terms'),
              React.createElement('p', null,
                'By installing or using the BetterCanvas browser extension, website (https://bettercanvas.org), or any related services (collectively, the "Service"), you ("you," "your," or "User") agree to be bound by these Terms of Service ("Terms"). If you do not agree, do not install or use the Service.'
              )
            ),

            // Section divider
            React.createElement('div', {
              style: {
                textAlign: 'center',
                margin: '2rem 0',
                color: 'var(--text-secondary)',
                fontWeight: '300',
                fontSize: '1.2rem'
              }
            }, '⸻'),

            // 2. Who We Are
            React.createElement('section', { className: 'mb-xl' },
              React.createElement('h2', { 
                className: 'mb-md',
                style: { fontFamily: 'var(--font-serif)' }
              }, '2. Who We Are (No Affiliation Disclaimer)'),
              React.createElement('p', null,
                'BetterCanvas, Inc. ("BetterCanvas," "we," "us," or "our") is an independent software company. BetterCanvas is not affiliated with, endorsed by, or sponsored by Instructure Inc., Canvas LMS, or any educational institution or university. Canvas® and Instructure® are registered trademarks of their respective owners.'
              )
            ),

            // Section divider
            React.createElement('div', {
              style: {
                textAlign: 'center',
                margin: '2rem 0',
                color: 'var(--text-secondary)',
                fontWeight: '300',
                fontSize: '1.2rem'
              }
            }, '⸻'),

            // 3. Eligibility
            React.createElement('section', { className: 'mb-xl' },
              React.createElement('h2', { 
                className: 'mb-md',
                style: { fontFamily: 'var(--font-serif)' }
              }, '3. Eligibility'),
              React.createElement('p', null,
                'You must be at least 13 years old (or the age of digital consent in your jurisdiction) to use the Service. By using the Service, you represent that you meet this requirement.'
              )
            ),

            // Section divider
            React.createElement('div', {
              style: {
                textAlign: 'center',
                margin: '2rem 0',
                color: 'var(--text-secondary)',
                fontWeight: '300',
                fontSize: '1.2rem'
              }
            }, '⸻'),

            // 4. License and Acceptable Use
            React.createElement('section', { className: 'mb-xl' },
              React.createElement('h2', { 
                className: 'mb-md',
                style: { fontFamily: 'var(--font-serif)' }
              }, '4. License and Acceptable Use'),
              
              React.createElement('h3', { 
                className: 'mb-sm',
                style: { fontSize: '1.125rem', fontFamily: 'var(--font-serif)' }
              }, '4.1 Limited License'),
              React.createElement('p', { className: 'mb-md' },
                'BetterCanvas grants you a limited, non-exclusive, non-transferable, revocable license to install and use the extension solely for personal, non-commercial educational purposes, subject to these Terms.'
              ),
              
              React.createElement('h3', { 
                className: 'mb-sm',
                style: { fontSize: '1.125rem', fontFamily: 'var(--font-serif)' }
              }, '4.2 Prohibited Conduct'),
              React.createElement('p', { className: 'mb-sm' },
                'You agree not to:'
              ),
              React.createElement('ul', { 
                className: 'mb-md',
                style: { paddingLeft: '2rem' }
              },
                React.createElement('li', null, 'Reverse-engineer, decompile, or modify the extension except as permitted by law.'),
                React.createElement('li', null, 'Use the Service to violate any law or third-party right (including Canvas LMS terms).'),
                React.createElement('li', null, 'Interfere with or disrupt the Service or servers.'),
                React.createElement('li', null, 'Use the Service to send unsolicited or prohibited content (SHAFT, spam, etc.).')
              ),
              React.createElement('p', null,
                'Violation may result in immediate suspension or termination.'
              )
            ),

            // Section divider
            React.createElement('div', {
              style: {
                textAlign: 'center',
                margin: '2rem 0',
                color: 'var(--text-secondary)',
                fontWeight: '300',
                fontSize: '1.2rem'
              }
            }, '⸻'),

            // 5. SMS Reminder Service
            React.createElement('section', { className: 'mb-xl' },
              React.createElement('h2', { 
                className: 'mb-md',
                style: { fontFamily: 'var(--font-serif)' }
              }, '5. SMS Reminder Service'),
              React.createElement('ul', { 
                style: { paddingLeft: '2rem' }
              },
                React.createElement('li', null, 'SMS reminders are optional and strictly opt-in (double-consent) as described in our Privacy Policy.'),
                React.createElement('li', null, 'By providing your mobile number and checking the consent box, you agree to receive transactional assignment reminders.'),
                React.createElement('li', null, 'Message frequency depends on your settings (e.g., due-date cadence).'),
                React.createElement('li', null, 'Message and data rates may apply.'),
                React.createElement('li', null, 'Reply STOP to cancel, HELP for help.'),
                React.createElement('li', null, 'Numbers are used solely to deliver reminders and are not shared or sold.')
              )
            ),

            // Section divider
            React.createElement('div', {
              style: {
                textAlign: 'center',
                margin: '2rem 0',
                color: 'var(--text-secondary)',
                fontWeight: '300',
                fontSize: '1.2rem'
              }
            }, '⸻'),

            // 6. Ownership & Intellectual Property
            React.createElement('section', { className: 'mb-xl' },
              React.createElement('h2', { 
                className: 'mb-md',
                style: { fontFamily: 'var(--font-serif)' }
              }, '6. Ownership & Intellectual Property'),
              React.createElement('ul', { 
                style: { paddingLeft: '2rem' }
              },
                React.createElement('li', null, 'All BetterCanvas code, logos, and content are the property of BetterCanvas, Inc. or its licensors.'),
                React.createElement('li', null, 'You retain ownership of your Canvas data; BetterCanvas does not claim any rights to Canvas course content.')
              )
            ),

            // Section divider
            React.createElement('div', {
              style: {
                textAlign: 'center',
                margin: '2rem 0',
                color: 'var(--text-secondary)',
                fontWeight: '300',
                fontSize: '1.2rem'
              }
            }, '⸻'),

            // 7. Third-Party Services
            React.createElement('section', { className: 'mb-xl' },
              React.createElement('h2', { 
                className: 'mb-md',
                style: { fontFamily: 'var(--font-serif)' }
              }, '7. Third-Party Services'),
              React.createElement('p', null,
                'The Service may link to third-party sites (e.g., Canvas LMS, Google Analytics, Twilio). BetterCanvas is not responsible for third-party content or policies. Your use of third-party services is at your own risk and subject to their terms.'
              )
            ),

            // Section divider
            React.createElement('div', {
              style: {
                textAlign: 'center',
                margin: '2rem 0',
                color: 'var(--text-secondary)',
                fontWeight: '300',
                fontSize: '1.2rem'
              }
            }, '⸻'),

            // 8. Disclaimer of Warranties
            React.createElement('section', { className: 'mb-xl' },
              React.createElement('h2', { 
                className: 'mb-md',
                style: { fontFamily: 'var(--font-serif)' }
              }, '8. Disclaimer of Warranties'),
              React.createElement('p', null,
                'THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND. BETTERCANVAS DISCLAIMS ALL EXPRESS OR IMPLIED WARRANTIES, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. We do not guarantee that reminders will be delivered on time or that the extension will always be available or error-free.'
              )
            ),

            // Section divider
            React.createElement('div', {
              style: {
                textAlign: 'center',
                margin: '2rem 0',
                color: 'var(--text-secondary)',
                fontWeight: '300',
                fontSize: '1.2rem'
              }
            }, '⸻'),

            // 9. Limitation of Liability
            React.createElement('section', { className: 'mb-xl' },
              React.createElement('h2', { 
                className: 'mb-md',
                style: { fontFamily: 'var(--font-serif)' }
              }, '9. Limitation of Liability'),
              React.createElement('p', null,
                'To the maximum extent permitted by law, BetterCanvas and its officers, employees, and agents will not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of data or profits, arising out of or relating to your use of the Service. In no event shall BetterCanvas\'s total liability exceed US $100.'
              )
            ),

            // Section divider
            React.createElement('div', {
              style: {
                textAlign: 'center',
                margin: '2rem 0',
                color: 'var(--text-secondary)',
                fontWeight: '300',
                fontSize: '1.2rem'
              }
            }, '⸻'),

            // 10. Indemnification
            React.createElement('section', { className: 'mb-xl' },
              React.createElement('h2', { 
                className: 'mb-md',
                style: { fontFamily: 'var(--font-serif)' }
              }, '10. Indemnification'),
              React.createElement('p', null,
                'You agree to indemnify and hold harmless BetterCanvas from any claim or demand arising out of (i) your use of the Service, (ii) your violation of these Terms, or (iii) your violation of any law or third-party right.'
              )
            ),

            // Section divider
            React.createElement('div', {
              style: {
                textAlign: 'center',
                margin: '2rem 0',
                color: 'var(--text-secondary)',
                fontWeight: '300',
                fontSize: '1.2rem'
              }
            }, '⸻'),

            // 11. Modifications
            React.createElement('section', { className: 'mb-xl' },
              React.createElement('h2', { 
                className: 'mb-md',
                style: { fontFamily: 'var(--font-serif)' }
              }, '11. Modifications'),
              React.createElement('p', null,
                'We may update these Terms from time to time. Material changes will be posted on our website or within the extension. Continued use after changes become effective constitutes acceptance of the revised Terms.'
              )
            ),

            // Section divider
            React.createElement('div', {
              style: {
                textAlign: 'center',
                margin: '2rem 0',
                color: 'var(--text-secondary)',
                fontWeight: '300',
                fontSize: '1.2rem'
              }
            }, '⸻'),

            // 12. Termination
            React.createElement('section', { className: 'mb-xl' },
              React.createElement('h2', { 
                className: 'mb-md',
                style: { fontFamily: 'var(--font-serif)' }
              }, '12. Termination'),
              React.createElement('p', null,
                'We may suspend or terminate your access to the Service at any time for violation of these Terms. Upon termination, all licenses granted to you will cease.'
              )
            ),

            // Section divider
            React.createElement('div', {
              style: {
                textAlign: 'center',
                margin: '2rem 0',
                color: 'var(--text-secondary)',
                fontWeight: '300',
                fontSize: '1.2rem'
              }
            }, '⸻'),

            // 13. Governing Law
            React.createElement('section', { className: 'mb-xl' },
              React.createElement('h2', { 
                className: 'mb-md',
                style: { fontFamily: 'var(--font-serif)' }
              }, '13. Governing Law'),
              React.createElement('p', null,
                'These Terms are governed by and construed in accordance with the laws of the State of California, U.S.A., without regard to its conflict-of-law principles. You consent to exclusive jurisdiction and venue in the federal or state courts located in San Francisco County.'
              )
            ),

            // Section divider
            React.createElement('div', {
              style: {
                textAlign: 'center',
                margin: '2rem 0',
                color: 'var(--text-secondary)',
                fontWeight: '300',
                fontSize: '1.2rem'
              }
            }, '⸻'),

            // 14. Severability
            React.createElement('section', { className: 'mb-xl' },
              React.createElement('h2', { 
                className: 'mb-md',
                style: { fontFamily: 'var(--font-serif)' }
              }, '14. Severability'),
              React.createElement('p', null,
                'If any provision of these Terms is held invalid, that provision will be enforced to the maximum extent permissible, and the remaining provisions will remain in full force.'
              )
            ),

            // Section divider
            React.createElement('div', {
              style: {
                textAlign: 'center',
                margin: '2rem 0',
                color: 'var(--text-secondary)',
                fontWeight: '300',
                fontSize: '1.2rem'
              }
            }, '⸻'),

            // 15. Contact
            React.createElement('section', null,
              React.createElement('h2', { 
                className: 'mb-md',
                style: { fontFamily: 'var(--font-serif)' }
              }, '15. Contact'),
              React.createElement('p', { className: 'mb-sm' },
                'Questions about these Terms? Contact us:'
              ),
              React.createElement('ul', { 
                style: { paddingLeft: '2rem' }
              },
                React.createElement('li', null, 'Email: support@bettercanvas.org'),
                React.createElement('li', null, 'Website: https://bettercanvas.org')
              )
            )
          )
        )
      )
    )
  )
}

export default TermsOfService 