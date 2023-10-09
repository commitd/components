import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuContentList,
  NavigationMenuContentListItem,
  NavigationMenuContentListLink,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  NavigationViewportPosition,
} from '@committed/ds'

export const NavigationMenuExample = () => (
  <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger caret>Components</NavigationMenuTrigger>
        <NavigationMenuContent>
          <NavigationMenuContentList layout="row">
            <NavigationMenuContentListItem href="https://components.committed.software">
              <NavigationMenuContentListLink
                text="A live storybook version of the current committed components."
                title="Storybook"
              />
            </NavigationMenuContentListItem>
            <NavigationMenuContentListItem href="/design-system-colour--page">
              <NavigationMenuContentListLink
                text="Beautiful, thought-out palettes with auto dark mode."
                title="Colors"
              />
            </NavigationMenuContentListItem>
            <NavigationMenuContentListItem href="/components-icons--icon-grid">
              <NavigationMenuContentListLink
                text="A collection of available icons based on material designs."
                title="Icons"
              />
            </NavigationMenuContentListItem>
          </NavigationMenuContentList>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink
          href="https://github.com/commitd/components"
          underline
        >
          Github
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuIndicator />
    </NavigationMenuList>
    <NavigationViewportPosition>
      <NavigationMenuViewport />
    </NavigationViewportPosition>
  </NavigationMenu>
)
