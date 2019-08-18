import * as React from "react"
import { Typography, TypographyProps } from "./Typography"

export type CaptionProps = TypographyProps

export const Caption = (props: CaptionProps) => (
  <Typography {...props} variant="caption" />
)

export default Caption
