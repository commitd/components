'use client'
import { RecipeVariantProps, css, cva } from '@committed/ss/css'
import { styled } from '@committed/ss/jsx'
import { SystemStyleObject } from '@committed/ss/types'
import { Content, List, Root, Trigger } from '@radix-ui/react-tabs'
import { CComponent, component } from '../../utils'
import {
  buttonBaseStyles,
  buttonVariables,
  mainVariants as buttonVariants,
} from '../Button/Button'
const TABS_CLASS = 'c-tabs'
const TABS_TAB_CLASS = 'c-tabs-tab'
const TABS_LIST_CLASS = 'c-tabs-list'
const TABS_CONTENT_CLASS = 'c-tabs-content'

export const Tab = component(
  Trigger,
  TABS_TAB_CLASS,
  css(buttonBaseStyles),
  css({
    cursor: 'pointer',
    minWidth: '160px',
    borderRadius: '0 !important',
    border: 'none',

    '&[data-state="active"]': {
      cursor: 'auto',
    },
  }),
)

export const TabsList = component(
  List,
  TABS_LIST_CLASS,
  css({
    display: 'flex',
    gridArea: 'tabs',
  }),
)

export const TabContent = component(
  Content,
  TABS_CONTENT_CLASS,
  css({
    padding: '$3',
    gridArea: 'content',
  }),
)

const tabs = cva({
  base: {
    '--tab-indicator-size': '2px',
    '--tab-shadow': 'currentColor',
    ...buttonVariables,
    display: 'grid',
    gap: '0px 0px',
  },
  variants: {
    size: {
      small: {
        '--tab-indicator-size': '1px',
        [`& .${TABS_TAB_CLASS}`]: {
          paddingLeft: '$3',
          paddingRight: '$3',
          height: '$5',
          fontSize: '$-1',
        },
      } as SystemStyleObject,
      default: {
        [`--tab-indicator-size`]: '2px',
        [`& .${TABS_TAB_CLASS}`]: {
          paddingLeft: '$4',
          paddingRight: '$4',
          height: '$6',
        },
      } as SystemStyleObject,
      large: {
        [`--tab-indicator-size`]: '4px',
        [`& .${TABS_TAB_CLASS}`]: {
          paddingLeft: '$6',
          paddingRight: '$6',
          height: '$7',
        },
      } as SystemStyleObject,
    },
    position: {
      top: {
        gridTemplateColumns: '1fr',
        gridTemplateRows: 'auto 1fr',
        gridTemplateAreas: `"tabs" "content"`,
        [`& .${TABS_TAB_CLASS}`]: {
          '&[data-state="active"]': {
            boxShadow:
              'inset 0 calc(var(--tab-indicator-size)*-1) 0 0 var(--tab-shadow)',
          },
        },
        [`& .${TABS_LIST_CLASS}`]: {
          flexDirection: 'row',
        },
      } as SystemStyleObject,
      bottom: {
        gridTemplateColumns: '1fr',
        gridTemplateRows: '1fr auto',
        gridTemplateAreas: `"content" "tabs"`,
        [`& .${TABS_TAB_CLASS}`]: {
          '&[data-state="active"]': {
            boxShadow:
              'inset 0 var(--tab-indicator-size) 0 0 var(--tab-shadow)',
          },
        },
        [`& .${TABS_LIST_CLASS}`]: {
          flexDirection: 'row',
        },
      } as SystemStyleObject,
      left: {
        gridTemplateColumns: 'auto 1fr',
        gridTemplateRows: '1fr',
        gridTemplateAreas: `"tabs content"`,
        [`& .${TABS_TAB_CLASS}`]: {
          '&[data-state="active"]': {
            boxShadow:
              'inset calc(var(--tab-indicator-size)*-1) 0 0 0 var(--tab-shadow)',
          },
        },
        [`& .${TABS_LIST_CLASS}`]: {
          flexDirection: 'column',
        },
      } as SystemStyleObject,
      right: {
        gridTemplateColumns: '1fr auto',
        gridTemplateRows: '1fr',
        gridTemplateAreas: `"content tabs"`,
        [`& .${TABS_TAB_CLASS}`]: {
          '&[data-state="active"]': {
            boxShadow:
              'inset var(--tab-indicator-size) 0 0 0 var(--tab-shadow)',
          },
        },
        [`& .${TABS_LIST_CLASS}`]: {
          flexDirection: 'column',
        },
      } as SystemStyleObject,
    },
    variant: {
      solid: {
        [`& .${TABS_TAB_CLASS}`]: buttonVariants.solid,
        [`& .${TABS_LIST_CLASS}`]: {
          backgroundColor: '$primary',
        },
      } as SystemStyleObject,
      outline: {
        [`& .${TABS_TAB_CLASS}`]: {
          ...buttonVariants.outline,
          '--tab-shadow': 'transparent',
          border: 'var(--contrast) solid 2px',
          backgroundColor: 'var(--bg)',
          color: 'var(--contrast)',
          '&[data-state="active"]': {
            boxShadow: 'none !important',
            textDecoration: 'underline',
          },
        },
      } as SystemStyleObject,
      text: {
        [`& .${TABS_TAB_CLASS}`]: buttonVariants.text,
      } as SystemStyleObject,
    },
  },
  compoundVariants: [
    {
      variant: 'text',
      position: 'top',
      css: {
        [`& .${TABS_LIST_CLASS}`]: {
          borderBottom: '1px solid token(colors.$neutral.4)',
        },
      } as SystemStyleObject,
    },
    {
      variant: 'text',
      position: 'bottom',
      css: {
        [`& .${TABS_LIST_CLASS}`]: {
          borderTop: '1px solid token(colors.$neutral.4)',
        },
      } as SystemStyleObject,
    },
    {
      variant: 'text',
      position: 'left',
      css: {
        [`& .${TABS_LIST_CLASS}`]: {
          borderRight: '1px solid token(colors.$neutral.4)',
        },
      } as SystemStyleObject,
    },
    {
      variant: 'text',
      position: 'right',
      css: {
        [`& .${TABS_LIST_CLASS}`]: {
          borderLeft: '1px solid token(colors.$neutral.4)',
        },
      } as SystemStyleObject,
    },
  ],
  defaultVariants: {
    variant: 'text',
    size: 'default',
    position: 'top',
  },
})

/**
 * Tabs can be used to switch between different views.
 *
 * Support positioning, `top`, `bottom`, `left` and `right`, and out standard variants, `primary`, `secondary`, `tertiary` and `brand`.
 */
export const Tabs: CComponent<
  typeof Root,
  RecipeVariantProps<typeof tabs>
> = styled(component(Root, TABS_CLASS), tabs)
