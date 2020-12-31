import React from 'react'
import { Form, FormControl, Input, InputLabel } from '../src'
import { fireEvent, renderDark, renderLight } from './setupTests'

const Example = ({ onSubmit }: { onSubmit: (e: any) => void }) => (
  <Form width={1 / 2} onSubmit={onSubmit} data-testid="form">
    <FormControl>
      <InputLabel htmlFor="my-input">Email address</InputLabel>
      <Input id="my-input" aria-describedby="my-helper-text" />
    </FormControl>
  </Form>
)

it('renders light without crashing', () => {
  const { asFragment } = renderLight(<Example onSubmit={jest.fn()} />)
  expect(asFragment()).toMatchSnapshot()
})

it('renders dark without crashing', () => {
  const { asFragment } = renderDark(<Example onSubmit={jest.fn()} />)
  expect(asFragment()).toMatchSnapshot()
})

it('renders dark without crashing', () => {
  const onSubmit = jest.fn()
  const { getByTestId } = renderDark(<Example onSubmit={onSubmit} />)
  fireEvent.submit(getByTestId('form'))
  expect(onSubmit).toHaveBeenCalled()
})
