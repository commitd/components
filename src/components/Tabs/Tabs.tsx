import * as Polymorphic from '@radix-ui/react-polymorphic'
import React, { forwardRef } from 'react'
import { CSS, StitchesVariants, styled } from 'stitches.config'
import { Root, List, Tab as RadixTab, Panel } from '@radix-ui/react-tabs'
import { Button, buttonBaseStyle } from '../Button'

export const TabsRoot = styled(Root, {})

export const TabsList = styled(List, {
  display: 'flex',
  borderBottom: '1px solid $grey4',
  '& *:not(:first-child)': {
    borderLeft: 'none!important',
  },
})

// @ts-ignore
const StyledTab = styled(RadixTab, {
  ...buttonBaseStyle,
  cursor: 'pointer',
  minWidth: '160px',
  borderRadius: '0',
  border: 'none',

  '&[data-state="active"]': {
    boxShadow: 'inset 0 -1px 0 0 currentColor, 0 1px 0 0 currentColor',
  },
  defaultVariants: {
    destructive: 'false',
    size: 'default',
  },
})

type TabVariants = StitchesVariants<typeof StyledTab>
type TabOwnProps = Polymorphic.OwnProps<typeof RadixTab> & {
  css?: CSS
} & TabVariants

type TabComponent = Polymorphic.ForwardRefComponent<
  Polymorphic.IntrinsicElement<typeof RadixTab>,
  TabOwnProps
>

export const Tab = forwardRef((props, forwardedRef) => (
  <StyledTab {...props} ref={forwardedRef} />
)) as TabComponent

export const TabPanel = styled(Panel, { padding: '$3' })