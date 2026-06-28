export const KB_BODY_FONT = 'Nunito, Arial, Helvetica Neue, Helvetica, sans-serif'
export const KB_HEADING_FONT = 'Merriweather, Georgia, serif'

export const KB_COLORS = {
  navy: '#033047',
  blue: '#258fd2',
  accent: '#00aeef',
  lightBlue: '#e8f4fc',
  text: '#44464a',
  textDark: '#131313',
  muted: '#9d9d9d',
  white: '#FFFFFF',
  grayBg: '#f5f5f5',
  border: '#d9d9d9',
}

export function kbBodyFont(fontFamily = KB_BODY_FONT) {
  return `font-family:${fontFamily};mso-generic-font-family:swiss;mso-font-alt:Arial;`
}

export function kbHeadingFont(fontFamily = KB_HEADING_FONT) {
  return `font-family:${fontFamily};mso-generic-font-family:roman;mso-font-alt:Georgia;`
}
