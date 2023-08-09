import { Primary } from '../../../../../apps/storybook/stories/Breadcrumbs.stories'
import { renderDark, renderLight } from '../../test'

it('renders light without error', () => {
  const { asFragment } = renderLight(<Primary />)
  expect(asFragment()).toBeDefined()
})

it('renders dark without error', () => {
  const { asFragment } = renderDark(<Primary />)
  expect(asFragment()).toBeDefined()
})
