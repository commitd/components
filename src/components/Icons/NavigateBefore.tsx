import React, { FC, ComponentProps } from 'react'
import { Svg } from '../Svg'

export const NavigateBefore: FC<ComponentProps<typeof Svg>> = (props) => (
  <Svg {...props}>
    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
  </Svg>
)
