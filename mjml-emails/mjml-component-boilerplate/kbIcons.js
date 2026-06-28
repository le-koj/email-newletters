const svgDataUri = (svg) => `data:image/svg+xml,${encodeURIComponent(svg)}`

export const KB_CHECK_ICON = svgDataUri(`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40">
    <circle cx="20" cy="20" r="20" fill="#258fd2"/>
    <path d="M12 20.5l5.5 5.5L28 15.5" fill="none" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`)

export const KB_FINANCING_ICON = svgDataUri(`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48">
    <circle cx="24" cy="24" r="24" fill="#258fd2"/>
    <path d="M14 22h20v2H14z" fill="#ffffff"/>
    <path d="M22 14v20h2V14z" fill="#ffffff"/>
    <path d="M16 30l4-8h8l4 8" fill="none" stroke="#ffffff" stroke-width="2" stroke-linejoin="round"/>
    <rect x="18" y="18" width="12" height="10" rx="1" fill="none" stroke="#ffffff" stroke-width="2"/>
  </svg>
`)
