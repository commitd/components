import React, { ComponentProps, ElementRef, forwardRef } from 'react'
import { styled, keyframes } from '@stitches/react'
import {
  Root,
  Link,
  Trigger,
  Content,
  Indicator,
  Viewport,
  Item,
  List
} from '@radix-ui/react-navigation-menu'
// import { mauve, violet } from '@radix-ui/colors'
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
  //   backgroundColor: 'white',
  padding: 4,
  //   borderRadius: 6,
  listStyle: 'none',
  //   boxShadow: `0 2px 10px $colors$brandGrey12`

  $$main: '$colors$primary',
  $$mainHover: '$colors$primaryHighlight',
  $$contrast: '$colors$primaryContrast',
  $$default: '$colors$default',
  $$defaultHover: '$colors$defaultHighlight',

  fontSize: '$0',
  borderRadius: '$default',
  backgroundColor: '$paper',
  border: 'none',
  width: 'fit-content; width: -moz-fit-content'
})

const itemStyles = {
  padding: '8px 12px',
  outline: 'none',
  userSelect: 'none',
  fontWeight: 500,
  lineHeight: 1,
  borderRadius: 4,
  fontSize: 15,
  color: '$paper',
  '&:focus': { position: 'relative', boxShadow: `0 0 0 $0 $colors$primary` },
  '&:hover': { backgroundColor: '$colors$primary7' }
}

const StyledTrigger = styled(Trigger, {
  all: 'unset',
  ...itemStyles,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
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
// export type NavigationMenuTriggerProps = Omit<
//   ComponentProps<typeof StyledTrigger>,
//   'asChild'
// > & {
//   caret?: boolean
// }

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
  borderRadius: '$default',
  padding: '$4',

  display: 'flex',
  flexDirection: 'column',
  gap: '$2',

  '&::before': {
    boxShadow: 'none'
  },
  filter:
    'drop-shadow(0px 3px 2.5px rgba(0,0,0,0.2)) drop-shadow(0px 6px 5px rgba(0,0,0,0.14)) drop-shadow(0px 1px 9px rgba(0,0,0,0.12))',
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  '@media only screen and (min-width: 600px)': { width: 'auto' },
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
  marginTop: 10,
  width: '100%',
  backgroundColor: '$paper',
  borderRadius: 6,
  overflow: 'hidden',
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  height: 'var(--radix-navigation-menu-viewport-height)',

  '@media only screen and (min-width: 600px)': {
    width: 'var(--radix-navigation-menu-viewport-width)'
  },
  '@media (prefers-reduced-motion: no-preference)': {
    transition: 'width, height, 300ms ease',
    '&[data-state="open"]': { animation: `${scaleIn} 200ms ease` },
    '&[data-state="closed"]': { animation: `${scaleOut} 200ms ease` }
  }
})

const ContentList = styled('ul', {
  display: 'grid',
  padding: '$5',
  margin: '$0',
  columnGap: '$3',
  listStyle: 'none',

  variants: {
    layout: {
      one: {
        '@media only screen and (min-width: 600px)': {
          width: 500,
          gridTemplateColumns: '.75fr 1fr'
        }
      },
      two: {
        '@media only screen and (min-width: 600px)': {
          width: 600,
          gridAutoFlow: 'column',
          gridTemplateRows: 'repeat(3, 1fr)'
        }
      }
    }
  }
})

const ListItem = styled('li', {})

// TODO: Replace/Match up with CC Links
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

type ContentListItemProps = ComponentProps<typeof StyledLink> & {
  title: string
}

const ContentListItem = forwardRef<
  //   ElementRef<typeof ListItem>,
  ElementRef<typeof StyledLink>,
  ContentListItemProps
>(({ children, title, ...props }, forwardedRef) => (
  <ListItem>
    <NavigationMenuLink
      {...props}
      ref={forwardedRef}
      css={{
        padding: 12,
        borderRadius: 6,
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

// Exports
export const NavigationMenu = StyledMenu
export const NavigationMenuList = StyledList
export const NavigationMenuItem = StyledItem
export const NavigationMenuLink = StyledLink
export const NavigationMenuContent = StyledContent
export const NavigationMenuViewport = StyledViewport
export const NavigationMenuIndicator = StyledIndicatorWithArrow
export const NavigationMenuContentList = ContentList
export const NavigationMenuContentListItem = ContentListItem
