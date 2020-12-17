import React from 'react'
import { renderLight, renderDark } from './setupTests'
import { Box } from '../src'

it('renders light without crashing', () => {
  const { asFragment } = renderLight(<Box />)
  expect(asFragment()).toMatchSnapshot()
})

it('renders dark without crashing', () => {
  const { asFragment } = renderDark(<Box />)
  expect(asFragment()).toMatchSnapshot()
})
