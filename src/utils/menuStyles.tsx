import React from 'react'
import { Check, ChevronRight } from '../components/Icons'
import { css, styled } from '../stitches.config'

export const itemStyles = css({
  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },
  fontSize: '$0',
  padding: '$2 $3',
  cursor: 'default',
  borderRadius: '$default',
  backgroundColor: 'transparent',
  border: 'none',
  color: '$text',
  outline: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  _motionReduce: { transition: 'none' },
  _motionSafe: {
    transition: 'all 50ms',
  },

  '&:focus': {
    background: '$selection',
    cursor: 'pointer',
    color: '$text',
  },

  '&[data-disabled]': {
    color: '$grey9',
  },

  variants: {
    destructive: {
      false: {},
      true: {
        color: '$error',
        '&:focus': {
          background: '$errorBackground',
        },
      },
    },
  },
})

export const separatorStyles = css({
  height: 1,
  backgroundColor: '$grey7',

  variants: {
    orientation: {
      horizontal: {
        height: 1,
        margin: '$1 0',
      },
      vertical: {
        width: 1,
        height: 'auto',
        margin: '0 $1',
        flex: '1 1 100%',
      },
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
})

export const labelStyles = css({
  color: '$grey10',
  fontSize: '$-1',
  padding: '$2 $3',
  paddingBottom: '$1',
  cursor: 'default',
})

export const groupStyles = (Item: React.ReactNode): ReturnType<typeof css> =>
  css({
    display: 'flex',
    marginLeft: '$3',
    marginRight: '$1',

    [`& ${Item}`]: {
      paddingLeft: '$2',
    },
  })

export const itemShortcutStyles = css({
  fontFamily: '$monospace',
  lineHeight: '$body',
  color: '$textSecondary',
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

export const checkboxItemStyles = css({
  padding: '$1 $2 $1 $5',
  //paddingLeft: '$6',
})

export const triggerItemStyles = css({
  '&[data-state="open"]': {
    background: '$selection',
  },
})

const indicatorStyles = css({ size: '$4' })

export const StyledSubTriggerIndicator = styled(ChevronRight, indicatorStyles)
export const StyledCheckIndicator = styled(Check, indicatorStyles)
