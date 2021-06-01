import React, { ElementRef, forwardRef } from 'react'
import { CSS, keyframes, StitchesVariants, styled } from 'stitches.config'
import { Logo } from '../Logo'

const strokeKeyframes = keyframes({
  '0%': {
    strokeDashoffset: '2300',
  },
  '100%': {
    strokeDashoffset: '0',
  },
})
const fillKeyframes = keyframes({
  '0%': {
    fill: 'transparent',
  },
  '100%': {
    fill: 'currentColor',
  },
})
const spinKeyframes = keyframes({
  to: {
    transform: 'rotate(360deg)',
  },
})
const scaleKeyframes = keyframes({
  '0%': {
    transform: 'scale(0.5)',
  },
  '100%': {
    transform: 'scale(1)',
  },
})

const StyledSpinner = styled(Logo, {
  transformOrigin: 'center center',
  strokeDasharray: '2300',
  color: '$grey4',
  variants: {
    variant: {
      draw: {},
      spin: {},
      scale: {},
    },
    active: {
      false: {},
      true: {},
    },
  },

  compoundVariants: [
    {
      active: true,
      variant: 'draw',
      css: {
        animation: `${strokeKeyframes} 3s cubic-bezier(.24,0,.37,1) alternate infinite, ${fillKeyframes} 3s cubic-bezier(1, 0, .5, 0) alternate infinite`,
      },
    },
    {
      active: true,
      variant: 'spin',
      css: {
        animation: `${spinKeyframes} 1.5s ease infinite`,
      },
    },
    {
      active: true,
      variant: 'scale',
      css: {
        animation: `${scaleKeyframes} 1.5s cubic-bezier(0.190, 1.000, 0.220, 1.000) infinite alternate both;`,
      },
    },
  ],
  defaultVariants: {
    variant: 'draw',
    active: true,
  },
})

type SpinnerCSSProp = { css?: CSS }
type SpinnerVariants = StitchesVariants<typeof StyledSpinner>
type SpinnerOwnProps = SpinnerCSSProp & SpinnerVariants

/**
 * Spinner component
 */
export const Spinner = forwardRef<
  ElementRef<typeof StyledSpinner>,
  SpinnerOwnProps
>(({ ...props }, ref) => <StyledSpinner ref={ref} {...props} />)
Spinner.toString = () => `.${StyledSpinner.className}`
