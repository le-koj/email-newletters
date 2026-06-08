import { BodyComponent } from 'mjml-core'

const svgIcon = (svg) => `data:image/svg+xml,${encodeURIComponent(svg)}`

const DEFAULT_LINKEDIN_ICON = svgIcon(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><rect x="3" y="3" width="18" height="18" rx="2" fill="none" stroke="#FFFFFF" stroke-width="1.5"/><path d="M8 10v6M8 8v.01M12 16v-4c0-1.1.9-2 2-2s2 .9 2 2v4" fill="none" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round"/></svg>',
)

const DEFAULT_WEBSITE_ICON = svgIcon(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><circle cx="12" cy="12" r="9" fill="none" stroke="#FFFFFF" stroke-width="1.5"/><path d="M3 12h18M12 3c2.5 2.8 4 6 4 9s-1.5 6.2-4 9M12 3c-2.5 2.8-4 6-4 9s1.5 6.2 4 9" fill="none" stroke="#FFFFFF" stroke-width="1.5"/></svg>',
)

const DEFAULT_EMAIL_ICON = svgIcon(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="#FFFFFF" stroke-width="1.5"/><path d="M3 7l9 6 9-6" fill="none" stroke="#FFFFFF" stroke-width="1.5"/></svg>',
)

export default class MjAstravanceIntro extends BodyComponent {
  static dependencies = {
    'mj-astravance-intro': [],
    'mj-body': ['mj-astravance-intro'],
    'mj-wrapper': ['mj-astravance-intro'],
  }

  static allowedAttributes = {
    'background-color': 'color',
    'sidebar-color': 'color',
    'sidebar-background-color': 'color',
    'sidebar-title-color': 'color',
    'content-color': 'color',
    'content-background-color': 'color',
    'sidebar-column-width': 'unit(px,%)',
    'content-column-width': 'unit(px,%)',
    'sidebar-title': 'string',
    'sidebar-title-font-size': 'unit(px)',
    'sidebar-link-font-size': 'unit(px)',
    'sidebar-inner-padding': 'unit(px){1,4}',
    'content-padding': 'unit(px){1,4}',
    'mobile-sidebar-padding': 'unit(px){1,4}',
    'mobile-content-padding': 'unit(px){1,4}',
    'icon-size': 'unit(px)',
    'linkedin-text': 'string',
    'linkedin-href': 'string',
    'linkedin-icon-src': 'string',
    'website-text': 'string',
    'website-href': 'string',
    'website-icon-src': 'string',
    'updates-text': 'string',
    'updates-href': 'string',
    'updates-icon-src': 'string',
    'ceo-title': 'string',
    'ceo-title-font-size': 'unit(px)',
    'ceo-body': 'string',
    'ceo-body-font-size': 'unit(px)',
    'ceo-thanks': 'string',
    'ceo-signature': 'string',
    'ceo-closing-font-size': 'unit(px)',
    padding: 'unit(px){1,4}',
    'wrapper-padding': 'unit(px){1,4}',
  }

  constructor(initialDatas = {}) {
    super(initialDatas)
    this.cssId = Math.floor(Math.random() * 10000) + 1
  }

  parseVerticalPadding(padding) {
    const parts = padding.trim().split(/\s+/)

    if (parts.length === 1) {
      return parts[0]
    }

    if (parts.length === 2) {
      return parts[0]
    }

    if (parts.length === 3) {
      return parts[0]
    }

    return parts[0]
  }

