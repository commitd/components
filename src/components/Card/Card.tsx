import React, { ComponentProps, ElementRef, forwardRef } from 'react'
import type { AsProps, CSSProps, VariantProps } from '../../stitches.config'
import { styled } from '../../stitches.config'
import { IconButton } from '../IconButton'
import { Paper } from '../Paper'
import { Text } from '../Text'

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

// CARD_BODY *************************************************************

export const CardBody = styled('div', {
  padding: '$4',
  flex: 1,
})

// CARD_HEADING *************************************************************

export const StyledHeading = styled(Text, {
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
})

const CARD_HEADING_TAG = 'div'

type CardHeadingProps = ComponentProps<typeof CARD_HEADING_TAG> &
  VariantProps<typeof Text> &
  CSSProps &
  AsProps

export const CardHeading = forwardRef<
  ElementRef<typeof CARD_HEADING_TAG>,
  CardHeadingProps
>((props, forwardedRef) => {
  return (
    <StyledHeading
      as={CARD_HEADING_TAG}
      size={1}
      weight={'bold'}
      {...props}
      ref={forwardedRef}
    />
  )
})
CardHeading.toString = () => `.${StyledHeading.className}`

// CARD_SUBHEADING *************************************************************

export const StyledSubheading = styled(Text, {
  px: '$4',
  color: '$textSecondary',
  mt: '$1',
  mb: '-$1',
})

const CARD_SUBHEADING_TAG = 'div'

type CardSubheadingProps = ComponentProps<typeof CARD_SUBHEADING_TAG> &
  VariantProps<typeof Text> &
  CSSProps &
  AsProps

export const CardSubheading = forwardRef<
  ElementRef<typeof CARD_SUBHEADING_TAG>,
  CardSubheadingProps
>((props, forwardedRef) => {
  return (
    <StyledSubheading
      as={CARD_SUBHEADING_TAG}
      size={-1}
      weight="light"
      {...props}
      ref={forwardedRef}
    />
  )
})
CardSubheading.toString = () => `.${StyledSubheading.className}`

// CARD_LEADING ****************************************************************

export const StyledLeadIn = styled(Text, {
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
})

const CARD_LEAD_IN_TAG = 'div'

type CardLeadInProps = ComponentProps<typeof CARD_LEAD_IN_TAG> &
  VariantProps<typeof Text> &
  CSSProps &
  AsProps

export const CardLeadIn = forwardRef<
  ElementRef<typeof CARD_LEAD_IN_TAG>,
  CardLeadInProps
>((props, forwardedRef) => {
  return (
    <StyledLeadIn
      as={CARD_LEAD_IN_TAG}
      size={-2}
      {...props}
      ref={forwardedRef}
    />
  )
})
CardLeadIn.toString = () => `.${StyledLeadIn.className}`

// CARD_ACTIONS ****************************************************************

export const CardActions = styled('div', {
  display: 'flex',
  gap: '$2',
  justifyContent: 'flex-end',
  mt: '$3',
  padding: '$4',
})
