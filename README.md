# Personal Portfolio

This is a Vite + React + TypeScript + Tailwind project for a personal portfolio. It is a generified version of my own personal portfolio website. 

This portfolio is built from scratch using a modern, high-performance technology stack, showcasing my commitment to clean code, custom design, and optimal user experience.

React & Vite (with TypeScript) - Enables a fast, scalable, and type-safe front-end development experience.
Tailwind CSS - Facilitates rapid, utility-first styling for a completely custom and responsive design.
AWS (e.g., S3 & CloudFront)	- Deploys the site with enterprise-grade security, reliability, and global availability. Experience near-instant load times thanks to Content Delivery Network (CDN) integration.

This project demonstrates my ability to design, develop, and deploy a professional application using industry-standard, in-demand tools—a key skill for building client-facing or production-ready software.

Quick start

1. Install dependencies

```powershell
npm install
```

2. Run dev server

```powershell
npm run dev
```

3. Build

```powershell
npm run build
```

Automatic sitemap generation

The project includes a small script to generate `sitemap.xml` during the build. Set the SITE_URL environment variable before building to your production domain (default: `https://yourdomain.com`). Example:

```powershell
set SITE_URL=https://example.com; npm run build
```

This will write `sitemap.xml` to both the project root and the `dist/` directory.
