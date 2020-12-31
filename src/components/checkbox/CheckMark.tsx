import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon'
import React from 'react'
import { makeStyles } from '../../styles'
import { Theme } from '../../theme'

export type CheckMarkProps = SvgIconProps

const useStyles = makeStyles(({ palette }: Theme) => ({
  tick: {
    fill: ({ color }: SvgIconProps) => {
      let bgcolor = 'transparent'
      if (color === 'primary') {
        if (palette.type === 'dark') {
          bgcolor = palette.secondary.main
        } else {
          const primaryColor = palette.secondary.main
          const brandColor = palette.brand.main
          bgcolor =
            brandColor === primaryColor
              ? palette.primary.contrastText
              : brandColor
        }
      }
      if (color === 'secondary') {
        bgcolor = palette.getContrastText(palette.secondary.main)
      }
      return bgcolor
    },
  },
}))

export const CheckMark: React.FC<CheckMarkProps> = (props) => {
  const classes = useStyles(props)
  return (
    <SvgIcon {...props}>
      <path className={classes.tick} d="M4 6H19V18H4z"></path>
      <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
    </SvgIcon>
  )
}
