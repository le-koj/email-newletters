import { BodyComponent } from 'mjml-core'
import { KB_COLORS, kbBodyFont } from '../kbFontStack'
import { KB_CHECK_ICON } from '../kbIcons'

export default class MjKbcapitalBenefits extends BodyComponent {
  static dependencies = {
    'mj-kbcapital-benefits': [],
    'mj-body': ['mj-kbcapital-benefits'],
    'mj-wrapper': ['mj-kbcapital-benefits'],
  }

  static allowedAttributes = {
    'background-color': 'color',
    'title-color': 'color',
    'text-color': 'color',
    'icon-src': 'string',
    'icon-size': 'unit(px)',
    padding: 'unit(px){1,4}',
    'column-width': 'unit(px,%)',
    'gap-width': 'unit(px,%)',
    'title-font-size': 'unit(px)',
    'body-font-size': 'unit(px)',
    'benefit-1-title': 'string',
    'benefit-1-body': 'string',
    'benefit-2-title': 'string',
    'benefit-2-body': 'string',
    'benefit-3-title': 'string',
    'benefit-3-body': 'string',
  }

  componentHeadStyle = () => `
    @media only screen and (max-width:480px) {
      div.kbcapital-benefits-section > table > tbody > tr > td {
        padding-left: 20px !important;
        padding-right: 20px !important;
        padding-bottom: 28px !important;
      }
      .kbcapital-benefit-gap { display: none !important; max-height: 0 !important; overflow: hidden !important; }
      .kbcapital-benefit-col { padding: 20px 0 !important; }
    }
  `

  static defaultAttributes = {
    'background-color': '#FFFFFF',
    'title-color': KB_COLORS.blue,
    'text-color': KB_COLORS.text,
    'icon-src': KB_CHECK_ICON,
    'icon-size': '28px',
    padding: '0 24px 36px',
    'column-width': '31%',
    'gap-width': '3.5%',
    'title-font-size': '17px',
    'body-font-size': '14px',
    'benefit-1-title': 'Fast Closing',
    'benefit-1-body': 'Same-day approval. Funding as fast as 5\u201310 business days.',
    'benefit-2-title': 'Reliable Funding',
    'benefit-2-body': 'A direct lender without relying on third-party approval. Easy draw process with in-house loan servicing.',
    'benefit-3-title': 'No Down Payment',
    'benefit-3-body': 'Keep your hard-earned cash. Only pay closing costs.',
  }

  renderBenefitBlock(index) {
    const prefix = `benefit-${index}`
    const titleColor = this.getAttribute('title-color')
    const textColor = this.getAttribute('text-color')
    const titleSize = this.getAttribute('title-font-size')
    const bodySize = this.getAttribute('body-font-size')
    const iconSize = this.getAttribute('icon-size')

    return `
      <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
        <tr>
          <td width="${iconSize}" valign="top" style="padding-right:10px;padding-top:2px;">
            <img src="${this.getAttribute('icon-src')}" width="${parseInt(iconSize, 10)}" alt="" style="display:block;border:0;" />
          </td>
          <td valign="top">
            <div style="${kbBodyFont()};font-size:${titleSize};font-weight:700;line-height:1.3;color:${titleColor};margin:0 0 8px 0;">
              ${this.getAttribute(`${prefix}-title`)}
            </div>
            <div style="${kbBodyFont()};font-size:${bodySize};line-height:1.45;color:${textColor};">
              ${this.getAttribute(`${prefix}-body`)}
            </div>
          </td>
        </tr>
      </table>
    `
  }

  renderBenefitColumn(index) {
    return `
      <mj-column ${this.htmlAttributes({
        width: this.getAttribute('column-width'),
        padding: '0',
        'css-class': 'kbcapital-benefit-col',
      })}>
        <mj-text padding="0">${this.renderBenefitBlock(index)}</mj-text>
      </mj-column>
    `
  }

  render() {
    const gap = this.getAttribute('gap-width')

    return this.renderMJML(`
      <mj-section ${this.htmlAttributes({
        'background-color': this.getAttribute('background-color'),
        padding: this.getAttribute('padding'),
        'css-class': 'kbcapital-benefits-section',
      })}>
        ${this.renderBenefitColumn(1)}
        <mj-column width="${gap}" css-class="kbcapital-benefit-gap"><mj-spacer height="1px" /></mj-column>
        ${this.renderBenefitColumn(2)}
        <mj-column width="${gap}" css-class="kbcapital-benefit-gap"><mj-spacer height="1px" /></mj-column>
        ${this.renderBenefitColumn(3)}
      </mj-section>
    `)
  }
}
