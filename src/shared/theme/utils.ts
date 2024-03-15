import { colord } from 'colord'

export function camelCaseToDash(str: string): string {
  return str.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase()
}

export const generateCSSNameVariable = (name: string, color: string): string =>
  `--color-${name}: ${color}`

export const setColorDarken = (color: string): string =>
  colord(color).darken(0.05).toHex()

export const setColorLighten = (color: string): string =>
  colord(color).lighten(0.05).toHex()

export const generateCSSVariables = (
  objectColors: Record<string, string>
): string =>
  Object.keys(objectColors).reduce(
    (acc, colorKey) =>
      `${acc}\n${generateCSSNameVariable(
        camelCaseToDash(colorKey),
        objectColors[colorKey]
      )};`,
    ''
  )

export const generateCSSOpacitiyVariables = (
  color: string,
  name: string,
  count = 10
): string =>
  [...new Array(count)].reduce(
    (acc, _, index) =>
      `${acc}\n${generateCSSNameVariable(
        `opac-${name}-${index + 1}`,
        colord(color)
          .alpha((index + 1) * 0.05)
          .toRgbString()
      )};`,
    ''
  )
