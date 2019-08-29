import * as React from "react"
import { Flex } from "@components"
import Swatch from "./swatch"

export interface PalletteProps {
  name: string
  colors: { [key: string]: string }
}

export default class Pallette extends React.Component<PalletteProps> {
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
