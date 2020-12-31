import React from 'react'
import { Copy } from './copy'
import { Flex, Box, Text, FlexProps, colors } from '../../src'

export interface ColorsProps {
  name: string
  colors: { [key: string]: string }
  accent?: boolean
}

export type ColorProps = FlexProps & {
  color: string
  placement?: 'top' | 'bottom'
}

export const Color = ({
  color,
  height = '25px',
  placement = 'top',
  children,
  ...others
}: ColorProps) => {
  return (
    <Copy
      title={color}
      placement={placement}
      display="flex"
      flexGrow={1}
      key={color}
      height={height}
      bgcolor={color}
      {...others}
    >
      {children}
    </Copy>
  )
}

export const Colors = ({ colors, name, accent = false }: ColorsProps) => (
  <Flex mb={1}>
    <Box width={150}>
      <Text>{name}</Text>
    </Box>
    {Object.keys(colors)
      .filter((weight) => (accent ? true : !weight.startsWith('A')))
      .map((weight) => (
        <Color key={`${name}-${weight}`} color={colors[weight]} />
      ))}
  </Flex>
)

const keys = Object.keys(colors)
export const randomColor = () => {
  const color = keys[Math.floor(Math.random() * keys.length)]
  return colors[color][300]
}
