import React, { ComponentProps, ElementRef, forwardRef } from 'react'
import type { AsProps, CSSProps } from '../../stitches.config'
import { styled } from '../../stitches.config'
import { Box } from '../Box'
import { Button } from '../Button'
import { Heading } from '../Heading'
import { Link } from '../Link'

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
  position: 'relative',
})

const StyledHeading = styled(Heading, {
  color: '$brandContrast',
  fontSize: '$1',
  fontWeight: 'regular',
})

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
AppBarHeading.toString = () => `.${StyledHeading.className}`

export const AppBarActions = styled('div', {
  '> *': {
    color: '$brandContrast',
  },
})

const APP_BAR_BUTTON_CLASS_NAME = 'c-app-bar-button'

export const AppBarButton = forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithRef<typeof Button>
>(({ children, ...props }, forwardedRef) => (
  <Button
    className={APP_BAR_BUTTON_CLASS_NAME}
    variant="brand"
    {...props}
    ref={forwardedRef}
  >
    {children}
  </Button>
))
AppBarButton.toString = () => `.${APP_BAR_BUTTON_CLASS_NAME}`

export const AppBarMenu: React.FC = ({ children }) => (
  <Box
    css={{
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
      gap: '$5',
      pointerEvents: 'none',
      '& > *': {
        pointerEvents: 'auto',
      },
    }}
  >
    {children}
  </Box>
)

export const AppBarMenuItem = styled(Link, {
  color: '$brandContrast',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
})
