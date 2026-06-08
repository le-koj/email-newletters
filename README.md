# Email Newsletters

A modular email template system for building client newsletters and campaigns. The repo supports multiple authoring approaches:

- **HTML templates** (`email-templates/`) — hand-built, table-based layouts with inline CSS and Outlook VML
- **MJML + custom components** (`mjml-emails/`) — componentized MJML with a Gulp build pipeline (Lunara, Northbridge Brief, Luma Botanics, and Astravance campaigns)
- **React Email** (`emails/`) — React components with a local preview server

All approaches target the same constraints: table layouts where needed, inline CSS, ~600px max width, and tested rendering in major clients.

## Directory Structure

```
.
├── email-templates/              # Client HTML campaigns & shared snippets
│   ├── clients/{client-id}/
│   │   ├── config/brand-settings.json
│   │   ├── components/           # headers, footers, content blocks
│   │   ├── campaigns/{name}/     # kb-capital-group campaign HTML
│   │   ├── templates/            # client-specific reusable layouts
│   │   └── assets/
│   ├── templates/                # generic starter layouts (newsletter, promo, event, etc.)
│   ├── shared-components/        # buttons, CTAs, dividers, grids, social blocks
│   ├── staging-experimental/     # prototypes, tests, archived drafts
│   └── assets/                   # css, fonts, images
├── mjml-emails/                  # MJML sources & custom components
│   ├── index.mjml                # stock MJML hello-world sample
│   └── mjml-component-boilerplate/
│       ├── components/           # Custom MJML components (source)
│       ├── resources/images/
│       │   ├── astravance/       # Astravance assets
│       │   ├── luma/             # Luma Botanics assets & icons
│       │   └── northbridge/      # Northbridge assets & icons
│       ├── lunara-images/        # Lunara campaign assets (PNG)
│       ├── index.mjml            # Lunara email assembly
│       ├── northbridge.mjml      # Northbridge Brief email assembly
│       ├── luma.mjml             # Luma Botanics email assembly
│       ├── astravance.mjml       # Astravance email assembly
│       ├── gulpfile.babel.js     # Compile components + all *.mjml → HTML
│       ├── lib/                  # Babel output (gitignored)
│       ├── index.html            # Lunara preview (gitignored)
│       ├── northbridge.html      # Northbridge preview (gitignored)
│       ├── luma.html             # Luma preview (gitignored)
│       └── astravance.html       # Astravance preview (gitignored)
├── emails/                       # React Email templates (.tsx)
├── .devcontainer/                # Dev container config
├── package.json                  # Root deps (React Email, MJML 5)
└── .gitignore
```

## MJML Custom Components

Custom components live in `mjml-emails/mjml-component-boilerplate/`. They are written in JavaScript (extending `mjml-core`’s `BodyComponent`), compiled with Babel into `lib/`, registered at build time, and used in top-level `*.mjml` files like native MJML tags. The boilerplate runs **MJML 5** (`mjml@^5.3.0`, `mjml-core@^5.3.0`); compilation is async (`await mjml2html(...)` in the Gulp pipeline).

### Lunara campaign

| Component | Tag | Description |
|-----------|-----|-------------|
| Brand header | `<mj-lunara-header />` | Centered logo on dark background |
| Hero | `<mj-lunara-hero />` | Full-width banner image |
| Feature split | `<mj-lunara-feature />` | Image + copy split layout |
| Benefits grid | `<mj-lunara-benefits />` | Three-column benefits with icons |
| Footer | `<mj-lunara-footer />` | Social links, legal, unsubscribe |

Assembly: `mjml-emails/mjml-component-boilerplate/index.mjml` → `index.html`

### Northbridge Brief campaign

| Component | Tag | Description |
|-----------|-----|-------------|
| Header | `<mj-northbridge-header />` | Preheader, logo/brand, weekly digest + issue date |
| Hero | `<mj-northbridge-hero />` | 50/50 navy copy + conference room photo |
| Highlights | `<mj-northbridge-highlights />` | Three-column events, resource, team notes |
| News | `<mj-northbridge-news />` | Alternating image/content article rows |
| Conversation | `<mj-northbridge-conversation />` | Dark navy podcast / interview block |
| Footer | `<mj-northbridge-footer />` | Logo, contact, social, utility links |

