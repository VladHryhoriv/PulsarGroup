export function getVariable(variable: string, reader = String): string {
  const element = document.querySelector('body')
  if (element) {
    const style = window.getComputedStyle(element)
    return reader(style.getPropertyValue(variable).trim())
  }
  return ''
}
