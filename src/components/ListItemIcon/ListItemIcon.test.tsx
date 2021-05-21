import React from 'react'
import { renderLight, renderDark } from 'test-utils'
import { ListItemIcon } from '..'

it('renders light without error', () => {
  const { asFragment } = renderLight(<ListItemIcon />)
  expect(asFragment()).toBeDefined()
})

it('renders dark without error', () => {
  const { asFragment } = renderDark(<ListItemIcon />)
  expect(asFragment()).toBeDefined()
})
