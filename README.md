# Graham's Fine Foods

A responsive ecommerce storefront for Graham's Fine Foods, built with React, TypeScript, Tailwind CSS, and Vite. The site includes product browsing, category filtering, search, a cart drawer, product quick view, checkout confirmation, journal content, testimonials, and newsletter signup feedback.

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```text
src/
  components/   Reusable page sections and UI components
  data/         Mock product and content data
  types.ts      Shared TypeScript types
  App.tsx       Main storefront state and layout
public/
  images/       Public image assets
```

## Deploying to Vercel

This project is a Vite app. Use these settings in Vercel:

- Framework Preset: `Vite`
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

To deploy:

1. Push this project to GitHub.
2. Go to Vercel and choose **Add New Project**.
3. Import the GitHub repository.
4. Confirm the Vite settings above.
5. Click **Deploy**.

## Pushing to GitHub

From the project folder:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
git push -u origin main
```

Replace `YOUR_USERNAME` and `YOUR_REPOSITORY_NAME` with your GitHub account and repository name.

## Notes

- Cart data is saved in `localStorage`.
- Product, journal, testimonial, and category data currently come from local mock data.
- External product and story images are loaded from Unsplash URLs.
