import React from 'react'
import { ThemeProvider } from '.'
import { renderPlain } from 'test-utils'

it('renders light without error', () => {
  const { asFragment } = renderPlain(<ThemeProvider />)
  expect(asFragment()).toBeDefined()
})

it('renders dark without error', () => {
  const { asFragment } = renderPlain(<ThemeProvider choice="dark" />)
  expect(asFragment()).toBeDefined()
})
