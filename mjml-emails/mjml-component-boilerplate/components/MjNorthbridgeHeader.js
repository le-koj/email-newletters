import { BodyComponent } from 'mjml-core'

const IMAGES_BASE = 'resources/images/northbridge'
const ICONS_BASE = `${IMAGES_BASE}/icons`

export default class MjNorthbridgeHeader extends BodyComponent {
  static dependencies = {
    'mj-northbridge-header': [],
    'mj-body': ['mj-northbridge-header'],
    'mj-wrapper': ['mj-northbridge-header'],
  }

  static allowedAttributes = {
    'background-color': 'color',
    'preheader-bg-color': 'color',
    'preheader-color': 'color',
    'preheader-text': 'string',
    'view-in-browser-text': 'string',
    'view-in-browser-href': 'string',
    'view-in-browser-color': 'color',
    'brand-color': 'color',
    'muted-color': 'color',
    'divider-color': 'color',
    'divider-width': 'unit(px)',
    'logo-src': 'string',
    'logo-alt': 'string',
    'logo-width': 'unit(px)',
    'brand-line-1': 'string',
    'brand-line-2': 'string',
    'brand-font-size': 'unit(px)',
    'brand-font-family': 'string',
    'digest-label': 'string',
    'digest-date': 'string',
    'digest-issue': 'string',
    'digest-label-font-size': 'unit(px)',
    'digest-meta-font-size': 'unit(px)',
    'digest-icon-src': 'string',
    'digest-icon-size': 'unit(px)',
    'digest-icon-circle-size': 'unit(px)',
    'logo-column-width': 'unit(px,%)',
    'digest-column-width': 'unit(px,%)',
    'preheader-padding': 'unit(px){1,4}',
    'header-padding': 'unit(px){1,4}',
    'logo-column-padding': 'unit(px){1,4}',
    'digest-column-padding': 'unit(px){1,4}',
    'preheader-font-size': 'unit(px)',
  }

  componentHeadStyle = () => {
    const dividerColor = this.getAttribute('divider-color')
    const dividerWidth = this.getAttribute('divider-width')

    return `
      .northbridge-header-logo img {
        display: block !important;
        border: 1px solid #1A1A1A !important;
      }
      div.northbridge-header-main > table > tbody > tr > td {
        border-bottom: ${dividerWidth} solid ${dividerColor} !important;
      }
      @media only screen and (max-width:480px) {
        .northbridge-header-preheader-left div,
        .northbridge-header-preheader-right div {
          text-align: center !important;
        }
        .northbridge-header-preheader-right div {
          padding-top: 4px !important;
        }
        div.northbridge-header-main > table > tbody > tr > td {
          padding: 16px 12px 20px !important;
        }
        div.northbridge-header-logo-col,
        div.northbridge-header-digest-col {
          display: inline-block !important;
          vertical-align: middle !important;
        }
        div.northbridge-header-logo-col {
          width: 55% !important;
          max-width: 55% !important;
        }
        div.northbridge-header-digest-col {
          width: 45% !important;
          max-width: 45% !important;
        }
        div.northbridge-header-logo-col > table > tbody > tr > td,
        div.northbridge-header-digest-col > table > tbody > tr > td {
          padding: 0 4px !important;
        }
        .northbridge-header-digest-table {
          margin: 0 0 0 auto !important;
        }
        .northbridge-header-brand-name div {
          font-size: 22px !important;
        }
        .northbridge-header-digest-label {
          font-size: 12px !important;
        }
        .northbridge-header-digest-meta {
          font-size: 11px !important;
        }
      }
    `
  }

  static defaultAttributes = {
    'background-color': '#FFFFFF',
    'preheader-bg-color': '#F3F4F6',
    'preheader-color': '#9CA3AF',
    'preheader-text':
      "Insights for professional minds. Strategies for what's next.",
    'view-in-browser-text': 'View in browser',
    'view-in-browser-href': '#',
    'view-in-browser-color': '#0C1C36',
    'brand-color': '#0C1C36',
    'muted-color': '#9CA3AF',
    'divider-color': '#E0E0E0',
    'divider-width': '1px',
    'logo-src': `${IMAGES_BASE}/northbridge-logo-removebg.png`,
    'logo-alt': 'Northbridge Brief',
    'logo-width': '48px',
    'brand-line-1': 'Northbridge',
    'brand-line-2': 'Brief',
    'brand-font-size': '26px',
    'brand-font-family': "Georgia, 'Times New Roman', serif",
    'digest-label': 'WEEKLY DIGEST',
    'digest-date': '19 May 2025',
    'digest-issue': 'Issue 142',
    'digest-label-font-size': '14px',
    'digest-meta-font-size': '12px',
    'digest-icon-src': `${ICONS_BASE}/book-icon-removebg.png`,
    'digest-icon-size': '20px',
    'digest-icon-circle-size': '38px',
    'logo-column-width': '55%',
    'digest-column-width': '45%',
    'preheader-padding': '10px 24px',
    'header-padding': '20px 24px 20px',
    'logo-column-padding': '0 0 0 0',
    'digest-column-padding': '0 0 0 0',
    'preheader-font-size': '11px',
  }

  fontFamily() {
    return 'Helvetica, Arial, sans-serif'
  }

