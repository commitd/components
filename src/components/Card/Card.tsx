import type * as Polymorphic from '@radix-ui/react-polymorphic'
import React, { forwardRef } from 'react'
import type { CSSProps, StitchesVariants } from 'stitches.config'
import { CSS, styled } from 'stitches.config'
import { IconButton } from '../IconButton'
import { Paper } from '../Paper'
import { StyledText } from '../Text/Text'

/**
 * Use Card component to group elements onto a card.
 */
export const Card = styled(Paper, {
  textDecoration: 'none',
  flexShrink: 0,
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',

  width: 'fit-content',

  variants: {
    variant: {
      default: {},
      outline: {
        '&::before': {
          boxShadow: 'inset 0 0 0 1px $colors$grey4',
        },
      },
      ghost: {
        backgroundColor: 'transparent',
        transition:
          'transform 200ms cubic-bezier(0.22, 1, 0.36, 1), background-color 25ms linear',
        willChange: 'transform',
        '&::before': {
          opacity: '0',
          transition: 'all 200ms cubic-bezier(0.22, 1, 0.36, 1)',
        },
      },
    },
    interactive: {
      true: {
        '&::before': {
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
        '&:hover': {
          boxShadow: '$hover',
        },
        '&:focus': {
          boxShadow: '$focus',
        },
      },
    },
    {
      interactive: true,
      variant: 'outline',
      css: {
        '&:hover': {
          '&::before': {
            boxShadow: 'inset 0 0 0 1px $colors$grey6',
          },
        },
        '&:focus': {
          '&::before': {
            boxShadow: 'inset 0 0 0 1px $colors$grey6, 0 0 0 1px $colors$grey4',
          },
        },
      },
    },
    {
      interactive: true,
      variant: 'ghost',
      css: {
        willChange: 'transform',
        '&:hover': {
          backgroundColor: '$paper',
          transform: 'translateY(-2px)',
          '&::before': {
            opacity: '1',
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
  ],

  defaultVariants: {
    variant: 'default',
  },
})

export const CardBody = styled('div', {
  padding: '$4',
  flex: 1,
})

const CARD_HEADING_TAG = 'div'

type CardHeadingVariants = StitchesVariants<typeof StyledText>
type CardHeadingOwnProps = CSSProps & CardHeadingVariants

type CardHeadingComponent = Polymorphic.ForwardRefComponent<
  typeof CARD_HEADING_TAG,
  CardHeadingOwnProps
>

export const CardHeading = forwardRef(
  (
    { as = CARD_HEADING_TAG, size = 1, weight = 'bold', css, ...props },
    forwardedRef
  ) => {
    return (
      <StyledText
        as={as}
        css={
          {
            px: '$4',
            position: 'relative',
            width: '100%',
            mt: '$4',
            mb: '-$1',
            display: 'flex',
            justifyContent: 'space-between',

            [`& ${IconButton}`]: {
              color: '$textSecondary',
              right: '0',
            },
            ...css,
          } as CSS
        }
        size={size}
        weight={weight}
        {...props}
        ref={forwardedRef}
      />
    )
  }
) as CardHeadingComponent

const CARD_SUBHEADING_TAG = 'div'

type CardSubheadingVariants = StitchesVariants<typeof StyledText>
type CardSubheadingOwnProps = CSSProps & CardSubheadingVariants

type CardSubheadingComponent = Polymorphic.ForwardRefComponent<
  typeof CARD_SUBHEADING_TAG,
  CardSubheadingOwnProps
>

export const CardSubheading = forwardRef(
  (
    { as = CARD_SUBHEADING_TAG, size = -1, weight = 'light', css, ...props },
    forwardedRef
  ) => {
    return (
      <StyledText
        as={as}
        css={
          {
            px: '$4',
            color: '$textSecondary',
            mt: '$1',
            mb: '-$1',
            ...css,
          } as CSS
        }
        size={size}
        weight={weight}
        {...props}
        ref={forwardedRef}
      />
    )
  }
) as CardSubheadingComponent

const CARD_LEAD_IN_TAG = 'div'

type CardLeadInVariants = StitchesVariants<typeof StyledText>
type CardLeadInOwnProps = CSSProps & CardLeadInVariants

type CardLeadInComponent = Polymorphic.ForwardRefComponent<
  typeof CARD_LEAD_IN_TAG,
  CardLeadInOwnProps
>

export const CardLeadIn = forwardRef(
  ({ as = CARD_LEAD_IN_TAG, size = -2, css, ...props }, forwardedRef) => {
    return (
      <StyledText
        as={as}
        css={
          {
            px: '$4',
            position: 'relative',
            width: '100%',
            color: '$textSecondary',
            textTransform: 'uppercase',
            mt: '$4',
            mb: '-$3',

            [`& ${IconButton}`]: {
              position: 'absolute',
              color: '$textSecondary',
              right: '0',
              top: '0',
            },
            ...css,
          } as CSS
        }
        size={size}
        {...props}
        ref={forwardedRef}
      />
    )
  }
) as CardLeadInComponent

export const CardActions = styled('div', {
  display: 'flex',
  gap: '$2',
  justifyContent: 'flex-end',
  mt: '$3',
  padding: '$4',
})
