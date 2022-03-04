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
  SelectViewport
} from '.'
import { Button } from '../Button'
import { Box } from '../Box'
import { Dialog, DialogContent, DialogTrigger } from '../Dialog'
import {
  ConfirmDialog,
  ConfirmDialogContent,
  ConfirmDialogTrigger,
  ConfirmDialogActions
} from '../ConfirmDialog'
import { ChevronDown, ChevronUp, Check } from '../Icons'

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
    SelectViewport
  }
} as Meta

const SimpleSelect = () => (
  <Select defaultValue="1">
    <SelectItem value="1">Item 1</SelectItem>
    <SelectItem value="2">Item 2</SelectItem>
    <SelectItem value="3">Item 3</SelectItem>
  </Select>
)

const Template: Story = args => (
  <SelectRoot defaultValue="1">
    <SelectTrigger>
      <SelectValue />
      <SelectIcon>
        <ChevronDown />
      </SelectIcon>
    </SelectTrigger>
    <SelectContent>
      <SelectScrollUpButton>
        <ChevronUp />
      </SelectScrollUpButton>
      <SelectViewport>
        <SelectRootItem value="1">
          <SelectItemText>Item 1</SelectItemText>
          <SelectItemIndicator>
            <Check />
          </SelectItemIndicator>
        </SelectRootItem>
        <SelectRootItem value="2">
          <SelectItemText>Item 2</SelectItemText>
          <SelectItemIndicator>
            <Check />
          </SelectItemIndicator>
        </SelectRootItem>
        <SelectRootItem value="3">
          <SelectItemText>Item 3</SelectItemText>
          <SelectItemIndicator>
            <Check />
          </SelectItemIndicator>
        </SelectRootItem>
      </SelectViewport>
      <SelectScrollDownButton>
        <ChevronDown />
      </SelectScrollDownButton>
    </SelectContent>
  </SelectRoot>
)

export const Default = SimpleSelect

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

// export const Disabled = () => (
//   <Select defaultValue="1" disabled>
//     <SelectItem value="1">Item 1</SelectItem>
//     <SelectItem value="2">Item 2</SelectItem>
//     <SelectItem value="3">Item 3</SelectItem>
//   </Select>
// )

export const Scrollable = () => (
  <Select defaultValue="1">
    {[...Array(25)].map((x, i) => (
      <SelectItem value={i.toString()}>Item {i}</SelectItem>
    ))}
  </Select>
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
