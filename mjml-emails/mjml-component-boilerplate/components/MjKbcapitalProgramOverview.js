import { BodyComponent } from 'mjml-core'
import { KB_COLORS, kbBodyFont, kbHeadingFont } from '../kbFontStack'

export default class MjKbcapitalProgramOverview extends BodyComponent {
  static dependencies = {
    'mj-kbcapital-program-overview': [],
    'mj-body': ['mj-kbcapital-program-overview'],
    'mj-wrapper': ['mj-kbcapital-program-overview'],
  }

  static allowedAttributes = {
    'background-color': 'color',
    'box-color': 'color',
    'accent-color': 'color',
    'title-color': 'color',
    'text-color': 'color',
    title: 'string',
    'line-1': 'string',
    'line-2': 'string',
    'line-3': 'string',
    'line-4': 'string',
    'line-5': 'string',
    padding: 'unit(px){1,4}',
    'box-padding': 'unit(px){1,4}',
    'border-radius': 'unit(px)',
    'accent-width': 'unit(px)',
    'title-font-size': 'unit(px)',
    'body-font-size': 'unit(px)',
  }

  componentHeadStyle = () => `
    @media only screen and (max-width:480px) {
      div.kbcapital-program-overview-section > table > tbody > tr > td {
        padding-left: 20px !important;
        padding-right: 20px !important;
        padding-bottom: 28px !important;
      }
    }
  `

  static defaultAttributes = {
    'background-color': '#FFFFFF',
    'box-color': KB_COLORS.grayBg,
    'border-color': KB_COLORS.border,
    'accent-color': KB_COLORS.blue,
    'title-color': KB_COLORS.navy,
    'text-color': KB_COLORS.text,
    title: 'Program Overview',
    'line-1': '<strong>Term:</strong> 9-month loan with 3-month optional extension (extension fee applies).',
    'line-2': '<strong>Loan Amount:</strong> $100k \u2013 $1.25M',
    'line-3': '<strong>Points:</strong> As low as 2.0%',
    'line-4': 'Easy draw process and in-house loan servicing.',
    'line-5': '<strong>Nationwide</strong>',
    padding: '0 24px 36px',
    'box-padding': '20px 20px 20px 16px',
    'border-radius': '8px',
    'accent-width': '4px',
    'title-font-size': '18px',
    'body-font-size': '16px',
  }

  renderLine(text, isLast = false) {
    const textColor = this.getAttribute('text-color')
    const bodySize = this.getAttribute('body-font-size')
    const padding = isLast ? '0' : '0 0 8px 0'

    return `
      <div style="${kbBodyFont()};font-size:${bodySize};line-height:1.5;color:${textColor};margin:${isLast ? '0' : '0 0 8px 0'};padding:${padding};">
        ${text}
      </div>
    `
  }

  render() {
    const titleColor = this.getAttribute('title-color')
    const titleSize = this.getAttribute('title-font-size')
    const accent = this.getAttribute('accent-color')
    const accentWidth = this.getAttribute('accent-width')

    const content = `
      <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
        <tr>
          <td width="${accentWidth}" style="border-left:${accentWidth} solid ${accent};font-size:0;line-height:0;">&nbsp;</td>
          <td style="padding-left:16px;">
            <div style="${kbHeadingFont()};font-size:${titleSize};font-weight:700;line-height:1.3;color:${titleColor};margin:0 0 12px 0;">
              ${this.getAttribute('title')}
            </div>
            ${this.renderLine(this.getAttribute('line-1'))}
            ${this.renderLine(this.getAttribute('line-2'))}
            ${this.renderLine(this.getAttribute('line-3'))}
            ${this.renderLine(this.getAttribute('line-4'))}
            ${this.renderLine(this.getAttribute('line-5'), true)}
          </td>
        </tr>
      </table>
    `

    return this.renderMJML(`
      <mj-section ${this.htmlAttributes({
        'background-color': this.getAttribute('background-color'),
        padding: this.getAttribute('padding'),
        'css-class': 'kbcapital-program-overview-section',
      })}>
        <mj-column
          ${this.htmlAttributes({
            'background-color': this.getAttribute('box-color'),
            'border-radius': this.getAttribute('border-radius'),
            padding: this.getAttribute('box-padding'),
          })}
        >
          <mj-text padding="0">${content}</mj-text>
        </mj-column>
      </mj-section>
    `)
  }
}
