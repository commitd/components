import type * as Polymorphic from '@radix-ui/react-polymorphic'
import { Content, List, Root, Trigger } from '@radix-ui/react-tabs'
import React, { forwardRef } from 'react'
import type { CSSProps } from '../../stitches.config'
import { styled } from '../../stitches.config'
import {
  buttonBaseStyle,
  mainVariants as buttonVariants,
  sizeVariants,
} from '../Button/Button'

const StyledTab = styled(Trigger, {})

type TabOwnProps = Polymorphic.OwnProps<typeof Trigger> & CSSProps

type TabComponent = Polymorphic.ForwardRefComponent<
  Polymorphic.IntrinsicElement<typeof Trigger>,
  TabOwnProps
>

export const Tab = forwardRef((props, forwardedRef) => (
  <StyledTab {...props} ref={forwardedRef} />
)) as TabComponent
Tab.toString = () => `.${StyledTab.className}`

export const TabsRoot = styled(Root, {
  $$indicatorSize: '2px',
  [`& ${Tab}`]: {
    ...buttonBaseStyle,
    cursor: 'pointer',
    minWidth: '160px',
    borderRadius: '0',
    border: 'none',

    '&[data-state="active"]': {
      boxShadow: 'inset 0 -$$indicatorSize 0 0 currentColor',
      cursor: 'auto',
    },
  },
  variants: {
    variant: {
      brand: {
        [`& ${Tab}`]: buttonVariants.brand,
      },
      primary: {
        [`& ${Tab}`]: buttonVariants.primary,
      },
      secondary: {
        [`& ${Tab}`]: {
          ...buttonVariants.secondary,
          '&[data-state="active"]': {
            boxShadow: 'none',
            backgroundColor: '$$active',
            textDecoration: 'underline',
          },
        },
      },
      tertiary: {
        [`& ${Tab}`]: buttonVariants.tertiary,
      },
    },
    size: {
      small: {
        $$indicatorSize: '1px',
        [`& ${Tab}`]: sizeVariants.small,
      },
      default: {
        $$indicatorSize: '2px',
        [`& ${Tab}`]: sizeVariants.default,
      },
      large: {
        $$indicatorSize: '4px',
        [`& ${Tab}`]: sizeVariants.large,
      },
    },
  },
  defaultVariants: {
    variant: 'tertiary',
    size: 'default',
  },
})

export const TabsList = styled(List, {
  display: 'flex',
  borderBottom: '1px solid $grey4',
  '& *:not(:first-child)': {
    borderLeft: 'none!important',
  },
})

export const TabContent = styled(Content, { padding: '$3' })
