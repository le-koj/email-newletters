const { BodyComponent } = require('mjml-core')

class MjMeridianSnapshot extends BodyComponent {
  static dependencies = {
    'mj-meridian-snapshot': [],
    'mj-body': ['mj-meridian-snapshot'],
    'mj-wrapper': ['mj-meridian-snapshot'],
  }

  static allowedAttributes = {
    'image-src': 'string',
    href: 'string',
  }

  static defaultAttributes = {
    'image-src': 'images/snapshot.png',
    href: '#',
  }

  componentHeadStyle = () => `
    div.meridian-snapshot-card > table { border:1px solid #E0E2E0 !important; box-shadow:0 2px 8px rgba(11,28,49,.05) !important; }
    .meridian-snapshot-image img { height:230px !important; object-fit:cover !important; }
    @media only screen and (max-width:480px) {
      .meridian-snapshot-image img { width:100% !important; height:auto !important; }
      .meridian-snapshot-copy > table > tbody > tr > td { padding:28px 26px 30px !important; }
      .meridian-snapshot-title div { font-size:27px !important; line-height:33px !important; }
    }
  `

  render() {
    const image = this.getAttribute('image-src')
    const href = this.getAttribute('href')

    return this.renderMJML(`
      <mj-wrapper background-color="#FFFFFF" padding="0 28px 16px">
        <mj-section css-class="meridian-snapshot-card" background-color="#FFFFFF" padding="0">
          <mj-column width="47%" vertical-align="middle" padding="0">
            <mj-image css-class="meridian-snapshot-image" fluid-on-mobile="true" padding="0" src="${image}" alt="Advisory team reviewing business performance reports" />
          </mj-column>
          <mj-column css-class="meridian-snapshot-copy" width="53%" vertical-align="middle" padding="28px 30px 26px">
            <mj-text padding="0 0 10px" color="#C18E36" font-family="Arial, Helvetica, sans-serif" font-size="9px" font-weight="700" letter-spacing=".8px" line-height="14px">CLIENT SNAPSHOT</mj-text>
            <mj-text css-class="meridian-snapshot-title" padding="0 0 12px" color="#102138" font-family="Georgia, 'Times New Roman', serif" font-size="25px" line-height="31px">How One Service Team<br />Reduced Approval Delays</mj-text>
            <mj-text padding="0 0 17px" color="#353A40" font-family="Arial, Helvetica, sans-serif" font-size="11px" line-height="17px">We helped a professional services firm streamline their proposal and approval process, cutting cycle time by 42% and improving client response rates.</mj-text>
            <mj-text padding="0" color="#102138" font-family="Arial, Helvetica, sans-serif" font-size="9px" font-weight="700" letter-spacing=".7px" line-height="15px">
              <a href="${href}" style="color:#102138;text-decoration:none;">VIEW THE CASE SNAPSHOT&nbsp; &rarr;</a>
            </mj-text>
          </mj-column>
        </mj-section>
      </mj-wrapper>
    `)
  }
}

module.exports = MjMeridianSnapshot
