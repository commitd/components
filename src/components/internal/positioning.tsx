import { ComponentType } from 'react'
import {
  compose,
  display,
  flexbox,
  spacing,
  DisplayProps,
  FlexboxProps,
  SpacingProps
} from '@material-ui/system'
import { styled } from '@material-ui/styles'

export type PositioningProps = SpacingProps & FlexboxProps & DisplayProps

export const withPositioning = <P extends object>(
  WrappedComponent: React.ElementType<P>
) =>
  styled(WrappedComponent)(
    compose(
      display,
      spacing,
      flexbox
    )
  ) as ComponentType<P & PositioningProps>
