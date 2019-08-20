import * as React from "react"
import MaterialDivider, {
  DividerProps as MaterialDividerProps
} from "@material-ui/core/Divider"

export type DividerProps = MaterialDividerProps

export const Divider: React.FC<DividerProps> = MaterialDivider
Divider.displayName = "Divider"

export default Divider
