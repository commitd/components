import React from 'react'
import { renderLight, renderDark } from 'test-utils'
import { Button } from '.'

it('renders light without error', () => {
  const { asFragment } = renderLight(<Button />)
  expect(asFragment()).toMatchSnapshot()
})

it('renders dark without error', () => {
  const { asFragment } = renderDark(<Button />)
  expect(asFragment()).toMatchSnapshot()
})
