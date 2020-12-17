import React from 'react'
import { renderLight, renderDark } from './setupTests'
import { Divider } from '../src'

it('renders light without crashing', () => {
  const { asFragment } = renderLight(<Divider />)
  expect(asFragment()).toMatchSnapshot()
})

it('renders dark without crashing', () => {
  const { asFragment } = renderDark(<Divider />)
  expect(asFragment()).toMatchSnapshot()
})
