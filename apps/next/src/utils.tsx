import { Box } from '@committed/ds'
import { css } from '@committed/ss'

export const GridBox = (props) => {
  return (
    <Box
      css={{
        minWidth: '$5',
        minHeight: '$5',
        p: '$2',
        border: '1px solid token(colors.$neutral.3)',
        ...css,
      }}
      style={
        {
          //   backgroundColor: randomColor(),
        }
      }
      {...props}
    />
  )
}
