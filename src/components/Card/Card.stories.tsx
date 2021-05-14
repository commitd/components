import { action } from '@storybook/addon-actions'
import { Meta } from '@storybook/react'
import React from 'react'
import { styled } from 'stitches.config'
import { Card } from '.'
import { Row } from '../'

//FIXME

const Text = styled('p', {})

export default {
  title: 'Components/Card',
  component: Card,
} as Meta

export const Default: React.FC = () => {
  return (
    <Card>
      <Text css={{ lineHeight: '23px', fontWeight: 500 }}>Default Card</Text>
      <Text css={{ color: '$grey900', lineHeight: '23px' }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,
      </Text>
    </Card>
  )
}

/**
 * Use for the base component of most cards
 */
export const Classic = () => {
  return (
    <Row css={{ gap: '$3' }}>
      <Card>
        <Text css={{ lineHeight: '23px', fontWeight: 500 }}>Default Card</Text>
        <Text css={{ color: '$grey900', lineHeight: '23px' }}>
          Lorem Ipsum is simply dummy text...
        </Text>
      </Card>
      <Card interactive tabIndex={0}>
        <Text css={{ lineHeight: '23px', fontWeight: 500 }}>
          Default Interactive
        </Text>
        <Text css={{ color: '$grey900', lineHeight: '23px' }}>
          Lorem Ipsum is simply dummy text...
        </Text>
      </Card>
    </Row>
  )
}

/**
 * Can be used as an alternative card style when you don't want the card to compete with another main element on the page.
 *
 * Add `tabIndex` if you want it to be focusable.
 */
export const Outline = () => {
  return (
    <Row css={{ gap: '$3' }}>
      <Card variant="outline">
        <Text css={{ lineHeight: '23px', fontWeight: 500 }}>Outline</Text>
        <Text css={{ color: '$grey900', lineHeight: '23px' }}>
          Lorem Ipsum is simply dummy text...
        </Text>
      </Card>
      <Card variant="outline" interactive tabIndex={0}>
        <Text css={{ lineHeight: '23px', fontWeight: 500 }}>
          Outline Interactive
        </Text>
        <Text css={{ color: '$grey900', lineHeight: '23px' }}>
          Lorem Ipsum is simply dummy text...
        </Text>
      </Card>
    </Row>
  )
}

/**
 * Use for selection between cards.
 *
 * Make a `button` with the `as` prop to support actions
 */
export const Ghost = () => {
  return (
    <Row css={{ gap: '$3' }}>
      <Card variant="ghost">
        <Text css={{ lineHeight: '23px', fontWeight: 500 }}>Ghost</Text>
        <Text css={{ color: '$grey900', lineHeight: '23px' }}>
          Lorem Ipsum is simply dummy text...
        </Text>
      </Card>
      <Card as="button" interactive variant="ghost" onClick={action('Action')}>
        <Text css={{ lineHeight: '23px', fontWeight: 500 }}>Ghost</Text>
        <Text css={{ color: '$grey900', lineHeight: '23px' }}>
          Lorem Ipsum is simply dummy text...
        </Text>
      </Card>
    </Row>
  )
}
