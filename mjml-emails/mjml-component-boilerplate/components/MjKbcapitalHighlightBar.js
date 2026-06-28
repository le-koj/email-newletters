import { BodyComponent } from 'mjml-core'
import { KB_COLORS, kbBodyFont } from '../kbFontStack'
import { KB_FINANCING_ICON } from '../kbIcons'

export default class MjKbcapitalHighlightBar extends BodyComponent {
  static dependencies = {
    'mj-kbcapital-highlight-bar': [],
    'mj-body': ['mj-kbcapital-highlight-bar'],
    'mj-wrapper': ['mj-kbcapital-highlight-bar'],
  }

  static allowedAttributes = {
    'background-color': 'color',
    'bar-color': 'color',
    'text-color': 'color',
    text: 'string',
    'icon-src': 'string',
    'icon-size': 'unit(px)',
    'border-radius': 'unit(px)',
    padding: 'unit(px){1,4}',
    'bar-padding': 'unit(px){1,4}',
    'font-size': 'unit(px)',
  }

  static defaultAttributes = {
    'background-color': '#FFFFFF',
    'bar-color': KB_COLORS.lightBlue,
    'text-color': KB_COLORS.navy,
    text: '100% FINANCING OF PURCHASE AND REHAB FUNDS \u2022 Up to 75% ARV',
    'icon-src': KB_FINANCING_ICON,
    'icon-size': '40px',
    'border-radius': '8px',
    padding: '0 24px 16px',
    'bar-padding': '14px 16px',
    'font-size': '15px',
  }

  renderBarContent() {
    const textColor = this.getAttribute('text-color')
    const fontSize = this.getAttribute('font-size')
    const iconSize = this.getAttribute('icon-size')

    return `
      <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
        <tr>
          <td width="${iconSize}" valign="middle" style="padding-right:12px;">
            <img src="${this.getAttribute('icon-src')}" width="${parseInt(iconSize, 10)}" alt="" style="display:block;border:0;" />
          </td>
          <td valign="middle" style="${kbBodyFont()};font-size:${fontSize};font-weight:700;line-height:1.4;color:${textColor};">
            ${this.getAttribute('text')}
          </td>
        </tr>
      </table>
    `
  }

  render() {
    return this.renderMJML(`
      <mj-section ${this.htmlAttributes({
        'background-color': this.getAttribute('background-color'),
        padding: this.getAttribute('padding'),
      })}>
        <mj-column
          ${this.htmlAttributes({
            'background-color': this.getAttribute('bar-color'),
            'border-radius': this.getAttribute('border-radius'),
            padding: this.getAttribute('bar-padding'),
          })}
        >
          <mj-text padding="0">${this.renderBarContent()}</mj-text>
        </mj-column>
      </mj-section>
    `)
  }
}
