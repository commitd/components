import * as React from "react"
import { BoxProps, Box } from "../box/Box"
import styled from "styled-components"
import {
  FlexDirectionProps,
  FlexWrapProps,
  AlignItemsProps,
  JustifyContentProps,
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent
} from "styled-system"

export type MainFlexProps = FlexDirectionProps &
  FlexWrapProps &
  AlignItemsProps &
  JustifyContentProps

export type FlexProps = BoxProps & MainFlexProps

export const Flex = styled(Box)<FlexProps>`
{
  display: flex
},
${flexWrap}
${flexDirection}
${alignItems}
${justifyContent}
`

export default Flex as React.FC<FlexProps>
