import { cx } from '@committed/ss/css'
import { styled } from '@committed/ss/jsx'
import { ComponentProps } from 'react'
import { CComponent, component, forwardRefExtend } from '../../utils'

const DEFAULT_TAG = 'svg' as const
export const SVG_CLASS = 'c-svg'

const StyledSvg = styled(component('svg', SVG_CLASS), {
  base: {
    // Reset
    boxSizing: 'border-box',
    //
    display: 'inline-block',
    flexShrink: 0,
    userSelect: 'none',
    size: '24px',
  },
})

type SvgProps = {
  /** Add a title to the svg */
  title?: string
  /** Add the given svg path  */
  path?: string
  /** Set the size of the svg  */
  size?: ComponentProps<typeof StyledSvg>['size']
  /** Set the color of the svg used for fill and stroke */
  color?: ComponentProps<typeof StyledSvg>['color']
  /** set the fill color */
  fill?: ComponentProps<typeof StyledSvg>['fill']
  /** set the stroke color */
  stroke?: ComponentProps<typeof StyledSvg>['stroke']
}

/**
 * Svg is the base component for wrapping svg icon paths.
 */
export const Svg = forwardRefExtend<typeof StyledSvg, SvgProps>(
  (
    {
      title,
      path,
      children,
      fill = 'currentColor',
      color = 'inherit',
      className,
      ...props
    },
    forwardedRef,
  ) => (
    <StyledSvg
      className={cx(SVG_CLASS, className)}
      focusable="false"
      viewBox="0 0 24 24"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
      color={color}
      {...props}
      ref={forwardedRef}
    >
      {title ? <title>{title}</title> : null}
      {path ? <path d={path} /> : null}
      {children}
    </StyledSvg>
  ),
) as CComponent<'svg', SvgProps>
