import React from 'react'
import { renderDark, renderLight } from '../../test'
import { Default } from './Pagination.stories'

it('renders light without error', () => {
  const { asFragment } = renderLight(<Default totalPages={10} />)
  expect(asFragment()).toBeDefined()
})

it('renders dark without error', () => {
  const { asFragment } = renderDark(<Default totalPages={20} />)
  expect(asFragment()).toBeDefined()
})
