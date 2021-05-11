import React from 'react'
import { renderLight, renderDark } from 'test-utils'
import { Default } from './Grid.stories'
import { Grid } from '.'

it('renders light without error', () => {
  const { asFragment } = renderLight(<Default />)
  expect(asFragment()).toBeDefined()
})

it('renders dark without error', () => {
  const { asFragment } = renderDark(<Default />)
  expect(asFragment()).toBeDefined()
})
