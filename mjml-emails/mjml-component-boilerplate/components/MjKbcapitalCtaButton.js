import { BodyComponent } from 'mjml-core'
import { KB_COLORS } from '../kbFontStack'

export default class MjKbcapitalCtaButton extends BodyComponent {
  static dependencies = {
    'mj-kbcapital-cta-button': [],
    'mj-body': ['mj-kbcapital-cta-button'],
    'mj-wrapper': ['mj-kbcapital-cta-button'],
  }

  static allowedAttributes = {
    'background-color': 'color',
    'button-color': 'color',
    'button-text-color': 'color',
    href: 'string',
    text: 'string',
    padding: 'unit(px){1,4}',
    'border-radius': 'unit(px)',
    'font-size': 'unit(px)',
    'inner-padding': 'unit(px){1,4}',
  }

  static defaultAttributes = {
    'background-color': '#FFFFFF',
    'button-color': KB_COLORS.blue,
    'button-text-color': KB_COLORS.white,
    href: 'https://www.kbcapitalgrp.com/loan-programs/',
    text: 'Quick Scenario',
    padding: '0 24px 24px',
    'border-radius': '22px',
    'font-size': '16px',
    'inner-padding': '12px 32px',
  }

  render() {
    const buttonAttrs = this.htmlAttributes({
      href: this.getAttribute('href'),
      'background-color': this.getAttribute('button-color'),
      color: this.getAttribute('button-text-color'),
      'border-radius': this.getAttribute('border-radius'),
      'font-size': this.getAttribute('font-size'),
      'font-weight': '700',
      'inner-padding': this.getAttribute('inner-padding'),
      align: 'center',
      padding: '0',
    })

    return this.renderMJML(`
      <mj-section ${this.htmlAttributes({
        'background-color': this.getAttribute('background-color'),
        padding: this.getAttribute('padding'),
      })}>
        <mj-column>
          <mj-button ${buttonAttrs}>${this.getAttribute('text')}</mj-button>
        </mj-column>
      </mj-section>
    `)
  }
}
