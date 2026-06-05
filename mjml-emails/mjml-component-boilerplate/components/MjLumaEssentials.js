import { BodyComponent } from 'mjml-core'

const IMAGES_BASE = 'resources/images/luma'

export default class MjLumaEssentials extends BodyComponent {
  static dependencies = {
    'mj-luma-essentials': [],
    'mj-body': ['mj-luma-essentials'],
    'mj-wrapper': ['mj-luma-essentials'],
  }

  static allowedAttributes = {
    'background-color': 'color',
    'font-family': 'string',
    'image-column-width': 'unit(px,%)',
    'content-column-width': 'unit(px,%)',
    'image-border-radius': 'unit(px,%)',
    'image-1-src': 'string',
    'image-1-alt': 'string',
    'image-2-src': 'string',
    'image-2-alt': 'string',
    'eyebrow-text': 'string',
    'eyebrow-color': 'color',
    'eyebrow-font-size': 'unit(px)',
    'heading-text': 'string',
    'heading-color': 'color',
    'heading-font-size': 'unit(px)',
    'body-text': 'string',
    'body-color': 'color',
    'body-font-size': 'unit(px)',
    'button-text': 'string',
    'button-href': 'string',
    'button-background-color': 'color',
    'button-color': 'color',
    'button-font-size': 'unit(px)',
    padding: 'unit(px){1,4}',
    'image-column-padding': 'unit(px){1,4}',
    'content-column-padding': 'unit(px){1,4}',
    'eyebrow-padding': 'unit(px){1,4}',
    'heading-padding': 'unit(px){1,4}',
    'body-padding': 'unit(px){1,4}',
    'button-padding': 'unit(px){1,4}',
  }

  componentHeadStyle = () => {
    const radius = this.getAttribute('image-border-radius')

    return `
    .luma-essentials-image img {
      border-radius: ${radius} !important;
    }
    .luma-essentials-eyebrow div,
    .luma-essentials-body div {
      line-height: 1.4 !important;
    }
    .luma-essentials-heading div {
      line-height: 1.2 !important;
    }
    @media only screen and (max-width:480px) {
      div.luma-essentials-section > table > tbody > tr > td {
        padding: 20px 10px !important;
      }
      div.luma-essentials-image-col,
      div.luma-essentials-content-col {
        width: 100% !important;
        max-width: 100% !important;
      }
      div.luma-essentials-image-col > table > tbody > tr > td {
        padding: 0 0 8px !important;
      }
      div.luma-essentials-image-col-2 > table > tbody > tr > td {
        padding: 0 0 16px !important;
      }
      div.luma-essentials-content-col > table > tbody > tr > td {
        padding: 0 !important;
      }
      .luma-essentials-heading div {
        font-size: 24px !important;
      }
      .luma-essentials-image table {
        width: 100% !important;
      }
      .luma-essentials-image td {
        width: 100% !important;
      }
      .luma-essentials-image img {
        width: 100% !important;
        max-width: 100% !important;
        height: auto !important;
      }
    }
  `
  }

  static defaultAttributes = {
    'background-color': '#FFFFFF',
    'font-family': 'Inter, Helvetica, Arial, sans-serif',
    'image-column-width': '29%',
    'content-column-width': '42%',
    'image-border-radius': '10px',
    'image-1-src': `${IMAGES_BASE}/luma-oil.png`,
    'image-1-alt': 'Luma Botanics Renew serum',
    'image-2-src': `${IMAGES_BASE}/luma-cream.png`,
    'image-2-alt': 'Luma Botanics nourishing cream',
    'eyebrow-text': 'DAILY CARE. REAL RESULTS.',
    'eyebrow-color': '#B89585',
    'eyebrow-font-size': '11px',
    'heading-text': 'Everyday Essentials',
    'heading-color': '#1A1A1A',
    'heading-font-size': '28px',
    'body-text':
      'Thoughtful formulas for healthy, balanced, radiant skin—every single day.',
    'body-color': '#4A4A4A',
    'body-font-size': '14px',
    'button-text': 'Shop essentials',
    'button-href': '#',
    'button-background-color': '#C08070',
    'button-color': '#FFFFFF',
    'button-font-size': '14px',
    padding: '24px 10px',
    'image-column-padding': '0 4px 0 0',
    'content-column-padding': '20px 0 20px 20px',
    'eyebrow-padding': '0 0 8px 0',
    'heading-padding': '0 0 12px 0',
    'body-padding': '0 0 20px 0',
    'button-padding': '0',
  }

