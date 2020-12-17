import React from 'react'
import { renderLight, renderDark, userEvent } from './setupTests'
import { Chip } from '../src'

const text = 'Test'

it('renders light without crashing', () => {
  const { asFragment } = renderLight(<Chip label={text} />)
  expect(asFragment()).toMatchSnapshot()
})

it('renders dark without crashing', () => {
  const { asFragment } = renderDark(<Chip label={text} />)
  expect(asFragment()).toMatchSnapshot()
})

it('can get by label and click', () => {
  const onClick = jest.fn()
  const { getByText } = renderDark(<Chip label={text} onClick={onClick} />)
  userEvent.click(getByText(text))
  expect(onClick).toHaveBeenCalled()
})
