import React from 'react'
import { renderDark, renderLight } from '../../test'
import { MultipleSelections } from './ToggleGroup.stories'

it('renders light without error', () => {
  const { asFragment } = renderLight(<MultipleSelections />)
  expect(asFragment()).toBeDefined()
})

it('renders dark without error', () => {
  const { asFragment } = renderDark(<MultipleSelections />)
  expect(asFragment()).toBeDefined()
})
