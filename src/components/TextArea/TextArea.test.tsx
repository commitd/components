import React from 'react'
import { renderDark, renderLight, screen, userEvent } from 'test-utils'
import { Default } from './TextArea.stories'
import { TextArea } from '.'

it('renders light without error', () => {
  const { asFragment } = renderLight(<Default />)
  expect(asFragment()).toBeDefined()
})

it('renders dark without error', () => {
  const { asFragment } = renderDark(<Default />)
  expect(asFragment()).toBeDefined()
})

it('onValueChange is called on change', () => {
  const onValueChange = jest.fn()
  renderLight(
    <TextArea id="name-value" label="Name" onValueChange={onValueChange} />
  )
  userEvent.type(screen.getByLabelText('Name'), 't')
  expect(onValueChange).toHaveBeenCalledWith('t')
})
