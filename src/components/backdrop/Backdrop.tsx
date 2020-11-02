import MaterialBackdrop, {
  BackdropProps as MaterialBackdropProps,
} from '@material-ui/core/Backdrop'
import { style } from '@material-ui/system'
import { ZIndex } from '@material-ui/core/styles/zIndex'
import React from 'react'
import { styled } from '../../styles'
import { Theme } from '../../theme'

const zIndex = style<'zIndex', Theme>({
  prop: 'zIndex',
  themeKey: 'zIndex',
})

export type BackdropProps = {
  /**
   * The zIndex of the backdrop using the theme.
   */
  zIndex?: keyof ZIndex
} & MaterialBackdropProps

export const Backdrop = styled<React.FC<BackdropProps>>(MaterialBackdrop)(
  zIndex
) as React.FC<BackdropProps>
