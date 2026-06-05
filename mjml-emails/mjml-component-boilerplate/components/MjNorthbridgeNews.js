import { BodyComponent } from 'mjml-core'

const ICONS_BASE = 'resources/images/northbridge/icons'
const IMAGES_BASE = 'resources/images/northbridge'

export default class MjNorthbridgeNews extends BodyComponent {
  static dependencies = {
    'mj-northbridge-news': [],
    'mj-body': ['mj-northbridge-news'],
    'mj-wrapper': ['mj-northbridge-news'],
  }

  static allowedAttributes = {
    'background-color': 'color',
    'accent-color': 'color',
    'title-color': 'color',
    'text-color': 'color',
    'divider-color': 'color',
    'divider-width': 'unit(px)',
    'icon-bg-color': 'color',
    'icon-size': 'unit(px)',
    'icon-circle-size': 'unit(px)',
    'eyebrow-font-size': 'unit(px)',
    'title-font-size': 'unit(px)',
    'title-font-family': 'string',
    'body-font-size': 'unit(px)',
    'link-font-size': 'unit(px)',
    'image-min-height': 'unit(px)',
    'image-column-width': 'unit(px,%)',
    'content-column-width': 'unit(px,%)',
    padding: 'unit(px){1,4}',
    'content-padding': 'unit(px){1,4}',
    'row1-image-src': 'string',
    'row1-image-alt': 'string',
    'row1-icon-src': 'string',
    'row1-eyebrow': 'string',
    'row1-title': 'string',
    'row1-body': 'string',
    'row1-link-text': 'string',
    'row1-link-href': 'string',
    'row2-image-src': 'string',
    'row2-image-alt': 'string',
    'row2-icon-src': 'string',
    'row2-eyebrow': 'string',
    'row2-title': 'string',
    'row2-body': 'string',
    'row2-link-text': 'string',
    'row2-link-href': 'string',
    'row3-image-src': 'string',
    'row3-image-alt': 'string',
    'row3-icon-src': 'string',
    'row3-eyebrow': 'string',
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
    return [
      {
        index: 1,
        imageSide: 'left',
        imageSrc: this.getAttribute('row1-image-src'),
        imageAlt: this.getAttribute('row1-image-alt'),
        iconSrc: this.getAttribute('row1-icon-src'),
        eyebrow: this.getAttribute('row1-eyebrow'),
        title: this.getAttribute('row1-title'),
        body: this.getAttribute('row1-body'),
        linkText: this.getAttribute('row1-link-text'),
        linkHref: this.getAttribute('row1-link-href'),
      },
      {
        index: 2,
        imageSide: 'right',
        imageSrc: this.getAttribute('row2-image-src'),
        imageAlt: this.getAttribute('row2-image-alt'),
        iconSrc: this.getAttribute('row2-icon-src'),
        eyebrow: this.getAttribute('row2-eyebrow'),
        title: this.getAttribute('row2-title'),
        body: this.getAttribute('row2-body'),
        linkText: this.getAttribute('row2-link-text'),
        linkHref: this.getAttribute('row2-link-href'),
      },
      {
        index: 3,
        imageSide: 'left',
        imageSrc: this.getAttribute('row3-image-src'),
        imageAlt: this.getAttribute('row3-image-alt'),
        iconSrc: this.getAttribute('row3-icon-src'),
        eyebrow: this.getAttribute('row3-eyebrow'),
        title: this.getAttribute('row3-title'),
        body: this.getAttribute('row3-body'),
        linkText: this.getAttribute('row3-link-text'),
        linkHref: this.getAttribute('row3-link-href'),
      },
    ]
  }

