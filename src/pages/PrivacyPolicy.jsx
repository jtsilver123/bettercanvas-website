import React from 'react'

const PrivacyPolicy = () => {
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
        }, 'Privacy Policy'),
        
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
              }, 'Introduction'),
              React.createElement('p', { className: 'mb-md' }, 
                'Better Canvas ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website bettercanvas.org and use our browser extension.'
              ),
              React.createElement('p', null,
                'Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the site or use our services.'
              )
            ),

            // Information We Collect
            React.createElement('section', { className: 'mb-xl' },
              React.createElement('h2', { 
                className: 'mb-md',
                style: { fontFamily: 'var(--font-serif)' }
              }, 'Information We Collect'),
              
              React.createElement('h3', { 
                className: 'mb-sm',
                style: { fontSize: '1.25rem', fontFamily: 'var(--font-serif)' }
              }, '1. Extension Usage Data'),
              React.createElement('p', { className: 'mb-md' },
                'Our browser extension may collect limited, anonymized usage data to improve functionality and user experience. This includes:'
              ),
              React.createElement('ul', { 
                className: 'mb-md',
                style: { paddingLeft: '2rem' }
              },
                React.createElement('li', null, 'Feature usage statistics (which features are used most)'),
                React.createElement('li', null, 'Error reports and crash logs (to fix bugs)'),
                React.createElement('li', null, 'Performance metrics (to optimize speed)')
              ),
              
              React.createElement('h3', { 
                className: 'mb-sm',
                style: { fontSize: '1.25rem', fontFamily: 'var(--font-serif)' }
              }, '2. Website Analytics'),
              React.createElement('p', { className: 'mb-md' },
                'We use standard web analytics tools to understand how visitors interact with our website:'
              ),
              React.createElement('ul', { 
                className: 'mb-md',
                style: { paddingLeft: '2rem' }
              },
                React.createElement('li', null, 'Page views and session duration'),
                React.createElement('li', null, 'Browser type and version'),
                React.createElement('li', null, 'Operating system information'),
                React.createElement('li', null, 'Referring websites')
              ),
              
              React.createElement('h3', { 
                className: 'mb-sm',
                style: { fontSize: '1.25rem', fontFamily: 'var(--font-serif)' }
              }, '3. Contact Information'),
              React.createElement('p', null,
                'When you contact us via email or support channels, we collect the information you provide, including your email address and message content.'
              )
            ),

            // Information We Do NOT Collect
            React.createElement('section', { className: 'mb-xl' },
              React.createElement('h2', { 
                className: 'mb-md',
                style: { fontFamily: 'var(--font-serif)' }
              }, 'Information We Do NOT Collect'),
              React.createElement('p', { className: 'mb-md' },
                'We want to be clear about what we do NOT collect:'
              ),
              React.createElement('ul', { 
                style: { paddingLeft: '2rem' }
              },
                React.createElement('li', null, 'Personal Canvas data (grades, assignments, courses)'),
                React.createElement('li', null, 'Login credentials or passwords'),
                React.createElement('li', null, 'Student identification information'),
                React.createElement('li', null, 'Canvas content or communications'),
                React.createElement('li', null, 'Browsing history outside of Canvas')
              )
            ),

            // How We Use Information
            React.createElement('section', { className: 'mb-xl' },
              React.createElement('h2', { 
                className: 'mb-md',
                style: { fontFamily: 'var(--font-serif)' }
              }, 'How We Use Your Information'),
              React.createElement('p', { className: 'mb-md' },
                'We use the information we collect for the following purposes:'
              ),
              React.createElement('ul', { 
                style: { paddingLeft: '2rem' }
              },
                React.createElement('li', null, 'To provide, maintain, and improve our extension'),
                React.createElement('li', null, 'To fix bugs and technical issues'),
                React.createElement('li', null, 'To understand user preferences and usage patterns'),
                React.createElement('li', null, 'To respond to support requests'),
                React.createElement('li', null, 'To communicate important updates about the extension')
              )
            ),

            // Data Storage and Security
            React.createElement('section', { className: 'mb-xl' },
              React.createElement('h2', { 
                className: 'mb-md',
                style: { fontFamily: 'var(--font-serif)' }
              }, 'Data Storage and Security'),
              React.createElement('p', { className: 'mb-md' },
                'Your privacy and data security are important to us:'
              ),
              React.createElement('ul', { 
                className: 'mb-md',
                style: { paddingLeft: '2rem' }
              },
                React.createElement('li', null, 'All data is stored securely using industry-standard encryption'),
                React.createElement('li', null, 'Most extension settings are stored locally on your device'),
                React.createElement('li', null, 'We use secure servers and follow best practices for data protection'),
                React.createElement('li', null, 'Data is retained only as long as necessary for the purposes outlined')
              ),
              React.createElement('p', null,
                'While we strive to protect your information, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security but employ reasonable safeguards.'
              )
            ),

            // Third-Party Services
            React.createElement('section', { className: 'mb-xl' },
              React.createElement('h2', { 
                className: 'mb-md',
                style: { fontFamily: 'var(--font-serif)' }
              }, 'Third-Party Services'),
              React.createElement('p', { className: 'mb-md' },
                'Our website and extension may use third-party services:'
              ),
              React.createElement('ul', { 
                className: 'mb-md',
                style: { paddingLeft: '2rem' }
              },
                React.createElement('li', null, 'Google Analytics (for website analytics)'),
                React.createElement('li', null, 'Chrome Web Store and Firefox Add-ons (for distribution)'),
                React.createElement('li', null, 'GitHub (for open-source development)')
              ),
              React.createElement('p', null,
                'These services have their own privacy policies. We encourage you to review them.'
              )
            ),

            // Your Rights
            React.createElement('section', { className: 'mb-xl' },
              React.createElement('h2', { 
                className: 'mb-md',
                style: { fontFamily: 'var(--font-serif)' }
              }, 'Your Rights and Choices'),
              React.createElement('p', { className: 'mb-md' },
                'You have several rights regarding your data:'
              ),
              React.createElement('ul', { 
                style: { paddingLeft: '2rem' }
              },
                React.createElement('li', null, 'You can disable analytics collection in the extension settings'),
                React.createElement('li', null, 'You can uninstall the extension at any time'),
                React.createElement('li', null, 'You can request information about data we have collected'),
                React.createElement('li', null, 'You can request deletion of your data'),
                React.createElement('li', null, 'You can opt out of communications (except critical security updates)')
              )
            ),

            // Children's Privacy
            React.createElement('section', { className: 'mb-xl' },
              React.createElement('h2', { 
                className: 'mb-md',
                style: { fontFamily: 'var(--font-serif)' }
              }, 'Children\'s Privacy'),
              React.createElement('p', null,
                'Our services are not directed to children under 13. We do not knowingly collect personal information from children under 13. If we learn that we have collected information from a child under 13, we will delete it promptly. If you believe a child has provided us with personal information, please contact us.'
              )
            ),

            // International Users
            React.createElement('section', { className: 'mb-xl' },
              React.createElement('h2', { 
                className: 'mb-md',
                style: { fontFamily: 'var(--font-serif)' }
              }, 'International Users'),
              React.createElement('p', null,
                'If you are accessing our services from outside the United States, please be aware that your information may be transferred to, stored, and processed in the United States. By using our services, you consent to this transfer.'
              )
            ),

            // Changes to Privacy Policy
            React.createElement('section', { className: 'mb-xl' },
              React.createElement('h2', { 
                className: 'mb-md',
                style: { fontFamily: 'var(--font-serif)' }
              }, 'Changes to This Privacy Policy'),
              React.createElement('p', null,
                'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.'
              )
            ),

            // Contact Information
            React.createElement('section', null,
              React.createElement('h2', { 
                className: 'mb-md',
                style: { fontFamily: 'var(--font-serif)' }
              }, 'Contact Us'),
              React.createElement('p', { className: 'mb-md' },
                'If you have any questions about this Privacy Policy or our data practices, please contact us:'
              ),
              React.createElement('ul', { 
                style: { paddingLeft: '2rem', listStyle: 'none' }
              },
                React.createElement('li', null, 'Email: support@bettercanvas.org'),
                React.createElement('li', null, 'GitHub: https://github.com/ksucpea/bettercanvas'),
                React.createElement('li', null, 'Website: https://bettercanvas.org')
              )
            )
          )
        )
      )
    )
  )
}

export default PrivacyPolicy 