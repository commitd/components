import { css } from '../../../styled-system/css'
import { withClasses } from '../../utils'

export const overlayStyles = css({
  backgroundColor: 'transparency7',
})

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
export const Overlay = withClasses('div', OVERLAY_CLASS, overlayStyles)
