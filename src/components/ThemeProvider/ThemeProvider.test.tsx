import React from 'react'
import { ThemeProvider } from '.'
import { renderPlain } from 'test-utils'

it('renders light without error', () => {
  const { asFragment } = renderPlain(<ThemeProvider />)
  expect(asFragment()).toMatchSnapshot()
})

it('renders dark without error', () => {
  const { asFragment } = renderPlain(<ThemeProvider choice="dark" />)
  expect(asFragment()).toMatchSnapshot()
})
