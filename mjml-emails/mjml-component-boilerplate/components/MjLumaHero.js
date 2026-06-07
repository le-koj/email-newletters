import { BodyComponent } from 'mjml-core'

const IMAGES_BASE = 'resources/images/luma'

export default class MjLumaHero extends BodyComponent {
  static dependencies = {
    'mj-luma-hero': [],
    'mj-body': ['mj-luma-hero'],
    'mj-wrapper': ['mj-luma-hero'],
  }

  static allowedAttributes = {
    'background-color': 'color',
    'background-url': 'string',
    'background-size': 'string',
    'background-position': 'string',
    'background-repeat': 'enum(repeat,no-repeat)',
    'font-family': 'string',
    'content-column-width': 'unit(px,%)',
    'section-min-height': 'unit(px)',
    'eyebrow-text': 'string',
    'eyebrow-color': 'color',
    'eyebrow-font-size': 'unit(px)',
    'headline-line-1': 'string',
    'headline-line-2': 'string',
    'headline-color': 'color',
    'headline-font-size': 'unit(px)',
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
    'eyebrow-padding': 'unit(px){1,4}',
    'headline-padding': 'unit(px){1,4}',
    'body-padding': 'unit(px){1,4}',
    'button-padding': 'unit(px){1,4}',
  }

  componentHeadStyle = () => {
    const minHeight = this.getAttribute('section-min-height')

    return `
    .luma-hero-eyebrow div,
    .luma-hero-body div {
      line-height: 1.4 !important;
    }
    .luma-hero-headline div {
      line-height: 1.05 !important;
    }
    div.luma-hero-section > table > tbody > tr > td {
      min-height: ${minHeight} !important;
    }
    @media only screen and (max-width:480px) {
      div.luma-hero-spacer {
        display: none !important;
        max-height: 0 !important;
        overflow: hidden !important;
      }
      div.luma-hero-content-col {
        width: 100% !important;
        max-width: 100% !important;
      }
      div.luma-hero-section > table > tbody > tr > td {
        padding: 32px 20px 220px !important;
        background-position: center bottom !important;
        background-size: cover !important;
      }
      div.luma-hero-content-col > table > tbody > tr > td {
        padding: 0 !important;
        text-align: center !important;
      }
      .luma-hero-eyebrow div,
      .luma-hero-headline div,
      .luma-hero-body div {
        text-align: center !important;
      }
      .luma-hero-headline div {
        font-size: 32px !important;
      }
      .luma-hero-button table {
        margin: 0 auto !important;
      }
    }
  `
  }

  static defaultAttributes = {
    'background-color': '#F9F6F2',
    'background-url': `${IMAGES_BASE}/luma-hero.png`,
    'background-size': 'cover',
    'background-position': 'right center',
    'background-repeat': 'no-repeat',
    'font-family': 'Inter, Helvetica, Arial, sans-serif',
    'content-column-width': '48%',
    'section-min-height': '320px',
    'eyebrow-text': 'PLANT-POWERED SKINCARE',
    'eyebrow-color': '#C18B82',
    'eyebrow-font-size': '11px',
    'headline-line-1': 'THE GLOW',
    'headline-line-2': 'EDIT',
    'headline-color': '#000000',
    'headline-font-size': '40px',
    'body-text':
      'Potent botanicals. Gentle science. Visible results your skin will love.',
    'body-color': '#333333',
    'body-font-size': '14px',
    'button-text': 'Shop the collection',
    'button-href': '#',
    'button-background-color': '#C18B82',
    'button-color': '#FFFFFF',
    'button-font-size': '14px',
    padding: '48px 24px 48px 32px',
    'content-column-padding': '0',
    'eyebrow-padding': '0 0 10px 0',
    'headline-padding': '0 0 14px 0',
    'body-padding': '0 0 22px 0',
    'button-padding': '0',
  }

  getSpacerWidth() {
    const columnWidth = this.getAttribute('content-column-width')
    if (typeof columnWidth === 'string' && columnWidth.endsWith('%')) {
      const percent = parseFloat(columnWidth)
      if (!Number.isNaN(percent) && percent < 100) {
        return `${100 - percent}%`
      }
    }
    return '52%'
  }

  render() {
    const fontFamily = this.getAttribute('font-family')
    const bg = this.getAttribute('background-color')

    const wrapperAttrs = this.htmlAttributes({
      'background-color': bg,
    })

    const sectionAttrs = this.htmlAttributes({
      'background-color': bg,
      'background-url': this.getAttribute('background-url'),
      'background-size': this.getAttribute('background-size'),
      'background-position': this.getAttribute('background-position'),
      'background-repeat': this.getAttribute('background-repeat'),
      padding: this.getAttribute('padding'),
      'css-class': 'luma-hero-section',
    })

    const contentColAttrs = this.htmlAttributes({
      width: this.getAttribute('content-column-width'),
      'vertical-align': 'middle',
      padding: this.getAttribute('content-column-padding'),
      'css-class': 'luma-hero-content-col',
    })

    const spacerColAttrs = this.htmlAttributes({
      width: this.getSpacerWidth(),
      'css-class': 'luma-hero-spacer',
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
      'css-class': 'luma-hero-button',
    })

    const eyebrowColor = this.getAttribute('eyebrow-color')
    const eyebrowSize = this.getAttribute('eyebrow-font-size')
    const headlineColor = this.getAttribute('headline-color')
    const headlineSize = this.getAttribute('headline-font-size')
    const bodyColor = this.getAttribute('body-color')
    const bodySize = this.getAttribute('body-font-size')

    return this.renderMJML(`
      <mj-wrapper ${wrapperAttrs}>
        <mj-section ${sectionAttrs}>
          <mj-column ${contentColAttrs}>
            <mj-text padding="${this.getAttribute('eyebrow-padding')}" align="left" css-class="luma-hero-eyebrow">
              <div style="font-family:${fontFamily};font-size:${eyebrowSize};font-weight:500;letter-spacing:1.4px;text-transform:uppercase;color:${eyebrowColor};">
                ${this.getAttribute('eyebrow-text')}
              </div>
            </mj-text>
            <mj-text padding="${this.getAttribute('headline-padding')}" align="left" css-class="luma-hero-headline">
              <div style="font-family:${fontFamily};font-size:${headlineSize};font-weight:700;line-height:1.05;letter-spacing:0.02em;text-transform:uppercase;color:${headlineColor};">
                ${this.getAttribute('headline-line-1')}<br />
                ${this.getAttribute('headline-line-2')}
              </div>
            </mj-text>
            <mj-text padding="${this.getAttribute('body-padding')}" align="left" css-class="luma-hero-body">
              <div style="font-family:${fontFamily};font-size:${bodySize};font-weight:400;line-height:1.55;color:${bodyColor};">
                ${this.getAttribute('body-text')}
              </div>
            </mj-text>
            <mj-button ${buttonAttrs}>
              ${this.getAttribute('button-text')}
            </mj-button>
          </mj-column>
          <mj-column ${spacerColAttrs}>
            <mj-spacer height="1px" />
          </mj-column>
        </mj-section>
      </mj-wrapper>
    `)
  }
}
