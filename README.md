# Mohamed Ali Magri — Portfolio

Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion + Lucide icons.

## 1. Install dependencies

```bash
npm install
```

## 2. Run locally

```bash
npm run dev
```

Open http://localhost:3000

## 3. Project screenshots

Placeholder SVGs live in `public/projects/`:

- `whatsapp-order.svg`
- `cv-extractor.svg`
- `price-tracker.svg`
- `telegram-expense.svg`

Replace each with a real screenshot (PNG or JPG works fine) using the **same
filename**, or update the `image` path per project in `data/projects.ts`. If
you switch to PNG/JPG, you can also remove `images.unoptimized` in
`next.config.mjs` to get Next.js image optimization back.

## 4. Project GitHub links

Edit `repoUrl` for each project in `data/projects.ts` — currently placeholders
pointing at your GitHub profile with a `// TODO` comment.

## 5. Personal information

- Name, headline, subheadline: `components/Hero.tsx`
- About text: `components/About.tsx`
- Email / phone: `components/Contact.tsx` and `components/Footer.tsx`
- GitHub / LinkedIn URLs: `components/Navbar.tsx`, `components/Hero.tsx`,
  `components/Contact.tsx`, `components/Footer.tsx`
- Tech stack groups: `data/stack.ts`
- Experience & education: `components/Experience.tsx`

## 6. Build for production

```bash
npm run build
npm run start
```

## Notes

- Dark theme only, tokens defined in `tailwind.config.ts`
  (`base`, `surface`, `line`, `ink`, `muted`, `signal`, `wire`).
- Fonts: Space Grotesk (headings), Inter (body), JetBrains Mono (data labels),
  loaded via `next/font/google` in `app/layout.tsx`.
- Reduced-motion, focus-visible states, and semantic landmarks are handled in
  `app/globals.css` and the section components.
