import React, { ComponentProps, ElementRef, forwardRef } from 'react'
import { cva } from '../../../styled-system/css'
import { styled } from '../../../styled-system/jsx'
import { styled as styledCss } from '../../utils'
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
        '&::before': {
          boxShadow: 'inset 0 0 0 1px token(colors.grey4)',
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
        '&::before': {
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
          boxShadow: 'hover',
        },
        '&:focus': {
          boxShadow: 'focus',
        },
      },
    },
    {
      interactive: true,
      variant: 'outline',
      css: {
        '&:hover': {
          '&::before': {
            boxShadow: 'inset 0 0 0 1px token(colors.grey6)',
          },
        },
        '&:focus': {
          '&::before': {
            boxShadow:
              'inset 0 0 0 1px token(colors.grey6), 0 0 0 1px token(colors.grey4)',
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
          backgroundColor: 'paper',
          transform: 'translateY(-2px)',
          '&::before': {
            opacity: '1',
          },
        },
        '&:active': {
          transform: 'translateY(0)',
          transition: 'none',
          '&::before': {
            boxShadow: '3',
            opacity: '1',
          },
        },
        '&:focus': {
          boxShadow:
            'inset 0 0 0 1px token(colors.grey2), 0 0 0 1px token(colors.grey2)',
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

// CARD_BODY *************************************************************

export const CardBody = styledCss('div', {
  padding: 4,
  flex: 1,
})

// CARD_HEADING *************************************************************

export const StyledHeading = styledCss(Text, {
  px: 4,
  position: 'relative',
  width: '100%',
  mt: 4,
  mb: -1,
  display: 'flex',
  justifyContent: 'space-between',

  // [`& .${ICON_BUTTON_CLASS}`]: {
  //   color: 'textSecondary',
  //   right: '0',
  // },
})

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

// CARD_SUBHEADING *************************************************************

export const StyledSubheading = styledCss(Text, {
  px: 4,
  color: 'textSecondary',
  mt: 1,
  mb: -1,
})

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

// CARD_LEADING ****************************************************************

export const StyledLeadIn = styledCss(Text, {
  px: '4',
  position: 'relative',
  width: '100%',
  color: 'textSecondary',
  textTransform: 'uppercase',
  mt: 4,
  mb: -3,

  // [`& .${ICON_BUTTON_CLASS}`]: {
  //   position: 'absolute',
  //   color: 'textSecondary',
  //   right: '0',
  //   top: '0',
  // },
})

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

// CARD_ACTIONS ****************************************************************

export const CardActions = styledCss('div', {
  display: 'flex',
  gap: 2,
  justifyContent: 'flex-end',
  mt: 3,
  padding: 4,
})
