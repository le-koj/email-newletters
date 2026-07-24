const { BodyComponent } = require('mjml-core')

class MjMeridianFooter extends BodyComponent {
  static dependencies = {
    'mj-meridian-footer': [],
    'mj-body': ['mj-meridian-footer'],
    'mj-wrapper': ['mj-meridian-footer'],
  }

  static allowedAttributes = {
    'logo-src': 'string',
    'unsubscribe-href': 'string',
  }

  static defaultAttributes = {
    'logo-src': 'images/logo/generated-logo.png',
    'unsubscribe-href': '#',
  }

  componentHeadStyle = () => `
    .meridian-social { display:inline-block;width:24px;height:24px;border-radius:50%;background:#A6AAA8;color:#FFFFFF;text-align:center;line-height:24px;font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:700;margin-left:9px; }
    @media only screen and (max-width:480px) {
      .meridian-footer-logo { text-align:center !important; }
      .meridian-footer-logo table { margin:0 auto !important; }
      .meridian-footer-logo img { margin:0 auto !important; }
      .meridian-footer-copy div,
      .meridian-footer-social div { text-align:center !important; }
      .meridian-footer-copy div { padding:13px 0 !important; }
      .meridian-social { margin:0 5px !important; }
    }
  `

  render() {
    const logo = this.getAttribute('logo-src')
    const unsubscribe = this.getAttribute('unsubscribe-href')

    return this.renderMJML(`
      <mj-section background-color="#F7F7F6" border-top="1px solid #DEE0DE" border-bottom="1px solid #DEE0DE" padding="17px 38px 15px">
        <mj-column width="31%" vertical-align="middle" padding="0">
          <mj-image css-class="meridian-footer-logo" align="left" padding="0" width="145px" src="${logo}" alt="Meridian Advisory Group" />
        </mj-column>
        <mj-column width="38%" vertical-align="middle" padding="0">
          <mj-text css-class="meridian-footer-copy" align="center" padding="0" color="#41464B" font-family="Arial, Helvetica, sans-serif" font-size="9px" line-height="15px">Helping leaders make better decisions,<br />drive results, and build enduring businesses.</mj-text>
        </mj-column>
        <mj-column width="31%" vertical-align="middle" padding="0">
          <mj-text css-class="meridian-footer-social" align="right" padding="0">
            <div><a class="meridian-social" href="#" style="text-decoration:none;">in</a><a class="meridian-social" href="#" style="text-decoration:none;">t</a><a class="meridian-social" href="mailto:hello@meridianadvisory.com" style="text-decoration:none;">✉</a></div>
          </mj-text>
        </mj-column>
      </mj-section>
      <mj-section background-color="#F7F7F6" padding="14px 30px 17px">
        <mj-column padding="0">
          <mj-text align="center" padding="0 0 6px" color="#666B70" font-family="Arial, Helvetica, sans-serif" font-size="8px" line-height="13px">Meridian Advisory Group, 123 Leadership Way, Suite 400, Chicago, IL 60601</mj-text>
          <mj-text align="center" padding="0" color="#74787C" font-family="Arial, Helvetica, sans-serif" font-size="8px" line-height="13px">
            You received this email because you subscribed to The Advisory Brief.<br />
            <a href="${unsubscribe}" style="color:#4E565F;text-decoration:underline;">Unsubscribe</a>
          </mj-text>
        </mj-column>
      </mj-section>
    `)
  }
}

module.exports = MjMeridianFooter
