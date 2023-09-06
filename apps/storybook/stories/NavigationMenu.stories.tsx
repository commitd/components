import {
  Box,
  Logo,
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
  Text,
  WrappedNavigationMenu,
} from '@committed/ds'
import { Meta, StoryFn } from '@storybook/react'

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
} satisfies Meta<typeof NavigationMenu>

export const Default: StoryFn = (args) => (
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
        <NavigationMenuLink
          underline
          href="https://github.com/commitd/components"
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

/** Links and triggers follow the same variant formats as Buttons, namely Primary, Secondary, Tertiary and Brand. By Default, Secondary is used.*/
export const Variants: StoryFn = () => {
  return (
    <>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink href="/components-button--default#variant">
              Default
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/components-button--default#variant"
              variant="solid"
              underline
            >
              Solid
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/components-button--default#variant"
              variant="outline"
              underline
            >
              Outline
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/components-button--default#variant"
              variant="text"
              underline
            >
              Text
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
            <NavigationMenuTrigger caret>Default</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuContentList layout="row"></NavigationMenuContentList>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger caret variant="solid">
              Solid
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuContentList layout="row"></NavigationMenuContentList>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger caret variant="outline">
              Outline
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuContentList layout="row"></NavigationMenuContentList>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger caret variant="text" color="$info">
              Text+Color
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
export const Wrapped: StoryFn = () => {
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
export const AlternativeContent: StoryFn = () => {
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
          background: `linear-gradient(135deg, token(colors.$neutral.11) 0%, token(colors.$neutral.8) 100%);`,
          borderRadius: '6px',
          padding: '25px',
        }}
      >
        <Logo css={{ size: '$10' }} />
        <Text
          size={'$4'}
          weight={'bold'}
          css={{
            color: '$primary',
            marginTop: '16px',
            marginBottom: '7px',
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
