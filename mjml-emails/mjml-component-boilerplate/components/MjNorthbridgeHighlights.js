import { BodyComponent } from 'mjml-core'

const ICONS_BASE = 'resources/images/northbridge/icons'

export default class MjNorthbridgeHighlights extends BodyComponent {
  static dependencies = {
    'mj-northbridge-highlights': [],
    'mj-body': ['mj-northbridge-highlights'],
    'mj-wrapper': ['mj-northbridge-highlights'],
  }

  static allowedAttributes = {
    'background-color': 'color',
    'accent-color': 'color',
    'title-color': 'color',
    'text-color': 'color',
    'divider-color': 'color',
    'divider-width': 'unit(px)',
    'icon-bg-color': 'color',
    'icon-size': 'unit(px)',
    'icon-circle-size': 'unit(px)',
    'eyebrow-font-size': 'unit(px)',
    'title-font-size': 'unit(px)',
    'title-font-family': 'string',
    'body-font-size': 'unit(px)',
    'link-font-size': 'unit(px)',
    'column-width': 'unit(px,%)',
    padding: 'unit(px){1,4}',
    'column-padding': 'unit(px){1,4}',
    'col1-icon-src': 'string',
    'col1-eyebrow': 'string',
    'event-1': 'string',
    'event-2': 'string',
    'event-3': 'string',
    'col1-link-text': 'string',
    'col1-link-href': 'string',
    'col2-icon-src': 'string',
    'col2-eyebrow': 'string',
    'col2-title': 'string',
    'col2-body': 'string',
    'col2-link-text': 'string',
    'col2-link-href': 'string',
    'col3-icon-src': 'string',
    'col3-eyebrow': 'string',
    'col3-body': 'string',
    'col3-link-text': 'string',
    'col3-link-href': 'string',
  }

  componentHeadStyle = () => {
    const dividerColor = this.getAttribute('divider-color')
    const dividerWidth = this.getAttribute('divider-width')

    return `
    .northbridge-highlights-eyebrow div,
    .northbridge-highlights-body div,
    .northbridge-highlights-link div {
      font-family: Helvetica, Arial, sans-serif !important;
    }
    div.northbridge-highlights-col-2 > table > tbody > tr > td,
    div.northbridge-highlights-col-3 > table > tbody > tr > td {
      border-left: ${dividerWidth} solid ${dividerColor} !important;
    }
    @media only screen and (max-width:480px) {
      div.northbridge-highlights-section > table > tbody > tr > td {
        padding: 32px 0 !important;
      }
      div.northbridge-highlights-col {
        width: 100% !important;
        max-width: 100% !important;
      }
      div.northbridge-highlights-col > table > tbody > tr > td {
        padding: 0 20px 28px !important;
        border-left: none !important;
      }
      div.northbridge-highlights-col-2 > table > tbody > tr > td,
      div.northbridge-highlights-col-3 > table > tbody > tr > td {
        padding-top: 28px !important;
        border-left: none !important;
        border-top: ${dividerWidth} solid ${dividerColor} !important;
        margin-top: 28px !important;
      }
      .northbridge-highlights-eyebrow span {
        font-size: 16px !important;
      }
    }
  `
  }

