import { BodyComponent } from 'mjml-core'
import { LUMA_FONT_STACK, lumaFontStack } from '../lumaFontStack'

const IMAGES_BASE = 'resources/images/luma'

export default class MjLumaFooter extends BodyComponent {
  static dependencies = {
    'mj-luma-footer': [],
    'mj-body': ['mj-luma-footer'],
    'mj-wrapper': ['mj-luma-footer'],
  }

  static allowedAttributes = {
    'background-color': 'color',
    'text-color': 'color',
    'link-color': 'color',
    'font-family': 'string',
    'logo-src': 'string',
    'logo-alt': 'string',
    'logo-width': 'unit(px)',
    'logo-column-width': 'unit(px,%)',
    'social-column-width': 'unit(px,%)',
    'icon-size': 'unit(px)',
    'icon-background-color': 'color',
    'icon-padding': 'unit(px){1,4}',
    'instagram-href': 'string',
    'facebook-href': 'string',
    'pinterest-href': 'string',
    'twitter-href': 'string',
    'nav-font-size': 'unit(px)',
    'nav-link-gap': 'unit(px)',
    'nav-1-text': 'string',
    'nav-1-href': 'string',
    'nav-2-text': 'string',
    'nav-2-href': 'string',
    'nav-3-text': 'string',
    'nav-3-href': 'string',
    'nav-4-text': 'string',
    'nav-4-href': 'string',
    'nav-5-text': 'string',
    'nav-5-href': 'string',
    'unsubscribe-statement': 'string',
    'unsubscribe-link-text': 'string',
    'unsubscribe-href': 'string',
    'unsubscribe-font-size': 'unit(px)',
    padding: 'unit(px){1,4}',
    'nav-padding': 'unit(px){1,4}',
    'unsubscribe-padding': 'unit(px){1,4}',
  }

  componentHeadStyle = () => `
    .luma-footer-nav a {
      text-decoration: none !important;
    }
    @media only screen and (max-width:480px) {
      div.luma-footer-logo-col,
      div.luma-footer-social-col {
        width: 100% !important;
        max-width: 100% !important;
      }
      div.luma-footer-logo-col table {
        float: none !important;
        margin: 0 auto !important;
      }
      div.luma-footer-logo-col > table > tbody > tr > td {
        padding: 0 0 16px !important;
      }
    }
  `

  static defaultAttributes = {
    'background-color': '#FFFFFF',
    'text-color': '#6B6B6B',
    'link-color': '#2D2D2D',
    'font-family': LUMA_FONT_STACK,
    'logo-src': `${IMAGES_BASE}/luma-logo-removebg.png`,
    'logo-alt': 'Luma Botanics',
    'logo-width': '100px',
    'logo-column-width': '30%',
    'social-column-width': '40%',
    'icon-size': '18px',
    'icon-background-color': '#1C1C1C',
    'icon-padding': '0 7px',
    'instagram-href': '#',
    'facebook-href': '#',
    'pinterest-href': '#',
    'twitter-href': '#',
    'nav-font-size': '12px',
    'nav-link-gap': '24px',
    'nav-1-text': 'Shop All',
    'nav-1-href': '#',
    'nav-2-text': 'About Us',
    'nav-2-href': '#',
    'nav-3-text': 'Ingredients',
    'nav-3-href': '#',
    'nav-4-text': 'FAQ',
    'nav-4-href': '#',
    'nav-5-text': 'Account',
    'nav-5-href': '#',
    'unsubscribe-statement': 'No longer want to receive these emails?',
    'unsubscribe-link-text': 'Unsubscribe',
    'unsubscribe-href': '{{UNSUBSCRIBE_URL}}',
    'unsubscribe-font-size': '11px',
    padding: '24px 20px 16px',
    'nav-padding': '0 20px 14px',
    'unsubscribe-padding': '0 20px 24px',
  }

  renderSocialElement(name, href) {
    return `
      <mj-social-element
        name="${name}"
        href="${href}"
        background-color="${this.getAttribute('icon-background-color')}"
        icon-size="${this.getAttribute('icon-size')}"
        padding="${this.getAttribute('icon-padding')}"
      />
    `
  }

  renderNavLinks() {
    const linkColor = this.getAttribute('link-color')
    const fontFamily = this.getAttribute('font-family')
    const fontSize = this.getAttribute('nav-font-size')
    const gap = this.getAttribute('nav-link-gap')

    const links = [1, 2, 3, 4, 5]
      .map((index) => ({
        text: this.getAttribute(`nav-${index}-text`),
        href: this.getAttribute(`nav-${index}-href`),
      }))
      .filter((link) => link.text)

    const cells = links
      .map(
        (link, index) => `
          <td
            valign="middle"
            style="padding:${index < links.length - 1 ? `0 ${gap} 0 0` : '0'};${lumaFontStack(fontFamily)}font-size:${fontSize};line-height:1.4;"
          >
            <a
              href="${link.href}"
              style="color:${linkColor};text-decoration:none;${lumaFontStack(fontFamily)}font-size:${fontSize};font-weight:400;"
            >
              ${link.text}
            </a>
          </td>
        `,
      )
      .join('')

    return `
      <table role="presentation" border="0" cellpadding="0" cellspacing="0" align="center">
        <tr>
          ${cells}
        </tr>
      </table>
    `
  }

