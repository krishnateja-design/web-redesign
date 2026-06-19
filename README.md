# PRove IT Catalysts — Redesigned Frontend

A modern, premium SaaS-style redesign of [proveitcatalysts.com](https://www.proveitcatalysts.com) built with **Next.js 15**, **TypeScript**, and **SCSS Modules**.

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| Next.js | 15 (App Router) | Framework |
| TypeScript | 5 | Type safety |
| SCSS Modules | via `sass` | Component-scoped styles |
| Framer Motion | 11 | Animations |
| React Icons | 5 | Icon library |

---

## Design System

### Color Palette
```
Primary:    #4F46E5  (Indigo)
Secondary:  #06B6D4  (Cyan)
Accent:     #F97316  (Orange)
Background: #FFFFFF
Section BG: #F8FAFC
Dark BG:    #0F172A
Text:       #0F172A
Muted Text: #64748B
```

### Gradients
- `Purple → Blue` — primary CTAs and highlights
- `Cyan → Purple` — charts and visual elements
- `Orange → Pink` — accent headlines and badges

### Typography
- **Display**: Plus Jakarta Sans (headings, logotype)
- **Body**: Inter (paragraphs, UI text)

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx           # Root layout (Header + Footer)
│   ├── page.tsx             # Homepage
│   ├── about/page.tsx
│   ├── services/page.tsx
│   ├── solutions/page.tsx
│   ├── portfolio/page.tsx
│   ├── blog/page.tsx
│   ├── contact/page.tsx
│   └── globals.scss         # Global styles + font imports
│
├── components/
│   ├── Header/              # Sticky transparent nav with scroll effect
│   ├── Hero/                # Full-viewport hero with animated mockup
│   ├── Services/            # Service cards grid (10 services)
│   ├── Features/            # Why Choose Us — 6 feature cards
│   ├── Process/             # 4-step process timeline
│   ├── Portfolio/           # Project case study grid
│   ├── Testimonials/        # Interactive testimonial carousel (7 reviews)
│   ├── Blog/                # Article cards with category badges
│   ├── CTA/                 # Conversion-focused gradient banner
│   └── Footer/              # Multi-column footer + newsletter
│
├── data/
│   ├── services.ts          # All 10 services with metadata
│   └── projects.ts          # Projects + testimonials
│
└── styles/
    ├── _variables.scss      # Colors, spacing, typography tokens
    ├── _mixins.scss         # Flex/grid/button/container utilities
    ├── _breakpoints.scss    # Mobile-first media query mixins
    └── _animations.scss     # Keyframe animations + utility classes
```

---

## Getting Started

### Prerequisites
- Node.js 18.17+ 
- npm / yarn / pnpm

### Installation

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open in browser
open http://localhost:3000
```

### Production Build

```bash
npm run build
npm start
```

---

## Pages

| Route | Description |
|---|---|
| `/` | Homepage with all sections |
| `/about` | Company story, values, and stats |
| `/services` | Full services catalog |
| `/solutions` | Industry-specific solutions |
| `/portfolio` | Project portfolio grid |
| `/blog` | Articles and insights |
| `/contact` | Contact form + details |

---

## Key Features

### Header
- Transparent on load → solid white with blur on scroll
- Dropdown mega-menu for "Company"
- Mobile hamburger with slide-down menu
- Sticky with smooth transition

### Hero
- Parallax mouse-tracking effect on dashboard mockup
- Animated gradient blobs (CSS keyframes)
- Floating trust badges with animation
- Stats strip with gradient numbers

### Services
- 10 services from the original site
- Color-coded cards with gradient icons
- Hover lift + glow accent effect
- Feature tags list per service

### Testimonials
- 7 real client testimonials preserved from original
- Interactive avatar selector
- Glass-style card on dark background

### Animations
All built with CSS keyframes (no runtime dependency required for initial load):
- `float` — hero mockup and badges
- `blob` — background gradient shapes
- `fade-in-up` — staggered content reveal
- `pulse` — live indicator dot

Framer Motion is installed for enhanced scroll reveals — wrap components with `<motion.div>` as needed.

---

## Customization

### Update Business Info
Edit `/src/data/services.ts` and `/src/data/projects.ts` to change services and portfolio items.

### Update Colors
All color tokens are in `/src/styles/_variables.scss`. Change `$primary`, `$secondary`, `$accent` to retheme the entire site.

### Add Pages
Create a new file at `src/app/your-page/page.tsx`. The root layout (Header + Footer) wraps all pages automatically.

---

## Original Website
- **URL**: https://www.proveitcatalysts.com
- **Company**: PRove IT Catalysts, Hyderabad, India
- **Phone**: 088866 61674
- **Email**: contact@proveitcatalysts.com

All business information, services, testimonials, and content preserved from the original website.
