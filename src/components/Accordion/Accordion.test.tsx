import React from 'react'
import { renderLight, renderDark } from 'test-utils'
import { Default } from './Accordion.stories'

it('renders light without error', () => {
  const { asFragment } = renderLight(<Default />)
  expect(asFragment()).toMatchSnapshot()
})

it('renders dark without error', () => {
  const { asFragment } = renderDark(<Default />)
  expect(asFragment()).toMatchSnapshot()
})
