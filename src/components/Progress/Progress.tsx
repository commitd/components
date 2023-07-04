import { Indicator, Root } from '@radix-ui/react-progress'
import React, { ComponentProps, ElementRef, forwardRef } from 'react'
import type { AsProps, CSSProps, VariantProps } from '../../stitches.config'
import { keyframes, styled } from '../../stitches.config'

const indeterminateProgress = keyframes({
  '0%': {
    transform: 'translateX(-100%)',
    transformOrigin: 'left',
  },
  '50%': {
    transform: 'translateX(950%)',
    transformOrigin: 'left',
  },
  '100%': {
    transform: 'translateX(2000%)',
    transformOrigin: 'left',
  },
})

const StyledProgress = styled(Root, {
  $$main: '$colors$grey9',
  boxSizing: 'border-box',
  position: 'relative',
  height: '$1',
  overflow: 'hidden',
  borderRadius: '$pill',

  backgroundColor: '$$main',

  '&[data-state="indeterminate"]': {
    backgroundColor: '$grey3',
    '&::after': {
      animationName: indeterminateProgress,
      backgroundColor: '$$main',
      boxSizing: 'border-box',
      borderRadius: '$pill',
      content: '""',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      width: '5%',
      _motionReduce: { transition: 'none' },
      _motionSafe: {
        animationDuration: '1500ms',
        animationIterationCount: 'infinite',
        animationTimingFunction: 'cubic-bezier(0.65, 0, 0.35, 1)',
      },
      '@reducedmotion': {
        left: '47.5%',
      },
    },
  },

  variants: {
    variant: {
      secondary: {
        $$main: '$colors$grey9',
      },
      primary: {
        $$main: '$colors$primary',
      },
      brand: {
        $$main: '$colors$brandYellow',
      },
      gradient: {
        backgroundImage:
          'linear-gradient(90deg, $colors$error 0%, $colors$warning 40%, $colors$success 100%)',
      },
    },
    destructive: {
      true: {
        $$main: '$colors$error9',
      },
    },
  },
  defaultVariants: {
    variant: 'secondary',
  },
})

const ProgressIndicator = styled(Indicator, {
  boxSizing: 'border-box',
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  width: '100%',
  backgroundColor: '$grey3',
  _motionReduce: { transition: 'none' },
  _motionSafe: {
    transition: 'transform 150ms cubic-bezier(0.65, 0, 0.35, 1)',
  },
})

type ProgressProps = ComponentProps<typeof Root> &
  CSSProps &
  AsProps &
  VariantProps<typeof StyledProgress>

/**
 * Use a progress bar to indicate progress to the user.
 *
 * Based on [Radix Progress](https://radix-ui.com/primitives/docs/components/progress).
 */
export const Progress = forwardRef<
  ElementRef<typeof StyledProgress>,
  ProgressProps
>(({ value, max = 100, ...props }, forwardedRef) => {
  const percentage = value != null ? Math.round((value / max) * 100) : null

  return (
    <StyledProgress {...props} ref={forwardedRef} value={value} max={max}>
      <ProgressIndicator style={{ transform: `translateX(${percentage}%)` }} />
    </StyledProgress>
  )
})
Progress.toString = () => `.${StyledProgress.className}`
