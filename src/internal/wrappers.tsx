import {
  compose,
  display,
  DisplayProps,
  flexbox,
  FlexboxProps,
  sizing,
  SizingProps,
  spacing,
  SpacingProps,
} from '@material-ui/system'
import React from 'react'
import { styled } from '../styles'
import { griditem, GriditemProps } from './griditem'
import { omit } from '../util/transform'

export type { SizingProps }

export type PositioningProps = SpacingProps &
  FlexboxProps &
  DisplayProps &
  GriditemProps

export type BoxProps = PositioningProps & SizingProps

// The natural typing causes typescript to error, hence the casts to force it.
export const withPositioning = <P extends object>(
  WrappedComponent: React.ElementType<P>
) =>
  (styled(WrappedComponent)(
    compose(display, spacing, flexbox, griditem)
  ) as unknown) as React.ComponentType<P & PositioningProps>

export const sizingPropsKeys: Array<keyof SizingProps> = [
  'width',
  'maxWidth',
  'minWidth',
  'height',
  'maxHeight',
  'minHeight',
  'sizeWidth',
  'sizeHeight',
  'boxSizing',
]

export const positioningPropsKeys: Array<keyof PositioningProps> = [
  'm',
  'mt',
  'mr',
  'mb',
  'ml',
  'mx',
  'my',
  'p',
  'pt',
  'pr',
  'pb',
  'pl',
  'px',
  'py',
  'margin',
  'marginTop',
  'marginRight',
  'marginBottom',
  'marginLeft',
  'marginX',
  'marginY',
  'padding',
  'paddingTop',
  'paddingRight',
  'paddingBottom',
  'paddingLeft',
  'paddingX',
  'paddingY',
  'flexBasis',
  'flexDirection',
  'flexWrap',
  'justifyContent',
  'alignItems',
  'alignContent',
  'order',
  'flex',
  'flexGrow',
  'flexShrink',
  'alignSelf',
  'justifyItems',
  'justifySelf',
  'display',
  'displayPrint',
  'overflow',
  'textOverflow',
  'visibility',
  'whiteSpace',
  'gridColumnStart',
  'gridColumnEnd',
  'gridRowStart',
  'gridRowEnd',
  'gridColumn',
  'gridRow',
  'gridArea',
  'placeSelf',
]

export const boxPropsKeys: Array<keyof BoxProps> = [
  ...positioningPropsKeys,
  ...sizingPropsKeys,
]

type WrapperType<T> = {
  <P extends object & { ref?: React.Ref<any> }>(
    Component: React.ForwardRefExoticComponent<P>
  ): React.ForwardRefExoticComponent<P & T>
  <P extends object>(
    Component: React.FunctionComponent<P>
  ): React.ForwardRefExoticComponent<P & T>
  <P extends object>(
    WrappedComponent: React.ComponentType<P>
  ): React.ComponentType<P & T>
}

export const withBoxProps: WrapperType<BoxProps> = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) =>
  styled(
    React.forwardRef<React.ComponentType<P>, P & BoxProps>(function withBox(
      props,
      ref
    ) {
      const rest = omit(props, boxPropsKeys) as any
      return <WrappedComponent {...rest} ref={ref} />
    })
  )(
    compose(display, spacing, flexbox, sizing, griditem)
  ) as React.ForwardRefExoticComponent<P & BoxProps>

export const withPositioningProps: WrapperType<PositioningProps> = <
  P extends object
>(
  WrappedComponent: React.ComponentType<P>
) =>
  styled(
    React.forwardRef<React.ComponentType<P>, P & PositioningProps>(
      function withPositioning(props, ref) {
        const rest = omit(props, positioningPropsKeys) as any
        return <WrappedComponent {...rest} ref={ref} />
      }
    )
  )(
    compose(display, spacing, flexbox, griditem)
  ) as React.ForwardRefExoticComponent<P & PositioningProps>

export const withSizingProps: WrapperType<SizingProps> = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) =>
  styled(
    React.forwardRef<React.ComponentType<P>, P & SizingProps>(
      function withSizing(props, ref) {
        const rest = omit(props, sizingPropsKeys) as any
        return <WrappedComponent {...rest} ref={ref} />
      }
    )
  )(sizing) as React.ForwardRefExoticComponent<P & SizingProps>
