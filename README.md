# Personal Portfolio Website

A modern, responsive, and professional personal portfolio website built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- ✨ Modern and responsive design
- 🎨 Beautiful gradient UI with dark theme
- 📱 Mobile-friendly navigation
- 🔍 SEO optimized
- ⚡ Fast performance with Vite
- 🎯 Smooth scrolling and animations
- 📧 Contact form functionality
- 🌐 Social media links
- 📄 Sections for education, skills, projects, experience, and certifications

## 📋 Sections Included

1. **Home** - Professional introduction with call-to-action buttons
2. **About Me** - Personal background and professional summary
3. **Skills** - Technical and soft skills categorized
4. **Projects** - Showcase of 3+ featured projects with descriptions
5. **Experience** - Work history with achievements
6. **Education** - Educational background and qualifications
7. **Certifications** - Professional certifications and achievements
8. **Contact** - Contact form and social links

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Package Manager**: npm/pnpm

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/Matshee/personal-portfolio-website.git
cd personal-portfolio-website
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
```

3. Start the development server:
```bash
npm run dev
# or
pnpm dev
```

The website will open at `http://localhost:3000`

## 🏗️ Build for Production

```bash
npm run build
# or
pnpm build
```

This generates optimized static files in the `dist` folder.

## 📝 Customization

### Update Personal Information

1. **Hero Section** (`src/components/Hero.tsx`)
   - Update name, title, and introduction
   - Change social media links

2. **About Section** (`src/components/About.tsx`)
   - Modify personal bio and quick facts

3. **Skills Section** (`src/components/Skills.tsx`)
   - Add/remove technical skills by category
   - Update soft skills list

4. **Projects Section** (`src/components/Projects.tsx`)
   - Add your actual projects
   - Update project images, descriptions, and links

5. **Experience Section** (`src/components/Experience.tsx`)
   - Add your work history
   - Update job titles, companies, and achievements

6. **Education Section** (`src/components/Education.tsx`)
   - Update degrees and institutions
   - Modify academic achievements

7. **Certifications Section** (`src/components/Certifications.tsx`)
   - Add your certifications
   - Include credential IDs and links

8. **Contact Section** (`src/components/Contact.tsx`)
   - Update email address
   - Modify social media URLs
   - Connect form to email service (e.g., Formspree, EmailJS)

## 🎨 Customizing Styles

The website uses Tailwind CSS. Customize colors and styles in:
- `tailwind.config.js` - Global theme configuration
- `src/index.css` - Global styles
- Individual component files - Component-specific styles

## 📲 Responsive Design

The website is fully responsive and tested on:
- Desktop (1920px and above)
- Laptop (1280px)
- Tablet (768px)
- Mobile (480px)

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel will automatically detect Vite and build settings
5. Click Deploy

### Deploy to Netlify

1. Build the project: `npm run build`
2. Visit [netlify.com](https://netlify.com)
3. Drag and drop the `dist` folder
4. Your site is live!

### Deploy to GitHub Pages

1. Update `vite.config.ts` with base path
2. Build: `npm run build`
3. Push `dist` folder to `gh-pages` branch

## 📧 Contact Form Integration

To enable email functionality, integrate a service like:
- **Formspree** - Easy no-code solution
- **EmailJS** - Client-side email sending
- **SendGrid** - Professional email service

## 🤝 Contributing

Feel free to fork this project and customize it for your needs!

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Tshidi Eunacia Ncube**
- Email: tshidieunaciancube@gmail.com
- GitHub: [@Matshee](https://github.com/Matshee)
- LinkedIn: [Your LinkedIn Profile](https://linkedin.com)

## 🙏 Acknowledgments

- React team for the amazing framework
- Tailwind CSS for beautiful utility classes
- Lucide React for beautiful icons
- Vite for the blazing fast build tool

---

**Made with ❤️ by Tshidi Eunacia Ncube**