  renderPreheader() {
    const bg = this.getAttribute('preheader-bg-color')
    const color = this.getAttribute('preheader-color')
    const linkColor = this.getAttribute('view-in-browser-color')
    const fontSize = this.getAttribute('preheader-font-size')
    const font = this.fontFamily()
    const textStyle = `font-family:${font};font-size:${fontSize};line-height:1.4;color:${color};`

    const sectionAttrs = this.htmlAttributes({
      'background-color': bg,
      padding: this.getAttribute('preheader-padding'),
      'css-class': 'northbridge-header-preheader',
    })

    const leftColAttrs = this.htmlAttributes({
      width: '60%',
      padding: '0',
      'css-class': 'northbridge-header-preheader-left',
    })

    const rightColAttrs = this.htmlAttributes({
      width: '40%',
      padding: '0',
      'css-class': 'northbridge-header-preheader-right',
    })

    return `
      <mj-section ${sectionAttrs}>
        <mj-column ${leftColAttrs}>
          <mj-text padding="0" align="left" css-class="northbridge-header-preheader-left">
            <div style="${textStyle}">${this.getAttribute('preheader-text')}</div>
          </mj-text>
        </mj-column>
        <mj-column ${rightColAttrs}>
          <mj-text padding="0" align="right" css-class="northbridge-header-preheader-right">
            <div style="${textStyle}">
              <a href="${this.getAttribute('view-in-browser-href')}" style="color:${linkColor};text-decoration:underline;">${this.getAttribute('view-in-browser-text')}</a>
            </div>
          </mj-text>
        </mj-column>
      </mj-section>
    `
  }

  renderLogoBlock() {
    const brandColor = this.getAttribute('brand-color')
    const brandSize = this.getAttribute('brand-font-size')
    const brandFont = this.getAttribute('brand-font-family')
    const logoWidth = this.getAttribute('logo-width')
    const logoSrc = this.getAttribute('logo-src')
    const logoAlt = this.getAttribute('logo-alt')

    return `
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" class="northbridge-header-logo-table">
        <tr>
          <td style="vertical-align:middle;padding-right:12px;">
            <img
              src="${logoSrc}"
              width="${parseInt(logoWidth, 10)}"
              alt="${logoAlt}"
              class="northbridge-header-logo"
              style="display:block;width:${logoWidth};height:auto;"
            />
          </td>
          <td style="vertical-align:middle;" class="northbridge-header-brand-name">
            <div style="font-family:${brandFont};font-size:${brandSize};line-height:1.15;color:${brandColor};">
              ${this.getAttribute('brand-line-1')}<br />
              ${this.getAttribute('brand-line-2')}
            </div>
          </td>
        </tr>
      </table>
    `
  }

  renderDigestBlock() {
    const brandColor = this.getAttribute('brand-color')
    const mutedColor = this.getAttribute('muted-color')
    const labelSize = this.getAttribute('digest-label-font-size')
    const metaSize = this.getAttribute('digest-meta-font-size')
    const iconSize = this.getAttribute('digest-icon-size')
    const circleSize = this.getAttribute('digest-icon-circle-size')
    const font = this.fontFamily()
    const iconSrc = this.getAttribute('digest-icon-src')
    const iconPx = parseInt(iconSize, 10)
    const circlePx = parseInt(circleSize, 10)

    return `
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="right" class="northbridge-header-digest-table">
        <tr>
          <td style="vertical-align:middle;padding-right:10px;">
            <div style="width:${circlePx}px;height:${circlePx}px;border:1px solid ${brandColor};border-radius:50%;text-align:center;line-height:${circlePx}px;">
              <img
                src="${iconSrc}"
                width="${iconPx}"
                height="${iconPx}"
                alt=""
                style="display:inline-block;vertical-align:middle;"
              />
            </div>
          </td>
          <td style="vertical-align:middle;text-align:left;">
            <div class="northbridge-header-digest-label" style="font-family:${font};font-size:${labelSize};font-weight:700;letter-spacing:0.08em;line-height:1.3;color:${brandColor};text-transform:uppercase;">
              ${this.getAttribute('digest-label')}
            </div>
            <div class="northbridge-header-digest-meta" style="font-family:${font};font-size:${metaSize};line-height:1.4;color:${mutedColor};margin-top:2px;">
              ${this.getAttribute('digest-date')} &bull; ${this.getAttribute('digest-issue')}
            </div>
          </td>
        </tr>
      </table>
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
      'css-class': 'northbridge-header-main',
    })

    const logoColAttrs = this.htmlAttributes({
      width: this.getAttribute('logo-column-width'),
      'vertical-align': 'middle',
      padding: this.getAttribute('logo-column-padding'),
      'css-class': 'northbridge-header-logo-col',
    })

    const digestColAttrs = this.htmlAttributes({
      width: this.getAttribute('digest-column-width'),
      'vertical-align': 'middle',
      padding: this.getAttribute('digest-column-padding'),
      'css-class': 'northbridge-header-digest-col',
    })

    return this.renderMJML(`
      <mj-wrapper ${wrapperAttrs}>
        ${this.renderPreheader()}
        <mj-section ${headerSectionAttrs}>
          <mj-column ${logoColAttrs}>
            <mj-text padding="0" align="left">
              ${this.renderLogoBlock()}
            </mj-text>
          </mj-column>
          <mj-column ${digestColAttrs}>
            <mj-text padding="0" align="right">
              ${this.renderDigestBlock()}
            </mj-text>
          </mj-column>
        </mj-section>
      </mj-wrapper>
    `)
  }
}
