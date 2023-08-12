import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeading,
  CardLeadIn,
  CardSubheading,
  IconButton,
  Inline,
  Svg,
  Text,
} from '@committed/ds'
import { css } from '@committed/ss/css'
import { mdiComment, mdiOpenInNew, mdiPencil, mdiThumbUp } from '@mdi/js'
import { action } from '@storybook/addon-actions'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  subcomponents: {
    CardContent,
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
      <CardContent>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s,
        </Text>
      </CardContent>
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
        <CardContent>
          <Text>Lorem Ipsum is simply dummy text...</Text>
        </CardContent>
      </Card>
      <Card interactive tabIndex={0}>
        <CardHeading>Default Interactive</CardHeading>
        <CardContent>
          <Text>Lorem Ipsum is simply dummy text...</Text>
        </CardContent>
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
        <CardContent>
          <Text>Lorem Ipsum is simply dummy text...</Text>
        </CardContent>
      </Card>
      <Card variant="outline" interactive tabIndex={0}>
        <CardHeading>Outline Interactive</CardHeading>
        <CardContent>
          <Text>Lorem Ipsum is simply dummy text...</Text>
        </CardContent>
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
        <CardContent>
          <Text>Lorem Ipsum is simply dummy text...</Text>
        </CardContent>
      </Card>
      <Card as="button" interactive variant="ghost" onClick={action('Action')}>
        <CardHeading>Ghost</CardHeading>
        <CardContent>
          <Text>Lorem Ipsum is simply dummy text...</Text>
        </CardContent>
      </Card>
    </Inline>
  ),
}

/**
 * Use the `CardContent` to wrap the main contents of the card.
 *
 * This adds the padding and column layout. Elements, like a header image, that go to the edge of the card should be outside this.
 */
export const Body: Story = {
  render: () => (
    <Card as="button">
      <CardContent>
        <Text>Lorem Ipsum is simply dummy text...</Text>
      </CardContent>
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
        <CardContent>
          <Text>Lorem Ipsum is simply dummy text...</Text>
        </CardContent>
      </Card>
      <Card>
        <CardHeading>Heading</CardHeading>
        <CardSubheading>Subheading</CardSubheading>
        <CardContent>
          <Text>Lorem Ipsum is simply dummy text...</Text>
        </CardContent>
      </Card>
      <Card>
        <CardLeadIn>Lead in</CardLeadIn>
        <CardHeading as="h3">Header</CardHeading>
        <CardContent>
          <Text>Lorem Ipsum is simply dummy text...</Text>
        </CardContent>
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
          <IconButton variant="text" onClick={action('action')}>
            <Svg path={mdiPencil} />
          </IconButton>
        </CardHeading>
        <CardContent>
          <Text>Lorem Ipsum is simply dummy text...</Text>
        </CardContent>
        <CardActions>
          <Button variant="solid" color="primary">
            Action
          </Button>
        </CardActions>
      </Card>
      <Card>
        <CardHeading>
          Heading
          <IconButton variant="text" onClick={action('action')}>
            <Svg path={mdiPencil} />
          </IconButton>
        </CardHeading>
        <CardSubheading>Subheading</CardSubheading>
        <CardContent>
          <Text>Lorem Ipsum is simply dummy text...</Text>
        </CardContent>
        <CardActions>
          <Button variant="text" color="neutral" onClick={action('cancel')}>
            Cancel
          </Button>
          <Button variant="solid" color="primary" onClick={action('action')}>
            Action
          </Button>
        </CardActions>
      </Card>
      <Card>
        <CardLeadIn>
          Lead in
          <IconButton
            path={mdiPencil}
            variant="text"
            onClick={action('action')}
          />
        </CardLeadIn>
        <CardHeading asChild>
          <h3>Header</h3>
        </CardHeading>
        <CardContent>
          <Text>Lorem Ipsum is simply dummy text...</Text>
        </CardContent>
        <CardActions justifyContent="flex-start">
          <IconButton
            path={mdiThumbUp}
            variant="text"
            className={css({ color: 'info' })}
            onClick={action('Thumb Up')}
          />
          <IconButton
            path={mdiOpenInNew}
            variant="text"
            className={css({ color: '$text.secondary' })}
            onClick={action('Open')}
          />
          <IconButton
            path={mdiComment}
            variant="text"
            className={css({ color: '$text.secondary' })}
            onClick={action('Comment')}
          />
        </CardActions>
      </Card>
    </Inline>
  ),
}
