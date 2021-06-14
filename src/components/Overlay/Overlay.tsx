import { styled, CSS, keyframes } from 'stitches.config'

const fadeIn = keyframes({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
})

const fadeOut = keyframes({
  from: {
    opacity: 1,
  },
  to: {
    opacity: 0,
  },
})

export const overlayStyles: CSS = {
  backgroundColor: '$transparency3',
}

export const overlayAnimationStyles: CSS = {
  '&[data-state=open]': {
    animation: `${fadeIn} 200ms ease-out`,
  },
  '&[data-state=closed]': {
    animation: `${fadeOut} 200ms ease-out`,
  },
}

/**
 * An `Overlay` is used in other components to overlay on the normal content and
 * place temporary content on top, such as a dialog. It is primarily for internal use but
 * exported for use in custom components to make them consistent. The styles are also
 * exported and may be more easily used.
 */
export const Overlay = styled('div', overlayStyles)
