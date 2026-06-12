import { BodyComponent } from 'mjml-core'

const ICONS_BASE = 'resources/images/luma/icons'

export default class MjLumaTrustBar extends BodyComponent {
  static dependencies = {
    'mj-luma-trust-bar': [],
    'mj-body': ['mj-luma-trust-bar'],
    'mj-wrapper': ['mj-luma-trust-bar'],
  }

  static allowedAttributes = {
    'background-color': 'color',
    'title-color': 'color',
    'description-color': 'color',
    'font-family': 'string',
    'column-width': 'unit(px,%)',
    'column-padding': 'unit(px){1,4}',
    'icon-width': 'unit(px)',
    'icon-height': 'unit(px)',
    'icon-gap': 'unit(px)',
    'title-font-size': 'unit(px)',
    'description-font-size': 'unit(px)',
    padding: 'unit(px){1,4}',
    'item-1-icon-src': 'string',
    'item-1-icon-alt': 'string',
    'item-1-title': 'string',
    'item-1-description': 'string',
    'item-2-icon-src': 'string',
    'item-2-icon-alt': 'string',
    'item-2-title': 'string',
    'item-2-description': 'string',
    'item-3-icon-src': 'string',
    'item-3-icon-alt': 'string',
    'item-3-title': 'string',
    'item-3-description': 'string',
    'item-4-icon-src': 'string',
    'item-4-icon-alt': 'string',
    'item-4-title': 'string',
    'item-4-description': 'string',
  }

  componentHeadStyle = () => {
    const iconWidth = this.getAttribute('icon-width')
    const iconHeight = this.getAttribute('icon-height')

    return `
    .luma-trust-bar-item div {
      line-height: 1.3 !important;
    }
    @media only screen and (max-width:480px) {
      div.luma-trust-bar-section > table > tbody > tr > td {
        padding: 10px 20px !important;
      }
      div.luma-trust-bar-col {
        width: 50% !important;
        max-width: 50% !important;
      }
      div.luma-trust-bar-col > table > tbody > tr > td {
        padding: 0 8px 20px !important;
      }
      div.luma-trust-bar-col-3 > table > tbody > tr > td,
      div.luma-trust-bar-col-4 > table > tbody > tr > td {
        padding-bottom: 0 !important;
      }
      div.luma-trust-bar-col .luma-trust-bar-item img {
        width: ${iconWidth} !important;
        max-width: ${iconWidth} !important;
        height: ${iconHeight} !important;
        max-height: ${iconHeight} !important;
      }
    }
  `
  }

  static defaultAttributes = {
    'background-color': '#F5F2EB',
    'title-color': '#2D2D2D',
    'description-color': '#6B6B6B',
    'font-family': 'Inter, Helvetica, Arial, sans-serif',
    'column-width': '25%',
    'column-padding': '0 8px',
    'icon-width': '32px',
    'icon-height': '32px',
    'icon-gap': '10px',
    'title-font-size': '15px',
    'description-font-size': '11px',
    padding: '20px 10px',
    'item-1-icon-src': `${ICONS_BASE}/leaf-icon-removebg.png`,
    'item-1-icon-alt': 'Plant-Powered',
    'item-1-title': 'Plant-Powered',
    'item-1-description': 'Clean, effective botanicals',
    'item-2-icon-src': `${ICONS_BASE}/chem-flask-icon-removebg.png`,
    'item-2-icon-alt': 'Dermatologist Tested',
    'item-2-title': 'Dermatologist Tested',
    'item-2-description': 'Safe for sensitive skin',
    'item-3-icon-src': `${ICONS_BASE}/heart-icon-removebg.png`,
    'item-3-icon-alt': 'Sustainable Care',
    'item-3-title': 'Sustainable Care',
    'item-3-description': 'Conscious choices always',
    'item-4-icon-src': `${ICONS_BASE}/truck-icon-removebg.png`,
    'item-4-icon-alt': 'Free Shipping',
    'item-4-title': 'Free Shipping',
    'item-4-description': 'On orders $50+',
  }

  renderTrustItem(index) {
    const prefix = `item-${index}`
    const iconWidth = this.getAttribute('icon-width')
    const iconHeight = this.getAttribute('icon-height')
    const iconGap = this.getAttribute('icon-gap')
    const titleColor = this.getAttribute('title-color')
    const descColor = this.getAttribute('description-color')
    const titleSize = this.getAttribute('title-font-size')
    const descSize = this.getAttribute('description-font-size')
    const fontFamily = this.getAttribute('font-family')

    const iconSrc = this.getAttribute(`${prefix}-icon-src`)
    const iconAlt = this.getAttribute(`${prefix}-icon-alt`)
    const title = this.getAttribute(`${prefix}-title`)
    const description = this.getAttribute(`${prefix}-description`)

    return `
      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
        <tr>
          <td valign="middle" width="${iconWidth}" style="width:${iconWidth};padding-right:${iconGap};">
            <img
              src="${iconSrc}"
              width="${iconWidth}"
              height="${iconHeight}"
              alt="${iconAlt}"
              style="display:block;border:0;outline:none;width:${iconWidth};height:${iconHeight};"
            />
          </td>
          <td valign="middle">
            <div style="font-family:${fontFamily};font-size:${titleSize};font-weight:700;line-height:1.3;color:${titleColor};margin:0;">
              ${title}
            </div>
            <div style="font-family:${fontFamily};font-size:${descSize};font-weight:400;line-height:1.4;color:${descColor};margin:4px 0 0;">
              ${description}
            </div>
          </td>
        </tr>
      </table>
    `
  }

  renderColumn(index) {
    const columnWidth = this.getAttribute('column-width')
    const columnPadding = this.getAttribute('column-padding')

    const columnAttrs = this.htmlAttributes({
      width: columnWidth,
      'vertical-align': 'top',
      padding: columnPadding,
      'css-class': `luma-trust-bar-col luma-trust-bar-col-${index}`,
    })

    return `
      <mj-column ${columnAttrs}>
        <mj-text padding="0" css-class="luma-trust-bar-item">
          ${this.renderTrustItem(index)}
        </mj-text>
      </mj-column>
    `
  }

  render() {
    const bg = this.getAttribute('background-color')

    const wrapperAttrs = this.htmlAttributes({
      'background-color': bg,
      padding: '0',
    })

    const sectionAttrs = this.htmlAttributes({
      'background-color': bg,
      padding: this.getAttribute('padding'),
      'css-class': 'luma-trust-bar-section',
    })

    return this.renderMJML(`
      <mj-wrapper ${wrapperAttrs}>
        <mj-section ${sectionAttrs}>
          ${this.renderColumn(1)}
          ${this.renderColumn(2)}
          ${this.renderColumn(3)}
          ${this.renderColumn(4)}
        </mj-section>
      </mj-wrapper>
    `)
  }
}
