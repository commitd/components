import { Box } from '@committed/ds'
import { SystemStyleObject } from '@committed/ds-ss'
import React from 'react'
import { randomColor } from './randomColor'

type BoxProps = React.ComponentProps<typeof Box>

type GridBoxProps = Omit<BoxProps, 'css'> & {
  css?: SystemStyleObject
}

export const GridBox: React.FC<GridBoxProps> = ({ css, ...props }) => (
  <Box
    css={{
      minWidth: '$5',
      minHeight: '$5',
      p: '$2',
      border: '1px solid token(colors.$neutral.3)',
      ...css,
    }}
    style={{
      backgroundColor: randomColor(),
    }}
    {...props}
  />
)
