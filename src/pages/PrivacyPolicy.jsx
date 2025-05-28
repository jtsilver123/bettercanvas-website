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
          className: 'text-center mb-lg',
          style: { fontFamily: 'var(--font-serif)' }
        }, 'BetterCanvas — Privacy Policy'),
        
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

            // 1. Who We Are
            React.createElement('section', { className: 'mb-xl' },
              React.createElement('h2', { 
                className: 'mb-md',
                style: { fontFamily: 'var(--font-serif)' }
              }, '1. Who We Are'),
              React.createElement('p', { className: 'mb-md' },
                'BetterCanvas ("BetterCanvas," "we," "our," or "us") develops a Chrome/Firefox extension and related web services that enhance the Canvas LMS experience for students. This Privacy Policy explains how we collect, use, store, and disclose information when you:'
              ),
              React.createElement('ul', { 
                className: 'mb-md',
                style: { paddingLeft: '2rem' }
              },
                React.createElement('li', null, 'visit bettercanvas.org,'),
                React.createElement('li', null, 'install or use the BetterCanvas browser extension, and/or'),
                React.createElement('li', null, 'opt in to SMS reminders powered by Twilio A2P 10DLC.')
              ),
              React.createElement('p', null,
                'If you do not agree with the practices described below, please do not use our services.'
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

            // 2. Information We Collect
            React.createElement('section', { className: 'mb-xl' },
              React.createElement('h2', { 
                className: 'mb-md',
                style: { fontFamily: 'var(--font-serif)' }
              }, '2. Information We Collect'),
              
              // Table
              React.createElement('div', {
                style: {
                  overflow: 'auto',
                  marginBottom: '1.5rem'
                }
              },
                React.createElement('table', {
                  style: {
                    width: '100%',
                    borderCollapse: 'collapse',
                    fontSize: '0.875rem'
                  }
                },
                  React.createElement('thead', null,
                    React.createElement('tr', {
                      style: { background: 'var(--surface)' }
                    },
                      React.createElement('th', {
                        style: {
                          padding: '0.75rem',
                          textAlign: 'left',
                          borderBottom: '1px solid var(--border-light)',
                          fontWeight: '600'
                        }
                      }, 'Category'),
                      React.createElement('th', {
                        style: {
                          padding: '0.75rem',
                          textAlign: 'left',
                          borderBottom: '1px solid var(--border-light)',
                          fontWeight: '600'
                        }
                      }, 'What We Collect'),
                      React.createElement('th', {
                        style: {
                          padding: '0.75rem',
                          textAlign: 'left',
                          borderBottom: '1px solid var(--border-light)',
                          fontWeight: '600'
                        }
                      }, 'Why We Collect It')
                    )
                  ),
                  React.createElement('tbody', null,
                    React.createElement('tr', null,
                      React.createElement('td', {
                        style: {
                          padding: '0.75rem',
                          borderBottom: '1px solid var(--border-light)',
                          fontWeight: '500'
                        }
                      }, 'Extension Usage Data'),
                      React.createElement('td', {
                        style: {
                          padding: '0.75rem',
                          borderBottom: '1px solid var(--border-light)'
                        }
                      }, 'Anonymous feature-usage counts, error logs, performance metrics (no Canvas content).'),
                      React.createElement('td', {
                        style: {
                          padding: '0.75rem',
                          borderBottom: '1px solid var(--border-light)'
                        }
                      }, 'Diagnose bugs, improve performance, prioritize new features.')
                    ),
                    React.createElement('tr', null,
                      React.createElement('td', {
                        style: {
                          padding: '0.75rem',
                          borderBottom: '1px solid var(--border-light)',
                          fontWeight: '500'
                        }
                      }, 'Website Analytics'),
                      React.createElement('td', {
                        style: {
                          padding: '0.75rem',
                          borderBottom: '1px solid var(--border-light)'
                        }
                      }, 'Page views, session duration, browser/OS, referral URL (via Google Analytics).'),
                      React.createElement('td', {
                        style: {
                          padding: '0.75rem',
                          borderBottom: '1px solid var(--border-light)'
                        }
                      }, 'Understand and improve website experience.')
                    ),
                    React.createElement('tr', null,
                      React.createElement('td', {
                        style: {
                          padding: '0.75rem',
                          borderBottom: '1px solid var(--border-light)',
                          fontWeight: '500'
                        }
                      }, 'Contact Details'),
                      React.createElement('td', {
                        style: {
                          padding: '0.75rem',
                          borderBottom: '1px solid var(--border-light)'
                        }
                      }, 'Email address and message content when you reach out for support.'),
                      React.createElement('td', {
                        style: {
                          padding: '0.75rem',
                          borderBottom: '1px solid var(--border-light)'
                        }
                      }, 'Respond to inquiries and provide customer support.')
                    ),
                    React.createElement('tr', null,
                      React.createElement('td', {
                        style: {
                          padding: '0.75rem',
                          fontWeight: '500'
                        }
                      }, 'SMS Opt-in Data'),
                      React.createElement('td', {
                        style: {
                          padding: '0.75rem'
                        }
                      }, 'Mobile phone number, timestamp of consent, notification preferences (e.g., which courses, reminder timing)'),
                      React.createElement('td', {
                        style: {
                          padding: '0.75rem'
                        }
                      }, 'Deliver due-date reminder messages the user explicitly requested.')
                    )
                  )
                )
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

            // 3. Information We Do Not Collect
            React.createElement('section', { className: 'mb-xl' },
              React.createElement('h2', { 
                className: 'mb-md',
                style: { fontFamily: 'var(--font-serif)' }
              }, '3. Information We Do Not Collect'),
              React.createElement('ul', { 
                style: { paddingLeft: '2rem' }
              },
                React.createElement('li', null, 'Canvas credentials, grades, assignments, or course content'),
                React.createElement('li', null, 'Browsing history outside of Canvas'),
                React.createElement('li', null, 'Any personal data from individuals who have not provided explicit consent')
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

            // 4. How We Use Information
            React.createElement('section', { className: 'mb-xl' },
              React.createElement('h2', { 
                className: 'mb-md',
                style: { fontFamily: 'var(--font-serif)' }
              }, '4. How We Use Information'),
              React.createElement('ol', { 
                className: 'mb-md',
                style: { paddingLeft: '2rem' }
              },
                React.createElement('li', null, 'Provide & Improve Services – enable extension features, fix bugs, optimize performance.'),
                React.createElement('li', null, 'Transactional Communications – send account-verification emails, password-reset links, and opted-in SMS reminders.'),
                React.createElement('li', null, 'Customer Support – respond to questions and troubleshoot issues.'),
                React.createElement('li', null, 'Security & Compliance – detect abuse, enforce Terms of Service, and comply with legal obligations.')
              ),
              React.createElement('p', null,
                'We do not use collected data for third-party advertising or sell/rent user information.'
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

            // 5. SMS Reminders
            React.createElement('section', { className: 'mb-xl' },
              React.createElement('h2', { 
                className: 'mb-md',
                style: { fontFamily: 'var(--font-serif)' }
              }, '5. SMS Reminders (Twilio A2P 10DLC)'),
              React.createElement('ul', { 
                style: { paddingLeft: '2rem' }
              },
                React.createElement('li', null, 'SMS reminders are opt-in only. Users must (i) enter their phone number and (ii) check an explicit consent box in the extension before messages are enabled.'),
                React.createElement('li', null, 'First SMS: "You\'ve signed up for assignment reminders from BetterCanvas. Reply HELP for help, STOP to unsubscribe."'),
                React.createElement('li', null, 'Opt-out at any time by replying STOP or toggling SMS OFF in extension Settings.'),
                React.createElement('li', null, 'Phone numbers and SMS preference data are stored securely, encrypted at rest, and used solely to deliver the reminders you requested.'),
                React.createElement('li', null, 'We do not share or sell phone numbers to third parties and do not send marketing/promotional SMS.')
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

            // 6. Data Storage & Security
            React.createElement('section', { className: 'mb-xl' },
              React.createElement('h2', { 
                className: 'mb-md',
                style: { fontFamily: 'var(--font-serif)' }
              }, '6. Data Storage & Security'),
              React.createElement('ul', { 
                className: 'mb-md',
                style: { paddingLeft: '2rem' }
              },
                React.createElement('li', null, 'All data in transit is encrypted via TLS; sensitive data at rest is encrypted (AES-256).'),
                React.createElement('li', null, 'Extension settings are stored locally unless cloud sync is enabled.'),
                React.createElement('li', null, 'Access to production systems is limited to authorized personnel under least-privilege IAM.'),
                React.createElement('li', null, 'We retain data only as long as necessary to fulfill the purposes outlined in this Policy or to comply with legal requirements.')
              ),
              React.createElement('p', null,
                'No internet transmission is 100% secure; however, we use commercially reasonable safeguards to protect your information.'
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
              
              // Services Table
              React.createElement('div', {
                style: {
                  overflow: 'auto',
                  marginBottom: '1.5rem'
                }
              },
                React.createElement('table', {
                  style: {
                    width: '100%',
                    borderCollapse: 'collapse',
                    fontSize: '0.875rem'
                  }
                },
                  React.createElement('thead', null,
                    React.createElement('tr', {
                      style: { background: 'var(--surface)' }
                    },
                      React.createElement('th', {
                        style: {
                          padding: '0.75rem',
                          textAlign: 'left',
                          borderBottom: '1px solid var(--border-light)',
                          fontWeight: '600'
                        }
                      }, 'Service'),
                      React.createElement('th', {
                        style: {
                          padding: '0.75rem',
                          textAlign: 'left',
                          borderBottom: '1px solid var(--border-light)',
                          fontWeight: '600'
                        }
                      }, 'Purpose'),
                      React.createElement('th', {
                        style: {
                          padding: '0.75rem',
                          textAlign: 'left',
                          borderBottom: '1px solid var(--border-light)',
                          fontWeight: '600'
                        }
                      }, 'Policy')
                    )
                  ),
                  React.createElement('tbody', null,
                    React.createElement('tr', null,
                      React.createElement('td', {
                        style: {
                          padding: '0.75rem',
                          borderBottom: '1px solid var(--border-light)',
                          fontWeight: '500'
                        }
                      }, 'Google Analytics'),
                      React.createElement('td', {
                        style: {
                          padding: '0.75rem',
                          borderBottom: '1px solid var(--border-light)'
                        }
                      }, 'Website usage analytics'),
                      React.createElement('td', {
                        style: {
                          padding: '0.75rem',
                          borderBottom: '1px solid var(--border-light)'
                        }
                      }, React.createElement('a', {
                        href: 'https://policies.google.com/privacy',
                        target: '_blank',
                        rel: 'noopener noreferrer',
                        style: { color: 'var(--primary)', textDecoration: 'none' }
                      }, 'Google Privacy Policy'))
                    ),
                    React.createElement('tr', null,
                      React.createElement('td', {
                        style: {
                          padding: '0.75rem',
                          borderBottom: '1px solid var(--border-light)',
                          fontWeight: '500'
                        }
                      }, 'Twilio'),
                      React.createElement('td', {
                        style: {
                          padding: '0.75rem',
                          borderBottom: '1px solid var(--border-light)'
                        }
                      }, 'SMS delivery (A2P 10DLC)'),
                      React.createElement('td', {
                        style: {
                          padding: '0.75rem',
                          borderBottom: '1px solid var(--border-light)'
                        }
                      }, React.createElement('a', {
                        href: 'https://www.twilio.com/legal/privacy',
                        target: '_blank',
                        rel: 'noopener noreferrer',
                        style: { color: 'var(--primary)', textDecoration: 'none' }
                      }, 'Twilio Privacy Policy'))
                    ),
                    React.createElement('tr', null,
                      React.createElement('td', {
                        style: {
                          padding: '0.75rem',
                          borderBottom: '1px solid var(--border-light)',
                          fontWeight: '500'
                        }
                      }, 'Chrome Web Store / Firefox Add-ons'),
                      React.createElement('td', {
                        style: {
                          padding: '0.75rem',
                          borderBottom: '1px solid var(--border-light)'
                        }
                      }, 'Extension distribution'),
                      React.createElement('td', {
                        style: {
                          padding: '0.75rem',
                          borderBottom: '1px solid var(--border-light)'
                        }
                      }, 'Google / Mozilla policies apply')
                    ),
                    React.createElement('tr', null,
                      React.createElement('td', {
                        style: {
                          padding: '0.75rem',
                          fontWeight: '500'
                        }
                      }, 'GitHub'),
                      React.createElement('td', {
                        style: {
                          padding: '0.75rem'
                        }
                      }, 'Open-source issue tracking'),
                      React.createElement('td', {
                        style: {
                          padding: '0.75rem'
                        }
                      }, React.createElement('a', {
                        href: 'https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement',
                        target: '_blank',
                        rel: 'noopener noreferrer',
                        style: { color: 'var(--primary)', textDecoration: 'none' }
                      }, 'GitHub Privacy Statement'))
                    )
                  )
                )
              ),
              React.createElement('p', null,
                'These providers process data only as our sub-processors and are contractually bound to protect it.'
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

            // 8. Your Choices & Rights
            React.createElement('section', { className: 'mb-xl' },
              React.createElement('h2', { 
                className: 'mb-md',
                style: { fontFamily: 'var(--font-serif)' }
              }, '8. Your Choices & Rights'),
              React.createElement('ul', { 
                style: { paddingLeft: '2rem' }
              },
                React.createElement('li', null, 'Disable Analytics – toggle off in extension Settings.'),
                React.createElement('li', null, 'Uninstall Extension – remove BetterCanvas at any time.'),
                React.createElement('li', null, 'Opt Out of SMS – reply STOP or disable in Settings.'),
                React.createElement('li', null, 'Data Requests – email privacy@bettercanvas.org to access, correct, or delete your data.'),
                React.createElement('li', null, 'Essential Notices – we may still send critical security or legal notices.')
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

            // 9. Children's Privacy
            React.createElement('section', { className: 'mb-xl' },
              React.createElement('h2', { 
                className: 'mb-md',
                style: { fontFamily: 'var(--font-serif)' }
              }, '9. Children\'s Privacy'),
              React.createElement('p', null,
                'BetterCanvas is not directed to children under 13 and does not knowingly collect their personal information. If we learn we have, we will delete it promptly.'
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

            // 10. International Users
            React.createElement('section', { className: 'mb-xl' },
              React.createElement('h2', { 
                className: 'mb-md',
                style: { fontFamily: 'var(--font-serif)' }
              }, '10. International Users'),
              React.createElement('p', null,
                'We are based in the United States; your information may be processed and stored there. By using our services, you consent to this transfer.'
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

            // 11. Changes to This Policy
            React.createElement('section', { className: 'mb-xl' },
              React.createElement('h2', { 
                className: 'mb-md',
                style: { fontFamily: 'var(--font-serif)' }
              }, '11. Changes to This Policy'),
              React.createElement('p', null,
                'We may update this Privacy Policy periodically. Changes are effective when posted with a new "Last updated" date. We will notify users of material changes via the extension or email.'
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

            // 12. Contact Us
            React.createElement('section', { className: 'mb-xl' },
              React.createElement('h2', { 
                className: 'mb-md',
                style: { fontFamily: 'var(--font-serif)' }
              }, '12. Contact Us'),
              React.createElement('div', { className: 'mb-md' },
                React.createElement('strong', null, 'BetterCanvas Privacy Team'),
                React.createElement('br'),
                'Email: privacy@bettercanvas.org',
                React.createElement('br'),
                'Website: https://bettercanvas.org'
              ),
              React.createElement('p', null,
                'If you have questions or concerns about this Policy or our data practices, please contact us—responses typically within two business days.'
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

            // Copyright
            React.createElement('div', {
              style: {
                textAlign: 'center',
                color: 'var(--text-secondary)',
                fontSize: '0.875rem',
                marginTop: '2rem'
              }
            }, '© 2025 BetterCanvas, Inc. All rights reserved.')
          )
        )
      )
    )
  )
}

export default PrivacyPolicy 