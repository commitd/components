import React from 'react'
import { renderLight, renderDark, screen } from 'test-utils'
import { Default, AsHr, Decorative } from './Divider.stories'

it('renders light without error', () => {
  const { asFragment } = renderLight(<Default />)
  expect(asFragment()).toBeDefined()
})

it('renders dark without error', () => {
  const { asFragment } = renderDark(<Default />)
  expect(asFragment()).toBeDefined()
})

it('renders with role separator', () => {
  renderLight(<AsHr />)
  expect(screen.getByRole('separator')).toBeInTheDocument()
})

it('renders without role separator when decorative', () => {
  renderLight(<Decorative />)
  expect(screen.queryByRole('separator')).not.toBeInTheDocument()
})
