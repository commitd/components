import React from 'react'
import { ReactComponent as LogoSvg } from './commit.svg'
import { styled } from '@material-ui/styles'
import { style, compose } from '@material-ui/system'
import { fractionToPercent } from '../../util'

export interface LogoProps extends React.HTMLAttributes<SVGElement> {
  /**
   * Adjust the size in px of the loader, or % if <= 1.
   * Supply an array for responsive adjustment.
   *
   * @default 256
   */
  size?: number | number[]
}

export const width = style({
  prop: 'size',
  cssProperty: 'width',
  transform: fractionToPercent
})

export const height = style({
  prop: 'size',
  cssProperty: 'height',
  transform: fractionToPercent
})

export const Logo = styled(LogoSvg)(
  compose(
    width,
    height,
    () => ({
      display: 'block',
      margin: 'auto'
    })
  )
)
Logo.displayName = 'Logo'
Logo.defaultProps = {
  size: 256
}

export default Logo
