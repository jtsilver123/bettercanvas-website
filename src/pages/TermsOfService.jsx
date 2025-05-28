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
          className: 'text-center mb-2xl',
          style: { fontFamily: 'var(--font-serif)' }
        }, 'Terms of Service'),
        
        React.createElement('div', { className: 'card' },
          React.createElement('p', { 
            className: 'text-small mb-xl',
            style: { color: 'var(--text-secondary)' }
          }, 'Last updated: January 1, 2025'),
          
          React.createElement('div', { style: { lineHeight: '1.7' } },
            
            // Introduction
            React.createElement('section', { className: 'mb-xl' },
              React.createElement('h2', { 
                className: 'mb-md',
                style: { fontFamily: 'var(--font-serif)' }
              }, 'Acceptance of Terms'),
              React.createElement('p', { className: 'mb-md' }, 
                'Welcome to BetterCanvas. These Terms of Service ("Terms") govern your use of the BetterCanvas browser extension and website ("Service") operated by the BetterCanvas team ("us", "we", or "our").'
              ),
              React.createElement('p', null,
                'By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of these terms, then you may not access the Service.'
              )
            ),

            // Description of Service
            React.createElement('section', { className: 'mb-xl' },
              React.createElement('h2', { 
                className: 'mb-md',
                style: { fontFamily: 'var(--font-serif)' }
              }, 'Description of Service'),
              React.createElement('p', { className: 'mb-md' },
                'BetterCanvas is a browser extension that enhances the Canvas Learning Management System (LMS) interface with features including:'
              ),
              React.createElement('ul', { 
                className: 'mb-md',
                style: { paddingLeft: '2rem' }
              },
                React.createElement('li', null, 'Dark mode and custom themes'),
                React.createElement('li', null, 'Card customization and layout improvements'),
                React.createElement('li', null, 'Enhanced todo lists and assignment tracking'),
                React.createElement('li', null, 'GPA calculator and grade management'),
                React.createElement('li', null, 'Various productivity and accessibility features')
              ),
              React.createElement('p', null,
                'Our Service is provided free of charge and is intended to improve the user experience of Canvas LMS.'
              )
            ),

            // User Accounts and Eligibility
            React.createElement('section', { className: 'mb-xl' },
              React.createElement('h2', { 
                className: 'mb-md',
                style: { fontFamily: 'var(--font-serif)' }
              }, 'User Eligibility'),
              React.createElement('p', { className: 'mb-md' },
                'To use BetterCanvas, you must:'
              ),
              React.createElement('ul', { 
                className: 'mb-md',
                style: { paddingLeft: '2rem' }
              },
                React.createElement('li', null, 'Be at least 13 years of age'),
                React.createElement('li', null, 'Have legitimate access to a Canvas LMS instance'),
                React.createElement('li', null, 'Comply with your educational institution\'s technology policies'),
                React.createElement('li', null, 'Use the Service in accordance with these Terms')
              ),
              React.createElement('p', null,
                'You are responsible for ensuring that your use of BetterCanvas complies with your institution\'s policies and any applicable laws.'
              )
            ),

            // Acceptable Use
            React.createElement('section', { className: 'mb-xl' },
              React.createElement('h2', { 
                className: 'mb-md',
                style: { fontFamily: 'var(--font-serif)' }
              }, 'Acceptable Use Policy'),
              React.createElement('p', { className: 'mb-md' },
                'You agree to use BetterCanvas only for lawful purposes and in a way that does not infringe the rights of others. You agree NOT to:'
              ),
              React.createElement('ul', { 
                className: 'mb-md',
                style: { paddingLeft: '2rem' }
              },
                React.createElement('li', null, 'Use the Service to cheat, plagiarize, or engage in academic dishonesty'),
                React.createElement('li', null, 'Attempt to circumvent Canvas security measures or access restrictions'),
                React.createElement('li', null, 'Share login credentials or access others\' Canvas accounts'),
                React.createElement('li', null, 'Use the Service to harass, abuse, or harm others'),
                React.createElement('li', null, 'Reverse engineer, modify, or distribute the extension code without permission'),
                React.createElement('li', null, 'Use the Service for any commercial purposes without authorization')
              ),
              React.createElement('p', null,
                'Violation of this policy may result in immediate termination of your access to the Service.'
              )
            ),

            // Academic Integrity
            React.createElement('section', { className: 'mb-xl' },
              React.createElement('h2', { 
                className: 'mb-md',
                style: { fontFamily: 'var(--font-serif)' }
              }, 'Academic Integrity'),
              React.createElement('p', { className: 'mb-md' },
                'BetterCanvas is designed to enhance your learning experience, not to facilitate academic dishonesty. You acknowledge that:'
              ),
              React.createElement('ul', { 
                className: 'mb-md',
                style: { paddingLeft: '2rem' }
              },
                React.createElement('li', null, 'You remain responsible for all academic work submitted through Canvas'),
                React.createElement('li', null, 'Features like GPA calculators are for informational purposes only'),
                React.createElement('li', null, 'You must comply with your institution\'s academic integrity policies'),
                React.createElement('li', null, 'BetterCanvas does not guarantee grade accuracy or academic outcomes')
              ),
              React.createElement('p', null,
                'We strongly encourage you to use BetterCanvas in a way that supports honest academic work and learning.'
              )
            ),

            // Intellectual Property
            React.createElement('section', { className: 'mb-xl' },
              React.createElement('h2', { 
                className: 'mb-md',
                style: { fontFamily: 'var(--font-serif)' }
              }, 'Intellectual Property Rights'),
              React.createElement('p', { className: 'mb-md' },
                'BetterCanvas is an open-source project. The Service and its original content, features, and functionality are owned by the BetterCanvas team and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.'
              ),
              React.createElement('p', { className: 'mb-md' },
                'Our source code is available under the MIT License on GitHub. You may fork, modify, and distribute the code according to the terms of that license.'
              ),
              React.createElement('p', null,
                'You retain all rights to any content you create or submit while using Canvas. BetterCanvas does not claim ownership of your academic work or Canvas data.'
              )
            ),

            // Privacy and Data
            React.createElement('section', { className: 'mb-xl' },
              React.createElement('h2', { 
                className: 'mb-md',
                style: { fontFamily: 'var(--font-serif)' }
              }, 'Privacy and Data Handling'),
              React.createElement('p', { className: 'mb-md' },
                'Your privacy is important to us. Our collection and use of your information is governed by our Privacy Policy. By using BetterCanvas, you consent to the collection and use of information as outlined in our Privacy Policy.'
              ),
              React.createElement('p', null,
                'Key points about data handling:'
              ),
              React.createElement('ul', { 
                style: { paddingLeft: '2rem' }
              },
                React.createElement('li', null, 'We do not access or store your Canvas login credentials'),
                React.createElement('li', null, 'Most settings and preferences are stored locally on your device'),
                React.createElement('li', null, 'We may collect anonymized usage statistics to improve the extension'),
                React.createElement('li', null, 'We do not sell or share your personal information with third parties')
              )
            ),

            // Service Availability
            React.createElement('section', { className: 'mb-xl' },
              React.createElement('h2', { 
                className: 'mb-md',
                style: { fontFamily: 'var(--font-serif)' }
              }, 'Service Availability and Modifications'),
              React.createElement('p', { className: 'mb-md' },
                'We strive to keep BetterCanvas available and functional, but we cannot guarantee uninterrupted service. The Service may be temporarily unavailable due to:'
              ),
              React.createElement('ul', { 
                className: 'mb-md',
                style: { paddingLeft: '2rem' }
              },
                React.createElement('li', null, 'Maintenance and updates'),
                React.createElement('li', null, 'Changes to Canvas LMS that affect compatibility'),
                React.createElement('li', null, 'Browser updates or policy changes'),
                React.createElement('li', null, 'Technical issues beyond our control')
              ),
              React.createElement('p', null,
                'We reserve the right to modify, suspend, or discontinue the Service at any time without prior notice.'
              )
            ),

            // Disclaimers and Limitations
            React.createElement('section', { className: 'mb-xl' },
              React.createElement('h2', { 
                className: 'mb-md',
                style: { fontFamily: 'var(--font-serif)' }
              }, 'Disclaimers and Limitations of Liability'),
              React.createElement('p', { className: 'mb-md' },
                'BetterCanvas is provided "as is" without warranties of any kind. We disclaim all warranties, express or implied, including but not limited to:'
              ),
              React.createElement('ul', { 
                className: 'mb-md',
                style: { paddingLeft: '2rem' }
              },
                React.createElement('li', null, 'Merchantability and fitness for a particular purpose'),
                React.createElement('li', null, 'Accuracy of GPA calculations or grade predictions'),
                React.createElement('li', null, 'Compatibility with all Canvas instances or browsers'),
                React.createElement('li', null, 'Uninterrupted or error-free operation')
              ),
              React.createElement('p', null,
                'In no event shall the BetterCanvas team be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Service.'
              )
            ),

            // Indemnification
            React.createElement('section', { className: 'mb-xl' },
              React.createElement('h2', { 
                className: 'mb-md',
                style: { fontFamily: 'var(--font-serif)' }
              }, 'Indemnification'),
              React.createElement('p', null,
                'You agree to defend, indemnify, and hold harmless the BetterCanvas team from and against any claims, damages, costs, and expenses (including attorneys\' fees) arising from or related to your use of the Service or violation of these Terms.'
              )
            ),

            // Third-Party Services
            React.createElement('section', { className: 'mb-xl' },
              React.createElement('h2', { 
                className: 'mb-md',
                style: { fontFamily: 'var(--font-serif)' }
              }, 'Third-Party Services and Canvas LMS'),
              React.createElement('p', { className: 'mb-md' },
                'BetterCanvas is an unofficial extension that enhances Canvas LMS. We are not affiliated with Instructure Inc. or Canvas LMS. Your use of Canvas itself is governed by:'
              ),
              React.createElement('ul', { 
                className: 'mb-md',
                style: { paddingLeft: '2rem' }
              },
                React.createElement('li', null, 'Your educational institution\'s policies'),
                React.createElement('li', null, 'Canvas\' own terms of service'),
                React.createElement('li', null, 'Applicable privacy and data protection laws')
              ),
              React.createElement('p', null,
                'We are not responsible for any issues, data loss, or policy violations that may occur through your use of Canvas LMS itself.'
              )
            ),

            // Termination
            React.createElement('section', { className: 'mb-xl' },
              React.createElement('h2', { 
                className: 'mb-md',
                style: { fontFamily: 'var(--font-serif)' }
              }, 'Termination'),
              React.createElement('p', { className: 'mb-md' },
                'You may stop using BetterCanvas at any time by uninstalling the extension. We may terminate or suspend your access to the Service immediately, without prior notice, for any breach of these Terms.'
              ),
              React.createElement('p', null,
                'Upon termination, your right to use the Service will cease immediately, but these Terms will remain in effect regarding your prior use.'
              )
            ),

            // Governing Law
            React.createElement('section', { className: 'mb-xl' },
              React.createElement('h2', { 
                className: 'mb-md',
                style: { fontFamily: 'var(--font-serif)' }
              }, 'Governing Law'),
              React.createElement('p', null,
                'These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions. Any disputes arising from these Terms or your use of the Service will be resolved through binding arbitration.'
              )
            ),

            // Changes to Terms
            React.createElement('section', { className: 'mb-xl' },
              React.createElement('h2', { 
                className: 'mb-md',
                style: { fontFamily: 'var(--font-serif)' }
              }, 'Changes to Terms'),
              React.createElement('p', null,
                'We reserve the right to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect. Continued use of the Service after changes constitutes acceptance of the new Terms.'
              )
            ),

            // Contact Information
            React.createElement('section', null,
              React.createElement('h2', { 
                className: 'mb-md',
                style: { fontFamily: 'var(--font-serif)' }
              }, 'Contact Information'),
              React.createElement('p', { className: 'mb-md' },
                'If you have any questions about these Terms of Service, please contact us:'
              ),
              React.createElement('ul', { 
                style: { paddingLeft: '2rem', listStyle: 'none' }
              },
                React.createElement('li', null, 'Email: support@bettercanvas.org'),
                React.createElement('li', null, 'GitHub: https://github.com/UseBetterCanvas/bettercanvas'),
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