  renderImageColumn(index) {
    const prefix = `image-${index}`
    const columnWidth = this.getAttribute('image-column-width')
    const columnPadding = this.getAttribute('image-column-padding')
    const borderRadius = this.getAttribute('image-border-radius')

    const columnAttrs = this.htmlAttributes({
      width: columnWidth,
      'vertical-align': 'middle',
      padding: columnPadding,
      'css-class': `luma-essentials-image-col luma-essentials-image-col-${index}`,
    })

    const imageAttrs = this.htmlAttributes({
      src: this.getAttribute(`${prefix}-src`),
      alt: this.getAttribute(`${prefix}-alt`),
      padding: '0',
      'border-radius': borderRadius,
      'fluid-on-mobile': 'true',
      'css-class': 'luma-essentials-image',
    })

    return `
      <mj-column ${columnAttrs}>
        <mj-image ${imageAttrs} />
      </mj-column>
    `
  }

  renderContentColumn() {
    const fontFamily = this.getAttribute('font-family')
    const columnWidth = this.getAttribute('content-column-width')
    const columnPadding = this.getAttribute('content-column-padding')

    const columnAttrs = this.htmlAttributes({
      width: columnWidth,
      'vertical-align': 'middle',
      padding: columnPadding,
      'css-class': 'luma-essentials-content-col',
    })

    const buttonAttrs = this.htmlAttributes({
      href: this.getAttribute('button-href'),
      'background-color': this.getAttribute('button-background-color'),
      color: this.getAttribute('button-color'),
      'border-radius': '50px',
      'font-size': this.getAttribute('button-font-size'),
      'font-weight': '500',
      'inner-padding': '12px 24px',
      align: 'left',
      padding: this.getAttribute('button-padding'),
      'css-class': 'luma-essentials-button',
    })

    const eyebrowColor = this.getAttribute('eyebrow-color')
    const eyebrowSize = this.getAttribute('eyebrow-font-size')
    const headingColor = this.getAttribute('heading-color')
    const headingSize = this.getAttribute('heading-font-size')
    const bodyColor = this.getAttribute('body-color')
    const bodySize = this.getAttribute('body-font-size')

    return `
      <mj-column ${columnAttrs}>
        <mj-text padding="${this.getAttribute('eyebrow-padding')}" align="left" css-class="luma-essentials-eyebrow">
          <div style="font-family:${fontFamily};font-size:${eyebrowSize};font-weight:500;letter-spacing:1.2px;text-transform:uppercase;color:${eyebrowColor};">
            ${this.getAttribute('eyebrow-text')}
          </div>
        </mj-text>
        <mj-text padding="${this.getAttribute('heading-padding')}" align="left" css-class="luma-essentials-heading">
          <div style="font-family:${fontFamily};font-size:${headingSize};font-weight:700;line-height:1.2;color:${headingColor};">
            ${this.getAttribute('heading-text')}
          </div>
        </mj-text>
        <mj-text padding="${this.getAttribute('body-padding')}" align="left" css-class="luma-essentials-body">
          <div style="font-family:${fontFamily};font-size:${bodySize};font-weight:400;line-height:1.55;color:${bodyColor};">
            ${this.getAttribute('body-text')}
          </div>
        </mj-text>
        <mj-button ${buttonAttrs}>
          ${this.getAttribute('button-text')}
        </mj-button>
      </mj-column>
    `
  }

  render() {
    const bg = this.getAttribute('background-color')

    const wrapperAttrs = this.htmlAttributes({
      'background-color': bg,
    })

    const sectionAttrs = this.htmlAttributes({
      'background-color': bg,
      padding: this.getAttribute('padding'),
      'css-class': 'luma-essentials-section',
    })

    return this.renderMJML(`
      <mj-wrapper ${wrapperAttrs}>
        <mj-section ${sectionAttrs}>
          ${this.renderImageColumn(1)}
          ${this.renderImageColumn(2)}
          ${this.renderContentColumn()}
        </mj-section>
      </mj-wrapper>
    `)
  }
}
