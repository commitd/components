import React from 'react'
import { styled } from 'stitches.config'

/**
 * Grid component
 *
 * Grid supports the layout of components in 2 dimensions. Where possible prefer [`Flex`](http://localhost:6006/components/?path=/docs/components-flex--default) for one dimensional layouts.
 *
 * We use a styled `Box` in the example to remove not-relevant props.
 */
export const Grid = styled('div', {
  boxSizing: 'border-box',

  display: 'grid',
})
