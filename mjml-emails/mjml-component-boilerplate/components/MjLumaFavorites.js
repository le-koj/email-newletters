import { BodyComponent } from 'mjml-core'

const IMAGES_BASE = 'resources/images/luma'

export default class MjLumaFavorites extends BodyComponent {
  static dependencies = {
    'mj-luma-favorites': [],
    'mj-body': ['mj-luma-favorites'],
    'mj-wrapper': ['mj-luma-favorites'],
  }

  static allowedAttributes = {
    'background-color': 'color',
    'section-title': 'string',
    'section-title-color': 'color',
    'section-title-font-size': 'unit(px)',
    'section-title-letter-spacing': 'unit(px)',
    'divider-color': 'color',
    'divider-width': 'unit(px)',
    'divider-length': 'unit(px)',
    'product-title-color': 'color',
    'product-description-color': 'color',
    'font-family': 'string',
    'column-width': 'unit(px,%)',
    'column-padding': 'unit(px){1,4}',
    'image-border-radius': 'unit(px,%)',
    'product-title-font-size': 'unit(px)',
    'product-description-font-size': 'unit(px)',
    'image-padding': 'unit(px){1,4}',
    'title-padding': 'unit(px){1,4}',
    'description-padding': 'unit(px){1,4}',
    padding: 'unit(px){1,4}',
    'header-padding': 'unit(px){1,4}',
    'grid-padding': 'unit(px){1,4}',
    'item-1-image-src': 'string',
    'item-1-image-alt': 'string',
    'item-1-title': 'string',
    'item-1-description': 'string',
    'item-2-image-src': 'string',
    'item-2-image-alt': 'string',
    'item-2-title': 'string',
    'item-2-description': 'string',
    'item-3-image-src': 'string',
    'item-3-image-alt': 'string',
    'item-3-title': 'string',
    'item-3-description': 'string',
  }

  componentHeadStyle = () => {
    const radius = this.getAttribute('image-border-radius')

    return `
    .luma-favorites-product-image img {
      border-radius: ${radius} !important;
    }
    .luma-favorites-product-title div,
    .luma-favorites-product-description div {
      text-align: center !important;
    }
    @media only screen and (max-width:480px) {
      div.luma-favorites-header-section > table > tbody > tr > td {
        padding: 32px 20px 24px !important;
      }
      div.luma-favorites-grid-section > table > tbody > tr > td {
        padding: 0 20px 32px !important;
      }
      div.luma-favorites-col {
        width: 100% !important;
        max-width: 100% !important;
      }
      div.luma-favorites-col > table > tbody > tr > td {
        padding: 0 0 28px !important;
      }
      div.luma-favorites-col-3 > table > tbody > tr > td {
        padding-bottom: 0 !important;
      }
      .luma-favorites-product-image table,
      .luma-favorites-product-image td {
        width: 100% !important;
      }
      .luma-favorites-product-image img {
        width: 100% !important;
        max-width: 100% !important;
        height: auto !important;
      }
    }
  `
  }

  static defaultAttributes = {
    'background-color': '#FFFFFF',
    'section-title': 'CUSTOMER FAVORITES',
    'section-title-color': '#2D2D2D',
    'section-title-font-size': '12px',
    'section-title-letter-spacing': '2px',
    'divider-color': '#D8D8D8',
    'divider-width': '1px',
    'divider-length': '48px',
    'product-title-color': '#1A1A1A',
    'product-description-color': '#6B6B6B',
    'font-family': 'Inter, Helvetica, Arial, sans-serif',
    'column-width': '33.33%',
    'column-padding': '0 8px',
    'image-border-radius': '10px',
    'product-title-font-size': '14px',
    'product-description-font-size': '12px',
    'image-padding': '0 0 12px 0',
    'title-padding': '0 0 6px 0',
    'description-padding': '0',
    padding: '0',
    'header-padding': '24px 20px 32px',
    'grid-padding': '0 20px 24px',
    'item-1-image-src': `${IMAGES_BASE}/luma-cleanser.png`,
    'item-1-image-alt': 'Calm Soothing Cleanser',
    'item-1-title': 'Calm Soothing Cleanser',
    'item-1-description': 'Creamy gel that cleanses without stripping.',
    'item-2-image-src': `${IMAGES_BASE}/luma-serum.png`,
    'item-2-image-alt': 'Clarity Balancing Serum',
    'item-2-title': 'Clarity Balancing Serum',
    'item-2-description': 'Helps reduce shine and refine pores.',
    'item-3-image-src': `${IMAGES_BASE}/luma-nourish.png`,
    'item-3-image-alt': 'Nourish Rich Moisturizer',
    'item-3-title': 'Nourish Rich Moisturizer',
    'item-3-description': 'Deeply hydrates and strengthens skin barrier.',
  }

