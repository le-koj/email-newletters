import { BodyComponent } from 'mjml-core'

export default class MjAstravanceInfo extends BodyComponent {
  static dependencies = {
    'mj-astravance-info': [],
    'mj-body': ['mj-astravance-info'],
    'mj-wrapper': ['mj-astravance-info'],
  }

  static allowedAttributes = {
    'background-color': 'color',
    'highlights-background-color': 'color',
    'footer-background-color': 'color',
    'title-color': 'color',
    'text-color': 'color',
    'link-color': 'color',
    'divider-color': 'color',
    'divider-width': 'unit(px)',
    'column-width': 'unit(px,%)',
    'highlights-padding': 'unit(px){1,4}',
    'column-padding': 'unit(px){1,4}',
    'footer-padding': 'unit(px){1,4}',
    'mobile-highlights-padding': 'unit(px){1,4}',
    'mobile-column-padding': 'unit(px){1,4}',
    'mobile-footer-padding': 'unit(px){1,4}',
    'title-font-size': 'unit(px)',
    'body-font-size': 'unit(px)',
    'link-font-size': 'unit(px)',
    'footer-font-size': 'unit(px)',
    'col1-title': 'string',
    'col1-body': 'string',
    'col1-item-1': 'string',
    'col1-item-2': 'string',
    'col1-item-3': 'string',
    'col1-link-text': 'string',
    'col1-link-href': 'string',
    'col2-title': 'string',
    'col2-body': 'string',
    'col2-item-1': 'string',
    'col2-item-2': 'string',
    'col2-item-3': 'string',
    'col2-link-text': 'string',
    'col2-link-href': 'string',
    'col3-title': 'string',
    'col3-body': 'string',
    'col3-item-1': 'string',
    'col3-item-2': 'string',
    'col3-item-3': 'string',
    'col3-link-text': 'string',
    'col3-link-href': 'string',
    'company-name': 'string',
    'address-line-1': 'string',
    'address-line-2': 'string',
    phone: 'string',
    email: 'string',
    'email-href': 'string',
    website: 'string',
    'website-href': 'string',
    padding: 'unit(px){1,4}',
    'wrapper-padding': 'unit(px){1,4}',
  }

  constructor(initialDatas = {}) {
    super(initialDatas)
    this.cssId = Math.floor(Math.random() * 10000) + 1
  }

  columnConfig() {
    return [1, 2, 3].map((index) => ({
      index,
      title: this.getAttribute(`col${index}-title`),
      body: this.getAttribute(`col${index}-body`),
      items: [
        this.getAttribute(`col${index}-item-1`),
        this.getAttribute(`col${index}-item-2`),
        this.getAttribute(`col${index}-item-3`),
      ],
      linkText: this.getAttribute(`col${index}-link-text`),
      linkHref: this.getAttribute(`col${index}-link-href`),
    }))
  }

  componentHeadStyle = () => {
    const dividerColor = this.getAttribute('divider-color')
    const dividerWidth = this.getAttribute('divider-width')
    const highlightsBg = this.getAttribute('highlights-background-color')
    const footerBg = this.getAttribute('footer-background-color')
    const highlightsPadding = this.getAttribute('highlights-padding')
    const columnPadding = this.getAttribute('column-padding')
    const footerPadding = this.getAttribute('footer-padding')
    const mobileHighlightsPadding = this.getAttribute('mobile-highlights-padding')
    const mobileColumnPadding = this.getAttribute('mobile-column-padding')
    const mobileFooterPadding = this.getAttribute('mobile-footer-padding')

    return `
      div.astravance-info-highlights-${this.cssId} > table > tbody > tr > td {
        background-color: ${highlightsBg} !important;
        padding: ${highlightsPadding} !important;
      }
      div.astravance-info-col-${this.cssId}-1 > table > tbody > tr > td,
      div.astravance-info-col-${this.cssId}-2 > table > tbody > tr > td,
      div.astravance-info-col-${this.cssId}-3 > table > tbody > tr > td {
        padding: ${columnPadding} !important;
      }
      div.astravance-info-col-${this.cssId}-2 > table > tbody > tr > td,
      div.astravance-info-col-${this.cssId}-3 > table > tbody > tr > td {
        border-left: ${dividerWidth} solid ${dividerColor} !important;
      }
      div.astravance-info-footer-${this.cssId} > table > tbody > tr > td {
        background-color: ${footerBg} !important;
        padding: ${footerPadding} !important;
      }
      .astravance-info-title div,
      .astravance-info-body div,
      .astravance-info-list div,
      .astravance-info-link a,
      .astravance-info-footer-text div,
      .astravance-info-footer-contact a {
        font-family: Helvetica, Arial, sans-serif !important;
      }
      @media only screen and (max-width:480px) {
        div.astravance-info-highlights-${this.cssId} > table > tbody > tr > td {
          padding: ${mobileHighlightsPadding} !important;
        }
        div.astravance-info-col-${this.cssId}-1,
        div.astravance-info-col-${this.cssId}-2,
        div.astravance-info-col-${this.cssId}-3 {
          width: 100% !important;
          max-width: 100% !important;
        }
        div.astravance-info-col-${this.cssId}-1 > table > tbody > tr > td,
        div.astravance-info-col-${this.cssId}-2 > table > tbody > tr > td,
        div.astravance-info-col-${this.cssId}-3 > table > tbody > tr > td {
          padding: ${mobileColumnPadding} !important;
          border-left: none !important;
        }
        div.astravance-info-col-${this.cssId}-2 > table > tbody > tr > td,
        div.astravance-info-col-${this.cssId}-3 > table > tbody > tr > td {
          border-top: ${dividerWidth} solid ${dividerColor} !important;
        }
        div.astravance-info-footer-${this.cssId} > table > tbody > tr > td {
          padding: ${mobileFooterPadding} !important;
        }
        .astravance-info-title div {
          font-size: 15px !important;
        }
      }
    `
  }

