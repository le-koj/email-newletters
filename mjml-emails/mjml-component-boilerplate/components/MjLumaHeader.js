import { BodyComponent } from 'mjml-core'

const IMAGES_BASE = 'resources/images/luma'
const ICONS_BASE = `${IMAGES_BASE}/icons`

export default class MjLumaHeader extends BodyComponent {
  static dependencies = {
    'mj-luma-header': [],
    'mj-body': ['mj-luma-header'],
    'mj-wrapper': ['mj-luma-header'],
  }

  static allowedAttributes = {
    'background-color': 'color',
    'divider-color': 'color',
    'divider-width': 'unit(px)',
    'link-color': 'color',
    'font-family': 'string',
    'logo-src': 'string',
    'logo-alt': 'string',
    'logo-width': 'unit(px)',
    'logo-column-width': 'unit(px,%)',
    'nav-column-width': 'unit(px,%)',
    'icons-column-width': 'unit(px,%)',
    'nav-link-font-size': 'unit(px)',
    'nav-link-gap': 'unit(px)',
    'icon-width': 'unit(px)',
    'icon-height': 'unit(px)',
    'icon-gap': 'unit(px)',
    padding: 'unit(px){1,4}',
    'nav-1-text': 'string',
    'nav-1-href': 'string',
    'nav-2-text': 'string',
    'nav-2-href': 'string',
    'nav-3-text': 'string',
    'nav-3-href': 'string',
    'nav-4-text': 'string',
    'nav-4-href': 'string',
    'account-icon-src': 'string',
    'account-icon-alt': 'string',
    'account-icon-href': 'string',
    'cart-icon-src': 'string',
    'cart-icon-alt': 'string',
    'cart-icon-href': 'string',
  }

  componentHeadStyle = () => {
    const dividerColor = this.getAttribute('divider-color')
    const dividerWidth = this.getAttribute('divider-width')
    const iconWidth = this.getAttribute('icon-width')
    const iconHeight = this.getAttribute('icon-height')

    return `
    .luma-header-nav a {
      text-decoration: none !important;
    }
    div.luma-header-section > table > tbody > tr > td {
      border-bottom: ${dividerWidth} solid ${dividerColor} !important;
    }
    @media only screen and (max-width:480px) {
      div.luma-header-section > table > tbody > tr > td {
        padding: 5px 10px !important;
      }
      div.luma-header-nav-col {
        display: none !important;
        max-height: 0 !important;
        overflow: hidden !important;
      }
      div.luma-header-logo-col {
        width: 60% !important;
        max-width: 60% !important;
      }
      div.luma-header-icons-col {
        width: 40% !important;
        max-width: 40% !important;
      }
      div.luma-header-logo-col > table > tbody > tr > td,
      div.luma-header-icons-col > table > tbody > tr > td {
        padding: 0 !important;
      }
      .luma-header-icons img {
        width: ${iconWidth} !important;
        max-width: ${iconWidth} !important;
        height: ${iconHeight} !important;
        max-height: ${iconHeight} !important;
      }
    }
  `
  }

  static defaultAttributes = {
    'background-color': '#FFFFFF',
    'divider-color': '#E8E8E8',
    'divider-width': '1px',
    'link-color': '#2D2D2D',
    'font-family': 'Inter, Helvetica, Arial, sans-serif',
    'logo-src': `${IMAGES_BASE}/luma-logo-removebg.png`,
    'logo-alt': 'Luma Botanics',
    'logo-width': '100px',
    'logo-column-width': '28%',
    'nav-column-width': '44%',
    'icons-column-width': '28%',
    'nav-link-font-size': '15px',
    'nav-link-gap': '20px',
    'icon-width': '28px',
    'icon-height': '28px',
    'icon-gap': '12px',
    padding: '5px 10px',
    'nav-1-text': 'Shop',
    'nav-1-href': '#',
    'nav-2-text': 'Skin',
    'nav-2-href': '#',
    'nav-3-text': 'Bundles',
    'nav-3-href': '#',
    'nav-4-text': 'Journal',
    'nav-4-href': '#',
    'account-icon-src': `${ICONS_BASE}/account-icon-removebg.png`,
    'account-icon-alt': 'Account',
    'account-icon-href': '#',
    'cart-icon-src': `${ICONS_BASE}/cart-icon-removebg.png`,
    'cart-icon-alt': 'Cart',
    'cart-icon-href': '#',
  }

