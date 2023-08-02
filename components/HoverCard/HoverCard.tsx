import { css } from '@committed/ss/css'
import {
    Arrow,
    Content,
    Portal,
    Root,
    Trigger,
} from '@radix-ui/react-hover-card'
import React, { ComponentProps, ElementRef, FC, forwardRef } from 'react'

import { ConditionalWrapper, withClasses } from '../../utils'
import { overlayAnimationStyles } from '../Overlay'
import { paperStyles } from '../Paper'

const StyledContent = withClasses(
  Content,
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
  overlayAnimationStyles
)

const StyledArrow = withClasses(
  Arrow,
  css({
    fill: '$paper',
  })
)

type HoverCardContentProps = ComponentProps<typeof Content> & {
  /** By default, portals your content parts into the body, set false to add at dom location. */
  portalled?: boolean
  /** Specify a container element to portal the content into. */
  container?: ComponentProps<typeof Portal>['container']
}

export const HoverCardContent = forwardRef<
  ElementRef<typeof StyledContent>,
  HoverCardContentProps
>(({ portalled = true, container, children, ...props }, forwardedRef) => (
  <ConditionalWrapper
    condition={portalled}
    wrapper={(child) => <Portal container={container}>{child}</Portal>}
  >
    <StyledContent {...props} ref={forwardedRef}>
      <StyledArrow offset={-1} />
      {children}
    </StyledContent>
  </ConditionalWrapper>
))
HoverCardContent.displayName = 'HoverCardContent'

const HOVER_CARD_TRIGGER_CLASS_NAME = 'c-hover-card-trigger'

export const HoverCardTrigger = forwardRef<
  ElementRef<typeof Trigger>,
  Omit<ComponentProps<typeof Trigger>, 'asChild'>
>(({ children, ...props }, forwardedRef) => (
  <Trigger
    className={HOVER_CARD_TRIGGER_CLASS_NAME}
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
export const HoverCard: FC<React.ComponentProps<typeof Root>> = Root
