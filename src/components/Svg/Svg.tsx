import * as Polymorphic from '@radix-ui/react-polymorphic'
import React, { forwardRef } from 'react'
import { CSS, StitchesVariants, styled } from 'stitches.config'

const DEFAULT_TAG = 'svg'

const StyledSvg = styled(DEFAULT_TAG, {
  // Reset
  boxSizing: 'border-box',
  //
  display: 'inline-block',
  flexShrink: 0,
  userSelect: 'none',
  fill: 'currentColor',
  stroke: 'currentColor',
  color: 'inherit',
})

type SvgCSSProp = { css?: CSS }
type SvgVariants = StitchesVariants<typeof StyledSvg>
type SvgOwnProps = SvgCSSProp &
  SvgVariants & {
    /** Add a title to the svg */
    title?: string
  }

type SvgComponent = Polymorphic.ForwardRefComponent<
  typeof DEFAULT_TAG,
  SvgOwnProps
>

/**
 * Svg is the base component for wrapping svg icon paths.
 */
export const Svg = forwardRef(({ title, children, ...props }, ref) => (
  <StyledSvg
    focusable="false"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    {title ? <title>{title}</title> : null}
    {children}
  </StyledSvg>
)) as SvgComponent
Svg.toString = () => `.${StyledSvg.className}`
