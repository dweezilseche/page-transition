SVG sprite usage

Files:

- svg-sprite.svg — contains a few example symbols: `icon-menu`, `icon-close`, `icon-arrow-right`.

How to use (external file reference - good for Vite `public`):

Inline in HTML where you want the icon:

<svg class="icon icon--menu" width="24" height="24" aria-hidden="true">
  <use href="/icons/svg-sprite.svg#icon-menu"></use>
</svg>

Notes:

- With Vite the `public` folder is served from the site root, so the sprite is available at `/icons/svg-sprite.svg`.
- Use `currentColor` in the sprite shapes so the icon inherits the text color; style with `.icon { color: #222 }`.

Accessibility:

- If the icon conveys information, don't set `aria-hidden="true"` — instead provide a <title> or add `aria-label` to the <svg>.

Inlining the sprite (optional):

- For best compatibility with <use> in some older browsers, you can inline the entire sprite content directly into your `index.html` (paste the <svg>... symbols ...</svg> block at top of body). This allows `#id` references without external file requests.

Adding icons:

- Add new <symbol id="icon-yourname" viewBox="...">...</symbol> entries to `svg-sprite.svg`.
- Prefer simple path/shape elements and `stroke="currentColor"` or `fill="currentColor"` so icons are easily styled.
