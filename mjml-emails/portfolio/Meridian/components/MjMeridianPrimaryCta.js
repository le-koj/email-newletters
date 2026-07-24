const { BodyComponent } = require('mjml-core')

class MjMeridianPrimaryCta extends BodyComponent {
  static dependencies = {
    'mj-meridian-primary-cta': [],
    'mj-body': ['mj-meridian-primary-cta'],
    'mj-wrapper': ['mj-meridian-primary-cta'],
  }

  static allowedAttributes = {
    href: 'string',
  }

  static defaultAttributes = {
    href: '#',
  }

  componentHeadStyle = () => `
    div.meridian-primary-card > table { border-radius:5px !important; }
    .meridian-primary-icon { width:74px;height:74px;border-radius:50%;border:1px solid #8B6934;margin:0 auto;text-align:center;line-height:74px;color:#C7953F;font-size:33px;font-family:Georgia,serif; }
    .meridian-primary-button a { white-space:nowrap !important; }
    @media only screen and (max-width:480px) {
      .meridian-primary-card > table > tbody > tr > td { padding:28px 24px !important; }
      .meridian-primary-title div,
      .meridian-primary-copy div { text-align:center !important; }
      .meridian-primary-title div { font-size:27px !important; line-height:33px !important; }
      .meridian-primary-button table { margin:14px auto 0 !important; }
      .meridian-primary-icon { margin-bottom:12px; }
    }
  `

  render() {
    const href = this.getAttribute('href')

    return this.renderMJML(`
      <mj-wrapper background-color="#FFFFFF" padding="0 28px 17px">
        <mj-section css-class="meridian-primary-card" background-color="#0B1C31" padding="25px 24px">
          <mj-column width="18%" vertical-align="middle" padding="0">
            <mj-text padding="0"><div class="meridian-primary-icon">▱</div></mj-text>
          </mj-column>
          <mj-column width="48%" vertical-align="middle" padding="0 18px">
            <mj-text css-class="meridian-primary-title" padding="0 0 7px" color="#FFFFFF" font-family="Georgia, 'Times New Roman', serif" font-size="23px" line-height="29px">Need a clearer plan for your next growth cycle?</mj-text>
            <mj-text css-class="meridian-primary-copy" padding="0" color="#FFFFFF" font-family="Arial, Helvetica, sans-serif" font-size="10px" line-height="16px">Let&rsquo;s talk about your goals and how we can help.</mj-text>
          </mj-column>
          <mj-column width="34%" vertical-align="middle" padding="0">
            <mj-button css-class="meridian-primary-button" align="center" href="${href}" background-color="#C7953F" color="#FFFFFF" border-radius="2px" padding="0" inner-padding="13px 15px" font-family="Arial, Helvetica, sans-serif" font-size="8px" font-weight="700" letter-spacing="1px">
              BOOK A STRATEGY SESSION&nbsp; &rarr;
            </mj-button>
          </mj-column>
        </mj-section>
      </mj-wrapper>
    `)
  }
}

module.exports = MjMeridianPrimaryCta
