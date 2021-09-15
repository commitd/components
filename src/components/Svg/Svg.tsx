import React, { ComponentProps, ElementRef, forwardRef } from 'react'
import type { CSSProps, VariantProps } from '../../stitches.config'
import { styled } from '../../stitches.config'

const DEFAULT_TAG = 'svg'

const StyledSvg = styled(DEFAULT_TAG, {
  // Reset
  boxSizing: 'border-box',
  //
  display: 'inline-block',
  flexShrink: 0,
  userSelect: 'none',
  fill: 'currentColor',
  color: 'inherit',
})

type SvgVariants = VariantProps<typeof StyledSvg>
type SvgProps = ComponentProps<typeof DEFAULT_TAG> &
  CSSProps &
  SvgVariants & {
    /** Add a title to the svg */
    title?: string
    /** Add the given svg path  */
    path?: string
  }

/**
 * Svg is the base component for wrapping svg icon paths.
 */
export const Svg = forwardRef<ElementRef<typeof DEFAULT_TAG>, SvgProps>(
  ({ title, path, children, ...props }, forwardedRef) => (
    <StyledSvg
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
Svg.displayName = 'Svg'
Svg.toString = () => `.${StyledSvg.className}`
