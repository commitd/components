import React from 'react'
import { renderLight, renderDark } from './setupTests'
import { Flex } from '../src'

it('renders light without crashing', () => {
  const { asFragment } = renderLight(<Flex />)
  expect(asFragment()).toMatchSnapshot()
})

it('renders dark without crashing', () => {
  const { asFragment } = renderDark(<Flex />)
  expect(asFragment()).toMatchSnapshot()
})
