import React, { useState } from 'react'

const FAQ = () => {
  const [openSection, setOpenSection] = useState(null)

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index)
  }

  const faqSections = [
    {
      category: "Compatibility Issues",
      questions: [
        {
          question: "Does BetterCanvas work with Canva (the graphic design tool)?",
          answer: "No, this extension is NOT for Canva the graphic design tool. BetterCanvas is specifically designed for Canvas Learning Management System (LMS) used by educational institutions. It will not work with Canva."
        },
        {
          question: "Can I use BetterCanvas with D2L, Moodle, Blackboard Ultra, or other learning platforms?",
          answer: "No, BetterCanvas does NOT work with these learning platforms. It only works with Canvas LMS. These platforms use entirely different systems and are not compatible with our extension."
        },
        {
          question: "What browsers are supported?",
          answer: "BetterCanvas only supports Chrome and Firefox browsers. We don't currently support Safari (as we don't have access to Mac development), Edge (due to addon store issues), or other browsers like Opera. There are no plans to support additional browsers at this time."
        }
      ]
    },
    {
      category: "Common Issues & Troubleshooting",
      questions: [
        {
          question: "The extension isn't working - nothing happens when I try to use it",
          answer: "Here are a few things to check:\n• Make sure you're on a Canvas website (not another learning platform)\n• Verify the URL in the BetterCanvas menu matches your Canvas dashboard URL\n• Ensure your dashboard is in card view, not list view (most features only work in card view)\n• Try refreshing the page and checking if the extension is enabled"
        },
        {
          question: "My settings keep resetting when I refresh the page",
          answer: "This might be caused by scheduled dark mode being enabled instead of regular dark mode. Check if you have scheduled dark mode turned on - the extension might be automatically turning off dark mode based on your schedule, not actually resetting your settings."
        },
        {
          question: "I'm getting a 'Missing cards or cards not found' error",
          answer: "If you're using Canvas LMS (not other platforms), try this fix: Go to the Report Issue tab in the BetterCanvas menu, scroll down to 'Card Method', and click 'Dashboard'. This tells the extension to retrieve your cards differently. Note: This is experimental and some features like the GPA calculator may be temporarily affected."
        }
      ]
    },
    {
      category: "Dark Mode Issues",
      questions: [
        {
          question: "There are gaps or areas that aren't dark in dark mode",
          answer: "There are gaps or areas that can be hard to target because gaps need to be manually fixed. Try using the dark mode fixer: Go to the 'Edit Dark Mode' tab and look for the dark mode fixer option. Run it on the page to see if it fixes the gaps. If issues persist, please email support@bettercanvas.org with details about the specific gaps you're seeing."
        },
        {
          question: "My card colors look muted or washed out",
          answer: "You likely have High Contrast UI enabled. To fix this: Click on your account icon in the Canvas sidebar and disable the High Contrast UI setting."
        }
      ]
    },
    {
      category: "Card Customization",
      questions: [
        {
          question: "Card colors aren't working or applying",
          answer: "Make sure you meet these requirements:\n• You're on the Canvas dashboard page\n• Your dashboard is set to card view (not list view)\n• You have only one Canvas page/tab open at a time\n• Try refreshing the page after making changes"
        },
        {
          question: "How do I change individual card colors?",
          answer: "You can customize each card individually by clicking on the three dots (⋯) in the top right corner of each course card. This allows you to change colors for specific courses rather than applying a universal theme."
        }
      ]
    },
    {
      category: "Theme Creation",
      questions: [
        {
          question: "How do I create and submit a custom theme?",
          answer: "To create a theme you'll need:\n• Card images for your courses\n• Custom dark mode settings (must be unique, not a default preset)\n• Card colors selection\n• Optional: custom fonts\n\nYou don't need all features, but themes must include at least dark mode and card images. Check the 'User Made Themes' section for examples. Once ready, export your theme in the themes tab and email the output to support@bettercanvas.org with your theme name and preferred credit name."
        },
        {
          question: "Why wasn't my theme added to the collection?",
          answer: "Themes may not be accepted if they:\n• Are missing key components (dark mode or card images)\n• Use one of the default dark mode presets instead of custom settings\n• Are too similar to existing themes\n• Don't meet quality standards\n\nWe receive many submissions and try to add only high-quality, complete themes that offer something unique to users."
        }
      ]
    },
    {
      category: "Features & Functionality",
      questions: [
        {
          question: "How accurate is the GPA calculator?",
          answer: "The GPA calculator is provided for informational purposes only. While we strive for accuracy, BetterCanvas does not guarantee precise grade calculations or academic outcomes. Always verify important grade information with your institution's official records."
        },
        {
          question: "Can I use BetterCanvas for academic purposes safely?",
          answer: "Yes! BetterCanvas is designed to enhance your learning experience, not to facilitate academic dishonesty. The extension helps with organization, visual customization, and productivity. You remain responsible for all academic work submitted through Canvas, and you must comply with your institution's academic integrity policies."
        },
        {
          question: "Does BetterCanvas access my Canvas login information?",
          answer: "No, BetterCanvas does not access or store your Canvas login credentials. Most settings are stored locally on your device. We may collect anonymized usage statistics to improve the extension, but we don't access your personal Canvas data, grades, or assignments."
        }
      ]
    },
    {
      category: "Getting Help",
      questions: [
        {
          question: "How can I report bugs or get additional support?",
          answer: "For bug reports, feature requests, or technical support:\n• Email: support@bettercanvas.org\n• GitHub: Check our open-source repository for known issues\n• Include details about your browser, Canvas instance, and specific steps to reproduce any issues"
        },
        {
          question: "Is BetterCanvas free to use?",
          answer: "Yes! BetterCanvas is completely free and open-source. We don't charge for any features or require subscriptions. The extension is developed and maintained by volunteers to help improve the Canvas experience for students worldwide."
        }
      ]
    }
  ]

  return React.createElement('div', { className: 'min-h-screen' },
    // Header spacer
    React.createElement('div', { style: { height: '80px' } }),
    
    React.createElement('div', { className: 'container section' },
      React.createElement('div', { 
        style: { maxWidth: '900px', margin: '0 auto' }
      },
        React.createElement('h1', { 
          className: 'text-center mb-lg',
          style: { fontFamily: 'var(--font-serif)' }
        }, 'Frequently Asked Questions'),
        
        React.createElement('p', {
          className: 'text-large text-center mb-2xl',
          style: { 
            color: 'var(--text-secondary)',
            maxWidth: '600px',
            margin: '0 auto 3rem'
          }
        }, 'Find answers to common questions about BetterCanvas. If you can\'t find what you\'re looking for, feel free to contact our support team.'),

        // FAQ Sections
        React.createElement('div', { className: 'space-y-6' },
          ...faqSections.map((section, sectionIndex) =>
            React.createElement('div', { 
              key: sectionIndex,
              className: 'card'
            },
              React.createElement('h2', {
                className: 'mb-lg gradient-text',
                style: { 
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.5rem'
                }
              }, section.category),
              
              React.createElement('div', { className: 'space-y-4' },
                ...section.questions.map((faq, questionIndex) => {
                  const globalIndex = `${sectionIndex}-${questionIndex}`
                  const isOpen = openSection === globalIndex
                  
                  return React.createElement('div', {
                    key: questionIndex,
                    className: 'faq-item',
                    style: {
                      border: '1px solid var(--border-light)',
                      borderRadius: 'var(--radius-lg)',
                      overflow: 'hidden',
                      transition: 'all var(--transition)'
                    }
                  },
                    React.createElement('button', {
                      onClick: () => toggleSection(globalIndex),
                      className: 'faq-question',
                      style: {
                        width: '100%',
                        padding: '1.25rem',
                        textAlign: 'left',
                        background: isOpen ? 'var(--surface)' : 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '1rem',
                        fontWeight: '600',
                        color: 'var(--text-primary)',
                        transition: 'all var(--transition)'
                      }
                    },
                      React.createElement('span', { 
                        style: { paddingRight: '1rem' }
                      }, faq.question),
                      React.createElement('span', {
                        style: {
                          fontSize: '1.25rem',
                          transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                          transition: 'transform var(--transition)',
                          color: 'var(--text-secondary)'
                        }
                      }, '+')
                    ),
                    
                    isOpen && React.createElement('div', {
                      className: 'faq-answer',
                      style: {
                        padding: '0 1.25rem 1.25rem',
                        color: 'var(--text-secondary)',
                        lineHeight: '1.7',
                        whiteSpace: 'pre-line'
                      }
                    }, faq.answer)
                  )
                })
              )
            )
          )
        ),

        // Contact section
        React.createElement('div', {
          className: 'card text-center mt-2xl',
          style: {
            background: 'var(--surface)',
            border: '2px solid var(--border-light)'
          }
        },
          React.createElement('h3', {
            className: 'mb-md',
            style: { fontFamily: 'var(--font-serif)' }
          }, 'Still Need Help?'),
          React.createElement('p', {
            className: 'mb-lg',
            style: { color: 'var(--text-secondary)' }
          }, 'Can\'t find the answer you\'re looking for? Our support team is here to help.'),
          React.createElement('div', {
            style: {
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }
          },
            React.createElement('a', {
              href: 'mailto:support@bettercanvas.org',
              className: 'btn btn-primary'
            }, '📧 Email Support'),
            React.createElement('a', {
              href: 'https://github.com/UseBetterCanvas/bettercanvas',
              target: '_blank',
              rel: 'noopener noreferrer',
              className: 'btn btn-outline'
            }, '🔧 GitHub Issues')
          )
        )
      )
    )
  )
}

export default FAQ 