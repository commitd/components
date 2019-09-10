import * as React from 'react'
import {
  compose,
  spacing,
  flexbox,
  SpacingProps,
  FlexboxProps
} from '@material-ui/system'
import { styled } from '@material-ui/styles'
import MaterialTypography, {
  TypographyProps as MaterialTypographyProps
} from '@material-ui/core/Typography'

export type TypographyProps = MaterialTypographyProps &
  SpacingProps &
  FlexboxProps

export const Typography = styled<React.ComponentType<TypographyProps>>(
  MaterialTypography
)(
  compose(
    spacing,
    flexbox
  )
)

export default Typography as React.FC<TypographyProps>
