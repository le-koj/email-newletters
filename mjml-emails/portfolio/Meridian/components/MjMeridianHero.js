const { BodyComponent } = require('mjml-core')

class MjMeridianHero extends BodyComponent {
  static dependencies = {
    'mj-meridian-hero': [],
    'mj-body': ['mj-meridian-hero'],
    'mj-wrapper': ['mj-meridian-hero'],
  }

  static allowedAttributes = {
    'image-src': 'string',
    href: 'string',
  }

  static defaultAttributes = {
    'image-src': 'images/hero-banner-img.png',
    href: '#',
  }

  componentHeadStyle = () => {
    const image = this.getAttribute('image-src')

    return `
      .meridian-hero-image > table,
      .meridian-hero-image > table > tbody > tr,
      .meridian-hero-image > table > tbody > tr > td { height:100% !important; min-height:326px !important; }
      .meridian-hero-image > table > tbody > tr > td {
        background-image:linear-gradient(90deg, #FFFFFF 0%, rgba(255,255,255,.92) 10%, rgba(255,255,255,.58) 22%, rgba(255,255,255,0) 42%), url('${image}') !important;
        background-size:cover !important;
        background-position:center center !important;
        background-repeat:no-repeat !important;
        padding:0 !important;
      }
      .meridian-hero-button a { letter-spacing:1.4px !important; }
      @media only screen and (max-width:480px) {
        .meridian-hero-copy > table > tbody > tr > td { padding:34px 26px 32px !important; }
        .meridian-hero-title div { font-size:34px !important; line-height:1.12 !important; }
        .meridian-hero-image > table,
        .meridian-hero-image > table > tbody > tr,
        .meridian-hero-image > table > tbody > tr > td { min-height:220px !important; }
        .meridian-hero-image > table > tbody > tr > td {
          height:220px !important;
          background-image:url('${image}') !important;
        }
      }
    `
  }

  render() {
    const href = this.getAttribute('href')

    return this.renderMJML(`
      <mj-section background-color="#FFFFFF" padding="0">
        <mj-column css-class="meridian-hero-copy" width="52%" vertical-align="middle" background-color="#FFFFFF" padding="36px 22px 35px 48px">
          <mj-text padding="0 0 16px" color="#C18E36" font-family="Arial, Helvetica, sans-serif" font-size="10px" font-weight="700" letter-spacing="1px" line-height="15px">
            FEATURED INSIGHT
          </mj-text>
          <mj-text css-class="meridian-hero-title" padding="0 0 14px" color="#102138" font-family="Georgia, 'Times New Roman', serif" font-size="34px" line-height="1.12">
            Q3 Planning:<br />Focus, Forecast,<br />and Follow Through
          </mj-text>
          <mj-text padding="0 0 20px" color="#24282E" font-family="Arial, Helvetica, sans-serif" font-size="12px" line-height="19px">
            As we move into Q3, the most successful teams aren&rsquo;t doing more &mdash; they&rsquo;re focusing better. Here&rsquo;s how to turn your priorities into real progress.
          </mj-text>
          <mj-button css-class="meridian-hero-button" align="left" href="${href}" background-color="#0B1C31" color="#FFFFFF" border-radius="0" padding="0" inner-padding="13px 22px" font-family="Arial, Helvetica, sans-serif" font-size="10px" font-weight="700">
            READ THE ADVISORY NOTE&nbsp; <span style="color:#C7953F;font-size:15px;">&rarr;</span>
          </mj-button>
        </mj-column>
        <mj-column css-class="meridian-hero-image" width="48%" vertical-align="middle" padding="0">
          <mj-spacer height="326px" />
        </mj-column>
      </mj-section>
    `)
  }
}

module.exports = MjMeridianHero
