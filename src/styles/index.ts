// Override material exports as required to reflect committed theme
export { useWidth } from './useWidth'
import { ConsistentWith, Omit } from '@material-ui/types'
import { Theme as CommittedTheme } from '../theme'
import {
  Styles,
  WithStylesOptions,
  ClassNameMap,
} from '@material-ui/styles/withStyles'
import {
  WithTheme,
  ThemedComponentProps,
  withTheme as materialWithTheme,
  useTheme as materialUseTheme,
  makeStyles as materialMakeStyles,
  styled as materialStyled,
} from '@material-ui/styles'
import {
  CreateCSSProperties,
  StyledComponentProps,
} from '@material-ui/styles/withStyles'

/**
 * @internal
 */
export type ComponentCreator<Component extends React.ElementType> = <
  Theme = CommittedTheme,
  Props extends {} = {}
>(
  styles:
    | CreateCSSProperties<Props>
    | ((props: { theme: Theme } & Props) => CreateCSSProperties<Props>),
  options?: WithStylesOptions<Theme>
) => React.ComponentType<
  Omit<
    JSX.LibraryManagedAttributes<Component, React.ComponentProps<Component>>,
    'classes' | 'className'
  > &
    StyledComponentProps<'root'> & { className?: string } & (Props extends {
      theme: Theme
    }
      ? Omit<Props, 'theme'> & { theme?: Theme }
      : Props)
>

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
