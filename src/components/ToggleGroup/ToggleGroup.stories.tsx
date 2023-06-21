import {
  mdiFormatAlignCenter,
  mdiFormatAlignLeft,
  mdiFormatAlignRight,
  mdiFormatBold,
  mdiFormatItalic,
  mdiFormatUnderline,
} from '@mdi/js'
import { Meta, StoryFn } from '@storybook/react'
import React, { ComponentProps } from 'react'
import { ToggleGroup, ToggleGroupItem } from '.'
import { ChevronDown, ChevronUp } from '../Icons'
import { Stack } from '../Stack'
import { Svg } from '../Svg'

const meta: Meta<typeof ToggleGroup> = {
  title: 'Components/ToggleGroup',
  component: ToggleGroup,
  subcomponents: { ToggleGroupItem },
}
export default meta

const Italic: React.FC<React.ComponentProps<typeof Svg>> = (props) => (
  <Svg path={mdiFormatItalic} {...props} />
)

const Bold: React.FC<React.ComponentProps<typeof Svg>> = (props) => (
  <Svg path={mdiFormatBold} {...props} />
)

const Underline: React.FC<React.ComponentProps<typeof Svg>> = (props) => (
  <Svg path={mdiFormatUnderline} {...props} />
)

const TextAlignLeft: React.FC<React.ComponentProps<typeof Svg>> = (props) => (
  <Svg path={mdiFormatAlignLeft} {...props} />
)

const TextAlignRight: React.FC<React.ComponentProps<typeof Svg>> = (props) => (
  <Svg path={mdiFormatAlignRight} {...props} />
)

const TextAlignCenter: React.FC<React.ComponentProps<typeof Svg>> = (props) => (
  <Svg path={mdiFormatAlignCenter} {...props} />
)

const Template: StoryFn<
  ComponentProps<typeof ToggleGroup> & { type: 'single' }
> = ({ ...args }) => {
  return (
    <ToggleGroup
      defaultValue="center"
      aria-label="Text alignment"
      {...args}
      type="single"
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

export const Variants: StoryFn = () => (
  <Stack>
    <ToggleGroup
      type="single"
      variant="primary"
      defaultValue="left"
      aria-label="Variants"
    >
      <ToggleGroupItem value="left" aria-label="left">
        <TextAlignLeft />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="center">
        <TextAlignCenter />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="right">
        <TextAlignRight />
      </ToggleGroupItem>
    </ToggleGroup>
    <ToggleGroup
      type="single"
      variant="secondary"
      defaultValue="left"
      aria-label="Variants"
    >
      <ToggleGroupItem value="left" aria-label="left">
        <TextAlignLeft />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="center">
        <TextAlignCenter />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="right">
        <TextAlignRight />
      </ToggleGroupItem>
    </ToggleGroup>
    <ToggleGroup
      type="single"
      variant="tertiary"
      defaultValue="left"
      aria-label="Variants"
    >
      <ToggleGroupItem value="left" aria-label="left">
        <TextAlignLeft />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="center">
        <TextAlignCenter />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="right">
        <TextAlignRight />
      </ToggleGroupItem>
    </ToggleGroup>
  </Stack>
)

export const Sizes: StoryFn = () => (
  <Stack>
    <ToggleGroup type="single" size="small" defaultValue="left">
      <ToggleGroupItem value="left" aria-label="left">
        <TextAlignLeft />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="center">
        <TextAlignCenter />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="right">
        <TextAlignRight />
      </ToggleGroupItem>
    </ToggleGroup>
    <ToggleGroup type="single" size="default" defaultValue="left">
      <ToggleGroupItem value="left" aria-label="left">
        <TextAlignLeft />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="center">
        <TextAlignCenter />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="right">
        <TextAlignRight />
      </ToggleGroupItem>
    </ToggleGroup>
    <ToggleGroup type="single" size="large" defaultValue="left">
      <ToggleGroupItem value="left" aria-label="left">
        <TextAlignLeft />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="center">
        <TextAlignCenter />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="right">
        <TextAlignRight />
      </ToggleGroupItem>
    </ToggleGroup>
  </Stack>
)

export const MultipleSelections: StoryFn = () => (
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

export const Orientation: StoryFn = () => (
  <Stack>
    <ToggleGroup
      type="single"
      defaultValue="top"
      aria-label="Orientation"
      orientation="vertical"
    >
      <ToggleGroupItem value="top" aria-label="up">
        <ChevronUp />
      </ToggleGroupItem>
      <ToggleGroupItem value="bottom" aria-label="down">
        <ChevronDown />
      </ToggleGroupItem>
    </ToggleGroup>
    <ToggleGroup
      type="single"
      defaultValue="top"
      aria-label="Orientation"
      orientation="horizontal"
    >
      <ToggleGroupItem value="top" aria-label="up">
        <ChevronUp />
      </ToggleGroupItem>
      <ToggleGroupItem value="bottom" aria-label="down">
        <ChevronDown />
      </ToggleGroupItem>
    </ToggleGroup>
  </Stack>
)
