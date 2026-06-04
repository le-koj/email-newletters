import { BodyComponent } from 'mjml-core'

export default class MjLunaraFeature extends BodyComponent {
  static dependencies = {
    'mj-lunara-feature': [],
    'mj-body': ['mj-lunara-feature'],
    'mj-wrapper': ['mj-lunara-feature'],
  }

  static allowedAttributes = {
    'background-color': 'color',
    'accent-color': 'color',
    color: 'color',
    'divider-color': 'color',
    'divider-width': 'unit(px)',
    'image-src': 'string',
    'image-alt': 'string',
    'image-border-radius': 'unit(px,%)',
    'image-min-height': 'unit(px)',
    'body-text': 'string',
    'link-text': 'string',
    'link-href': 'string',
    'column-width': 'unit(px,%)',
    'font-size': 'unit(px)',
    padding: 'unit(px){1,4}',
    'divider-padding': 'unit(px){1,4}',
    'content-padding': 'unit(px){1,4}',
    'content-gap': 'unit(px)',
  }

  constructor(initialDatas = {}) {
    super(initialDatas)
    this.cssId = Math.floor(Math.random() * 10000) + 1
  }

  componentHeadStyle = () => {
    const imageUrl = this.getAttribute('image-src')
    const radius = this.getAttribute('image-border-radius')
    const minHeight = this.getAttribute('image-min-height')
    const imageSelector = `.lunara-feature-image-${this.cssId}`
    const contentSelector = `.lunara-feature-content-${this.cssId}`

    return `
      ${imageSelector} {
        border-radius: ${radius};
        overflow: hidden;
      }
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
      ${contentSelector} .lunara-feature-body div,
      ${contentSelector} .lunara-feature-link div {
        line-height: 1.6 !important;
      }
      @media only screen and (max-width:480px) {
        div.lunara-feature-section > table > tbody > tr > td {
          padding: 24px 20px 0 !important;
        }
        ${imageSelector} > table > tbody > tr > td {
          min-height: 200px !important;
        }
        ${contentSelector} > table,
        ${contentSelector} > table > tbody > tr,
        ${contentSelector} > table > tbody > tr > td {
          min-height: 0 !important;
          height: auto !important;
        }
        ${contentSelector} > table > tbody > tr > td {
          padding: 20px 20px 8px !important;
        }
        ${contentSelector} .lunara-feature-body div {
          font-size: 15px !important;
        }
        div.lunara-feature-divider-bottom > table > tbody > tr > td {
          padding: 0 20px !important;
        }
        div.lunara-feature-divider-bottom table table table td {
          padding: 8px 0 16px !important;
        }
      }
    `
  }

  static defaultAttributes = {
    'background-color': '#000000',
    'accent-color': '#7BA4F4',
    color: '#FFFFFF',
    'divider-color': '#2A2A2A',
    'divider-width': '1px',
    'image-src': 'lunara-images/lunara-lifestyle-img.png',
    'image-alt': 'People exploring the Lunara One smartphone',
    'image-border-radius': '8px',
    'image-min-height': '240px',
    'body-text':
      'Live demo, creator stories, and a first look at our new AI camera tools.',
    'link-text': 'Watch teaser >',
    'link-href': '#',
    'column-width': '50%',
    'font-size': '16px',
    padding: '32px 24px',
    'divider-padding': '0 24px',
    'content-padding': '36px 28px',
    'content-gap': '20px',
  }

  renderLink() {
    const accent = this.getAttribute('accent-color')
    const href = this.getAttribute('link-href')
    const text = this.getAttribute('link-text')

    return `<a href="${href}" style="color:${accent};text-decoration:none;font-size:14px;font-weight:500;">${text}</a>`
  }

  render() {
    const bg = this.getAttribute('background-color')
    const color = this.getAttribute('color')
    const dividerColor = this.getAttribute('divider-color')
    const dividerWidth = this.getAttribute('divider-width')
    const padding = this.getAttribute('padding')
    const dividerPadding = this.getAttribute('divider-padding')
    const fontSize = this.getAttribute('font-size')
    const bodyText = this.getAttribute('body-text')
    const contentPadding = this.getAttribute('content-padding')
    const contentGap = this.getAttribute('content-gap')

    const wrapperAttrs = this.htmlAttributes({
      'background-color': bg,
    })

    const dividerSectionAttrs = this.htmlAttributes({
      'background-color': bg,
      padding: dividerPadding,
      'css-class': 'lunara-feature-divider-section',
    })

    const dividerAttrs = this.htmlAttributes({
      'border-color': dividerColor,
      'border-width': dividerWidth,
      'border-style': 'solid',
      padding: '24px 0',
      width: '100%',
    })

    const mainSectionAttrs = this.htmlAttributes({
      'background-color': bg,
      padding,
      'css-class': 'lunara-feature-section',
    })

    const imageColumnAttrs = this.htmlAttributes({
      width: this.getAttribute('column-width'),
      'vertical-align': 'middle',
      padding: '0',
      'css-class': `lunara-feature-image lunara-feature-image-${this.cssId}`,
    })

    const textColumnAttrs = this.htmlAttributes({
      width: this.getAttribute('column-width'),
      'vertical-align': 'middle',
      padding: contentPadding,
      'css-class': `lunara-feature-content lunara-feature-content-${this.cssId}`,
    })

    return this.renderMJML(`
      <mj-wrapper ${wrapperAttrs}>
        <mj-section ${dividerSectionAttrs}>
          <mj-column>
            <mj-divider ${dividerAttrs} />
          </mj-column>
        </mj-section>
        <mj-section ${mainSectionAttrs}>
          <mj-column ${imageColumnAttrs}>
            <mj-spacer height="1px" />
          </mj-column>
          <mj-column ${textColumnAttrs}>
            <mj-text
              color="${color}"
              font-size="${fontSize}"
              line-height="1.6"
              padding="0"
              align="left"
              css-class="lunara-feature-body"
            >
              ${bodyText}
            </mj-text>
            <mj-text
              padding="${contentGap} 0 0 0"
              align="left"
              css-class="lunara-feature-link"
            >
              ${this.renderLink()}
            </mj-text>
          </mj-column>
        </mj-section>
        <mj-section
          ${this.htmlAttributes({
      'background-color': bg,
      padding: dividerPadding,
      'css-class': 'lunara-feature-divider-section lunara-feature-divider-bottom',
    })}
        >
          <mj-column>
            <mj-divider ${dividerAttrs} />
          </mj-column>
        </mj-section>
      </mj-wrapper>
    `)
  }
}
