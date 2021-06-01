import React from 'react'
import { Copy } from './Copy'
import { CSS } from '../../utils/stitches.config'
import { Flex, Box, Text } from '../../components'

const paletteWeights   = [1,2,3,4,5,6,7,8,9,10,11,12]
export interface ColorsProps {
  name: string
  colors: { [key: string]: string }
}

export type ColorProps = Omit<React.ComponentProps<typeof Copy>, 'content'> & {
  color: string
  placement?: 'top' | 'bottom'
  height?: string
}

export const Color = ({
  color,
  height = '25px',
  css,
  children,
  ...others
}: ColorProps) => {
  return (
    <Copy
      content={color}
      css={{ 
          height,
          flexGrow: 1,
        backgroundColor: color,
        ...css
      } as CSS}
      {...others}
    >
      {children}
    </Copy>
  )
}

export const Colors = ({ name }: ColorsProps) => (
  <Flex css={{mb: '$1'}}>
    <Text css={{ width: 150}}>{name}</Text>
    {paletteWeights.map((weight) => (
        <Color key={`${name}-${weight}`} color={`$colors$${name}${weight}`} />
      ))}
  </Flex>
)

