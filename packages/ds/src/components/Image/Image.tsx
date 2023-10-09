import { SystemStyleObject, cva, styled } from '@committed/ss'
import { CComponent, component } from '../../utils'

/**
 * Image provides a simple styled img
 */
export const Image: CComponent<
  'img',
  {
    objectFit?: SystemStyleObject['objectFit']
    width?: SystemStyleObject['objectFit']
    height?: SystemStyleObject['objectFit']
  }
> = styled(
  component('img', 'c-image'),
  cva({
    base: {
      objectFit: 'cover',
      width: '100%',
      height: '100%',
    },
  }),
)
