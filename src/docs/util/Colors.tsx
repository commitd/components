import convertColor from 'parse-color'
import React from 'react'
import { Flex, Text } from '../../components'
import type { CSS } from '../../stitches.config'
import { Copy } from './Copy'

const paletteWeights = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
export interface ColorsProps {
  theme: any
  name: string
  colors: { [key: string]: string }
}

const resolveColor = (theme: any, name: string): string => {
  try {
    if (name.startsWith('$')) {
      return resolveColor(theme, name.substring(1))
    }
    const value = theme.colors[name].value as string
    if (value.startsWith('$')) {
      return resolveColor(theme, value.substring(8))
    } else if (value.startsWith('var')) {
      return resolveColor(theme, value.substring(13, value.length - 1))
    } else {
      return value
    }
  } catch (e) {
    console.warn(`Missing color reference ${name}`)
    console.log({ theme })
  }
  return 'red'
}

function parseColor(input: string): { hsl: string; hex: string } {
  if (input == 'transparent') {
    return {
      hsl: 'hsl(0, 0%, 0% / 1)',
      hex: '#000000FF',
    }
  }
  var div = document.createElement('div')
  div.style.backgroundColor = input
  const computed = getComputedStyle(div)
  const col = convertColor(
    computed.backgroundColor || div.style.backgroundColor
  )
  try {
    return {
      hsl:
        col?.hsla?.[3] === 1
          ? `hsl(${col.hsl[0]} ${col.hsl[1]}% ${col.hsl[2]}%)`
          : `hsla(${col.hsla[0]} ${col.hsla[1]}% ${col.hsla[2]}% ${col.hsla[3]})`,
      hex: col.hex,
    }
  } catch (e) {
    console.warn(`Cannot parse color ${input}`)
  }
  return { hsl: 'unknown', hex: 'unknown' }
}

export type ColorProps = Omit<
  React.ComponentProps<typeof Copy>,
  'content' | 'children'
> & {
  theme: any
  name: string
  weight: number | string
  children?: React.ReactNode
}

export const Color = ({
  theme,
  name,
  weight,
  css = {},
  children,
  ...others
}: ColorProps) => {
  const key = `${name}${weight}`
  const colorKey = `$colors$${key}`
  const rawValue = theme.colors[key].value
  const rawColor = resolveColor(theme, `$${key}`)
  const col = parseColor(rawColor)

  return (
    <Copy
      content={
        <pre>{`${colorKey} ${rawValue === rawColor ? '' : `(${rawValue})`}\n${
          col.hsl
        }\n${col.hex}`}</pre>
      }
      copy={colorKey}
      css={
        {
          flexGrow: 1,
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
          backgroundColor: colorKey,
          ...css,
        } as CSS
      }
      {...others}
    >
      {children}
    </Copy>
  )
}

export const Colors = ({ name, theme }: ColorsProps) => (
  <Flex css={{ mb: '$1', height: '$6' }}>
    <Text css={{ width: 150 }}>{name}</Text>
    {paletteWeights.map((weight) => (
      <Color
        key={`${name}-${weight}`}
        theme={theme}
        name={name}
        weight={weight}
      />
    ))}
  </Flex>
)
