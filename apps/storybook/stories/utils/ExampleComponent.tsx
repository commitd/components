import { Box } from '@committed/ds'
import { SystemStyleObject } from '@committed/ds-ss'
import React from 'react'
import { randomColor } from './randomColor'

type BoxProps = React.ComponentProps<typeof Box>
type ExampleComponentProps = Omit<BoxProps, 'css'> & {
  width?: SystemStyleObject['width']
  height?: SystemStyleObject['height']
}

export const ExampleComponent: React.FC<ExampleComponentProps> = ({
  height = '100px',
  width = '100%',
  ...props
}) => (
  <Box
    css={{
      p: '$2',
      border: '1px solid token(colors.$neutral.3)',
    }}
    style={{
      width,
      height,
      backgroundColor: randomColor(),
    }}
    {...props}
  />
)
