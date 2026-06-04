import { BodyComponent } from 'mjml-core'

export default class MjLunaraFooter extends BodyComponent {
  static dependencies = {
    'mj-lunara-footer': [],
    'mj-body': ['mj-lunara-footer'],
    'mj-wrapper': ['mj-lunara-footer'],
  }

  static allowedAttributes = {
    'background-color': 'color',
    'accent-color': 'color',
    'text-color': 'color',
    'divider-color': 'color',
    'divider-width': 'unit(px)',
    'icon-size': 'unit(px)',
    'icon-color': 'color',
    'icon-padding': 'unit(px)',
    'instagram-href': 'string',
    'youtube-href': 'string',
    'twitter-href': 'string',
    'facebook-href': 'string',
    disclaimer: 'string',
    copyright: 'string',
    address: 'string',
    'privacy-text': 'string',
    'privacy-href': 'string',
    'terms-text': 'string',
    'terms-href': 'string',
    'unsubscribe-href': 'string',
    'unsubscribe-link-text': 'string',
    'unsubscribe-statement': 'string',
    'font-size': 'unit(px)',
    padding: 'unit(px){1,4}',
    'social-padding': 'unit(px){1,4}',
    'legal-padding': 'unit(px){1,4}',
  }

  componentHeadStyle = () => `
    @media only screen and (max-width:480px) {
      div.lunara-footer-legal > table > tbody > tr > td {
        padding: 16px 20px 32px !important;
      }
      div.lunara-footer-social > table > tbody > tr > td {
        padding: 32px 20px 0 !important;
      }
      .lunara-footer-disclaimer div,
      .lunara-footer-copyright div,
      .lunara-footer-address div,
      .lunara-footer-unsubscribe div {
        font-size: 11px !important;
        line-height: 1.5 !important;
      }
    }
  `

  static defaultAttributes = {
    'background-color': '#000000',
    'accent-color': '#7BA4F4',
    'text-color': '#9A9A9A',
    'divider-color': '#2A2A2A',
    'divider-width': '1px',
    'icon-size': '24px',
    'icon-color': '#9A9A9A',
    'icon-padding': '12px',
    'instagram-href': '#',
    'youtube-href': '#',
    'twitter-href': '#',
    'facebook-href': '#',
    disclaimer:
      'Event date and content subject to change. Internet connection required for some features.',
    copyright: '© 2025 Lunara Inc., All rights reserved.',
    address: '123 Orbit Way, Suite 400, San Francisco, CA 94107, USA',
    'privacy-text': 'Privacy',
    'privacy-href': '#',
    'terms-text': 'Terms',
    'terms-href': '#',
    'unsubscribe-href': '{{UNSUBSCRIBE_URL}}',
    'unsubscribe-link-text': 'unsubscribe',
    'unsubscribe-statement':
      'If you no longer wish to receive Lunara marketing emails, you may',
    'font-size': '12px',
    padding: '0 24px',
    'social-padding': '40px 24px 0',
    'legal-padding': '0 24px 40px',
  }

  renderUnsubscribe() {
    const accent = this.getAttribute('accent-color')
    const href = this.getAttribute('unsubscribe-href')
    const linkText = this.getAttribute('unsubscribe-link-text')
    const statement = this.getAttribute('unsubscribe-statement')
    const linkStyle = `color:${accent};text-decoration:none;font-weight:500;`

    return `${statement} <a href="${href}" style="${linkStyle}">${linkText}</a>.`
  }

  renderLegalLinks() {
    const accent = this.getAttribute('accent-color')
    const privacyHref = this.getAttribute('privacy-href')
    const privacyText = this.getAttribute('privacy-text')
    const termsHref = this.getAttribute('terms-href')
    const termsText = this.getAttribute('terms-text')

    return `
      <a href="${privacyHref}" style="color:${accent};text-decoration:none;font-size:12px;font-weight:500;">${privacyText}</a>
      <span style="color:${accent};font-size:12px;">&nbsp;|&nbsp;</span>
      <a href="${termsHref}" style="color:${accent};text-decoration:none;font-size:12px;font-weight:500;">${termsText}</a>
    `
  }

  renderSocialElement(name, href) {
    return `
      <mj-social-element
        name="${name}"
        href="${href}"
        background-color="${this.getAttribute('icon-color')}"
        icon-size="${this.getAttribute('icon-size')}"
        padding="${this.getAttribute('icon-padding')}"
      />
    `
  }

  render() {
    const bg = this.getAttribute('background-color')
    const textColor = this.getAttribute('text-color')
    const fontSize = this.getAttribute('font-size')
    const dividerColor = this.getAttribute('divider-color')
    const dividerWidth = this.getAttribute('divider-width')

    const wrapperAttrs = this.htmlAttributes({
      'background-color': bg,
    })

    const socialSectionAttrs = this.htmlAttributes({
      'background-color': bg,
      padding: this.getAttribute('social-padding'),
      'css-class': 'lunara-footer-social',
    })

    const legalSectionAttrs = this.htmlAttributes({
      'background-color': bg,
      padding: this.getAttribute('legal-padding'),
      'css-class': 'lunara-footer-legal',
    })

    const socialAttrs = this.htmlAttributes({
      align: 'center',
      mode: 'horizontal',
      'icon-size': this.getAttribute('icon-size'),
      'icon-padding': this.getAttribute('icon-padding'),
      padding: '0',
    })

    const dividerAttrs = this.htmlAttributes({
      'border-color': dividerColor,
      'border-width': dividerWidth,
      'border-style': 'solid',
      padding: '24px 0',
      width: '100%',
    })

    return this.renderMJML(`
      <mj-wrapper ${wrapperAttrs}>
        <mj-section ${socialSectionAttrs}>
          <mj-column>
            <mj-social ${socialAttrs}>
              ${this.renderSocialElement('instagram', this.getAttribute('instagram-href'))}
              ${this.renderSocialElement('youtube', this.getAttribute('youtube-href'))}
              ${this.renderSocialElement('twitter', this.getAttribute('twitter-href'))}
              ${this.renderSocialElement('facebook', this.getAttribute('facebook-href'))}
            </mj-social>
          </mj-column>
        </mj-section>
        <mj-section ${legalSectionAttrs}>
          <mj-column>
            <mj-divider ${dividerAttrs} />
            <mj-text
              align="center"
              color="${textColor}"
              font-size="${fontSize}"
              line-height="1.6"
              padding="0 0 12px 0"
              css-class="lunara-footer-disclaimer"
            >
              ${this.getAttribute('disclaimer')}
            </mj-text>
            <mj-text
              align="center"
              color="${textColor}"
              font-size="${fontSize}"
              line-height="1.6"
              padding="0 0 4px 0"
              css-class="lunara-footer-copyright"
            >
              ${this.getAttribute('copyright')}
            </mj-text>
            <mj-text
              align="center"
              color="${textColor}"
              font-size="${fontSize}"
              line-height="1.6"
              padding="0 0 12px 0"
              css-class="lunara-footer-address"
            >
              ${this.getAttribute('address')}
            </mj-text>
            <mj-text
              align="center"
              color="${textColor}"
              font-size="${fontSize}"
              line-height="1.6"
              padding="0 0 16px 0"
              css-class="lunara-footer-unsubscribe"
            >
              ${this.renderUnsubscribe()}
            </mj-text>
            <mj-text align="center" padding="0" css-class="lunara-footer-links">
              ${this.renderLegalLinks()}
            </mj-text>
          </mj-column>
        </mj-section>
      </mj-wrapper>
    `)
  }
}
