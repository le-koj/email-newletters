# Email Newsletters

A modular email template system for building client newsletters and campaigns. The repo supports multiple authoring approaches:

- **HTML templates** (`email-templates/`) — hand-built, table-based layouts with inline CSS and Outlook VML
- **MJML + custom components** (`mjml-emails/`) — componentized MJML with a Gulp build pipeline (in progress: Lunara campaign)
- **React Email** (`emails/`) — React components with a local preview server

All approaches target the same constraints: table layouts where needed, inline CSS, ~600px max width, and tested rendering in major clients.

## Directory Structure

```
.
├── email-templates/              # Client HTML campaigns & shared snippets
│   ├── clients/{client-id}/
│   │   ├── config/brand-settings.json
│   │   ├── components/           # headers, footers, content blocks
│   │   ├── campaigns/{name}/index.html
│   │   └── assets/
│   ├── shared-components/
│   └── assets/css/
├── mjml-emails/                  # MJML sources & custom components
│   ├── index.mjml                # Root MJML entry (simple/starter)
│   └── mjml-component-boilerplate/
│       ├── components/           # Custom MJML components (source)
│       ├── lunara-images/        # Lunara campaign assets (PNG)
│       ├── index.mjml            # Lunara email assembly
│       ├── gulpfile.babel.js     # Compile components → HTML
│       ├── lib/                  # Babel output (gitignored)
│       └── index.html            # Compiled preview (gitignored)
├── emails/                       # React Email templates (.tsx)
├── package.json                  # Root deps (React Email, MJML 5)
└── .gitignore
```

## MJML Custom Components

Custom components live in `mjml-emails/mjml-component-boilerplate/`. They are written in JavaScript (extending `mjml-core`’s `BodyComponent`), compiled with Babel into `lib/`, registered at build time, and used in `index.mjml` like native MJML tags.

### Lunara campaign (in progress)

| Component | Tag | Status |
|-----------|-----|--------|
| Brand header | `<mj-lunara-header />` | Done |
| Hero | `<mj-lunara-hero />` | Done |
| Feature split | `<mj-lunara-feature />` | Done |
| Benefits grid | `<mj-lunara-benefits />` | Planned |
| Footer | `<mj-lunara-footer />` | Planned |

Example assembly (`mjml-emails/mjml-component-boilerplate/index.mjml`):

```xml
<mjml>
  <mj-head>
    <mj-breakpoint width="480px" />
    <mj-font name="Inter" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" />
    <mj-attributes>
      <mj-all font-family="Inter, Helvetica, Arial, sans-serif" />
      <mj-body background-color="#000000" width="600px" />
    </mj-attributes>
  </mj-head>
  <mj-body>
    <mj-lunara-header />
    <mj-lunara-hero />
  </mj-body>
</mjml>
```

Boilerplate examples (`MjBasicComponent`, `MjImageText`, `MjLayout`) remain in `components/` for reference.

### MJML workflow

From the boilerplate directory:

```bash
cd mjml-emails/mjml-component-boilerplate
npm install
npm run build    # compile components + index.mjml → index.html
npm start        # watch components/ and index.mjml, rebuild on change
```

Open `index.html` in a browser to preview. Paths are relative to that folder, so run the preview from `mjml-component-boilerplate/` (or use hosted image URLs in production).

**What gets committed**

| Track | Ignore |
|-------|--------|
| `components/*.js`, `index.mjml`, `lunara-images/`, config files | `node_modules/`, `lib/`, `index.html` |

Gulp auto-registers every file in `components/`; no manual registration step is required.

**Images**

- Use **PNG** for logos and icons in email (not SVG) for client compatibility.
- Local dev: paths like `lunara-images/lunara-banner.png`
- Production: replace with CDN/ESP-hosted URLs

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
- **Media queries** — Supported in Apple Mail and some clients; Lunara hero uses `headStyle` + `<mj-breakpoint />` for mobile

## Previewing & Testing

| Approach | Preview |
|----------|---------|
| HTML templates | Open `index.html` in a browser |
| MJML | Build `index.html` in `mjml-component-boilerplate/`, then open in a browser |
| React Email | `npm run email:dev` |

For send-ready QA, use [Litmus](https://www.litmus.com/) or [Email on Acid](https://www.emailonacid.com/), or your ESP’s preview/send-test tools.
