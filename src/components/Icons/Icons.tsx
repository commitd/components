import {
  mdiBrightness3,
  mdiBrightness5,
  mdiChevronDown,
  mdiChevronLeft,
  mdiChevronRight,
  mdiChevronUp,
  mdiClose,
} from '@mdi/js'
import React, { ComponentProps, FC } from 'react'
import type { CSS } from '../../stitches.config'
import { Svg } from '../Svg'

type IconType = FC<ComponentProps<typeof Svg>>

export const Check: IconType = (props) => (
  <Svg
    path="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z"
    {...props}
  />
)

export const ChevronUp: IconType = (props) => (
  <Svg path={mdiChevronUp} {...props} />
)

export const ChevronDown: IconType = (props) => (
  <Svg path={mdiChevronDown} {...props} />
)

export const ChevronLeft: IconType = (props) => (
  <Svg path={mdiChevronLeft} {...props} />
)

export const ChevronRight: IconType = (props) => (
  <Svg path={mdiChevronRight} {...props} />
)

export const Close: IconType = (props) => <Svg path={mdiClose} {...props} />

export const CheckIndeterminate: IconType = ({ css, ...props }) => (
  <Svg path="M6,11 h12 v4 h-12 Z" css={{ ...css } as CSS} {...props} />
)

export const LightMode: IconType = (props) => (
  <Svg path={mdiBrightness5} {...props} />
)

export const DarkMode: IconType = (props) => (
  <Svg path={mdiBrightness3} {...props} />
)
