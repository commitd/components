import * as React from "react"
import { Box, Flex } from "../../src/index"
import Swatch from "./swatch"

export interface PalletteProps {
  name: string
  colors: string[]
}

const weights = [
  "050",
  "100",
  "200",
  "300",
  "400",
  "500",
  "600",
  "700",
  "800",
  "900"
]

export default class Pallette extends React.Component<PalletteProps> {
  public render() {
    const { colors, name } = this.props
    return (
      <Flex mb={4} flexWrap="wrap">
        {colors.map((color, index) => (
          <Swatch name={weights[index]} color={color} />
        ))}
      </Flex>
    )
  }
}
