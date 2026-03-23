# Email Newsletters

A modular HTML email template system for building client newsletters and campaigns. Templates use table-based layouts, inline CSS, and Outlook VML for cross-client compatibility.

## Directory Structure

```
email-templates/
├── clients/                    # Client-specific content
│   └── {client-id}/
│       ├── config/
│       │   └── brand-settings.json   # Colors, typography, contact info
│       ├── components/               # Reusable client components
│       │   ├── headers/
│       │   └── footers/
│       ├── campaigns/                # Full newsletter/campaign HTML
│       │   └── {campaign-name}/
│       │       └── index.html
│       └── assets/                   # Logos, images
│           └── logos/
├── shared-components/           # Reusable across clients
│   └── buttons/
├── templates/                  # Generic starter templates
└── assets/
    └── css/
```

## Client Configuration

Each client has a `config/brand-settings.json` that defines:

- **colors** — Primary, secondary, text, backgrounds, accents
- **typography** — Font stacks and font-size scale (body, headings, footer)
- **contact** — Phone, email, website, address
- **assets** — Logo path and other asset URLs

Use these values when building client campaigns for consistency. Example:

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

## Shared Components

Reusable components live in `shared-components/`. They use placeholder variables that you replace before inclusion or send.

### Buttons

| File | Description | Variables |
|------|-------------|-----------|
| `kb-capital-cta.html` | Navy pill-style CTA | `{{URL}}`, `{{BUTTON_TEXT}}`, `{{BACKGROUND_COLOR}}` |
| `kb-capital-cta-gold.html` | Gold rectangular CTA | `{{URL}}`, `{{BUTTON_TEXT}}` |

Include the component content in your template and replace variables (e.g. with your build tool or ESP merge tags) before sending.

## Creating a New Campaign

1. Create a folder under `clients/{client-id}/campaigns/{campaign-name}/`
2. Add `index.html` with the full email markup
3. Use the client `brand-settings.json` for colors, fonts, and contact info
4. Reuse headers/footers from `clients/{client-id}/components/` or shared components where applicable

### Template Variables

Replace these before sending:

| Variable | Purpose |
|----------|---------|
| `{{UNSUBSCRIBE_URL}}` | ESP merge tag for the unsubscribe link |
| `{{URL}}` | Button or link destination (in shared components) |
| `{{BUTTON_TEXT}}` | Button label (in shared components) |

### Logo and Images

- Local preview: Use `file://` paths or relative paths to assets
- Production: Replace with hosted URLs (e.g. from your ESP or CDN)

## Email Development Guidelines

- **Tables** — Use `<table>` for layout; avoid flexbox and grid
- **Inline CSS** — All styles must be inline for Gmail and many clients
- **MSO conditionals** — Use `<!--[if mso]>` blocks for Outlook-specific markup (e.g. VML buttons)
- **Width** — Max content width ~680px for compatibility
- **Media queries** — Supported in Apple Mail and some clients; use for mobile stacking

## Previewing

Open `index.html` directly in a browser for a quick preview. For more accurate testing, use:

- [Litmus](https://www.litmus.com/) or [Email on Acid](https://www.emailonacid.com/) for client previews
- Your ESP’s preview/send-test features


