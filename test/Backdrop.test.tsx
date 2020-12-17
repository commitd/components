import React from 'react'
import { renderLight, renderDark } from './setupTests'
import { Backdrop } from '../src'

it('renders light without crashing', () => {
  const { asFragment } = renderLight(<Backdrop open={true} />)
  expect(asFragment()).toMatchSnapshot()
})

it('renders light without crashing', () => {
  const { asFragment } = renderDark(<Backdrop open={true} />)
  expect(asFragment()).toMatchSnapshot()
})
