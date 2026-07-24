const { BodyComponent } = require('mjml-core')

class MjMeridianUpcoming extends BodyComponent {
  static dependencies = {
    'mj-meridian-upcoming': [],
    'mj-body': ['mj-meridian-upcoming'],
    'mj-wrapper': ['mj-meridian-upcoming'],
  }

  componentHeadStyle = () => `
    .meridian-upcoming-item > table > tbody > tr > td { border-left:1px solid #E0E2E0 !important; }
    .meridian-upcoming-item.first > table > tbody > tr > td { border-left:0 !important; }
    .meridian-upcoming-icon { width:42px;height:42px;border-radius:50%;background:#F2F4F1;margin:0 auto 11px;text-align:center;line-height:42px;color:#37694F;font-size:21px;font-family:Georgia,serif; }
    @media only screen and (max-width:480px) {
      div.meridian-upcoming-heading-line,
      div.meridian-upcoming-heading-label { display:inline-block !important; vertical-align:middle !important; }
      div.meridian-upcoming-heading-line { width:27% !important; max-width:27% !important; }
      div.meridian-upcoming-heading-label { width:46% !important; max-width:46% !important; }
      div.meridian-upcoming-heading-line > table > tbody > tr > td,
      div.meridian-upcoming-heading-label > table > tbody > tr > td { display:table-cell !important; }
      div.meridian-upcoming-item { display:inline-block !important; width:50% !important; max-width:50% !important; vertical-align:top !important; }
      .meridian-upcoming-item > table > tbody > tr > td { min-height:205px !important; border-left:0 !important; border-top:1px solid #E0E2E0 !important; padding:24px 14px !important; }
      .meridian-upcoming-item.first > table > tbody > tr > td,
      .meridian-upcoming-item.second > table > tbody > tr > td { border-top:0 !important; }
    }
    @media only screen and (max-width:340px) {
      div.meridian-upcoming-item { width:100% !important; max-width:100% !important; }
    }
  `

  renderNote(icon, label, copy, linkText) {
    return `
      <div class="meridian-upcoming-icon">${icon}</div>
      <div style="font-family:Arial,Helvetica,sans-serif;font-size:9px;font-weight:700;line-height:14px;color:#102138;text-align:center;text-transform:uppercase;">${label}</div>
      <div style="font-family:Arial,Helvetica,sans-serif;font-size:10px;line-height:16px;color:#343A40;text-align:center;margin-top:9px;min-height:64px;">${copy}</div>
      <div style="font-family:Arial,Helvetica,sans-serif;font-size:9px;font-weight:700;line-height:14px;color:#102138;text-align:center;margin-top:9px;text-transform:uppercase;">${linkText}&nbsp; &rarr;</div>
    `
  }

  render() {
    return this.renderMJML(`
      <mj-section background-color="#FFFFFF" padding="0 28px 22px">
        <mj-column css-class="meridian-upcoming-heading-line" width="36%" vertical-align="middle" padding="0 14px 0 0"><mj-divider border-width="1px" border-color="#D9DDDC" padding="0" /></mj-column>
        <mj-column css-class="meridian-upcoming-heading-label" width="28%" vertical-align="middle" padding="0">
          <mj-text align="center" padding="0" color="#C18E36" font-family="Arial, Helvetica, sans-serif" font-size="10px" font-weight="700" letter-spacing="1.6px" line-height="15px">UPCOMING &amp; QUICK NOTES</mj-text>
        </mj-column>
        <mj-column css-class="meridian-upcoming-heading-line" width="36%" vertical-align="middle" padding="0 0 0 14px"><mj-divider border-width="1px" border-color="#D9DDDC" padding="0" /></mj-column>
      </mj-section>
      <mj-section background-color="#FFFFFF" padding="0 28px 31px">
        <mj-column css-class="meridian-upcoming-item first" width="25%" vertical-align="top" padding="0 13px">
          <mj-text padding="0">${this.renderNote('□', 'Upcoming Webinar', 'Q3 Strategy Reset: Aligning Priorities and Execution<br />June 5, 2025', 'Register Now')}</mj-text>
        </mj-column>
        <mj-column css-class="meridian-upcoming-item second" width="25%" vertical-align="top" padding="0 13px">
          <mj-text padding="0">${this.renderNote('♧', 'Office Hours', 'Join us for live office hours with our strategy team.<br />June 12, 2025', 'Save Your Spot')}</mj-text>
        </mj-column>
        <mj-column css-class="meridian-upcoming-item" width="25%" vertical-align="top" padding="0 13px">
          <mj-text padding="0">${this.renderNote('▤', 'New Guide', 'Building a Scalable Operating Model for Growth<br />&nbsp;', 'Download Guide')}</mj-text>
        </mj-column>
        <mj-column css-class="meridian-upcoming-item" width="25%" vertical-align="top" padding="0 13px">
          <mj-text padding="0">${this.renderNote('✉', 'Advisory Availability', 'Limited spots open for Q3 strategy engagements.<br />&nbsp;', 'Inquire Now')}</mj-text>
        </mj-column>
      </mj-section>
    `)
  }
}

module.exports = MjMeridianUpcoming