  componentHeadStyle = () => {
    const sidebarInnerPadding = this.getAttribute('sidebar-inner-padding')
    const contentPadding = this.getAttribute('content-padding')
    const mobileSidebarInnerPadding = this.getAttribute('mobile-sidebar-padding')
    const mobileContentPadding = this.getAttribute('mobile-content-padding')
    const bg = this.getAttribute('background-color')
    const sidebarBg = this.getAttribute('sidebar-background-color')
    const contentBg = this.getAttribute('content-background-color')
    const sidebarSelector = `.astravance-intro-sidebar-${this.cssId}`
    const contentSelector = `.astravance-intro-content-${this.cssId}`
    const sidebarOffsetY = this.parseVerticalPadding(contentPadding)
    const mobileSidebarOffsetY = this.parseVerticalPadding(mobileContentPadding)

    return `
      ${sidebarSelector} > table,
      ${sidebarSelector} > table > tbody > tr,
      ${sidebarSelector} > table > tbody > tr > td {
        height: 100% !important;
      }
      ${sidebarSelector} > table > tbody > tr > td {
        background-color: ${bg} !important;
        padding: ${sidebarOffsetY} 0 ${sidebarOffsetY} 24px !important;
      }
      ${sidebarSelector} .astravance-intro-sidebar-inner {
        background-color: ${sidebarBg} !important;
        padding: ${sidebarInnerPadding} !important;
        height: 100% !important;
        min-height: 100% !important;
        box-sizing: border-box !important;
      }
      ${contentSelector} > table > tbody > tr > td {
        background-color: ${contentBg} !important;
        padding: ${contentPadding} !important;
      }
      .astravance-intro-sidebar-title div,
      .astravance-intro-link-text a,
      .astravance-intro-ceo-title div,
      .astravance-intro-ceo-body div,
      .astravance-intro-ceo-thanks div,
      .astravance-intro-ceo-signature div {
        font-family: Helvetica, Arial, sans-serif !important;
      }
      @media only screen and (max-width:480px) {
        div.astravance-intro-section > table > tbody > tr > td {
          padding: 0 !important;
        }
        ${sidebarSelector},
        ${contentSelector} {
          width: 100% !important;
          max-width: 100% !important;
        }
        ${sidebarSelector} > table > tbody > tr > td {
          padding: ${mobileSidebarOffsetY} 0 ${mobileSidebarOffsetY} 20px !important;
        }
        ${sidebarSelector} .astravance-intro-sidebar-inner {
          padding: ${mobileSidebarInnerPadding} !important;
        }
        ${contentSelector} > table > tbody > tr > td {
          padding: ${mobileContentPadding} !important;
        }
        .astravance-intro-ceo-title div {
          font-size: 18px !important;
        }
      }
    `
  }

  static defaultAttributes = {
    'background-color': '#FFFFFF',
    'sidebar-color': '#FFFFFF',
    'sidebar-background-color': '#222222',
    'sidebar-title-color': '#FFFFFF',
    'content-color': '#222222',
    'content-background-color': '#FFFFFF',
    'sidebar-column-width': '38%',
    'content-column-width': '62%',
    'sidebar-title': 'Stay Connected',
    'sidebar-title-font-size': '16px',
    'sidebar-link-font-size': '13px',
    'sidebar-inner-padding': '24px 20px',
    'content-padding': '28px 32px',
    'mobile-sidebar-padding': '20px 20px',
    'mobile-content-padding': '24px 20px',
    'icon-size': '16px',
    'linkedin-text': 'LinkedIn',
    'linkedin-href': '#',
    'linkedin-icon-src': DEFAULT_LINKEDIN_ICON,
    'website-text': 'astravance.com',
    'website-href': '#',
    'website-icon-src': DEFAULT_WEBSITE_ICON,
    'updates-text': 'Mission Updates',
    'updates-href': '#',
    'updates-icon-src': DEFAULT_EMAIL_ICON,
    'ceo-title': 'Hello from our CEO',
    'ceo-title-font-size': '20px',
    'ceo-body':
      'Innovation, testing, and mission readiness\u2014these are the pillars that drive AstraVance Aerospace forward. This week, our teams achieved key milestones in propulsion testing and avionics development, bringing us closer to delivering reliable solutions for the missions that matter.',
    'ceo-body-font-size': '13px',
    'ceo-thanks': 'Thank you for being part of our journey.',
    'ceo-signature': '\u2013 Elena Marquez, CEO',
    'ceo-closing-font-size': '13px',
    padding: '0',
    'wrapper-padding': '0',
  }

  renderLinkRow(iconSrc, text, href, isLast) {
    const linkColor = this.getAttribute('sidebar-color')
    const linkSize = this.getAttribute('sidebar-link-font-size')
    const iconSize = this.getAttribute('icon-size')
    const marginBottom = isLast ? '0' : '14px'

    return `
      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="margin:0 0 ${marginBottom} 0;">
        <tr>
          <td style="padding:0 10px 0 0;vertical-align:middle;width:${iconSize};">
            <img src="${iconSrc}" width="${iconSize}" height="${iconSize}" alt="" style="display:block;border:0;" />
          </td>
          <td class="astravance-intro-link-text" style="padding:0;vertical-align:middle;">
            <a href="${href}" style="color:${linkColor};text-decoration:none;font-size:${linkSize};font-weight:400;font-family:Helvetica,Arial,sans-serif;">
              ${text}
            </a>
          </td>
        </tr>
      </table>
    `
  }

