import React, { FC, ComponentProps } from 'react'
import { Svg } from '../Svg'

export const ChevronDown: FC<ComponentProps<typeof Svg>> = (props) => (
  <Svg {...props}>
    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
  </Svg>
)
