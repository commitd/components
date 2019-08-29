import * as React from "react"
import { styled } from "@material-ui/styles"
import { fontSizes, fontWeights } from "../../theme/theme"
import MaterialAppBar, {
  AppBarProps as MaterialAppBarProps
} from "@material-ui/core/AppBar"

export type AppBarProps = MaterialAppBarProps

export const AppBar = styled(MaterialAppBar)({
  "& h1, h2, h3, h4, h5, h6": {
    fontSize: fontSizes[1],
    fontWeight: fontWeights.medium
  }
})
AppBar.displayName = "AppBarr"

export default AppBar as React.FC<AppBarProps>
