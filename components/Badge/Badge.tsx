import { RecipeVariantProps, cva } from '@committed/ss/css'
import { styled } from '@committed/ss/jsx'
import React, { ComponentProps, ElementRef, forwardRef } from 'react'

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
  })
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
    backgroundColor: 'var(--background)',
    color: 'var(--main)',
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
      grey: {
        '--main': 'token(colors.$grey2)',
        '--background': 'token(colors.$grey9)',
      },
      ghost: {
        '--main': 'token(colors.$text)',
        '--background': 'token(colors.$transparency3)',
      },
      brand: {
        '--main': 'token(colors.$brand)',
        '--background': 'token(colors.$brandContrast)',
      },
      primary: {
        '--main': 'token(colors.$primary2)',
        '--background': 'token(colors.$primary9)',
      },
      error: {
        '--main': 'token(colors.$error2)',
        '--background': 'token(colors.$error9)',
      },
      info: {
        '--main': 'token(colors.$info2)',
        '--background': 'token(colors.$info9)',
      },
      success: {
        '--main': 'token(colors.$success2)',
        '--background': 'token(colors.$success9)',
      },
      warning: {
        '--main': 'token(colors.$warning2)',
        '--background': 'token(colors.$warning9)',
      },
    },
  },
  defaultVariants: {
    variant: 'grey',
    status: false,
  },
})

const StyledBadge = styled(DEFAULT_TAG, badge)

type BadgeVariants = Omit<RecipeVariantProps<typeof badge>, 'status'>
type BadgeProps = BadgeVariants & {
  content: React.ReactNode
  max?: number
} & ComponentProps<typeof DEFAULT_TAG>

/**
 * Badge component
 */
export const Badge = forwardRef<ElementRef<typeof DEFAULT_TAG>, BadgeProps>(
  ({ children, content, max, ...props }, forwardedRef) => (
    <BadgeRoot>
      {children}
      <StyledBadge {...props} ref={forwardedRef} status={false}>
        {typeof content === 'number' && max != null && content > max
          ? `${max}+`
          : content}
      </StyledBadge>
    </BadgeRoot>
  )
)
Badge.displayName = 'Badge'

type StatusProps = BadgeVariants & ComponentProps<typeof DEFAULT_TAG>

/**
 * Status component
 */
export const Status = forwardRef<ElementRef<typeof DEFAULT_TAG>, StatusProps>(
  ({ children, ...props }, forwardedRef) => (
    <BadgeRoot>
      {children}
      <StyledBadge {...props} status ref={forwardedRef} />
    </BadgeRoot>
  )
)
Status.displayName = 'Status'
