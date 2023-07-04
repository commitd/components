import React, { ComponentProps, ElementRef, forwardRef } from 'react'
import { css, cx } from '../../../styled-system/css'
import { withClasses } from '../../utils'

const DEFAULT_TAG = 'svg'
export const SVG_CLASS = 'c-svg'

const StyledSvg = withClasses(
  'svg',
  SVG_CLASS,
  css({
    // Reset
    boxSizing: 'border-box',
    //
    display: 'inline-block',
    flexShrink: 0,
    userSelect: 'none',
    fill: 'currentColor',
    color: 'inherit',
  })
)

type SvgProps = Omit<ComponentProps<typeof DEFAULT_TAG>, 'fr'> & {
  /** Add a title to the svg */
  title?: string
  /** Add the given svg path  */
  path?: string
  /**
   * The fr attribute defines the radius of the focal point for the radial gradient.
   *
   * Forced optional due to ts bug
   */
  fr?: string
}

/**
 * Svg is the base component for wrapping svg icon paths.
 */
export const Svg = forwardRef<ElementRef<typeof DEFAULT_TAG>, SvgProps>(
  ({ title, path, children, className, ...props }, forwardedRef) => (
    <StyledSvg
      className={cx(SVG_CLASS, className)}
      focusable="false"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      ref={forwardedRef}
    >
      {title ? <title>{title}</title> : null}
      {path ? <path d={path} /> : null}
      {children}
    </StyledSvg>
  )
)
