# Design Guidelines: Kirill Zhilin - Backend Developer Portfolio

## Design Approach

**Selected Approach:** Reference-Based with Custom Visual Identity

Drawing inspiration from modern developer portfolios (Linear's typography, Stripe's sophistication, Vercel's technical aesthetic) while creating a distinctive dark blue/violet identity that commands attention. This portfolio must be "provocatively beautiful" - pushing visual boundaries while maintaining developer credibility.

**Core Principle:** Bold, cinematic presentation of technical expertise. Every section should feel premium and intentional, with the dark blue/violet palette creating an immersive, memorable experience.

## Color Palette

**Primary Colors (Dark Mode Foundation):**
- Deep Space Blue: `220 45% 12%` - Main background
- Midnight Navy: `230 40% 18%` - Section backgrounds, cards
- Cosmic Blue: `225 50% 25%` - Elevated surfaces

**Accent Colors:**
- Electric Violet: `260 80% 65%` - Primary CTAs, highlights, hover states
- Vivid Purple: `270 70% 60%` - Secondary accents, borders
- Neon Blue: `215 90% 60%` - Interactive elements, links

**Supporting Colors:**
- Pure White: `0 0% 100%` - Primary text
- Soft Gray: `220 15% 75%` - Secondary text
- Muted Slate: `220 10% 50%` - Tertiary text, subtle elements

**Gradient Applications:**
- Hero gradient: Deep Space Blue to Cosmic Blue with Vivid Purple overlay (45deg)
- Card highlights: Subtle Electric Violet to Neon Blue on borders
- Text highlights: Electric Violet to Vivid Purple on headings

## Typography

**Font Families:**
- Primary: Inter (via Google Fonts) - Clean, professional, excellent at all sizes
- Accent/Display: Space Grotesk (via Google Fonts) - Bold headings, attention-grabbing

**Type Scale:**
- Hero Heading: Space Grotesk, 4xl-6xl (responsive), font-bold, Electric Violet gradient
- Section Headings: Space Grotesk, 3xl-4xl, font-bold, white
- Subsection Headings: Inter, xl-2xl, font-semibold, white
- Body Text: Inter, base-lg, font-normal, Soft Gray
- Captions/Meta: Inter, sm, font-medium, Muted Slate
- Code/Technical: JetBrains Mono (for skill badges), sm-base

## Layout System

**Spacing Primitives:** Use Tailwind units of 4, 8, 12, 16, 20, 24 for consistent rhythm
- Component padding: p-8, p-12
- Section spacing: py-20, py-24
- Element gaps: gap-4, gap-8, gap-12
- Container max-width: max-w-6xl

**Grid Structure:**
- Mobile: Single column, full-width with px-4 padding
- Tablet: 2-column grids for skills/experience
- Desktop: 3-column for skills, 2-column for experience, asymmetric hero layout

## Component Library

**Hero Section:**
- Full viewport height (min-h-screen) with gradient background
- Large hero image (professional developer photo, right side on desktop, top on mobile)
- Left side: Name in Space Grotesk (6xl), title in Inter (2xl), brief tagline
- Floating glass-morphism card with quick stats (3 years, Middle level, Bitrix certified)
- Animated scroll indicator with Electric Violet glow

**Skills Showcase:**
- 3-column grid on desktop (2 on tablet, 1 on mobile)
- Each skill in elevated card with Cosmic Blue background
- PHP, Bitrix, Laravel as hero skills with larger cards
- Icon/logo for each technology
- Vivid Purple border-l-4 accent on hover
- Skill level indicators with Electric Violet progress bars

**Experience Timeline:**
- Vertical timeline with Vivid Purple connecting line
- Cards alternate left/right on desktop (stacked on mobile)
- Each card: glass-morphism effect with Midnight Navy background
- Highlight "3 years on large-scale projects" prominently
- Subtle Electric Violet glow on timeline nodes

**Certifications Section:**
- Horizontal scroll cards on mobile, grid on desktop
- Each certification in premium card with subtle gradient border
- Bitrix certificates prominently featured
- Badge-style design with Electric Violet accents

**Contact Section:**
- Clean, centered layout with generous spacing
- Large, tappable contact buttons with glass-morphism effect
- Phone, Telegram, HH.kz resume link as primary actions
- Buttons with Electric Violet backgrounds, blur backdrop
- Hover: Vivid Purple glow effect

**Footer:**
- Minimal, centered
- Copyright, social links
- Muted Slate text on Deep Space Blue background

## Visual Effects & Interactions

**Animations:** Use sparingly for premium feel
- Hero: Subtle parallax on scroll, fade-in on load
- Cards: Gentle hover lift (translateY -2px), Vivid Purple glow
- Skills: Staggered fade-in on viewport entry
- No distracting continuous animations

**Glass-morphism Effects:**
- backdrop-blur-md with bg-white/10 for floating cards
- Subtle border with gradient (Electric Violet to Vivid Purple)
- Applied to hero stat card, contact buttons

## Images

**Hero Image:**
- Professional developer photo, high quality
- Placement: Right 50% of hero on desktop, top on mobile
- Treatment: Subtle Electric Violet gradient overlay on edges
- Shape: Rounded corners (rounded-2xl), dramatic lighting

**Background Elements:**
- Subtle grid pattern overlay on Deep Space Blue
- Gradient mesh effects in hero section
- No stock photos - keep authentic and personal

## Unique Characteristics

**Boldness:** Dark blue/violet palette is rich and saturated, not muted - embrace the "provocatively beautiful" brief with confidence
**Technical Credibility:** Balance visual impact with clear presentation of skills and experience
**Premium Feel:** Every interaction should feel polished - glass effects, smooth transitions, thoughtful spacing
**Asymmetric Layouts:** Hero and experience sections use dynamic, non-centered compositions for visual interest

This portfolio positions Kirill as a sophisticated, forward-thinking developer with strong technical skills and an eye for quality.