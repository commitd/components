import { css } from '@committed/ss'
import { CComponent, component } from '../../utils'

/**
 * Image provides a simple styled img
 */
export const Image: CComponent<'img'> = component(
  'img',
  'c-image',
  css({
    objectFit: 'cover',
    width: '100%',
    height: '100%',
  }),
)
