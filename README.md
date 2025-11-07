# T-001v2r3.github.io

A modern, fast, and accessible personal website built with Astro, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Stack**: Built with Astro (static site generator), TypeScript, and Tailwind CSS
- **Blog System**: Write blog posts in Markdown/MDX with frontmatter support
- **Dark/Light Theme**: Automatic theme toggle with stored user preference
- **SEO Optimized**: Meta tags, Open Graph, Twitter Cards, sitemap, and RSS feed
- **Responsive Design**: Mobile-first design that looks great on all devices
- **Fast Performance**: Static site generation for instant page loads
- **Accessible**: Semantic HTML, ARIA labels, keyboard navigation, and skip-to-content link
- **Automated Deployment**: GitHub Actions workflow for automatic deployment to GitHub Pages

## 📁 Project Structure

```
/
├── public/              # Static assets
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── Nav.astro
│   │   ├── Footer.astro
│   │   ├── ThemeToggle.astro
│   │   └── SEO.astro
│   ├── content/         # Content collections
│   │   ├── blog/        # Blog posts (Markdown files)
│   │   │   └── 2025-01-01-welcome.md
│   │   └── config.ts    # Content collection schema
│   ├── layouts/         # Page layouts
│   │   └── BaseLayout.astro
│   ├── pages/           # File-based routing
│   │   ├── index.astro  # Home page
│   │   ├── about.astro  # About page
│   │   ├── rss.xml.ts   # RSS feed
│   │   └── blog/
│   │       ├── index.astro    # Blog list page
│   │       └── [slug].astro   # Dynamic blog post pages
│   └── styles/
│       └── global.css   # Global styles and Tailwind
├── .github/
│   └── workflows/
│       └── deploy.yml   # GitHub Actions deployment workflow
├── astro.config.mjs     # Astro configuration
├── tailwind.config.cjs  # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── package.json
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ (LTS recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/T-001v2r3/T-001v2r3.github.io.git
   cd T-001v2r3.github.io
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:4321`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run format` - Format code with Prettier
- `npm run lint` - Check code formatting

## ✍️ Adding Blog Posts

To add a new blog post:

1. Create a new Markdown file in `src/content/blog/` with a descriptive filename (e.g., `2025-01-15-my-new-post.md`)

2. Add frontmatter at the top of the file:
   ```markdown
   ---
   title: "Your Post Title"
   description: "A brief description of your post"
   date: 2025-01-15
   tags: ["tag1", "tag2", "tag3"]
   coverImage: "/path/to/image.jpg"  # Optional
   ---
   
   Your content here...
   ```

3. Write your content using Markdown syntax

4. Commit and push your changes - the site will automatically rebuild and deploy!

### Frontmatter Fields

- `title` (required): The post title
- `description` (required): A brief description for SEO and post listings
- `date` (required): Publication date (YYYY-MM-DD)
- `tags` (optional): Array of tags for categorization
- `coverImage` (optional): Path to a cover image
- `draft` (optional): Set to `true` to exclude from production builds

## ⚙️ Configuration

### Site Metadata

Edit `astro.config.mjs` to update site metadata:

```javascript
export default defineConfig({
  site: 'https://yourusername.github.io',
  // For project repos, uncomment and set the base path:
  // base: '/repo-name',
  // ... other config
});
```

### Customization

- **Colors**: Edit `tailwind.config.cjs` to customize the color scheme
- **Site info**: Update titles and descriptions in components and layouts
- **Navigation**: Modify the `navItems` array in `src/components/Nav.astro`
- **Social links**: Uncomment and customize social links in `src/components/Footer.astro`

## 🚀 Deployment

This site uses GitHub Actions for automatic deployment to GitHub Pages.

### Setup Instructions

1. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Under "Source", select "GitHub Actions"

2. **Push to main branch**:
   - The workflow will automatically trigger on push to `main`
   - Build artifacts will be deployed to GitHub Pages
   - Your site will be available at `https://yourusername.github.io`

### Manual Deployment

You can also trigger deployment manually:
1. Go to the "Actions" tab in your repository
2. Select "Deploy to GitHub Pages"
3. Click "Run workflow"

### Deployment Workflow

The GitHub Actions workflow (`.github/workflows/deploy.yml`) does the following:

1. Checks out the repository
2. Sets up Node.js
3. Installs dependencies with `npm ci`
4. Builds the site with `npm run build`
5. Uploads the `dist` folder as an artifact
6. Deploys to GitHub Pages using the official actions

## 🎨 Theme Toggle

The site includes a dark/light theme toggle that:
- Respects user's system preference by default
- Stores preference in localStorage
- Provides smooth transitions between themes
- Uses Tailwind's dark mode classes

## 📝 RSS Feed

An RSS feed is automatically generated at `/rss.xml` and includes:
- All published blog posts
- Post titles, descriptions, and publication dates
- Tags for each post

## 🔍 SEO

The site includes comprehensive SEO features:
- Meta tags for all pages
- Open Graph tags for social media sharing
- Twitter Card support
- Sitemap.xml generation
- Robots.txt configuration
- Canonical URLs

## 📱 Responsive Design

The site is fully responsive with:
- Mobile-first design approach
- Flexible grid layouts
- Responsive navigation with mobile menu
- Optimized images and typography

## ♿ Accessibility

Accessibility features include:
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Skip-to-content link
- Focus indicators
- Sufficient color contrast
- Reduced motion support

## 🔧 Tech Stack

- **[Astro](https://astro.build)** v4.0+ - Static site generator
- **[TypeScript](https://www.typescriptlang.org/)** v5.3+ - Type safety
- **[Tailwind CSS](https://tailwindcss.com/)** v3.4+ - Styling
- **[MDX](https://mdxjs.com/)** - Enhanced Markdown support
- **GitHub Actions** - CI/CD pipeline
- **GitHub Pages** - Hosting

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

For questions or feedback, feel free to reach out or open an issue.

---

Built with ❤️ using Astro