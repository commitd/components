import { Args, ReactFramework, StoryContext } from '@storybook/react'
import { renderDark, renderLight } from '../../test'
import { Default } from './Svg.stories'

it('renders light without error', () => {
  const { asFragment } = renderLight(
    Default({}, { globals: { portalled: true } } as unknown as StoryContext<
      ReactFramework,
      Args
    >)
  )
  expect(asFragment()).toBeDefined()
})

it('renders dark without error', () => {
  const { asFragment } = renderDark(
    Default({}, { globals: { portalled: true } } as unknown as StoryContext<
      ReactFramework,
      Args
    >)
  )
  expect(asFragment()).toBeDefined()
})
