import { Args, StoryContext } from '@storybook/react'
import { Default } from '../../../../../apps/storybook/stories/Svg.stories'
import { renderDark, renderLight } from '../../test'

it('renders light without error', () => {
  const { asFragment } = renderLight(
    Default({}, {
      globals: { portalled: true },
    } as unknown as StoryContext<Args>),
  )
  expect(asFragment()).toBeDefined()
})

it('renders dark without error', () => {
  const { asFragment } = renderDark(
    Default({}, {
      globals: { portalled: true },
    } as unknown as StoryContext<Args>),
  )
  expect(asFragment()).toBeDefined()
})