  renderNavLinks() {
    const linkColor = this.getAttribute('link-color')
    const fontFamily = this.getAttribute('font-family')
    const fontSize = this.getAttribute('nav-link-font-size')
    const gap = this.getAttribute('nav-link-gap')

    const links = [1, 2, 3, 4].map((index) => ({
      text: this.getAttribute(`nav-${index}-text`),
      href: this.getAttribute(`nav-${index}-href`),
    }))

    const cells = links
      .map(
        (link, index) => `
          <td
            valign="middle"
            style="padding:${index < links.length - 1 ? `0 ${gap} 0 0` : '0'};font-family:${fontFamily};font-size:${fontSize};line-height:1.2;"
          >
            <a
              href="${link.href}"
              style="color:${linkColor};text-decoration:none;font-family:${fontFamily};font-size:${fontSize};font-weight:400;"
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

  renderIconLink(src, alt, href) {
    const iconWidth = this.getAttribute('icon-width')
    const iconHeight = this.getAttribute('icon-height')

    return `
      <a href="${href}" style="text-decoration:none;">
        <img
          src="${src}"
          width="${iconWidth}"
          height="${iconHeight}"
          alt="${alt}"
          style="display:block;border:0;outline:none;width:${iconWidth};height:${iconHeight};"
        />
      </a>
    `
  }

  renderIcons() {
    const iconGap = this.getAttribute('icon-gap')

    return `
      <table role="presentation" border="0" cellpadding="0" cellspacing="0" align="right" class="luma-header-icons">
        <tr>
          <td valign="middle" style="padding-right:${iconGap};">
            ${this.renderIconLink(
              this.getAttribute('account-icon-src'),
              this.getAttribute('account-icon-alt'),
              this.getAttribute('account-icon-href'),
            )}
          </td>
          <td valign="middle">
            ${this.renderIconLink(
              this.getAttribute('cart-icon-src'),
              this.getAttribute('cart-icon-alt'),
              this.getAttribute('cart-icon-href'),
            )}
          </td>
        </tr>
      </table>
    `
  }

  render() {
    const bg = this.getAttribute('background-color')

    const sectionAttrs = this.htmlAttributes({
      'background-color': bg,
      padding: this.getAttribute('padding'),
      'css-class': 'luma-header-section',
    })

    const logoImageAttrs = this.htmlAttributes({
      src: this.getAttribute('logo-src'),
      width: this.getAttribute('logo-width'),
      alt: this.getAttribute('logo-alt'),
      align: 'left',
      padding: '0',
      'css-class': 'luma-header-logo',
    })

    const logoColumnAttrs = this.htmlAttributes({
      width: this.getAttribute('logo-column-width'),
      'vertical-align': 'middle',
      padding: '0',
      'css-class': 'luma-header-logo-col',
    })

    const navColumnAttrs = this.htmlAttributes({
      width: this.getAttribute('nav-column-width'),
      'vertical-align': 'middle',
      padding: '0',
      'css-class': 'luma-header-nav-col',
    })

    const iconsColumnAttrs = this.htmlAttributes({
      width: this.getAttribute('icons-column-width'),
      'vertical-align': 'middle',
      padding: '0',
      'css-class': 'luma-header-icons-col',
    })

    return this.renderMJML(`
      <mj-section ${sectionAttrs}>
        <mj-column ${logoColumnAttrs}>
          <mj-image ${logoImageAttrs} />
        </mj-column>
        <mj-column ${navColumnAttrs}>
          <mj-text padding="0" css-class="luma-header-nav" align="center">
            ${this.renderNavLinks()}
          </mj-text>
        </mj-column>
        <mj-column ${iconsColumnAttrs}>
          <mj-text padding="0" align="right">
            ${this.renderIcons()}
          </mj-text>
        </mj-column>
      </mj-section>
    `)
  }
}
