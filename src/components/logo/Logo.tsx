import { ComponentType, FC } from 'react'
import { ReactComponent as LogoSvg } from './commit.svg'
import { styled } from '@material-ui/styles'
import { style, compose } from '@material-ui/system'
import { fractionToPercent } from '../../util'
import { Theme } from '../../theme'

export interface BaseLogoProps {
  /**
   * Adjust the size in px of the loader, or % if <= 1.
   * Supply an array for responsive adjustment.
   *
   * @default 256
   */
  size?: number | number[]
}

export type LogoProps = BaseLogoProps & React.HTMLAttributes<SVGElement>

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

export const Logo: ComponentType<LogoProps> = styled<ComponentType<LogoProps>>(
  LogoSvg
)(
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

// For documentation only
export const LogoDocs: FC<BaseLogoProps> = () => null
