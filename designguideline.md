# Kucho Design Guidelines

## Color Palette

| Role         | Token             | Hex       | Usage                                |
| ------------ | ----------------- | --------- | ------------------------------------ |
| Primary      | `kucho-forest`    | `#1dbac1` | Buttons, borders, icons, bg sections |
| Dark         | `kucho-dark`      | `#115e59` | Dark section backgrounds, footer     |
| Light        | `kucho-light`     | `#f0fdfa` | Section bg, card bg, stat cards      |
| Accent       | `amber-400`       | `#fbbf24` | CTAs, hover states, star ratings     |
| Accent Hover | `amber-500`       | `#eab308` | Button hover, link hover             |
| Text         | `black` / `#000`  | `#000000` | All body text, headings, labels      |
| Muted        | `zinc-500`        | `#71717b` | Secondary text, descriptions         |
| Subtle       | `zinc-400`        | `#9f9fa9` | Captions, metadata, placeholders     |
| Border       | `kucho-forest/10` | teal 10%  | Dividers, card borders, input edges  |
| Green Brand  | `emerald-500`     | `#00bb7f` | "KU" logo segment, decorative accent |

### Color Rules

- **Text is always black** on light backgrounds, never the primary teal.
- **Primary teal** (`kucho-forest`) is reserved for: buttons, backgrounds, borders, icons, interactive hover states, and decorative elements.
- **Accent orange** (`amber-400`) is used for: primary CTAs (Schedule Service, Contact Us, Send Message), hover transformations, star ratings, and arrow icons.
- **Green** (`emerald-500`) is used exclusively for the "KU" brand mark in the logo and as a decorative highlight on dark backgrounds.

## Typography

- **Font**: Geist (system sans-serif via `--font-geist-sans`)
- **Headings**: `font-extrabold` with `tracking-tight` and `leading-tight`
- **Body**: `font-medium` or `font-semibold`, `text-sm` to `text-base`
- **Badges**: `text-xs font-bold tracking-wider uppercase`
- **Nav links**: `text-sm font-semibold`
- **Prices**: `text-4xl font-extrabold`

### Heading Scale

| Level | Size                                      |
| ----- | ----------------------------------------- |
| h1    | `text-4xl` / `text-5xl` / `text-6xl`     |
| h2    | `text-3xl` / `text-4xl` / `text-5xl`     |
| h3    | `text-xl` / `text-2xl`                   |
| h4    | `text-base` / `text-sm font-extrabold`    |

## Spacing

- **Section padding**: `py-20 md:py-28` or `py-24`
- **Container**: `max-w-7xl mx-auto px-6 sm:px-8 lg:px-12`
- **Card padding**: `p-6` or `p-8`
- **Grid gaps**: `gap-6` or `gap-8`
- **Section-to-section spacing**: `gap-12 lg:gap-16` between columns

## Borders & Radius

- **Card radius**: `rounded-2xl` or `rounded-3xl`
- **Button radius**: `rounded-full`
- **Icon containers**: `rounded-xl` or `rounded-2xl`
- **Input fields**: `rounded-lg` or `rounded-xl`
- **Border width**: `border` (1px) or `border-2`, `border-4` for emphasis
- **Border color**: `border-kucho-forest/10` or `border-kucho-forest/15` — never full opacity borders

## Shadows — NOT ALLOWED

**Do not use `shadow`, `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-xl`, or any `drop-shadow` classes.** No exceptions.

Use borders and background color contrast instead to create depth:

- Card distinction: `border border-kucho-forest/5` or `border border-kucho-forest/10`
- Section separation: `bg-kucho-light` vs `bg-white` alternation
- Interactive state: `hover:border-kucho-forest` or `hover:-translate-y-2` instead of `hover:shadow`

## Interactive States

| State     | Pattern                                              |
| --------- | ---------------------------------------------------- |
| Button    | `bg-kucho-forest text-white` on teal bg              |
| Button    | `bg-amber-400 text-white` on accent bg               |
| Hover     | `hover:bg-amber-500`, `hover:scale-105`              |
| Active    | `active:scale-95`                                    |
| Link      | `hover:text-amber-400` or `hover:text-kucho-forest`  |
| Card      | `hover:-translate-y-2` + border change               |
| Focus     | `focus:outline-none focus:ring-2 focus:ring-kucho-forest` |

## Component Patterns

### Section Header Pattern
```html
<span className="inline-block px-3 py-1 bg-kucho-forest/10 rounded-md text-black text-xs font-bold tracking-wider mb-4">
  SECTION LABEL
</span>
<h2 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight mb-6">
  Section heading text
</h2>
```

### Card Pattern
```html
<div className="bg-kucho-light rounded-3xl p-8 border border-kucho-forest/5 transition-all duration-300 hover:-translate-y-2">
  ...
</div>
```

### Button Patterns
| Style              | Classes                                                                        |
| ------------------ | ------------------------------------------------------------------------------ |
| Primary (teal)     | `bg-kucho-forest text-white rounded-full px-8 py-3 font-bold`                  |
| Primary (accent)   | `bg-amber-400 text-white rounded-full px-8 py-3 font-bold`                     |
| Outline            | `border-2 border-kucho-forest/10 text-kucho-forest rounded-full`               |
| White on dark      | `bg-white text-black rounded-full`                                             |

### Icon Container
```html
<div className="w-12 h-12 bg-kucho-forest/10 rounded-xl flex items-center justify-center text-kucho-forest">
  <Icon />
</div>
```

### Nav Link with Underline Animation
```html
<a className="hover:text-kucho-forest transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-kucho-forest after:transition-all hover:after:w-full">
  Link Text
</a>
```

## Layout

- **Header**: `sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-kucho-forest/10`
- **Hero**: Full-viewport with gradient background `bg-gradient-to-b from-white via-kucho-light to-white`
- **Sections**: Alternate `bg-white` and `bg-kucho-light` for visual separation
- **Dark sections**: `bg-kucho-forest` or `bg-kucho-dark` with white text

## Motion

- Default transition: `transition-all duration-300`
- Card hover lift: `hover:-translate-y-2`
- Button scale: `hover:scale-105 active:scale-95`
- Fade-in animation: `animate-fade-in-up` (defined in globals.css)
- Nav underline: `transition-all hover:after:w-full`

## Responsive Breakpoints

| Prefix | Min Width | Target             |
| ------ | --------- | ------------------ |
| `sm`   | 40rem     | Tablet             |
| `md`   | 48rem     | Small desktop      |
| `lg`   | 64rem     | Desktop            |

Mobile-first: all base classes target mobile, breakpoint classes override upward.
