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
  SelectScrollDownButton,
  SelectScrollUpButton,
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

const Template: Story = args => (
  <Select defaultValue="one">
    <SelectTrigger aria-label="Food">
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
        {/* <SelectLabel>Fruits</SelectLabel> */}
        <SelectItem value="one">
          <SelectItemText>One</SelectItemText>
          <SelectItemIndicator>
            <Check />
          </SelectItemIndicator>
        </SelectItem>
        <SelectItem value="two">
          <SelectItemText>Two</SelectItemText>
          <SelectItemIndicator>
            <Check />
          </SelectItemIndicator>
        </SelectItem>
        <SelectItem value="three">
          <SelectItemText>Three</SelectItemText>
          <SelectItemIndicator>
            <Check />
          </SelectItemIndicator>
        </SelectItem>
      </SelectViewport>
      <SelectScrollDownButton>
        <ChevronDown />
      </SelectScrollDownButton>
    </SelectContent>
  </Select>
)

export const Default = Template.bind({})
export const Label = Template.bind({})
Label.args = {
  label: 'Select'
}
export const Placeholder = Template.bind({})
Placeholder.args = {
  placeholder: '--Select an option--'
}
export const Header = Template.bind({})
Header.args = {
  header: '--Select an option--'
}
export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true
}

/**
 * This dialog tests currently fail in storybook canvas
 *
 * The menu seems to be confined to the bounds of the iframe, even though the dialog isn't.
 */
export const DialogSelect = () => (
  <Dialog>
    <DialogTrigger>
      <Button>Show Dialog</Button>
    </DialogTrigger>
    <DialogContent>
      <Select>
        <SelectContent>
          <SelectTrigger>
            <SelectValue />
            <SelectIcon>
              <ChevronDown />
            </SelectIcon>
          </SelectTrigger>
          <SelectViewport>
            <SelectItem value="one">One</SelectItem>
            <SelectItem value="two">Two</SelectItem>
            <SelectItem value="three">Three</SelectItem>
          </SelectViewport>
        </SelectContent>
      </Select>
    </DialogContent>
  </Dialog>
)

/**
 * In this version, we add a `fullscreen` Box - here the Select works properly.
 *
 * As this is likely to be the case generally we leave this as a known issue and will check if radix-ui Select fixes it on release.
 * <https://github.com/commitd/components/issues/230>
 * */
export const ConfirmDialogSelect = () => (
  <Box variant="fullscreen">
    <ConfirmDialog>
      <ConfirmDialogContent description="This is a test" title="Test Select">
        <Select>
          <SelectContent>
            <SelectTrigger>
              <SelectValue />
              <SelectIcon>
                <ChevronDown />
              </SelectIcon>
            </SelectTrigger>
            <SelectViewport>
              <SelectItem value="one">One</SelectItem>
              <SelectItem value="two">Two</SelectItem>
              <SelectItem value="three">Three</SelectItem>
              <SelectItem value="four">Four</SelectItem>
              <SelectItem value="five">Five</SelectItem>
              <SelectItem value="six">Six</SelectItem>
              <SelectItem value="seven">Seven</SelectItem>
            </SelectViewport>
          </SelectContent>
        </Select>
        <Select>
          <SelectContent>
            <SelectTrigger>
              <SelectValue />
              <SelectIcon>
                <ChevronDown />
              </SelectIcon>
            </SelectTrigger>
            <SelectViewport>
              <SelectItem value="one">A</SelectItem>
              <SelectItem value="two">B</SelectItem>
              <SelectItem value="three">C</SelectItem>
              <SelectItem value="four">D</SelectItem>
              <SelectItem value="five">E</SelectItem>
              <SelectItem value="six">F</SelectItem>
              <SelectItem value="seven">G</SelectItem>
            </SelectViewport>
          </SelectContent>
        </Select>
        <ConfirmDialogActions confirm="Confirm" onConfirm={action('Confirm')} />
      </ConfirmDialogContent>
      <ConfirmDialogTrigger>
        <Button>Show Dialog</Button>
      </ConfirmDialogTrigger>
    </ConfirmDialog>
  </Box>
)
