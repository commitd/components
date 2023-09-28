import { Backdrop, Button, Spinner, Text } from '@committed/ds'
import { useBoolean, useTimeout } from '@committed/hooks'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Backdrop> = {
  title: 'Components/Backdrop',
  component: Backdrop,
}
export default meta

type Story = StoryObj<typeof Backdrop>

export const Default: Story = {
  render: () => {
    const [open, { setTrue, setFalse }] = useBoolean(false)
    useTimeout(setFalse, open ? 1000 : null)

    return (
      <>
        <Button onClick={setTrue}>Show Backdrop</Button>
        <Backdrop open={open}>
          <Spinner size="$8" variant="spin" />
        </Backdrop>
      </>
    )
  },
}

/**
 * Additional styling can be supplied to the background overlay and the content wrapper using the relevant css props.
 */
export const Styling: Story = {
  render: () => {
    const [open, { setTrue, setFalse }] = useBoolean(false)
    useTimeout(setFalse, open ? 1000 : null)

    return (
      <>
        <Button onClick={setTrue}>Show Backdrop</Button>
        <Backdrop
          open={open}
          overlay="solid"
          css={{
            zIndex: 1000,
          }}
          contentCss={{
            border: 'solid 2px black',
            color: '$primary',
          }}
        >
          <Text size="$3">Running...</Text>
        </Backdrop>
      </>
    )
  },
}
