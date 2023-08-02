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
import { ComponentProps, ElementRef, FC, forwardRef } from 'react'
import { withClasses } from '../../utils'
import { focus, hover, mainVariants } from '../Button/Button'
import { ChevronDown } from '../Icons'
import { paperStyles } from '../Paper'

const NAVIGATION_CLASS = 'c-navigation'
const NAVIGATION_TRIGGER_CLASS = 'c-navigation-trigger'
const NAVIGATION_VIEWPORT_CLASS = 'c-navigation-viewport'
const NAVIGATION_LINK_CLASS = 'c-navigation-link'
const NAVIGATION_LIST_CLASS = 'c-navigation-list'
const NAVIGATION_ITEM_CLASS = 'c-navigation-item'
const NAVIGATION_CONTENT_CLASS = 'c-navigation-content'
const NAVIGATION_VIEWPORT_POSITION_CLASS = 'c-navigation-viewport-position'
const NAVIGATION_INDICATOR_CLASS = 'c-navigation-indicator'
// const NAVIGATION_CONTENT_LIST_CLASS = 'c-navigation-content-list'
// const NAVIGATION_CONTENT_LIST_ITEM_CLASS =
//   'c-navigation-content-list-item'
// const NAVIGATION_CONTENT_LIST_LINK_CLASS =
//   'c-navigation-content-list-link'

const StyledMenu = withClasses(
  Root,
  NAVIGATION_CLASS,
  css({
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  })
)

const StyledList = withClasses(
  List,
  NAVIGATION_LIST_CLASS,
  css({
    all: 'unset',
    display: 'flex',
    padding: 0,
    gap: '$2',
    listStyle: 'none',
    fontSize: 0,
    borderRadius: '$default',
    backgroundColor: '$transparent',
    border: 'none',
  })
)

const itemStyles = {
  '--main': 'token(colors.$primary)',
  '--mainHover': 'token(colors.$primaryHighlight)',
  '--contrast': 'token(colors.$primaryContrast)',
  '--default': 'token(colors.$default)',
  '--defaultHover': 'token(colors.$defaultHighlight)',

  padding: '$2 $3',
  outline: 'none',
  userSelect: 'none',
  borderRadius: '$default',
  '&:hover': hover,
  _focus: focus,
  gap: 0,
}

const menuVariants = {
  variant: mainVariants,
}

const StyledTrigger = styled(
  Trigger,
  cva({
    base: {
      all: 'unset',
      ...itemStyles,
      padding: '$1 $3',
      boxSizing: 'border-box',
      border: 'solid 2px',
      borderColor: 'transparent',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    } as SystemStyleObject,
    variants: menuVariants,
    defaultVariants: {
      variant: 'secondary',
    },
  })
)

const StyledMenuLink = withClasses(
  styled(
    Link,
    cva({
      base: {
        ...itemStyles,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '100%',
      } as SystemStyleObject,
      variants: menuVariants,
      defaultVariants: {
        variant: 'secondary',
      },
    })
  ),
  NAVIGATION_LINK_CLASS
)

const StyledCaret = withClasses(
  ChevronDown,
  css({
    position: 'relative',
    color: '$colors$primary',
    top: 1,
    '[data-state=open] &': { transform: 'rotate(-180deg)' },
    _motionReduce: { transition: 'none' },
    _motionSafe: {
      transition: 'transform 250ms ease',
    },
  })
)

export type NavigationMenuTriggerProps = ComponentProps<
  typeof StyledTrigger
> & {
  caret?: boolean
}
export const NavigationMenuTrigger = forwardRef<
  ElementRef<typeof StyledTrigger>,
  NavigationMenuTriggerProps
>(({ className, children, caret = false, ...props }, forwardedRef) => (
  <StyledTrigger
    className={cx(NAVIGATION_TRIGGER_CLASS, className)}
    {...props}
    ref={forwardedRef}
  >
    <>
      {children}
      {caret && <StyledCaret aria-hidden />}
    </>
  </StyledTrigger>
))
NavigationMenuTrigger.displayName = 'NavigationMenuTrigger'

const StyledContent = withClasses(
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
      '&[data-motion="from-start"]': { animationName: '$enterFromLeft' },
      '&[data-motion="from-end"]': { animationName: '$enterFromRight' },
      '&[data-motion="to-start"]': { animationName: '$exitToLeft' },
      '&[data-motion="to-end"]': { animationName: '$exitToRight' },
    },
  })
)

