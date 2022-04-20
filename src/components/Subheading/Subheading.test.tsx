import React from 'react'
import { renderDark, renderLight } from 'test-utils'
import { Default, Variants } from './Subheading.stories'

it('renders light without error', () => {
  const { asFragment } = renderLight(<Default />)
  expect(asFragment()).toBeDefined()
})

it('renders dark without error', () => {
  const { asFragment } = renderDark(<Default />)
  expect(asFragment()).toBeDefined()
})

it('renders all variants without error', () => {
  const { asFragment } = renderLight(<Variants />)
  expect(asFragment()).toBeDefined()
})
