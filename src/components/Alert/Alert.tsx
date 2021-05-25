import type * as Polymorphic from '@radix-ui/react-polymorphic'
import React, { FC, forwardRef } from 'react'
import { CSS, StitchesVariants, styled } from 'stitches.config'
import { Heading } from '../Heading'
import { Text } from '../Text'

const DEFAULT_TAG = 'div'

const StyledAlert = styled(DEFAULT_TAG, {
  // Reset
  boxSizing: 'border-box',
  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },

  border: '1px solid',
  borderRadius: '$2',

  display: 'flex',
  flexDirection: 'column',
  gap: '$2',

  p: '$4',

  variants: {
    severity: {
      ghost: {
        backgroundColor: '$greyBgLight',
        borderColor: '$greyBorder',
        color: '$greyText',
      },
      warning: {
        backgroundColor: '$warningBackground',
        borderColor: '$warningHighlight',
        color: '$warningHighlight',
      },
      info: {
        backgroundColor: '$infoBackground',
        borderColor: '$infoHighlight',
        color: '$infoHighlight',
      },
      success: {
        backgroundColor: '$successBackground',
        borderColor: '$successHighlight',
        color: '$successHighlight',
      },
      error: {
        backgroundColor: '$errorBackground',
        borderColor: '$errorHighlight',
        color: '$errorHighlight',
      },
    },
  },
})

export const AlertTitle: FC = ({ children }) => (
  <Heading as="div" size={1} css={{ color: 'inherit' }} variant="h6">
    {children}
  </Heading>
)

export const AlertContent: FC = ({ children }) => (
  <Text css={{ color: 'inherit' }} size={-1}>
    {children}
  </Text>
)

type AlertCSSProp = { css?: CSS }
type AlertVariants = StitchesVariants<typeof StyledAlert>
type AlertOwnProps = AlertCSSProp & AlertVariants

type AlertComponent = Polymorphic.ForwardRefComponent<
  typeof DEFAULT_TAG,
  AlertOwnProps
>

export const Alert = forwardRef((props, forwardedRef) => {
  return <StyledAlert {...props} ref={forwardedRef} />
}) as AlertComponent

Alert.toString = () => `.${StyledAlert.className}`
