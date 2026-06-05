import { BodyComponent } from 'mjml-core'

const IMAGES_BASE = 'resources/images/northbridge'

export default class MjNorthbridgeHero extends BodyComponent {
  static dependencies = {
    'mj-northbridge-hero': [],
    'mj-body': ['mj-northbridge-hero'],
    'mj-wrapper': ['mj-northbridge-hero'],
  }

  static allowedAttributes = {
    'background-color': 'color',
    'card-color': 'color',
    'accent-color': 'color',
    'title-color': 'color',
    'text-color': 'color',
    'accent-width': 'unit(px)',
    'image-src': 'string',
    'image-alt': 'string',
    'image-min-height': 'unit(px)',
    'title-line-1': 'string',
    'title-line-2': 'string',
    'title-font-size': 'unit(px)',
    'title-font-family': 'string',
    'body-text': 'string',
    'body-font-size': 'unit(px)',
    'column-width': 'unit(px,%)',
    padding: 'unit(px){1,4}',
    'content-padding': 'unit(px){1,4}',
  }

  constructor(initialDatas = {}) {
    super(initialDatas)
    this.cssId = Math.floor(Math.random() * 10000) + 1
  }

  componentHeadStyle = () => {
    const imageUrl = this.getAttribute('image-src')
    const minHeight = this.getAttribute('image-min-height')
    const imageSelector = `.northbridge-hero-image-${this.cssId}`
    const contentSelector = `.northbridge-hero-content-${this.cssId}`

    return `
      ${imageSelector} > table,
      ${imageSelector} > table > tbody > tr,
      ${imageSelector} > table > tbody > tr > td,
      ${contentSelector} > table,
      ${contentSelector} > table > tbody > tr,
      ${contentSelector} > table > tbody > tr > td {
        height: 100% !important;
        min-height: ${minHeight} !important;
      }
      ${imageSelector} > table > tbody > tr > td {
        background-image: url('${imageUrl}') !important;
        background-size: cover !important;
        background-position: center center !important;
        background-repeat: no-repeat !important;
        padding: 0 !important;
      }
      ${contentSelector} > table {
        height: 100% !important;
      }
      div.northbridge-hero-section > table > tbody > tr > td {
        direction: rtl !important;
        text-align: right !important;
      }
      div.northbridge-hero-section .northbridge-hero-image,
      div.northbridge-hero-section .northbridge-hero-content {
        direction: ltr !important;
        text-align: left !important;
      }
      @media only screen and (max-width:480px) {
        div.northbridge-hero-section > table > tbody > tr > td {
          padding: 0 !important;
          direction: ltr !important;
          text-align: center !important;
        }
        ${imageSelector} > table > tbody > tr > td {
          min-height: 220px !important;
        }
        ${contentSelector} > table,
        ${contentSelector} > table > tbody > tr,
        ${contentSelector} > table > tbody > tr > td {
          min-height: 0 !important;
          height: auto !important;
        }
        ${contentSelector} > table > tbody > tr > td {
          padding: 32px 24px !important;
        }
        .northbridge-hero-title div {
          font-size: 32px !important;
        }
        .northbridge-hero-body div {
          font-size: 15px !important;
        }
      }
    `
  }

  static defaultAttributes = {
    'background-color': '#FFFFFF',
    'card-color': '#0C1C36',
    'accent-color': '#5B8FE0',
    'title-color': '#FFFFFF',
    'text-color': '#C8D0DE',
    'accent-width': '48px',
    'image-src': `${IMAGES_BASE}/northbridge-conference-room.png`,
    'image-alt': 'Modern conference room with city skyline view',
    'image-min-height': '280px',
    'title-line-1': 'This Week',
    'title-line-2': 'in Practice',
    'title-font-size': '40px',
    'title-font-family': "Georgia, 'Times New Roman', serif",
    'body-text':
      'Actionable insights and timely updates to help your practice stay ahead.',
    'body-font-size': '16px',
    'column-width': '50%',
    padding: '0',
    'content-padding': '0 36px',
  }

  renderTitleBlock() {
    const titleColor = this.getAttribute('title-color')
    const titleSize = this.getAttribute('title-font-size')
    const titleFont = this.getAttribute('title-font-family')
    const accent = this.getAttribute('accent-color')
    const accentWidth = this.getAttribute('accent-width')

    return `
      <div class="northbridge-hero-title" style="margin:0 0 20px 0;">
        <div style="font-family:${titleFont};font-size:${titleSize};line-height:1.15;color:${titleColor};">
          ${this.getAttribute('title-line-1')}<br />
          ${this.getAttribute('title-line-2')}
        </div>
      </div>
      <div style="width:${accentWidth};border-top:2px solid ${accent};margin:0 0 20px 0;font-size:0;line-height:0;">
        &nbsp;
      </div>
    `
  }

  render() {
    const bg = this.getAttribute('background-color')
    const card = this.getAttribute('card-color')
    const textColor = this.getAttribute('text-color')
    const bodySize = this.getAttribute('body-font-size')

    const wrapperAttrs = this.htmlAttributes({
      'background-color': bg,
    })

    const sectionAttrs = this.htmlAttributes({
      'background-color': card,
      padding: this.getAttribute('padding'),
      'css-class': 'northbridge-hero-section',
    })

    const contentColumnAttrs = this.htmlAttributes({
      width: this.getAttribute('column-width'),
      'vertical-align': 'middle',
      'background-color': card,
      padding: this.getAttribute('content-padding'),
      'css-class': `northbridge-hero-content northbridge-hero-content-${this.cssId}`,
    })

    const imageColumnAttrs = this.htmlAttributes({
      width: this.getAttribute('column-width'),
      'vertical-align': 'middle',
      padding: '0',
      'css-class': `northbridge-hero-image northbridge-hero-image-${this.cssId}`,
    })

    return this.renderMJML(`
      <mj-wrapper ${wrapperAttrs}>
        <mj-section ${sectionAttrs}>
          <mj-column ${imageColumnAttrs}>
            <mj-spacer height="1px" />
          </mj-column>
          <mj-column ${contentColumnAttrs}>
            <mj-text padding="0 0 0 0" align="left">
              ${this.renderTitleBlock()}
            </mj-text>
            <mj-text padding="0" align="left" css-class="northbridge-hero-body">
              <div style="font-family:Helvetica,Arial,sans-serif;font-size:${bodySize};line-height:1.55;color:${textColor};">
                ${this.getAttribute('body-text')}
              </div>
            </mj-text>
          </mj-column>
        </mj-section>
      </mj-wrapper>
    `)
  }
}
