const { BodyComponent } = require('mjml-core')

class MjMeridianHeader extends BodyComponent {
  static dependencies = {
    'mj-meridian-header': [],
    'mj-body': ['mj-meridian-header'],
    'mj-wrapper': ['mj-meridian-header'],
  }

  static allowedAttributes = {
    'logo-src': 'string',
    'view-in-browser-href': 'string',
  }

  static defaultAttributes = {
    'logo-src': 'images/logo/generated-logo.png',
    'view-in-browser-href': '#',
  }

  componentHeadStyle = () => `
    @media only screen and (max-width:480px) {
      .meridian-top-left div,
      .meridian-top-right div,
      .meridian-header-tagline div { text-align:center !important; }
      .meridian-top-right div { padding-top:7px !important; }
      div.meridian-header-main > table > tbody > tr > td { padding:10px 18px !important; }
      div.meridian-header-logo-col,
      div.meridian-header-tagline-col { display:inline-block !important; vertical-align:middle !important; }
      div.meridian-header-logo-col { width:60% !important; max-width:60% !important; }
      div.meridian-header-tagline-col { width:40% !important; max-width:40% !important; }
      div.meridian-header-logo-col > table > tbody > tr > td,
      div.meridian-header-tagline-col > table > tbody > tr > td { padding:0 4px !important; }
      .meridian-header-logo img { margin:0 !important; width:155px !important; }
      .meridian-header-tagline div { padding-top:0 !important; text-align:right !important; font-size:9px !important; line-height:14px !important; }
    }
  `

  render() {
    const logo = this.getAttribute('logo-src')
    const viewHref = this.getAttribute('view-in-browser-href')

    return this.renderMJML(`
      <mj-section background-color="#0B1C31" padding="15px 48px 14px">
        <mj-column width="44%" padding="0">
          <mj-text css-class="meridian-top-left" align="left" padding="0" color="#C7953F" font-family="Arial, Helvetica, sans-serif" font-size="10px" font-weight="700" letter-spacing="2px" line-height="16px">
            THE ADVISORY BRIEF
          </mj-text>
        </mj-column>
        <mj-column width="56%" padding="0">
          <mj-text css-class="meridian-top-right" align="right" padding="0" color="#FFFFFF" font-family="Arial, Helvetica, sans-serif" font-size="10px" line-height="16px">
            May 20, 2025 &nbsp;|&nbsp; Issue 28 &nbsp;|&nbsp;
            <a href="${viewHref}" style="color:#FFFFFF;text-decoration:underline;">View in browser</a>
          </mj-text>
        </mj-column>
      </mj-section>
      <mj-section css-class="meridian-header-main" background-color="#FFFFFF" padding="10px 48px">
        <mj-column css-class="meridian-header-logo-col" width="62%" vertical-align="middle" padding="0">
          <mj-image css-class="meridian-header-logo" align="left" padding="0" width="205px" src="${logo}" alt="Meridian Advisory Group" />
        </mj-column>
        <mj-column css-class="meridian-header-tagline-col" width="38%" vertical-align="middle" padding="0">
          <mj-text css-class="meridian-header-tagline" align="right" padding="0" color="#1E232B" font-family="Arial, Helvetica, sans-serif" font-size="11px" line-height="17px">
            Practical insights for leaders<br />building stronger businesses.
          </mj-text>
        </mj-column>
      </mj-section>
    `)
  }
}

module.exports = MjMeridianHeader
