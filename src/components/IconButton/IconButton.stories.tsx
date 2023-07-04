import { mdiComment, mdiOpenInNew, mdiPencil, mdiThumbUp } from '@mdi/js'
import { action } from '@storybook/addon-actions'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { IconButton } from '.'
import { Check, CheckIndeterminate, ChevronDown } from '../'
import { css } from '../../../styled-system/css'
import { Inline } from '../Inline'
import { Stack } from '../Stack'

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
      <IconButton variant="primary">
        <Check />
      </IconButton>
      <IconButton variant="secondary">
        <Check />
      </IconButton>
      <IconButton variant="tertiary">
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
        <IconButton path={mdiPencil} variant="primary" />
        <IconButton path={mdiPencil} variant="primary" data-hover />
        <IconButton path={mdiPencil} variant="primary" data-focus />
        <IconButton path={mdiPencil} variant="primary" data-active />
        <IconButton path={mdiPencil} variant="primary" disabled />
      </Inline>
      <Inline>
        <IconButton path={mdiComment} variant="secondary" />
        <IconButton path={mdiComment} variant="secondary" data-hover />
        <IconButton path={mdiComment} variant="secondary" data-focus />
        <IconButton path={mdiComment} variant="secondary" data-active />
        <IconButton path={mdiComment} variant="secondary" disabled />
      </Inline>
      <Inline>
        <IconButton variant="tertiary">
          <Check />
        </IconButton>
        <IconButton variant="tertiary" data-hover>
          <Check />
        </IconButton>
        <IconButton variant="tertiary" data-focus>
          <Check />
        </IconButton>
        <IconButton variant="tertiary" data-active>
          <Check />
        </IconButton>
        <IconButton variant="tertiary" disabled>
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
        <IconButton path={mdiOpenInNew} destructive variant="primary" />
        <IconButton
          path={mdiOpenInNew}
          destructive
          variant="primary"
          data-hover
        />
        <IconButton
          path={mdiOpenInNew}
          destructive
          variant="primary"
          data-focus
        />
        <IconButton
          path={mdiOpenInNew}
          destructive
          variant="primary"
          data-active
        />
        <IconButton
          path={mdiOpenInNew}
          destructive
          variant="primary"
          disabled
        />
      </Inline>
      <Inline>
        <IconButton path={mdiThumbUp} destructive variant="secondary" />
        <IconButton
          path={mdiThumbUp}
          destructive
          variant="secondary"
          data-hover
        />
        <IconButton
          path={mdiThumbUp}
          destructive
          variant="secondary"
          data-focus
        />
        <IconButton
          path={mdiThumbUp}
          destructive
          variant="secondary"
          data-active
        />
        <IconButton
          path={mdiThumbUp}
          destructive
          variant="secondary"
          disabled
        />
      </Inline>
      <Inline>
        <IconButton destructive variant="tertiary">
          <Check />
        </IconButton>
        <IconButton destructive variant="tertiary" data-hover>
          <Check />
        </IconButton>
        <IconButton destructive variant="tertiary" data-focus>
          <Check />
        </IconButton>
        <IconButton destructive variant="tertiary" data-active>
          <Check />
        </IconButton>
        <IconButton destructive variant="tertiary" disabled>
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
      <IconButton disabled variant="primary">
        <ChevronDown />
      </IconButton>
      <IconButton variant="secondary">
        <CheckIndeterminate />
      </IconButton>
      <IconButton path={mdiPencil} variant="primary" />
      <IconButton
        path={mdiThumbUp}
        className={css({ color: '$success' })}
        variant="tertiary"
      />
    </Inline>
  ),
}
