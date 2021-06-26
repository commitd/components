import type * as Polymorphic from '@radix-ui/react-polymorphic'
import React, { forwardRef } from 'react'
import type { CSSProps } from '../../stitches.config'
import { StitchesVariants, styled } from '../../stitches.config'

const DEFAULT_TAG = 'span'

const badgeHeight = 20

const BadgeRoot = styled(DEFAULT_TAG, {
  display: 'inline-flex',
  position: 'relative',
  flexShrink: 0,
  verticalAlign: 'middle',
})
const StyledBadge = styled(DEFAULT_TAG, {
  top: '0',
  right: '0',
  transform: 'scale(1) translate(50%, -50%)',
  transformOrigin: '100% 0%',
  height: badgeHeight,
  display: 'flex',
  padding: '0 $1',
  zIndex: 1,
  position: 'absolute',
  flexWrap: 'wrap',
  fontSize: '$-2',
  minWidth: badgeHeight,
  alignItems: 'center',
  fontWeight: 500,
  lineHeight: 1,
  alignContent: 'center',
  borderRadius: '$pill',
  flexDirection: 'row',
  justifyContent: 'center',
  backgroundColor: '$$background',
  color: '$$main',

  variants: {
    variant: {
      grey: {
        $$main: '$colors$grey2',
        $$background: '$colors$grey9',
      },
      ghost: {
        $$main: '$colors$text',
        $$background: '$colors$transparency2',
      },
      brand: {
        $$main: '$colors$brand',
        $$background: '$colors$brandContrast',
      },
      primary: {
        $$main: '$colors$primary2',
        $$background: '$colors$primary9',
      },
      error: {
        $$main: '$colors$error2',
        $$background: '$colors$error9',
      },
      info: {
        $$main: '$colors$info2',
        $$background: '$colors$info9',
      },
      success: {
        $$main: '$colors$success2',
        $$background: '$colors$success9',
      },
      warning: {
        $$main: '$colors$warning2',
        $$background: '$colors$warning9',
      },
    },
  },
  defaultVariants: {
    variant: 'grey',
  },
})

type BadgeVariants = StitchesVariants<typeof StyledBadge>
type BadgeOwnProps = CSSProps &
  BadgeVariants & {
    content: React.ReactNode
    max?: number
  }

type BadgeComponent = Polymorphic.ForwardRefComponent<
  typeof DEFAULT_TAG,
  BadgeOwnProps
>

/**
 * Badge component
 */
export const Badge = forwardRef(({ children, content, max, ...props }, ref) => (
  <BadgeRoot>
    {children}
    <StyledBadge ref={ref} {...props}>
      {typeof content === 'number' && max != null && content > max
        ? `${max}+`
        : content}
    </StyledBadge>
  </BadgeRoot>
)) as BadgeComponent
Badge.toString = () => `.${StyledBadge.className}`

const StatusContainer = styled(StyledBadge, {
  height: '$2',
  padding: '0',
  minWidth: '$2',
  borderRadius: '$round',
})

type StatusVariants = StitchesVariants<typeof StyledBadge>
type StatusOwnProps = CSSProps & StatusVariants

type StatusComponent = Polymorphic.ForwardRefComponent<
  typeof DEFAULT_TAG,
  StatusOwnProps
>

/**
 * Status component
 */
export const Status = forwardRef(({ children, ...props }, ref) => (
  <BadgeRoot>
    {children}
    <StatusContainer ref={ref} {...props} />
  </BadgeRoot>
)) as StatusComponent
Status.toString = () => `.${StatusContainer.className}`