  componentHeadStyle = () => {
    const minHeight = this.getAttribute('image-min-height')

    const imageRules = this.rowConfig()
      .map((row) => {
        const selector = `.northbridge-news-image-${this.cssId}-${row.index}`

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
        const selector = `.northbridge-news-content-${this.cssId}-${row.index}`

        return `
      ${selector} > table,
      ${selector} > table > tbody > tr,
      ${selector} > table > tbody > tr > td {
        height: 100% !important;
      }
    `
      })
      .join('')

    return `
    ${imageRules}
    ${contentRules}
    div.northbridge-news-row-reversed > table > tbody > tr > td {
      direction: rtl !important;
      text-align: right !important;
    }
    div.northbridge-news-row-reversed .northbridge-news-image,
    div.northbridge-news-row-reversed .northbridge-news-content {
      direction: ltr !important;
      text-align: left !important;
    }
    @media only screen and (max-width:480px) {
      div.northbridge-news-row > table > tbody > tr > td {
        padding: 0 !important;
      }
      div.northbridge-news-image {
        width: 100% !important;
        max-width: 100% !important;
      }
      div.northbridge-news-image > table > tbody > tr > td {
        min-height: 200px !important;
      }
      div.northbridge-news-content {
        width: 100% !important;
        max-width: 100% !important;
      }
      div.northbridge-news-content > table,
      div.northbridge-news-content > table > tbody > tr,
      div.northbridge-news-content > table > tbody > tr > td {
        min-height: 0 !important;
        height: auto !important;
      }
      div.northbridge-news-content > table > tbody > tr > td {
        padding: 24px 24px !important;
      }
      .northbridge-news-title div {
        font-size: 22px !important;
      }
      .northbridge-news-eyebrow span {
        font-size: 16px !important;
      }
      div.northbridge-news-row-reversed > table > tbody > tr > td {
        direction: ltr !important;
        text-align: center !important;
      }
    }
  `
  }

  static defaultAttributes = {
    'background-color': '#FFFFFF',
    'accent-color': '#1D4ED8',
    'title-color': '#1A1A1A',
    'text-color': '#3A3A3A',
    'divider-color': '#E0E0E0',
    'divider-width': '1px',
    'icon-bg-color': '#EDF1FA',
    'icon-size': '38px',
    'icon-circle-size': '38px',
    'eyebrow-font-size': '16px',
    'title-font-size': '24px',
    'title-font-family': "Georgia, 'Times New Roman', serif",
    'body-font-size': '14px',
    'link-font-size': '14px',
    'image-min-height': '230px',
    'image-column-width': '46%',
    'content-column-width': '54%',
    padding: '28px 16px',
    'content-padding': '8px 24px',
    'row1-image-src': `${IMAGES_BASE}/northbridge-columns.png`,
    'row1-image-alt': 'Courthouse columns',
    'row1-icon-src': `${ICONS_BASE}/scale-icon-removebg.png`,
    'row1-eyebrow': 'Regulatory Watch',
    'row1-title': 'New AML Guidance Raises the Bar',
    'row1-body':
      'The Financial Intelligence Authority has issued updated expectations for client due diligence and record-keeping. Firms should review their frameworks by 30 June.',
    'row1-link-text': 'Read the brief',
    'row1-link-href': '#',
    'row2-image-src': `${IMAGES_BASE}/northbridge-harper.png`,
    'row2-image-alt': 'Partner Alex Harper',
    'row2-icon-src': '',
    'row2-eyebrow': 'Client Spotlight',
    'row2-title': 'Harper & Cole Advises on Strategic Merger',
    'row2-body':
      'We speak with Partner Alex Harper on the cross-border deal, key challenges, and how alignment drove value for both parties.',
    'row2-link-text': 'View interview',
    'row2-link-href': '#',
    'row3-image-src': `${IMAGES_BASE}/northbridge-city.png`,
    'row3-image-alt': 'City skyline',
    'row3-icon-src': `${ICONS_BASE}/trend-icon-removebg.png`,
    'row3-eyebrow': 'Market Brief',
    'row3-title': 'Markets Steady Amid Policy Shifts',
    'row3-body':
      'Equities held firm as rate expectations adjusted. We break down what this means for advisory strategies and client portfolios.',
    'row3-link-text': 'See update',
    'row3-link-href': '#',
  }

  renderIconCircle(iconSrc) {
    const iconBg = this.getAttribute('icon-bg-color')
    const iconSize = parseInt(this.getAttribute('icon-size'), 10) || 38
    const circleSize = this.getAttribute('icon-circle-size')

    return `
      <table role="presentation" border="0" cellpadding="0" cellspacing="0">
        <tr>
          <td
            align="center"
            valign="middle"
            width="${circleSize}"
            height="${circleSize}"
            style="width:${circleSize};height:${circleSize};background-color:${iconBg};border-radius:50%;"
          >
            <img
              src="${iconSrc}"
              width="${iconSize}"
              height="${iconSize}"
              alt=""
              style="display:block;border:0;outline:none;width:${iconSize}px;height:${iconSize}px;max-width:${iconSize}px;max-height:${iconSize}px;"
            />
          </td>
        </tr>
      </table>
    `
  }

