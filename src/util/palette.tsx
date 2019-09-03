import * as React from 'react'
import { Flex } from '../'
import Swatch from './swatch'

export interface PaletteProps {
  name: string
  colors: { [key: string]: string }
}

export default class Palette extends React.Component<PaletteProps> {
  public render() {
    const { colors, name } = this.props
    return (
      <Flex mb={4} flexWrap="wrap">
        {Object.keys(colors).map(weight => (
          <Swatch
            key={`${name}.${weight}`}
            name={`${weight}`}
            color={colors[weight]}
          />
        ))}
      </Flex>
    )
  }
}
