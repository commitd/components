import * as React from "react"
import MaterialToolbar, {
  ToolbarProps as MaterialToolbarProps
} from "@material-ui/core/Toolbar"

export type ToolbarProps = MaterialToolbarProps

export const Toolbar: React.ComponentType<ToolbarProps> = MaterialToolbar
Toolbar.displayName = "Toolbar"

export default Toolbar
