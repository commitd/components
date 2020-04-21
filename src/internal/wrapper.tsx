import React from 'react'
import {
  compose,
  display,
  spacing,
  flexbox,
  sizing,
  DisplayProps,
  SpacingProps,
  FlexboxProps,
  SizingProps,
} from '@material-ui/system'
import { styled } from '@material-ui/styles'
import { getDisplayName } from './util'
import { griditem, GriditemProps } from './griditem'
import { omit, keep } from '../util/transform'
import deepmerge from 'deepmerge'

export type WithWrapperProps = SpacingProps &
  FlexboxProps &
  SizingProps &
  DisplayProps &
  GriditemProps

const keys: Array<keyof WithWrapperProps> = [
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

const Wrapper = styled('div')(
  compose(display, spacing, flexbox, sizing, griditem)
)

export const withWrapper = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
  overrides?: Partial<P>
) =>
  class WithWrapper extends React.Component<P & WithWrapperProps> {
    displayName = `WithWrapper(${getDisplayName(WrappedComponent)})`

    render() {
      const passThroughProps = deepmerge<P>(
        omit(this.props, keys),
        overrides || {}
      )
      const wrapperProps = keep(this.props, keys)

      return (
        <Wrapper {...wrapperProps}>
          <WrappedComponent {...passThroughProps} />
        </Wrapper>
      )
    }
  }
