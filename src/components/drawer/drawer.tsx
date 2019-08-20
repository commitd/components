import * as React from "react"
import MaterialDrawer, {
  DrawerProps as MaterialDrawerProps
} from "@material-ui/core/Drawer"

export type DrawerProps = MaterialDrawerProps

export const Drawer: React.FC<DrawerProps> = (props: DrawerProps) => (
  <MaterialDrawer {...props} />
)

export default Drawer
