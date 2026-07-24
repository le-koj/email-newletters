const { BodyComponent } = require('mjml-core')

class MjMeridianChecklistCta extends BodyComponent {
  static dependencies = {
    'mj-meridian-checklist-cta': [],
    'mj-body': ['mj-meridian-checklist-cta'],
    'mj-wrapper': ['mj-meridian-checklist-cta'],
  }

  static allowedAttributes = {
    href: 'string',
  }

  static defaultAttributes = {
    href: '#',
  }

  componentHeadStyle = () => `
    div.meridian-checklist-card > table { border:1px solid #E0E2DF !important; border-radius:5px !important; }
    .meridian-checklist-icon { width:86px;height:86px;border-radius:50%;background:#FFFFFF;margin:0 auto;text-align:center;line-height:86px;color:#1F5D43;font-family:Georgia,serif;font-size:42px; }
    @media only screen and (max-width:480px) {
      .meridian-checklist-card > table > tbody > tr > td { padding:26px 22px !important; }
      .meridian-checklist-icon { width:74px;height:74px;line-height:74px;font-size:36px;margin-bottom:4px; }
      .meridian-checklist-copy div { text-align:center !important; }
      .meridian-checklist-button table { margin:12px auto 0 !important; }
    }
  `

  render() {
    const href = this.getAttribute('href')

    return this.renderMJML(`
      <mj-wrapper background-color="#FFFFFF" padding="0 28px 27px">
        <mj-section css-class="meridian-checklist-card" background-color="#F5F4F1" padding="21px 22px">
          <mj-column width="20%" vertical-align="middle" padding="0">
            <mj-text padding="0"><div class="meridian-checklist-icon">☷</div></mj-text>
          </mj-column>
          <mj-column width="50%" vertical-align="middle" padding="0 18px">
            <mj-text css-class="meridian-checklist-copy" padding="0 0 7px" color="#C18E36" font-family="Arial, Helvetica, sans-serif" font-size="9px" font-weight="700" letter-spacing=".7px" line-height="14px">RESOURCE OF THE MONTH</mj-text>
            <mj-text css-class="meridian-checklist-copy" padding="0 0 8px" color="#102138" font-family="Georgia, 'Times New Roman', serif" font-size="22px" line-height="27px">Checklist: Prepare Your Team for a Better Quarterly Review</mj-text>
            <mj-text css-class="meridian-checklist-copy" padding="0" color="#3A3F45" font-family="Arial, Helvetica, sans-serif" font-size="10px" line-height="16px">A step-by-step checklist to help leaders gather the right data, ask the right questions, and drive better outcomes.</mj-text>
          </mj-column>
          <mj-column width="30%" vertical-align="middle" padding="0">
            <mj-button css-class="meridian-checklist-button" align="center" href="${href}" background-color="#1F5D3E" color="#FFFFFF" border-radius="2px" padding="0" inner-padding="12px 19px" font-family="Arial, Helvetica, sans-serif" font-size="9px" font-weight="700" letter-spacing="1px">
              GET THE CHECKLIST&nbsp; <span style="color:#C7953F;">&rarr;</span>
            </mj-button>
          </mj-column>
        </mj-section>
      </mj-wrapper>
    `)
  }
}

module.exports = MjMeridianChecklistCta
