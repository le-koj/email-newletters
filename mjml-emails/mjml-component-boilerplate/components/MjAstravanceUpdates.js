import { BodyComponent } from 'mjml-core'

const IMAGES_BASE = 'resources/images/astravance'

export default class MjAstravanceUpdates extends BodyComponent {
  static dependencies = {
    'mj-astravance-updates': [],
    'mj-body': ['mj-astravance-updates'],
    'mj-wrapper': ['mj-astravance-updates'],
  }

  static allowedAttributes = {
    'background-color': 'color',
    'card-color': 'color',
    'title-color': 'color',
    'text-color': 'color',
    'link-color': 'color',
    'gutter-color': 'color',
    'gutter-width': 'unit(px)',
    'wrapper-padding': 'unit(px){1,4}',
    'font-family': 'string',
    'title-font-size': 'unit(px)',
    'body-font-size': 'unit(px)',
    'link-font-size': 'unit(px)',
    'image-min-height': 'unit(px)',
    'column-width': 'unit(px,%)',
    'content-padding': 'unit(px){1,4}',
    'mobile-content-padding': 'unit(px){1,4}',
    'mobile-wrapper-padding-bottom': 'unit(px)',
    padding: 'unit(px){1,4}',
    'row1-image-src': 'string',
    'row1-image-alt': 'string',
    'row1-title': 'string',
    'row1-body': 'string',
    'row1-link-text': 'string',
    'row1-link-href': 'string',
    'row2-image-src': 'string',
    'row2-image-alt': 'string',
    'row2-title': 'string',
    'row2-body': 'string',
    'row2-link-text': 'string',
    'row2-link-href': 'string',
    'row3-image-src': 'string',
    'row3-image-alt': 'string',
    'row3-title': 'string',
    'row3-body': 'string',
    'row3-link-text': 'string',
    'row3-link-href': 'string',
  }

  constructor(initialDatas = {}) {
    super(initialDatas)
    this.cssId = Math.floor(Math.random() * 10000) + 1
  }

  rowConfig() {
    return [1, 2, 3].map((index) => ({
      index,
      imageSrc: this.getAttribute(`row${index}-image-src`),
      imageAlt: this.getAttribute(`row${index}-image-alt`),
      title: this.getAttribute(`row${index}-title`),
      body: this.getAttribute(`row${index}-body`),
      linkText: this.getAttribute(`row${index}-link-text`),
      linkHref: this.getAttribute(`row${index}-link-href`),
    }))
  }

  componentHeadStyle = () => {
    const minHeight = this.getAttribute('image-min-height')
    const gutterColor = this.getAttribute('gutter-color')
    const gutterWidth = this.getAttribute('gutter-width')
    const cardColor = this.getAttribute('card-color')
    const contentPadding = this.getAttribute('content-padding')
    const mobileContentPadding = this.getAttribute('mobile-content-padding')
    const mobileWrapperPaddingBottom = this.getAttribute('mobile-wrapper-padding-bottom')

    const imageRules = this.rowConfig()
      .map((row) => {
        const selector = `.astravance-updates-image-${this.cssId}-${row.index}`

        return `
      ${selector} > table,
      ${selector} > table > tbody > tr,
      ${selector} > table > tbody > tr > td {
        height: 100% !important;
        min-height: ${minHeight} !important;
      }
      ${selector} > table > tbody > tr > td {
        background-image: url('${row.imageSrc}') !important;
        background-size: cover !important;
        background-position: center center !important;
        background-repeat: no-repeat !important;
        padding: 0 !important;
      }
    `
      })
      .join('')

    const contentRules = this.rowConfig()
      .map((row) => {
        const selector = `.astravance-updates-content-${this.cssId}-${row.index}`

        return `
      ${selector} > table,
      ${selector} > table > tbody > tr,
      ${selector} > table > tbody > tr > td {
        background-color: ${cardColor} !important;
        padding: 0 !important;
      }
      @media only screen and (min-width:480px) {
        ${selector} > table > tbody > tr > td {
          border-left: ${gutterWidth} solid ${gutterColor} !important;
          border-bottom: none !important;
        }
        ${selector} > table,
        ${selector} > table > tbody > tr,
        ${selector} > table > tbody > tr > td {
          height: 100% !important;
          min-height: ${minHeight} !important;
          padding: ${contentPadding} !important;
        }
      }
    `
      })
      .join('')

    return `
    ${imageRules}
    ${contentRules}
    div.astravance-updates-wrapper > table > tbody > tr > td {
      padding: 0 !important;
    }
    div.astravance-updates-row-2 > table > tbody > tr > td,
    div.astravance-updates-row-3 > table > tbody > tr > td {
      border-top: ${gutterWidth} solid ${gutterColor} !important;
    }
    .astravance-updates-title div,
    .astravance-updates-body div,
    .astravance-updates-link a {
      font-family: Helvetica, Arial, sans-serif !important;
    }
    @media only screen and (max-width:480px) {
      div.astravance-updates-wrapper > table > tbody > tr > td {
        padding: 0 0 ${mobileWrapperPaddingBottom} 0 !important;
      }
      div.astravance-updates-row > table > tbody > tr > td {
        padding: 0 !important;
      }
      div.astravance-updates-image-${this.cssId}-1,
      div.astravance-updates-image-${this.cssId}-2,
      div.astravance-updates-image-${this.cssId}-3,
      div.astravance-updates-content-${this.cssId}-1,
      div.astravance-updates-content-${this.cssId}-2,
      div.astravance-updates-content-${this.cssId}-3 {
        width: 100% !important;
        max-width: 100% !important;
      }
      .astravance-updates-image-${this.cssId}-1 > table > tbody > tr > td,
      .astravance-updates-image-${this.cssId}-2 > table > tbody > tr > td,
      .astravance-updates-image-${this.cssId}-3 > table > tbody > tr > td {
        min-height: 200px !important;
      }
      .astravance-updates-content-${this.cssId}-1 > table > tbody > tr > td,
      .astravance-updates-content-${this.cssId}-2 > table > tbody > tr > td,
      .astravance-updates-content-${this.cssId}-3 > table > tbody > tr > td {
        min-height: 0 !important;
        height: auto !important;
        border-left: none !important;
        border-top: none !important;
        border-bottom: ${gutterWidth} solid ${gutterColor} !important;
        padding: ${mobileContentPadding} !important;
      }
      div.astravance-updates-row-2 > table > tbody > tr > td,
      div.astravance-updates-row-3 > table > tbody > tr > td {
        border-top: none !important;
      }
      .astravance-updates-title div {
        font-size: 18px !important;
      }
    }
  `
  }

