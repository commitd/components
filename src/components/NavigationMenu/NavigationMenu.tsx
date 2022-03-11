import React, { ComponentProps, ElementRef, forwardRef } from 'react'
import { styled, keyframes } from '@stitches/react'
import {
  Root,
  Trigger,
  Content,
  Indicator,
  Viewport,
  Item,
  List
} from '@radix-ui/react-navigation-menu'
import { Link } from '../Link'
import { ChevronDown } from '../Icons'
import { paperStyles } from '../Paper'

const enterFromRight = keyframes({
  from: { transform: 'translateX(200px)', opacity: 0 },
  to: { transform: 'translateX(0)', opacity: 1 }
})

const enterFromLeft = keyframes({
  from: { transform: 'translateX(-200px)', opacity: 0 },
  to: { transform: 'translateX(0)', opacity: 1 }
})

const exitToRight = keyframes({
  from: { transform: 'translateX(0)', opacity: 1 },
  to: { transform: 'translateX(200px)', opacity: 0 }
})

const exitToLeft = keyframes({
  from: { transform: 'translateX(0)', opacity: 1 },
  to: { transform: 'translateX(-200px)', opacity: 0 }
})

const scaleIn = keyframes({
  from: { transform: 'rotateX(-30deg) scale(0.9)', opacity: 0 },
  to: { transform: 'rotateX(0deg) scale(1)', opacity: 1 }
})

const scaleOut = keyframes({
  from: { transform: 'rotateX(0deg) scale(1)', opacity: 1 },
  to: { transform: 'rotateX(-10deg) scale(0.95)', opacity: 0 }
})

const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 }
})

const fadeOut = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 }
})

const StyledMenu = styled(Root, {
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  zIndex: 1
})

const StyledList = styled(List, {
  all: 'unset',
  display: 'flex',
  justifyContent: 'center',
  padding: 4,
  listStyle: 'none',

  fontSize: '$0',
  borderRadius: '$3',
  backgroundColor: '$paper',
  border: 'none',
  width: 'fit-content; width: -moz-fit-content'
})

const itemStyles = {
  padding: '$2 $3',
  outline: 'none',
  userSelect: 'none',
  borderRadius: 4,
  '&:focus': { position: 'relative', boxShadow: `0 0 0 $0 $colors$primary` },
  '&:hover': { backgroundColor: '$colors$primary7' }
}

const StyledTrigger = styled(Trigger, {
  all: 'unset',
  ...itemStyles,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  // textDecoration: 'underline',
  gap: 2
})

const StyledCaret = styled(ChevronDown, {
  position: 'relative',
  color: '$colors$primary',
  top: 1,
  '[data-state=open] &': { transform: 'rotate(-180deg)' },
  '@media (prefers-reduced-motion: no-preference)': {
    transition: 'transform 250ms ease'
  }
})

const NAV_MENU_TRIGGER_CLASS_NAME = 'c-popover-trigger'

export type NavigationMenuTriggerProps = ComponentProps<
  typeof StyledTrigger
> & {
  caret?: boolean
}
export const NavigationMenuTrigger = forwardRef<
  ElementRef<typeof StyledTrigger>,
  NavigationMenuTriggerProps
>(({ children, caret = false, ...props }, forwardedRef) => (
  <StyledTrigger
    className={NAV_MENU_TRIGGER_CLASS_NAME}
    {...props}
    ref={forwardedRef}
  >
    <>
      {children}
      {caret && <StyledCaret aria-hidden />}
    </>
  </StyledTrigger>
))
NavigationMenuTrigger.toString = () => `.${NAV_MENU_TRIGGER_CLASS_NAME}`

const StyledLink = styled(Link, {
  ...itemStyles,
  display: 'block',
  textDecoration: 'none',
  fontSize: 15,
  lineHeight: 1
})

const StyledContent = styled(Content, paperStyles, {
  borderRadius: '$3',
  padding: '$4',

  display: 'flex',
  flexDirection: 'column',
  gap: '$2',

  '&::before': {
    boxShadow: 'none'
  },
  filter:
    'drop-shadow(0px 3px 2.5px rgba(0,0,0,0.2)) drop-shadow(0px 6px 5px rgba(0,0,0,0.14)) drop-shadow(0px 1px 9px rgba(0,0,0,0.12))',
  position: 'relative',
  top: 0,
  left: 0,
  width: '100%',
  '@default': { width: 'auto' },
  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '250ms',
    animationTimingFunction: 'ease',
    '&[data-motion="from-start"]': { animationName: enterFromLeft },
    '&[data-motion="from-end"]': { animationName: enterFromRight },
    '&[data-motion="to-start"]': { animationName: exitToLeft },
    '&[data-motion="to-end"]': { animationName: exitToRight }
  }
})

