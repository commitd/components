import { Inline, Skeleton } from '@committed/ds'
import { Meta, StoryFn, StoryObj } from '@storybook/react'

const meta: Meta<typeof Skeleton> = {
  title: 'Components/Skeleton',
  component: Skeleton,
}
export default meta
type Story = StoryObj<typeof Skeleton>

export const Primary: Story = {}

export const Text: Story = {
  args: {
    variant: 'text',
  },
}

export const Title: Story = {
  args: {
    variant: 'title',
  },
}

/** An alternative animation, `pulse`, is available  */
export const Animation: Story = {
  args: {
    variant: 'title',
    animation: 'pulse',
  },
}

/** The `avatar` variant also supports an additional size prop to reflect the sizing on the `Avatar` component.  */
export const Avatar: StoryFn = () => (
  <Inline>
    <Skeleton variant="avatar" size="small" />
    <Skeleton variant="avatar" />
    <Skeleton variant="avatar" size="large" />
  </Inline>
)

/** The `button` variant also supports an additional size prop to reflect the sizing on the `Button` component.  */
export const Buttons: StoryFn = () => (
  <Inline>
    <Skeleton variant="button" size="small" />
    <Skeleton variant="button" />
    <Skeleton variant="button" size="large" />
  </Inline>
)
