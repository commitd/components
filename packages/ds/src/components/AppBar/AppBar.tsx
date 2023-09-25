import { css, cva, cx } from '@committed/ss/css'
import { styled } from '@committed/ss/jsx'
import { SurfaceVariants } from '@committed/utilities'
import React, { ComponentProps, ElementRef, forwardRef } from 'react'
import { CComponent, component, forwardRefExtend } from '../../utils'
import { Box } from '../Box'
import { Button } from '../Button'
import { Heading } from '../Heading'
import { Link } from '../Link'

/**
 * The App Bar should the used for information and actions on the current screen.
 */
export const AppBar: CComponent<'header', SurfaceVariants> = styled(
  component('header', 'c-appbar'),
  {
    base: {
      display: 'flex',
      minHeight: '$8',
      paddingLeft: '$4',
      paddingRight: '$4',
      alignItems: 'center',
      position: 'relative',
      surface: 'solid',
      gap: '$3',
      justifyContent: 'space-between',
    },
  },
)
AppBar.displayName = 'AppBar'

const StyledHeading = styled(
  Heading,
  cva({
    base: {
      colorPalette: '$primary',
      color: 'colorPalette.text.low',
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
>(({ children, className, ...props }, forwardedRef) => (
  <StyledHeading
    as={HEADING_TAG}
    className={cx('c-appbar-heading', className)}
    {...props}
    ref={forwardedRef}
  >
    {children}
  </StyledHeading>
))
AppBarHeading.displayName = 'AppBarHeading'

export const AppBarActions = component('div', 'c-appbar-actions', css({}))
AppBarActions.displayName = 'AppBarActions'

const APP_BAR_BUTTON_CLASS_NAME = 'c-app-bar-button'

export const AppBarButton = forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithRef<typeof Button>
>(({ children, className, variant = 'text', ...props }, forwardedRef) => (
  <Button
    className={cx(APP_BAR_BUTTON_CLASS_NAME, className)}
    variant={variant}
    {...props}
    ref={forwardedRef}
  >
    {children}
  </Button>
))
AppBarButton.displayName = 'AppBarButton'

const AppBarMenuContent = component(
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
export const AppBarMenu = forwardRefExtend<typeof Box>(
  ({ children, ...props }, forwardedRef) => (
    <Box css={{ position: 'relative' }} flexGrow={1} {...props}>
      <AppBarMenuContent>{children}</AppBarMenuContent>
    </Box>
  ),
)
AppBarMenu.displayName = 'AppBarMenu'

export const AppBarMenuItem = styled(
  Link,
  cva({
    base: {
      colorPalette: '$primary',
      color: 'colorPalette.text.low',
      textDecoration: 'none',
      _hover: {
        textDecoration: 'underline',
      },
    },
  }),
)
AppBarMenuItem.displayName = 'AppBarMenuItem'
