import type * as Polymorphic from '@radix-ui/react-polymorphic'
import React, { ComponentProps, forwardRef, PropsWithChildren } from 'react'
import { CSS, styled } from 'stitches.config'
import { Button } from '../Button'
import { Heading } from '../Heading'

/**
 * The App Bar should the used for information and actions on the current screen.
 */
export const AppBar = styled('header', {
  display: 'flex',
  background: '$brand',
  color: '$brandContrast',
  minHeight: '$8',
  paddingLeft: '$4',
  paddingRight: '$4',
  alignItems: 'center',
})

const AppBarHeadingContainer = styled('div', {
  flex: '1',
})

const HEADING_TAG = 'h1'
type AppBarHeadingCSSProp = { css?: CSS }
type AppBarHeadingOwnProps = AppBarHeadingCSSProp &
  ComponentProps<typeof Heading>

type AppBarHeadingComponent = Polymorphic.ForwardRefComponent<
  typeof HEADING_TAG,
  AppBarHeadingOwnProps
>

export const AppBarHeading = forwardRef(
  ({ children, css, ...props }, forwardedRef) => (
    <AppBarHeadingContainer>
      <Heading
        variant={HEADING_TAG}
        css={{ color: '$brandContrast', ...css } as CSS}
        size={1}
        weight="regular"
        {...props}
        ref={forwardedRef}
      >
        {children}
      </Heading>
    </AppBarHeadingContainer>
  )
) as AppBarHeadingComponent

export const AppBarActions = styled('div', {
  '> *': {
    color: '$brandContrast',
  },
})

const BUTTON_TAG = 'button'
type AppBarButtonCSSProp = { css?: CSS }
type AppBarButtonVariants = ComponentProps<typeof Button>
type AppBarButtonOwnProps = AppBarButtonCSSProp & AppBarButtonVariants

type AppBarButtonComponent = Polymorphic.ForwardRefComponent<
  typeof BUTTON_TAG,
  AppBarButtonOwnProps
>
export const AppBarButton = forwardRef<
  HTMLButtonElement,
  PropsWithChildren<typeof Button>
>(({ children, ...props }, forwardedRef) => (
  <Button variant="brand" {...props} ref={forwardedRef}>
    {children}
  </Button>
)) as AppBarButtonComponent
