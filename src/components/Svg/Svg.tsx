import type * as Polymorphic from '@radix-ui/react-polymorphic'
import React, { forwardRef } from 'react'
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
type SvgOwnProps = CSSProps &
  SvgVariants & {
    /** Add a title to the svg */
    title?: string
    /** Add the given svg path  */
    path?: string
  }

type SvgComponent = Polymorphic.ForwardRefComponent<
  typeof DEFAULT_TAG,
  SvgOwnProps
>

/**
 * Svg is the base component for wrapping svg icon paths.
 */
export const Svg = forwardRef(({ title, path, children, ...props }, ref) => (
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
    {path ? <path d={path} /> : null}
    {children}
  </StyledSvg>
)) as SvgComponent
Svg.toString = () => `.${StyledSvg.className}`
