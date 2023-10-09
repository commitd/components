import { Container, Heading, Margin, Stack } from '@committed/ds'
import { AccordionExample } from '../src/accordion'
import { AlertExample } from '../src/alert'
import { AppBarExample } from '../src/appbar'
import { AspectRatioExample } from '../src/aspect-ratio'
import { AvatarExample } from '../src/avatar'
import { BackdropExample } from '../src/backdrop'
import { BackgroundExample } from '../src/background'
import { BadgeExample } from '../src/badge'
import { BoxExample } from '../src/box'
import { BreadcrumbsExample } from '../src/breadcrumbs'
import { ButtonExample } from '../src/button'
import { CardExample } from '../src/card'
import { CheckboxExample } from '../src/checkbox'
import { ChipExample } from '../src/chip'
import { ConfirmDialogExample } from '../src/confirm-dialog'
import { ContainerExample } from '../src/container'
import { ContextMenuExample } from '../src/context-menu'
import { DialogExample } from '../src/dialog'
import { DividerExample } from '../src/divider'
import { DrawerExample } from '../src/drawer'
import { FlexExample } from '../src/flex'
import { FormExample } from '../src/form'
import { GridExample } from '../src/grid'
import { HeadingExample } from '../src/heading'
import { HoverCardExample } from '../src/hover-card'
import { IconButtonExample } from '../src/icon-button'
import { ImageExample } from '../src/image'
import { InlineExample } from '../src/inline'
import { InputExample } from '../src/input'
import { LinkExample } from '../src/link'
import { ListExample } from '../src/list'
import { LogoExample } from '../src/logo'
import { MenuExample } from '../src/menu'
import { NavigationMenuExample } from '../src/navigation-menu'
import { OverlayExample } from '../src/overlay'
import { PaginationExample } from '../src/pagination'
import { PaperExample } from '../src/paper'
import { Header } from '../src/parts/Header'
import { PopoverExample } from '../src/popover'
import { ProgressExample } from '../src/progress'
import { RadioExample } from '../src/radio'
import { SelectExample } from '../src/select'
import { SkeletonExample } from '../src/skeleton'
import { SliderExample } from '../src/slider'
import { SpinnerExample } from '../src/spinner'
import { StackExample } from '../src/stack'
import { SubheadingExample } from '../src/subheading'
import { SvgExample } from '../src/svg'
import { SwitchExample } from '../src/switch'
import { TableExample } from '../src/table'
import { TabsExample } from '../src/tabs'
import { TextExample } from '../src/text'
import { TextAreaExample } from '../src/text-area'
import { ToastExample } from '../src/toast'
import { ToggleExample } from '../src/toggle'
import { ToggleGroupExample } from '../src/toggle-group'
import { TooltipExample } from '../src/tooltip'

const SectionHeading = ({ children }) => (
  <Margin mt="$6">
    <Heading variant="h6">{children}</Heading>
  </Margin>
)

export default function Page() {
  return (
    <>
      <Header>Committed Components</Header>
      <Container maxWidth="responsive">
        <Stack>
          <SectionHeading>Accordion</SectionHeading>
          <AccordionExample />
          <SectionHeading>Alert</SectionHeading>
          <AlertExample />
          <SectionHeading>AppBar</SectionHeading>
          <AppBarExample />
          <SectionHeading>AspectRatio</SectionHeading>
          <AspectRatioExample />
          <SectionHeading>Avatar</SectionHeading>
          <AvatarExample />
          <SectionHeading>Backdrop</SectionHeading>
          <BackdropExample />
          <SectionHeading>Background</SectionHeading>
          <BackgroundExample />
          <SectionHeading>Badge</SectionHeading>
          <BadgeExample />
          <SectionHeading>Box</SectionHeading>
          <BoxExample />
          <SectionHeading>Breadcrumbs</SectionHeading>
          <BreadcrumbsExample />
          <SectionHeading>Button</SectionHeading>
          <ButtonExample />
          <SectionHeading>Card</SectionHeading>
          <CardExample />
          <SectionHeading>Checkbox</SectionHeading>
          <CheckboxExample />
          <SectionHeading>Chip</SectionHeading>
          <ChipExample />
          <SectionHeading>ConfirmDialog</SectionHeading>
          <ConfirmDialogExample />
          <SectionHeading>Container</SectionHeading>
          <ContainerExample />
          <SectionHeading>ContextMenu</SectionHeading>
          <ContextMenuExample />
          <SectionHeading>Dialog</SectionHeading>
          <DialogExample />
          <SectionHeading>Divider</SectionHeading>
          <DividerExample />
          <SectionHeading>Drawer</SectionHeading>
          <DrawerExample />
          <SectionHeading>Flex</SectionHeading>
          <FlexExample />
          <SectionHeading>Form</SectionHeading>
          <FormExample />
          <SectionHeading>Grid</SectionHeading>
          <GridExample />
          <SectionHeading>Heading</SectionHeading>
          <HeadingExample />
          <SectionHeading>HoverCard</SectionHeading>
          <HoverCardExample />
          <SectionHeading>IconButton</SectionHeading>
          <IconButtonExample />
          <SectionHeading>Image</SectionHeading>
          <ImageExample />
          <SectionHeading>Inline</SectionHeading>
          <InlineExample />
          <SectionHeading>Input</SectionHeading>
          <InputExample />
          <SectionHeading>Link</SectionHeading>
          <LinkExample />
          <SectionHeading>List</SectionHeading>
          <ListExample />
          <SectionHeading>Logo</SectionHeading>
          <LogoExample />
          <SectionHeading>Menu</SectionHeading>
          <MenuExample />
          <SectionHeading>NavigationMenu</SectionHeading>
          <NavigationMenuExample />
          <SectionHeading>Overlay</SectionHeading>
          <OverlayExample />
          <SectionHeading>Pagination</SectionHeading>
          <PaginationExample />
          <SectionHeading>Paper</SectionHeading>
          <PaperExample />
          <SectionHeading>Popover</SectionHeading>
          <PopoverExample />
          <SectionHeading>Progress</SectionHeading>
          <ProgressExample />
          <SectionHeading>Radio</SectionHeading>
          <RadioExample />
          <SectionHeading>Select</SectionHeading>
          <SelectExample />
          <SectionHeading>Skeleton</SectionHeading>
          <SkeletonExample />
          <SectionHeading>Slider</SectionHeading>
          <SliderExample />
          <SectionHeading>Spinner</SectionHeading>
          <SpinnerExample />
          <SectionHeading>Stack</SectionHeading>
          <StackExample />
          <SectionHeading>Subheading</SectionHeading>
          <SubheadingExample />
          <SectionHeading>Svg</SectionHeading>
          <SvgExample />
          <SectionHeading>Switch</SectionHeading>
          <SwitchExample />
          <SectionHeading>Table</SectionHeading>
          <TableExample />
          <SectionHeading>Tabs</SectionHeading>
          <TabsExample />
          <SectionHeading>Text</SectionHeading>
          <TextExample />
          <SectionHeading>TextArea</SectionHeading>
          <TextAreaExample />
          <SectionHeading>Toast</SectionHeading>
          <ToastExample />
          <SectionHeading>Toggle</SectionHeading>
          <ToggleExample />
          <SectionHeading>ToggleGroup</SectionHeading>
          <ToggleGroupExample />
          <SectionHeading>Tooltip</SectionHeading>
          <TooltipExample />
        </Stack>
      </Container>
    </>
  )
}
