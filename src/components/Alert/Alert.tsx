import React, { ComponentProps, ElementRef, FC, forwardRef } from 'react'
import type { CSSProps, VariantProps } from '../../stitches.config'
import { styled } from '../../stitches.config'
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
  borderRadius: '$default',

  display: 'flex',
  flexDirection: 'column',
  gap: '$2',

  p: '$4',

  variants: {
    severity: {
      ghost: {
        backgroundColor: '$grey2',
        borderColor: '$grey7',
        color: '$grey12',
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

type AlertVariants = VariantProps<typeof StyledAlert>
type AlertProps = AlertVariants & CSSProps & ComponentProps<typeof DEFAULT_TAG>

export const Alert = forwardRef<ElementRef<typeof StyledAlert>, AlertProps>(
  (props, forwardedRef) => {
    return <StyledAlert {...props} ref={forwardedRef} />
  }
)
Alert.toString = () => `.${StyledAlert.className}`
