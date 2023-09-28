'use client'
import { css, cva, cx } from '@committed/ss/css'
import { styled } from '@committed/ss/jsx'
import { SystemStyleObject } from '@committed/ss/types'
import {
  Content,
  Indicator,
  Item,
  Link,
  List,
  Root,
  Trigger,
  Viewport,
} from '@radix-ui/react-navigation-menu'
import { ComponentProps, FC } from 'react'
import {
  PickProps,
  Prettify,
  component,
  forwardRefDefine,
  forwardRefExtend,
} from '../../utils'
import { Button, focus, hover } from '../Button/Button'
import { ChevronDown } from '../Icons'
import { paperStyles } from '../Paper/Paper'

const NAVIGATION_CLASS = 'c-navigation'
const NAVIGATION_TRIGGER_CLASS = 'c-navigation-trigger'
const NAVIGATION_ARROW_CLASS = 'c-navigation-arrpw'
const NAVIGATION_VIEWPORT_CLASS = 'c-navigation-viewport'
const NAVIGATION_LINK_CLASS = 'c-navigation-link'
const NAVIGATION_LIST_CLASS = 'c-navigation-list'
const NAVIGATION_ITEM_CLASS = 'c-navigation-item'
const NAVIGATION_CONTENT_CLASS = 'c-navigation-content'
const NAVIGATION_CONTENT_LIST_CLASS = 'c-navigation-content-list'
const NAVIGATION_CONTENT_LIST_ITEM_CLASS = 'c-navigation-content-list-item'
const NAVIGATION_CONTENT_LIST_LINK_CLASS = 'c-navigation-content-list-link'
const NAVIGATION_VIEWPORT_POSITION_CLASS = 'c-navigation-viewport-position'
const NAVIGATION_INDICATOR_CLASS = 'c-navigation-indicator'

const StyledMenu = component(
  Root,
  NAVIGATION_CLASS,
  css({
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  }),
)

const StyledList = component(
  List,
  NAVIGATION_LIST_CLASS,
  css({
    display: 'flex',
    padding: 0,
    rowGap: '8px',
    listStyle: 'none',
    fontSize: 0,
    borderRadius: '$default',
    border: 'none',
  }),
)

const itemStyles = {
  '--main': 'token(colors.$primary)',
  '--mainHover': 'token(colors.$primary.10)',
  '--contrast': 'token(colors.$primary.contrast)',
  '--default': 'token(colors.$neutral)',
  '--defaultHover': 'token(colors.$neutral.10)',

  py: '$2',
  px: '$3',
  outline: 'none',
  userSelect: 'none',
  borderRadius: '$default',
  _hover: hover,
  _focus: focus,
} as const

const underlineClass = css({
  textDecoration: 'underline',
})

export type NavigationMenuLinkProps = Prettify<
  PickProps<typeof Link, 'href' | 'children'> &
    PickProps<typeof Button, 'className' | 'color' | 'variant'> & {
      underline?: boolean
    }
>

export const MenuLink = forwardRefDefine<typeof Link, NavigationMenuLinkProps>(
  (
    { className, href, underline = false, children, ...props },
    forwardedRef,
  ) => (
    <Button
      asChild
      className={cx(
        NAVIGATION_LINK_CLASS,
        underline ? underlineClass : '',
        className,
      )}
      {...props}
    >
      <Link href={href} ref={forwardedRef}>
        {children}
      </Link>
    </Button>
  ),
)
MenuLink.displayName = 'NavigationMenuLink'

const StyledCaret = component(
  ChevronDown,
  css({
    position: 'relative',
    color: 'inherit',
    top: 1,
    '[data-state=open] &': { transform: 'rotate(-180deg)' },
    _motionReduce: { transition: 'none' },
    _motionSafe: {
      transition: 'transform 250ms ease',
    },
  }),
)

export type NavigationMenuTriggerProps = ComponentProps<typeof Button> & {
  caret?: boolean
}

export const NavigationMenuTrigger = forwardRefDefine<
  typeof Trigger,
  NavigationMenuTriggerProps
>(({ className, children, caret = false, ...props }, forwardedRef) => (
  <Trigger asChild ref={forwardedRef}>
    <Button className={cx(NAVIGATION_TRIGGER_CLASS, className)} {...props}>
      {children}
      {caret && <StyledCaret aria-hidden />}
    </Button>
  </Trigger>
))
NavigationMenuTrigger.displayName = 'NavigationMenuTrigger'

