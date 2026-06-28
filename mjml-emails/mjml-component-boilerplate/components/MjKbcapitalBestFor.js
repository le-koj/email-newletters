import { BodyComponent } from 'mjml-core'
import { KB_COLORS, kbBodyFont } from '../kbFontStack'

export default class MjKbcapitalBestFor extends BodyComponent {
  static dependencies = {
    'mj-kbcapital-best-for': [],
    'mj-body': ['mj-kbcapital-best-for'],
    'mj-wrapper': ['mj-kbcapital-best-for'],
  }

  static allowedAttributes = {
    'background-color': 'color',
    'label-color': 'color',
    'text-color': 'color',
    label: 'string',
    text: 'string',
    padding: 'unit(px){1,4}',
    'font-size': 'unit(px)',
  }

  static defaultAttributes = {
    'background-color': '#FFFFFF',
    'label-color': KB_COLORS.blue,
    'text-color': KB_COLORS.text,
    label: 'Best For:',
    text: 'The 100% Fix & Flip Premier Loan is perfect for the real estate investor looking to minimize cash needed at closing with same-day approval and fast funding.',
    padding: '0 24px 24px',
    'font-size': '16px',
  }

  render() {
    const labelColor = this.getAttribute('label-color')
    const textColor = this.getAttribute('text-color')
    const fontSize = this.getAttribute('font-size')

    return this.renderMJML(`
      <mj-section ${this.htmlAttributes({
        'background-color': this.getAttribute('background-color'),
        padding: this.getAttribute('padding'),
      })}>
        <mj-column>
          <mj-text padding="0" align="center">
            <div style="${kbBodyFont()};font-size:${fontSize};line-height:1.6;color:${textColor};">
              <span style="color:${labelColor};font-weight:700;">${this.getAttribute('label')}</span>
              ${this.getAttribute('text')}
            </div>
          </mj-text>
        </mj-column>
      </mj-section>
    `)
  }
}
