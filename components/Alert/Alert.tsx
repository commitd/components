import { cva, RecipeVariantProps } from '@committed/ss/css'
import { styled } from '@committed/ss/jsx'
import React, { ComponentProps, FC, PropsWithChildren } from 'react'
import { Heading } from '../Heading'
import { Text } from '../Text'

const DEFAULT_TAG = 'div'

const alert = cva({
  base: {
    // Reset
    boxSizing: 'border-box',

    border: '1px solid',
    borderRadius: '$default',

    display: 'flex',
    flexDirection: 'column',
    gap: '$2',

    p: '$4',
  },

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

export const AlertTitle: FC<
  PropsWithChildren<ComponentProps<typeof Heading>>
> = ({ children, ...props }) => (
  <Heading as="div" size="1" variant="h6" {...props}>
    {children}
  </Heading>
)
AlertTitle.displayName = 'AlertTitle'

export const AlertContent: FC<
  PropsWithChildren<ComponentProps<typeof Text>>
> = ({ children, ...props }) => (
  <Text size="-1" {...props}>
    {children}
  </Text>
)
AlertContent.displayName = 'AlertContent'

type AlertVariants = RecipeVariantProps<typeof alert>
type AlertProps = AlertVariants & React.HTMLProps<typeof DEFAULT_TAG>

export const Alert = styled(DEFAULT_TAG, alert) as React.FC<AlertProps>
Alert.displayName = 'Alert'
