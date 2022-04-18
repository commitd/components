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
  NavigationMenuContentListLink,
} from '.'
import { Logo } from '../Logo'
import { Text } from '../Text'
import { Box } from '../Box'
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
    NavigationMenuContentListLink,
  },
} as Meta

const Template: Story = (args) => (
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
export const Variants: Story = () => {
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

      <NavigationMenu css={{ paddingTop: '$2' }}>
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

/** NavigationMenu also provides a wrapped version, aimed primary at use in [AppBar](/docs/components-appbar--default)
 * as show [here](/docs/components-appbar--with-navigation-menu), however can also be used elsewhere as a simplified version as shown in this example. */
export const Wrapped: Story = () => {
  const list = {
    trigger: 'Wrapped List',
    links: [
      {
        href: '/design-system-colour--page',
        content: {
          title: 'Colors',
          text: 'Beautiful, thought-out palettes with auto dark mode.',
        },
      },
      {
        href: '/components-icons--icon-grid',
        content: {
          title: 'Icons',
          text: 'A collection of available icons based on material designs.',
        },
      },
    ],
  }
  const storybookLink = {
    href: 'https://components.committed.software',
    text: 'Storybook',
  }
  const githubLink = {
    href: 'https://github.com/commitd/components',
    text: 'Github',
  }
  return <WrappedNavigationMenu items={[list, storybookLink, githubLink]} />
}

/** Content does not need to be limited to simple text based links, such as NavigationMenuContentListLink,
 * but instead can be any customised react node instead. */
export const AlternativeContent: Story = () => {
  const MyAltContent = (
    <NavigationMenuContentListItem
      href="https://components.committed.software"
      css={{ gridRow: 'span 3' }}
    >
      <Box
        css={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
          background: `linear-gradient(135deg, $colors$grey11 0%, $colors$grey8 100%);`,
          borderRadius: 6,
          padding: 25,
        }}
      >
        <Logo css={{ size: '$10' }} />
        <Text
          size={4}
          weight={'bold'}
          css={{
            color: '$colors$brandYellow9',
            marginTop: 16,
            marginBottom: 7,
          }}
        >
          Components
        </Text>
      </Box>
    </NavigationMenuContentListItem>
  )

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger caret={false}>
            Alternative Content
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuContentList layout="row">
              {MyAltContent}
              <NavigationMenuContentListItem href="/design-system-colour--page">
                <NavigationMenuContentListLink
                  title="Colors"
                  text="Beautiful, thought-out palettes with auto dark mode."
                />
              </NavigationMenuContentListItem>
              <NavigationMenuContentListItem href="/components-icons--icon-grid">
                <NavigationMenuContentListLink title="Icons" />
              </NavigationMenuContentListItem>
            </NavigationMenuContentList>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuIndicator />
      </NavigationMenuList>

      <NavigationViewportPosition>
        <NavigationMenuViewport />
      </NavigationViewportPosition>
    </NavigationMenu>
  )
}
