import { BodyComponent } from 'mjml-core'

export default class MjLunaraHeader extends BodyComponent {
  static dependencies = {
    'mj-lunara-header': [],
    'mj-body': ['mj-lunara-header'],
    'mj-wrapper': ['mj-lunara-header'],
  }

  static allowedAttributes = {
    'background-color': 'color',
    'logo-src': 'string',
    'logo-width': 'unit(px,%)',
    'logo-alt': 'string',
    padding: 'unit(px){1,4}',
    'padding-top': 'unit(px)',
    'padding-bottom': 'unit(px)',
    'padding-left': 'unit(px)',
    'padding-right': 'unit(px)',
  }

  static defaultAttributes = {
    'background-color': '#000000',
    'logo-src': 'lunara-images/lunara-logo-white-removebg.png',
    'logo-width': '160px',
    'logo-alt': 'Lunara',
    padding: '32px 24px 24px',
  }

  render() {
    const sectionAttrs = this.htmlAttributes({
      'background-color': this.getAttribute('background-color'),
      padding: this.getAttribute('padding'),
      'padding-top': this.getAttribute('padding-top'),
      'padding-bottom': this.getAttribute('padding-bottom'),
      'padding-left': this.getAttribute('padding-left'),
      'padding-right': this.getAttribute('padding-right'),
    })

    const imageAttrs = this.htmlAttributes({
      src: this.getAttribute('logo-src'),
      width: this.getAttribute('logo-width'),
      alt: this.getAttribute('logo-alt'),
      align: 'center',
      padding: '0',
    })

    return this.renderMJML(`
      <mj-section ${sectionAttrs}>
        <mj-column>
          <mj-image ${imageAttrs} />
        </mj-column>
      </mj-section>
    `)
  }
}
