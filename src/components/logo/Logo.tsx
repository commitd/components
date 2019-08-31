import LogoSvg from "./commit.svg"
import { styled } from "@material-ui/styles"

export interface LogoProps {
  /**
   *  adjust the size in px of the loader
   */
  size?: number
}

// @ts-ignore
export const Logo = styled(LogoSvg)({
  display: "block",
  margin: "auto",
  width: ({ size = 256 }) => size,
  height: ({ size = 256 }) => size
})
