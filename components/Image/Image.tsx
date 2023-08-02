import { css } from '@committed/ss/css'
import { withClasses } from '../../utils'

/**
 * Image provides a simple styled img
 */
export const Image = withClasses(
  'img',
  css({
    objectFit: 'cover',
    width: '100%',
    height: '100%',
  })
)
