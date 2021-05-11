import React, { SVGAttributes, forwardRef, ReactNode } from 'react'
import { styled, config } from 'stitches.config'

export interface SvgIconProps extends SVGAttributes<SVGElement> {
  color?: `$${
    | keyof typeof config['theme']['colors']
    | (string & Record<string, unknown>)}`
  title?: string
  children?: ReactNode
}

const Svg = styled('svg', {
  // Reset
  boxSizing: 'border-box',
  //
  display: 'inline-block',
  flexShrink: 0,
  userSelect: 'none',
  fill: 'currentColor',
})

/**
 * SvgIcon is the base component for wrapping svg icon paths.
 */
export const SvgIcon = forwardRef<SVGSVGElement, SvgIconProps>(
  ({ color = 'inherit', title, children, ...props }, ref) => (
    <Svg
      css={{ color }}
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
    </Svg>
  )
)
SvgIcon.displayName = 'SvgIcon'
