import { Button, Stack } from '@committed/ds'
import {
  neutralColors,
  primaryColors,
  semanticColors,
} from '@committed/ds-colors/src/preset'
import { StoryObj } from '@storybook/react'
import { ComponentProps } from 'react'
import { Variants } from '.'

export const SemanticColors: StoryObj<{
  colors: ComponentProps<typeof Button>['color'][]
}> = {
  render: ({ colors }) => (
    <Stack>
      <Variants
        gridCss={{
          gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr',
          padding: '$4',
        }}
        component={Button}
        variant="solid"
        color={colors}
        children="Button"
      />
      <Variants
        gridCss={{
          gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr',
          padding: '$4',
        }}
        component={Button}
        variant="outline"
        color={colors}
        children="Button"
      />
      <Variants
        gridCss={{
          gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr',
          padding: '$4',
        }}
        component={Button}
        variant={'text'}
        color={colors}
        children="Button"
      />
    </Stack>
  ),
  args: {
    colors: semanticColors.map((c) => `$${c}`) as ComponentProps<
      typeof Button
    >['color'][],
  },
}

export const PrimaryColors = {
  ...SemanticColors,
  args: {
    colors: primaryColors.map((c) => `$${c}`) as ComponentProps<
      typeof Button
    >['color'][],
  },
}

export const NeutralColors = {
  ...SemanticColors,
  args: {
    colors: neutralColors.map((c) => `$${c}`) as ComponentProps<
      typeof Button
    >['color'][],
  },
}
