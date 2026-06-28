import { BodyComponent } from 'mjml-core'
import { KB_COLORS, kbBodyFont, kbHeadingFont } from '../kbFontStack'

export default class MjKbcapitalProductHeadline extends BodyComponent {
  static dependencies = {
    'mj-kbcapital-product-headline': [],
    'mj-body': ['mj-kbcapital-product-headline'],
    'mj-wrapper': ['mj-kbcapital-product-headline'],
  }

  static allowedAttributes = {
    'background-color': 'color',
    'title-color': 'color',
    'subtitle-color': 'color',
    title: 'string',
    subtitle: 'string',
    padding: 'unit(px){1,4}',
    'title-font-size': 'unit(px)',
    'subtitle-font-size': 'unit(px)',
  }

  static defaultAttributes = {
    'background-color': '#FFFFFF',
    'title-color': KB_COLORS.navy,
    'subtitle-color': KB_COLORS.text,
    title: '100% Fix & Flip/Ground Up Construction Loan',
    subtitle: 'No Down Payment | Rate: as low as 10.99%',
    padding: '8px 24px 16px',
    'title-font-size': '24px',
    'subtitle-font-size': '16px',
  }

  render() {
    const titleColor = this.getAttribute('title-color')
    const subtitleColor = this.getAttribute('subtitle-color')
    const titleSize = this.getAttribute('title-font-size')
    const subtitleSize = this.getAttribute('subtitle-font-size')

    return this.renderMJML(`
      <mj-section ${this.htmlAttributes({
        'background-color': this.getAttribute('background-color'),
        padding: this.getAttribute('padding'),
      })}>
        <mj-column>
          <mj-text padding="0 0 10px 0" align="center">
            <div style="${kbHeadingFont()};font-size:${titleSize};font-weight:700;line-height:1.3;color:${titleColor};">
              ${this.getAttribute('title')}
            </div>
          </mj-text>
          <mj-text padding="0" align="center">
            <div style="${kbBodyFont()};font-size:${subtitleSize};line-height:1.5;color:${subtitleColor};">
              ${this.getAttribute('subtitle')}
            </div>
          </mj-text>
        </mj-column>
      </mj-section>
    `)
  }
}
