# Developing

A responsive, minimalist personal portfolio built with React and Vite. Light mode by
default with a dark mode toggle that remembers your choice.

## Running it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production bundle in dist/
npm run preview  # serve the built bundle locally
```

## Where things live

| Path | What it is |
| --- | --- |
| `src/data/content.js` | **All site copy** — profile, experience, projects, skills, links |
| `src/data/brandIcons.js` | Auto-generated skill logos — don't edit by hand |
| `src/components/` | One `.jsx` + `.css` pair per section |
| `src/hooks/` | Theme persistence, scroll-spy nav, scroll-reveal, media queries |
| `src/index.css` | Design tokens (colors, spacing, radii) and shared primitives |
| `scripts/` | Brand-icon generator |
| `public/` | Profile photo, company logos, resume PDF, favicon |

To change anything textual, edit `src/data/content.js` — no component needs touching.

## Visitor count

`/count/` is an unlisted dashboard showing unique visitors and total visits. Nothing on the
site links to it and it's marked `noindex`, but it isn't password-protected — anyone with the
URL can see the numbers.

GitHub Pages can't run a backend, so `src/lib/visits.js` stores the counters in
[Abacus](https://abacus.jasoncameron.dev), a free keyless counter API. A visit counts once per
browser session; a visitor counts once per browser. Neither the dev server nor a build opened on
`localhost` (`npm run preview`) records visits, and opening the dashboard doesn't count as one.

To zero both counters:

```bash
npm run count:reset
```

This uses the Abacus admin keys in `.env.local` (gitignored). Abacus shows those keys only
once, so keep a copy somewhere safe — without them the counters can't be reset, only replaced
by changing `NAMESPACE` in `src/lib/visits.js`.

## Skill logos

Each entry in `skills` has a `slug` naming a [Simple Icons](https://simpleicons.org) logo.
After adding or changing a slug, run:

```bash
npm run icons
```

That regenerates `src/data/brandIcons.js` with only the logos actually in use, and prints a
warning for any slug it couldn't resolve. The generator also derives a per-theme color for
each logo, so near-black marks stay visible in dark mode and pale ones stay visible in light.

A `slug: null` entry renders a colored monogram tile instead, using its `hex`. That's the
escape hatch for names Simple Icons doesn't carry — Java, AWS, Azure, Oracle, Pinecone, and
LlamaIndex among them, mostly trademark removals. An explicit `hex` also overrides a logo's
own color, which is how Java borrows the OpenJDK mark while keeping Java orange.

## Company logos

Each `experience` entry points at a file in `public/logos/`. Swap in a better asset any time
— just keep the path in `content.js` in sync. If the file is missing or fails to load, the
card falls back to the company initials automatically, so nothing ever renders broken.

## Experience section

It renders two different layouts from the same data, switched by `useMediaQuery`:

- **Desktop (≥901px)** — a company list beside the selected role's detail, so the section
  costs the height of one role rather than all four.
- **Mobile** — an accordion. Collapsing a card clips it to a faded preview instead of hiding
  the description outright.

`metrics` is optional; entries without it simply skip the stat row.

## Scroll reveal

`useReveal` marks elements with a `data-revealed` attribute rather than a class. This is
deliberate: React rewrites `className` wholesale whenever a component's computed value
changes, which would strip an externally-added class from any element with a dynamic
className. React never touches attributes it doesn't manage, so the flag survives re-renders.

## Theming

Colors live as CSS custom properties in `src/index.css`: `:root` for light,
`[data-theme='dark']` for dark. Change `--accent` in both blocks to re-skin the whole site.

Dark is the default for every first-time visitor — the OS `prefers-color-scheme` setting is
deliberately ignored. Light mode is opt-in via the toggle, and that choice is remembered in
`localStorage` under `portfolio-theme`. An inline script in `index.html` applies a stored
light preference before first paint so returning visitors never get a flash of dark.

To follow the OS preference instead, restore the `matchMedia` check in
`src/hooks/useTheme.js` and in that inline script — both have to agree, or the page will
flash the wrong theme on load.

## Before you deploy

1. **Fill in the placeholder projects.** Three cards carry `placeholder: true`, which renders
   a dashed border and an "In Progress" badge. Replace the copy and drop the flag to promote
   them.
2. **Add project links.** Each entry in `projects` has `links: { github, demo }` set to
   `null`; fill them in and the icon buttons appear automatically.
3. **Refresh the resume.** `public/Raghavendra-Kulkarni-Resume.pdf` is what the download
   buttons serve — replace the file whenever your resume changes.
4. **If you swap the photo.** `public/profile1.jpg` is the live headshot. A non-square
   replacement may need an `object-position` tweak in `src/components/Hero.css`.

## Deploying

The build is fully static, so any host works. For **Vercel** or **Netlify**, point the
project at this repo with build command `npm run build` and output directory `dist`.

For **GitHub Pages**, add a `base` to `vite.config.js` matching your repo name:

```js
export default defineConfig({ plugins: [react()], base: '/your-repo-name/' })
```
