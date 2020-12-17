import React from 'react'
import { renderLight, renderDark, userEvent } from './setupTests'
import { CheckToken } from '../src'

it('renders light without crashing', () => {
  const { asFragment } = renderLight(<CheckToken />)
  expect(asFragment()).toMatchSnapshot()
})

it('renders dark without crashing', () => {
  const { asFragment } = renderDark(<CheckToken />)
  expect(asFragment()).toMatchSnapshot()
})

it('clicking calls onClick', () => {
  const text = 'Test'
  const onClick = jest.fn()
  const { getByLabelText, getByText } = renderDark(
    <CheckToken aria-label="check-token" onClick={onClick}>
      {text}
    </CheckToken>
  )
  userEvent.click(getByLabelText('check-token'))
  userEvent.click(getByText(text))
  expect(onClick).toBeCalledTimes(2)
})

it('element can be controlled: true', () => {
  const text = 'Test'
  const onClick = jest.fn()
  const { getByRole } = renderDark(
    <CheckToken selected={true} onClick={onClick}>
      {text}
    </CheckToken>
  )
  userEvent.click(getByRole('button', { pressed: true }))
  expect(onClick).toBeCalledTimes(1)
})

it('element can be controlled: false ', () => {
  const text = 'Test'
  const onClick = jest.fn()
  const { getByRole } = renderDark(
    <CheckToken selected={false} onClick={onClick}>
      {text}
    </CheckToken>
  )
  userEvent.click(getByRole('button', { pressed: false }))
  expect(onClick).toBeCalledTimes(1)
})

it('value is passed to handler ', () => {
  const text = 'Test'
  const value = 'Testing'
  const onClick = jest.fn()
  const { getByRole } = renderDark(
    <CheckToken value={value} onClick={onClick}>
      {text}
    </CheckToken>
  )
  userEvent.click(getByRole('button', { pressed: false }))
  expect(onClick).toBeCalledWith(expect.anything(), value)
})
