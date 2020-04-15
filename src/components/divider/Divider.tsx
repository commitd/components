import { ComponentType } from 'react'
import MaterialDivider, {
  DividerProps as MaterialDividerProps,
} from '@material-ui/core/Divider'
import { styled } from '@material-ui/styles'
import { style, SpacingProps, spacing, compose } from '@material-ui/system'
import { Theme } from '../../theme'

export type DividerProps = MaterialDividerProps &
  SpacingProps & {
    /**
     * The color of the divider from the theme's palette
     */
    color?: string
  }

const color = style<'color', Theme>({
  prop: 'color',
  cssProperty: 'backgroundColor',
  themeKey: 'palette',
})

export const Divider: ComponentType<DividerProps> = styled(MaterialDivider)(
  compose(color, spacing)
)
