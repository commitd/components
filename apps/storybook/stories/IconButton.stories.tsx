import {
  Check,
  CheckIndeterminate,
  ChevronDown,
  IconButton,
  Inline,
  Stack,
} from '@committed/ds'
import { css } from '@committed/ss/css'
import { mdiComment, mdiOpenInNew, mdiPencil, mdiThumbUp } from '@mdi/js'
import { action } from '@storybook/addon-actions'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof IconButton> = {
  title: 'Components/IconButton',
  component: IconButton,
}
export default meta
type Story = StoryObj<typeof IconButton>

export const Default: Story = {
  render: () => (
    <IconButton
      path={mdiThumbUp}
      onClick={action('click')}
      aria-label="label"
    />
  ),
}

export const WithCustomSvg: Story = {
  render: () => (
    <IconButton onClick={action('click')} aria-label="label">
      <Check />
    </IconButton>
  ),
}

export const Variants: Story = {
  render: () => (
    <Inline>
      <IconButton variant="solid">
        <Check />
      </IconButton>
      <IconButton variant="outline">
        <Check />
      </IconButton>
      <IconButton variant="text">
        <Check />
      </IconButton>
    </Inline>
  ),
}

export const Sizes: Story = {
  render: () => (
    <Inline>
      <IconButton size="small">
        <Check />
      </IconButton>
      <IconButton>
        <Check />
      </IconButton>
      <IconButton size="large">
        <Check />
      </IconButton>
    </Inline>
  ),
}
/**
 * This uses the force prop to simulate hover, focus and active states so they can be compared at the same time.
 * This prop is not intended for normal use and the buttons here will not interact normally.
 */
export const States: Story = {
  render: () => (
    <Stack>
      <Inline>
        <IconButton path={mdiPencil} variant="solid" />
        <IconButton path={mdiPencil} variant="solid" data-hover />
        <IconButton path={mdiPencil} variant="solid" data-focus />
        <IconButton path={mdiPencil} variant="solid" data-active />
        <IconButton path={mdiPencil} variant="solid" disabled />
      </Inline>
      <Inline>
        <IconButton path={mdiComment} variant="outline" />
        <IconButton path={mdiComment} variant="outline" data-hover />
        <IconButton path={mdiComment} variant="outline" data-focus />
        <IconButton path={mdiComment} variant="outline" data-active />
        <IconButton path={mdiComment} variant="outline" disabled />
      </Inline>
      <Inline>
        <IconButton variant="text">
          <Check />
        </IconButton>
        <IconButton variant="text" data-hover>
          <Check />
        </IconButton>
        <IconButton variant="text" data-focus>
          <Check />
        </IconButton>
        <IconButton variant="text" data-active>
          <Check />
        </IconButton>
        <IconButton variant="text" disabled>
          <Check />
        </IconButton>
      </Inline>
    </Stack>
  ),
}

export const Destructive: Story = {
  render: () => (
    <Stack>
      <Inline>
        <IconButton path={mdiOpenInNew} destructive variant="solid" />
        <IconButton
          path={mdiOpenInNew}
          destructive
          variant="solid"
          data-hover
        />
        <IconButton
          path={mdiOpenInNew}
          destructive
          variant="solid"
          data-focus
        />
        <IconButton
          path={mdiOpenInNew}
          destructive
          variant="solid"
          data-active
        />
        <IconButton path={mdiOpenInNew} destructive variant="solid" disabled />
      </Inline>
      <Inline>
        <IconButton path={mdiThumbUp} destructive variant="outline" />
        <IconButton
          path={mdiThumbUp}
          destructive
          variant="outline"
          data-hover
        />
        <IconButton
          path={mdiThumbUp}
          destructive
          variant="outline"
          data-focus
        />
        <IconButton
          path={mdiThumbUp}
          destructive
          variant="outline"
          data-active
        />
        <IconButton path={mdiThumbUp} destructive variant="outline" disabled />
      </Inline>
      <Inline>
        <IconButton destructive variant="text">
          <Check />
        </IconButton>
        <IconButton destructive variant="text" data-hover>
          <Check />
        </IconButton>
        <IconButton destructive variant="text" data-focus>
          <Check />
        </IconButton>
        <IconButton destructive variant="text" data-active>
          <Check />
        </IconButton>
        <IconButton destructive variant="text" disabled>
          <Check />
        </IconButton>
      </Inline>
    </Stack>
  ),
}

export const Variations: Story = {
  render: () => (
    <Inline>
      <IconButton>
        <Check />
      </IconButton>
      <IconButton disabled variant="solid">
        <ChevronDown />
      </IconButton>
      <IconButton variant="outline">
        <CheckIndeterminate />
      </IconButton>
      <IconButton path={mdiPencil} variant="solid" />
      <IconButton
        path={mdiThumbUp}
        className={css({ color: '$success' })}
        variant="text"
      />
    </Inline>
  ),
}
