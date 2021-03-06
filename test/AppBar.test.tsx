import React from 'react'
import { renderLight, renderDark } from './setupTests'
import { AppBar, Toolbar } from '../src'

it('renders light without crashing', () => {
  const { asFragment } = renderLight(
    <AppBar>
      <Toolbar />
    </AppBar>
  )
  expect(asFragment()).toMatchSnapshot()
})

it('renders dark without crashing', () => {
  const { asFragment } = renderDark(
    <AppBar>
      <Toolbar />
    </AppBar>
  )
  expect(asFragment()).toMatchSnapshot()
})
