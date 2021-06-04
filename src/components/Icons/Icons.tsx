import React, { FC, ComponentProps } from 'react'
import { CSS } from 'stitches.config'
import { Svg } from '../Svg'
import { mdiChevronDown, mdiClose } from '@mdi/js'

type IconType = FC<ComponentProps<typeof Svg>>

export const Check: IconType = (props) => (
  <Svg
    path="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z"
    {...props}
  />
)

export const ChevronDown: IconType = (props) => (
  <Svg path={mdiChevronDown} {...props} />
)

export const Close: IconType = (props) => <Svg path={mdiClose} {...props} />

export const CheckIndeterminate: IconType = ({ css, ...props }) => (
  <Svg path="M6,11 h12 v4 h-12 Z" css={{ ...css } as CSS} {...props} />
)
