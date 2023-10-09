'use client'

import { Svg, ToggleGroup, ToggleGroupItem } from '@committed/ds'
import {
  mdiFormatAlignCenter,
  mdiFormatAlignLeft,
  mdiFormatAlignRight,
  mdiFormatBold,
  mdiFormatItalic,
  mdiFormatUnderline,
} from '@mdi/js'

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

export const ToggleGroupExample = () => (
  <>
    <ToggleGroup
      aria-label="Text alignment"
      defaultValue="center"
      type="single"
    >
      <ToggleGroupItem aria-label="Left aligned" value="left">
        <TextAlignLeft />
      </ToggleGroupItem>
      <ToggleGroupItem aria-label="Center aligned" value="center">
        <TextAlignCenter />
      </ToggleGroupItem>
      <ToggleGroupItem aria-label="Right aligned" value="right">
        <TextAlignRight />
      </ToggleGroupItem>
    </ToggleGroup>
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
  </>
)
