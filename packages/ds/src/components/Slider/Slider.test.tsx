import { Default } from '../../apps/storybook/stories/Slider.stories'
import { renderDark, renderLight } from '../../test'

it('renders light without error', () => {
  const { asFragment } = renderLight(<Default />)
  expect(asFragment()).toBeDefined()
})

it('renders dark without error', () => {
  const { asFragment } = renderDark(<Default />)
  expect(asFragment()).toBeDefined()
})
