import React from 'react'
import { renderLight, renderDark } from 'test-utils'

import { ListItemText } from '.'

it('renders light without error', () => {
  const { asFragment } = renderLight(<ListItemText text="text" />)
  expect(asFragment()).toBeDefined()
})

it('renders dark without error', () => {
  const { asFragment } = renderDark(<ListItemText text="text" />)
  expect(asFragment()).toBeDefined()
})
