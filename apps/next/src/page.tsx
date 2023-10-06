'use client'

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeading,
  CardLeadIn,
  CardSubheading,
  Check,
  Checkbox,
  Chip,
  ConfirmDialog,
  ConfirmDialogActions,
  ConfirmDialogContent,
  ConfirmDialogTrigger,
  Container,
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuItemShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
  Dialog,
  DialogContent,
  DialogTrigger,
  Divider,
  Drawer,
  DrawerContent,
  DrawerTrigger,
  Flex,
  Form,
  FormButton,
  FormControl,
  FormControlHelp,
  Grid,
  Heading,
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
  IconButton,
  Image,
  Inline,
  Input,
  Link,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Logo,
  Menu,
  MenuButton,
  MenuContent,
  MenuItem,
  MenuItemShortcut,
  MenuSub,
  MenuSubContent,
  MenuSubTrigger,
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
  Overlay,
  Pagination,
  Paper,
  Popover,
  Progress,
  Radio,
  Select,
  Skeleton,
  Slider,
  Spinner,
  Stack,
  Subheading,
  Svg,
  Switch,
  Table,
  Tabs,
  Text,
  TextArea,
  ThemeSwitch,
  Toggle,
  ToggleGroup,
  ToggleGroupItem,
  Tooltip
} from '@committed/ds'
import { css } from '@committed/ss'
import { mdiComment, mdiOpenInNew, mdiPencil, mdiThumbUp } from '@mdi/js'
import { ToastExample } from '../src/toast'