const StyledIndicator = withClasses(
  Indicator,
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
      '&[data-state="visible"]': { animation: '$fadeIn 200ms ease' },
      '&[data-state="hidden"]': { animation: '$fadeOut 200ms ease' },
    },
  })
)

const StyledArrow = withClasses(
  'div',
  css({
    position: 'relative',
    top: '70%',
    backgroundColor: '$paper',
    width: '$3',
    height: '$3',
    transform: 'rotate(45deg)',
    borderTopLeftRadius: 2,
  })
)

const StyledIndicatorWithArrow = forwardRef<ElementRef<typeof StyledIndicator>>(
  (props, forwardedRef) => (
    <StyledIndicator {...props} ref={forwardedRef}>
      <StyledArrow />
    </StyledIndicator>
  )
)

const StyledViewport = withClasses(
  Viewport,
  NAVIGATION_VIEWPORT_CLASS,
  css({
    position: 'relative',
    transformOrigin: 'top center',
    marginTop: '$2',
    width: '50%',
    backgroundColor: '$paper',
    borderRadius: 6,
    overflow: 'hidden',
    boxShadow: '$2',
    height: 'var(--radix-navigation-menu-viewport-height)',

    _motionReduce: { transition: 'none' },
    _motionSafe: {
      transition: 'width, height, 300ms ease',
      '&[data-state="open"]': { animation: `$scaleIn 200ms ease` },
      '&[data-state="closed"]': { animation: `$scaleOut 200ms ease` },
    },
  })
)

const ContentList = styled(
  'ul',
  cva({
    base: {
      display: 'grid',
      margin: 0,
      columnGap: '$2',
      rowGap: '$2',
      listStyle: 'none',
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
  })
)

const ListItem = withClasses('li', NAVIGATION_ITEM_CLASS)

const LinkTitle = withClasses(
  'div',
  css({
    fontWeight: '$bold',
    fontSize: 0,
    lineHeight: '$body',
    marginBottom: '$2',
    color: '$text',
  })
)

const LinkText = withClasses(
  'p',
  css({
    all: 'unset',
    color: '$textSecondary',
    lineHeight: '$body',
    fontWeight: '$regular',
    textDecoration: 'none',
  })
)

const ViewportPosition = withClasses(
  'div',
  NAVIGATION_VIEWPORT_POSITION_CLASS,
  css({
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    top: '100%',
    left: 0,
  })
)

const StyledLink = withClasses(
  Link,
  NAVIGATION_LINK_CLASS,
  css({
    ...itemStyles,
    display: 'block',
    textDecoration: 'none',
    borderRadius: '$default',
    _hover: { backgroundColor: '$colors$primary7' },
  } as SystemStyleObject)
)

const ContentListItem = forwardRef<
  ElementRef<typeof StyledLink>,
  ComponentProps<typeof StyledLink>
>(({ children, ...props }, forwardedRef) => (
  <ListItem>
    <StyledLink {...props} ref={forwardedRef}>
      {children}
    </StyledLink>
  </ListItem>
))

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

export type WrappedNavigationMenuProps = {
  items: Array<MenuContentList | MenuLink>
}

export type WrappedNavigationMenuItemProps = {
  item: MenuContentList | MenuLink
  key: number
}

//type guard for menu items
function isContentList(
  item: MenuContentList | MenuLink
): item is MenuContentList {
  return (item as MenuContentList).trigger !== undefined
}

export const WrappedNavigationMenuItem: FC<WrappedNavigationMenuItemProps> = ({
  item,
}) => {
  if (isContentList(item)) {
    return (
      <NavigationMenuItem>
        <NavigationMenuTrigger caret={true} variant={'brand'}>
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
        <NavigationMenuLink href={item.href} variant={'brand'}>
          {item.text}
        </NavigationMenuLink>
      </NavigationMenuItem>
    )
  }
}

export const WrappedNavigationMenu: FC<WrappedNavigationMenuProps> = ({
  items,
}) => (
  <NavigationMenu>
    <NavigationMenuList>
      {items.map((item, index) => (
        <WrappedNavigationMenuItem item={item} key={index} />
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
export const NavigationMenuLink = StyledMenuLink
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
