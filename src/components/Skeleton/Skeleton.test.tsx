import { composeStories } from '@storybook/testing-react'
import React from 'react'
import { renderDark, renderLight } from 'test-utils'
import * as stories from './Skeleton.stories'
const { Primary, Avatar, Buttons } = composeStories(stories)

it('renders light without error', () => {
  const { asFragment } = renderLight(<Primary />)
  expect(asFragment()).toBeDefined()
})

it('renders as Avatar', () => {
  const { asFragment } = renderDark(<Avatar />)
  expect(asFragment()).toBeDefined()
})

it('renders as button', () => {
  const { asFragment } = renderDark(<Buttons />)
  expect(asFragment()).toBeDefined()
})
