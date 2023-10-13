import { Button, Inline, Stack, semanticColors } from '@committed/ds'
import { css } from '@committed/ds-ss'
import { expect, jest } from '@storybook/jest'
import { Meta, StoryObj } from '@storybook/react'
import { userEvent, waitFor, within } from '@storybook/testing-library'
import { ComponentProps } from 'react'
import { Variants } from './utils'

const Grid = ({ children }) => (
  <div
    className={css({
      display: 'grid',
      gap: '$3',
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
    })}
  >
    {children}
  </div>
)

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    /**
     * react-docgen-typescript fails us here.
     * @see https://github.com/storybookjs/storybook/issues/12641#issuecomment-708603353
     */
    asChild: {
      control: {
        type: 'boolean',
      },
      defaultValue: 'false',
      description:
        'Can be set to use the child component, typically only used with "a".',
    },
    destructive: {
      control: {
        type: 'boolean',
      },
      defaultValue: 'false',
      description:
        'Add the destructive flag for actions that are destructive, such as delete actions.',
    },
    variant: {
      control: {
        type: 'select',
        options: ['solid', 'outline', 'text', 'brand'],
      },
      description:
        'The button is available in different variants. For the solid action on the view use the `solid` variant, most others should be `outline` which is the default. Use `text` for paired no-action buttons and `brand` is for use in the AppBar.',
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'default', 'large'],
      },
      description: 'The button is available in 3 different sizes.',
    },
  },
}
export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    children: 'Button',
  },
}

/* Three size options are available */
export const Size: Story = {
  render: () => (
    <Inline>
      <Button size="small">Small</Button>
      <Button size="default">Default</Button>
      <Button size="large">Large</Button>
    </Inline>
  ),
}

/* Add `full-width` to make the button grow to take the full width */
export const FullWidth: Story = {
  render: () => (
    <Stack>
      <Button full-width size="small">
        Small
      </Button>
      <Button full-width size="default">
        Default
      </Button>
      <Button full-width size="large">
        Large
      </Button>
    </Stack>
  ),
}

/* Three variants are supported,
 *
 * - `solid` use for the main action, try to only use one per page
 * - `outline` use for other actions on the page
 * - `text` use to pair with others as cancel or for icon buttons
 */
export const Variant: Story = {
  render: () => (
    <Inline>
      <Button variant="solid">solid</Button>
      <Button variant="outline">outline</Button>
      <Button variant="text">text</Button>
    </Inline>
  ),
}

/** If the action is destructive, say a delete or an action that cannot be undone, add the `destructive` flag */
export const Destructive: Story = {
  render: () => (
    <Inline>
      <Button destructive variant="solid">
        solid
      </Button>
      <Button destructive variant="outline">
        outline
      </Button>
      <Button destructive variant="text">
        text
      </Button>
    </Inline>
  ),
}

/** The `disabled` state is controlled in the standard way */
export const Disabled: Story = {
  render: () => (
    <Inline>
      <Button disabled variant="solid">
        solid
      </Button>
      <Button disabled variant="outline">
        outline
      </Button>
      <Button disabled variant="text">
        text
      </Button>
    </Inline>
  ),
  play: async ({ canvasElement, step }) => {
    const screen = within(canvasElement)

    await step('Buttons should have disabled role', async () => {
      const buttons = await screen.findAllByRole('button')
      buttons.forEach((b) => expect(b).toHaveAttribute('disabled'))
    })
  },
}

/**
 * This uses the force prop to simulate hover, focus and active states so they can be compared at the same time.
 * This prop is not intended for normal use and the buttons here will not interact normally.
 */
export const State: Story = {
  render: () => (
    <Grid>
      <Button variant="solid">Button</Button>
      <Button variant="solid" data-hover>
        Button
      </Button>
      <Button variant="solid" data-focus>
        Button
      </Button>
      <Button variant="solid" data-active>
        Button
      </Button>
      <Button variant="outline">Button</Button>
      <Button variant="outline" data-hover>
        Button
      </Button>
      <Button variant="outline" data-focus>
        Button
      </Button>
      <Button variant="outline" data-active>
        Button
      </Button>
      <Button variant="text">Button</Button>
      <Button variant="text" data-hover>
        Button
      </Button>
      <Button variant="text" data-focus>
        Button
      </Button>
      <Button variant="text" data-active>
        Button
      </Button>
    </Grid>
  ),
}

export const All: Story = {
  render: () => (
    <Variants
      component={Button}
      variant={['solid', 'outline', 'text']}
      size={['small', 'default', 'large']}
      destructive={[false, true]}
      disabled={[false, true]}
      children="Button"
    />
  ),
}

export const SemanticColors: StoryObj<{
  colors: ComponentProps<typeof Button>['color'][]
}> = {
  render: ({ colors }) => (
    <Stack>
      <Variants
        gridCss={css.raw({
          gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr',
          padding: '$4',
        })}
        component={Button}
        variant="solid"
        colorPalette={colors}
        children="Button"
      />
      <Variants
        gridCss={{
          gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr',
          padding: '$4',
        }}
        component={Button}
        variant="outline"
        colorPalette={colors}
        children="Button"
      />
      <Variants
        gridCss={{
          gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr',
          padding: '$4',
        }}
        component={Button}
        variant={'text'}
        colorPalette={colors}
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

export const TestButtonClick: Story = {
  ...Default,
  args: {
    ...Default.args,
    onClick: jest.fn(),
  },
  play: async ({ args, canvasElement, step }) => {
    const screen = within(canvasElement)

    await step('Can be clicked', async () => {
      const buttonElement = screen.getByRole('button')
      buttonElement.click()
      await waitFor(() => expect(args.onClick).toHaveBeenCalled())
    })
  },
}
export const TestButtonEnter: Story = {
  ...Default,
  args: {
    ...Default.args,
    onClick: jest.fn(),
  },
  play: async ({ args, canvasElement, step }) => {
    const screen = within(canvasElement)

    await step('Can open 2', async () => {
      screen.getByRole('button')
      userEvent.tab()
      userEvent.keyboard('{enter}')
      await waitFor(() => expect(args.onClick).toHaveBeenCalled())
    })
  },
}
