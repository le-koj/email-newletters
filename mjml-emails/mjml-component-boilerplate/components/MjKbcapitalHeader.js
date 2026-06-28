import { BodyComponent } from 'mjml-core'

export default class MjKbcapitalHeader extends BodyComponent {
  static dependencies = {
    'mj-kbcapital-header': [],
    'mj-body': ['mj-kbcapital-header'],
    'mj-wrapper': ['mj-kbcapital-header'],
  }

  static allowedAttributes = {
    'background-color': 'color',
    'logo-src': 'string',
    'logo-width': 'unit(px,%)',
    'logo-alt': 'string',
    'logo-href': 'string',
    padding: 'unit(px){1,4}',
  }

  static defaultAttributes = {
    'background-color': '#FFFFFF',
    'logo-src': 'https://ik.imagekit.io/lekoj2500/KB-Capital/KB_CAPITAL_LOGO_2024.png',
    'logo-width': '180px',
    'logo-alt': 'KB Capital Group',
    'logo-href': 'https://www.kbcapitalgrp.com',
    padding: '24px 24px 8px',
  }

  render() {
    const imageAttrs = this.htmlAttributes({
      src: this.getAttribute('logo-src'),
      width: this.getAttribute('logo-width'),
      alt: this.getAttribute('logo-alt'),
      href: this.getAttribute('logo-href'),
      align: 'center',
      padding: '0',
    })

    return this.renderMJML(`
      <mj-section ${this.htmlAttributes({
        'background-color': this.getAttribute('background-color'),
        padding: this.getAttribute('padding'),
      })}>
        <mj-column>
          <mj-image ${imageAttrs} />
        </mj-column>
      </mj-section>
    `)
  }
}
