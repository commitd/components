'use client'

import { Root } from '@radix-ui/react-aspect-ratio'
import { CComponent, component } from '../../utils'

/**
 * AspectRatio can be used to display content with a fixed aspect ratio
 */
export const AspectRatio: CComponent<typeof Root> = component(
  Root,
  'c-aspect-ratio',
)
AspectRatio.displayName = 'AspectRatio'
