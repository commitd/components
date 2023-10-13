import { RecipeVariantProps, cva, styled } from '@committed/ds-ss'
import React, { ComponentProps } from 'react'
import { Assign, Prettify, forwardRefDefine } from '../../utils'

const DEFAULT_TAG = 'span'

const badgeHeight = 20

const BadgeRoot = styled(
  DEFAULT_TAG,
  cva({
    base: {
      display: 'inline-flex',
      position: 'relative',
      flexShrink: 0,
      verticalAlign: 'middle',
    },
  }),
)
BadgeRoot.displayName = 'BadgeRoot'

const badge = cva({
  base: {
    top: '0',
    right: '0',
    transform: 'scale(1) translate(90%, -70%)',
    transformOrigin: '100% 0%',

    display: 'flex',
    padding: '0 token(sizes.$1)',
    zIndex: 1,
    position: 'absolute',
    flexWrap: 'wrap',
    fontSize: '$-2',
    alignItems: 'center',
    fontWeight: 500,
    lineHeight: 1,
    alignContent: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'colorPalette.9',
    color: 'colorPalette.text',
  },
  variants: {
    status: {
      false: {
        height: badgeHeight,
        minWidth: badgeHeight,
        borderRadius: '$pill',
      },
      true: {
        height: '$2',
        minWidth: '$2',
        padding: 0,
        borderRadius: '$round',
      },
    },
    variant: {
      neutral: {
        colorPalette: '$neutral',
      },
      ghost: {},
      primary: {
        colorPalette: '$primary',
      },
      secondary: {
        colorPalette: '$secondary',
      },
      error: {
        colorPalette: '$error',
      },
      info: {
        colorPalette: '$info',
      },
      success: {
        colorPalette: '$success',
      },
      warn: {
        colorPalette: '$warning',
      },
    },
  },
  defaultVariants: {
    variant: 'neutral',
    status: false,
  },
})

const StyledBadge = styled(DEFAULT_TAG, badge)

type BadgeVariants = Omit<RecipeVariantProps<typeof badge>, 'status'>
type BadgeProps = Prettify<
  Assign<
    ComponentProps<typeof DEFAULT_TAG>,
    BadgeVariants & {
      content: React.ReactNode
      max?: number
    }
  >
>

/**
 * Badge component
 */
export const Badge = forwardRefDefine<typeof DEFAULT_TAG, BadgeProps>(
  ({ children, content, max, ...props }, forwardedRef) => (
    <BadgeRoot>
      {children}
      <StyledBadge {...props} ref={forwardedRef} status={false}>
        {typeof content === 'number' && max != null && content > max
          ? `${max}+`
          : content}
      </StyledBadge>
    </BadgeRoot>
  ),
)
Badge.displayName = 'Badge'

type StatusProps = BadgeVariants & ComponentProps<typeof DEFAULT_TAG>

/**
 * Status component
 */
export const Status = forwardRefDefine<typeof DEFAULT_TAG, StatusProps>(
  ({ children, ...props }, forwardedRef) => (
    <BadgeRoot>
      {children}
      <StyledBadge {...props} status ref={forwardedRef} />
    </BadgeRoot>
  ),
)
Status.displayName = 'Status'
