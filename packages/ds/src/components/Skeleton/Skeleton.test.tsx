import { composeStories } from '@storybook/react'
import * as stories from '../../../../../apps/storybook/stories/Skeleton.stories'
import { renderDark, renderLight } from '../../test'
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
