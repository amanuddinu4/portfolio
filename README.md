# Next.js DevOps Portfolio

> A production-ready Next.js 15 (App Router) + TypeScript + Tailwind CSS + Framer Motion portfolio for a world-class DevOps Engineer.

## 🚀 Features

- **Next.js 15** with App Router for optimal performance
- **TypeScript** for type safety
- **Tailwind CSS** for modern, responsive styling
- **Framer Motion** for smooth animations
- **Theme System** with light/dark mode support
- **SEO Optimized** with metadata, OpenGraph, and JSON-LD structured data
- **Accessibility** compliant with WCAG AA standards
- **Responsive Design** that works on all devices

## 📋 Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Git

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/amanuddinu4/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata and theme provider
│   ├── page.tsx            # Main portfolio page
│   └── globals.css         # Global styles and Tailwind directives
├── components/
│   ├── ThemeProvider.tsx   # Theme context provider
│   ├── ThemeToggle.tsx     # Dark/light mode toggle
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Site footer
│   ├── SkillBadge.tsx      # Skill badge component
│   ├── ExperienceTimeline.tsx  # Experience timeline component
│   └── ProjectCard.tsx     # Project card component
├── styles/
│   └── variables.css       # CSS variables for theming
├── public/
│   └── images/
│       └── og-image.png    # OpenGraph image (1200x630)
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
├── postcss.config.js       # PostCSS configuration
└── package.json            # Dependencies and scripts
```

## 🎨 Customization

### Update Personal Information

Edit `app/page.tsx` to update:
- Name, title, and bio
- Skills and experience
- Projects and certifications
- Education and publications
- Contact information

### Update Theme Colors

Edit `styles/variables.css` to customize the color scheme:
- Light theme colors in `:root`
- Dark theme colors in `[data-theme='dark']`

### Update Metadata

Edit `app/layout.tsx` to update:
- Site title and description
- OpenGraph images
- JSON-LD structured data

### Add OpenGraph Image

Create a 1200×630 PNG image and place it at `public/images/og-image.png` for social media sharing.

## 📦 Build & Deploy

### Build for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
```

### Start Production Server

```bash
npm start
# or
yarn start
# or
pnpm start
```

## 🚢 Deployment

### Vercel (Recommended)

1. Push your repository to GitHub
2. Import your project on [Vercel](https://vercel.com)
3. Connect your GitHub repository
4. Vercel will automatically detect Next.js and configure the build settings
5. Deploy!

**Build Settings:**
- Framework Preset: Next.js
- Build Command: `npm run build` (default)
- Output Directory: `.next` (default)
- Install Command: `npm install` (default)

### Netlify

1. Push your repository to GitHub
2. Import your project on [Netlify](https://netlify.com)
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
4. Deploy!

### Other Platforms

This Next.js app can be deployed to any platform that supports Node.js:
- AWS Amplify
- Railway
- Render
- DigitalOcean App Platform

## 🔧 Environment Variables

Currently, no environment variables are required. If you need to add API keys or other secrets:

1. Create a `.env.local` file in the root directory
2. Add your variables:
```env
NEXT_PUBLIC_API_KEY=your_api_key
```
3. Access them in your code using `process.env.NEXT_PUBLIC_API_KEY`

## ♿ Accessibility

This portfolio is built with accessibility in mind:
- Semantic HTML elements
- ARIA labels where needed
- Keyboard navigation support
- Focus indicators
- Color contrast meeting WCAG AA standards
- Reduced motion support

## 🔍 SEO

The portfolio includes:
- Comprehensive metadata
- OpenGraph tags for social sharing
- JSON-LD structured data (Person schema)
- Semantic HTML structure
- Optimized page titles and descriptions

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Aman Uddin**
- GitHub: [@amanuddinu4](https://github.com/amanuddinu4)
- Email: aman@example.com

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animated with [Framer Motion](https://www.framer.com/motion/)
- Icons from [Lucide](https://lucide.dev/)

---

Made with ❤️ by Aman Uddin


