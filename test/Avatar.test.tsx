import React from 'react'
import { renderLight, renderDark } from './setupTests'
import { Avatar } from '../src'

it('renders light without crashing', () => {
  const { asFragment } = renderLight(<Avatar />)
  expect(asFragment()).toMatchSnapshot()
})

it('renders dark without crashing', () => {
  const { asFragment } = renderDark(<Avatar />)
  expect(asFragment()).toMatchSnapshot()
})