  renderSectionHeader() {
    const fontFamily = this.getAttribute('font-family')
    const titleColor = this.getAttribute('section-title-color')
    const titleSize = this.getAttribute('section-title-font-size')
    const letterSpacing = this.getAttribute('section-title-letter-spacing')
    const dividerColor = this.getAttribute('divider-color')
    const dividerWidth = this.getAttribute('divider-width')
    const dividerLength = this.getAttribute('divider-length')

    return `
      <div style="font-family:${fontFamily};font-size:${titleSize};font-weight:500;letter-spacing:${letterSpacing};text-transform:uppercase;color:${titleColor};text-align:center;">
        ${this.getAttribute('section-title')}
      </div>
      <div style="width:${dividerLength};border-top:${dividerWidth} solid ${dividerColor};margin:14px auto 0;font-size:0;line-height:0;">
        &nbsp;
      </div>
    `
  }

  renderProductColumn(index) {
    const prefix = `item-${index}`
    const fontFamily = this.getAttribute('font-family')
    const columnWidth = this.getAttribute('column-width')
    const columnPadding = this.getAttribute('column-padding')
    const borderRadius = this.getAttribute('image-border-radius')
    const titleColor = this.getAttribute('product-title-color')
    const descColor = this.getAttribute('product-description-color')
    const titleSize = this.getAttribute('product-title-font-size')
    const descSize = this.getAttribute('product-description-font-size')

    const columnAttrs = this.htmlAttributes({
      width: columnWidth,
      'vertical-align': 'top',
      padding: columnPadding,
      'css-class': `luma-favorites-col luma-favorites-col-${index}`,
    })

    const imageAttrs = this.htmlAttributes({
      src: this.getAttribute(`${prefix}-image-src`),
      alt: this.getAttribute(`${prefix}-image-alt`),
      align: 'center',
      padding: this.getAttribute('image-padding'),
      'border-radius': borderRadius,
      'fluid-on-mobile': 'true',
      'css-class': 'luma-favorites-product-image',
    })

    return `
      <mj-column ${columnAttrs}>
        <mj-image ${imageAttrs} />
        <mj-text
          padding="${this.getAttribute('title-padding')}"
          align="center"
          css-class="luma-favorites-product-title"
        >
          <div style="font-family:${fontFamily};font-size:${titleSize};font-weight:700;line-height:1.35;color:${titleColor};">
            ${this.getAttribute(`${prefix}-title`)}
          </div>
        </mj-text>
        <mj-text
          padding="${this.getAttribute('description-padding')}"
          align="center"
          css-class="luma-favorites-product-description"
        >
          <div style="font-family:${fontFamily};font-size:${descSize};font-weight:400;line-height:1.45;color:${descColor};">
            ${this.getAttribute(`${prefix}-description`)}
          </div>
        </mj-text>
      </mj-column>
    `
  }

  render() {
    const bg = this.getAttribute('background-color')

    const wrapperAttrs = this.htmlAttributes({
      'background-color': bg,
      padding: '0',
    })

    const headerSectionAttrs = this.htmlAttributes({
      'background-color': bg,
      padding: this.getAttribute('header-padding'),
      'css-class': 'luma-favorites-header-section',
    })

    const gridSectionAttrs = this.htmlAttributes({
      'background-color': bg,
      padding: this.getAttribute('grid-padding'),
      'css-class': 'luma-favorites-grid-section',
    })

    return this.renderMJML(`
      <mj-wrapper ${wrapperAttrs}>
        <mj-section ${headerSectionAttrs}>
          <mj-column>
            <mj-text padding="0" align="center" css-class="luma-favorites-section-header">
              ${this.renderSectionHeader()}
            </mj-text>
          </mj-column>
        </mj-section>
        <mj-section ${gridSectionAttrs}>
          ${this.renderProductColumn(1)}
          ${this.renderProductColumn(2)}
          ${this.renderProductColumn(3)}
        </mj-section>
      </mj-wrapper>
    `)
  }
}
