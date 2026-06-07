import { BodyComponent } from 'mjml-core'

const IMAGES_BASE = 'resources/images/luma'

export default class MjLumaRitual extends BodyComponent {
  static dependencies = {
    'mj-luma-ritual': [],
    'mj-body': ['mj-luma-ritual'],
    'mj-wrapper': ['mj-luma-ritual'],
  }

  static allowedAttributes = {
    'background-color': 'color',
    'content-background-color': 'color',
    'font-family': 'string',
    'content-column-width': 'unit(px,%)',
    'image-column-width': 'unit(px,%)',
    'image-src': 'string',
    'image-alt': 'string',
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
    'content-column-padding': 'unit(px){1,4}',
    'image-column-padding': 'unit(px){1,4}',
    'eyebrow-padding': 'unit(px){1,4}',
    'heading-padding': 'unit(px){1,4}',
    'body-padding': 'unit(px){1,4}',
    'button-padding': 'unit(px){1,4}',
  }

  componentHeadStyle = () => `
    .luma-ritual-eyebrow div,
    .luma-ritual-body div {
      line-height: 1.4 !important;
    }
    .luma-ritual-heading div {
      line-height: 1.15 !important;
    }
    .luma-ritual-image img {
      display: block !important;
    }
    @media only screen and (max-width:480px) {
      div.luma-ritual-section > table > tbody > tr > td {
        padding: 0 !important;
      }
      div.luma-ritual-content-col,
      div.luma-ritual-image-col {
        width: 100% !important;
        max-width: 100% !important;
      }
      div.luma-ritual-content-col > table > tbody > tr > td {
        padding: 32px 24px !important;
        text-align: center !important;
      }
      div.luma-ritual-image-col > table > tbody > tr > td {
        padding: 0 !important;
      }
      .luma-ritual-eyebrow div,
      .luma-ritual-heading div,
      .luma-ritual-body div {
        text-align: center !important;
      }
      .luma-ritual-heading div {
        font-size: 26px !important;
      }
      .luma-ritual-button table {
        margin: 0 auto !important;
      }
      .luma-ritual-image table,
      .luma-ritual-image td {
        width: 100% !important;
      }
      .luma-ritual-image img {
        width: 100% !important;
        max-width: 100% !important;
        height: auto !important;
      }
    }
  `

  static defaultAttributes = {
    'background-color': '#FFFFFF',
    'content-background-color': '#FAF5F0',
    'font-family': 'Inter, Helvetica, Arial, sans-serif',
    'content-column-width': '50%',
    'image-column-width': '50%',
    'image-src': `${IMAGES_BASE}/luma-product.png`,
    'image-alt': 'Luma Botanics cleanser, serum, and moisturizer',
    'eyebrow-text': 'MADE FOR YOU',
    'eyebrow-color': '#D4A395',
    'eyebrow-font-size': '11px',
    'heading-text': 'Build Your Ritual',
    'heading-color': '#1A1A1A',
    'heading-font-size': '28px',
    'body-text':
      'Answer a few quick questions and we\u2019ll curate a personalized routine with the perfect products for your skin goals.',
    'body-color': '#333333',
    'body-font-size': '14px',
    'button-text': 'Create my routine',
    'button-href': '#',
    'button-background-color': '#222222',
    'button-color': '#FFFFFF',
    'button-font-size': '14px',
    padding: '0',
    'content-column-padding': '48px 28px 48px 32px',
    'image-column-padding': '0',
    'eyebrow-padding': '0 0 10px 0',
    'heading-padding': '0 0 14px 0',
    'body-padding': '0 0 22px 0',
    'button-padding': '0',
  }

  render() {
    const fontFamily = this.getAttribute('font-family')
    const bg = this.getAttribute('background-color')
    const contentBg = this.getAttribute('content-background-color')

    const wrapperAttrs = this.htmlAttributes({
      'background-color': bg,
    })

    const sectionAttrs = this.htmlAttributes({
      'background-color': bg,
      padding: this.getAttribute('padding'),
      'css-class': 'luma-ritual-section',
    })

    const contentColAttrs = this.htmlAttributes({
      width: this.getAttribute('content-column-width'),
      'vertical-align': 'middle',
      'background-color': contentBg,
      padding: this.getAttribute('content-column-padding'),
      'css-class': 'luma-ritual-content-col',
    })

    const imageColAttrs = this.htmlAttributes({
      width: this.getAttribute('image-column-width'),
      'vertical-align': 'middle',
      padding: this.getAttribute('image-column-padding'),
      'css-class': 'luma-ritual-image-col',
    })

    const imageAttrs = this.htmlAttributes({
      src: this.getAttribute('image-src'),
      alt: this.getAttribute('image-alt'),
      align: 'center',
      padding: '0',
      'fluid-on-mobile': 'true',
      'css-class': 'luma-ritual-image',
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
      'css-class': 'luma-ritual-button',
    })

    const eyebrowColor = this.getAttribute('eyebrow-color')
    const eyebrowSize = this.getAttribute('eyebrow-font-size')
    const headingColor = this.getAttribute('heading-color')
    const headingSize = this.getAttribute('heading-font-size')
    const bodyColor = this.getAttribute('body-color')
    const bodySize = this.getAttribute('body-font-size')

    return this.renderMJML(`
      <mj-wrapper ${wrapperAttrs}>
        <mj-section ${sectionAttrs}>
          <mj-column ${contentColAttrs}>
            <mj-text padding="${this.getAttribute('eyebrow-padding')}" align="left" css-class="luma-ritual-eyebrow">
              <div style="font-family:${fontFamily};font-size:${eyebrowSize};font-weight:500;letter-spacing:1.4px;text-transform:uppercase;color:${eyebrowColor};">
                ${this.getAttribute('eyebrow-text')}
              </div>
            </mj-text>
            <mj-text padding="${this.getAttribute('heading-padding')}" align="left" css-class="luma-ritual-heading">
              <div style="font-family:${fontFamily};font-size:${headingSize};font-weight:700;line-height:1.15;color:${headingColor};">
                ${this.getAttribute('heading-text')}
              </div>
            </mj-text>
            <mj-text padding="${this.getAttribute('body-padding')}" align="left" css-class="luma-ritual-body">
              <div style="font-family:${fontFamily};font-size:${bodySize};font-weight:400;line-height:1.55;color:${bodyColor};">
                ${this.getAttribute('body-text')}
              </div>
            </mj-text>
            <mj-button ${buttonAttrs}>
              ${this.getAttribute('button-text')}
            </mj-button>
          </mj-column>
          <mj-column ${imageColAttrs}>
            <mj-image ${imageAttrs} />
          </mj-column>
        </mj-section>
      </mj-wrapper>
    `)
  }
}
