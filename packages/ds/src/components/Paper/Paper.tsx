import { css } from '@committed/ss/css'
import { component } from '../../utils'

const DEFAULT_TAG = 'div'

export const paperStyles = css({
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  font: 'inherit',
  lineHeight: 'none',
  outline: 'none',
  textAlign: 'inherit',
  verticalAlign: 'middle',
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',

  backgroundColor: '$paper',
  borderRadius: '$default',
  color: 'text',

  _before: {
    boxSizing: 'border-box',
    content: '""',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: '$default',
    pointerEvents: 'none',
    boxShadow: '1',
  },
})

/**
 * `Paper` is used in other components for use as the standard layer for content panels,
 * such as Cards, Dialogs, etc.
 *
 * It is primarily for internal use but exported for use in custom components to make them consistent.
 * The styles are also exported and may be more easily used.
 */
export const Paper = component(DEFAULT_TAG, 'c-paper', paperStyles)
