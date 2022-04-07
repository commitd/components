import { useBoolean, useTimeout } from '@committed/hooks'
import { Meta, Story } from '@storybook/react'
import React from 'react'
import { Backdrop } from '.'
import { Button, Spinner, Text } from '../'

export default {
  title: 'Components/Backdrop',
  component: Backdrop,
} as Meta

export const Default: Story = () => {
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
}

/**
 * Additional styling can be supplied to the background overlay and the content wrapper using the relevant css props.
 */
export const Styling: Story = () => {
  const [open, { setTrue, setFalse }] = useBoolean(false)
  useTimeout(setFalse, open ? 1000 : null)

  return (
    <>
      <Button onClick={setTrue}>Show Backdrop</Button>
      <Backdrop
        open={open}
        overlayCss={{
          backgroundColor: '$paper',
        }}
        contentCss={{
          border: 'solid 2px $primary',
        }}
      >
        <Text size={3}>Running...</Text>
      </Backdrop>
    </>
  )
}
