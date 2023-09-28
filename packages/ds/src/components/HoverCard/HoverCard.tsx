'use client'
import { css, cx } from '@committed/ss/css'
import { styled } from '@committed/ss/jsx'
import { SurfaceVariants } from '@committed/utilities'
import {
  Arrow,
  Content,
  Portal,
  Root,
  Trigger,
} from '@radix-ui/react-hover-card'
import { ComponentProps, ElementRef, forwardRef } from 'react'
import {
  CComponent,
  ConditionalWrapper,
  component,
  forwardRefExtend,
} from '../../utils'
import { overlayAnimationStyles } from '../Overlay/Overlay'
import { paperStyles } from '../Paper/Paper'

const StyledContent = styled(
  component(
    Content,
    'c-hover-card-content',
    paperStyles,
    css({
      borderRadius: '$default',

      width: '$11',

      md: { width: '$12' },
      lg: { width: '$13' },

      display: 'flex',
      flexDirection: 'column',
      gap: '$2',

      _before: {
        boxShadow: 'none',
      },
      filter:
        'drop-shadow(0px 3px 2.5px rgba(0,0,0,0.2)) drop-shadow(0px 6px 5px rgba(0,0,0,0.14)) drop-shadow(0px 1px 9px rgba(0,0,0,0.12))',
    }),
    overlayAnimationStyles,
  ),
)

const StyledArrow = styled(component(Arrow, 'c-hover-card-arrow'), {
  variants: {
    fill: {
      clear: { fill: 'token(colors.$surface.clear)' },
      frost: { fill: 'token(colors.$surface.frost)' },
      neutral: { fill: 'token(colors.$surface.neutral)' },
      glass: {
        fill: 'token(colors.$surface.glass)',
        backdropFilter: 'saturate(80%) blur(5px)',
      },
      solid: { fill: 'token(colors.$surface.solid)' },
    },
  },
})

type HoverCardContentProps = SurfaceVariants & {
  /** By default, portals your content parts into the body, set false to add at dom location. */
  portalled?: boolean
  /** Specify a container element to portal the content into. */
  container?: ComponentProps<typeof Portal>['container']
}

export const HoverCardContent = forwardRefExtend<
  typeof Content,
  HoverCardContentProps
>(
  (
    { portalled = true, container, surface, children, ...props },
    forwardedRef,
  ) => (
    <ConditionalWrapper
      condition={portalled}
      wrapper={(child) => <Portal container={container}>{child}</Portal>}
    >
      <StyledContent surface={surface} {...props} ref={forwardedRef}>
        <StyledArrow fill={surface} offset={-1} />
        {children}
      </StyledContent>
    </ConditionalWrapper>
  ),
)
HoverCardContent.displayName = 'HoverCardContent'

const HOVER_CARD_TRIGGER_CLASS_NAME = 'c-hover-card-trigger'

export const HoverCardTrigger = forwardRef<
  ElementRef<typeof Trigger>,
  Omit<ComponentProps<typeof Trigger>, 'asChild'>
>(({ children, className, ...props }, forwardedRef) => (
  <Trigger
    className={cx(HOVER_CARD_TRIGGER_CLASS_NAME, className)}
    asChild
    {...props}
    ref={forwardedRef}
  >
    {children}
  </Trigger>
))
HoverCardTrigger.displayName = 'HoverCardTrigger'

/**
 *
 * HoverCards display extra information when users hover over a link.
 * Intended for sighted users to preview or see additional information.
 *
 * Built using [Radix HoverCard](https://radix-ui.com/primitives/docs/components/hover-card)
 */
export const HoverCard: CComponent<typeof Root> = component(
  Root,
  'c-hover-card',
)
