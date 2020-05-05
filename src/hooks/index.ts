// Re exporting
export { useWidth } from './useWidth'
export { createStyles, useTheme } from '@material-ui/styles'
import { Theme as CommittedTheme } from '../theme'
import {
  Styles,
  WithStylesOptions,
  ClassNameMap,
} from '@material-ui/styles/withStyles'
import { makeStyles as MaterialMakeStyles } from '@material-ui/styles'

/**
 * `makeStyles` where the passed `styles` do depend on props
 */
export function makeStyles<
  Theme = CommittedTheme,
  Props extends {} = {},
  ClassKey extends string = string
>(
  styles: Styles<Theme, Props, ClassKey>,
  options?: Omit<WithStylesOptions<Theme>, 'withTheme'>
): (props: Props) => ClassNameMap<ClassKey>

/**
 * `makeStyles` where the passed `styles` do not depend on props
 */
export function makeStyles<
  Theme = CommittedTheme,
  ClassKey extends string = string
>(
  style: Styles<Theme, {}, ClassKey>,
  options?: Omit<WithStylesOptions<Theme>, 'withTheme'>
): (props?: any) => ClassNameMap<ClassKey> {
  return MaterialMakeStyles<Theme, {}, ClassKey>(style, options)
}
