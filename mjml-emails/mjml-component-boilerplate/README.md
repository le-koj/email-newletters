# mjml-component-boilerplate

Custom [MJML](https://mjml.io/) 5 components and campaign assemblies for this repo.

## Getting started

1. `npm install` in this directory
2. Add a component under `components/` (extend `BodyComponent` from `mjml-core`)
3. Use it in a top-level `*.mjml` file (e.g. `index.mjml`, `luma.mjml`)
4. `npm run build` — Babel compiles `components/` → `lib/`, registers every component, compiles all `*.mjml` → matching `.html`
5. `npm start` — watch `components/**/*.js` and `*.mjml`, rebuild on change

Open the generated HTML in a browser from this folder so relative image paths resolve.

This project uses **MJML 5** (`mjml@^5.3.0`, `mjml-core@^5.3.0`). The Gulp pipeline calls `await mjml2html(...)` because compilation is async in MJML 5.

Tutorial: [Creating your own MJML component](https://medium.com/mjml-making-responsive-email-easy/tutorial-creating-your-own-component-with-mjml-4-1c0e84e97b36)

## Campaign assemblies

| File | Output | Components |
|------|--------|------------|
| `index.mjml` | `index.html` | Lunara (`mj-lunara-*`) |
| `northbridge.mjml` | `northbridge.html` | Northbridge Brief (`mj-northbridge-*`) |
| `luma.mjml` | `luma.html` | Luma Botanics (`mj-luma-*`) |
| `astravance.mjml` | `astravance.html` | Astravance (`mj-astravance-*`) |

See the [repo root README](../../README.md) for full component tables and design notes.

### Luma Botanics (`luma.mjml`)

| Component | Tag | Description |
|-----------|-----|-------------|
| Header | `<mj-luma-header />` | Logo, nav links, account + cart icons |
| Hero | `<mj-luma-hero />` | Full-width background image with eyebrow, headline, body, CTA |
| Trust bar | `<mj-luma-trust-bar />` | Four-column icon + copy value props |
| Essentials | `<mj-luma-essentials />` | Two product images + eyebrow, heading, body, CTA |
| Favorites | `<mj-luma-favorites />` | Three-column product grid |
| Ritual | `<mj-luma-ritual />` | Split image + copy block with CTA |

Assets: `resources/images/luma/` (logo, product photos) and `resources/images/luma/icons/`.

Design tokens: white `#FFFFFF`, cream `#F5F2EB`, terracotta `#C08070` / `#B89585`, Inter sans-serif. Mobile breakpoint: `480px`.

### Astravance (`astravance.mjml`)

| Component | Tag | Description |
|-----------|-----|-------------|
| Header | `<mj-astravance-header />` | Banner background with centered logo |
| Updates | `<mj-astravance-updates />` | Three stacked image + copy rows with links |
| Intro | `<mj-astravance-intro />` | Sidebar with contact links + CEO letter |
| Info | `<mj-astravance-info />` | Three-column highlights grid and company footer |

Assets: `resources/images/astravance/`.

Design tokens: light gray `#EFEFEF` background, Helvetica/Arial sans-serif. Mobile breakpoint: `480px`.

## Registration

Gulp auto-registers every file in `components/` after Babel compile. **Do not** edit `gulpfile.babel.js` when adding a new component.

## Git

Committed: `components/*.js`, `*.mjml`, `lunara-images/`, `resources/images/`

Ignored: `node_modules/`, `lib/`, `index.html`, `northbridge.html`, `luma.html`, `astravance.html`

## Using components in Node.js

```js
import mjml2html from 'mjml'
import { registerComponent } from 'mjml-core'
import MyComponent from './lib/MyComponent'

registerComponent(MyComponent)

const { html, errors } = await mjml2html(mjmlString)
```

## Later use of your component

### With the MJML CLI

Using custom components with the stock CLI is not supported out of the box; use this Gulp pipeline or register components in Node as above.
