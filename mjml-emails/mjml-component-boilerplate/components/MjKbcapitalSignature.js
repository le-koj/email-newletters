import { BodyComponent } from 'mjml-core'
import { KB_COLORS, kbBodyFont } from '../kbFontStack'

export default class MjKbcapitalSignature extends BodyComponent {
  static dependencies = {
    'mj-kbcapital-signature': [],
    'mj-body': ['mj-kbcapital-signature'],
    'mj-wrapper': ['mj-kbcapital-signature'],
  }

  static allowedAttributes = {
    'background-color': 'color',
    'accent-color': 'color',
    'name-color': 'color',
    'text-color': 'color',
    'link-color': 'color',
    greeting: 'string',
    name: 'string',
    title: 'string',
    address: 'string',
    phone: 'string',
    email: 'string',
    'email-href': 'string',
    padding: 'unit(px){1,4}',
    'accent-width': 'unit(px)',
    'font-size': 'unit(px)',
  }

  componentHeadStyle = () => `
    @media only screen and (max-width:480px) {
      div.kbcapital-signature-section > table > tbody > tr > td {
        padding: 28px 20px 24px !important;
      }
    }
  `

  static defaultAttributes = {
    'background-color': '#FFFFFF',
    'accent-color': KB_COLORS.blue,
    'name-color': KB_COLORS.blue,
    'text-color': KB_COLORS.text,
    'link-color': KB_COLORS.accent,
    greeting: 'Kind Regards,',
    name: 'Kory Balogun',
    title: 'Account Manager',
    address: '5652 Fallbrook Ave, Woodland Hills CA 91367',
    phone: 'Phone: 888-886-6115',
    email: 'kory@kbcapitalgrp.com',
    'email-href': 'mailto:kory@kbcapitalgrp.com',
    padding: '36px 24px 24px',
    'accent-width': '3px',
    'font-size': '16px',
  }

  renderLine(text, extraStyle = '') {
    const textColor = this.getAttribute('text-color')
    const fontSize = this.getAttribute('font-size')

    return `
      <div style="${kbBodyFont()};font-size:${fontSize};line-height:1.5;color:${textColor};margin:0 0 4px 0;${extraStyle}">
        ${text}
      </div>
    `
  }

  render() {
    const nameColor = this.getAttribute('name-color')
    const linkColor = this.getAttribute('link-color')
    const fontSize = this.getAttribute('font-size')
    const accent = this.getAttribute('accent-color')
    const accentWidth = this.getAttribute('accent-width')

    const content = `
      ${this.renderLine(this.getAttribute('greeting'))}
      <div style="${kbBodyFont()};font-size:${fontSize};font-weight:600;line-height:1.5;color:${nameColor};margin:0 0 2px 0;">
        ${this.getAttribute('name')}
      </div>
      ${this.renderLine(this.getAttribute('title'), 'margin-bottom:12px;')}
      ${this.renderLine(this.getAttribute('address'))}
      ${this.renderLine(this.getAttribute('phone'))}
      <div style="${kbBodyFont()};font-size:${fontSize};line-height:1.5;color:${this.getAttribute('text-color')};margin:0;">
        Email:
        <a href="${this.getAttribute('email-href')}" style="color:${linkColor};text-decoration:underline;">
          ${this.getAttribute('email')}
        </a>
      </div>
    `

    return this.renderMJML(`
      <mj-section ${this.htmlAttributes({
        'background-color': this.getAttribute('background-color'),
        padding: this.getAttribute('padding'),
        'css-class': 'kbcapital-signature-section',
      })}>
        <mj-column padding="0 0 0 20px" border-left="${accentWidth} solid ${accent}">
          <mj-text padding="0">${content}</mj-text>
        </mj-column>
      </mj-section>
    `)
  }
}
