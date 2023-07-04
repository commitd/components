import { mdiComment, mdiOpenInNew, mdiPencil, mdiThumbUp } from '@mdi/js'
import { action } from '@storybook/addon-actions'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import {
  Card,
  CardActions,
  CardBody,
  CardHeading,
  CardLeadIn,
  CardSubheading,
} from '.'
import { Button, IconButton, Svg, Text } from '..'
import { Inline } from '../Inline'

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  subcomponents: {
    CardBody,
    CardHeading,
    CardSubheading,
    CardLeadIn,
    CardActions,
  },
}
export default meta
type Story = StoryObj<typeof Card>

export const Default: Story = {
  render: () => (
    <Card>
      <CardHeading>Default Card</CardHeading>
      <CardBody>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </Text>
      </CardBody>
    </Card>
  ),
}

/**
 * Use for the base component of most cards
 */
export const Classic: Story = {
  render: () => (
    <Inline>
      <Card>
        <CardHeading>Default Card</CardHeading>
        <CardBody>
          <Text>Lorem Ipsum is simply dummy text...</Text>
        </CardBody>
      </Card>
      <Card interactive tabIndex={0}>
        <CardHeading>Default Interactive</CardHeading>
        <CardBody>
          <Text>Lorem Ipsum is simply dummy text...</Text>
        </CardBody>
      </Card>
    </Inline>
  ),
}

/**
 * Can be used as an alternative card style when you don't want the card to compete with another main element on the page.
 *
 * Add `tabIndex` if you want it to be focusable.
 */
export const Outline: Story = {
  render: () => (
    <Inline>
      <Card variant="outline">
        <CardHeading>Outline</CardHeading>
        <CardBody>
          <Text>Lorem Ipsum is simply dummy text...</Text>
        </CardBody>
      </Card>
      <Card variant="outline" interactive tabIndex={0}>
        <CardHeading>Outline Interactive</CardHeading>
        <CardBody>
          <Text>Lorem Ipsum is simply dummy text...</Text>
        </CardBody>
      </Card>
    </Inline>
  ),
}

/**
 * Use for selection between cards.
 *
 * Make a `button` with the `as` prop to support actions
 */
export const Ghost: Story = {
  render: () => (
    <Inline>
      <Card variant="ghost">
        <CardHeading>Ghost</CardHeading>
        <CardBody>
          <Text>Lorem Ipsum is simply dummy text...</Text>
        </CardBody>
      </Card>
      <Card as="button" interactive variant="ghost" onClick={action('Action')}>
        <CardHeading>Ghost</CardHeading>
        <CardBody>
          <Text>Lorem Ipsum is simply dummy text...</Text>
        </CardBody>
      </Card>
    </Inline>
  ),
}

/**
 * Use the `CardBody` to wrap the main contents of the card.
 *
 * This adds the padding and column layout. Elements, like a header image, that go to the edge of the card should be outside this.
 */
export const Body: Story = {
  render: () => (
    <Card as="button">
      <CardBody>
        <Text>Lorem Ipsum is simply dummy text...</Text>
      </CardBody>
    </Card>
  ),
}

/**
 * Card has 3 heading components: `CardHeading`, `CardSubheading` and `CardLeadIn`.
 *
 * By default headings are just `div`s, use the `as` prop if the heading should be semantic.
 */
export const Headers: Story = {
  render: () => (
    <Inline wrap>
      <Card>
        <CardHeading>Heading</CardHeading>
        <CardBody>
          <Text>Lorem Ipsum is simply dummy text...</Text>
        </CardBody>
      </Card>
      <Card>
        <CardHeading>Heading</CardHeading>
        <CardSubheading>Subheading</CardSubheading>
        <CardBody>
          <Text>Lorem Ipsum is simply dummy text...</Text>
        </CardBody>
      </Card>
      <Card>
        <CardLeadIn>Lead in</CardLeadIn>
        <CardHeading as="h3">Header</CardHeading>
        <CardBody>
          <Text>Lorem Ipsum is simply dummy text...</Text>
        </CardBody>
      </Card>
    </Inline>
  ),
}

/**
 * The `CardHeader` and the `CardLeadIn` support the addition of an IconButton that floats to the right.
 * The `CardActions` can be used after the body to hold actions such as buttons.
 *
 * If a more complex layout is required you can create your own.
 */
export const Actions: Story = {
  render: () => (
    <Inline wrap>
      <Card>
        <CardHeading>
          Heading
          <IconButton variant="tertiary" onClick={action('action')}>
            <Svg path={mdiPencil} />
          </IconButton>
        </CardHeading>
        <CardBody>
          <Text>Lorem Ipsum is simply dummy text...</Text>
        </CardBody>
        <CardActions>
          <Button variant="primary">Action</Button>
        </CardActions>
      </Card>
      <Card>
        <CardHeading>
          Heading
          <IconButton variant="tertiary" onClick={action('action')}>
            <Svg path={mdiPencil} />
          </IconButton>
        </CardHeading>
        <CardSubheading>Subheading</CardSubheading>
        <CardBody>
          <Text>Lorem Ipsum is simply dummy text...</Text>
        </CardBody>
        <CardActions>
          <Button variant="tertiary" onClick={action('cancel')}>
            Cancel
          </Button>
          <Button variant="primary" onClick={action('action')}>
            Action
          </Button>
        </CardActions>
      </Card>
      <Card>
        <CardLeadIn>
          Lead in
          <IconButton
            path={mdiPencil}
            variant="tertiary"
            onClick={action('action')}
          />
        </CardLeadIn>
        <CardHeading as="h3">Header</CardHeading>
        <CardBody>
          <Text>Lorem Ipsum is simply dummy text...</Text>
        </CardBody>
        <CardActions justifyContent="flex-start">
          <IconButton
            path={mdiThumbUp}
            variant="tertiary"
            css={{ color: 'info' }}
            onClick={action('Thumb Up')}
          />
          <IconButton
            path={mdiOpenInNew}
            variant="tertiary"
            css={{ color: 'textSecondary' }}
            onClick={action('Open')}
          />
          <IconButton
            path={mdiComment}
            variant="tertiary"
            css={{ color: 'textSecondary' }}
            onClick={action('Comment')}
          />
        </CardActions>
      </Card>
    </Inline>
  ),
}
