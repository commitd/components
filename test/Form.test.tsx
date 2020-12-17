import React from 'react'
import { renderLight, renderDark, fireEvent } from './setupTests'
import { Form, TextField, Button } from '../src'

const Example = ({ onSubmit }: { onSubmit: (e: any) => void }) => (
  <Form width={1 / 2} onSubmit={onSubmit} data-testid="form">
    <TextField id="standard-name" label="Name" margin="normal" />
    <Button type="submit" color="primary" mt={2}>
      Submit
    </Button>
  </Form>
)

it('renders light without crashing', () => {
  const { asFragment } = renderLight(<Form />)
  expect(asFragment()).toMatchSnapshot()
})

it('renders dark without crashing', () => {
  const { asFragment } = renderDark(<Form />)
  expect(asFragment()).toMatchSnapshot()
})

it('renders dark without crashing', () => {
  const onSubmit = jest.fn()
  const { getByTestId } = renderDark(<Example onSubmit={onSubmit} />)
  fireEvent.submit(getByTestId('form'))
  expect(onSubmit).toHaveBeenCalled()
})
