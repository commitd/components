import * as React from "react"
import { Button } from "../src"
import { Cartesian } from "@compositor/kit"

export default () => (
  <Cartesian
    component={Button}
    m={4}
    type={["outlined", "outlined"]}
    variation={[
      "neutral",
      "primary",
      "supporting",
      "success",
      "warning",
      "error"
    ]}
    size={["sm", "md", "lg", "xl"]}
    disabled={[true, false]}
    stretch={[true, false]}
    children="Button"
  />
)
