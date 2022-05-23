import { Item, Root } from '@radix-ui/react-toggle-group'
import { styled } from '../../stitches.config'
import { iconButtonStyles } from '../IconButton'

const defaultVariables = {
  $$main: '$colors$primary',
  $$mainHover: '$colors$primaryHighlight',
  $$contrast: '$colors$primaryContrast',
  $$active: '$colors$defaultActive',
  $$default: '$colors$default',
  $$defaultHover: '$colors$defaultHighlight',
  $$lowlight: '$colors$defaultLowlight',
  $$onBackgroundColor: '$colors$defaultHighlight',
  $$onColor: '$$main',
}

const StyledItem = styled(Item, iconButtonStyles, {
  borderRadius: '0',
})

const borderStyle = 'solid 2px $colors$default'

const StyledToggleGroup = styled(Root, {
  ...defaultVariables,
  backgroundColor: 'transparent',
  borderRadius: '$default',
  width: 'fit-content',
  boxSizing: 'border-box',

  '&:not([data-orientation=vertical])': {
    display: 'inline-flex',
    [`& ${StyledItem}:first-child`]: {
      borderTopLeftRadius: '$default',
      borderBottomLeftRadius: '$default',
    },
    [`& ${StyledItem}:last-child`]: {
      borderTopRightRadius: '$default',
      borderBottomRightRadius: '$default',
    },
  },
  '&[data-orientation=vertical]': {
    display: 'inline-flex',
    flexDirection: 'column',
    [`& ${StyledItem}:first-child`]: {
      borderTopLeftRadius: '$default',
      borderTopRightRadius: '$default',
    },
    [`& ${StyledItem}:last-child`]: {
      borderBottomLeftRadius: '$default',
      borderBottomRightRadius: '$default',
    },
  },

  [`& ${StyledItem}[data-state=on]`]: {
    backgroundColor: '$$onBackgroundColor',
    color: '$$onColor',
    $$hover: '$$defaultHover',
  },

  variants: {
    variant: {
      primary: {
        [`& ${StyledItem}`]: {
          $$active: '$colors$primaryActive',
          $$lowlight: '$colors$primaryLowlight',
          $$hover: '$$mainHover',
          backgroundColor: '$$main',
          color: '$$contrast',
          $$onBackgroundColor: '$$contrast',
        },
      },
      secondary: {
        [`& ${StyledItem}`]: {
          color: '$$default',
          $$hover: '$$defaultHover',
          $$onBackgroundColor: '$$contrast',
        },
        '&:not([data-orientation=vertical])': {
          [`& ${StyledItem}`]: {
            borderTop: borderStyle,
            borderBottom: borderStyle,
          },
          [`& ${StyledItem}:first-child`]: {
            borderLeft: borderStyle,
          },
          [`& ${StyledItem}:last-child`]: {
            borderRight: borderStyle,
          },
        },
        '&[data-orientation=vertical]': {
          [`& ${StyledItem}`]: {
            borderRight: borderStyle,
            borderLeft: borderStyle,
          },
          [`& ${StyledItem}:first-child`]: {
            borderTop: borderStyle,
          },
          [`& ${StyledItem}:last-child`]: {
            borderBottom: borderStyle,
          },
        },
      },
      tertiary: {
        [`& ${StyledItem}`]: {
          color: '$$default',
          $$hover: '$$defaultHover',
          $$onColor: '$colors$brandContrast',
        },
      },
    },
    size: {
      [`& ${StyledItem}`]: {
        small: {
          size: '$5',
          '& > svg': {
            size: '$4',
          },
        },
      },
      default: {
        [`& ${StyledItem}`]: {
          size: '$6',
        },
      },
      large: {
        [`& ${StyledItem}`]: {
          size: '$7',
          '& > svg': {
            size: '$6',
          },
        },
      },
    },
  },

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
export const ToggleGroup = StyledToggleGroup
export const ToggleGroupItem = StyledItem
