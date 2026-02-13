# LegalEdge Law Firm Website

A modern, responsive website for a startup law firm built with React, TypeScript, and Tailwind CSS.

## Features

- 📄 Multiple pages: Home, About, Practice Areas, Publications, Contact
- 📝 Full-featured blog/publications section with detailed legal articles
- 🎨 Modern, professional design
- 📱 Fully responsive for all devices
- 🚀 Fast and optimized
- 🔍 Category filtering for publications
- 📖 Individual article pages with rich content

## Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **React Router 7** - Client-side routing
- **Tailwind CSS 4** - Styling
- **Vite** - Build tool
- **Lucide React** - Icons

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Building for Production

```bash
npm run build
```

This creates a `dist` folder with optimized static files.

## Deployment

This website is configured for easy deployment to GitHub Pages. See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

Quick deploy:
1. Push your code to GitHub
2. Enable GitHub Actions in repository settings
3. The workflow will automatically build and deploy

## Project Structure

```
├── src/
│   ├── app/
│   │   ├── components/     # Reusable components
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Layout.tsx
│   │   ├── data/          # Static data
│   │   │   └── content/articles/*.md
│   │   ├── pages/         # Page components
│   │   │   ├── Home.tsx
│   │   │   ├── About.tsx
│   │   │   ├── PracticeAreas.tsx
│   │   │   ├── Publications.tsx
│   │   │   ├── BlogPost.tsx
│   │   │   └── Contact.tsx
│   │   ├── App.tsx
│   │   └── routes.ts
│   ├── styles/            # Global styles
│   └── main.tsx          # Entry point
├── public/               # Static assets
└── index.html           # HTML template
```

## Customization

### Adding Blog Posts

Add a new Markdown file under `/src/app/content/articles/` with frontmatter:

```
---
title: "Your Article Title"
date: "2026-02-12"
author: "Author Name"
excerpt: "Short excerpt"
category: "Category"
imageUrl: "/public/images/your-image.jpg"
---

Article body in Markdown...
```

```typescript
{
  id: "7",
  title: "Your Article Title",
  excerpt: "Brief description...",
  content: "Full article content...",
  author: "Author Name",
  date: "2026-02-15",
  category: "Corporate Law",
  readTime: "5 min read",
  imageUrl: "https://example.com/image.jpg"
}
```

### Updating Firm Information

- **Firm Name**: Update in `Header.tsx` and `Footer.tsx`
- **Contact Details**: Update in `Footer.tsx` and `Contact.tsx`
- **Team Members**: Update in `About.tsx`
- **Practice Areas**: Update in `PracticeAreas.tsx`

### Styling

- Global styles: `/src/styles/`
- Tailwind config: Using Tailwind CSS 4 (configured via CSS)
- Component styles: Inline Tailwind classes

## Content Management

All content is managed through TypeScript files, making it:
- ✅ Type-safe
- ✅ Version controlled
- ✅ Easy to edit
- ✅ No database needed
- ✅ Fast loading (compiled into bundle)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is for educational purposes. Customize as needed for your law firm.

## Support

For issues or questions, please open an issue on GitHub.
