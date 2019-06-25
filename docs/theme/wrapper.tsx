import * as React from "react"
import ThemeProvider from "../../src/theme/ThemeProvider"

const Wrapper: React.FunctionComponent = ({ children }) => (
  <ThemeProvider>{children}</ThemeProvider>
)

export default Wrapper
