import { css, cva } from '@committed/ss/css'
import { styled } from '@committed/ss/jsx'
import { SystemStyleObject } from '@committed/ss/types'
import { RecipeVariantRecord } from '@committed/ss/types/recipe'
import { Content, List, Root, Trigger } from '@radix-ui/react-tabs'
import { withClasses } from '../../utils'
import {
    buttonBaseStyle,
    mainVariants as buttonVariants,
    sizeVariants,
} from '../Button/Button'

const TABS_CLASS = 'c-tabs'
const TABS_TAB_CLASS = 'c-tabs-tab'
const TABS_LIST_CLASS = 'c-tabs-list'
const TABS_CONTENT_CLASS = 'c-tabs-list'

export const Tab = withClasses(
  Trigger,
  TABS_TAB_CLASS,
  css(buttonBaseStyle),
  css({
    cursor: 'pointer',
    minWidth: '160px',
    borderRadius: '0',
    border: 'none',

    '&[data-state="active"]': {
      cursor: 'auto',
    },
  })
)

export const TabsList = withClasses(
  List,
  TABS_LIST_CLASS,
  css({
    display: 'flex',
    gridArea: 'tabs',
  })
)

export const TabContent = withClasses(
  Content,
  TABS_CONTENT_CLASS,
  css({
    padding: '$3',
    gridArea: 'content',
  })
)

const size = {
  small: {
    '--indicatorSize': '1px',
    [`& .${TABS_TAB_CLASS}`]: sizeVariants.small,
  },
  default: {
    '--indicatorSize': '2px',
    [`& .${TABS_TAB_CLASS}`]: sizeVariants.default,
  },
  large: {
    '--indicatorSize': '4px',
    [`& .${TABS_TAB_CLASS}`]: sizeVariants.large,
  },
} as RecipeVariantRecord

const position = {
  top: {
    gridTemplateColumns: '1fr',
    gridTemplateRows: 'auto 1fr',
    gridTemplateAreas: `"tabs" "content"`,
    [`& .${TABS_TAB_CLASS}`]: {
      '&[data-state="active"]': {
        boxShadow: 'inset 0 -var(--indicatorSize) 0 0 currentColor',
      },
    },
    [`& .${TABS_LIST_CLASS}`]: {
      flexDirection: 'row',
    },
  },
  bottom: {
    gridTemplateColumns: '1fr',
    gridTemplateRows: '1fr auto',
    gridTemplateAreas: `"content" "tabs"`,
    [`& .${TABS_TAB_CLASS}`]: {
      '&[data-state="active"]': {
        boxShadow: 'inset 0 var(--indicatorSize) 0 0 currentColor',
      },
    },
    [`& .${TABS_LIST_CLASS}`]: {
      flexDirection: 'row',
    },
  },
  left: {
    gridTemplateColumns: 'auto 1fr',
    gridTemplateRows: '1fr',
    gridTemplateAreas: `"tabs content"`,
    [`& .${TABS_TAB_CLASS}`]: {
      '&[data-state="active"]': {
        boxShadow: 'inset -var(--indicatorSize) 0 0 0 currentColor',
      },
    },
    [`& .${TABS_LIST_CLASS}`]: {
      flexDirection: 'column',
    },
  },
  right: {
    gridTemplateColumns: '1fr auto',
    gridTemplateRows: '1fr',
    gridTemplateAreas: `"content tabs"`,
    [`& .${TABS_TAB_CLASS}`]: {
      '&[data-state="active"]': {
        boxShadow: 'inset var(--indicatorSize) 0 0 0 currentColor',
      },
    },
    [`& .${TABS_LIST_CLASS}`]: {
      flexDirection: 'column',
    },
  },
} as RecipeVariantRecord

const variant = {
  brand: {
    [`& .${TABS_TAB_CLASS}`]: buttonVariants.brand,
    [`& .${TABS_LIST_CLASS}`]: {
      backgroundColor: '$brand',
    },
  },
  primary: {
    [`& .${TABS_TAB_CLASS}`]: buttonVariants.primary,
    [`& .${TABS_LIST_CLASS}`]: {
      backgroundColor: '$primary',
    },
  },
  secondary: {
    [`& .${TABS_TAB_CLASS}`]: {
      ...buttonVariants.secondary,
      '&[data-state="active"]': {
        boxShadow: 'none !important',
        backgroundColor: 'var(--active)',
        textDecoration: 'underline',
      },
    },
  },
  tertiary: {
    [`& .${TABS_TAB_CLASS}`]: buttonVariants.tertiary,
  },
} as RecipeVariantRecord

const tabs = cva({
  base: {
    '--indicatorSize': '2px',
    display: 'grid',
    gap: '0px 0px',
  },
  variants: {
    size,
    position,
    variant,
  },
  compoundVariants: [
    {
      variant: 'tertiary',
      position: 'top',
      css: {
        [`& .${TABS_LIST_CLASS}`]: {
          borderBottom: '1px solid $grey4',
        },
      } as SystemStyleObject,
    },
    {
      variant: 'tertiary',
      position: 'bottom',
      css: {
        [`& .${TABS_LIST_CLASS}`]: {
          borderTop: '1px solid $grey4',
        },
      } as SystemStyleObject,
    },
    {
      variant: 'tertiary',
      position: 'left',
      css: {
        [`& .${TABS_LIST_CLASS}`]: {
          borderRight: '1px solid $grey4',
        },
      } as SystemStyleObject,
    },
    {
      variant: 'tertiary',
      position: 'right',
      css: {
        [`& .${TABS_LIST_CLASS}`]: {
          borderLeft: '1px solid $grey4',
        },
      } as SystemStyleObject,
    },
  ],
  defaultVariants: {
    variant: 'tertiary',
    size: 'default',
    position: 'top',
  },
})

/**
 * Tabs can be used to switch between different views.
 *
 * Support positioning, `top`, `bottom`, `left` and `right`, and out standard variants, `primary`, `secondary`, `tertiary` and `brand`.
 */
export const Tabs = styled(withClasses(Root, TABS_CLASS), tabs)
