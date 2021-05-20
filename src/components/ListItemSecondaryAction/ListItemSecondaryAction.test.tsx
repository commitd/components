import React from 'react'
import { renderLight, renderDark } from 'test-utils'
import { ListItemSecondaryAction } from './ListItemSecondaryAction'

it('renders light without error', () => {
  const { asFragment } = renderLight(<ListItemSecondaryAction />)
  expect(asFragment()).toBeDefined()
})

it('renders dark without error', () => {
  const { asFragment } = renderDark(<ListItemSecondaryAction />)
  expect(asFragment()).toBeDefined()
})
