import type * as Polymorphic from '@radix-ui/react-polymorphic'
import React, { forwardRef } from 'react'
import type { CSSProps, StitchesVariants } from '../../stitches.config'
import { styled, keyframes } from '../../stitches.config'
import { Root, Indicator } from '@radix-ui/react-progress'

const indeterminateProgress = keyframes({
  '0%': {
    transform: 'scaleX(1) translateX(-100%)',
    transformOrigin: 'left',
  },
  '50%': {
    transform: 'scaleX(1) translateX(1000%)',
    transformOrigin: 'left',
  },
  '100%': {
    transform: 'scaleX(1) translateX(2000%)',
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
      animationDuration: '1500ms',
      animationIterationCount: 'infinite',
      animationTimingFunction: 'cubic-bezier(0.65, 0, 0.35, 1)',
      backgroundColor: '$$main',
      boxSizing: 'border-box',
      borderRadius: '$pill',
      content: '""',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      width: '5%',
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
  transition: 'transform 150ms cubic-bezier(0.65, 0, 0.35, 1)',
})

type ProgressVariants = StitchesVariants<typeof StyledProgress>
type ProgressOwnProps = Polymorphic.OwnProps<typeof Root> &
  CSSProps &
  ProgressVariants
type ProgressComponent = Polymorphic.ForwardRefComponent<
  Polymorphic.IntrinsicElement<typeof Root>,
  ProgressOwnProps
>

/**
 * Use a progress bar to indicate progress to the user.
 *
 * Based on [Radix Progress](https://radix-ui.com/primitives/docs/components/progress).
 */
export const Progress = forwardRef(
  ({ value, max = 100, ...props }, forwardedRef) => {
    const percentage = value != null ? Math.round((value / max) * 100) : null

    return (
      <StyledProgress {...props} ref={forwardedRef} value={value} max={max}>
        <ProgressIndicator
          style={{ transform: `translateX(${percentage}%)` }}
        />
      </StyledProgress>
    )
  }
) as ProgressComponent
