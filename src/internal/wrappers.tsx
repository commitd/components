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

export type BoxProps = SpacingProps &
  FlexboxProps &
  SizingProps &
  DisplayProps &
  GriditemProps

export type PositioningProps = SpacingProps &
  FlexboxProps &
  DisplayProps &
  GriditemProps

// The natural typing causes typescript to error, hence the casts to force it.
export const withPositioning = <P extends object>(
  WrappedComponent: React.ElementType<P>
) =>
  (styled(WrappedComponent)(
    compose(display, spacing, flexbox, griditem)
  ) as unknown) as React.ComponentType<P & PositioningProps>

export const boxPropsKeys: Array<keyof BoxProps> = [
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
  'width',
  'maxWidth',
  'minWidth',
  'height',
  'maxHeight',
  'minHeight',
  'sizeWidth',
  'sizeHeight',
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

export const withBoxProps = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) =>
  styled((props) => {
    const rest = omit(props, boxPropsKeys) as any
    return <WrappedComponent {...rest} />
  })(
    compose(display, spacing, flexbox, sizing, griditem)
  ) as React.ComponentType<P & BoxProps>

export const withPositioningProps = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) =>
  styled((props) => {
    const rest = omit(props, boxPropsKeys) as any
    return <WrappedComponent {...rest} />
  })(compose(display, spacing, flexbox, griditem)) as React.ComponentType<
    P & PositioningProps
  >

export const withSizingProps = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) =>
  styled((props) => {
    const rest = omit(props, boxPropsKeys) as any
    return <WrappedComponent {...rest} />
  })(sizing) as React.ComponentType<P & SizingProps>
