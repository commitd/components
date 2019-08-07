import * as React from "react"
import { Typography, TypographyProps } from "./Typography"

export type CaptionProps = TypographyProps

export const Caption = (props: CaptionProps) => (
  <Typography as="span" textStyle="caption" fontSize={[0, 1, 2]} {...props} />
)

export default Caption
