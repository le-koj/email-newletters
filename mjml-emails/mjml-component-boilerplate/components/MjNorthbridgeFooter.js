import { BodyComponent } from 'mjml-core'

// mj-social ships built-in icons for linkedin/twitter, but has no email icon,
// so the mail element uses this inline SVG. Override via email-icon-src.
const EMAIL_ICON_SRC = `data:image/svg+xml,${encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="#1A1A1A" stroke-width="1.5"/><path d="M3 7l9 6 9-6" fill="none" stroke="#1A1A1A" stroke-width="1.5"/></svg>',
)}`

export default class MjNorthbridgeFooter extends BodyComponent {
  static dependencies = {
    'mj-northbridge-footer': [],
    'mj-body': ['mj-northbridge-footer'],
    'mj-wrapper': ['mj-northbridge-footer'],
  }

  static allowedAttributes = {
    'background-color': 'color',
    'text-color': 'color',
    'muted-color': 'color',
    'link-color': 'color',
    'divider-color': 'color',
    'divider-width': 'unit(px)',
    'logo-src': 'string',
    'logo-alt': 'string',
    'logo-width': 'unit(px)',
    'company-name': 'string',
    'address-line-1': 'string',
    'address-line-2': 'string',
    phone: 'string',
    email: 'string',
    'email-href': 'string',
    website: 'string',
    'website-href': 'string',
    'linkedin-href': 'string',
    'twitter-href': 'string',
    'mail-href': 'string',
    'linkedin-icon-src': 'string',
    'twitter-icon-src': 'string',
    'email-icon-src': 'string',
    'icon-size': 'unit(px)',
    'icon-color': 'color',
    'icon-padding': 'unit(px)',
    'icon-border-color': 'color',
    'subscription-notice': 'string',
    'unsubscribe-text': 'string',
    'unsubscribe-href': 'string',
    'manage-preferences-text': 'string',
    'manage-preferences-href': 'string',
    'privacy-text': 'string',
    'privacy-href': 'string',
    'logo-column-width': 'unit(px,%)',
    'brand-column-width': 'unit(px,%)',
    'contact-column-width': 'unit(px,%)',
    'social-column-width': 'unit(px,%)',
    'notice-column-width': 'unit(px,%)',
    'links-column-width': 'unit(px,%)',
    'section-padding': 'unit(px){1,4}',
    'utility-padding': 'unit(px){1,4}',
    'title-font-size': 'unit(px)',
    'body-font-size': 'unit(px)',
    'utility-font-size': 'unit(px)',
  }

  componentHeadStyle = () => {
    const borderColor = this.getAttribute('icon-border-color')

    return `
    .northbridge-footer-brand-name div,
    .northbridge-footer-brand-address div {
      font-family: Helvetica, Arial, sans-serif !important;
    }
    .northbridge-footer-logo img {
      display: block !important;
      border: 1px solid #1A1A1A !important;
    }
    div.northbridge-footer-social .mj-social td {
      padding: 0 0 0 10px !important;
    }
    div.northbridge-footer-social .mj-social td:first-child {
      padding-left: 0 !important;
    }
    div.northbridge-footer-social .mj-social img {
      border: 1px solid ${borderColor} !important;
      border-radius: 50% !important;
      padding: 8px !important;
      box-sizing: content-box !important;
      background-color: #ffffff !important;
    }
    div.northbridge-footer-social .northbridge-social-black img {
      filter: brightness(0) !important;
      -webkit-filter: brightness(0) !important;
    }
    .northbridge-footer-utility-links div {
      white-space: nowrap !important;
    }
    @media only screen and (max-width:480px) {
      div.northbridge-footer-main-row > table > tbody > tr > td {
        padding: 24px 10px 20px !important;
      }
      div.northbridge-footer-logo > table > tbody > tr > td,
      div.northbridge-footer-brand > table > tbody > tr > td,
      div.northbridge-footer-contact > table > tbody > tr > td,
      div.northbridge-footer-social > table > tbody > tr > td {
        padding: 0 10px !important;
        width: 100% !important;
        display: block !important;
      }
      div.northbridge-footer-brand > table > tbody > tr > td,
      div.northbridge-footer-contact > table > tbody > tr > td,
      div.northbridge-footer-social > table > tbody > tr > td {
        padding-top: 20px !important;
      }
      div.northbridge-footer-social td[align="right"] {
        text-align: left !important;
      }
      div.northbridge-footer-social table[align="right"] {
        float: none !important;
        margin: 0 !important;
      }
      div.northbridge-footer-utility-row > table > tbody > tr > td {
        padding: 16px 10px 32px !important;
      }
      div.northbridge-footer-notice > table > tbody > tr > td,
      div.northbridge-footer-links > table > tbody > tr > td {
        padding: 0 !important;
        width: 100% !important;
        display: block !important;
      }
      div.northbridge-footer-links > table > tbody > tr > td {
        padding-top: 10px !important;
      }
      .northbridge-footer-notice div,
      .northbridge-footer-links div,
      .northbridge-footer-utility-links div {
        text-align: left !important;
        white-space: normal !important;
        font-size: 11px !important;
      }
    }
  `
  }

