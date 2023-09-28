import { RecipeVariantProps, cva, cx } from '@committed/ss/css'
import { styled } from '@committed/ss/jsx'
import { ComponentProps, FC, PropsWithChildren } from 'react'
import { CComponent, ConditionalWrapper, component } from '../../utils'
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

    borderColor: 'colorPalette.border',
    color: 'colorPalette.text.low',
    backgroundColor: 'colorPalette.outline',
  },

  variants: {
    severity: {
      ghost: {
        colorPalette: '$neutral',
      },
      warn: {
        colorPalette: '$warn',
      },
      info: {
        colorPalette: '$info',
      },
      success: {
        colorPalette: '$success',
      },
      error: {
        colorPalette: '$error',
      },
    },
  },
})

export const AlertTitle: FC<
  PropsWithChildren<ComponentProps<typeof Heading>>
> = ({ children, className, as = 'h6', ...props }) => (
  <div className={cx('c-alert-title', className)}>
    <Heading size="$1" as={as} {...props}>
      {children}
    </Heading>
  </div>
)
AlertTitle.displayName = 'AlertTitle'

export const AlertContent: FC<
  PropsWithChildren<ComponentProps<typeof Text>>
> = ({ children = '', className, ...props }) => {
  return (
    <div className={cx('c-alert-content', className)}>
      <ConditionalWrapper
        condition={typeof children === 'string'}
        wrapper={(content) => (
          <Text size="$-1" {...props}>
            {content}
          </Text>
        )}
      >
        {children ?? ''}
      </ConditionalWrapper>
    </div>
  )
}
AlertContent.displayName = 'AlertContent'

type AlertVariants = RecipeVariantProps<typeof alert>

export const Alert: CComponent<typeof DEFAULT_TAG, AlertVariants> = styled(
  component(DEFAULT_TAG, 'c-alert'),
  alert,
)
Alert.displayName = 'Alert'
