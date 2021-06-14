import React from 'react'
import { renderLight, renderDark } from 'test-utils'
import { Default, UtilityClasses, Sticky, Striped } from './Table.stories'

it('renders light without error', () => {
  const { asFragment } = renderLight(<Default />)
  expect(asFragment()).toBeDefined()
})

it('renders dark without error', () => {
  const { asFragment } = renderDark(<Default />)
  expect(asFragment()).toBeDefined()
})

it('renders utility classes light without error', () => {
  const { asFragment } = renderLight(<UtilityClasses />)
  expect(asFragment()).toBeDefined()
})

it('renders utility classes  dark without error', () => {
  const { asFragment } = renderDark(<UtilityClasses />)
  expect(asFragment()).toBeDefined()
})

it('renders Sticky dark without error', () => {
  const { asFragment } = renderDark(<Sticky />)
  expect(asFragment()).toBeDefined()
})

it('renders Striped dark without error', () => {
  const { asFragment } = renderDark(<Striped />)
  expect(asFragment()).toBeDefined()
})
