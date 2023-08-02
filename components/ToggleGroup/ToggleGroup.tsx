import { css, cva } from '@committed/ss/css'
import { styled } from '@committed/ss/jsx'
import { SystemStyleObject } from '@committed/ss/types'
import {
    RecipeRuntimeFn,
    RecipeVariantRecord,
} from '@committed/ss/types/recipe'
import { Item, Root } from '@radix-ui/react-toggle-group'
import { withClasses } from '../../utils'
import { buttonBaseStyle, buttonInteractionStyles } from '../Button/Button'

const TOGGLE_GROUP_CLASS = 'c-toggle-group'
const TOGGLE_ITEM_CLASS = 'c-toggle-item'

const defaultVariables = {
  '--main': 'token(colors.$primary)',
  '--mainHover': 'token(colors.$primaryHighlight)',
  '--contrast': 'token(colors.$primaryContrast)',
  '--active': 'token(colors.$defaultActive)',
  '--default': 'token(colors.$default)',
  '--defaultHover': 'token(colors.$defaultHighlight)',
  '--lowlight': 'token(colors.$defaultLowlight)',
  '--onBackgroundColor': 'token(colors.$defaultHighlight)',
  '--onColor': 'var(--main)',
}

const StyledItem = withClasses(
  Item,
  TOGGLE_ITEM_CLASS,
  css(buttonBaseStyle),
  css(buttonInteractionStyles),
  css({
    borderRadius: '0',
  })
)

const borderStyle = 'solid 2px token(colors.$default)'

const base = {
  ...defaultVariables,
  backgroundColor: 'transparent',
  borderRadius: '$default',
  width: 'fit-content',
  boxSizing: 'border-box',

  _notVertical: {
    display: 'inline-flex',
    [`& .${TOGGLE_ITEM_CLASS}:first-child`]: {
      borderTopLeftRadius: '$default',
      borderBottomLeftRadius: '$default',
    },
    [`& .${TOGGLE_ITEM_CLASS}:last-child`]: {
      borderTopRightRadius: '$default',
      borderBottomRightRadius: '$default',
    },
  },
  _vertical: {
    display: 'inline-flex',
    flexDirection: 'column',
    [`& .${TOGGLE_ITEM_CLASS}:first-child`]: {
      borderTopLeftRadius: '$default',
      borderTopRightRadius: '$default',
    },
    [`& .${TOGGLE_ITEM_CLASS}:last-child`]: {
      borderBottomLeftRadius: '$default',
      borderBottomRightRadius: '$default',
    },
  },

  [`& .${TOGGLE_ITEM_CLASS}[data-state=on]`]: {
    backgroundColor: 'var(--onBackgroundColor)',
    color: 'var(--onColor)',
    '--hover': 'var(--defaultHover)',
  },
} as SystemStyleObject

const variants = {
  variant: {
    primary: {
      [`& .${TOGGLE_ITEM_CLASS}`]: {
        '--active': 'token(colors$primaryActive)',
        '--lowlight': 'token(colors$primaryLowlight)',
        '--hover': 'var(--mainHover)',
        backgroundColor: 'var(--main)',
        color: 'var(--contrast)',
        '--onBackgroundColor': 'var(--contrast)',
      },
    } as SystemStyleObject,
    secondary: {
      [`& .${TOGGLE_ITEM_CLASS}`]: {
        color: 'var(--default)',
        '--hover': 'var(--defaultHover)',
        '--onBackgroundColor': 'var(--contrast)',
      },
      _notVertical: {
        [`& .${TOGGLE_ITEM_CLASS}`]: {
          borderTop: borderStyle,
          borderBottom: borderStyle,
        },
        [`& .${TOGGLE_ITEM_CLASS}:first-child`]: {
          borderLeft: borderStyle,
        },
        [`& .${TOGGLE_ITEM_CLASS}:last-child`]: {
          borderRight: borderStyle,
        },
      },
      _vertical: {
        [`& .${TOGGLE_ITEM_CLASS}`]: {
          borderRight: borderStyle,
          borderLeft: borderStyle,
        },
        [`& .${TOGGLE_ITEM_CLASS}:first-child`]: {
          borderTop: borderStyle,
        },
        [`& .${TOGGLE_ITEM_CLASS}:last-child`]: {
          borderBottom: borderStyle,
        },
      },
    } as SystemStyleObject,
    tertiary: {
      [`& .${TOGGLE_ITEM_CLASS}`]: {
        color: 'var(--default)',
        $$hover: 'var(--defaultHover)',
        $$onColor: 'token(colors.$brandContrast)',
      },
    } as SystemStyleObject,
  },
  size: {
    small: {
      [`& .${TOGGLE_ITEM_CLASS}`]: {
        w: '$5',
        h: '$5',
        '& > svg': {
          w: '$4',
          h: '$4',
        },
      },
    } as SystemStyleObject,
    default: {
      [`& .${TOGGLE_ITEM_CLASS}`]: {
        w: '$6',
        h: '$6',
      },
    } as SystemStyleObject,
    large: {
      [`& .${TOGGLE_ITEM_CLASS}`]: {
        w: '$7',
        h: '$7',
        '& > svg': {
          w: '$6',
          h: '$6',
        },
      },
    } as SystemStyleObject,
  },
} satisfies RecipeVariantRecord

const toggleGroup: RecipeRuntimeFn<typeof variants> = cva({
  base,
  variants,
  defaultVariants: {
    variant: 'secondary',
    size: 'default',
  },
})

/**
 * Toggle Group Component
 *
 * Based on [Radix Toggle Group](https://www.radix-ui.com/docs/primitives/components/toggle-group).
 */
export const ToggleGroup = styled(
  withClasses(Root, TOGGLE_GROUP_CLASS),
  toggleGroup
)
export const ToggleGroupItem = StyledItem
