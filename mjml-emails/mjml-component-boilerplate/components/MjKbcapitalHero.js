import { BodyComponent } from 'mjml-core'
import { KB_BODY_FONT, KB_HEADING_FONT, KB_COLORS, kbBodyFont, kbHeadingFont } from '../kbFontStack'

export default class MjKbcapitalHero extends BodyComponent {
  static dependencies = {
    'mj-kbcapital-hero': [],
    'mj-body': ['mj-kbcapital-hero'],
    'mj-wrapper': ['mj-kbcapital-hero'],
  }

  static allowedAttributes = {
    'background-color': 'color',
    'title-color': 'color',
    'text-color': 'color',
    'title-text': 'string',
    'body-text': 'string',
    'image-src': 'string',
    'image-alt': 'string',
    'image-border-radius': 'unit(px)',
    'image-mobile-height': 'unit(px)',
    'image-mobile-focus': 'string',
    'column-width': 'unit(px,%)',
    padding: 'unit(px){1,4}',
    'content-padding': 'unit(px){1,4}',
    'title-font-size': 'unit(px)',
    'body-font-size': 'unit(px)',
  }

  componentHeadStyle = () => {
    const mobileHeight = this.getAttribute('image-mobile-height')
    const mobileFocus = this.getAttribute('image-mobile-focus')
    const radius = this.getAttribute('image-border-radius')

    return `
    @media only screen and (max-width:480px) {
      div.kbcapital-hero-section > table > tbody > tr > td {
        padding: 24px 0 0 !important;
      }
      div.kbcapital-hero-copy > table > tbody > tr > td {
        width: 100% !important;
        display: block !important;
        padding: 0 20px 16px !important;
      }
      div.kbcapital-hero-image > table > tbody > tr > td {
        width: 100% !important;
        display: block !important;
        padding: 0 !important;
      }
      div.kbcapital-hero-image > table,
      div.kbcapital-hero-image img {
        width: 100% !important;
        max-width: 100% !important;
      }
      div.kbcapital-hero-image .mj-full-width-mobile,
      div.kbcapital-hero-image .mj-full-width-mobile img {
        width: 100% !important;
        max-width: 100% !important;
      }
      div.kbcapital-hero-image img {
        height: ${mobileHeight} !important;
        max-height: none !important;
        object-fit: cover !important;
        object-position: ${mobileFocus} !important;
        border-radius: 0 !important;
      }
      .kbcapital-hero-title div {
        text-align: center !important;
      }
      .kbcapital-hero-body div {
        text-align: center !important;
      }
    }
    @media only screen and (min-width:481px) {
      div.kbcapital-hero-image img {
        border-radius: ${radius} !important;
      }
    }
  `
  }

  static defaultAttributes = {
    'background-color': '#FFFFFF',
    'title-color': KB_COLORS.blue,
    'text-color': KB_COLORS.text,
    'title-text': 'WHY KB CAPITAL GROUP?',
    'body-text': "When Other Lenders Won\u2019t, KB Capital Will.",
    'image-src': 'images/100-fix-hero.png',
    'image-alt': 'Residential property under construction',
    'image-border-radius': '8px',
    'image-mobile-height': '240px',
    'image-mobile-focus': '78% center',
    'column-width': '50%',
    padding: '0 24px 24px',
    'content-padding': '0 16px 0 0',
    'title-font-size': '20px',
    'body-font-size': '16px',
  }

  render() {
    const titleColor = this.getAttribute('title-color')
    const textColor = this.getAttribute('text-color')
    const titleSize = this.getAttribute('title-font-size')
    const bodySize = this.getAttribute('body-font-size')

    const copyBlock = `
      <div class="kbcapital-hero-title" style="${kbHeadingFont()};font-size:${titleSize};font-weight:700;line-height:1.3;color:${titleColor};margin:0 0 10px 0;">
        ${this.getAttribute('title-text')}
      </div>
      <div class="kbcapital-hero-body" style="${kbBodyFont()};font-size:${bodySize};line-height:1.55;color:${textColor};">
        ${this.getAttribute('body-text')}
      </div>
    `

    const imageAttrs = this.htmlAttributes({
      src: this.getAttribute('image-src'),
      alt: this.getAttribute('image-alt'),
      width: '320px',
      align: 'right',
      padding: '0',
      'border-radius': this.getAttribute('image-border-radius'),
      'fluid-on-mobile': 'true',
      'css-class': 'kbcapital-hero-photo',
    })

    return this.renderMJML(`
      <mj-section ${this.htmlAttributes({
        'background-color': this.getAttribute('background-color'),
        padding: this.getAttribute('padding'),
        'css-class': 'kbcapital-hero-section',
      })}>
        <mj-column ${this.htmlAttributes({
          width: this.getAttribute('column-width'),
          'vertical-align': 'middle',
          padding: this.getAttribute('content-padding'),
          'css-class': 'kbcapital-hero-copy',
        })}>
          <mj-text padding="0" align="left">${copyBlock}</mj-text>
        </mj-column>
        <mj-column ${this.htmlAttributes({
          width: this.getAttribute('column-width'),
          'vertical-align': 'middle',
          padding: '0',
          'css-class': 'kbcapital-hero-image',
        })}>
          <mj-image ${imageAttrs} />
        </mj-column>
      </mj-section>
    `)
  }
}