  static defaultAttributes = {
    'background-color': '#FFFFFF',
    'text-color': '#000000',
    'muted-color': '#4A4A4A',
    'link-color': '#1D4ED8',
    'divider-color': '#E0E0E0',
    'divider-width': '1px',
    'logo-src':
      'resources/images/northbridge/northbridge-logo-removebg.png',
    'logo-alt': 'Northbridge Brief',
    'logo-width': '56px',
    'company-name': 'Northbridge Brief',
    'address-line-1': 'Level 18, 123 Collins Street',
    'address-line-2': 'Melbourne VIC 3000 Australia',
    phone: '+61 3 9000 1234',
    email: 'info@northbridgebrief.com',
    'email-href': 'mailto:info@northbridgebrief.com',
    website: 'northbridgebrief.com',
    'website-href': 'https://northbridgebrief.com',
    'linkedin-href': '#',
    'twitter-href': '#',
    'mail-href': 'mailto:info@northbridgebrief.com',
    'icon-size': '32px',
    'icon-color': '#1A1A1A',
    'icon-padding': '0',
    'icon-border-color': '#1A1A1A',
    'linkedin-icon-src': '',
    'twitter-icon-src': '',
    'email-icon-src': EMAIL_ICON_SRC,
    'subscription-notice':
      "You're receiving this because you subscribed to Northbridge Brief.",
    'unsubscribe-text': 'Unsubscribe',
    'unsubscribe-href': '{{UNSUBSCRIBE_URL}}',
    'manage-preferences-text': 'Manage preferences',
    'manage-preferences-href': '#',
    'privacy-text': 'Privacy Policy',
    'privacy-href': '#',
    'logo-column-width': '14%',
    'brand-column-width': '32%',
    'contact-column-width': '32%',
    'social-column-width': '22%',
    'notice-column-width': '54%',
    'links-column-width': '46%',
    'section-padding': '32px 10px 28px',
    'utility-padding': '0 10px 36px',
    'title-font-size': '15px',
    'body-font-size': '13px',
    'utility-font-size': '12px',
  }

  fontFamily() {
    return 'Helvetica, Arial, sans-serif'
  }

  renderBrandBlock() {
    const textColor = this.getAttribute('text-color')
    const mutedColor = this.getAttribute('muted-color')
    const titleSize = this.getAttribute('title-font-size')
    const bodySize = this.getAttribute('body-font-size')
    const font = this.fontFamily()

    return `
      <div class="northbridge-footer-brand-name" style="font-family:${font};font-size:${titleSize};font-weight:700;line-height:1.35;color:${textColor};">
        ${this.getAttribute('company-name')}
      </div>
      <div class="northbridge-footer-brand-address" style="font-family:${font};font-size:${bodySize};line-height:1.5;color:${mutedColor};margin-top:4px;">
        ${this.getAttribute('address-line-1')}<br />
        ${this.getAttribute('address-line-2')}
      </div>
    `
  }

