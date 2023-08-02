import { RecipeVariantProps, css, cva } from '@committed/ss/css'
import { styled } from '@committed/ss/jsx'
import { SystemStyleObject } from '@committed/ss/types'
import { Close, Content, Portal, Root } from '@radix-ui/react-dialog'
import { ComponentProps, ElementRef, forwardRef } from 'react'
import { ConditionalWrapper, withClasses } from '../../utils'
import { DialogClose, DialogTrigger, StyledOverlay } from '../Dialog/Dialog'
import { IconButton } from '../IconButton'
import { Close as Icon } from '../Icons'
import { paperStyles } from '../Paper'

export type DrawerPosition = 'left' | 'right' | 'top' | 'bottom'

// This should be reused from Dialog, but export currently causes a typing issue
const StyledIconButton = withClasses(
  IconButton,
  css({
    position: 'fixed',
    right: '$1',
    top: '$1',
  })
)

const drawerContent = cva({
  base: {
    position: 'fixed',
    top: 0,
    bottom: 0,
    width: 250,
    willChange: 'transform',

    boxShadow: '$2',

    '&[data-state="open"]': {
      _motionReduce: { transition: 'none' },
      _motionSafe: {
        animation: `$slideIn 150ms cubic-bezier(0.22, 1, 0.36, 1)`,
      },
    },

    '&[data-state="closed"]': {
      _motionReduce: { transition: 'none' },
      _motionSafe: {
        animation: `$slideOut 150ms cubic-bezier(0.22, 1, 0.36, 1)`,
      },
    },
  },

  variants: {
    side: {
      top: {
        $$transformValue: 'translate3d(0,-100%,0)',
        width: '100%',
        height: 300,
        bottom: 'auto',
      },
      right: {
        $$transformValue: 'translate3d(100%,0,0)',
        right: 0,
      },
      bottom: {
        $$transformValue: 'translate3d(0,100%,0)',
        width: '100%',
        height: 300,
        bottom: 0,
        top: 'auto',
      },
      left: {
        $$transformValue: 'translate3d(-100%,0,0)',
        left: 0,
      },
    },
  },

  defaultVariants: {
    side: 'left',
  },
})

const StyledContent = styled(withClasses(Content, paperStyles), drawerContent)

type DrawerContentVariants = RecipeVariantProps<typeof drawerContent>

type DrawerContentProps = Omit<ComponentProps<typeof Content>, 'asChild'> &
  DrawerContentVariants & {
    /** Closable, add a standard close icon. */
    defaultClose?: boolean
    /** Modify the default styling of the overlay */
    overlayCss?: SystemStyleObject
    /** By default, portals your overlay and content parts into the body, set false to add at dom location. */
    portalled?: boolean
    /** Specify a container element to portal the content into. */
    container?: ComponentProps<typeof Portal>['container']
  }

export const DrawerContent = forwardRef<
  ElementRef<typeof StyledContent>,
  DrawerContentProps
>(
  (
    {
      defaultClose,
      children,
      overlayCss,
      container,
      portalled = true,
      ...props
    },
    forwardedRef
  ) => (
    <ConditionalWrapper
      condition={portalled}
      wrapper={(child) => <Portal container={container}>{child}</Portal>}
    >
      <>
        <StyledOverlay css={overlayCss} />
        <StyledContent {...props} ref={forwardedRef}>
          {children}
          {defaultClose && (
            <Close asChild>
              <StyledIconButton aria-label="close" variant="tertiary">
                <Icon title="Close" />
              </StyledIconButton>
            </Close>
          )}
        </StyledContent>
      </>
    </ConditionalWrapper>
  )
)
DrawerContent.displayName = 'DrawerContent'

export const DrawerTrigger = DialogTrigger
export const DrawerClose = DialogClose

DrawerTrigger.displayName = 'DrawerTrigger'
DrawerClose.displayName = 'DrawerClose'

/**
 * The Drawer component can be used to overlay a panel from any side.
 *
 * Its appearance is controlled with the `open` and `onOpenChange` props or by providing a
 * `DrawerTrigger` and (optionally) a `DrawerClose` inside the main `Drawer`.
 * The content should be wrapped in a `DrawerContent`.
 *
 * Based on [Radix Dialog](https://radix-ui.com/primitives/docs/components/dialog).
 */
export const Drawer = Root
Drawer.displayName = 'Drawer'
