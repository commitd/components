import { css } from '@committed/ss/css'
import { styled } from '@committed/ss/jsx'
import { SurfaceVariants } from '@committed/utilities'
import { CComponent, component } from '../../utils'

export const overlayAnimationStyles = css({
  _motionReduce: { transition: 'none' },
  _motionSafe: {
    '&[data-state=open]': {
      animation: 'fadeIn 200ms ease-out',
    },
    '&[data-state=closed]': {
      animation: 'fadeOut 200ms ease-out',
    },
  },
})

export const OVERLAY_CLASS = 'c-overlay'

/**
 * An `Overlay` is used in other components to overlay on the normal content and
 * place temporary content on top, such as a dialog. It is primarily for internal use but
 * exported for use in custom components to make them consistent. The styles are also
 * exported and may be more easily used.
 */
export const Overlay: CComponent<'div', SurfaceVariants> = styled(
  component('div', OVERLAY_CLASS),
)
