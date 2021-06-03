import React, { FC, ComponentProps } from 'react'
import { Svg } from '../Svg'

export const LastPage: FC<ComponentProps<typeof Svg>> = (props) => (
  <Svg {...props}>
    <path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z" />
  </Svg>
)
