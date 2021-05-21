import { action } from '@storybook/addon-actions'
import { Meta } from '@storybook/react'
import React from 'react'
import { IconButton } from '.'
import { Check, CheckIndeterminate, ChevronDown, Column, Row } from '../'

export default {
  title: 'Components/IconButton',
  component: IconButton,
} as Meta

export const Default: React.FC = () => (
  <IconButton onClick={action('click')} aria-label="label">
    <Check />
  </IconButton>
)
export const Variants = () => (
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

export const Sizes = () => (
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
export const States = () => (
  <Column css={{ gap: '$3' }}>
    <Row css={{ gap: '$3' }}>
      <IconButton variant="primary">
        <Check />
      </IconButton>
      <IconButton variant="primary" force="hover">
        <Check />
      </IconButton>
      <IconButton variant="primary" force="focus">
        <Check />
      </IconButton>
      <IconButton variant="primary" force="active">
        <Check />
      </IconButton>
      <IconButton variant="primary" disabled>
        <Check />
      </IconButton>
    </Row>
    <Row css={{ gap: '$3' }}>
      <IconButton variant="secondary">
        <Check />
      </IconButton>
      <IconButton variant="secondary" force="hover">
        <Check />
      </IconButton>
      <IconButton variant="secondary" force="focus">
        <Check />
      </IconButton>
      <IconButton variant="secondary" force="active">
        <Check />
      </IconButton>
      <IconButton variant="secondary" disabled>
        <Check />
      </IconButton>
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

export const Destructive = () => (
  <Column css={{ gap: '$3' }}>
    <Row css={{ gap: '$3' }}>
      <IconButton destructive variant="primary">
        <Check />
      </IconButton>
      <IconButton destructive variant="primary" force="hover">
        <Check />
      </IconButton>
      <IconButton destructive variant="primary" force="focus">
        <Check />
      </IconButton>
      <IconButton destructive variant="primary" force="active">
        <Check />
      </IconButton>
      <IconButton destructive variant="primary" disabled>
        <Check />
      </IconButton>
    </Row>
    <Row css={{ gap: '$3' }}>
      <IconButton destructive variant="secondary">
        <Check />
      </IconButton>
      <IconButton destructive variant="secondary" force="hover">
        <Check />
      </IconButton>
      <IconButton destructive variant="secondary" force="focus">
        <Check />
      </IconButton>
      <IconButton destructive variant="secondary" force="active">
        <Check />
      </IconButton>
      <IconButton destructive variant="secondary" disabled>
        <Check />
      </IconButton>
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

export const Variations = () => (
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
    <IconButton variant="primary">
      <Check />
    </IconButton>
    <IconButton css={{ color: '$success' }} variant="tertiary">
      <Check />
    </IconButton>
  </Row>
)
