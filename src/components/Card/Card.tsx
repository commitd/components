import * as Polymorphic from '@radix-ui/react-polymorphic'
import React, { forwardRef } from 'react'
import { CSS, StitchesVariants, styled } from 'stitches.config'
import { IconButton } from '../IconButton'
import { StyledText } from '../Text/Text'

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
  textAlign: 'inherit',
  verticalAlign: 'middle',
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',

  backgroundColor: '$paper',
  textDecoration: 'none',
  color: '$text',
  flexShrink: 0,
  borderRadius: '$default',
  position: 'relative',

  display: 'flex',
  flexDirection: 'column',

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

  variants: {
    variant: {
      default: {
        '&::before': {
          boxShadow: '$1',
        },
      },
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
          boxShadow: '$1',
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
          boxShadow: 'inset 0 0 0 1px $colors$grey4',
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$grey4, 0 0 0 1px $colors$grey4',
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
type CardHeadingCSSProp = { css?: CSS }
type CardHeadingVariants = StitchesVariants<typeof StyledText>
type CardHeadingOwnProps = CardHeadingCSSProp & CardHeadingVariants

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
type CardSubheadingCSSProp = { css?: CSS }
type CardSubheadingVariants = StitchesVariants<typeof StyledText>
type CardSubheadingOwnProps = CardSubheadingCSSProp & CardSubheadingVariants

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
type CardLeadInCSSProp = { css?: CSS }
type CardLeadInVariants = StitchesVariants<typeof StyledText>
type CardLeadInOwnProps = CardLeadInCSSProp & CardLeadInVariants

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
