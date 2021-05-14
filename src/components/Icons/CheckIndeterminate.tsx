import React, { FC } from 'react'
import { SvgIcon, SvgIconProps } from '../SvgIcon'

export const CheckIndeterminate: FC<SvgIconProps> = (props) => (
  <SvgIcon {...props}>
    <path d="M6,11 h12 v4 h-12 Z"></path>
  </SvgIcon>
)
