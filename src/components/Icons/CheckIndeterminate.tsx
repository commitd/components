import React, { FC, ComponentProps } from 'react'
import { Svg } from '../Svg'

export const CheckIndeterminate: FC<ComponentProps<typeof Svg>> = (props) => (
  <Svg {...props}>
    <path d="M6,11 h12 v4 h-12 Z"></path>
  </Svg>
)
