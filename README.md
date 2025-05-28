# BetterCanvas Website

A beautiful, modern website for the BetterCanvas browser extension. This project is a complete recreation of the original diditupe.dev/bettercanvas website, built from the ground up with React and Vite.

## 🌟 Features

- **Modern Design**: Clean, responsive design with gradient backgrounds and smooth animations
- **Fast Performance**: Built with Vite for lightning-fast development and optimized builds
- **Mobile Responsive**: Fully responsive design that works on all devices
- **SEO Optimized**: Proper meta tags and semantic HTML for better search engine visibility
- **Accessibility**: Built with accessibility best practices in mind

## 🚀 Live Demo

Visit the live website at [bettercanvas.org](https://bettercanvas.org)

## 🛠️ Development

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd BetterCanvas

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 📁 Project Structure

```
BetterCanvas/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Features.jsx
│   │   ├── Installation.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── index.html
├── vite.config.js
└── package.json
```

## 🎨 Design System

### Colors
- Primary Gradient: `#667eea` to `#764ba2`
- Secondary Gradient: `#f093fb` to `#f5576c`
- Dark Gradient: `#1a1a2e` to `#16213e`

### Typography
- Font Family: Inter (Google Fonts)
- Responsive typography using clamp()

## 🌐 Deployment

### Building for Production

```bash
npm run build
```

This creates a `dist` folder with optimized production files.

### Deployment to bettercanvas.org

Based on the [PCMag guide for transferring websites to new domains](https://www.pcmag.com/how-to/how-to-transfer-a-website-to-a-new-domain), follow these steps:

1. **Build the website**: `npm run build`
2. **Upload files**: Transfer the `dist` folder contents to your web host
3. **Update DNS**: Point bettercanvas.org to your new hosting
4. **Set up redirects**: Configure any necessary redirects from the old domain
5. **Test thoroughly**: Verify all links and features work correctly

### Hosting Options

- **Vercel**: Easy deployment with Git integration
- **Netlify**: Simple drag-and-drop deployment
- **Traditional Web Hosting**: Upload dist folder via FTP/cPanel

## 📧 Contact

For questions about this website project, please contact ksucpea@gmail.com

## 📄 License

MIT License - see LICENSE file for details

---

*This website showcases the BetterCanvas browser extension - a feature-packed extension for Canvas with over 1.5 million users.* 