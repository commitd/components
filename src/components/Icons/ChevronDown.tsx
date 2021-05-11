import React, { FC } from 'react'
import { SvgIcon, SvgIconProps } from '../SvgIcon'

export const ChevronDown: FC<SvgIconProps> = (props) => (
  <SvgIcon {...props}>
    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
  </SvgIcon>
)
