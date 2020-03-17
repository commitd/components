import { SimplePaletteColorOptions } from '@material-ui/core/styles'

import createPalette from '@material-ui/core/styles/createPalette'
import { PaletteColor } from '@material-ui/core/styles/createPalette'
import { Color } from '@material-ui/core'

// See https://github.com/mui-org/material-ui/blob/b527c91285bcf5a4df49da26fc2800eca8200232/packages/material-ui/src/styles/createPalette.js
export function augmentColor(
  color: SimplePaletteColorOptions | Partial<Color> | undefined,
  defaultColor: SimplePaletteColorOptions | Partial<Color>
): PaletteColor {
  const palette = createPalette({ primary: color || defaultColor })
  return palette.primary
}