  static defaultAttributes = {
    'background-color': '#FFFFFF',
    'accent-color': '#1D4ED8',
    'title-color': '#1A1A1A',
    'text-color': '#3A3A3A',
    'divider-color': '#E0E0E0',
    'divider-width': '1px',
    'icon-bg-color': '#EDF1FA',
    'icon-size': '20px',
    'icon-circle-size': '38px',
    'eyebrow-font-size': '15px',
    'title-font-size': '19px',
    'title-font-family': "Georgia, 'Times New Roman', serif",
    'body-font-size': '14px',
    'link-font-size': '14px',
    'column-width': '33.33%',
    padding: '40px 0',
    'column-padding': '0 20px',
    'col1-icon-src': `${ICONS_BASE}/calendar-removebg.png`,
    'col1-eyebrow': 'Events & Deadlines',
    'event-1': '21 May \u2013 ATO Webcast: GST on Digital Services',
    'event-2': '30 May \u2013 EOFY Super Contribution Deadline',
    'event-3': '2 Jun \u2013 Privacy Act Reforms Consultation Closes',
    'col1-link-text': 'See all events',
    'col1-link-href': '#',
    'col2-icon-src': `${ICONS_BASE}/doc-removebg.png`,
    'col2-eyebrow': 'Resource of the Week',
    'col2-title': 'Checklist: Director Duties Under the Spotlight',
    'col2-body':
      'A practical checklist for assessing exposure and strengthening governance practices.',
    'col2-link-text': 'Download checklist',
    'col2-link-href': '#',
    'col3-icon-src': `${ICONS_BASE}/team-removebg.png`,
    'col3-eyebrow': 'Team Notes',
    'col3-body':
      'Welcome to Senior Associate Jordan Lee, who joins our Corporate Advisory team.',
    'col3-link-text': 'Meet the team',
    'col3-link-href': '#',
  }

  renderHeader(iconSrc, eyebrow) {
    const accent = this.getAttribute('accent-color')
    const iconBg = this.getAttribute('icon-bg-color')
    const iconSize = parseInt(this.getAttribute('icon-size'), 10) || 20
    const circleSize = this.getAttribute('icon-circle-size')
    const eyebrowSize = this.getAttribute('eyebrow-font-size')

    return `
      <table role="presentation" border="0" cellpadding="0" cellspacing="0">
        <tr>
          <td valign="middle" width="${circleSize}">
            <table role="presentation" border="0" cellpadding="0" cellspacing="0">
              <tr>
                <td
                  align="center"
                  valign="middle"
                  width="${circleSize}"
                  height="${circleSize}"
                  style="width:${circleSize};height:${circleSize};background-color:${iconBg};border-radius:50%;"
                >
                  <img
                    src="${iconSrc}"
                    width="${iconSize}"
                    alt=""
                    style="display:block;border:0;outline:none;"
                  />
                </td>
              </tr>
            </table>
          </td>
          <td valign="middle" style="padding-left:10px;">
            <span style="font-family:Helvetica,Arial,sans-serif;font-size:${eyebrowSize};font-weight:700;line-height:1.3;letter-spacing:0.6px;text-transform:uppercase;color:${accent};">
              ${eyebrow}
            </span>
          </td>
        </tr>
      </table>
    `
  }

  renderLink(text, href) {
    const accent = this.getAttribute('accent-color')
    const size = this.getAttribute('link-font-size')

    return `<a href="${href}" style="color:${accent};text-decoration:none;font-size:${size};font-weight:600;font-family:Helvetica,Arial,sans-serif;">${text}&nbsp;&rarr;</a>`
  }

  renderEventsList() {
    const textColor = this.getAttribute('text-color')
    const size = this.getAttribute('body-font-size')
    const accent = this.getAttribute('accent-color')
    const items = [
      this.getAttribute('event-1'),
      this.getAttribute('event-2'),
      this.getAttribute('event-3'),
    ]

    const rows = items
      .map(
        (item) => `
          <tr>
            <td valign="top" style="padding:0 8px 10px 0;color:${accent};font-size:${size};line-height:1.5;font-family:Helvetica,Arial,sans-serif;">&bull;</td>
            <td valign="top" style="padding:0 0 10px 0;color:${textColor};font-size:${size};line-height:1.5;font-family:Helvetica,Arial,sans-serif;">${item}</td>
          </tr>
        `,
      )
      .join('')

    return `
      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
        ${rows}
      </table>
    `
  }

