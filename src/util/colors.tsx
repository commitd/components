import React from 'react'
import { copyToClipboard } from './copy'
import { Flex, Box, Text, Tooltip, FlexProps } from '..'

export interface ColorsProps {
  name: string
  colors: { [key: string]: string }
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
}: ColorProps) => (
  <Tooltip key={`${name}`} title={color} placement={placement}>
    <Flex
      flexGrow={1}
      key={color}
      height={height}
      bg={color}
      onClick={() => copyToClipboard(color)}
      {...others}
    >
      {children}
    </Flex>
  </Tooltip>
)

export const Colors = ({ colors, name }: ColorsProps) => (
  <Flex mb={1}>
    <Box width={150}>
      <Text>{name}</Text>
    </Box>
    {Object.keys(colors).map(weight => (
      <Color color={colors[weight]} />
    ))}
  </Flex>
)
