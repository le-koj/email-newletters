import { BodyComponent } from 'mjml-core'

export default class MjLunaraHero extends BodyComponent {
  static dependencies = {
    'mj-lunara-hero': [],
    'mj-body': ['mj-lunara-hero'],
    'mj-wrapper': ['mj-lunara-hero'],
  }

  static allowedAttributes = {
    'background-color': 'color',
    'background-url': 'string',
    'background-size': 'string',
    'background-position': 'string',
    'background-repeat': 'enum(repeat,no-repeat)',
    'accent-color': 'color',
    color: 'color',
    'column-width': 'unit(px,%)',
    'headline-line1': 'string',
    'headline-line2': 'string',
    subheadline: 'string',
    'button-text': 'string',
    'button-href': 'string',
    'button-background-color': 'color',
    'button-color': 'color',
    'calendar-text': 'string',
    'calendar-href': 'string',
    hashtag: 'string',
    padding: 'unit(px){1,4}',
    'hashtag-padding': 'unit(px){1,4}',
  }

  static headStyle = (breakpoint) => `
    @media only screen and (max-width:${breakpoint}) {
      div.lunara-hero-spacer {
        display: none !important;
        max-height: 0 !important;
        overflow: hidden !important;
      }
      div.mj-column-per-42.lunara-hero-content {
        width: 100% !important;
        max-width: 100% !important;
      }
      div.lunara-hero-section > table > tbody > tr > td {
        padding: 28px 20px 36px !important;
        background-position: 70% center !important;
      }
      .lunara-hero-headline-line {
        font-size: 26px !important;
        line-height: 1.2 !important;
      }
      .lunara-hero-subhead div {
        font-size: 14px !important;
      }
      .lunara-hero-button table {
        width: 100% !important;
      }
      .lunara-hero-button a {
        display: block !important;
        text-align: center !important;
      }
    }
  `

  static defaultAttributes = {
    'background-color': '#000000',
    'background-url': 'lunara-images/lunara-banner.png',
    'background-size': 'cover',
    'background-position': 'right center',
    'background-repeat': 'no-repeat',
    'accent-color': '#7BA4F4',
    color: '#FFFFFF',
    'column-width': '42%',
    'headline-line1': 'Meet the future,',
    'headline-line2': 'beautifully made.',
    subheadline: 'Join us September 18 for the Lunara One reveal.',
    'button-text': 'Reserve your spot',
    'button-href': '#',
    'button-background-color': '#7BA4F4',
    'button-color': '#0A0A0A',
    'calendar-text': 'Add to calendar >',
    'calendar-href': '#',
    hashtag: '#HelloLunara',
    padding: '40px 24px 48px',
    'hashtag-padding': '20px 24px 32px',
  }

  renderHeadline() {
    const color = this.getAttribute('color')
    const accent = this.getAttribute('accent-color')
    const line1 = this.getAttribute('headline-line1')
    const line2 = this.getAttribute('headline-line2')

    return `
      <span class="lunara-hero-headline-line" style="color:${color};font-size:32px;font-weight:700;line-height:1.15;display:block;">${line1}</span>
      <span class="lunara-hero-headline-line" style="color:${accent};font-size:32px;font-weight:700;line-height:1.15;display:block;">${line2}</span>
    `
  }

  renderCalendarLink() {
    const accent = this.getAttribute('accent-color')
    const href = this.getAttribute('calendar-href')
    const text = this.getAttribute('calendar-text')

    return `<a href="${href}" style="color:${accent};text-decoration:none;font-size:14px;font-weight:500;">${text}</a>`
  }

  getSpacerWidth() {
    const columnWidth = this.getAttribute('column-width')
    if (typeof columnWidth === 'string' && columnWidth.endsWith('%')) {
      const percent = parseFloat(columnWidth)
      if (!Number.isNaN(percent) && percent < 100) {
        return `${100 - percent}%`
      }
    }
    return '58%'
  }

  render() {
    const bg = this.getAttribute('background-color')
    const accent = this.getAttribute('accent-color')
    const color = this.getAttribute('color')
    const padding = this.getAttribute('padding')
    const hashtagPadding = this.getAttribute('hashtag-padding')

    const heroSectionAttrs = this.htmlAttributes({
      'background-color': bg,
      'background-url': this.getAttribute('background-url'),
      'background-size': this.getAttribute('background-size'),
      'background-position': this.getAttribute('background-position'),
      'background-repeat': this.getAttribute('background-repeat'),
      padding,
      'css-class': 'lunara-hero-section',
    })

    const columnAttrs = this.htmlAttributes({
      width: this.getAttribute('column-width'),
      'vertical-align': 'middle',
      'css-class': 'lunara-hero-content',
    })

    const spacerColumnAttrs = this.htmlAttributes({
      width: this.getSpacerWidth(),
      'css-class': 'lunara-hero-spacer',
    })

    const buttonAttrs = this.htmlAttributes({
      href: this.getAttribute('button-href'),
      'background-color': this.getAttribute('button-background-color'),
      color: this.getAttribute('button-color'),
      'border-radius': '50px',
      'font-size': '14px',
      'font-weight': '600',
      'inner-padding': '14px 28px',
      align: 'left',
      padding: '20px 0 12px',
      'css-class': 'lunara-hero-button',
    })

    const hashtagSectionAttrs = this.htmlAttributes({
      'background-color': bg,
      padding: hashtagPadding,
    })

    const wrapperAttrs = this.htmlAttributes({
      'background-color': bg,
    })

    return this.renderMJML(`
      <mj-wrapper ${wrapperAttrs}>
        <mj-section ${heroSectionAttrs}>
          <mj-column ${columnAttrs}>
            <mj-text padding="0" align="left" css-class="lunara-hero-headline">
              ${this.renderHeadline()}
            </mj-text>
            <mj-text
              color="${color}"
              font-size="15px"
              line-height="1.5"
              padding="12px 0 0"
              align="left"
              css-class="lunara-hero-subhead"
            >
              ${this.getAttribute('subheadline')}
            </mj-text>
            <mj-button ${buttonAttrs}>
              ${this.getAttribute('button-text')}
            </mj-button>
            <mj-text padding="8px 0 0" align="left">
              ${this.renderCalendarLink()}
            </mj-text>
          </mj-column>
          <mj-column ${spacerColumnAttrs}>
            <mj-spacer height="1px" />
          </mj-column>
        </mj-section>
        <mj-section ${hashtagSectionAttrs}>
          <mj-column>
            <mj-text
              align="center"
              color="${accent}"
              font-size="15px"
              font-weight="500"
              padding="0"
            >
              ${this.getAttribute('hashtag')}
            </mj-text>
          </mj-column>
        </mj-section>
      </mj-wrapper>
    `)
  }
}
