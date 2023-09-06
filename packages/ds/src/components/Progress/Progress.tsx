import { RecipeVariantProps, css, cva, cx } from '@committed/ss/css'
import { styled } from '@committed/ss/jsx'
import { SystemStyleObject } from '@committed/ss/types'
import { Indicator, Root } from '@radix-ui/react-progress'
import { ComponentProps, ElementRef, forwardRef } from 'react'
import { component } from '../../utils'

const PROGRESS_CLASS = 'c-progress'
const INDICATOR_CLASS = 'c-progress-indicator'

const progress = cva({
  base: {
    boxSizing: 'border-box',
    position: 'relative',
    height: '$1',
    overflow: 'hidden',
    borderRadius: '$pill',
    backgroundColor: '$neutral.3.a',

    /* Fix overflow clipping in Safari */
    /* https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0 */
    transform: 'translateZ(0)',
  },
  variants: {
    color: {
      neutral: {
        [`& .${INDICATOR_CLASS}`]: {
          backgroundColor: '$neutral.9',
        },
      } as SystemStyleObject,
      primary: {
        [`& .${INDICATOR_CLASS}`]: {
          backgroundColor: '$primary',
        },
      } as SystemStyleObject,
      secondary: {
        [`& .${INDICATOR_CLASS}`]: {
          backgroundColor: '$secondary',
        },
      } as SystemStyleObject,
    },
  },
  defaultVariants: {
    color: 'primary',
  },
})

const StyledProgress = styled(Root, progress)

const ProgressIndicator = component(
  Indicator,
  INDICATOR_CLASS,
  css({
    boxSizing: 'border-box',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width: '100%',
    height: '100%',
    _motionReduce: { transition: 'none' },
    _motionSafe: {
      transition: 'transform 150ms cubic-bezier(0.65, 0, 0.35, 1)',
    },
    '&[data-state=indeterminate]': {
      borderRadius: '$pill',
      width: '5%',
      animationName: 'indeterminate',
      _motionSafe: {
        animationDuration: '1500ms',
        animationIterationCount: 'infinite',
        animationTimingFunction: 'cubic-bezier(0.65, 0, 0.35, 1)',
      },
      _motionReduce: {
        left: '47.5%',
      },
    },
  }),
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
>(({ value, max = 100, className, ...props }, forwardedRef) => {
  const percentage = value != null ? Math.round((value / max) * 100) : 0

  return (
    <StyledProgress
      className={cx(PROGRESS_CLASS, className)}
      {...props}
      ref={forwardedRef}
      value={value}
      max={max}
    >
      <ProgressIndicator
        style={{ transform: `translateX(-${100 - percentage}%)` }}
      />
    </StyledProgress>
  )
})
Progress.displayName = 'Progress'
