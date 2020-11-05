import { SimplePaletteColorOptions } from '@material-ui/core/styles'

import createPalette from '@material-ui/core/styles/createPalette'
import { PaletteColor } from '@material-ui/core/styles/createPalette'
import { Color } from '@material-ui/core'

/**
 * createMuiPalette() "augments" inputted colors (that may be in several forms) to make them conform to {main: #xxxx, light:#xxxx ,...etc}
 * manually augment committed custom theme colors that createMuiPalette is not aware of
 * See https://github.com/mui-org/material-ui/blob/b527c91285bcf5a4df49da26fc2800eca8200232/packages/material-ui/src/styles/createPalette.js
 */
export function augmentColor(
  color: SimplePaletteColorOptions | Partial<Color> | undefined
): PaletteColor {
  const palette = createPalette({ primary: color })
  return palette.primary
}
