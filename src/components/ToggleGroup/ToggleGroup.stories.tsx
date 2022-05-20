import { Meta, Story } from '@storybook/react'
import React from 'react'
import { ToggleGroup, ToggleGroupItem } from '.'
import {
  Bold,
  ChevronDown,
  ChevronUp,
  Italic,
  TextAlignCenter,
  TextAlignLeft,
  TextAlignRight,
  Underline,
} from '../Icons'

export default {
  title: 'Components/ToggleGroup',
  component: ToggleGroup,
  subcomponents: { ToggleGroupItem },
} as Meta

const Template: Story<typeof ToggleGroup> = ({ ...args }) => {
  return (
    <ToggleGroup
      type="single"
      defaultValue="center"
      aria-label="Text alignment"
    >
      <ToggleGroupItem value="left" aria-label="Left aligned">
        <TextAlignLeft />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Center aligned">
        <TextAlignCenter />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Right aligned">
        <TextAlignRight />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}

export const Default = Template.bind({})

export const Variants: Story = () => (
  <ToggleGroup type="single" defaultValue="left" aria-label="Variants">
    <ToggleGroupItem value="left" variant="primary" aria-label="primary">
      <TextAlignLeft />
    </ToggleGroupItem>
    <ToggleGroupItem value="center" variant="secondary" aria-label="secondary">
      <TextAlignCenter />
    </ToggleGroupItem>
    <ToggleGroupItem value="right" variant="tertiary" aria-label="tertiary">
      <TextAlignRight />
    </ToggleGroupItem>
  </ToggleGroup>
)

export const MultipleSelections: Story = () => (
  <ToggleGroup type="multiple" aria-label="Text Styling">
    <ToggleGroupItem value="left" aria-label="Italic">
      <Italic />
    </ToggleGroupItem>
    <ToggleGroupItem value="center" aria-label="Bold">
      <Bold />
    </ToggleGroupItem>
    <ToggleGroupItem value="right" aria-label="Underline">
      <Underline />
    </ToggleGroupItem>
  </ToggleGroup>
)

export const Orientation: Story = () => (
  <ToggleGroup
    type="single"
    defaultValue="top"
    aria-label="Orientation"
    orientation="vertical"
  >
    <ToggleGroupItem value="top" aria-label="primary">
      <ChevronUp />
    </ToggleGroupItem>
    <ToggleGroupItem value="bottom" aria-label="secondary">
      <ChevronDown />
    </ToggleGroupItem>
  </ToggleGroup>
)
