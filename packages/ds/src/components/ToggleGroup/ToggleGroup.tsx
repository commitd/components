'use client'

import { css, cva } from '@committed/ss/css'
import { styled } from '@committed/ss/jsx'
import {
  RecipeRuntimeFn,
  RecipeVariantProps,
  RecipeVariantRecord,
} from '@committed/ss/types/recipe'
import { Item, Root } from '@radix-ui/react-toggle-group'
import { CComponent, component } from '../../utils'
import {
  buttonBaseStyles,
  buttonColors,
  buttonInteractionStyles,
  buttonVariables,
  mainVariants,
} from '../Button/Button'

const TOGGLE_GROUP_CLASS = 'c-toggle-group'
const TOGGLE_ITEM_CLASS = 'c-toggle-item'

const defaultVariables = {
  '--onBackgroundColor': 'var(--base)',
  '--onColor': 'var(--text)',
}

const StyledItem = component(
  Item,
  TOGGLE_ITEM_CLASS,
  css(
    buttonVariables,
    buttonBaseStyles,
    buttonInteractionStyles,
    defaultVariables,
    {
      borderRadius: '0',
    },
  ),
)

const borderStyle = 'solid 2px'

const base = {
  ...buttonVariables,
  ...defaultVariables,
  backgroundColor: 'transparent',
  borderRadius: '$default',
  width: 'fit-content',
  boxSizing: 'border-box',

  _notVertical: {
    display: 'inline-flex',
    [`& .c-toggle-item:first-child`]: {
      borderTopLeftRadius: '$default',
      borderBottomLeftRadius: '$default',
    },
    [`& .c-toggle-item:last-child`]: {
      borderTopRightRadius: '$default',
      borderBottomRightRadius: '$default',
    },
  },
  _vertical: {
    display: 'inline-flex',
    flexDirection: 'column',
    [`& .c-toggle-item:first-child`]: {
      borderTopLeftRadius: '$default',
      borderTopRightRadius: '$default',
    },
    [`& .c-toggle-item:last-child`]: {
      borderBottomLeftRadius: '$default',
      borderBottomRightRadius: '$default',
    },
  },

  [`& .c-toggle-item[data-state=on]`]: {
    backgroundColor: 'var(--onBackgroundColor)',
    color: 'var(--onColor)',
    '--hover': 'var(--solid)',
    '--focus': 'var(--solid)',
  },
}

const variants = {
  color: buttonColors,
  variant: {
    solid: {
      [`& .c-toggle-item`]: {
        ...mainVariants.solid,
        backgroundColor: 'var(--text)',
        color: 'var(--base)',
        '--onBackgroundColor': 'var(--base)',
        '--onColor': 'var(--text)',
      },
    },
    outline: {
      [`& .c-toggle-item`]: {
        ...mainVariants.outline,
        borderColor: 'var(--text)',
        '--onBackgroundColor': 'var(--base)',
      },
      _notVertical: {
        [`& .c-toggle-item`]: {
          borderTop: borderStyle,
          borderBottom: borderStyle,
        },
        [`& .c-toggle-item:first-child`]: {
          borderLeft: borderStyle,
        },
        [`& .c-toggle-item:last-child`]: {
          borderRight: borderStyle,
        },
      },
      _vertical: {
        [`& .c-toggle-item`]: {
          borderRight: borderStyle,
          borderLeft: borderStyle,
        },
        [`& .c-toggle-item:first-child`]: {
          borderTop: borderStyle,
        },
        [`& .c-toggle-item:last-child`]: {
          borderBottom: borderStyle,
        },
      },
    },
    text: {
      [`& .c-toggle-item`]: {
        ...mainVariants.text,
        '--onBackgroundColor': 'var(--base)',
      },
    },
  },
  size: {
    small: {
      [`& .c-toggle-item`]: {
        width: '$5',
        height: '$5',
        '& > svg': {
          width: '$4',
          height: '$4',
        },
      },
    },
    default: {
      [`& .c-toggle-item`]: {
        width: '$6',
        height: '$6',
      },
    },
    large: {
      [`& .c-toggle-item`]: {
        width: '$7',
        height: '$7',
        '& > svg': {
          width: '$6',
          height: '$6',
        },
      },
    },
  },
} satisfies RecipeVariantRecord

const toggleGroup: RecipeRuntimeFn<typeof variants> = cva({
  base,
  variants,
  defaultVariants: {
    variant: 'outline',
    color: '$primary',
    size: 'default',
  },
})

type Variants = RecipeVariantProps<typeof toggleGroup>

/**
 * Toggle Group Component
 *
 * Based on [Radix Toggle Group](https://www.radix-ui.com/docs/primitives/components/toggle-group).
 */
export const ToggleGroup: CComponent<typeof Root, Variants> = styled(
  component(Root, TOGGLE_GROUP_CLASS),
  toggleGroup,
)
export const ToggleGroupItem = StyledItem
