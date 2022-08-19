import React from 'react'
import { Box } from '../components/Box'
import { CSS } from '../stitches.config'
import { randomColor } from './'

const border = '1px solid $grey3'

type BoxProps = React.ComponentProps<typeof Box>
type ExampleComponentProps = Omit<BoxProps, 'css'> & {
  css?: CSS
  width?: CSS['width']
  height?: CSS['height']
}

export const ExampleComponent: React.FC<ExampleComponentProps> = ({
  css,
  height = '$8',
  width = '100%',
  ...props
}) => (
  <Box
    css={
      {
        width,
        height,
        p: '$2',
        border,
        backgroundColor: randomColor(),
        ...css,
      } as CSS
    }
    {...props}
  />
)

type GridBoxProps = Omit<BoxProps, 'css'> & {
  css?: CSS
}

export const GridBox: React.FC<GridBoxProps> = ({ css, ...props }) => (
  <Box
    css={
      {
        minWidth: '$5',
        minHeight: '$5',
        p: '$2',
        border,
        backgroundColor: randomColor(),
        ...css,
      } as CSS
    }
    {...props}
  />
)
