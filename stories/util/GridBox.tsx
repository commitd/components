import React from 'react'
import { Box, BoxProps, colors } from '../../src'

const keys = Object.keys(colors)
const randomColor = () => {
  const color = keys[Math.floor(Math.random() * keys.length)]
  return colors[color][300]
}

export const GridBox = (props: BoxProps) => (
  <Box
    {...props}
    minWidth="25px"
    minHeight="25px"
    p={2}
    border="1px solid grey"
    bgcolor={randomColor()}
  />
)
