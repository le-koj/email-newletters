import { BodyComponent } from 'mjml-core'

const IMAGES_BASE = 'resources/images/astravance'

export default class MjAstravanceHeader extends BodyComponent {
  static dependencies = {
    'mj-astravance-header': [],
    'mj-body': ['mj-astravance-header'],
    'mj-wrapper': ['mj-astravance-header'],
  }

  static allowedAttributes = {
    'background-color': 'color',
    'background-url': 'string',
    'background-size': 'string',
    'background-position': 'string',
    'background-repeat': 'enum(repeat,no-repeat)',
    'logo-src': 'string',
    'logo-alt': 'string',
    'logo-width': 'unit(px)',
    'section-height': 'unit(px)',
    padding: 'unit(px){1,4}',
    'logo-padding': 'unit(px){1,4}',
    'spacer-height': 'unit(px)',
  }

  componentHeadStyle = () => {
    const sectionHeight = this.getAttribute('section-height')

    return `
      .astravance-header-logo img {
        display: block !important;
      }
      div.astravance-header-section > table > tbody > tr > td {
        height: ${sectionHeight} !important;
        min-height: ${sectionHeight} !important;
      }
      div.astravance-header-section .mj-column > table > tbody > tr > td {
        height: ${sectionHeight} !important;
        min-height: ${sectionHeight} !important;
      }
      @media only screen and (max-width:480px) {
        div.astravance-header-section > table > tbody > tr > td,
        div.astravance-header-section .mj-column > table > tbody > tr > td {
          height: 160px !important;
          min-height: 160px !important;
        }
        div.astravance-header-section > table > tbody > tr > td {
          padding: 10px 12px 0 !important;
          background-position: left center !important;
        }
        .astravance-header-logo table {
          margin-left: auto !important;
        }
        .astravance-header-logo img {
          width: 112px !important;
          max-width: 112px !important;
        }
        div.astravance-header-spacer > div {
          height: 116px !important;
        }
      }
    `
  }

  static defaultAttributes = {
    'background-color': '#EFEFEF',
    'background-url': `${IMAGES_BASE}/astravance-banner.png`,
    'background-size': 'cover',
    'background-position': 'left center',
    'background-repeat': 'no-repeat',
    'logo-src': `${IMAGES_BASE}/astravance-logo-removebg.png`,
    'logo-alt': 'Astravance Aerospace',
    'logo-width': '132px',
    'section-height': '200px',
    padding: '0',
    'logo-padding': '12px 16px 0 0',
    'spacer-height': '144px',
  }

  render() {
    const bg = this.getAttribute('background-color')

    const wrapperAttrs = this.htmlAttributes({
      'background-color': bg,
    })

    const sectionAttrs = this.htmlAttributes({
      'background-color': bg,
      'background-url': this.getAttribute('background-url'),
      'background-size': this.getAttribute('background-size'),
      'background-position': this.getAttribute('background-position'),
      'background-repeat': this.getAttribute('background-repeat'),
      padding: this.getAttribute('padding'),
      'css-class': 'astravance-header-section',
    })

    const logoAttrs = this.htmlAttributes({
      src: this.getAttribute('logo-src'),
      width: this.getAttribute('logo-width'),
      alt: this.getAttribute('logo-alt'),
      align: 'right',
      padding: this.getAttribute('logo-padding'),
      'css-class': 'astravance-header-logo',
    })

    const spacerAttrs = this.htmlAttributes({
      height: this.getAttribute('spacer-height'),
      'css-class': 'astravance-header-spacer',
    })

    return this.renderMJML(`
      <mj-wrapper ${wrapperAttrs}>
        <mj-section ${sectionAttrs}>
          <mj-column>
            <mj-image ${logoAttrs} />
            <mj-spacer ${spacerAttrs} />
          </mj-column>
        </mj-section>
      </mj-wrapper>
    `)
  }
}
