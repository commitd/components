import { css, cva, cx } from '@committed/ss/css'
import { styled } from '@committed/ss/jsx'
import React, { ComponentProps, ElementRef, forwardRef } from 'react'
import { Link } from '../../packages/ds/src/components/Link'
import { withClasses } from '../../utils'
import { Box } from '../Box'
import { Button } from '../Button'
import { Heading } from '../Heading'

const appBar = cva({
  base: {
    display: 'flex',
    background: '$brand',
    color: '$brandContrast',
    minHeight: '$8',
    paddingLeft: '$4',
    paddingRight: '$4',
    alignItems: 'center',
    position: 'relative',
  },
})

/**
 * The App Bar should the used for information and actions on the current screen.
 */
export const AppBar = styled('header', appBar)
AppBar.displayName = 'AppBar'

const StyledHeading = styled(
  Heading,
  cva({
    base: {
      color: '$brandContrast',
      fontSize: '$1',
      fontWeight: 'regular',
    },
  }),
)

const HEADING_TAG = 'h1'

type AppBarHeadingProps = ComponentProps<typeof Heading>

export const AppBarHeading = forwardRef<
  ElementRef<typeof Heading>,
  AppBarHeadingProps
>(({ children, ...props }, forwardedRef) => (
  <>
    <div>
      <StyledHeading as={HEADING_TAG} {...props} ref={forwardedRef}>
        {children}
      </StyledHeading>
    </div>
    <Box variant="grow" />
  </>
))
AppBarHeading.displayName = 'AppBarHeading'

export const AppBarActions = styled(
  'div',
  cva({
    base: {
      // '> *': {
      color: '$brandContrast',
      // },
    },
  }),
)
AppBarActions.displayName = 'AppBarActions'

const APP_BAR_BUTTON_CLASS_NAME = 'c-app-bar-button'

export const AppBarButton = forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithRef<typeof Button>
>(({ children, className, ...props }, forwardedRef) => (
  <Button
    className={cx(APP_BAR_BUTTON_CLASS_NAME, className)}
    variant="brand"
    {...props}
    ref={forwardedRef}
  >
    {children}
  </Button>
))
AppBarButton.displayName = 'AppBarButton'

export const AppBarMenu = withClasses(
  Box,
  css({
    width: '100%',
    height: '100%',
    position: 'absolute',
    left: '$0',
    top: '$0',
    right: '$0',
    bottom: '$0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
    pointerEvents: 'none',
    '& > *': {
      pointerEvents: 'auto',
    },
  }),
)
AppBarMenu.displayName = 'AppBarMenu'

export const AppBarMenuItem = styled(
  Link,
  cva({
    base: {
      color: 'brandContrast',
      textDecoration: 'none',
      _hover: {
        textDecoration: 'underline',
      },
    },
  }),
)
AppBarMenuItem.displayName = 'AppBarMenuItem'
