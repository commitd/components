import React from 'react'
import { ReactComponent as LogoSvg } from './commit.svg'
import { styled } from '@material-ui/styles'
import { style, compose } from '@material-ui/system'
import { fractionToPercent } from '../../util'
import { Theme } from '../../theme'

export interface LogoProps extends React.HTMLAttributes<SVGElement> {
  /**
   * Adjust the size in px of the loader, or % if <= 1.
   * Supply an array for responsive adjustment.
   *
   * @default 256
   */
  size?: number | number[]
}

const width = style<'size', Theme>({
  prop: 'size',
  cssProperty: 'width',
  transform: fractionToPercent
})

const height = style<'size', Theme>({
  prop: 'size',
  cssProperty: 'height',
  transform: fractionToPercent
})

export const Logo: React.ComponentType<LogoProps> = styled<
  React.ComponentType<LogoProps>
>(LogoSvg)(
  compose(
    width,
    height,
    () => ({
      display: 'block',
      margin: 'auto'
    })
  )
)
Logo.defaultProps = {
  size: 256
}