  renderTextBlock(row) {
    const accent = this.getAttribute('accent-color')
    const titleColor = this.getAttribute('title-color')
    const titleSize = this.getAttribute('title-font-size')
    const titleFont = this.getAttribute('title-font-family')
    const textColor = this.getAttribute('text-color')
    const bodySize = this.getAttribute('body-font-size')
    const linkSize = this.getAttribute('link-font-size')
    const eyebrowSize = this.getAttribute('eyebrow-font-size')

    return `
      <div class="northbridge-news-eyebrow" style="margin:0 0 8px 0;">
        <span style="font-family:Helvetica,Arial,sans-serif;font-size:${eyebrowSize};font-weight:700;letter-spacing:0.8px;text-transform:uppercase;color:${accent};">
          ${row.eyebrow}
        </span>
      </div>
      <div class="northbridge-news-title" style="margin:0 0 12px 0;">
        <div style="font-family:${titleFont};font-size:${titleSize};line-height:1.25;color:${titleColor};">
          ${row.title}
        </div>
      </div>
      <div style="font-family:Helvetica,Arial,sans-serif;font-size:${bodySize};line-height:1.6;color:${textColor};margin:0 0 16px 0;">
        ${row.body}
      </div>
      <div>
        <a href="${row.linkHref}" style="color:${accent};text-decoration:none;font-size:${linkSize};font-weight:600;font-family:Helvetica,Arial,sans-serif;">
          ${row.linkText}&nbsp;&rarr;
        </a>
      </div>
    `
  }

  renderContent(row) {
    if (!row.iconSrc) {
      return this.renderTextBlock(row)
    }

    const circleSize = this.getAttribute('icon-circle-size')

    return `
      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
        <tr>
          <td valign="top" width="${circleSize}" style="padding-right:16px;">
            ${this.renderIconCircle(row.iconSrc)}
          </td>
          <td valign="top">
            ${this.renderTextBlock(row)}
          </td>
        </tr>
      </table>
    `
  }

  renderRow(row) {
    const bg = this.getAttribute('background-color')
    const contentPadding = this.getAttribute('content-padding')

    const imageColumnAttrs = this.htmlAttributes({
      width: this.getAttribute('image-column-width'),
      'vertical-align': 'middle',
      padding: '0',
      'css-class': `northbridge-news-image northbridge-news-image-${this.cssId}-${row.index}`,
    })

    const contentColumnAttrs = this.htmlAttributes({
      width: this.getAttribute('content-column-width'),
      'vertical-align': 'middle',
      padding: contentPadding,
      'css-class': `northbridge-news-content northbridge-news-content-${this.cssId}-${row.index}`,
    })

    const imageColumn = `
      <mj-column ${imageColumnAttrs}>
        <mj-spacer height="1px" />
      </mj-column>
    `

    const contentColumn = `
      <mj-column ${contentColumnAttrs}>
        <mj-text padding="0" align="left">
          ${this.renderContent(row)}
        </mj-text>
      </mj-column>
    `

    const sectionClasses = [
      'northbridge-news-row',
      `northbridge-news-row-${row.index}`,
      row.imageSide === 'right' ? 'northbridge-news-row-reversed' : '',
    ]
      .filter(Boolean)
      .join(' ')

    const sectionAttrs = this.htmlAttributes({
      'background-color': bg,
      padding: this.getAttribute('padding'),
      'css-class': sectionClasses,
    })

    // Image first in markup so mobile stacks image → content.
    // Row 2 uses direction:rtl on desktop to keep content left, image right.
    const columns = `${imageColumn}${contentColumn}`

    return `
      <mj-section ${sectionAttrs}>
        ${columns}
      </mj-section>
    `
  }

  renderDivider() {
    const dividerColor = this.getAttribute('divider-color')
    const dividerWidth = this.getAttribute('divider-width')

    const sectionAttrs = this.htmlAttributes({
      'background-color': this.getAttribute('background-color'),
      padding: '0 16px',
      'css-class': 'northbridge-news-divider',
    })

    const dividerAttrs = this.htmlAttributes({
      'border-color': dividerColor,
      'border-width': dividerWidth,
      'border-style': 'solid',
      padding: '0',
      width: '100%',
    })

    return `
      <mj-section ${sectionAttrs}>
        <mj-column>
          <mj-divider ${dividerAttrs} />
        </mj-column>
      </mj-section>
    `
  }

  render() {
    const bg = this.getAttribute('background-color')

    const wrapperAttrs = this.htmlAttributes({
      'background-color': bg,
    })

    const rows = this.rowConfig()
    const body = rows
      .map((row, i) => {
        const divider = i < rows.length - 1 ? this.renderDivider() : ''
        return `${this.renderRow(row)}${divider}`
      })
      .join('')

    return this.renderMJML(`
      <mj-wrapper ${wrapperAttrs}>
        ${body}
      </mj-wrapper>
    `)
  }
}
