export function isUnicodeSupported (): boolean {
  if (process.env.LISTR_FORCE_UNICODE === '1') {
    return true
  } else if (process.env.LISTR_FORCE_UNICODE === '0') {
    return false
  }
  
  if (process.platform !== 'win32') {
    return true
  }

  /* istanbul ignore next */
  return (
    Boolean(process.env.CI) ||
    Boolean(process.env.WT_SESSION) ||
    process.env.TERM_PROGRAM === 'vscode' ||
    process.env.TERM === 'xterm-256color' ||
    process.env.TERM === 'alacritty'
  )
}
