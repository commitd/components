import React from 'react'
import { renderLight, renderDark } from './setupTests'
import { Logo } from '../src'

it('renders light without crashing', () => {
  const { asFragment } = renderLight(<Logo />)
  expect(asFragment()).toMatchSnapshot()
})

it('renders dark without crashing', () => {
  const { asFragment } = renderDark(<Logo />)
  expect(asFragment()).toMatchSnapshot()
})
