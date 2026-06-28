import { BodyComponent } from 'mjml-core'
import { KB_COLORS, kbBodyFont } from '../kbFontStack'

export default class MjKbcapitalFooter extends BodyComponent {
  static dependencies = {
    'mj-kbcapital-footer': [],
    'mj-body': ['mj-kbcapital-footer'],
    'mj-wrapper': ['mj-kbcapital-footer'],
  }

  static allowedAttributes = {
    'background-color': 'color',
    'text-color': 'color',
    'link-color': 'color',
    copyright: 'string',
    'unsubscribe-text': 'string',
    'unsubscribe-href': 'string',
    padding: 'unit(px){1,4}',
    'font-size': 'unit(px)',
    'copyright-width': 'unit(px,%)',
    'links-width': 'unit(px,%)',
  }

  componentHeadStyle = () => `
    @media only screen and (max-width:480px) {
      div.kbcapital-footer-copy,
      div.kbcapital-footer-links {
        width: 100% !important;
        max-width: 100% !important;
        display: block !important;
      }
      div.kbcapital-footer-copy > table > tbody > tr > td,
      div.kbcapital-footer-links > table > tbody > tr > td,
      div.kbcapital-footer-links table table td {
        width: 100% !important;
        display: block !important;
        text-align: center !important;
        padding: 0 !important;
      }
      div.kbcapital-footer-links div {
        text-align: center !important;
      }
      div.kbcapital-footer-links > table > tbody > tr > td {
        padding-top: 8px !important;
      }
    }
  `

  static defaultAttributes = {
    'background-color': KB_COLORS.grayBg,
    'text-color': KB_COLORS.muted,
    'link-color': KB_COLORS.accent,
    copyright: '\u00a9 Copyright 2026. KB Capital Group. All Rights Reserved.',
    'unsubscribe-text': 'Unsubscribe',
    'unsubscribe-href': 'sr_unsubscribe',
    padding: '20px 24px',
    'font-size': '12px',
    'copyright-width': '70%',
    'links-width': '30%',
  }

  render() {
    const textColor = this.getAttribute('text-color')
    const linkColor = this.getAttribute('link-color')
    const fontSize = this.getAttribute('font-size')

    const copyright = `
      <div style="${kbBodyFont()};font-size:${fontSize};line-height:1.5;color:${textColor};">
        ${this.getAttribute('copyright')}
      </div>
    `

    const unsubscribe = `
      <a href="${this.getAttribute('unsubscribe-href')}" style="${kbBodyFont()};font-size:${fontSize};line-height:1.5;color:${linkColor};text-decoration:underline;">
        ${this.getAttribute('unsubscribe-text')}
      </a>
    `

    return this.renderMJML(`
      <mj-section ${this.htmlAttributes({
        'background-color': this.getAttribute('background-color'),
        padding: this.getAttribute('padding'),
      })}>
        <mj-column ${this.htmlAttributes({
          width: this.getAttribute('copyright-width'),
          padding: '0',
          'css-class': 'kbcapital-footer-copy',
        })}>
          <mj-text padding="0" align="left">${copyright}</mj-text>
        </mj-column>
        <mj-column ${this.htmlAttributes({
          width: this.getAttribute('links-width'),
          padding: '0',
          'css-class': 'kbcapital-footer-links',
        })}>
          <mj-text padding="0" align="right">${unsubscribe}</mj-text>
        </mj-column>
      </mj-section>
    `)
  }
}