  static defaultAttributes = {
    'background-color': '#FFFFFF',
    'card-color': '#222222',
    'title-color': '#FFFFFF',
    'text-color': '#FFFFFF',
    'link-color': '#FFFFFF',
    'gutter-color': '#FFFFFF',
    'gutter-width': '10px',
    'wrapper-padding': '0',
    'font-family': 'Helvetica, Arial, sans-serif',
    'title-font-size': '20px',
    'body-font-size': '13px',
    'link-font-size': '13px',
    'image-min-height': '210px',
    'column-width': '50%',
    'content-padding': '0 32px',
    'mobile-content-padding': '20px 20px',
    'mobile-wrapper-padding-bottom': '10px',
    padding: '0',
    'row1-image-src': `${IMAGES_BASE}/astravance-mission-control.png`,
    'row1-image-alt': 'Mission control center',
    'row1-title': 'Mission Update',
    'row1-body':
      'Stage 1 propulsion testing completed successfully across all parameters. We are on track for launch-readiness validation next month.',
    'row1-link-text': 'Read the full update',
    'row1-link-href': '#',
    'row2-image-src': `${IMAGES_BASE}/astravance-warehouse.png`,
    'row2-image-alt': 'Aerospace assembly hangar',
    'row2-title': 'Spotlight',
    'row2-body':
      'Introducing AVION-X, our next-generation avionics platform featuring advanced sensor fusion and real-time decision support. Built for resilience and performance.',
    'row2-link-text': 'Explore the platform',
    'row2-link-href': '#',
    'row3-image-src': `${IMAGES_BASE}/astravance-logistics.png`,
    'row3-image-alt': 'Helicopter cargo logistics operation',
    'row3-title': 'In Conversation',
    'row3-body':
      'We sit down with Chief Engineer Dr. Arjun Patel to discuss flight systems innovation, testing philosophy, and what\u2019s next for autonomous operations.',
    'row3-link-text': 'Read the interview',
    'row3-link-href': '#',
  }

  renderTextBlock(row) {
    const font = this.getAttribute('font-family')
    const titleColor = this.getAttribute('title-color')
    const textColor = this.getAttribute('text-color')
    const linkColor = this.getAttribute('link-color')
    const titleSize = this.getAttribute('title-font-size')
    const bodySize = this.getAttribute('body-font-size')
    const linkSize = this.getAttribute('link-font-size')

    return `
      <div class="astravance-updates-title" style="margin:0 0 14px 0;">
        <div style="font-family:${font};font-size:${titleSize};font-weight:700;line-height:1.25;color:${titleColor};">
          ${row.title}
        </div>
      </div>
      <div class="astravance-updates-body" style="margin:0 0 18px 0;">
        <div style="font-family:${font};font-size:${bodySize};font-weight:400;line-height:1.55;color:${textColor};">
          ${row.body}
        </div>
      </div>
      <div class="astravance-updates-link">
        <a href="${row.linkHref}" style="color:${linkColor};text-decoration:none;font-size:${linkSize};font-weight:400;font-family:${font};">
          &rarr; ${row.linkText}
        </a>
      </div>
    `
  }

  renderRow(row) {
    const bg = this.getAttribute('background-color')
    const card = this.getAttribute('card-color')
    const columnWidth = this.getAttribute('column-width')

    const imageColumnAttrs = this.htmlAttributes({
      width: columnWidth,
      'vertical-align': 'middle',
      padding: '0',
      'css-class': `astravance-updates-image astravance-updates-image-${this.cssId}-${row.index}`,
    })

    const contentColumnAttrs = this.htmlAttributes({
      width: columnWidth,
      'vertical-align': 'middle',
      'background-color': card,
      padding: '0',
      'css-class': `astravance-updates-content astravance-updates-content-${this.cssId}-${row.index}`,
    })

    const sectionAttrs = this.htmlAttributes({
      'background-color': bg,
      padding: this.getAttribute('padding'),
      'css-class': `astravance-updates-row astravance-updates-row-${row.index}`,
    })

    return `
      <mj-section ${sectionAttrs}>
        <mj-column ${imageColumnAttrs}>
          <mj-spacer height="1px" />
        </mj-column>
        <mj-column ${contentColumnAttrs}>
          <mj-text padding="0" align="left">
            ${this.renderTextBlock(row)}
          </mj-text>
        </mj-column>
      </mj-section>
    `
  }

  render() {
    const bg = this.getAttribute('background-color')

    const wrapperAttrs = this.htmlAttributes({
      'background-color': bg,
      padding: this.getAttribute('wrapper-padding'),
      'css-class': 'astravance-updates-wrapper',
    })

    const body = this.rowConfig()
      .map((row) => this.renderRow(row))
      .join('')

    return this.renderMJML(`
      <mj-wrapper ${wrapperAttrs}>
        ${body}
      </mj-wrapper>
    `)
  }
}
