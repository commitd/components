// Re exporting
export { useWidth } from './useWidth'
export { createStyles, useTheme } from '@material-ui/styles'

import { Theme as CommittedTheme } from '../theme'
import { Styles, WithStylesOptions } from '@material-ui/styles/withStyles'
import { makeStyles as MaterialMakeStyles } from '@material-ui/styles'

export function makeStyles<
  Theme = CommittedTheme,
  Props extends {} = {},
  ClassKey extends string = string
>(
  styles: Styles<Theme, Props, ClassKey>,
  options?: Omit<WithStylesOptions<Theme>, 'withTheme'>
) {
  return MaterialMakeStyles<Theme, Props, ClassKey>(styles, options)
}
