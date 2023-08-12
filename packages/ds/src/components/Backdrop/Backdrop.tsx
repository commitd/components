'use client'

import { css, cx } from '@committed/ss/css'
import { Content, Overlay, Portal, Root } from '@radix-ui/react-dialog'
import React, { ComponentProps, FC } from 'react'

import { ConditionalWrapper, component } from '../../utils'
import { overlayAnimationStyles, overlayStyles } from '../Overlay'

const StyledOverlay = component(
  Overlay,
  overlayStyles,
  overlayAnimationStyles,
  css({
    position: 'fixed',
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
  }),
)

const StyledContent = component(
  Content,
  overlayAnimationStyles,
  css({
    position: 'fixed',
    isolation: 'isolate',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: 200,
    maxWidth: 'fit-content',
    maxHeight: '85vh',
    padding: 20,
    marginTop: '-5vh',

    _focus: {
      outline: 'none',
    },
  }),
)

type BackdropProps = React.ComponentProps<typeof Root> & {
  /** className of wrapper component */
  className?: string
  /** Modify the default styling of the overlay */
  overlayClassName?: string
  /** Modify the default styling of the content wrapper */
  contentClassName?: string
  /** By default, portals your overlay and content parts into the body, set false to add at dom location. */
  portalled?: boolean
  /** Specify a container element to portal the content into. */
  container?: ComponentProps<typeof Portal>['container']
}

/**
 * The Backdrop component can be used to isolate the user from the UI while a longer running action is taking place.
 *
 * Its appearance is controlled with the `open` prop, and any content should be children.
 *
 * Base on [Radix Dialog](https://radix-ui.com/primitives/docs/components/dialog).
 */
export const Backdrop: FC<BackdropProps> = ({
  className,
  overlayClassName,
  contentClassName,
  container,
  portalled = true,
  children,
  ...props
}) => {
  return (
    <Root {...props}>
      <ConditionalWrapper
        condition={portalled}
        wrapper={(child) => <Portal container={container}>{child}</Portal>}
      >
        <div className={cx('c-backdrop', className)}>
          <StyledOverlay className={overlayClassName} />
          <StyledContent className={contentClassName}>{children}</StyledContent>
        </div>
      </ConditionalWrapper>
    </Root>
  )
}
Backdrop.displayName = 'Backdrop'
