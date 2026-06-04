import { BodyComponent } from 'mjml-core'

const ICONS_BASE = 'resources/images/northbridge/icons'
const IMAGES_BASE = 'resources/images/northbridge'

export default class MjNorthbridgeConversation extends BodyComponent {
  static dependencies = {
    'mj-northbridge-conversation': [],
    'mj-body': ['mj-northbridge-conversation'],
    'mj-wrapper': ['mj-northbridge-conversation'],
  }

  static allowedAttributes = {
    'background-color': 'color',
    'card-color': 'color',
    'accent-color': 'color',
    'title-color': 'color',
    'text-color': 'color',
    'icon-src': 'string',
    'icon-size': 'unit(px)',
    'icon-circle-size': 'unit(px)',
    'icon-border-color': 'color',
    'image-src': 'string',
    'image-alt': 'string',
    'image-min-height': 'unit(px)',
    'eyebrow': 'string',
    'eyebrow-font-size': 'unit(px)',
    'title': 'string',
    'title-font-size': 'unit(px)',
    'title-font-family': 'string',
    'body-text': 'string',
    'body-font-size': 'unit(px)',
    'link-text': 'string',
    'link-href': 'string',
    'link-font-size': 'unit(px)',
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
    const imageSelector = `.northbridge-conversation-image-${this.cssId}`
    const contentSelector = `.northbridge-conversation-content-${this.cssId}`

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
      @media only screen and (max-width:480px) {
        div.northbridge-conversation-section > table > tbody > tr > td {
          padding: 0 !important;
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
          padding: 28px 24px !important;
        }
        .northbridge-conversation-title div {
          font-size: 22px !important;
        }
      }
    `
  }

  static defaultAttributes = {
    'background-color': '#FFFFFF',
    'card-color': '#0C1C36',
    'accent-color': '#5B8FE0',
    'title-color': '#FFFFFF',
    'text-color': '#C2CBDA',
    'icon-src': `${ICONS_BASE}/mic-white-removebg.png`,
    'icon-size': '38px',
    'icon-circle-size': '48px',
    'icon-border-color': '#3A4D6E',
    'image-src': `${IMAGES_BASE}/northbridge-professional.png`,
    'image-alt': 'Mia Reynolds, litigation specialist',
    'image-min-height': '260px',
    'eyebrow': 'In Conversation',
    'eyebrow-font-size': '16px',
    'title': '\u201CClarity, Curiosity, and Commerciality\u201D',
    'title-font-size': '26px',
    'title-font-family': "Georgia, 'Times New Roman', serif",
    'body-text':
      'We sit down with litigation specialist Mia Reynolds on the skills junior lawyers need\u2014and the habits that build trust with clients.',
    'body-font-size': '15px',
    'link-text': 'Read the conversation',
    'link-href': '#',
    'link-font-size': '15px',
    'column-width': '50%',
    padding: '0 0 0 16px',
    'content-padding': '16px 30px',
  }

  renderEyebrowRow() {
    const accent = this.getAttribute('accent-color')
    const iconSrc = this.getAttribute('icon-src')
    const iconSize = parseInt(this.getAttribute('icon-size'), 10) || 38
    const circleSize = this.getAttribute('icon-circle-size')
    const eyebrowSize = this.getAttribute('eyebrow-font-size')

    return `
      <table role="presentation" border="0" cellpadding="0" cellspacing="0">
        <tr>
          <td valign="middle" width="${circleSize}">
            <table role="presentation" border="0" cellpadding="0" cellspacing="0">
              <tr>
                <td
                  align="center"
                  valign="middle"
                  width="${circleSize}"
                  height="${circleSize}"
                  style="width:${circleSize};height:${circleSize};border-radius:50%;"
                >
                  <img
                    src="${iconSrc}"
                    width="${iconSize}"
                    alt=""
                    style="display:block;border:0;outline:none;"
                  />
                </td>
              </tr>
            </table>
          </td>
          <td valign="middle" style="padding-left:14px;">
            <span style="font-family:Helvetica,Arial,sans-serif;font-size:${eyebrowSize};font-weight:700;letter-spacing:1px;text-transform:uppercase;color:${accent};">
              ${this.getAttribute('eyebrow')}
            </span>
          </td>
        </tr>
      </table>
    `
  }

  renderLink() {
    const accent = this.getAttribute('accent-color')
    const size = this.getAttribute('link-font-size')
    const href = this.getAttribute('link-href')
    const text = this.getAttribute('link-text')

    return `<a href="${href}" style="color:${accent};text-decoration:none;font-size:${size};font-weight:600;font-family:Helvetica,Arial,sans-serif;">${text}&nbsp;&rarr;</a>`
  }

  render() {
    const bg = this.getAttribute('background-color')
    const card = this.getAttribute('card-color')
    const titleColor = this.getAttribute('title-color')
    const titleSize = this.getAttribute('title-font-size')
    const titleFont = this.getAttribute('title-font-family')
    const textColor = this.getAttribute('text-color')
    const bodySize = this.getAttribute('body-font-size')

    const wrapperAttrs = this.htmlAttributes({
      'background-color': bg,
    })

    const sectionAttrs = this.htmlAttributes({
      'background-color': card,
      padding: this.getAttribute('padding'),
      'css-class': 'northbridge-conversation-section',
    })

    const imageColumnAttrs = this.htmlAttributes({
      width: this.getAttribute('column-width'),
      'vertical-align': 'middle',
      padding: '0',
      'css-class': `northbridge-conversation-image northbridge-conversation-image-${this.cssId}`,
    })

    const contentColumnAttrs = this.htmlAttributes({
      width: this.getAttribute('column-width'),
      'vertical-align': 'middle',
      'background-color': card,
      padding: this.getAttribute('content-padding'),
      'css-class': `northbridge-conversation-content northbridge-conversation-content-${this.cssId}`,
    })

    return this.renderMJML(`
      <mj-wrapper ${wrapperAttrs}>
        <mj-section ${sectionAttrs}>
          <mj-column ${imageColumnAttrs}>
            <mj-spacer height="1px" />
          </mj-column>
          <mj-column ${contentColumnAttrs}>
            <mj-text padding="0 0 16px 0">
              ${this.renderEyebrowRow()}
            </mj-text>
            <mj-text
              padding="0 0 14px 0"
              css-class="northbridge-conversation-title"
            >
              <div style="font-family:${titleFont};font-size:${titleSize};line-height:1.25;color:${titleColor};">
                ${this.getAttribute('title')}
              </div>
            </mj-text>
            <mj-text padding="0 0 20px 0">
              <div style="font-family:Helvetica,Arial,sans-serif;font-size:${bodySize};line-height:1.6;color:${textColor};">
                ${this.getAttribute('body-text')}
              </div>
            </mj-text>
            <mj-text padding="0">
              ${this.renderLink()}
            </mj-text>
          </mj-column>
        </mj-section>
      </mj-wrapper>
    `)
  }
}
