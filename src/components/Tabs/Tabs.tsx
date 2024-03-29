import { Content, List, Root, Trigger } from '@radix-ui/react-tabs'
import { styled } from '../../stitches.config'
import {
  buttonBaseStyle,
  mainVariants as buttonVariants,
  sizeVariants,
} from '../Button/Button'

export const Tab = styled(Trigger, buttonBaseStyle, {
  cursor: 'pointer',
  minWidth: '160px',
  borderRadius: '0',
  border: 'none',

  '&[data-state="active"]': {
    cursor: 'auto',
  },
})

export const TabsList = styled(List, {
  display: 'flex',
  gridArea: 'tabs',
})

/**
 * Tabs can be used to switch between different views.
 *
 * Support positioning, `top`, `bottom`, `left` and `right`, and out standard variants, `primary`, `secondary`, `tertiary` and `brand`.
 */
export const TabsRoot = styled(Root, {
  $$indicatorSize: '2px',

  display: 'grid',
  gap: '0px 0px',

  variants: {
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
    position: {
      top: {
        gridTemplateColumns: '1fr',
        gridTemplateRows: 'auto 1fr',
        gridTemplateAreas: `"tabs" "content"`,
        [`& ${Tab}`]: {
          '&[data-state="active"]': {
            boxShadow: 'inset 0 -$$indicatorSize 0 0 currentColor',
          },
        },
        [`& ${TabsList}`]: {
          flexDirection: 'row',
        },
      },
      bottom: {
        gridTemplateColumns: '1fr',
        gridTemplateRows: '1fr auto',
        gridTemplateAreas: `"content" "tabs"`,
        [`& ${Tab}`]: {
          '&[data-state="active"]': {
            boxShadow: 'inset 0 $$indicatorSize 0 0 currentColor',
          },
        },
        [`& ${TabsList}`]: {
          flexDirection: 'row',
        },
      },
      left: {
        gridTemplateColumns: 'auto 1fr',
        gridTemplateRows: '1fr',
        gridTemplateAreas: `"tabs content"`,
        [`& ${Tab}`]: {
          '&[data-state="active"]': {
            boxShadow: 'inset -$$indicatorSize 0 0 0 currentColor',
          },
        },
        [`& ${TabsList}`]: {
          flexDirection: 'column',
        },
      },
      right: {
        gridTemplateColumns: '1fr auto',
        gridTemplateRows: '1fr',
        gridTemplateAreas: `"content tabs"`,
        [`& ${Tab}`]: {
          '&[data-state="active"]': {
            boxShadow: 'inset $$indicatorSize 0 0 0 currentColor',
          },
        },
        [`& ${TabsList}`]: {
          flexDirection: 'column',
        },
      },
    },
    variant: {
      brand: {
        [`& ${Tab}`]: buttonVariants.brand,
        [`& ${TabsList}`]: {
          backgroundColor: '$brand',
        },
      },
      primary: {
        [`& ${Tab}`]: buttonVariants.primary,
        [`& ${TabsList}`]: {
          backgroundColor: '$primary',
        },
      },
      secondary: {
        [`& ${Tab}`]: {
          ...buttonVariants.secondary,
          '&[data-state="active"]': {
            boxShadow: 'none !important',
            backgroundColor: '$$active',
            textDecoration: 'underline',
          },
        },
      },
      tertiary: {
        [`& ${Tab}`]: buttonVariants.tertiary,
      },
    },
  },
  compoundVariants: [
    {
      variant: 'tertiary',
      position: 'top',
      css: {
        [`& ${TabsList}`]: {
          borderBottom: '1px solid $grey4',
        },
      },
    },
    {
      variant: 'tertiary',
      position: 'bottom',
      css: {
        [`& ${TabsList}`]: {
          borderTop: '1px solid $grey4',
        },
      },
    },
    {
      variant: 'tertiary',
      position: 'left',
      css: {
        [`& ${TabsList}`]: {
          borderRight: '1px solid $grey4',
        },
      },
    },
    {
      variant: 'tertiary',
      position: 'right',
      css: {
        [`& ${TabsList}`]: {
          borderLeft: '1px solid $grey4',
        },
      },
    },
  ],
  defaultVariants: {
    variant: 'tertiary',
    size: 'default',
    position: 'top',
  },
})

export const TabContent = styled(Content, {
  padding: '$3',
  gridArea: 'content',
})