Assembly: `mjml-emails/mjml-component-boilerplate/northbridge.mjml` → `northbridge.html` (includes a placeholder content section between hero and highlights for future blocks).

Design tokens: white background, navy `#0C1C36`, accent blue `#1D4ED8` / `#5B8FE0`, Georgia serif headlines, Helvetica/Arial body. Mobile breakpoint: `480px` via `<mj-breakpoint />`.

Example assembly (`northbridge.mjml`):

```xml
<mjml>
  <mj-head>
    <mj-breakpoint width="480px" />
    <mj-attributes>
      <mj-all font-family="Helvetica, Arial, sans-serif" />
      <mj-body background-color="#FFFFFF" width="600px" />
    </mj-attributes>
  </mj-head>
  <mj-body>
    <mj-northbridge-header />
    <mj-northbridge-hero />
    <mj-northbridge-highlights />
    <mj-northbridge-news />
    <mj-northbridge-conversation />
    <mj-northbridge-footer />
  </mj-body>
</mjml>
```

### Luma Botanics campaign

| Component | Tag | Description |
|-----------|-----|-------------|
| Header | `<mj-luma-header />` | Logo, nav links (Shop, Skin, Bundles, Journal), account + cart icons |
| Hero | `<mj-luma-hero />` | Full-width background image with eyebrow, headline, body copy, and CTA |
| Trust bar | `<mj-luma-trust-bar />` | Four-column value props with icon-left layout |
| Essentials | `<mj-luma-essentials />` | Two product images + eyebrow, heading, body copy, pill CTA |
| Favorites | `<mj-luma-favorites />` | Three-column product grid with images, titles, and descriptions |
| Ritual | `<mj-luma-ritual />` | Split image + copy block with eyebrow, heading, body, and CTA |

Assembly: `mjml-emails/mjml-component-boilerplate/luma.mjml` → `luma.html`

Design tokens: white `#FFFFFF`, cream `#F5F2EB`, terracotta `#C08070` / `#B89585`, Inter sans-serif. Assets in `resources/images/luma/`. Mobile breakpoint: `480px`.

Example assembly (`luma.mjml`):

```xml
<mjml>
  <mj-head>
    <mj-breakpoint width="480px" />
    <mj-font
      name="Inter"
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
    />
    <mj-attributes>
      <mj-all font-family="Inter, Helvetica, Arial, sans-serif" />
      <mj-body background-color="#FFFFFF" width="600px" />
    </mj-attributes>
  </mj-head>
  <mj-body>
    <mj-luma-header />
    <mj-luma-hero />
    <mj-luma-trust-bar />
    <mj-luma-essentials />
    <mj-luma-favorites />
    <mj-luma-ritual />
  </mj-body>
</mjml>
```

### Astravance campaign

| Component | Tag | Description |
|-----------|-----|-------------|
| Header | `<mj-astravance-header />` | Banner background with centered logo |
| Updates | `<mj-astravance-updates />` | Three stacked image + copy rows with links |
| Intro | `<mj-astravance-intro />` | Sidebar with contact links + CEO letter |
| Info | `<mj-astravance-info />` | Three-column highlights grid and company footer |

Assembly: `mjml-emails/mjml-component-boilerplate/astravance.mjml` → `astravance.html`

Design tokens: light gray `#EFEFEF` background, Helvetica/Arial sans-serif. Assets in `resources/images/astravance/`. Mobile breakpoint: `480px`.

Example assembly (`astravance.mjml`):

```xml
<mjml>
  <mj-head>
    <mj-breakpoint width="480px" />
    <mj-attributes>
      <mj-all font-family="Helvetica, Arial, sans-serif" />
      <mj-body background-color="#EFEFEF" width="600px" />
    </mj-attributes>
  </mj-head>
  <mj-body>
    <mj-astravance-header />
    <mj-astravance-updates />
    <mj-astravance-intro />
    <mj-astravance-info />
  </mj-body>
</mjml>
```

### MJML workflow

From the boilerplate directory:

```bash
cd mjml-emails/mjml-component-boilerplate
npm install
npm run build    # compile components + every *.mjml → matching .html
npm start        # watch components/ and *.mjml, rebuild on change
```

Open `index.html` (Lunara), `northbridge.html` (Northbridge), `luma.html` (Luma), or `astravance.html` (Astravance) in a browser to preview. Paths are relative to that folder, so run the preview from `mjml-component-boilerplate/` (or use hosted image URLs in production).