  static defaultAttributes = {
    'background-color': '#FFFFFF',
    'highlights-background-color': '#EFEFEF',
    'footer-background-color': '#FFFFFF',
    'title-color': '#222222',
    'text-color': '#222222',
    'link-color': '#222222',
    'divider-color': '#CCCCCC',
    'divider-width': '1px',
    'column-width': '33.33%',
    'highlights-padding': '32px 0',
    'column-padding': '0 24px',
    'footer-padding': '28px 32px',
    'mobile-highlights-padding': '24px 0',
    'mobile-column-padding': '0 20px 24px',
    'mobile-footer-padding': '24px 20px',
    'title-font-size': '16px',
    'body-font-size': '13px',
    'link-font-size': '13px',
    'footer-font-size': '13px',
    'col1-title': 'Program Highlights',
    'col1-body':
      'A roundup of key milestones across our space, defense, and advanced air mobility programs.',
    'col1-item-1': 'Lunar Pathfinder progress',
    'col1-item-2': 'Tactical ISR system update',
    'col1-item-3': 'eVTOL certification steps',
    'col1-link-text': 'View highlights',
    'col1-link-href': '#',
    'col2-title': 'Product of the Month',
    'col2-body': 'AVION-X Edge Module\u2014compact, adaptable, mission-ready.',
    'col2-item-1': 'High-performance computing',
    'col2-item-2': 'Secure open architecture',
    'col2-item-3': 'Rapid integration',
    'col2-link-text': 'Learn more',
    'col2-link-href': '#',
    'col3-title': 'Events & Briefings',
    'col3-body': 'Upcoming industry events, webinars, and partner briefings.',
    'col3-item-1': 'Paris Air Show \u2013 June 17\u201323',
    'col3-item-2': 'Investor Briefing \u2013 June 25',
    'col3-item-3': 'Tech Webinar \u2013 July 2',
    'col3-link-text': 'See all events',
    'col3-link-href': '#',
    'company-name': 'AstraVance Aerospace',
    'address-line-1': '100 Horizon Way, Suite 400',
    'address-line-2': 'Longview, TX 75607, USA',
    phone: 'Phone: +1 903 555 0182',
    email: 'info@astravance.com',
    'email-href': 'mailto:info@astravance.com',
    website: 'www.astravance.com',
    'website-href': '#',
    padding: '0',
    'wrapper-padding': '0',
  }

  renderBulletList(items) {
    const textColor = this.getAttribute('text-color')
    const bodySize = this.getAttribute('body-font-size')

    const rows = items
      .map(
        (item) => `
          <tr>
            <td valign="top" style="padding:0 8px 8px 0;color:${textColor};font-size:${bodySize};line-height:1.5;font-family:Helvetica,Arial,sans-serif;">&bull;</td>
            <td valign="top" style="padding:0 0 8px 0;color:${textColor};font-size:${bodySize};line-height:1.5;font-family:Helvetica,Arial,sans-serif;">${item}</td>
          </tr>
        `,
      )
      .join('')

    return `
      <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" class="astravance-info-list">
        ${rows}
      </table>
    `
  }

