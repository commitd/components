import { StoryContext } from '@storybook/react'
import { renderDark, renderLight } from 'test-utils'
import { Default } from './SvgIcon.stories'

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
