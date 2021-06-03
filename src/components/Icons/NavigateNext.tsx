import React, { FC, ComponentProps } from 'react'
import { Svg } from '../Svg'

export const NavigateNext: FC<ComponentProps<typeof Svg>> = (props) => (
  <Svg {...props}>
    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
  </Svg>
)
