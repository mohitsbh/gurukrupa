---
name: Heritage Glass
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#46464d'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f1f1f1'
  outline: '#77767e'
  outline-variant: '#c7c5ce'
  surface-tint: '#585c7d'
  primary: '#181d3a'
  on-primary: '#ffffff'
  primary-container: '#2d3250'
  on-primary-container: '#969abe'
  inverse-primary: '#c0c4ea'
  secondary: '#555c84'
  on-secondary: '#ffffff'
  secondary-container: '#c8cffe'
  on-secondary-container: '#50577f'
  tertiary: '#341800'
  on-tertiary: '#ffffff'
  tertiary-container: '#532900'
  on-tertiary-container: '#ce8f5b'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dee0ff'
  primary-fixed-dim: '#c0c4ea'
  on-primary-fixed: '#141936'
  on-primary-fixed-variant: '#404564'
  secondary-fixed: '#dee1ff'
  secondary-fixed-dim: '#bdc4f2'
  on-secondary-fixed: '#11183d'
  on-secondary-fixed-variant: '#3d446b'
  tertiary-fixed: '#ffdcc3'
  tertiary-fixed-dim: '#feb880'
  on-tertiary-fixed: '#2f1500'
  on-tertiary-fixed-variant: '#6a3b0e'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  display-lg:
    fontFamily: Poppins
    fontSize: 56px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Poppins
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Poppins
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Poppins
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Poppins
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Poppins
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Poppins
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 80px
  container-max: 1280px
---

## Brand & Style

The design system is built for a premium painting contractor with over three decades of expertise. It balances the heritage of a business established in 1992 with a forward-thinking, high-end aesthetic. The target audience includes luxury homeowners and commercial developers in Mumbai and Thane who value precision and craftsmanship.

The visual direction is **Modern Glassmorphism**. This style leverages translucency and depth to create a sophisticated, airy feel. The UI should evoke a sense of "digital paint"—fluid, layered, and perfectly finished. Key characteristics include:
- **Luminosity:** Elements should feel like they are catching light.
- **Depth:** Multi-layered surfaces using varying levels of background blur.
- **Precision:** Ultra-thin strokes that mimic the fine lines of professional detailing.

## Colors

The palette is rooted in deep blue and purple tones to signify trust and stability (established 1992), while the lighter tones provide a clean, modern canvas.

- **Primary & Secondary:** Deep Navy (#2D3250) and Muted Lavender (#7077A1) form the core identity. Use these for text, primary buttons, and structural elements.
- **Backgrounds:** Use subtle off-whites (#F1F1F1) for the base page. The "Glass" effect is achieved by layering semi-transparent white containers over these deep brand colors or high-resolution imagery of painted spaces.
- **Accents:** A soft terracotta or gold (#F6B17A) can be used sparingly for "Trust" badges or CTA highlights to provide warmth against the cool glass aesthetic.

## Typography

This design system utilizes **Poppins** exclusively to ensure a cohesive, geometric, and friendly tone. 

- **Headlines:** Use Bold and Semi-Bold weights. High contrast in size between headlines and body text is encouraged to create a premium, editorial feel.
- **Body Text:** Use Regular weight for readability. For long-form content, maintain a generous line height (1.6) to prevent the layout from feeling cluttered.
- **Labels:** Use uppercase with increased letter spacing for small metadata, such as the "Since 1992" badge or service categories.

## Layout & Spacing

The layout philosophy follows a **Fluid Grid** model with generous safe areas to emphasize the premium nature of the brand.

- **Desktop:** 12-column grid with 80px side margins and 24px gutters. Content should feel "un-boxed," floating over background gradients.
- **Mobile:** 4-column grid with 20px margins. Glass cards should span the full width minus margins.
- **Rhythm:** Use an 8px base unit. All padding within glass components should be consistent (e.g., 24px or 32px) to maintain the illusion of a solid physical object.

## Elevation & Depth

Depth is the primary communicator of hierarchy in this design system.

- **The Glass Surface:** Apply `backdrop-filter: blur(12px)` and a background color of `rgba(255, 255, 255, 0.4)`. 
- **The Border:** Every glass element must have a 1px solid border with a light gradient: `linear-gradient(to bottom right, rgba(255,255,255,0.5), rgba(255,255,255,0.1))`. This simulates a highlight on the edge of the glass.
- **Shadows:** Use extremely soft, large-radius shadows (e.g., `0 20px 40px rgba(0,0,0,0.05)`). Avoid harsh, dark shadows; the "lift" should come from the blur and the border highlight.
- **Layering:** When stacking glass cards, increase the blur amount for the background-most layer to create a sense of distance.

## Shapes

The design system uses a high degree of roundedness to feel approachable and modern. 

- **Primary Containers:** Use **rounded-2xl** (1.5rem) or **rounded-3xl** (2rem) for main glass cards and image containers.
- **Interactions:** Buttons and input fields should follow the same curvature.
- **Icons:** Use icons with rounded terminals and soft corners to match the typography and container language.

## Components

### Glass Cards
The signature component. Must include background blur, semi-transparent fill, and the 1px highlight border. Used for service descriptions, testimonials, and portfolio items.

### Animated Gradient Buttons
Primary buttons should use the `primary_brand` gradient. On hover, the gradient should subtly shift or expand, and the button should scale slightly (1.02x) to provide tactile feedback.

### Input Fields
Transparent backgrounds with a 1px white border. On focus, the border should glow with a soft purple shadow and the background blur should increase slightly.

### Trust Badges
Circular or pill-shaped elements that float on the glass surface, often containing "1992" or "Mumbai/Thane" labels. These use the `tertiary_color` to stand out.

### Portfolio Lists
High-resolution photography housed in 3xl rounded containers. Use a subtle glass overlay at the bottom of the image for the project title and location.