  renderUnsubscribe() {
    const textColor = this.getAttribute('text-color')
    const linkColor = this.getAttribute('link-color')
    const fontFamily = this.getAttribute('font-family')
    const fontSize = this.getAttribute('unsubscribe-font-size')

    return `
      <div style="${lumaFontStack(fontFamily)}font-size:${fontSize};line-height:1.5;color:${textColor};">
        ${this.getAttribute('unsubscribe-statement')}
        <a href="${this.getAttribute('unsubscribe-href')}" style="color:${linkColor};text-decoration:underline;">${this.getAttribute('unsubscribe-link-text')}</a>
      </div>
    `
  }

  getSpacerWidth() {
    const logoWidth = parseFloat(this.getAttribute('logo-column-width'))
    const socialWidth = parseFloat(this.getAttribute('social-column-width'))
    if (!Number.isNaN(logoWidth) && !Number.isNaN(socialWidth)) {
      const remainder = 100 - logoWidth - socialWidth
      if (remainder > 0) {
        return `${remainder}%`
      }
    }
    return '30%'
  }

  render() {
    const bg = this.getAttribute('background-color')

    const wrapperAttrs = this.htmlAttributes({
      'background-color': bg,
      padding: '0',
    })

    const topSectionAttrs = this.htmlAttributes({
      'background-color': bg,
      padding: this.getAttribute('padding'),
      'css-class': 'luma-footer-top',
    })

    const navSectionAttrs = this.htmlAttributes({
      'background-color': bg,
      padding: this.getAttribute('nav-padding'),
      'css-class': 'luma-footer-nav-section',
    })

    const unsubscribeSectionAttrs = this.htmlAttributes({
      'background-color': bg,
      padding: this.getAttribute('unsubscribe-padding'),
      'css-class': 'luma-footer-unsubscribe-section',
    })

    const logoColumnAttrs = this.htmlAttributes({
      width: this.getAttribute('logo-column-width'),
      'vertical-align': 'middle',
      padding: '0',
      'css-class': 'luma-footer-logo-col',
    })

    const socialColumnAttrs = this.htmlAttributes({
      width: this.getAttribute('social-column-width'),
      'vertical-align': 'middle',
      padding: '0',
      'css-class': 'luma-footer-social-col',
    })

    const spacerColumnAttrs = this.htmlAttributes({
      width: this.getSpacerWidth(),
      'css-class': 'luma-footer-spacer',
    })

    const logoImageAttrs = this.htmlAttributes({
      src: this.getAttribute('logo-src'),
      width: this.getAttribute('logo-width'),
      alt: this.getAttribute('logo-alt'),
      align: 'left',
      padding: '0',
      'css-class': 'luma-footer-logo',
    })

    const socialAttrs = this.htmlAttributes({
      align: 'center',
      mode: 'horizontal',
      'icon-size': this.getAttribute('icon-size'),
      padding: '0',
    })

    return this.renderMJML(`
      <mj-wrapper ${wrapperAttrs}>
        <mj-section ${topSectionAttrs}>
          <mj-column ${logoColumnAttrs}>
            <mj-image ${logoImageAttrs} />
          </mj-column>
          <mj-column ${socialColumnAttrs}>
            <mj-social ${socialAttrs}>
              ${this.renderSocialElement('instagram', this.getAttribute('instagram-href'))}
              ${this.renderSocialElement('facebook', this.getAttribute('facebook-href'))}
              ${this.renderSocialElement('pinterest', this.getAttribute('pinterest-href'))}
              ${this.renderSocialElement('twitter', this.getAttribute('twitter-href'))}
            </mj-social>
          </mj-column>
          <mj-column ${spacerColumnAttrs}>
            <mj-spacer height="1px" />
          </mj-column>
        </mj-section>
        <mj-section ${navSectionAttrs}>
          <mj-column>
            <mj-text padding="0" align="center" css-class="luma-footer-nav">
              ${this.renderNavLinks()}
            </mj-text>
          </mj-column>
        </mj-section>
        <mj-section ${unsubscribeSectionAttrs}>
          <mj-column>
            <mj-text padding="0" align="center">
              ${this.renderUnsubscribe()}
            </mj-text>
          </mj-column>
        </mj-section>
      </mj-wrapper>
    `)
  }
}
