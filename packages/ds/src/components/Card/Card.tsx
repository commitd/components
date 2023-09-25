import { css, cva } from '@committed/ss/css'
import { styled } from '@committed/ss/jsx'
import { RecipeVariantProps } from '@committed/ss/types/recipe'
import { ComponentProps, ElementRef, forwardRef } from 'react'
import { CComponent, component } from '../../utils'
import { Paper, paperStyles } from '../Paper/Paper'
import { Text, text } from '../Text/Text'

const card = cva({
  base: {
    textDecoration: 'none',
    flexShrink: 0,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',

    width: 'fit-content',
    backgroundColor: '$card',

    _before: {
      inset: 0,
      position: 'absolute',
      pointerEvents: 'none',
      borderRadius: 'inherit',
      _motionReduce: { transition: 'none' },
      transition: 'box-shadow 180ms',
      content: "''",
    },
  },
  variants: {
    variant: {
      default: {
        _before: {
          boxShadow: '$1',
        },
      },
      outline: {
        _before: {
          boxShadow: 'inset 0 0 0 1px token(colors.$neutral.4)',
        },
      },
      ghost: {
        backgroundColor: 'transparent',

        _motionSafe: {
          transition:
            'transform 200ms cubic-bezier(0.22, 1, 0.36, 1), background-color 25ms linear',
        },
        willChange: 'transform',
        _before: {
          boxShadow: '$1',
          opacity: '0',
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
            boxShadow: 'inset 0 0 0 1px token(colors.$neutral.6)',
          },
        },
        _focus: {
          _before: {
            boxShadow:
              'inset 0 0 0 1px token(colors.$neutral.6), 0 0 0 1px token(colors.$neutral.4)',
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
          backgroundColor: '$card',
          transform: 'translateY(-2px)',
          _before: {
            opacity: '1',
            boxShadow: 'token(shadows.$1)',
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
            'inset 0 0 0 1px token(colors.$neutral.2), 0 0 0 1px token(colors.$neutral.2)',
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
export const Card: CComponent<
  typeof Paper,
  RecipeVariantProps<typeof card>
> = styled(component('div', 'c-card', paperStyles), card)
Card.displayName = 'Card'

// CARD_CONTENT *************************************************************

export const CardContent = component(
  'div',
  css({
    padding: '$4',
    flex: 1,
  }),
)
CardContent.displayName = 'CardContent'

/**
 * @deprecated Use CardContent instead.
 */
export const CardBody = CardContent

// CARD_HEADING *************************************************************

const CARD_HEADING_TAG = 'div'

export const StyledHeading = component(
  styled(CARD_HEADING_TAG, text),
  'c-card-heading',
  css({
    px: '$4',
    position: 'relative',
    width: '100%',
    mt: '$4',
    mb: '-$1',
    display: 'flex',
    justifyContent: 'space-between',

    '& .c-icon-button': {
      color: '$text.secondary',
      right: 0,
    },
  }),
)

type CardHeadingProps = ComponentProps<typeof CARD_HEADING_TAG> &
  ComponentProps<typeof Text>

export const CardHeading = forwardRef<
  ElementRef<typeof StyledHeading>,
  CardHeadingProps
>((props, forwardedRef) => {
  return <StyledHeading size="$1" weight="bold" {...props} ref={forwardedRef} />
})
CardHeading.displayName = 'CardHeading'

// CARD_SUBHEADING *************************************************************

const CARD_SUBHEADING_TAG = 'div'

export const StyledSubheading = component(
  styled(CARD_SUBHEADING_TAG, text),
  'c-card-subheading',
  css({
    px: '$4',
    color: '$text.secondary',
    mt: '$1',
    mb: '-$1',
  }),
)

type CardSubheadingProps = ComponentProps<typeof CARD_SUBHEADING_TAG> &
  ComponentProps<typeof Text>

export const CardSubheading = forwardRef<
  ElementRef<typeof StyledSubheading>,
  CardSubheadingProps
>((props, forwardedRef) => {
  return (
    <StyledSubheading size="$-1" weight="light" {...props} ref={forwardedRef} />
  )
})
CardSubheading.displayName = 'CardSubheading'

// CARD_LEAD_IN ****************************************************************

const CARD_LEAD_IN_TAG = 'div'

export const StyledLeadIn = component(
  styled(CARD_LEAD_IN_TAG, text),
  'c-card-lead-in',
  css({
    px: '$4',
    position: 'relative',
    width: '100%',
    color: '$text.secondary',
    textTransform: 'uppercase',
    mt: '$4',
    mb: '-$3',

    [`& .c-icon-button`]: {
      position: 'absolute',
      color: '$text.secondary',
      right: '$4',
      top: '0',
    },
  }),
)

type CardLeadInProps = ComponentProps<typeof CARD_LEAD_IN_TAG> &
  ComponentProps<typeof Text>

export const CardLeadIn = forwardRef<
  ElementRef<typeof StyledLeadIn>,
  CardLeadInProps
>((props, forwardedRef) => {
  return <StyledLeadIn size="$-2" {...props} ref={forwardedRef} />
})
CardLeadIn.displayName = 'CardLeadIn'

// CARD_ACTIONS ****************************************************************

export const CardActions = component(
  'div',
  css({
    display: 'flex',
    gap: '$2',
    justifyContent: 'flex-end',
    mt: '$3',
    padding: '$4',
  }),
)
CardActions.displayName = 'CardActions'