const StyledContent = component(
  Content,
  NAVIGATION_CONTENT_CLASS,
  paperStyles,
  css({
    borderRadius: '$default',
    padding: '$4',

    display: 'flex',
    flexDirection: 'column',
    gap: '$2',

    _before: {
      boxShadow: 'none',
    },
    position: 'relative',
    top: 0,
    left: 0,
    width: '100%',
    // '@default': { width: 'auto' },
    _motionReduce: { transition: 'none' },
    _motionSafe: {
      animationDuration: '250ms',
      animationTimingFunction: 'ease',
      '&[data-motion="from-start"]': { animationName: 'enterFromLeft' },
      '&[data-motion="from-end"]': { animationName: 'enterFromRight' },
      '&[data-motion="to-start"]': { animationName: 'exitToLeft' },
      '&[data-motion="to-end"]': { animationName: 'exitToRight' },
    },
  }),
)

const StyledIndicator = component(
  Indicator,
  NAVIGATION_INDICATOR_CLASS,
  css({
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    height: 10,
    top: '100%',
    overflow: 'hidden',
    zIndex: 1,

    _motionReduce: { transition: 'none' },
    _motionSafe: {
      transition: 'width, transform 250ms ease',
      '&[data-state="visible"]': { animation: 'fadeIn 200ms ease' },
      '&[data-state="hidden"]': { animation: 'fadeOut 200ms ease' },
    },
  }),
)

const StyledArrow = component(
  'div',
  NAVIGATION_ARROW_CLASS,
  css({
    position: 'relative',
    top: '70%',
    backgroundColor: '$surface.solid',
    width: '$3',
    height: '$3',
    transform: 'rotate(45deg)',
    borderTopLeftRadius: 2,
  }),
)

const StyledIndicatorWithArrow = forwardRefExtend<
  typeof StyledIndicator,
  { className?: string }
>((props, forwardedRef) => (
  <StyledIndicator {...props} ref={forwardedRef}>
    <StyledArrow />
  </StyledIndicator>
))

const StyledViewport = component(
  Viewport,
  NAVIGATION_VIEWPORT_CLASS,
  css({
    position: 'relative',
    transformOrigin: 'top center',
    marginTop: '$2',
    width: '50%',
    backgroundColor: '$surface.solid',
    borderRadius: 6,
    overflow: 'hidden',
    boxShadow: '$2',
    height: 'var(--radix-navigation-menu-viewport-height)',

    _motionReduce: { transition: 'none' },
    _motionSafe: {
      transition: 'width, height, 300ms ease',
      _open: { animation: 'scaleIn 200ms ease' },
      _closed: { animation: 'scaleOut 200ms ease' },
    },
  }),
)

const ContentList = styled(
  component('ul', NAVIGATION_CONTENT_LIST_CLASS),
  cva({
    base: {
      display: 'grid',
      margin: 0,
      columnGap: '$2',
      rowGap: '$2',
    },
    variants: {
      layout: {
        row: {
          '@default': {
            gridAutoFlow: 'row',
            gridTemplateRows: 'repeat(3, 1fr)',
          },
        },
        column: {
          '@default': {
            gridAutoFlow: 'column',
            gridTemplateRows: 'repeat(3, 1fr)',
          },
        },
      },
    },
  }),
)

const ListItem = component('li', NAVIGATION_ITEM_CLASS)

const LinkTitle = component(
  'div',
  css({
    fontWeight: '$bold',
    fontSize: '$0',
    lineHeight: '$body',
    marginBottom: '$2',
    color: '$text',
  }),
)

const LinkText = component(
  'p',
  css({
    all: 'unset',
    color: '$text.secondary',
    lineHeight: '$body',
    fontWeight: '$regular',
    textDecoration: 'none',
  }),
)

const ViewportPosition = component(
  'div',
  NAVIGATION_VIEWPORT_POSITION_CLASS,
  css({
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    top: '100%',
    left: 0,
  }),
)

const StyledLink = component(
  Link,
  NAVIGATION_LINK_CLASS,
  css({
    ...itemStyles,
    display: 'block',
    textDecoration: 'none',
    borderRadius: '$default',
    _hover: { backgroundColor: '$primary.3' },
  } as SystemStyleObject),
)

