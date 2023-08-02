import {
  mdiArrowDownDropCircleOutline,
  mdiArrowUpDropCircleOutline,
  mdiThumbUp,
} from '@mdi/js'
import { action } from '@storybook/addon-actions'
import { Meta, StoryFn, StoryObj } from '@storybook/react'
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
import { withFormData } from '../../docs/util'
import { Box } from '../Box'
import { Button } from '../Button'
import {
  ConfirmDialog,
  ConfirmDialogActions,
  ConfirmDialogContent,
  ConfirmDialogTrigger,
} from '../ConfirmDialog'
import { Dialog, DialogContent, DialogTrigger } from '../Dialog'
import { Form, FormButton } from '../Form'
import { Svg } from '../Svg'

const subcomponents = {
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
} as unknown as Meta<typeof Select>['subcomponents']

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  subcomponents,
}
export default meta
type Story = StoryObj<typeof Select>

export const Default: Story = {
  render: (args) => (
    <Select defaultValue="1" {...args}>
      <SelectItem value="1">Item 1</SelectItem>
      <SelectItem value="2">Item 2</SelectItem>
      <SelectItem value="3">Item 3</SelectItem>
    </Select>
  ),
}

export const Disabled: Story = {
  ...Default,
  args: {
    disabled: true,
  },
}

/** This shows how to group items in the select popover */
export const Grouped: StoryFn = () => (
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

export const WithDisabledItems: StoryFn = () => (
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

export const Scrollable: StoryFn = () => (
  <Select defaultValue="19">
    {[...Array(50)].map((x, i) => (
      <SelectItem value={i.toString()}>Item {i}</SelectItem>
    ))}
  </Select>
)

export const WithLabel: Story = {
  ...Default,
  args: { label: 'Label' },
}

/**
 * The Select component support a placeholder.
 *
 * A html select would normally have a `value`, if controlled, or `defaultValue` in an uncontrolled state.
 * However, if a default value is not supplied a placeholder should be used.
 */
export const Placeholder: StoryFn = () => {
  return (
    <Select label="Demo" name="demo" placeholder="Select an item...">
      <SelectItem value="1">Item 1</SelectItem>
      <SelectItem value="2">Item 2</SelectItem>
      <SelectItem value="3">Item 3</SelectItem>
    </Select>
  )
}

/** Using `<SelectRoot>` and `<SelectRootItem>` gives further access to the underlying Radix implementation, allowing for more customization */
export const Customization: StoryFn = () => (
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

/**
 * Demo of use in a `Form`
 */
export const InForm: StoryFn = () => {
  return (
    <Form onSubmit={withFormData(alert)}>
      <Select label="Demo" name="demo" defaultValue="1">
        <SelectItem value="1">Item 1</SelectItem>
        <SelectItem value="2">Item 2</SelectItem>
        <SelectItem value="3">Item 3</SelectItem>
      </Select>
      <FormButton />
    </Form>
  )
}

/**
 * Test case of a select in a `Dialog`
 */
export const DialogSelect: Story = {
  ...Default,
  decorators: [
    (story) => (
      <Dialog>
        <DialogTrigger>
          <Button>Show Dialog</Button>
        </DialogTrigger>
        <DialogContent>{story()}</DialogContent>
      </Dialog>
    ),
  ],
}

/**
 * In this version, we add a `fullscreen` Box
 * */
export const ConfirmDialogSelect: Story = {
  ...Default,
  decorators: [
    (story) => (
      <Box variant="fullscreen">
        <ConfirmDialog>
          <ConfirmDialogContent
            description="This is a test"
            title="Test Select"
          >
            {story()}
            {story()}
            <ConfirmDialogActions
              confirm="Confirm"
              onConfirm={action('Confirm')}
            />
          </ConfirmDialogContent>
          <ConfirmDialogTrigger>
            <Button>Show Dialog</Button>
          </ConfirmDialogTrigger>
        </ConfirmDialog>
      </Box>
    ),
  ],
}
