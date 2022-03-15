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
  NavigationMenuContentListItem,
  NavigationMenuContentListLink
} from '.'
import { WrappedNavigationMenu } from './NavigationMenu'

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
    NavigationMenuContentListItem,
    NavigationMenuContentListLink
  }
} as Meta

const Template: Story = args => (
  <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger caret={true}>Components</NavigationMenuTrigger>
        <NavigationMenuContent>
          <NavigationMenuContentList layout="row">
            <NavigationMenuContentListItem href="https://components.committed.software">
              <NavigationMenuContentListLink
                title="Storybook"
                text="A live storybook version of the current committed components."
              />
            </NavigationMenuContentListItem>
            <NavigationMenuContentListItem href="/design-system-colour--page">
              <NavigationMenuContentListLink
                title="Colors"
                text="Beautiful, thought-out palettes with auto dark mode."
              />
            </NavigationMenuContentListItem>
            <NavigationMenuContentListItem href="/components-icons--icon-grid">
              <NavigationMenuContentListLink
                title="Icons"
                text="A collection of available icons based on material designs."
              />
            </NavigationMenuContentListItem>
          </NavigationMenuContentList>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuLink href="https://github.com/commitd/components">
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

export const Default = Template.bind({})

/** Links and triggers follow the same variant formats as Buttons, namely Primary, Secondary, Tertiary and Brand. By Default, Secondary is used.*/
export const Variants = () => {
  return (
    <>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/components-button--default#variant"
              variant={'primary'}
            >
              Primary
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/components-button--default#variant"
              variant={'secondary'}
            >
              Secondary
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/components-button--default#variant"
              variant={'brand'}
            >
              Brand
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/components-button--default#variant"
              variant={'tertiary'}
            >
              Tertiary
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuIndicator />
        </NavigationMenuList>

        <NavigationViewportPosition>
          <NavigationMenuViewport />
        </NavigationViewportPosition>
      </NavigationMenu>

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger caret={true} variant={'primary'}>
              Primary
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuContentList layout="row"></NavigationMenuContentList>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger caret={true} variant={'secondary'}>
              Secondary
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuContentList layout="row"></NavigationMenuContentList>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger caret={true} variant={'tertiary'}>
              Tertiary
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuContentList layout="row"></NavigationMenuContentList>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger caret={true} variant={'brand'}>
              Brand
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuContentList layout="row"></NavigationMenuContentList>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuIndicator />
        </NavigationMenuList>

        <NavigationViewportPosition>
          <NavigationMenuViewport />
        </NavigationViewportPosition>
      </NavigationMenu>
    </>
  )
}

/** NavigationMenu also provides a wrapped version, aimed primary at use in [AppBar](TODO LINK) as show [here](TODO LINK), however can also be used elsewhere as a simplified version as shown in this example. */
export const Wrapped = () => {
  const list = {
    trigger: 'Wrapped List',
    links: [
      {
        href: '/design-system-colour--page',
        content: {
          title: 'Colors',
          text: 'Beautiful, thought-out palettes with auto dark mode.'
        }
      },
      {
        href: '/components-icons--icon-grid',
        content: {
          title: 'Icons',
          text: 'A collection of available icons based on material designs.'
        }
      }
    ]
  }
  const storybookLink = {
    href: 'https://components.committed.software',
    text: 'Storybook'
  }
  const githubLink = {
    href: 'https://github.com/commitd/components',
    text: 'Github'
  }
  return <WrappedNavigationMenu items={[list, storybookLink, githubLink]} />
}
