import { BodyComponent } from 'mjml-core'
import { KB_COLORS, kbBodyFont, kbHeadingFont } from '../kbFontStack'

export default class MjKbcapitalValueCards extends BodyComponent {
  static dependencies = {
    'mj-kbcapital-value-cards': [],
    'mj-body': ['mj-kbcapital-value-cards'],
    'mj-wrapper': ['mj-kbcapital-value-cards'],
  }

  static allowedAttributes = {
    'background-color': 'color',
    'card-color': 'color',
    'value-color': 'color',
    'label-color': 'color',
    padding: 'unit(px){1,4}',
    'card-padding': 'unit(px){1,4}',
    'border-radius': 'unit(px)',
    'column-width': 'unit(px,%)',
    'gap-width': 'unit(px,%)',
    'value-font-size': 'unit(px)',
    'label-font-size': 'unit(px)',
    'card-1-value': 'string',
    'card-1-label': 'string',
    'card-2-value': 'string',
    'card-2-label': 'string',
    'card-3-value': 'string',
    'card-3-label': 'string',
  }

  componentHeadStyle = () => `
    .kbcapital-value-card > table > tbody > tr > td {
      min-height: 96px !important;
      vertical-align: middle !important;
      box-sizing: border-box !important;
    }
    @media only screen and (max-width:480px) {
      div.kbcapital-value-cards-section > table > tbody > tr > td {
        padding-left: 20px !important;
        padding-right: 20px !important;
        padding-bottom: 28px !important;
      }
      .kbcapital-value-gap { display: none !important; max-height: 0 !important; overflow: hidden !important; }
      .kbcapital-value-card { padding: 12px 0 !important; }
      .kbcapital-value-card > table > tbody > tr > td { min-height: auto !important; }
    }
  `

  static defaultAttributes = {
    'background-color': '#FFFFFF',
    'card-color': KB_COLORS.navy,
    'value-color': KB_COLORS.white,
    'label-color': KB_COLORS.lightBlue,
    padding: '0 24px 36px',
    'card-padding': '18px 12px',
    'border-radius': '8px',
    'column-width': '31%',
    'gap-width': '3.5%',
    'value-font-size': '24px',
    'label-font-size': '12px',
    'card-1-value': '100%',
    'card-1-label': 'Purchase & Rehab Financing',
    'card-2-value': '75%',
    'card-2-label': 'Up to ARV',
    'card-3-value': '10.99%',
    'card-3-label': 'Rates As Low As',
  }

  renderCard(index) {
    const prefix = `card-${index}`
    const valueColor = this.getAttribute('value-color')
    const labelColor = this.getAttribute('label-color')
    const valueSize = this.getAttribute('value-font-size')
    const labelSize = this.getAttribute('label-font-size')

    return `
      <mj-text padding="0 0 6px 0" align="center">
        <div style="${kbHeadingFont()};font-size:${valueSize};font-weight:700;line-height:1.2;color:${valueColor};">
          ${this.getAttribute(`${prefix}-value`)}
        </div>
      </mj-text>
      <mj-text padding="0" align="center">
        <div style="${kbBodyFont()};font-size:${labelSize};font-weight:700;line-height:1.35;color:${labelColor};">
          ${this.getAttribute(`${prefix}-label`)}
        </div>
      </mj-text>
    `
  }

  renderCardColumn(index) {
    return `
      <mj-column ${this.htmlAttributes({
        width: this.getAttribute('column-width'),
        'background-color': this.getAttribute('card-color'),
        'border-radius': this.getAttribute('border-radius'),
        padding: this.getAttribute('card-padding'),
        'css-class': 'kbcapital-value-card',
      })}>
        ${this.renderCard(index)}
      </mj-column>
    `
  }

  render() {
    const gap = this.getAttribute('gap-width')

    return this.renderMJML(`
      <mj-section ${this.htmlAttributes({
        'background-color': this.getAttribute('background-color'),
        padding: this.getAttribute('padding'),
        'css-class': 'kbcapital-value-cards-section',
      })}>
        ${this.renderCardColumn(1)}
        <mj-column width="${gap}" css-class="kbcapital-value-gap"><mj-spacer height="1px" /></mj-column>
        ${this.renderCardColumn(2)}
        <mj-column width="${gap}" css-class="kbcapital-value-gap"><mj-spacer height="1px" /></mj-column>
        ${this.renderCardColumn(3)}
      </mj-section>
    `)
  }
}
