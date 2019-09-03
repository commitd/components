import * as React from 'react'
import {
  compose,
  spacing,
  flexbox,
  sizing,
  SpacingProps,
  FlexboxProps,
  SizingProps
} from '@material-ui/system'
import { styled } from '@material-ui/styles'

export type WithWrapperProps = SpacingProps & FlexboxProps & SizingProps

const Wrapper = styled('div')(
  compose(
    spacing,
    flexbox,
    sizing
  )
)

const getDisplayName = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => WrappedComponent.displayName || WrappedComponent.name || 'Component'

export const withWrapper = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
  overrides?: Partial<P>
) =>
  class WithWraper extends React.Component<P & WithWrapperProps> {
    displayName = `WithWrapper(${getDisplayName(WrappedComponent)})`

    render() {
      const {
        m,
        mt,
        mr,
        mb,
        ml,
        mx,
        my,
        p,
        pt,
        pr,
        pb,
        pl,
        px,
        py,
        margin,
        marginTop,
        marginRight,
        marginBottom,
        marginLeft,
        marginX,
        marginY,
        padding,
        paddingTop,
        paddingRight,
        paddingBottom,
        paddingLeft,
        paddingX,
        paddingY,
        flexBasis,
        flexDirection,
        flexWrap,
        justifyContent,
        alignItems,
        alignContent,
        order,
        flex,
        flexGrow,
        flexShrink,
        alignSelf,
        justifyItems,
        justifySelf,
        width,
        maxWidth,
        minWidth,
        height,
        maxHeight,
        minHeight,
        sizeWidth,
        sizeHeight,
        ...passThroughProps
      } = this.props

      const wrapperProps = {
        margin: m || margin || undefined,
        marginTop: mt || marginTop || undefined,
        marginRight: mr || marginRight || undefined,
        marginBottom: mb || marginBottom || undefined,
        marginLeft: ml || marginLeft || undefined,
        marginX: mx || marginX || undefined,
        marginY: my || marginY || undefined,
        padding: p || padding || undefined,
        paddingTop: pt || paddingTop || undefined,
        paddingRight: pr || paddingRight || undefined,
        paddingBottom: pb || paddingBottom || undefined,
        paddingLeft: pl || paddingLeft || undefined,
        paddingX: px || paddingX || undefined,
        paddingY: py || paddingY || undefined,
        width: sizeWidth || width || undefined,
        height: height || height || undefined,
        flexBasis,
        flexDirection,
        flexWrap,
        justifyContent,
        alignItems,
        alignContent,
        order,
        flex,
        flexGrow,
        flexShrink,
        alignSelf,
        justifyItems,
        justifySelf,
        maxWidth,
        minWidth,
        maxHeight,
        minHeight
      }

      return (
        <Wrapper {...wrapperProps}>
          <WrappedComponent {...(passThroughProps as P)} {...overrides} />
        </Wrapper>
      )
    }
  }