**What gets committed**

| Track | Ignore |
|-------|--------|
| `components/*.js`, `*.mjml`, `lunara-images/`, `resources/images/`, config files | `node_modules/`, `lib/`, `index.html`, `northbridge.html`, `luma.html`, `astravance.html` |

Gulp auto-registers every file in `components/`; no manual registration step is required.

**Images**

- Use **PNG** for logos and icons in email (not SVG) for client compatibility.
- Local dev: `lunara-images/…`, `resources/images/luma/…`, `resources/images/northbridge/…`, or `resources/images/astravance/…`
- Production: replace with CDN/ESP-hosted URLs
- Photo blocks use CSS background images (works in most clients; Outlook Windows may need `mj-image` + VML fallbacks)

Tutorial: [Creating your own MJML component](https://medium.com/mjml-making-responsive-email-easy/tutorial-creating-your-own-component-with-mjml-4-1c0e84e97b36)

> **Note:** If `mjml-component-boilerplate` was cloned with its own `.git` directory, remove it before adding this folder to the monorepo: `rm -rf mjml-emails/mjml-component-boilerplate/.git`

## React Email

React Email templates are in `emails/`. From the repo root:

```bash
npm install
npm run email:dev
```

Generated `.react-email/` and `out/` directories are gitignored.

## Client Configuration (HTML templates)

Each client under `email-templates/clients/{client-id}/` has a `config/brand-settings.json` that defines:

- **colors** — Primary, secondary, text, backgrounds, accents
- **typography** — Font stacks and font-size scale (body, headings, footer)
- **contact** — Phone, email, website, address
- **assets** — Logo path and other asset URLs

Example:

```json
{
  "clientId": "kb-capital-group",
  "colors": {
    "primary": "#00aeef",
    "secondary": "#033047"
  },
  "typography": {
    "fontSize": {
      "body": "16px",
      "sectionHeading": "20px"
    }
  }
}
```

## Shared Components (HTML)

Reusable snippets live in `email-templates/shared-components/`. They use placeholders you replace before send or via your ESP.

### Buttons

| File | Description | Variables |
|------|-------------|-----------|
| `kb-capital-cta.html` | Navy pill-style CTA | `{{URL}}`, `{{BUTTON_TEXT}}`, `{{BACKGROUND_COLOR}}` |
| `kb-capital-cta-gold.html` | Gold rectangular CTA | `{{URL}}`, `{{BUTTON_TEXT}}` |

## Creating a New HTML Campaign

1. Create a folder under `email-templates/clients/{client-id}/campaigns/{campaign-name}/`
2. Add `index.html` with the full email markup
3. Use the client `brand-settings.json` for colors, fonts, and contact info
4. Reuse headers/footers from `clients/{client-id}/components/` or shared components where applicable

### Template Variables

| Variable | Purpose |
|----------|---------|
| `{{UNSUBSCRIBE_URL}}` | ESP merge tag for the unsubscribe link |
| `{{URL}}` | Button or link destination (in shared components) |
| `{{BUTTON_TEXT}}` | Button label (in shared components) |

### Logo and Images

- **Local preview:** relative paths to assets
- **Production:** hosted URLs from your ESP or CDN

## Email Development Guidelines

- **Tables** — Use `<table>` for layout in HTML templates; MJML generates tables for you
- **Inline CSS** — Required for Gmail and many clients (MJML inlines automatically)
- **MSO conditionals** — Use `<!--[if mso]>` for Outlook-specific markup (e.g. VML buttons)
- **Width** — ~600px content width (MJML `mj-body` default)
- **Media queries** — Supported in Apple Mail and some clients; campaign components use `componentHeadStyle` + `<mj-breakpoint width="480px" />` for mobile

## Previewing & Testing

| Approach | Preview |
|----------|---------|
| HTML templates | Open `index.html` in a browser |
| MJML | Build in `mjml-component-boilerplate/`, then open `index.html`, `northbridge.html`, `luma.html`, or `astravance.html` |
| React Email | `npm run email:dev` |

For send-ready QA, use [Litmus](https://www.litmus.com/) or [Email on Acid](https://www.emailonacid.com/), or your ESP’s preview/send-test tools.
