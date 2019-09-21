import * as React from 'react'
import {
  compose,
  display,
  spacing,
  flexbox,
  sizing,
  DisplayProps,
  SpacingProps,
  FlexboxProps,
  SizingProps
} from '@material-ui/system'
import { styled } from '@material-ui/styles'
import { getDisplayName } from './util'
import { omit, keep } from '../../util'

export type WithWrapperProps = SpacingProps &
  FlexboxProps &
  SizingProps &
  DisplayProps

const keys = [
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
  'whiteSpace'
]

const Wrapper = styled('div')(
  compose(
    display,
    spacing,
    flexbox,
    sizing
  )
)

export const withWrapper = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
  overrides?: Partial<P>
) =>
  class WithWrapper extends React.Component<P & WithWrapperProps> {
    displayName = `WithWrapper(${getDisplayName(WrappedComponent)})`

    render() {
      const passThroughProps = omit(this.props, keys)
      const wrapperProps = keep(this.props, keys)

      return (
        <Wrapper {...wrapperProps}>
          <WrappedComponent {...(passThroughProps as P)} {...overrides} />
        </Wrapper>
      )
    }
  }