  renderColumnBlock(column) {
    const titleColor = this.getAttribute('title-color')
    const textColor = this.getAttribute('text-color')
    const linkColor = this.getAttribute('link-color')
    const titleSize = this.getAttribute('title-font-size')
    const bodySize = this.getAttribute('body-font-size')
    const linkSize = this.getAttribute('link-font-size')

    return `
      <div class="astravance-info-title" style="margin:0 0 12px 0;">
        <div style="font-family:Helvetica,Arial,sans-serif;font-size:${titleSize};font-weight:700;line-height:1.3;color:${titleColor};">
          ${column.title}
        </div>
      </div>
      <div class="astravance-info-body" style="margin:0 0 14px 0;">
        <div style="font-family:Helvetica,Arial,sans-serif;font-size:${bodySize};font-weight:400;line-height:1.55;color:${textColor};">
          ${column.body}
        </div>
      </div>
      <div style="margin:0 0 16px 0;">
        ${this.renderBulletList(column.items)}
      </div>
      <div class="astravance-info-link">
        <a href="${column.linkHref}" style="color:${linkColor};text-decoration:none;font-size:${linkSize};font-weight:700;font-family:Helvetica,Arial,sans-serif;">
          &rarr; ${column.linkText}
        </a>
      </div>
    `
  }

  renderFooter() {
    const textColor = this.getAttribute('text-color')
    const footerSize = this.getAttribute('footer-font-size')
    const email = this.getAttribute('email')
    const emailHref = this.getAttribute('email-href')
    const website = this.getAttribute('website')
    const websiteHref = this.getAttribute('website-href')

    return `
      <div class="astravance-info-footer-text" style="margin:0 0 8px 0;">
        <div style="font-family:Helvetica,Arial,sans-serif;font-size:${footerSize};font-weight:400;line-height:1.5;color:${textColor};">
          ${this.getAttribute('company-name')}
        </div>
      </div>
      <div class="astravance-info-footer-text" style="margin:0 0 8px 0;">
        <div style="font-family:Helvetica,Arial,sans-serif;font-size:${footerSize};font-weight:400;line-height:1.5;color:${textColor};">
          ${this.getAttribute('address-line-1')}<br />
          ${this.getAttribute('address-line-2')}
        </div>
      </div>
      <div class="astravance-info-footer-contact">
        <div style="font-family:Helvetica,Arial,sans-serif;font-size:${footerSize};font-weight:400;line-height:1.5;color:${textColor};">
          ${this.getAttribute('phone')} |
          <a href="${emailHref}" style="color:${textColor};text-decoration:none;">${email}</a> |
          <a href="${websiteHref}" style="color:${textColor};text-decoration:none;">${website}</a>
        </div>
      </div>
    `
  }

  render() {
    const bg = this.getAttribute('background-color')
    const highlightsBg = this.getAttribute('highlights-background-color')
    const footerBg = this.getAttribute('footer-background-color')
    const columnWidth = this.getAttribute('column-width')

    const wrapperAttrs = this.htmlAttributes({
      'background-color': bg,
      padding: this.getAttribute('wrapper-padding'),
      'css-class': 'astravance-info-wrapper',
    })

    const highlightsSectionAttrs = this.htmlAttributes({
      'background-color': highlightsBg,
      padding: this.getAttribute('padding'),
      'css-class': `astravance-info-highlights astravance-info-highlights-${this.cssId}`,
    })

    const footerSectionAttrs = this.htmlAttributes({
      'background-color': footerBg,
      padding: '0',
      'css-class': `astravance-info-footer astravance-info-footer-${this.cssId}`,
    })

    const columns = this.columnConfig()
      .map((column) => {
        const columnAttrs = this.htmlAttributes({
          width: columnWidth,
          'vertical-align': 'top',
          padding: '0',
          'css-class': `astravance-info-col astravance-info-col-${this.cssId}-${column.index}`,
        })

        return `
          <mj-column ${columnAttrs}>
            <mj-text padding="0" align="left">
              ${this.renderColumnBlock(column)}
            </mj-text>
          </mj-column>
        `
      })
      .join('')

    return this.renderMJML(`
      <mj-wrapper ${wrapperAttrs}>
        <mj-section ${highlightsSectionAttrs}>
          ${columns}
        </mj-section>
        <mj-section ${footerSectionAttrs}>
          <mj-column>
            <mj-text padding="0" align="left">
              ${this.renderFooter()}
            </mj-text>
          </mj-column>
        </mj-section>
      </mj-wrapper>
    `)
  }
}
