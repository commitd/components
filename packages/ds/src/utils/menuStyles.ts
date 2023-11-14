import { RecipeVariantProps, css, cva } from '@committed/ds-ss'

export const itemCva = cva({
  base: {
    fontSize: '$0',
    cursor: 'default',
    borderRadius: '$default',
    backgroundColor: 'transparent',
    border: 'none',
    color: '$text',
    outline: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    _motionSafe: {
      transition: 'all 50ms',
    },

    _focus: {
      background: '$selection',
      cursor: 'pointer',
      color: '$text',
    },

    _disabled: {
      color: '$neutral.9',
    },
  },

  variants: {
    destructive: {
      false: {},
      true: {
        color: '$error',
        _focus: {
          background: '$error.3',
        },
      },
    },
  },
})

export type ItemVariants = RecipeVariantProps<typeof itemCva>

export const separatorCva = cva({
  base: {
    height: 1,
    backgroundColor: '$neutral.7',
  },
  variants: {
    orientation: {
      horizontal: {
        height: 1,
        my: '$1',
      },
      vertical: {
        width: 1,
        height: 'auto',
        mx: '$1',
        flex: '1 1 100%',
      },
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
})

export const labelStyles = css({
  color: '$neutral.10',
  fontSize: '$-1',
  px: '$3',
  py: '$2',
  paddingBottom: '$1',
  cursor: 'default',
})

export const itemShortcutStyles = css({
  fontFamily: '$monospace',
  lineHeight: '$body',
  color: '$text.secondary',
  marginLeft: '$3',
})

export const contentStyles = css({
  minWidth: '$10',
  padding: '$1',
  boxShadow: '$2',
})

export const itemIndicatorStyles = css({
  position: 'absolute',
  left: '$2',
})

export const baseItemStyles = css({
  pt: '$2',
  pr: '$3',
  pb: '$2',
  pl: '$3',
})

export const checkboxItemStyles = css({
  pt: '$1',
  pr: '$2',
  pb: '$1',
  pl: '$6',
})

export const triggerItemStyles = css({
  _open: {
    background: '$selection',
  },
})

export const indicatorStyles = css({ size: '$4' })
