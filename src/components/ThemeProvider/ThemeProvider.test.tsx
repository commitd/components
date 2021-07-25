import React from 'react'
import { ThemeProvider } from '.'
import {
  UtilityUseThemeResolve,
  UtilityUseThemeController,
} from './ThemeProvider.stories'
import { renderPlain, renderLight, renderDark } from 'test-utils'

it('renders light without error', () => {
  const { asFragment } = renderPlain(<ThemeProvider />)
  expect(asFragment()).toBeDefined()
})

it('renders dark without error', () => {
  const { asFragment } = renderPlain(<ThemeProvider choice="dark" />)
  expect(asFragment()).toBeDefined()
})

it('renders resolutions within light theme', () => {
  const { asFragment } = renderLight(<UtilityUseThemeResolve />)
  expect(asFragment()).toBeDefined()
})

it('renders resolutions within dark theme', () => {
  const { asFragment } = renderDark(<UtilityUseThemeResolve />)
  expect(asFragment()).toBeDefined()
})

it('renders switch within light theme', () => {
  const { asFragment } = renderLight(<UtilityUseThemeController />)
  expect(asFragment()).toBeDefined()
})

it('renders switch within dark theme', () => {
  const { asFragment } = renderDark(<UtilityUseThemeController />)
  expect(asFragment()).toBeDefined()
})
