import React from 'react'
import { renderLight, renderDark } from 'test-utils'
import { Default } from './SvgIcon.stories'
import { StoryContext } from '@storybook/react'

it('renders light without error', () => {
  const { asFragment } = renderLight(
    Default({}, ({ globals: { portalled: true } } as unknown) as StoryContext)
  )
  expect(asFragment()).toBeDefined()
})

it('renders dark without error', () => {
  const { asFragment } = renderDark(
    Default({}, ({ globals: { portalled: true } } as unknown) as StoryContext)
  )
  expect(asFragment()).toBeDefined()
})
