import * as React from "react"
import MaterialTypography, {
  TypographyProps as MaterialTypographyProps
} from "@material-ui/core/Typography"

export type TypographyProps = MaterialTypographyProps
export const Typography = MaterialTypography

export default Typography as React.FC<TypographyProps>
