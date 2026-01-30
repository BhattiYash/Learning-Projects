# 🚀 High Tech Company Website

A modern, interactive company website built with **React (Vite)** and **Vanilla CSS**, featuring glassmorphism effects, parallax scrolling, and smooth animations.

![Tech Stack](https://img.shields.io/badge/React-18-blue)
![Vite](https://img.shields.io/badge/Vite-5-purple)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11-pink)

## ✨ Features

- 🎨 **Glassmorphism Design** - Translucent cards with backdrop blur effects
- 🌊 **Parallax Scrolling** - Dynamic background movement in Hero section
- ✨ **Smooth Animations** - Powered by Framer Motion library
- 📱 **Fully Responsive** - Optimized for Mobile, Tablet, and Desktop
- 🎭 **Interactive Elements** - Hover effects, animated counters, sliders
- 🌈 **Neon Gradient Theme** - Cyan and Purple color scheme
- ⚡ **Performance Optimized** - Fast loading and smooth interactions

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### View the Website
After running `npm run dev`, open your browser to:
```
http://localhost:5173/
```

## 🎯 Sections Included

1. **Navigation Bar** - Sticky navbar with glassmorphism and mobile menu
2. **Hero Section** - Parallax background with animated particles
3. **Problem Solved** - Real-world solutions showcase
4. **Statistics** - Animated number counters
5. **MNCs & Collaborations** - Infinite marquee of company logos
6. **Reviews** - Client testimonial slider
7. **Tech Events** - Event cards with registration CTAs
8. **Vision** - Future goals and company vision
9. **Footer** - Multi-column footer with links and social media

## 🎨 Customization

### Change Color Scheme

All colors are defined as CSS custom properties in `src/index.css`:

```css
:root {
  --primary-color: #00f0ff;      /* Neon Cyan */
  --secondary-color: #a855f7;    /* Electric Purple */
  --bg-dark: #0a0a0f;            /* Dark Background */
  /* ... more colors */
}
```

Simply update these values to change the entire site's color scheme!

### Modify Content

Each section has a data array at the top of its file:

```jsx
// Example: src/sections/ProblemSolved.jsx
const problems = [
  {
    icon: HiLightBulb,
    title: 'Digital Transformation',
    description: 'Your description here...',
    color: 'var(--primary-color)'
  },
  // Add more items...
];
```

### Change Company Name

Search and replace "TechCorp" throughout the project with your company name.

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

All sections are fully responsive with mobile-first design.

## 🛠 Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Framer Motion** - Animation library
- **React Icons** - Icon library (HeroIcons)
- **Vanilla CSS** - Custom styling with CSS variables
- **Google Fonts** - Inter & Orbitron fonts

## 📂 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   └── GlassCard.jsx
├── sections/            # Page sections
│   ├── Hero.jsx
│   ├── ProblemSolved.jsx
│   ├── Statistics.jsx
│   ├── MNCs.jsx
│   ├── Reviews.jsx
│   ├── Events.jsx
│   └── Vision.jsx
├── App.jsx              # Main app
├── index.css            # Global styles
└── main.jsx             # Entry point
```

## 📝 CSS Architecture

- **CSS Custom Properties** - Centralized design tokens
- **BEM-like Naming** - Organized and maintainable
- **Component-Scoped Styles** - Each component has its own CSS file
- **Detailed Comments** - Every CSS section is well-documented

## 🎭 Key Design Elements

### Glassmorphism Effect
```css
background: rgba(255, 255, 255, 0.05);
backdrop-filter: blur(16px);
border: 1px solid rgba(255, 255, 255, 0.1);
```

### Neon Glow
```css
box-shadow: 0 0 20px rgba(0, 240, 255, 0.3);
```

### Gradient Text
```css
background: linear-gradient(135deg, #00f0ff 0%, #a855f7 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

## 🚀 Performance Tips

- All animations use GPU-accelerated properties
- Lazy loading with `whileInView` for scroll animations
- Optimized font loading from Google Fonts
- Production build includes minification and tree-shaking

## 📖 Full Documentation

For detailed documentation including:
- Complete customization guide
- Design system reference
- Component API documentation
- Troubleshooting tips

See the **DOCUMENTATION.md** file in the artifacts directory.

## 🐛 Common Issues

### Glassmorphism not visible?
- Ensure browser supports `backdrop-filter`
- Increase blur value in CSS variables

### Animations not working?
- Check that Framer Motion is installed
- Verify browser console for errors

### Mobile menu not opening?
- Ensure React Icons is installed
- Check browser console for errors

## 📄 License

This project is open source and available for customization.

## 🎉 Credits

Built with modern web technologies and best practices for a premium user experience.

---

**Enjoy building your high-tech website! 🚀**
