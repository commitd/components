import React, { FC } from 'react'
import { cva, RecipeVariantProps } from '../../../styled-system/css'
import { styled } from '../../../styled-system/jsx'
import { Heading } from '../Heading'
import { Text } from '../Text'

const DEFAULT_TAG = 'div'

const alert = cva({
  base: {
    // Reset
    boxSizing: 'border-box',
    '&::before': {
      boxSizing: 'border-box',
    },
    '&::after': {
      boxSizing: 'border-box',
    },

    border: '1px solid',
    borderRadius: 'default',

    display: 'flex',
    flexDirection: 'column',
    gap: 2,

    p: 4,
  },

  variants: {
    severity: {
      ghost: {
        backgroundColor: 'grey2',
        borderColor: 'grey7',
        color: 'grey12',
      },
      warning: {
        backgroundColor: 'warningBackground',
        borderColor: 'warningHighlight',
        color: 'warningHighlight',
      },
      info: {
        backgroundColor: 'infoBackground',
        borderColor: 'infoHighlight',
        color: 'infoHighlight',
      },
      success: {
        backgroundColor: 'successBackground',
        borderColor: 'successHighlight',
        color: 'successHighlight',
      },
      error: {
        backgroundColor: 'errorBackground',
        borderColor: 'errorHighlight',
        color: 'errorHighlight',
      },
    },
  },
})

export const AlertTitle: FC = ({ children }) => (
  <Heading as="div" size="1" css={{ color: 'inherit' }} variant="h6">
    {children}
  </Heading>
)

export const AlertContent: FC = ({ children }) => (
  <Text css={{ color: 'inherit' }} size="-1">
    {children}
  </Text>
)

type AlertVariants = RecipeVariantProps<typeof alert>
type AlertProps = AlertVariants & React.HTMLProps<typeof DEFAULT_TAG>

export const Alert = styled(DEFAULT_TAG, alert) as React.FC<AlertProps>