export default function Page() {
  return (
    <Stack>
      <Heading variant="h2">Card</Heading>
      <Inline wrap>
        <Card>
          <CardHeading>
            Heading
            <IconButton variant="text">
              <Svg path={mdiPencil} />
            </IconButton>
          </CardHeading>
          <CardContent>
            <Text>Lorem Ipsum is simply dummy text...</Text>
          </CardContent>
          <CardActions>
            <Button variant="solid" colorPalette="$primary">
              Action
            </Button>
          </CardActions>
        </Card>
        <Card>
          <CardHeading>
            Heading
            <IconButton variant="text">
              <Svg path={mdiPencil} />
            </IconButton>
          </CardHeading>
          <CardSubheading>Subheading</CardSubheading>
          <CardContent>
            <Text>Lorem Ipsum is simply dummy text...</Text>
          </CardContent>
          <CardActions>
            <Button variant="text" color="neutral">
              Cancel
            </Button>
            <Button variant="solid" color="primary">
              Action
            </Button>
          </CardActions>
        </Card>
        <Card>
          <CardLeadIn>
            Lead in
            <IconButton path={mdiPencil} variant="text" />
          </CardLeadIn>
          <CardHeading asChild>
            <h3>Header</h3>
          </CardHeading>
          <CardContent>
            <Text>Lorem Ipsum is simply dummy text...</Text>
          </CardContent>
          <CardActions justifyContent="flex-start">
            <IconButton
              path={mdiThumbUp}
              variant="text"
              className={css({
                color: 'info',
              })}
            />
            <IconButton
              path={mdiOpenInNew}
              variant="text"
              className={css({
                color: '$text.secondary',
              })}
            />
            <IconButton
              path={mdiComment}
              variant="text"
              className={css({
                color: '$text.secondary',
              })}
            />
          </CardActions>
        </Card>
      </Inline>

      <Heading variant="h2">Checkbox</Heading>
      <Checkbox label="Checkbox" />
      <Heading variant="h2">Chip</Heading>
      <Inline>
        <Chip />
        <Chip colorPalette="$primary" />
        <Chip colorPalette="$success" onClick={() => alert('clicked')} />
        <Chip colorPalette="$error" closable onClick={() => alert('clicked')} />
      </Inline>
      <Heading variant="h2">ConfirmDialog</Heading>
      <ConfirmDialog>
        <ConfirmDialogTrigger>
          <Button>Show Dialog</Button>
        </ConfirmDialogTrigger>
        <ConfirmDialogContent
          description="Are you sure this is a confirm dialog?"
          title="Confirm Dialog"
        >
          <ConfirmDialogActions confirm="Confirm" onConfirm={() => {}} />
        </ConfirmDialogContent>
      </ConfirmDialog>
      <Heading variant="h2">Container</Heading>
      <Container
        maxWidth="responsive"
        css={{
          backgroundColor: {
            xl: '$warning.5',
            lg: '$success.5',
            md: '$info.5',
            sm: '$error.5',
            base: '$primary.5',
          },
          py: '$3',
          textAlign: 'center',
        }}
      >
        Container
      </Container>
      <Heading variant="h2">ContextMenu</Heading>
      <ContextMenu>
        <ContextMenuTrigger>
          <Flex
            css={{
              backgroundColor: '$neutral4',
              color: '$text',
              padding: '$2',
              minHeight: 150,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            Right click anywhere
          </Flex>
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem>
            New Tab <ContextMenuItemShortcut>⌘+T</ContextMenuItemShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            New Window <ContextMenuItemShortcut>⌘+N</ContextMenuItemShortcut>
          </ContextMenuItem>
          <ContextMenuSub>
            <ContextMenuSubTrigger>Developer</ContextMenuSubTrigger>
            <ContextMenuSubContent>
              <ContextMenuItem>Test</ContextMenuItem>
              <ContextMenuItem>Build</ContextMenuItem>
              <ContextMenuSub>
                <ContextMenuSubTrigger>More</ContextMenuSubTrigger>
                <ContextMenuSubContent>
                  <ContextMenuItem>Run</ContextMenuItem>
                  <ContextMenuItem>Start</ContextMenuItem>
                </ContextMenuSubContent>
              </ContextMenuSub>
            </ContextMenuSubContent>
          </ContextMenuSub>
        </ContextMenuContent>
      </ContextMenu>
      <Heading variant="h2">Dialog</Heading>
      <Dialog>
        <DialogTrigger>
          <Button>Show Dialog</Button>
        </DialogTrigger>
        <DialogContent>This is a dialog</DialogContent>
      </Dialog>
      <Heading variant="h2">Divider</Heading>
      <Divider />
      <Heading variant="h2">Drawer</Heading>
      <Drawer>
        <DrawerTrigger>
          <Button>Show Drawer</Button>
        </DrawerTrigger>
        <DrawerContent>This is a Drawer</DrawerContent>
      </Drawer>
      <Heading variant="h2">Flex</Heading>
      <Flex />
      <Heading variant="h2">Form</Heading>
      <Form onSubmit={() => {}}>
        <FormControl>
          <Input
            id="signin-email"
            label="Email"
            name="email"
            onValueChange={() => {}}
            placeholder="hello@committed.io"
            required
            type="email"
            value=""
          />
          <FormControlHelp
            defaultText="Input your email address"
            errorText={null}
          />
        </FormControl>
        <FormControl>
          <Input
            id="signin-password"
            label="Password"
            name="password"
            onValueChange={() => {}}
            required
            type="password"
            value=""
          />
          <FormControlHelp defaultText="Input your password" errorText={null} />
        </FormControl>
        <FormButton
          errors={{
            email: null,
            password: null,
            touched: 'Not filled in',
          }}
        />
      </Form>
      <Heading variant="h2">Grid</Heading>
      <Grid
        css={{
          gridTemplateColumns: '100px 100px 100px 100px',
          gridTemplateRows: '50px 100px 50px',
          gridTemplateAreas: `'header header header header' 'sidebar . main main' 'footer footer footer footer'`,
        }}
      >
        <GridBox
          css={{
            gridArea: 'header',
          }}
        >
          Header
        </GridBox>
        <GridBox
          css={{
            gridArea: 'sidebar',
          }}
        >
          Sidebar
        </GridBox>
        <GridBox
          css={{
            gridArea: 'main',
          }}
        >
          Main
        </GridBox>
        <GridBox
          css={{
            gridArea: 'footer',
          }}
        >
          Footer
        </GridBox>
      </Grid>
      <Heading variant="h2">Heading</Heading>
      <Heading variant="h1">Heading 1</Heading>
      <Heading variant="h2">Heading 2</Heading>
      <Heading variant="h3">Heading 3</Heading>
      <Heading variant="h4">Heading 4</Heading>
      <Heading variant="h5">Heading 5</Heading>
      <Heading variant="h6">Heading 6</Heading>
      {/* <Heading variant="h2">Hidden</Heading>
      <Hidden /> */}
      <Heading variant="h2">HoverCard</Heading>
      <HoverCard>
        <HoverCardTrigger>
          <Link href="https://committed.io" target="_blank">
            Committed Website
          </Link>
        </HoverCardTrigger>
        <HoverCardContent surface="solid">
          <CardLeadIn>https://committed.io</CardLeadIn>
          <CardHeading asChild>
            <h3>Committed Software</h3>
          </CardHeading>
          <CardContent>
            <Text>
              Bespoke software company specializing in integrating the best of
              breed open source technologies to allow rapid development and
              minimal duplication of effort.
            </Text>
          </CardContent>
        </HoverCardContent>
      </HoverCard>
      <Heading variant="h2">IconButton</Heading>
      <Inline>
        <IconButton variant="solid">
          <Check />
        </IconButton>
        <IconButton variant="outline">
          <Check />
        </IconButton>
        <IconButton variant="text">
          <Check />
        </IconButton>
      </Inline>
      <Inline>
        <IconButton size="small">
          <Check />
        </IconButton>
        <IconButton>
          <Check />
        </IconButton>
        <IconButton size="large">
          <Check />
        </IconButton>
      </Inline>

      <Heading variant="h2">Image</Heading>
      <Image
        alt="Photo by Damian Markutt @wildandfree_photography"
        src="https://images.unsplash.com/photo-1572302895496-a09d147fa902?w=300&dpr=2&q=80"
      />

      <Heading variant="h2">Inline</Heading>
      <Inline>
        <GridBox />
        <GridBox />
        <GridBox />
      </Inline>
      <Heading variant="h2">Input</Heading>
      <Stack>
        <Input id="username" label="Username" required />
        <Input id="firstname" label="First name" />
        <Input id="familyname" label="Family name" required={false} />
      </Stack>
      <Heading variant="h2">Link</Heading>
      <Inline>
        <Box>
          <Link href="#">Link</Link>
        </Box>
        <Box
          css={{
            color: '$success',
          }}
        >
          <Link href="#">color inherits</Link>
        </Box>
        <Box>
          <Text font="monospace">
            <Link href="/"> font="monospace"</Link>
          </Text>
        </Box>
        <Box>
          <Link href="http://committed.io" target="_blank">
            External
          </Link>
        </Box>
      </Inline>
      <Heading variant="h2">List</Heading>
      <List>
        <ListItem>
          <ListItemText text={`Line item 1`} subtext="Secondary item text" />
          <ListItemSecondaryAction path={mdiComment} />
        </ListItem>
        <ListItem>
          <ListItemText text={`Line item 2`} />
          <ListItemSecondaryAction path={mdiComment} />
        </ListItem>
      </List>
      <Heading variant="h2">Logo</Heading>
      <Logo />
      <Heading variant="h2">Menu</Heading>
      <Menu>
        <MenuButton>Show Menu</MenuButton>
        <MenuContent>
          <MenuItem>
            New Tab <MenuItemShortcut>⌘+T</MenuItemShortcut>
          </MenuItem>
          <MenuItem>
            New Window <MenuItemShortcut>⌘+N</MenuItemShortcut>
          </MenuItem>
          <MenuSub>
            <MenuSubTrigger>Developer</MenuSubTrigger>
            <MenuSubContent>
              <MenuItem>Test</MenuItem>
              <MenuItem>Build</MenuItem>
              <MenuSub>
                <MenuSubTrigger>More</MenuSubTrigger>
                <MenuSubContent>
                  <MenuItem>Run</MenuItem>
                  <MenuItem>Start</MenuItem>
                </MenuSubContent>
              </MenuSub>
            </MenuSubContent>
          </MenuSub>
        </MenuContent>
      </Menu>
      <Heading variant="h2">NavigationMenu</Heading>
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
      <Heading variant="h2">Overlay</Heading>
      <Overlay css={{width: '100%', height: 100px}}/>
      <Heading variant="h2">Pagination</Heading>
      <Pagination
  onPageChange={() => {}}
  page={1}
  totalPages={10}
/>
      <Heading variant="h2">Paper</Heading>
      <Paper />
      <Heading variant="h2">Popover</Heading>
      <Popover />
      <Heading variant="h2">Progress</Heading>
      <Progress />
      <Heading variant="h2">Radio</Heading>
      <Radio />
      <Heading variant="h2">Select</Heading>
      <Select />
      <Heading variant="h2">Skeleton</Heading>
      <Skeleton />
      <Heading variant="h2">Slider</Heading>
      <Slider />
      <Heading variant="h2">Spinner</Heading>
      <Spinner />
      <Heading variant="h2">Stack</Heading>
      <Stack />
      <Heading variant="h2">Subheading</Heading>
      <Subheading />
      <Heading variant="h2">Svg</Heading>
      <Svg />
      <Heading variant="h2">Switch</Heading>
      <Switch />
      <Heading variant="h2">Table</Heading>
      <Table />
      <Heading variant="h2">Tabs</Heading>
      <Tabs />
      <Heading variant="h2">Text</Heading>
      <Text />
      <Heading variant="h2">TextArea</Heading>
      <TextArea />
      <Heading variant="h2">ThemeSwitch</Heading>
      <ThemeSwitch />
      <Heading variant="h2">Toast</Heading>
      <ToastExample />
      <Heading variant="h2">Toggle</Heading>
      <Toggle />
      <Heading variant="h2">ToggleGroup</Heading>
      <ToggleGroup
  aria-label="Text alignment"
  defaultValue="center"
  type="single"
>
  <ToggleGroupItem
    aria-label="Left aligned"
    value="left"
  >
    <TextAlignLeft />
  </ToggleGroupItem>
  <ToggleGroupItem
    aria-label="Center aligned"
    value="center"
  >
    <TextAlignCenter />
  </ToggleGroupItem>
  <ToggleGroupItem
    aria-label="Right aligned"
    value="right"
  >
    <TextAlignRight />
  </ToggleGroupItem>
</ToggleGroup>
      <Heading variant="h2">Tooltip</Heading>
      <Tooltip content="OK">
    <Button>
      Tooltip
    </Button>
  </Tooltip>
    </Stack>
  )
}
