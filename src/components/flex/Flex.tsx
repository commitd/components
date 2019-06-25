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

export type FlexProps = BoxProps &
  FlexDirectionProps &
  FlexWrapProps &
  AlignItemsProps &
  JustifyContentProps

export const Flex: React.FC<FlexProps> = styled(Box)`
{
  display: flex
},
${flexWrap}
${flexDirection}
${alignItems}
${justifyContent}
`

export default Flex
