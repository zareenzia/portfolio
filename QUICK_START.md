# 🚀 Quick Start Guide

Your professional portfolio is ready! Here's how to get started:

## ✅ Current Status

- ✨ **Development server running** at `http://localhost:3000`
- ✅ **Build verified** - production build successful
- 📦 **All dependencies installed**
- 🎨 **Design complete** - dark professional theme

## 📋 Next Steps (5 minutes)

### 1. Update Your Information
Edit `data/portfolio.ts` and replace all placeholders:

```bash
# Open in your editor
data/portfolio.ts
```

Replace these in the `portfolioData` object:
- `[YOUR NAME]` → Your full name
- `[ROLE]` → Your job title  
- `your.email@example.com` → Your email
- `linkedin.com/in/yourprofile` → Your LinkedIn URL
- `github.com/yourprofile` → Your GitHub URL
- All other placeholder content

**See `CONTENT_GUIDE.md` for detailed instructions**

### 2. View Your Changes
The dev server auto-reloads as you save. Visit:
```
http://localhost:3000
```

### 3. Customize (Optional)
Adjust colors, fonts, or spacing:
- Colors: `tailwind.config.ts` (look for `primary-*` colors)
- Typography: `app/globals.css` (font imports)
- Layout: Individual component files in `components/`

## 📱 Browser Testing

### Desktop
- View at full width
- Test navbar interactions
- Hover over project cards

### Mobile
Press `F12` in your browser and toggle device toolbar to test responsive design

### Accessibility
- Test keyboard navigation (Tab key)
- Check with screen reader (Windows: Narrator, Mac: VoiceOver)

## 🚀 Deployment

### Option 1: Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

Follow prompts to connect your GitHub and deploy.

### Option 2: Other Hosting

Build the site:
```bash
npm run build
```

Deploy the `.next/` folder to your hosting provider (Netlify, GitHub Pages, etc.)

## 📂 Project Structure Overview

```
components/          → All UI components
├── navbar.tsx       → Fixed navigation
├── hero-profile.tsx → Profile card section
├── experience.tsx   → Career timeline
├── skills.tsx       → Skills grid
├── education.tsx    → Education cards
├── projects.tsx     → Project showcase
├── exploring.tsx    → Current interests
├── contact.tsx      → Contact section
├── footer.tsx       → Footer
└── primitives.tsx   → Reusable components

data/
└── portfolio.ts     → All your content (EDIT THIS!)

app/
├── page.tsx         → Main page
├── layout.tsx       → Layout wrapper
└── globals.css      → Global styles
```

## 🎨 Key Design Features

✅ Dark professional theme (Navy + Gold)
✅ Minimal, information-dense layout
✅ Professional typography (Inter + JetBrains Mono)
✅ Smooth, subtle animations
✅ Mobile-responsive design
✅ Accessibility-first approach
✅ Production-ready build

## 🔗 Important Files to Edit

| File | Purpose |
|------|---------|
| `data/portfolio.ts` | **← Your content goes here** |
| `CONTENT_GUIDE.md` | Detailed content instructions |
| `README.md` | Full documentation |
| `tailwind.config.ts` | Colors and theme |
| `app/layout.tsx` | Metadata (title, description) |

## ⚡ Common Tasks

### Change Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    accent: "#d4af37",  // Change gold color
    bg: "#0a0e27",      // Change background
    // ... etc
  },
}
```

### Update Metadata
Edit `app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: "Your Name - Your Title",
  description: "Your professional description",
}
```

### Add Your Photo
1. Place image in `public/` folder
2. Update `components/hero-profile.tsx` to use the image instead of placeholder

### Link Resume PDF
1. Place PDF in `public/resume.pdf`
2. Update the Resume button link in `components/hero-profile.tsx`

## 🧪 Testing Before Launch

```bash
# Check for build errors
npm run build

# Run linter
npm run lint

# Start production server (after building)
npm start
```

## 📊 Performance Tips

- Images: Use WebP format where possible
- Check Lighthouse score: `F12 → Lighthouse`
- Keep portfolio.ts data minimal
- Deploy to Vercel for best performance

## 🆘 Troubleshooting

### Dev server won't start
```bash
npm install
npm run dev
```

### Build fails
```bash
npm run build --verbose
```

### Styles not applying
- Clear `.next/` folder: `rm -rf .next`
- Reinstall: `npm install`
- Restart dev server: `npm run dev`

### TypeScript errors
Check `get_errors` in IDE or run:
```bash
npx tsc --noEmit
```

## 📚 Learning Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [React Docs](https://react.dev)
- [TypeScript](https://www.typescriptlang.org/docs)

## 🎯 Before Publishing

- [ ] All placeholders replaced with real info
- [ ] Email is correct and monitored
- [ ] Social links are valid
- [ ] Project descriptions are complete
- [ ] Tested on mobile and desktop
- [ ] No console errors (F12)
- [ ] Resume PDF linked (if using download button)
- [ ] Metadata updated with your info
- [ ] Deployed and working online

## 📞 Support & Questions

Refer to:
- `README.md` - Full documentation
- `CONTENT_GUIDE.md` - Content instructions
- Component files have comments for customization

## 🎉 You're Ready!

Your portfolio is production-ready. Now:

1. **Edit** `data/portfolio.ts` with your information
2. **Verify** at `http://localhost:3000`
3. **Deploy** using Vercel or your preferred host
4. **Share** your portfolio link!

---

**Next action**: Open `data/portfolio.ts` and start filling in your real information.

Good luck! 🚀
