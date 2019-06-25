import * as React from "react"
import styled from "styled-components"

import { borderRadius, BorderRadiusProps } from "styled-system"
import { Box, BoxProps } from "../box/Box"
import theme from "../../theme/theme"

export type CardProps = BoxProps &
  BorderRadiusProps & {
    // Theme name for border color
    borderColor: string
    // One of the fixed border widths
    borderWidth: 0 | 1 | 2
    // size of the box shadow
    boxShadowSize: "sm" | "md" | "lg" | "xl"
  }

const boxShadow = (props: CardProps) => {
  const boxShadows = {
    sm: {
      "box-shadow": (props.theme || theme).boxShadows[0]
    },
    md: {
      "box-shadow": (props.theme || theme).boxShadows[1]
    },
    lg: {
      "box-shadow": (props.theme || theme).boxShadows[2]
    },
    xl: {
      "box-shadow": (props.theme || theme).boxShadows[3]
    }
  }
  return boxShadows[props.boxShadowSize]
}

const boxBorder = (props: CardProps) => ({
  border:
    props.borderWidth === 0
      ? "0"
      : `${props.borderWidth}px solid ${
          (props.theme || theme).colors[props.borderColor]
        }`
})

export const Card: React.FC<CardProps> = styled(Box)<CardProps>`
  ${boxShadow} ${boxBorder} ${borderRadius};,
`

Card.defaultProps = {
  theme: theme,
  boxShadowSize: "md",
  borderColor: "borderGray",
  borderRadius: 6,
  borderWidth: 0,
  p: 4
}

Card.displayName = "Card"

export default Card
