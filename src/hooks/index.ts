// Re exporting
export { useWidth } from './useWidth'
export { createStyles } from '@material-ui/styles'
import { Theme as CommittedTheme } from '../theme'
import {
  Styles,
  WithStylesOptions,
  ClassNameMap,
} from '@material-ui/styles/withStyles'
import {
  useTheme as materialUseTheme,
  makeStyles as materialMakeStyles,
} from '@material-ui/styles'

export function useTheme<Theme = CommittedTheme>() {
  return materialUseTheme<Theme>()
}

/**
 * `makeStyles` where the passed `styles` do not depend on props
 */
export function makeStyles<
  Theme = CommittedTheme,
  ClassKey extends string = string
>(
  style: Styles<Theme, {}, ClassKey>,
  options?: Omit<WithStylesOptions<Theme>, 'withTheme'>
): (props?: any) => ClassNameMap<ClassKey>

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
 * `makeStyles` where the passed `styles` do depend on props
 */
export function makeStyles<
  Theme = CommittedTheme,
  Props extends {} = {},
  ClassKey extends string = string
>(
  styles: Styles<Theme, Props, ClassKey>,
  options?: Omit<WithStylesOptions<Theme>, 'withTheme'>
):
  | ((props: Props) => ClassNameMap<ClassKey>)
  | ((props?: Props) => ClassNameMap<ClassKey>) {
  return materialMakeStyles<Theme, Props, ClassKey>(styles, options)
}
