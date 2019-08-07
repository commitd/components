import * as React from "react"
import styled from "styled-components"

import { borderRadius, BorderRadiusProps } from "styled-system"
import { Box, BoxProps } from "../box/Box"
import { theme, ThemeProps } from "../../theme"

export type CardProps = {
  /** Theme name for border color */
  borderColor: string
  /** One of the fixed border widths */
  borderWidth: 0 | 1 | 2
  /** size of the box shadow */
  boxShadowSize: "sm" | "md" | "lg" | "xl"
}

export type InternalCardProps = BoxProps &
  BorderRadiusProps &
  ThemeProps &
  CardProps

const boxShadow = (props: InternalCardProps) => {
  const boxShadows = {
    sm: {
      "box-shadow": props.theme!.boxShadows[0]
    },
    md: {
      "box-shadow": props.theme!.boxShadows[1]
    },
    lg: {
      "box-shadow": props.theme!.boxShadows[2]
    },
    xl: {
      "box-shadow": props.theme!.boxShadows[3]
    }
  }
  return boxShadows[props.boxShadowSize]
}

const boxBorder = (props: InternalCardProps) => ({
  border:
    props.borderWidth === 0
      ? "0"
      : `${props.borderWidth}px solid ${
          (props.theme || theme).colors[props.borderColor]
        }`
})

export const Card = styled(Box)<InternalCardProps>`
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

export default Card as React.FC<CardProps>
