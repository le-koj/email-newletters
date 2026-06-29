import { BodyComponent } from 'mjml-core'
import { KB_COLORS, kbBodyFont } from '../kbFontStack'

export default class MjKbcapitalViewInBrowser extends BodyComponent {
  static dependencies = {
    'mj-kbcapital-view-in-browser': [],
    'mj-body': ['mj-kbcapital-view-in-browser'],
    'mj-wrapper': ['mj-kbcapital-view-in-browser'],
  }

  static allowedAttributes = {
    'background-color': 'color',
    'text-color': 'color',
    'link-color': 'color',
    'preheader-text': 'string',
    'view-in-browser-text': 'string',
    'view-in-browser-href': 'string',
    padding: 'unit(px){1,4}',
    'font-size': 'unit(px)',
    'left-width': 'unit(px,%)',
    'right-width': 'unit(px,%)',
  }

  componentHeadStyle = () => `
    @media only screen and (max-width:480px) {
      .kbcapital-view-left div,
      .kbcapital-view-right div {
        text-align: center !important;
      }
      .kbcapital-view-right div {
        padding-top: 4px !important;
      }
    }
  `

  static defaultAttributes = {
    'background-color': KB_COLORS.lightBlue,
    'text-color': KB_COLORS.text,
    'link-color': KB_COLORS.blue,
    'preheader-text':
      '100% financing of purchase and rehab funds - no down payment, rates as low as 9.25%.',
    'view-in-browser-text': 'View in browser',
    'view-in-browser-href': '{{WEB_VERSION_URL}}',
    padding: '10px 24px',
    'font-size': '11px',
    'left-width': '68%',
    'right-width': '32%',
  }

  render() {
    const bg = this.getAttribute('background-color')
    const textColor = this.getAttribute('text-color')
    const linkColor = this.getAttribute('link-color')
    const fontSize = this.getAttribute('font-size')
    const textStyle = `${kbBodyFont()};font-size:${fontSize};line-height:1.4;color:${textColor};`

    const sectionAttrs = this.htmlAttributes({
      'background-color': bg,
      padding: this.getAttribute('padding'),
      'css-class': 'kbcapital-view-in-browser',
    })

    const leftColAttrs = this.htmlAttributes({
      width: this.getAttribute('left-width'),
      padding: '0',
      'css-class': 'kbcapital-view-left',
    })

    const rightColAttrs = this.htmlAttributes({
      width: this.getAttribute('right-width'),
      padding: '0',
      'css-class': 'kbcapital-view-right',
    })

    return this.renderMJML(`
      <mj-section ${sectionAttrs}>
        <mj-column ${leftColAttrs}>
          <mj-text padding="0" align="left">
            <div style="${textStyle}">${this.getAttribute('preheader-text')}</div>
          </mj-text>
        </mj-column>
        <mj-column ${rightColAttrs}>
          <mj-text padding="0" align="right">
            <div style="${textStyle}">
              <a href="${this.getAttribute('view-in-browser-href')}" style="color:${linkColor};text-decoration:underline;">
                ${this.getAttribute('view-in-browser-text')}
              </a>
            </div>
          </mj-text>
        </mj-column>
      </mj-section>
    `)
  }
}
