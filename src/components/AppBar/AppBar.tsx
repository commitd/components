import type * as Polymorphic from '@radix-ui/react-polymorphic'
import React, { ComponentProps, forwardRef, PropsWithChildren } from 'react'
import type { CSSProps } from 'stitches.config'
import { CSS, styled } from 'stitches.config'
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

const HEADING_TAG = 'h1'

type AppBarHeadingOwnProps = CSSProps & ComponentProps<typeof Heading>

type AppBarHeadingComponent = Polymorphic.ForwardRefComponent<
  typeof HEADING_TAG,
  AppBarHeadingOwnProps
>

export const AppBarHeading = forwardRef(
  ({ children, css, ...props }, forwardedRef) => (
    <>
      <div>
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
      </div>
      <Box css={{ flex: 1 }} />
    </>
  )
) as AppBarHeadingComponent

export const AppBarActions = styled('div', {
  '> *': {
    color: '$brandContrast',
  },
})

const BUTTON_TAG = 'button'

type AppBarButtonVariants = ComponentProps<typeof Button>
type AppBarButtonOwnProps = CSSProps & AppBarButtonVariants

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

export const AppBarMenuItem: React.FC<
  React.ComponentProps<typeof Link>
> = styled(Link, {
  color: '$brandContrast',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
}) as React.FC<React.ComponentProps<typeof Link>>
