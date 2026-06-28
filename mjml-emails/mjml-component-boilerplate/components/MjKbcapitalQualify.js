import { BodyComponent } from 'mjml-core'
import { KB_COLORS, kbBodyFont, kbHeadingFont } from '../kbFontStack'
import { KB_CHECK_ICON } from '../kbIcons'

export default class MjKbcapitalQualify extends BodyComponent {
  static dependencies = {
    'mj-kbcapital-qualify': [],
    'mj-body': ['mj-kbcapital-qualify'],
    'mj-wrapper': ['mj-kbcapital-qualify'],
  }

  static allowedAttributes = {
    'background-color': 'color',
    'box-color': 'color',
    'title-color': 'color',
    'text-color': 'color',
    'aside-color': 'color',
    title: 'string',
    'cash-line': 'string',
    'credit-line': 'string',
    'documents-line': 'string',
    'aside-text': 'string',
    'icon-src': 'string',
    'icon-size': 'unit(px)',
    padding: 'unit(px){1,4}',
    'box-padding': 'unit(px){1,4}',
    'border-radius': 'unit(px)',
    'content-width': 'unit(px,%)',
    'aside-width': 'unit(px,%)',
    'title-font-size': 'unit(px)',
    'body-font-size': 'unit(px)',
  }

  componentHeadStyle = () => `
    @media only screen and (max-width:480px) {
      div.kbcapital-qualify-section > table > tbody > tr > td {
        padding-left: 20px !important;
        padding-right: 20px !important;
        padding-bottom: 32px !important;
      }
      div.kbcapital-qualify-inner > table > tbody > tr > td {
        padding: 24px !important;
      }
      div.kbcapital-qualify-content > table > tbody > tr > td,
      div.kbcapital-qualify-aside > table > tbody > tr > td {
        width: 100% !important;
        display: block !important;
        padding: 0 !important;
      }
      div.kbcapital-qualify-aside > table > tbody > tr > td {
        padding-top: 16px !important;
      }
    }
  `

  static defaultAttributes = {
    'background-color': '#FFFFFF',
    'box-color': KB_COLORS.lightBlue,
    'title-color': KB_COLORS.blue,
    'text-color': KB_COLORS.text,
    'aside-color': KB_COLORS.navy,
    title: 'DO YOU QUALIFY?',
    'cash-line': '<strong>Cash:</strong> $15,000 or 25% of rehab budget, whichever is greater, plus closing costs.',
    'credit-line': '<strong>Credit:</strong> Minimum 650 credit score.',
    'documents-line': '<strong>Only Six Documents Required:</strong> 1) Completed Application 2) Signed Business Entity Documents 3) Signed Agreement of Sale 4) Three months of Bank Statements 5) Valid Government Issued Photo ID 6) Itemized List of Repairs.',
    'aside-text': 'Ground Up Loan Options Available',
    'icon-src': KB_CHECK_ICON,
    'icon-size': '28px',
    padding: '0 24px 40px',
    'box-padding': '24px',
    'border-radius': '8px',
    'content-width': '68%',
    'aside-width': '32%',
    'title-font-size': '20px',
    'body-font-size': '16px',
  }

  renderLine(text) {
    const textColor = this.getAttribute('text-color')
    const bodySize = this.getAttribute('body-font-size')

    return `
      <div style="${kbBodyFont()};font-size:${bodySize};line-height:1.5;color:${textColor};margin:0 0 8px 0;">
        ${text}
      </div>
    `
  }

  renderAside() {
    const asideColor = this.getAttribute('aside-color')
    const bodySize = this.getAttribute('body-font-size')
    const iconSize = this.getAttribute('icon-size')

    return `
      <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
        <tr>
          <td width="${iconSize}" valign="top" style="padding-right:10px;padding-top:2px;">
            <img src="${this.getAttribute('icon-src')}" width="${parseInt(iconSize, 10)}" alt="" style="display:block;border:0;" />
          </td>
          <td valign="top" style="${kbBodyFont()};font-size:${bodySize};font-weight:600;line-height:1.4;color:${asideColor};">
            ${this.getAttribute('aside-text')}
          </td>
        </tr>
      </table>
    `
  }

  render() {
    const titleColor = this.getAttribute('title-color')
    const titleSize = this.getAttribute('title-font-size')

    const mainContent = `
      <div style="${kbHeadingFont()};font-size:${titleSize};font-weight:600;line-height:1.3;letter-spacing:0.5px;color:${titleColor};margin:0 0 14px 0;">
        ${this.getAttribute('title')}
      </div>
      ${this.renderLine(this.getAttribute('cash-line'))}
      ${this.renderLine(this.getAttribute('credit-line'))}
      ${this.renderLine(this.getAttribute('documents-line'))}
    `

    return this.renderMJML(`
      <mj-section ${this.htmlAttributes({
        'background-color': this.getAttribute('background-color'),
        padding: this.getAttribute('padding'),
        'css-class': 'kbcapital-qualify-section',
      })}>
        <mj-column>
          <mj-wrapper ${this.htmlAttributes({
            'background-color': this.getAttribute('box-color'),
            'border-radius': this.getAttribute('border-radius'),
            padding: '0',
          })}>
            <mj-section ${this.htmlAttributes({
              padding: this.getAttribute('box-padding'),
              'css-class': 'kbcapital-qualify-inner',
            })}>
              <mj-column ${this.htmlAttributes({
                width: this.getAttribute('content-width'),
                padding: '0 16px 0 0',
                'css-class': 'kbcapital-qualify-content',
              })}>
                <mj-text padding="0">${mainContent}</mj-text>
              </mj-column>
              <mj-column ${this.htmlAttributes({
                width: this.getAttribute('aside-width'),
                'vertical-align': 'middle',
                padding: '0',
                'css-class': 'kbcapital-qualify-aside',
              })}>
                <mj-text padding="0">${this.renderAside()}</mj-text>
              </mj-column>
            </mj-section>
          </mj-wrapper>
        </mj-column>
      </mj-section>
    `)
  }
}