  renderContactBlock() {
    const mutedColor = this.getAttribute('muted-color')
    const linkColor = this.getAttribute('link-color')
    const bodySize = this.getAttribute('body-font-size')
    const font = this.fontFamily()
    const lineStyle = `font-family:${font};font-size:${bodySize};line-height:1.55;color:${mutedColor};margin:0;padding:0;`

    return `
      <div style="${lineStyle}">${this.getAttribute('phone')}</div>
      <div style="${lineStyle}">
        <a href="${this.getAttribute('email-href')}" style="color:${mutedColor};text-decoration:underline;">${this.getAttribute('email')}</a>
      </div>
      <div style="${lineStyle}">
        <a href="${this.getAttribute('website-href')}" style="color:${linkColor};text-decoration:none;">${this.getAttribute('website')}</a>
      </div>
    `
  }

  renderSocialElement(name, href, src, cssClass) {
    const elementAttrs = {
      name,
      href,
      'icon-size': this.getAttribute('icon-size'),
      padding: this.getAttribute('icon-padding'),
      'background-color': this.getAttribute('background-color'),
      'icon-color': this.getAttribute('icon-color'),
    }

    if (src) {
      elementAttrs.src = src
    }

    if (cssClass) {
      elementAttrs['css-class'] = cssClass
    }

    return `<mj-social-element ${this.htmlAttributes(elementAttrs)} />`
  }

  renderSocial() {
    const socialAttrs = this.htmlAttributes({
      align: 'right',
      mode: 'horizontal',
      'icon-size': this.getAttribute('icon-size'),
      'icon-padding': this.getAttribute('icon-padding'),
      padding: '0',
    })

    return `
      <mj-social ${socialAttrs}>
        ${this.renderSocialElement(
          'linkedin-noshare',
          this.getAttribute('linkedin-href'),
          this.getAttribute('linkedin-icon-src'),
          'northbridge-social-black',
        )}
        ${this.renderSocialElement(
          'twitter-noshare',
          this.getAttribute('twitter-href'),
          this.getAttribute('twitter-icon-src'),
          'northbridge-social-black',
        )}
        ${this.renderSocialElement(
          'email',
          this.getAttribute('mail-href'),
          this.getAttribute('email-icon-src'),
        )}
      </mj-social>
    `
  }

  renderUtilityLinks() {
    const mutedColor = this.getAttribute('muted-color')
    const bodySize = this.getAttribute('utility-font-size')
    const font = this.fontFamily()
    const linkStyle = `color:${mutedColor};text-decoration:none;font-size:${bodySize};font-family:${font};line-height:1.4;`
    const sep = `<span style="color:${mutedColor};font-size:${bodySize};font-family:${font};">&nbsp;|&nbsp;</span>`

    const links = [
      {
        href: this.getAttribute('unsubscribe-href'),
        text: this.getAttribute('unsubscribe-text'),
      },
      {
        href: this.getAttribute('manage-preferences-href'),
        text: this.getAttribute('manage-preferences-text'),
      },
      {
        href: this.getAttribute('privacy-href'),
        text: this.getAttribute('privacy-text'),
      },
    ]

    return links
      .map((link, i) => `${i > 0 ? sep : ''}<a href="${link.href}" style="${linkStyle}">${link.text}</a>`)
      .join('')
  }

