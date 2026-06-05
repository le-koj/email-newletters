# mjml-component-boilerplate

Custom [MJML](https://mjml.io/) components and campaign assemblies for this repo.

## Getting started

1. `npm install` in this directory
2. Add a component under `components/` (extend `BodyComponent` from `mjml-core`)
3. Use it in a top-level `*.mjml` file (e.g. `index.mjml`, `northbridge.mjml`)
4. `npm run build` — Babel compiles `components/` → `lib/`, registers every component, compiles all `*.mjml` → matching `.html`
5. `npm start` — watch `components/**/*.js` and `*.mjml`, rebuild on change

Open the generated HTML in a browser from this folder so relative image paths resolve.

Tutorial: [Creating your own MJML component](https://medium.com/mjml-making-responsive-email-easy/tutorial-creating-your-own-component-with-mjml-4-1c0e84e97b36)

## Campaign assemblies

| File | Output | Components |
|------|--------|------------|
| `index.mjml` | `index.html` | Lunara (`mj-lunara-*`) |
| `northbridge.mjml` | `northbridge.html` | Northbridge Brief (`mj-northbridge-*`) |

See the [repo root README](../../README.md) for component tables and design notes.

## Example components

Reference implementations in `components/` (study in this order):

- `MjBasicComponent` — minimal custom tag
- `MjImageText` — image + text layout
- `MjLayout` — nested MJML structure

## Registration

Gulp auto-registers every file in `components/` after Babel compile. **Do not** edit `gulpfile.babel.js` when adding a new component.

## Git

Committed: `components/*.js`, `*.mjml`, `lunara-images/`, `resources/images/`

Ignored: `node_modules/`, `lib/`, `index.html`, `northbridge.html`

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
