import { Meta, Story } from '@storybook/react'
import React from 'react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  NavigationViewportPosition,
  NavigationMenuContentList,
  NavigationMenuContentListItem
} from '.'
import { Text } from '../Text'

export default {
  title: 'Components/NavigationMenu',
  component: NavigationMenu,
  subcomponents: {
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
    NavigationMenuContentList,
    NavigationMenuContentListItem
  }
} as Meta

const Template: Story = args => (
  <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger caret={true}>
          <Text>Components</Text>
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <NavigationMenuContentList layout="row">
            <NavigationMenuContentListItem
              href="https://components.committed.software"
              title="Storybook"
            >
              <Text>
                A live storybook version of the current committed components.
              </Text>
            </NavigationMenuContentListItem>
            <NavigationMenuContentListItem
              href="/design-system-colour--page"
              title="Colors"
            >
              <Text>Beautiful, thought-out palettes with auto dark mode.</Text>
            </NavigationMenuContentListItem>
            <NavigationMenuContentListItem
              href="/components-icons--icon-grid"
              title="Icons"
            >
              <Text>
                A collection of available icons based on material designs.
              </Text>
            </NavigationMenuContentListItem>
          </NavigationMenuContentList>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuLink href="https://github.com/commitd/components">
          <Text>Github</Text>
        </NavigationMenuLink>
      </NavigationMenuItem>

      <NavigationMenuIndicator />
    </NavigationMenuList>

    <NavigationViewportPosition>
      <NavigationMenuViewport />
    </NavigationViewportPosition>
  </NavigationMenu>
)

export const Default = Template.bind({})

export const SimpleLinks = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink href="https://github.com/commitd/components">
            <Text>Github</Text>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="https://components.committed.software">
            <Text>Storybook</Text>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuIndicator />
      </NavigationMenuList>

      <NavigationViewportPosition>
        <NavigationMenuViewport />
      </NavigationViewportPosition>
    </NavigationMenu>
  )
}