const ContentListItem = forwardRefExtend<typeof StyledLink>(
  ({ children, ...props }, forwardedRef) => (
    <ListItem>
      <StyledLink {...props} ref={forwardedRef}>
        {children}
      </StyledLink>
    </ListItem>
  ),
)

export type ContentListTextLinkProps = {
  title: string
  text?: string
}

const ContentListLink: FC<ContentListTextLinkProps> = ({ title, text }) => (
  <>
    <LinkTitle>{title}</LinkTitle>
    {text && <LinkText>{text}</LinkText>}
  </>
)

const StyledItem = styled(Item, {})

export type MenuContentListItem = {
  href: string
  content: ContentListTextLinkProps
}

export type MenuContentList = {
  trigger: string
  links: MenuContentListItem[]
}

export type MenuLink = {
  href: string
  text: string
}

export type WrappedNavigationMenuProps = Prettify<
  ComponentProps<typeof Root> & {
    items: Array<MenuContentList | MenuLink>
    variant?: ComponentProps<typeof NavigationMenuTrigger>['variant']
  }
>

export type WrappedNavigationMenuItemProps = {
  item: MenuContentList | MenuLink
  key: number
  variant?: ComponentProps<typeof NavigationMenuTrigger>['variant']
}

//type guard for menu items
function isContentList(
  item: MenuContentList | MenuLink,
): item is MenuContentList {
  return (item as MenuContentList).trigger !== undefined
}

export const WrappedNavigationMenuItem: FC<WrappedNavigationMenuItemProps> = ({
  variant,
  item,
}) => {
  if (isContentList(item)) {
    return (
      <NavigationMenuItem>
        <NavigationMenuTrigger variant={variant} caret={true}>
          {item.trigger}
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <NavigationMenuContentList layout="row">
            {item.links.map((link, index) => (
              <NavigationMenuContentListItem href={link.href} key={index}>
                <NavigationMenuContentListLink
                  title={link.content.title}
                  text={link.content.text}
                />
              </NavigationMenuContentListItem>
            ))}
          </NavigationMenuContentList>
        </NavigationMenuContent>
      </NavigationMenuItem>
    )
  } else {
    return (
      <NavigationMenuItem>
        <NavigationMenuLink variant={variant} href={item.href}>
          {item.text}
        </NavigationMenuLink>
      </NavigationMenuItem>
    )
  }
}

export const WrappedNavigationMenu: FC<WrappedNavigationMenuProps> = ({
  variant,
  items,
}) => (
  <NavigationMenu>
    <NavigationMenuList>
      {items.map((item, index) => (
        <WrappedNavigationMenuItem variant={variant} item={item} key={index} />
      ))}
      <NavigationMenuIndicator />
    </NavigationMenuList>

    <NavigationViewportPosition>
      <NavigationMenuViewport />
    </NavigationViewportPosition>
  </NavigationMenu>
)

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
export const NavigationMenuLink = MenuLink
export const NavigationMenuList = StyledList
export const NavigationMenuItem = StyledItem
export const NavigationMenuContent = StyledContent
export const NavigationViewportPosition = ViewportPosition
export const NavigationMenuViewport = StyledViewport
export const NavigationMenuIndicator = StyledIndicatorWithArrow
export const NavigationMenuContentList = ContentList
export const NavigationMenuContentListItem = ContentListItem
export const NavigationMenuContentListLink = ContentListLink

NavigationMenu.displayName = 'NavigationMenu'
NavigationMenuLink.displayName = 'NavigationMenuLink'
NavigationMenuList.displayName = 'NavigationMenuList'
NavigationMenuItem.displayName = 'NavigationMenuItem'
NavigationMenuContent.displayName = 'NavigationMenuContent'
NavigationViewportPosition.displayName = 'NavigationViewportPosition'
NavigationMenuViewport.displayName = 'NavigationMenuViewport'
NavigationMenuIndicator.displayName = 'NavigationMenuIndicator'
NavigationMenuContentList.displayName = 'NavigationMenuContentList'
NavigationMenuContentListItem.displayName = 'NavigationMenuContentListItem'
NavigationMenuContentListLink.displayName = 'NavigationMenuContentListLink'
