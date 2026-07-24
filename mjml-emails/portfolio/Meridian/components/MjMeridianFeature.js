const { BodyComponent } = require('mjml-core')

class MjMeridianFeature extends BodyComponent {
  static dependencies = {
    'mj-meridian-feature': [],
    'mj-body': ['mj-meridian-feature'],
    'mj-wrapper': ['mj-meridian-feature'],
  }

  static allowedAttributes = {
    href: 'string',
  }

  static defaultAttributes = {
    href: '#',
  }

  componentHeadStyle = () => `
    .meridian-rule { border-top:1px solid #D9DDDC !important; }
    .meridian-feature-grid > table > tbody > tr { height:210px !important; }
    div.meridian-feature-intro > table,
    div.meridian-framework-item > table { height:100% !important; }
    .meridian-feature-intro > table > tbody > tr > td,
    .meridian-framework-item > table > tbody > tr > td { height:210px !important; }
    .meridian-framework-item > table > tbody > tr > td { border-left:1px solid #E1E3E1 !important; }
    .meridian-framework-icon { width:54px;height:54px;border-radius:50%;background:#0B1C31;margin:0 auto 12px;text-align:center;line-height:54px;color:#C7953F;font-size:28px;font-family:Georgia,serif; }
    @media only screen and (max-width:480px) {
      div.meridian-feature-heading-line,
      div.meridian-feature-heading-label { display:inline-block !important; vertical-align:middle !important; }
      div.meridian-feature-heading-line { width:27% !important; max-width:27% !important; }
      div.meridian-feature-heading-label { width:46% !important; max-width:46% !important; }
      div.meridian-feature-heading-line > table > tbody > tr > td,
      div.meridian-feature-heading-label > table > tbody > tr > td { padding:0 5px !important; }
      .meridian-feature-grid > table > tbody > tr { height:auto !important; }
      div.meridian-feature-intro > table,
      div.meridian-framework-item > table { height:auto !important; }
      .meridian-feature-intro > table > tbody > tr > td { padding:4px 28px 26px !important; }
      .meridian-framework-item > table > tbody > tr > td { height:auto !important; border-left:0 !important; border-top:1px solid #E1E3E1 !important; padding:24px 28px !important; }
      .meridian-feature-title div { text-align:center !important; }
      .meridian-feature-copy div { text-align:center !important; }
      .meridian-feature-button table { margin:0 auto !important; }
    }
  `

  renderItem(icon, number, title, copy) {
    return `
      <div class="meridian-framework-icon">${icon}</div>
      <div style="font-family:Arial,Helvetica,sans-serif;font-size:9px;font-weight:700;line-height:14px;color:#102138;text-align:center;text-transform:uppercase;white-space:nowrap;">
        ${number}. ${title}
      </div>
      <div style="font-family:Arial,Helvetica,sans-serif;font-size:10px;line-height:15px;color:#3C4248;text-align:center;margin-top:8px;">
        ${copy}
      </div>
    `
  }

  render() {
    const href = this.getAttribute('href')

    return this.renderMJML(`
      <mj-section background-color="#FFFFFF" padding="34px 28px 24px">
        <mj-column css-class="meridian-feature-heading-line" width="38%" vertical-align="middle" padding="0 14px 0 0"><mj-divider css-class="meridian-rule" border-width="1px" border-color="#D9DDDC" padding="0" /></mj-column>
        <mj-column css-class="meridian-feature-heading-label" width="24%" vertical-align="middle" padding="0">
          <mj-text align="center" padding="0" color="#C18E36" font-family="Arial, Helvetica, sans-serif" font-size="10px" font-weight="700" letter-spacing="1.6px" line-height="15px">FEATURED FRAMEWORK</mj-text>
        </mj-column>
        <mj-column css-class="meridian-feature-heading-line" width="38%" vertical-align="middle" padding="0 0 0 14px"><mj-divider css-class="meridian-rule" border-width="1px" border-color="#D9DDDC" padding="0" /></mj-column>
      </mj-section>
      <mj-section css-class="meridian-feature-grid" background-color="#FFFFFF" padding="0 28px 34px">
        <mj-column css-class="meridian-feature-intro" width="37%" vertical-align="middle" padding="7px 20px 5px 18px">
          <mj-text css-class="meridian-feature-title" padding="0 0 10px" color="#102138" font-family="Georgia, 'Times New Roman', serif" font-size="21px" line-height="27px">The 3-Point Priority Filter</mj-text>
          <mj-text css-class="meridian-feature-copy" padding="0 0 18px" color="#31363D" font-family="Arial, Helvetica, sans-serif" font-size="11px" line-height="17px">Use this simple filter to evaluate every initiative before it makes it onto your roadmap.</mj-text>
          <mj-button css-class="meridian-feature-button" align="left" href="${href}" background-color="#C7953F" color="#FFFFFF" border-radius="2px" padding="0" inner-padding="12px 17px" font-family="Arial, Helvetica, sans-serif" font-size="9px" font-weight="700" letter-spacing="1px">
            DOWNLOAD THE FRAMEWORK&nbsp; &rarr;
          </mj-button>
        </mj-column>
        <mj-column css-class="meridian-framework-item" width="21%" vertical-align="middle" padding="4px 11px 4px 16px">
          <mj-text padding="0">${this.renderItem('◎', '1', 'Strategic Fit', 'Does this move us closer to our most important strategic goals?')}</mj-text>
        </mj-column>
        <mj-column css-class="meridian-framework-item" width="21%" vertical-align="middle" padding="4px 11px 4px 16px">
          <mj-text padding="0">${this.renderItem('▥', '2', 'Revenue Impact', 'What is the potential impact on growth, margin or retention?')}</mj-text>
        </mj-column>
        <mj-column css-class="meridian-framework-item" width="21%" vertical-align="middle" padding="4px 7px 4px 16px">
          <mj-text padding="0">${this.renderItem('♙', '3', 'Operational Capacity', 'Do we have the people, time and systems to execute well?')}</mj-text>
        </mj-column>
      </mj-section>
    `)
  }
}

module.exports = MjMeridianFeature