const StyledIndicator = styled(Indicator, {
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'center',
  height: 10,
  top: '100%',
  overflow: 'hidden',
  zIndex: 1,

  '@media (prefers-reduced-motion: no-preference)': {
    transition: 'width, transform 250ms ease',
    '&[data-state="visible"]': { animation: `${fadeIn} 200ms ease` },
    '&[data-state="hidden"]': { animation: `${fadeOut} 200ms ease` }
  }
})

const StyledArrow = styled('div', {
  position: 'relative',
  top: '70%',
  backgroundColor: '$paper',
  width: '$3',
  height: '$3',
  transform: 'rotate(45deg)',
  borderTopLeftRadius: 2
})

const StyledIndicatorWithArrow = forwardRef<ElementRef<typeof StyledIndicator>>(
  (props, forwardedRef) => (
    <StyledIndicator {...props} ref={forwardedRef}>
      <StyledArrow />
    </StyledIndicator>
  )
)

const StyledViewport = styled(Viewport, {
  position: 'relative',
  transformOrigin: 'top center',
  marginTop: '$2',
  width: '100%',
  backgroundColor: '$paper',
  borderRadius: 6,
  overflow: 'hidden',
  boxShadow: '$2',
  height: 'var(--radix-navigation-menu-viewport-height)',

  '@media (prefers-reduced-motion: no-preference)': {
    transition: 'width, height, 300ms ease',
    '&[data-state="open"]': { animation: `${scaleIn} 200ms ease` },
    '&[data-state="closed"]': { animation: `${scaleOut} 200ms ease` }
  }
})

const ContentList = styled('ul', {
  display: 'grid',
  margin: '$0',
  columnGap: '$2',
  rowGap: '$2',
  listStyle: 'none',

  variants: {
    layout: {
      row: {
        '@default': {
          gridAutoFlow: 'row',
          gridTemplateRows: 'repeat(3, 1fr)'
        }
      },
      column: {
        '@default': {
          gridAutoFlow: 'column',
          gridTemplateRows: 'repeat(3, 1fr)'
        }
      }
    }
  }
})

const ListItem = styled('li', {})

const LinkTitle = styled('div', {
  fontWeight: '$bold',
  fontSize: '$0',
  lineHeight: '$body',
  marginBottom: '$2',
  color: '$text'
})

const LinkText = styled('p', {
  all: 'unset',
  color: '$textSecondary',
  lineHeight: '$body',
  fontWeight: '$regular'
})

const ViewportPosition = styled('div', {
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  top: '100%',
  left: 0
})

type ContentListItemProps = ComponentProps<typeof StyledLink> & {
  title: string
}

const ContentListItem = forwardRef<
  ElementRef<typeof StyledLink>,
  ContentListItemProps
>(({ children, title, ...props }, forwardedRef) => (
  <ListItem>
    <NavigationMenuLink
      {...props}
      ref={forwardedRef}
      css={{
        borderRadius: 3,
        '&:hover': { backgroundColor: '$colors$primary7' }
      }}
    >
      <>
        <LinkTitle>{title}</LinkTitle>
        <LinkText>{children}</LinkText>
      </>
    </NavigationMenuLink>
  </ListItem>
))

const StyledItem = styled(Item, {})

/**
 * NavigationMenu component
 *
 * Displays a collection of links for navigation websites or apps.
 *
 * Navigation Menu Items can either be in the form of simply links (by using a NavigationMenuLink) or
 * take the form of a extended menu, similar to a Popover, controlled by a NavigationMenuTrigger.
 *
 * Based on [Radix Dropdown Menu](https://radix-ui.com/primitives/docs/components/navigation-menu).
 */
export const NavigationMenu = StyledMenu
export const NavigationMenuList = StyledList
export const NavigationMenuItem = StyledItem
export const NavigationMenuLink = StyledLink
export const NavigationMenuContent = StyledContent
export const NavigationViewportPosition = ViewportPosition
export const NavigationMenuViewport = StyledViewport
export const NavigationMenuIndicator = StyledIndicatorWithArrow
export const NavigationMenuContentList = ContentList
export const NavigationMenuContentListItem = ContentListItem
