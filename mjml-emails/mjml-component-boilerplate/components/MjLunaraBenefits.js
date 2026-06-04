import { BodyComponent } from 'mjml-core'

export default class MjLunaraBenefits extends BodyComponent {
  static dependencies = {
    'mj-lunara-benefits': [],
    'mj-body': ['mj-lunara-benefits'],
    'mj-wrapper': ['mj-lunara-benefits'],
  }

  static allowedAttributes = {
    'background-color': 'color',
    'accent-color': 'color',
    color: 'color',
    'description-color': 'color',
    'column-width': 'unit(px,%)',
    'column-gap': 'unit(px)',
    'icon-width': 'unit(px)',
    'mobile-icon-width': 'unit(px)',
    'link-text': 'string',
    padding: 'unit(px){1,4}',
    'benefit-1-icon-src': 'string',
    'benefit-1-icon-alt': 'string',
    'benefit-1-title': 'string',
    'benefit-1-description': 'string',
    'benefit-1-link-href': 'string',
    'benefit-2-icon-src': 'string',
    'benefit-2-icon-alt': 'string',
    'benefit-2-title': 'string',
    'benefit-2-description': 'string',
    'benefit-2-link-href': 'string',
    'benefit-3-icon-src': 'string',
    'benefit-3-icon-alt': 'string',
    'benefit-3-title': 'string',
    'benefit-3-description': 'string',
    'benefit-3-link-href': 'string',
  }

  componentHeadStyle = () => {
    const mobileIconWidth = this.getAttribute('mobile-icon-width')

    return `
    div.lunara-benefits-column .lunara-benefits-icon img {
      margin: 0 auto !important;
    }
    @media only screen and (max-width:480px) {
      div.lunara-benefits-section > table > tbody > tr > td {
        padding: 32px 0 48px !important;
      }
      div.lunara-benefits-column {
        width: 100% !important;
        max-width: 100% !important;
      }
      div.lunara-benefits-column > table > tbody > tr > td {
        padding: 0 24px !important;
      }
      div.lunara-benefits-column-2 > table > tbody > tr > td,
      div.lunara-benefits-column-3 > table > tbody > tr > td {
        padding-top: 32px !important;
      }
      div.lunara-benefits-column table {
        width: 100% !important;
      }
      div.lunara-benefits-column .lunara-benefits-icon table {
        width: auto !important;
        margin: 0 auto !important;
      }
      div.lunara-benefits-column .lunara-benefits-icon td,
      div.lunara-benefits-column .lunara-benefits-icon img {
        width: ${mobileIconWidth} !important;
        max-width: ${mobileIconWidth} !important;
      }
    }
  `
  }

  static defaultAttributes = {
    'background-color': '#000000',
    'accent-color': '#7BA4F4',
    color: '#FFFFFF',
    'description-color': '#B8B8B8',
    'column-width': '33.33%',
    'column-gap': '24px',
    'icon-width': '56px',
    'mobile-icon-width': '45px',
    'link-text': 'Learn more >',
    padding: '40px 32px 48px',
    'benefit-1-icon-src': 'lunara-images/icons/star-icon-removebg.png',
    'benefit-1-icon-alt': 'Member rewards',
    'benefit-1-title': 'Member rewards',
    'benefit-1-description': 'Earn 8% back in Lunara credit on eligible purchases.',
    'benefit-1-link-href': '#',
    'benefit-2-icon-src': 'lunara-images/icons/trade-in-icon-removebg.png',
    'benefit-2-icon-alt': 'Trade-in',
    'benefit-2-title': 'Trade-in',
    'benefit-2-description': 'Upgrade your device and save with eligible trade-ins.',
    'benefit-2-link-href': '#',
    'benefit-3-icon-src': 'lunara-images/icons/truck-icon-removebg.png',
    'benefit-3-icon-alt': 'Fast delivery',
    'benefit-3-title': 'Fast delivery',
    'benefit-3-description': 'Enjoy quick shipping on all direct orders.',
    'benefit-3-link-href': '#',
  }

  renderLink(href) {
    const accent = this.getAttribute('accent-color')
    const text = this.getAttribute('link-text')

    return `<a href="${href}" style="color:${accent};text-decoration:none;font-size:14px;font-weight:500;">${text}</a>`
  }

  getColumnPadding(index) {
    const gap = this.getAttribute('column-gap')

    if (index === 1) {
      return `0 ${gap} 0 0`
    }
    if (index === 2) {
      return `0 ${gap} 0 ${gap}`
    }
    return `0 0 0 ${gap}`
  }

  renderBenefitColumn(index) {
    const color = this.getAttribute('color')
    const descriptionColor = this.getAttribute('description-color')
    const columnWidth = this.getAttribute('column-width')
    const iconWidth = this.getAttribute('icon-width')
    const prefix = `benefit-${index}`

    const columnAttrs = this.htmlAttributes({
      width: columnWidth,
      'vertical-align': 'top',
      padding: this.getColumnPadding(index),
      'css-class': `lunara-benefits-column lunara-benefits-column-${index}`,
    })

    const imageAttrs = this.htmlAttributes({
      src: this.getAttribute(`${prefix}-icon-src`),
      alt: this.getAttribute(`${prefix}-icon-alt`),
      width: iconWidth,
      align: 'center',
      padding: '0 0 16px 0',
      'css-class': 'lunara-benefits-icon',
    })

    return `
      <mj-column ${columnAttrs}>
        <mj-image ${imageAttrs} />
        <mj-text
          color="${color}"
          font-size="16px"
          font-weight="700"
          line-height="1.3"
          padding="0 0 10px 0"
          align="center"
          css-class="lunara-benefits-title"
        >
          ${this.getAttribute(`${prefix}-title`)}
        </mj-text>
        <mj-text
          color="${descriptionColor}"
          font-size="14px"
          line-height="1.5"
          padding="0 0 16px 0"
          align="center"
          css-class="lunara-benefits-description"
        >
          ${this.getAttribute(`${prefix}-description`)}
        </mj-text>
        <mj-text padding="0" align="center" css-class="lunara-benefits-link">
          ${this.renderLink(this.getAttribute(`${prefix}-link-href`))}
        </mj-text>
      </mj-column>
    `
  }

  render() {
    const bg = this.getAttribute('background-color')
    const padding = this.getAttribute('padding')

    const wrapperAttrs = this.htmlAttributes({
      'background-color': bg,
    })

    const sectionAttrs = this.htmlAttributes({
      'background-color': bg,
      padding,
      'css-class': 'lunara-benefits-section',
    })

    return this.renderMJML(`
      <mj-wrapper ${wrapperAttrs}>
        <mj-section ${sectionAttrs}>
          ${this.renderBenefitColumn(1)}
          ${this.renderBenefitColumn(2)}
          ${this.renderBenefitColumn(3)}
        </mj-section>
      </mj-wrapper>
    `)
  }
}
