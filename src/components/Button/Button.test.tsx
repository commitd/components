import React from 'react'
import { renderLight, renderDark, screen } from 'test-utils'
import { All } from './Button.stories'
import { Button } from '.'

it('renders light without error', () => {
  const { asFragment } = renderLight(<Button />)
  expect(asFragment()).toBeDefined()
})

it('renders dark without error', () => {
  const { asFragment } = renderDark(<Button />)
  expect(asFragment()).toBeDefined()
})

it('renders all variants without error', () => {
  const { asFragment } = renderDark(<All />)
  expect(asFragment()).toBeDefined()
})

it('has role button', () => {
  renderDark(<Button />)
  expect(screen.getByRole('button')).toBeInTheDocument()
})
