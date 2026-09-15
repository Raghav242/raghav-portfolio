/**
 * Resolves a path in `public/` against the deployed base URL.
 *
 * Vite rewrites asset paths it sees in imports, but files referenced as plain
 * strings in `content.js` are invisible to it. On GitHub Pages the site is
 * served from a subfolder, so a bare `/profile1.jpg` would resolve against the
 * domain root and 404. Wrap those paths in this helper instead.
 *
 * BASE_URL is `/` in dev and `/raghav-portfolio/` in the production build.
 */
export function asset(path) {
  if (!path) return path
  if (/^(https?:)?\/\//.test(path)) return path
  return import.meta.env.BASE_URL.replace(/\/$/, '') + path
}