  renderSidebar() {
    const title = this.getAttribute('sidebar-title')
    const titleColor = this.getAttribute('sidebar-title-color')
    const titleSize = this.getAttribute('sidebar-title-font-size')
    const sidebarBg = this.getAttribute('sidebar-background-color')
    const sidebarInnerPadding = this.getAttribute('sidebar-inner-padding')

    return `
      <div class="astravance-intro-sidebar-inner" style="background-color:${sidebarBg};padding:${sidebarInnerPadding};">
        <div class="astravance-intro-sidebar-title" style="margin:0 0 18px 0;">
          <div style="font-family:Helvetica,Arial,sans-serif;font-size:${titleSize};font-weight:700;line-height:1.3;color:${titleColor};">
            ${title}
          </div>
        </div>
        ${this.renderLinkRow(
          this.getAttribute('linkedin-icon-src'),
          this.getAttribute('linkedin-text'),
          this.getAttribute('linkedin-href'),
          false,
        )}
        ${this.renderLinkRow(
          this.getAttribute('website-icon-src'),
          this.getAttribute('website-text'),
          this.getAttribute('website-href'),
          false,
        )}
        ${this.renderLinkRow(
          this.getAttribute('updates-icon-src'),
          this.getAttribute('updates-text'),
          this.getAttribute('updates-href'),
          true,
        )}
      </div>
    `
  }

  renderContent() {
    const textColor = this.getAttribute('content-color')
    const title = this.getAttribute('ceo-title')
    const titleSize = this.getAttribute('ceo-title-font-size')
    const body = this.getAttribute('ceo-body')
    const bodySize = this.getAttribute('ceo-body-font-size')
    const thanks = this.getAttribute('ceo-thanks')
    const signature = this.getAttribute('ceo-signature')
    const closingSize = this.getAttribute('ceo-closing-font-size')

    return `
      <div class="astravance-intro-ceo-title" style="margin:0 0 16px 0;">
        <div style="font-family:Helvetica,Arial,sans-serif;font-size:${titleSize};font-weight:700;line-height:1.3;color:${textColor};">
          ${title}
        </div>
      </div>
      <div class="astravance-intro-ceo-body" style="margin:0 0 18px 0;">
        <div style="font-family:Helvetica,Arial,sans-serif;font-size:${bodySize};font-weight:400;line-height:1.55;color:${textColor};">
          ${body}
        </div>
      </div>
      <div class="astravance-intro-ceo-thanks" style="margin:0 0 14px 0;">
        <div style="font-family:Helvetica,Arial,sans-serif;font-size:${closingSize};font-weight:400;line-height:1.55;color:${textColor};">
          ${thanks}
        </div>
      </div>
      <div class="astravance-intro-ceo-signature">
        <div style="font-family:Helvetica,Arial,sans-serif;font-size:${closingSize};font-weight:700;line-height:1.55;color:${textColor};">
          ${signature}
        </div>
      </div>
    `
  }

  render() {
    const bg = this.getAttribute('background-color')
    const contentBg = this.getAttribute('content-background-color')

    const wrapperAttrs = this.htmlAttributes({
      'background-color': bg,
      padding: this.getAttribute('wrapper-padding'),
      'css-class': 'astravance-intro-wrapper',
    })

    const sectionAttrs = this.htmlAttributes({
      'background-color': bg,
      padding: this.getAttribute('padding'),
      'css-class': 'astravance-intro-section',
    })

    const sidebarColumnAttrs = this.htmlAttributes({
      width: this.getAttribute('sidebar-column-width'),
      'background-color': bg,
      'vertical-align': 'top',
      padding: '0',
      'css-class': `astravance-intro-sidebar astravance-intro-sidebar-${this.cssId}`,
    })

    const contentColumnAttrs = this.htmlAttributes({
      width: this.getAttribute('content-column-width'),
      'background-color': contentBg,
      'vertical-align': 'top',
      padding: '0',
      'css-class': `astravance-intro-content astravance-intro-content-${this.cssId}`,
    })

    return this.renderMJML(`
      <mj-wrapper ${wrapperAttrs}>
        <mj-section ${sectionAttrs}>
          <mj-column ${sidebarColumnAttrs}>
            <mj-text padding="0" align="left">
              ${this.renderSidebar()}
            </mj-text>
          </mj-column>
          <mj-column ${contentColumnAttrs}>
            <mj-text padding="0" align="left">
              ${this.renderContent()}
            </mj-text>
          </mj-column>
        </mj-section>
      </mj-wrapper>
    `)
  }
}
