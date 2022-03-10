import { Meta, Story } from '@storybook/react'
import React from 'react'
import { styled } from '../../stitches.config'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
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

const ViewportPosition = styled('div', {
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  top: '100%',
  left: 0
  // perspective: '2000px',
})

const Template: Story = args => (
  <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger caret={true}>
          <Text>Learn</Text>
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <NavigationMenuContentList layout="one">
            <NavigationMenuContentListItem
              href="https://stitches.dev/"
              title="Stitches"
            >
              <Text>CSS-in-JS with best-in-class developer experience.</Text>
            </NavigationMenuContentListItem>
            <NavigationMenuContentListItem href="/colors" title="Colors">
              <Text>Beautiful, thought-out palettes with auto dark mode.</Text>
            </NavigationMenuContentListItem>
            <NavigationMenuContentListItem
              href="https://icons.modulz.app/"
              title="Icons"
            >
              <Text>A crisp set of 15x15 icons, balanced and consistent.</Text>
            </NavigationMenuContentListItem>
          </NavigationMenuContentList>
        </NavigationMenuContent>
      </NavigationMenuItem>

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

    <ViewportPosition>
      <NavigationMenuViewport />
    </ViewportPosition>
  </NavigationMenu>
)

export const Default = Template.bind({})
