import React, { ComponentProps, ElementRef, forwardRef } from 'react'
import { css, cva, cx } from '../../../styled-system/css'
import { styled } from '../../../styled-system/jsx'
import type { AsProps, CSSProps } from '../../stitches.config'
import { withClasses } from '../../utils'
import { Box } from '../Box'
import { Button } from '../Button'
import { Heading } from '../Heading'
import { Link } from '../Link'

const appBar = cva({
  base: {
    display: 'flex',
    background: 'brand',
    color: 'brandContrast',
    minHeight: 8,
    paddingLeft: 4,
    paddingRight: 4,
    alignItems: 'center',
    position: 'relative',
  },
})

/**
 * The App Bar should the used for information and actions on the current screen.
 */
export const AppBar = styled('header', appBar)

const StyledHeading = styled(
  Heading,
  cva({
    base: {
      color: 'brandContrast',
      fontSize: 1,
      fontWeight: 'regular',
    },
  })
)

const HEADING_TAG = 'h1'

type AppBarHeadingRootProps = ComponentProps<typeof Heading>
type AppBarHeadingProps = AppBarHeadingRootProps & CSSProps & AsProps

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

export const AppBarActions = styled(
  'div',
  cva({
    base: {
      '> *': {
        color: 'brandContrast',
      },
    },
  })
)

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

export const AppBarMenu = withClasses(
  Box,
  css({
    width: '100%',
    height: '100%',
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
    pointerEvents: 'none',
    '& > *': {
      pointerEvents: 'auto',
    },
  })
)

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
  })
)
