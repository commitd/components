import * as React from "react"
import MaterialHidden, {
  HiddenProps as MaterialHiddenProps
} from "@material-ui/core/Hidden"

export type HiddenProps = MaterialHiddenProps

export const Hidden: React.ComponentType<HiddenProps> = MaterialHidden
Hidden.displayName = "Hidden"

export default Hidden as React.FC<HiddenProps>
