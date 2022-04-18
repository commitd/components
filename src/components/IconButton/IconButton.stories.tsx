import { mdiComment, mdiOpenInNew, mdiPencil, mdiThumbUp } from '@mdi/js'
import { action } from '@storybook/addon-actions'
import { Meta, Story } from '@storybook/react'
import React from 'react'
import { IconButton } from '.'
import { Check, CheckIndeterminate, ChevronDown, Column, Row } from '../'

export default {
  title: 'Components/IconButton',
  component: IconButton,
} as Meta

export const Default: Story = () => (
  <IconButton path={mdiThumbUp} onClick={action('click')} aria-label="label" />
)

export const WithCustomSvg: Story = () => (
  <IconButton onClick={action('click')} aria-label="label">
    <Check />
  </IconButton>
)

export const Variants: Story = () => (
  <Row css={{ gap: '$3' }}>
    <IconButton variant="primary">
      <Check />
    </IconButton>
    <IconButton variant="secondary">
      <Check />
    </IconButton>
    <IconButton variant="tertiary">
      <Check />
    </IconButton>
  </Row>
)

export const Sizes: Story = () => (
  <Row css={{ gap: '$3' }}>
    <IconButton size="small">
      <Check />
    </IconButton>
    <IconButton>
      <Check />
    </IconButton>
    <IconButton size="large">
      <Check />
    </IconButton>
  </Row>
)

/**
 * This uses the force prop to simulate hover, focus and active states so they can be compared at the same time.
 * This prop is not intended for normal use and the buttons here will not interact normally.
 */
export const States: Story = () => (
  <Column css={{ gap: '$3' }}>
    <Row css={{ gap: '$3' }}>
      <IconButton path={mdiPencil} variant="primary" />
      <IconButton path={mdiPencil} variant="primary" force="hover" />
      <IconButton path={mdiPencil} variant="primary" force="focus" />
      <IconButton path={mdiPencil} variant="primary" force="active" />
      <IconButton path={mdiPencil} variant="primary" disabled />
    </Row>
    <Row css={{ gap: '$3' }}>
      <IconButton path={mdiComment} variant="secondary" />
      <IconButton path={mdiComment} variant="secondary" force="hover" />
      <IconButton path={mdiComment} variant="secondary" force="focus" />
      <IconButton path={mdiComment} variant="secondary" force="active" />
      <IconButton path={mdiComment} variant="secondary" disabled />
    </Row>
    <Row css={{ gap: '$3' }}>
      <IconButton variant="tertiary">
        <Check />
      </IconButton>
      <IconButton variant="tertiary" force="hover">
        <Check />
      </IconButton>
      <IconButton variant="tertiary" force="focus">
        <Check />
      </IconButton>
      <IconButton variant="tertiary" force="active">
        <Check />
      </IconButton>
      <IconButton variant="tertiary" disabled>
        <Check />
      </IconButton>
    </Row>
  </Column>
)

export const Destructive: Story = () => (
  <Column css={{ gap: '$3' }}>
    <Row css={{ gap: '$3' }}>
      <IconButton path={mdiOpenInNew} destructive variant="primary" />
      <IconButton
        path={mdiOpenInNew}
        destructive
        variant="primary"
        force="hover"
      />
      <IconButton
        path={mdiOpenInNew}
        destructive
        variant="primary"
        force="focus"
      />
      <IconButton
        path={mdiOpenInNew}
        destructive
        variant="primary"
        force="active"
      />
      <IconButton path={mdiOpenInNew} destructive variant="primary" disabled />
    </Row>
    <Row css={{ gap: '$3' }}>
      <IconButton path={mdiThumbUp} destructive variant="secondary" />
      <IconButton
        path={mdiThumbUp}
        destructive
        variant="secondary"
        force="hover"
      />
      <IconButton
        path={mdiThumbUp}
        destructive
        variant="secondary"
        force="focus"
      />
      <IconButton
        path={mdiThumbUp}
        destructive
        variant="secondary"
        force="active"
      />
      <IconButton path={mdiThumbUp} destructive variant="secondary" disabled />
    </Row>
    <Row css={{ gap: '$3' }}>
      <IconButton destructive variant="tertiary">
        <Check />
      </IconButton>
      <IconButton destructive variant="tertiary" force="hover">
        <Check />
      </IconButton>
      <IconButton destructive variant="tertiary" force="focus">
        <Check />
      </IconButton>
      <IconButton destructive variant="tertiary" force="active">
        <Check />
      </IconButton>
      <IconButton destructive variant="tertiary" disabled>
        <Check />
      </IconButton>
    </Row>
  </Column>
)

export const Variations: Story = () => (
  <Row css={{ gap: '$3' }}>
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
      css={{ color: '$success' }}
      variant="tertiary"
    />
  </Row>
)