  renderColumn1() {
    return `
      <mj-text padding="0 0 14px 0" css-class="northbridge-highlights-eyebrow">
        ${this.renderHeader(
          this.getAttribute('col1-icon-src'),
          this.getAttribute('col1-eyebrow'),
        )}
      </mj-text>
      <mj-text padding="0 0 16px 0" css-class="northbridge-highlights-body">
        ${this.renderEventsList()}
      </mj-text>
      <mj-text padding="0" css-class="northbridge-highlights-link">
        ${this.renderLink(
          this.getAttribute('col1-link-text'),
          this.getAttribute('col1-link-href'),
        )}
      </mj-text>
    `
  }

  renderColumn2() {
    const titleColor = this.getAttribute('title-color')
    const titleSize = this.getAttribute('title-font-size')
    const titleFont = this.getAttribute('title-font-family')
    const textColor = this.getAttribute('text-color')
    const bodySize = this.getAttribute('body-font-size')

    return `
      <mj-text padding="0 0 14px 0" css-class="northbridge-highlights-eyebrow">
        ${this.renderHeader(
          this.getAttribute('col2-icon-src'),
          this.getAttribute('col2-eyebrow'),
        )}
      </mj-text>
      <mj-text padding="0 0 10px 0">
        <div style="font-family:${titleFont};font-size:${titleSize};line-height:1.3;color:${titleColor};">
          ${this.getAttribute('col2-title')}
        </div>
      </mj-text>
      <mj-text padding="0 0 16px 0" css-class="northbridge-highlights-body">
        <div style="font-family:Helvetica,Arial,sans-serif;font-size:${bodySize};line-height:1.55;color:${textColor};">
          ${this.getAttribute('col2-body')}
        </div>
      </mj-text>
      <mj-text padding="0" css-class="northbridge-highlights-link">
        ${this.renderLink(
          this.getAttribute('col2-link-text'),
          this.getAttribute('col2-link-href'),
        )}
      </mj-text>
    `
  }

  renderColumn3() {
    const textColor = this.getAttribute('text-color')
    const bodySize = this.getAttribute('body-font-size')

    return `
      <mj-text padding="0 0 14px 0" css-class="northbridge-highlights-eyebrow">
        ${this.renderHeader(
          this.getAttribute('col3-icon-src'),
          this.getAttribute('col3-eyebrow'),
        )}
      </mj-text>
      <mj-text padding="0 0 16px 0" css-class="northbridge-highlights-body">
        <div style="font-family:Helvetica,Arial,sans-serif;font-size:${bodySize};line-height:1.55;color:${textColor};">
          ${this.getAttribute('col3-body')}
        </div>
      </mj-text>
      <mj-text padding="0" css-class="northbridge-highlights-link">
        ${this.renderLink(
          this.getAttribute('col3-link-text'),
          this.getAttribute('col3-link-href'),
        )}
      </mj-text>
    `
  }

  render() {
    const bg = this.getAttribute('background-color')
    const columnWidth = this.getAttribute('column-width')
    const columnPadding = this.getAttribute('column-padding')

    const wrapperAttrs = this.htmlAttributes({
      'background-color': bg,
    })

    const sectionAttrs = this.htmlAttributes({
      'background-color': bg,
      padding: this.getAttribute('padding'),
      'css-class': 'northbridge-highlights-section',
    })

    const columnConfig = [
      { index: 1, render: this.renderColumn1() },
      { index: 2, render: this.renderColumn2() },
      { index: 3, render: this.renderColumn3() },
    ]

    const columns = columnConfig
      .map(
        ({ index, render }) => `
          <mj-column
            ${this.htmlAttributes({
              width: columnWidth,
              'vertical-align': 'top',
              padding: columnPadding,
              'css-class': `northbridge-highlights-col northbridge-highlights-col-${index}`,
            })}
          >
            ${render}
          </mj-column>
        `,
      )
      .join('')

    return this.renderMJML(`
      <mj-wrapper ${wrapperAttrs}>
        <mj-section ${sectionAttrs}>
          ${columns}
        </mj-section>
      </mj-wrapper>
    `)
  }
}
