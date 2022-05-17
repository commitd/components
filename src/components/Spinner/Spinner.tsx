import React, { ElementRef, forwardRef } from 'react'
import type { CSSProps, VariantProps } from '../../stitches.config'
import { keyframes, styled } from '../../stitches.config'
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
export const pulseKeyframes = keyframes({
  '0%': { opacity: 0.8 },
  '50%': { opacity: 1 },
  '100%': { opacity: 0.8 },
})

const StyledSpinner = styled(Logo, {
  transformOrigin: 'center center',
  strokeDasharray: '2300',
  color: '$grey6',
  '@dark': {
    color: '$grey2',
  },
  variants: {
    variant: {
      draw: {},
      spin: {},
      scale: {},
      pulse: {},
    },
    active: {
      false: {},
      true: {},
    },
  },

  '@reducedmotion': {
    animation: `${pulseKeyframes} 2s ease infinite`,
  },

  compoundVariants: [
    {
      active: true,
      variant: 'draw',
      css: {
        stroke: 'currentColor',
        '@motion': {
          animation: `${strokeKeyframes} 3s cubic-bezier(.24,0,.37,1) alternate infinite, ${fillKeyframes} 3s cubic-bezier(1, 0, .5, 0) alternate infinite`,
        },
        '@reducedmotion': {
          animation: `${pulseKeyframes} 2s ease infinite`,
        },
      },
    },
    {
      active: true,
      variant: 'spin',
      css: {
        '@motion': {
          animation: `${spinKeyframes} 1.5s ease infinite`,
        },
        '@reducedmotion': {
          animation: `${pulseKeyframes} 2s ease infinite`,
        },
      },
    },
    {
      active: true,
      variant: 'scale',
      css: {
        '@motion': {
          animation: `${scaleKeyframes} 1.5s cubic-bezier(0.190, 1.000, 0.220, 1.000) infinite alternate both;`,
        },
        '@reducedmotion': {
          animation: `${pulseKeyframes} 2s ease infinite`,
        },
      },
    },
    {
      active: true,
      variant: 'pulse',
      css: {
        animation: `${pulseKeyframes} 2s ease infinite`,
      },
    },
  ],
  defaultVariants: {
    variant: 'draw',
    active: true,
  },
})

type SpinnerVariants = VariantProps<typeof StyledSpinner>
type SpinnerProps = CSSProps & SpinnerVariants

/**
 * Spinner component
 */
export const Spinner = forwardRef<
  ElementRef<typeof StyledSpinner>,
  SpinnerProps
>(({ ...props }, ref) => <StyledSpinner ref={ref} {...props} />)
Spinner.toString = () => `.${StyledSpinner.className}`
