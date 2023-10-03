import { Inline, Stack, Svg, Toggle, semanticColors } from '@committed/ds'
import { useBoolean } from '@committed/hooks'
import { mdiFormatItalic } from '@mdi/js'
import { Meta, StoryFn, StoryObj } from '@storybook/react'
import React, { ComponentProps } from 'react'
import { Variants } from './utils'

const meta: Meta<typeof Toggle> = {
  title: 'Components/Toggle',
  component: Toggle,
}
export default meta

const Italic: React.FC<React.ComponentProps<typeof Svg>> = (props) => (
  <Svg path={mdiFormatItalic} {...props} />
)

export const Default: StoryFn = ({ ...args }) => {
  return (
    <Toggle aria-label="Toggle italic" {...args}>
      <Italic />
    </Toggle>
  )
}

export const Variant: StoryFn = () => (
  <Inline>
    <Toggle variant="solid">
      <Italic />
    </Toggle>
    <Toggle variant="outline">
      <Italic />
    </Toggle>
    <Toggle variant="text">
      <Italic />
    </Toggle>
  </Inline>
)

export const Sizes: StoryFn = () => (
  <Inline>
    <Toggle size="small">
      <Italic />
    </Toggle>
    <Toggle size="default">
      <Italic />
    </Toggle>
    <Toggle size="large">
      <Italic />
    </Toggle>
  </Inline>
)

/**
 * This uses the data-* props simulate hover and focus states so they can be compared at the same time.
 * This prop is not intended for normal use and the toggles here will not interact normally.
 */
export const States: StoryFn = () => (
  <Stack>
    <Inline>
      <Toggle variant="solid">
        <Italic />
      </Toggle>
      <Toggle variant="solid" data-hover>
        <Italic />
      </Toggle>
      <Toggle variant="solid" data-focus>
        <Italic />
      </Toggle>
      <Toggle variant="solid" pressed>
        <Italic />
      </Toggle>
      <Toggle variant="solid" pressed data-hover>
        <Italic />
      </Toggle>
      <Toggle variant="solid" pressed data-focus>
        <Italic />
      </Toggle>
      <Toggle variant="solid" disabled>
        <Italic />
      </Toggle>
    </Inline>
    <Inline>
      <Toggle variant="outline">
        <Italic />
      </Toggle>
      <Toggle variant="outline" data-hover>
        <Italic />
      </Toggle>
      <Toggle variant="outline" data-focus>
        <Italic />
      </Toggle>
      <Toggle variant="outline" pressed>
        <Italic />
      </Toggle>
      <Toggle variant="outline" pressed data-hover>
        <Italic />
      </Toggle>
      <Toggle variant="outline" pressed data-focus>
        <Italic />
      </Toggle>
      <Toggle variant="outline" disabled>
        <Italic />
      </Toggle>
    </Inline>
    <Inline>
      <Toggle variant="text">
        <Italic />
      </Toggle>
      <Toggle variant="text" data-hover>
        <Italic />
      </Toggle>
      <Toggle variant="text" data-focus>
        <Italic />
      </Toggle>
      <Toggle variant="text" pressed>
        <Italic />
      </Toggle>
      <Toggle variant="text" pressed data-hover>
        <Italic />
      </Toggle>
      <Toggle variant="text" pressed data-focus>
        <Italic />
      </Toggle>
      <Toggle variant="text" disabled>
        <Italic />
      </Toggle>
    </Inline>
  </Stack>
)

export const SemanticColors: StoryObj<{
  colors: ComponentProps<typeof Toggle>['color'][]
}> = {
  render: ({ colors }) => {
    const [pressed, { toggle }] = useBoolean(false)
    return (
      <Stack>
        <Variants
          pressed={pressed}
          component={Toggle}
          variant="solid"
          colorPalette={colors}
          children={<Italic />}
          onPressedChange={toggle}
        />
        <Variants
          pressed={pressed}
          component={Toggle}
          variant="outline"
          colorPalette={colors}
          children={<Italic />}
          onPressedChange={toggle}
        />
        <Variants
          pressed={pressed}
          component={Toggle}
          variant={'text'}
          colorPalette={colors}
          children={<Italic />}
          onPressedChange={toggle}
        />
      </Stack>
    )
  },
  args: {
    colors: semanticColors.map((c) => `$${c}`) as ComponentProps<
      typeof Toggle
    >['color'][],
  },
}
