# Bennah.dev — Personal Portfolio

A personal portfolio site built with React + Vite and Tailwind CSS v4, featuring a custom design system built around Torii red and deep ink navy.

## Design System

**Colors**
- Background: `#0B0F17` (Deep ink navy) / `#121826` (Slate panel)
- Accent: `#E8492A` (Torii red)
- Text: `#EDEFF3` / `#9BA3B4` / `#5C6478`

**Typography**
- Display: Space Grotesk
- Body: Inter
- Mono: JetBrains Mono

## Tech Stack

- **Framework:** React + Vite
- **Styling:** Tailwind CSS
- **Routing:** React Router
- **Deployment:** Vercel

## Features

- Responsive single-page layout with smooth scroll navigation
- Project cards linking to dedicated detail pages
- Contact form (backend coming soon)
- Custom color tokens via Tailwind `@theme`
- Clean project detail pages with features and tech stack breakdown

## Project Structure

```
src/
  components/
    Navbar.jsx
    Hero.jsx
    Projects.jsx
    About.jsx
    Contact.jsx
    Footer.jsx
  pages/
    Home.jsx
    ProjectDetail.jsx
  data/
    projects.js
  styles/
    index.css
  App.jsx
  main.jsx
```

## Getting Started

```bash
# Clone the repository
git clone https://github.com/bennah995/bennah-dev.git

# Install dependencies
cd bennah-dev
npm install

# Start dev server
npm run dev
```

## Deployment

Deployed on Vercel. Every push to `main` triggers an automatic deployment.

```bash
# Build for production
npm run build
```

## Author

**Benard Mutuku (Bennah)**  
Full-Stack Software Engineer  
Nairobi, Kenya

[GitHub](https://github.com/bennah995) • [Portfolio](https://bennah-dev.vercel.app/)
