import { RecipeVariantProps, css, cva } from '@committed/ss/css'
import { styled } from '@committed/ss/jsx'
import { Indicator, Root } from '@radix-ui/react-progress'
import { ComponentProps, ElementRef, forwardRef } from 'react'
import { withClasses } from '../../utils'

const progress = cva({
  base: {
    '--main': 'token(colors.$grey9)',
    boxSizing: 'border-box',
    position: 'relative',
    height: '$1',
    overflow: 'hidden',
    borderRadius: '$pill',

    backgroundColor: '$$main',

    '&[data-state="indeterminate"]': {
      backgroundColor: '$grey3',
      _after: {
        animationName: '$indeterminate',
        backgroundColor: '$$main',
        boxSizing: 'border-box',
        borderRadius: '$pill',
        content: '""',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        width: '5%',
        _motionSafe: {
          animationDuration: '1500ms',
          animationIterationCount: 'infinite',
          animationTimingFunction: 'cubic-bezier(0.65, 0, 0.35, 1)',
        },
        _motionReduce: {
          left: '47.5%',
        },
      },
    },
  },
  variants: {
    variant: {
      secondary: {
        '--main': 'token(colors.$grey9)',
      },
      primary: {
        '--main': 'token(colors.$primary)',
      },
      brand: {
        '--main': 'token(colors.$brandYellow)',
      },
      gradient: {
        backgroundImage:
          'linear-gradient(90deg, token(colors.error) 0%, $colors$warning 40%, token(colors.$success) 100%)',
      },
    },
    destructive: {
      true: {
        '--main': 'token(colors.$error9)',
      },
    },
  },
  defaultVariants: {
    variant: 'secondary',
  },
})

const StyledProgress = styled(Root, progress)

const ProgressIndicator = withClasses(
  Indicator,
  css({
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
)

type ProgressProps = ComponentProps<typeof Root> &
  RecipeVariantProps<typeof progress>

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
Progress.displayName = 'Progress'
