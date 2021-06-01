import { styled } from 'stitches.config'

/**
 * Use Card component to group elements onto a card.
 */
export const Card = styled('div', {
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  font: 'inherit',
  lineHeight: '$none',
  outline: 'none',
  padding: '$4',
  textAlign: 'inherit',
  verticalAlign: 'middle',
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',

  backgroundColor: '$paper',
  display: 'flex',
  flexDirection: 'column',
  textDecoration: 'none',
  color: '$text',
  flexShrink: 0,
  borderRadius: '$default',
  position: 'relative',

  width: 'fit-content',

  '&::before': {
    boxSizing: 'border-box',
    content: '""',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: '$default',
    pointerEvents: 'none',
  },

  pointerEvents: 'none',

  variants: {
    variant: {
      default: {
        '&::before': {
          boxShadow: '$1',
        },
        '&:hover': {
          boxShadow: 'inset 0 0 0 1px $colors$grey2',
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$grey2, 0 0 0 1px $colors$grey2',
        },
      },
      outline: {
        '&::before': {
          boxShadow: 'inset 0 0 0 1px $colors$grey3',
        },
        '&:hover': {
          '&::before': {
            boxShadow: 'inset 0 0 0 1px $colors$grey4',
          },
        },
        '&:focus': {
          '&::before': {
            boxShadow: 'inset 0 0 0 1px $colors$grey4, 0 0 0 1px $colors$grey4',
          },
        },
      },
      ghost: {
        backgroundColor: 'transparent',
        transition:
          'transform 200ms cubic-bezier(0.22, 1, 0.36, 1), background-color 25ms linear',
        willChange: 'transform',
        '&::before': {
          boxShadow: '$1',
          opacity: '0',
          transition: 'all 200ms cubic-bezier(0.22, 1, 0.36, 1)',
        },
        '@hover': {
          '&:hover': {
            backgroundColor: '$paper',
            transform: 'translateY(-2px)',
            '&::before': {
              opacity: '1',
            },
          },
        },
        '&:active': {
          transform: 'translateY(0)',
          transition: 'none',
          '&::before': {
            boxShadow: '$3',
            opacity: '1',
          },
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$grey2, 0 0 0 1px $colors$grey2',
        },
      },
    },
    interactive: {
      true: {
        pointerEvents: 'auto',
      },
    },
  },

  defaultVariants: {
    variant: 'default',
  },
})
