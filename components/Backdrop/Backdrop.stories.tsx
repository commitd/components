import { useBoolean, useTimeout } from '@committed/hooks'
import { css } from '@committed/ss/css'
import { Meta, StoryObj } from '@storybook/react'
import { Backdrop } from '.'
import { Button, Spinner, Text } from '../'

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
          <Spinner variant="spin" />
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
          overlayClassName={css({
            backgroundColor: 'paper',
          })}
          contentClassName={css({
            border: 'solid 2px black',
            color: 'text',
          })}
        >
          <Text size="3">Running...</Text>
        </Backdrop>
      </>
    )
  },
}
