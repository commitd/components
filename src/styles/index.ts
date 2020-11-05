import {
  makeStyles as materialMakeStyles,
  styled as materialStyled,
  StyledComponent,
  ThemedComponentProps,
  useTheme as materialUseTheme,
  withTheme as materialWithTheme,
} from '@material-ui/styles'
import {
  ClassNameMap,
  CreateCSSProperties,
  StyledComponentProps,
  Styles,
  WithStylesOptions,
} from '@material-ui/styles/withStyles'
import { ConsistentWith, Omit, Overwrite } from '@material-ui/types'
import { Theme as CommittedTheme } from '../theme'
export { createStyles } from '@material-ui/core/styles'
export * from '@material-ui/core/styles/colorManipulator'
export {
  default as createPalette,
  Palette,
  PaletteColor,
} from '@material-ui/core/styles/createPalette'
export { useWidth } from './useWidth'
export { compose } from '@material-ui/system'

// Override material exports as required to reflect committed theme

/**
 * @internal
 */
export type ComponentCreator<Component extends React.ElementType> = <
  Theme = CommittedTheme,
  Props extends {} = React.ComponentPropsWithoutRef<Component>
>(
  styles:
    | CreateCSSProperties<Props>
    | ((props: { theme: Theme } & Props) => CreateCSSProperties<Props>),
  options?: WithStylesOptions<Theme>
) => StyledComponent<
  Omit<
    JSX.LibraryManagedAttributes<Component, React.ComponentProps<Component>>,
    'classes' | 'className'
  > &
    StyledComponentProps<'root'> &
    Overwrite<Props, { className?: string; theme?: Theme }>
>

export interface WithTheme<Theme = CommittedTheme> {
  theme: Theme
  /**
   * Deprecated. Will be removed in v5. Refs are now automatically forwarded to
   * the inner component.
   * @deprecated since version 4.0
   */
  innerRef?: React.Ref<any>
}

// eslint-disable-next-line @typescript-eslint/no-redeclare
export function styled<Component extends React.ElementType>(
  Component: Component
): ComponentCreator<Component> {
  return materialStyled(Component)
}

export function useTheme<Theme = CommittedTheme>() {
  return materialUseTheme<Theme>()
}

export function withTheme<
  C extends React.ComponentType<
    ConsistentWith<React.ComponentProps<C>, WithTheme<Theme>>
  >,
  Theme = CommittedTheme
>(
  component: C
): React.ComponentType<
  Omit<
    JSX.LibraryManagedAttributes<C, React.ComponentProps<C>>,
    keyof WithTheme<Theme>
  > &
    Partial<WithTheme<Theme>> &
    ThemedComponentProps
> {
  return materialWithTheme<Theme, C>(component)
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