  render() {
    const bg = this.getAttribute('background-color')
    const mutedColor = this.getAttribute('muted-color')
    const utilitySize = this.getAttribute('utility-font-size')
    const dividerColor = this.getAttribute('divider-color')
    const dividerWidth = this.getAttribute('divider-width')
    const font = this.fontFamily()

    const wrapperAttrs = this.htmlAttributes({
      'background-color': bg,
    })

    const topDividerAttrs = this.htmlAttributes({
      'border-color': dividerColor,
      'border-width': dividerWidth,
      'border-style': 'solid',
      padding: '32px 0 28px 0',
      width: '100%',
    })

    const bottomDividerAttrs = this.htmlAttributes({
      'border-color': dividerColor,
      'border-width': dividerWidth,
      'border-style': 'solid',
      padding: '0 0 18px 0',
      width: '100%',
    })

    const mainRowAttrs = this.htmlAttributes({
      'background-color': bg,
      padding: this.getAttribute('section-padding'),
      'css-class': 'northbridge-footer-main-row',
    })

    const utilityRowAttrs = this.htmlAttributes({
      'background-color': bg,
      padding: this.getAttribute('utility-padding'),
      'css-class': 'northbridge-footer-utility-row',
    })

    const logoImageAttrs = this.htmlAttributes({
      src: this.getAttribute('logo-src'),
      alt: this.getAttribute('logo-alt'),
      width: this.getAttribute('logo-width'),
      align: 'left',
      padding: '0',
      'css-class': 'northbridge-footer-logo',
    })

    return this.renderMJML(`
      <mj-wrapper ${wrapperAttrs}>
        <mj-section ${mainRowAttrs}>
          <mj-column width="100%">
            <mj-divider ${topDividerAttrs} />
          </mj-column>
          <mj-column
            ${this.htmlAttributes({
              width: this.getAttribute('logo-column-width'),
              'vertical-align': 'middle',
              padding: '0 16px 0 0',
              'css-class': 'northbridge-footer-logo',
            })}
          >
            <mj-image ${logoImageAttrs} />
          </mj-column>
          <mj-column
            ${this.htmlAttributes({
              width: this.getAttribute('brand-column-width'),
              'vertical-align': 'middle',
              padding: '0 16px 0 0',
              'css-class': 'northbridge-footer-brand',
            })}
          >
            <mj-text padding="0" align="left">
              ${this.renderBrandBlock()}
            </mj-text>
          </mj-column>
          <mj-column
            ${this.htmlAttributes({
              width: this.getAttribute('contact-column-width'),
              'vertical-align': 'middle',
              padding: '0 16px 0 0',
              'css-class': 'northbridge-footer-contact',
            })}
          >
            <mj-text padding="0" align="left">
              ${this.renderContactBlock()}
            </mj-text>
          </mj-column>
          <mj-column
            ${this.htmlAttributes({
              width: this.getAttribute('social-column-width'),
              'vertical-align': 'middle',
              padding: '0',
              'css-class': 'northbridge-footer-social',
            })}
          >
            ${this.renderSocial()}
          </mj-column>
        </mj-section>
        <mj-section ${utilityRowAttrs}>
          <mj-column width="100%">
            <mj-divider ${bottomDividerAttrs} />
          </mj-column>
          <mj-column
            ${this.htmlAttributes({
              width: this.getAttribute('notice-column-width'),
              'vertical-align': 'middle',
              padding: '0 16px 0 0',
              'css-class': 'northbridge-footer-notice',
            })}
          >
            <mj-text
              align="left"
              padding="0"
              color="${mutedColor}"
              font-size="${utilitySize}"
              font-family="${font}"
              line-height="1.45"
              css-class="northbridge-footer-notice"
            >
              ${this.getAttribute('subscription-notice')}
            </mj-text>
          </mj-column>
          <mj-column
            ${this.htmlAttributes({
              width: this.getAttribute('links-column-width'),
              'vertical-align': 'middle',
              padding: '0',
              'css-class': 'northbridge-footer-links',
            })}
          >
            <mj-text
              align="right"
              padding="0"
              css-class="northbridge-footer-utility-links"
            >
              ${this.renderUtilityLinks()}
            </mj-text>
          </mj-column>
        </mj-section>
      </mj-wrapper>
    `)
  }
}
