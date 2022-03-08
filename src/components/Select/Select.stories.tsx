import { Meta, Story } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import React from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectIcon,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectLabel,
  SelectRoot,
  SelectRootItem,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
  SelectViewport,
} from '.'
import { Button } from '../Button'
import { Box } from '../Box'
import { Dialog, DialogContent, DialogTrigger } from '../Dialog'
import {
  ConfirmDialog,
  ConfirmDialogContent,
  ConfirmDialogTrigger,
  ConfirmDialogActions,
} from '../ConfirmDialog'
import {
  mdiArrowUpDropCircleOutline,
  mdiArrowDownDropCircleOutline,
  mdiThumbUp,
} from '@mdi/js'
import { Svg } from '../Svg'

export default {
  title: 'Components/Select',
  component: Select,
  subcomponents: {
    SelectContent,
    SelectGroup,
    SelectIcon,
    SelectItem,
    SelectItemIndicator,
    SelectItemText,
    SelectLabel,
    SelectScrollDownButton,
    SelectScrollUpButton,
    SelectTrigger,
    SelectValue,
    SelectViewport,
    SelectRoot,
    SelectRootItem,
  },
} as Meta

const SimpleSelect: Story = (args) => (
  <Select defaultValue="1" {...args}>
    <SelectItem value="1">Item 1</SelectItem>
    <SelectItem value="2">Item 2</SelectItem>
    <SelectItem value="3">Item 3</SelectItem>
  </Select>
)

export const Default = SimpleSelect

/** This shows how to group items in the select popover */
export const Grouped = () => (
  <Select defaultValue="grapes">
    <SelectGroup>
      <SelectLabel>Fruits</SelectLabel>
      <SelectItem value="apple">Apple</SelectItem>
      <SelectItem value="banana">Banana</SelectItem>
      <SelectItem value="blueberry">Blueberry</SelectItem>
      <SelectItem value="grapes">Grapes</SelectItem>
      <SelectItem value="pineapple">Pineapple</SelectItem>
    </SelectGroup>
    <SelectSeparator />
    <SelectGroup>
      <SelectLabel>Vegetables</SelectLabel>
      <SelectItem value="aubergine">Aubergine</SelectItem>
      <SelectItem value="broccoli">Broccoli</SelectItem>
      <SelectItem value="carrot">Carrot</SelectItem>
      <SelectItem value="courgette">Courgette</SelectItem>
      <SelectItem value="leek">Leek</SelectItem>
    </SelectGroup>
    <SelectSeparator />
    <SelectGroup>
      <SelectLabel>Meats</SelectLabel>
      <SelectItem value="chicken">Chicken</SelectItem>
      <SelectItem value="pork">Pork</SelectItem>
      <SelectItem value="beef">Beef</SelectItem>
    </SelectGroup>
  </Select>
)

export const WithDisabledItems = () => (
  <Select defaultValue="1">
    <SelectItem value="1">Item 1</SelectItem>
    <SelectItem value="2">Item 2</SelectItem>
    <SelectItem disabled value="3">
      Item 3
    </SelectItem>
    <SelectItem disabled value="4">
      Item 4
    </SelectItem>
    <SelectItem value="5">Item 5</SelectItem>
  </Select>
)

export const Scrollable = () => (
  <Select defaultValue="19">
    {[...Array(50)].map((x, i) => (
      <SelectItem value={i.toString()}>Item {i}</SelectItem>
    ))}
  </Select>
)

export const WithLabel = () => <SimpleSelect label="Label" />

/** Using `<SelectRoot>` and `<SelectRootItem>` gives further access to the underlying Radix implementation, allowing for more customization */
export const Customization = () => (
  <SelectRoot defaultValue="19">
    <SelectTrigger>
      <SelectValue />
      <SelectIcon>
        <Svg path={mdiArrowDownDropCircleOutline} />
      </SelectIcon>
    </SelectTrigger>
    <SelectContent>
      <SelectScrollUpButton>
        <Svg path={mdiArrowUpDropCircleOutline} />
      </SelectScrollUpButton>
      <SelectViewport>
        {[...Array(50)].map((x, i) => (
          <SelectRootItem value={i.toString()}>
            <SelectItemText>Item {i}</SelectItemText>
            <SelectItemIndicator>
              <Svg css={{ color: '$success9' }} path={mdiThumbUp} />
            </SelectItemIndicator>
          </SelectRootItem>
        ))}
      </SelectViewport>
      <SelectScrollDownButton>
        <Svg path={mdiArrowDownDropCircleOutline} />
      </SelectScrollDownButton>
    </SelectContent>
  </SelectRoot>
)

export const DialogSelect = () => (
  <Dialog>
    <DialogTrigger>
      <Button>Show Dialog</Button>
    </DialogTrigger>
    <DialogContent>
      <SimpleSelect />
    </DialogContent>
  </Dialog>
)

/**
 * In this version, we add a `fullscreen` Box
 * */
export const ConfirmDialogSelect = () => (
  <Box variant="fullscreen">
    <ConfirmDialog>
      <ConfirmDialogContent description="This is a test" title="Test Select">
        <SimpleSelect />
        <SimpleSelect />
        <ConfirmDialogActions confirm="Confirm" onConfirm={action('Confirm')} />
      </ConfirmDialogContent>
      <ConfirmDialogTrigger>
        <Button>Show Dialog</Button>
      </ConfirmDialogTrigger>
    </ConfirmDialog>
  </Box>
)
