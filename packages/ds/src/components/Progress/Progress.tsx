'use client'
import { css, cva, styled } from '@committed/ds-ss'
import { Indicator, Root } from '@radix-ui/react-progress'
import { ColorPaletteProps, component, forwardRefExtend } from '../../utils'

const PROGRESS_CLASS = 'c-progress'
const INDICATOR_CLASS = 'c-progress-indicator'

const StyledProgress = component(
  Root,
  PROGRESS_CLASS,
  css({
    boxSizing: 'border-box',
    position: 'relative',
    height: '$1',
    overflow: 'hidden',
    borderRadius: '$pill',
    backgroundColor: '$neutral.3.a',

    /* Fix overflow clipping in Safari */
    /* https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0 */
    transform: 'translateZ(0)',
  }),
)

const ProgressIndicator = styled(
  component(Indicator, INDICATOR_CLASS),
  cva({
    base: {
      boxSizing: 'border-box',
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      width: '100%',
      height: '100%',
      colorPalette: '$primary',
      backgroundColor: 'colorPalette.9',

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
    },
  }),
)

/**
 * Use a progress bar to indicate progress to the user.
 *
 * Based on [Radix Progress](https://radix-ui.com/primitives/docs/components/progress).
 */
export const Progress = forwardRefExtend<
  typeof StyledProgress,
  ColorPaletteProps
>(({ value, max = 100, colorPalette, ...props }, forwardedRef) => {
  const percentage = value != null ? Math.round((value / max) * 100) : 0

  return (
    <StyledProgress {...props} ref={forwardedRef} value={value} max={max}>
      <ProgressIndicator
        colorPalette={colorPalette}
        style={{ transform: `translateX(-${100 - percentage}%)` }}
      />
    </StyledProgress>
  )
})
Progress.displayName = 'Progress'
