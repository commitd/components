'use client'

import { css, cx, SystemStyleObject } from '@committed/ss'
import { Content, Overlay, Portal, Root } from '@radix-ui/react-dialog'
import React, { ComponentProps, FC } from 'react'

import { Surface } from '@committed/utilities'
import { component, ConditionalWrapper } from '../../utils'
import { overlayAnimationStyles } from '../Overlay/Overlay'

const StyledRoot = component(
  Root,
  'c-backdrop',
  css({
    isolation: 'isolate',
  }),
)

const StyledOverlay = component(
  Overlay,
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
  css?: SystemStyleObject
  /** Modify the default styling of the overlay */
  overlay?: Surface
  overlayCss?: SystemStyleObject
  /** Modify the default styling of the content wrapper */
  contentCss?: SystemStyleObject
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
  overlay = 'frost',
  css: rootCss,
  overlayCss,
  contentCss,
  container,
  portalled = true,
  children,
  ...props
}) => {
  return (
    <StyledRoot css={css.raw(rootCss)} {...props}>
      <ConditionalWrapper
        condition={portalled}
        wrapper={(child) => <Portal container={container}>{child}</Portal>}
      >
        <div className={cx('c-backdrop', className)}>
          <StyledOverlay className={css({ surface: overlay }, overlayCss)} />
          <StyledContent css={contentCss}>{children}</StyledContent>
        </div>
      </ConditionalWrapper>
    </StyledRoot>
  )
}
Backdrop.displayName = 'Backdrop'
