import { css, cva } from '@committed/ss/css'
import { styled } from '@committed/ss/jsx'
import { ComponentProps, ElementRef, forwardRef } from 'react'
import { withClasses } from '../../utils'
import { Paper } from '../Paper'
import { Text } from '../Text'

const card = cva({
  base: {
    textDecoration: 'none',
    flexShrink: 0,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',

    width: 'fit-content',
  },
  variants: {
    variant: {
      default: {},
      outline: {
        _before: {
          boxShadow: 'inset 0 0 0 1px token(colors.$grey4)',
        },
      },
      ghost: {
        backgroundColor: 'transparent',
        _motionReduce: { transition: 'none' },
        _motionSafe: {
          transition:
            'transform 200ms cubic-bezier(0.22, 1, 0.36, 1), background-color 25ms linear',
        },
        willChange: 'transform',
        _before: {
          opacity: '0',
          _motionReduce: { transition: 'none' },
          _motionSafe: {
            transition: 'all 200ms cubic-bezier(0.22, 1, 0.36, 1)',
          },
        },
      },
    },
    interactive: {
      true: {
        _before: {
          pointerEvents: 'auto',
        },
      },
    },
  },

  compoundVariants: [
    {
      interactive: true,
      variant: 'default',
      css: {
        _hover: {
          boxShadow: 'hover',
        },
        _focus: {
          boxShadow: 'focus',
        },
      },
    },
    {
      interactive: true,
      variant: 'outline',
      css: {
        _hover: {
          _before: {
            boxShadow: 'inset 0 0 0 1px token(colors.$grey6)',
          },
        },
        _focus: {
          _before: {
            boxShadow:
              'inset 0 0 0 1px token(colors.$grey6), 0 0 0 1px token(colors.$grey4)',
          },
        },
      },
    },
    {
      interactive: true,
      variant: 'ghost',
      css: {
        willChange: 'transform',
        _hover: {
          backgroundColor: '$paper',
          transform: 'translateY(-2px)',
          _before: {
            opacity: '1',
          },
        },
        _active: {
          transform: 'translateY(0)',
          transition: 'none',
          _before: {
            boxShadow: '$3',
            opacity: '1',
          },
        },
        _focus: {
          boxShadow:
            'inset 0 0 0 1px token(colors.$grey2), 0 0 0 1px token(colors.$grey2)',
        },
      },
    },
  ],

  defaultVariants: {
    variant: 'default',
  },
})

/**
 * Use Card component to group elements onto a card.
 */
export const Card = styled(Paper, card)
Card.displayName = 'Card'

// CARD_CONTENT *************************************************************

export const CardContent = withClasses(
  'div',
  css({
    padding: 4,
    flex: 1,
  })
)
CardContent.displayName = 'CardContent'

/**
 * @deprecated Use CardContent instead.
 */
export const CardBody = CardContent

// CARD_HEADING *************************************************************

export const StyledHeading = withClasses(
  Text,
  css({
    px: '$4',
    position: 'relative',
    width: '100%',
    mt: '$4',
    mb: '-$1',
    display: 'flex',
    justifyContent: 'space-between',

    '& .c-icon-button': {
      color: '$textSecondary',
      right: 0,
    },
  })
)

const CARD_HEADING_TAG = 'div'

type CardHeadingProps = ComponentProps<typeof CARD_HEADING_TAG> &
  ComponentProps<typeof Text>

export const CardHeading = forwardRef<
  ElementRef<typeof StyledHeading>,
  CardHeadingProps
>((props, forwardedRef) => {
  return (
    <StyledHeading
      //as={CARD_HEADING_TAG}
      size="1"
      weight="bold"
      {...props}
      ref={forwardedRef}
    />
  )
})
CardHeading.displayName = 'CardHeading'

// CARD_SUBHEADING *************************************************************

export const StyledSubheading = withClasses(
  Text,
  css({
    px: '$4',
    color: '$textSecondary',
    mt: '$1',
    mb: '-$1',
  })
)

const CARD_SUBHEADING_TAG = 'div'

type CardSubheadingProps = ComponentProps<typeof CARD_SUBHEADING_TAG> &
  ComponentProps<typeof Text>

export const CardSubheading = forwardRef<
  ElementRef<typeof StyledSubheading>,
  CardSubheadingProps
>((props, forwardedRef) => {
  return (
    <StyledSubheading
      //as={CARD_SUBHEADING_TAG}
      size="-1"
      weight="light"
      {...props}
      ref={forwardedRef}
    />
  )
})
CardSubheading.displayName = 'CardSubheading'

// CARD_LEADING ****************************************************************

export const StyledLeadIn = withClasses(
  Text,
  css({
    px: '$4',
    position: 'relative',
    width: '100%',
    color: '$textSecondary',
    textTransform: 'uppercase',
    mt: '$4',
    mb: '-$3',

    // [`& .${ICON_BUTTON_CLASS}`]: {
    //   position: 'absolute',
    //   color: 'textSecondary',
    //   right: '0',
    //   top: '0',
    // },
  })
)

const CARD_LEAD_IN_TAG = 'div'

type CardLeadInProps = ComponentProps<typeof CARD_LEAD_IN_TAG> &
  ComponentProps<typeof Text>

export const CardLeadIn = forwardRef<
  ElementRef<typeof StyledLeadIn>,
  CardLeadInProps
>((props, forwardedRef) => {
  return (
    <StyledLeadIn
      as={CARD_LEAD_IN_TAG}
      size="-2"
      {...props}
      ref={forwardedRef}
    />
  )
})
CardLeadIn.displayName = 'CardLeadIn'

// CARD_ACTIONS ****************************************************************

export const CardActions = withClasses(
  'div',
  css({
    display: 'flex',
    gap: '$2',
    justifyContent: 'flex-end',
    mt: '$3',
    padding: '$4',
  })
)
CardActions.displayName = 'CardActions'
