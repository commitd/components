import type * as Polymorphic from '@radix-ui/react-polymorphic'
import { Content, List, Root, Trigger } from '@radix-ui/react-tabs'
import React, { forwardRef } from 'react'
import type { CSSProps, StitchesVariants, StyledConfig } from 'stitches.config'
import { styled } from 'stitches.config'
import {
  active,
  buttonBaseStyle,
  focus,
  hover,
  mainVariants,
  sizeVariants,
} from '../Button/Button'

export const TabsRoot = styled(Root, {})

export const TabsList = styled(List, {
  display: 'flex',
  borderBottom: '1px solid $grey4',
  '& *:not(:first-child)': {
    borderLeft: 'none!important',
  },
})

const tabVariants = {
  variant: mainVariants,
  size: sizeVariants,
  force: {
    hover,
    focus,
    active,
  },
}

const StyledTab = styled(Trigger, {
  ...buttonBaseStyle,
  cursor: 'pointer',
  minWidth: '160px',
  borderRadius: '0',
  border: 'none',

  '&[data-state="active"]': {
    boxShadow: 'inset 0 -1px 0 0 currentColor, 0 1px 0 0 currentColor',
    cursor: 'none',
  },
  variants: tabVariants,
  defaultVariants: {
    destructive: 'false',
    size: 'default',
  },
} as StyledConfig<typeof tabVariants>)

type TabVariants = StitchesVariants<typeof StyledTab>
type TabOwnProps = Polymorphic.OwnProps<typeof Trigger> &
  CSSProps &
  TabVariants & { variant?: 'brand' | 'primary' | 'secondary' | 'tertiary' }

type TabComponent = Polymorphic.ForwardRefComponent<
  Polymorphic.IntrinsicElement<typeof Trigger>,
  TabOwnProps
>

export const Tab = forwardRef((props, forwardedRef) => (
  <StyledTab {...props} ref={forwardedRef} />
)) as TabComponent

export const TabContent = styled(Content, { padding: '$3' })
