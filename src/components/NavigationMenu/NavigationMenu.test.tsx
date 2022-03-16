import React from 'react'
import { renderLight, renderDark } from 'test-utils'
import { AlternativeContent, Default, Wrapped } from './NavigationMenu.stories'

it('renders light without error', () => {
  const { asFragment } = renderLight(<Default />)
  expect(asFragment()).toBeDefined()
})

it('renders dark without error', () => {
  const { asFragment } = renderDark(<Default />)
  expect(asFragment()).toBeDefined()
})

it('renders wrapped version', () => {
  const { asFragment } = renderLight(<Wrapped />)
  expect(asFragment()).toBeDefined()
})

it('renders alternative content', () => {
  const { asFragment } = renderLight(<AlternativeContent />)
  expect(asFragment()).toBeDefined()
})
