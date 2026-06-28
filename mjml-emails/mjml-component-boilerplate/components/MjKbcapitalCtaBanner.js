import { BodyComponent } from 'mjml-core'
import { KB_COLORS, kbHeadingFont } from '../kbFontStack'

export default class MjKbcapitalCtaBanner extends BodyComponent {
  static dependencies = {
    'mj-kbcapital-cta-banner': [],
    'mj-body': ['mj-kbcapital-cta-banner'],
    'mj-wrapper': ['mj-kbcapital-cta-banner'],
  }

  static allowedAttributes = {
    'background-color': 'color',
    'banner-color': 'color',
    'text-color': 'color',
    'button-color': 'color',
    'button-text-color': 'color',
    headline: 'string',
    href: 'string',
    'button-text': 'string',
    padding: 'unit(px){1,4}',
    'banner-padding': 'unit(px){1,4}',
    'border-radius': 'unit(px)',
    'text-width': 'unit(px,%)',
    'button-width': 'unit(px,%)',
    'headline-font-size': 'unit(px)',
    'button-font-size': 'unit(px)',
    'button-inner-padding': 'unit(px){1,4}',
    'button-border-radius': 'unit(px)',
  }

  componentHeadStyle = () => `
    @media only screen and (max-width:480px) {
      div.kbcapital-cta-banner-section > table > tbody > tr > td {
        padding-left: 20px !important;
        padding-right: 20px !important;
        padding-bottom: 32px !important;
      }
      div.kbcapital-cta-banner-inner > table > tbody > tr > td {
        padding: 24px !important;
      }
      div.kbcapital-cta-banner-text > table > tbody > tr > td,
      div.kbcapital-cta-banner-button > table > tbody > tr > td {
        width: 100% !important;
        display: block !important;
        text-align: center !important;
        padding: 0 !important;
      }
      div.kbcapital-cta-banner-button > table > tbody > tr > td {
        padding-top: 16px !important;
      }
    }
  `

  static defaultAttributes = {
    'background-color': '#FFFFFF',
    'banner-color': KB_COLORS.navy,
    'text-color': KB_COLORS.white,
    'button-color': KB_COLORS.blue,
    'button-text-color': KB_COLORS.white,
    headline: 'Schedule a Loan Review With Your Account Executive',
    href: 'https://www.kbcapitalgrp.com/loan-programs/',
    'button-text': 'Quick Scenario >',
    padding: '0 24px 40px',
    'banner-padding': '24px',
    'border-radius': '8px',
    'text-width': '62%',
    'button-width': '38%',
    'headline-font-size': '18px',
    'button-font-size': '16px',
    'button-inner-padding': '12px 24px',
    'button-border-radius': '22px',
  }

  render() {
    const textColor = this.getAttribute('text-color')
    const headlineSize = this.getAttribute('headline-font-size')

    const buttonAttrs = this.htmlAttributes({
      href: this.getAttribute('href'),
      'background-color': this.getAttribute('button-color'),
      color: this.getAttribute('button-text-color'),
      'font-size': this.getAttribute('button-font-size'),
      'font-weight': '700',
      'inner-padding': this.getAttribute('button-inner-padding'),
      'border-radius': this.getAttribute('button-border-radius'),
      align: 'right',
      padding: '0',
    })

    return this.renderMJML(`
      <mj-section ${this.htmlAttributes({
        'background-color': this.getAttribute('background-color'),
        padding: this.getAttribute('padding'),
        'css-class': 'kbcapital-cta-banner-section',
      })}>
        <mj-column>
          <mj-wrapper ${this.htmlAttributes({
            'background-color': this.getAttribute('banner-color'),
            'border-radius': this.getAttribute('border-radius'),
            padding: '0',
          })}>
            <mj-section ${this.htmlAttributes({
              padding: this.getAttribute('banner-padding'),
              'css-class': 'kbcapital-cta-banner-inner',
            })}>
              <mj-column ${this.htmlAttributes({
                width: this.getAttribute('text-width'),
                'vertical-align': 'middle',
                padding: '0 16px 0 0',
                'css-class': 'kbcapital-cta-banner-text',
              })}>
                <mj-text padding="0" align="left">
                  <div style="${kbHeadingFont()};font-size:${headlineSize};font-weight:600;line-height:1.35;letter-spacing:0.3px;color:${textColor};">
                    ${this.getAttribute('headline')}
                  </div>
                </mj-text>
              </mj-column>
              <mj-column ${this.htmlAttributes({
                width: this.getAttribute('button-width'),
                'vertical-align': 'middle',
                padding: '0',
                'css-class': 'kbcapital-cta-banner-button',
              })}>
                <mj-button ${buttonAttrs}>${this.getAttribute('button-text')}</mj-button>
              </mj-column>
            </mj-section>
          </mj-wrapper>
        </mj-column>
      </mj-section>
    `)
  }
}
