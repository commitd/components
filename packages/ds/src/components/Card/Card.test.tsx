import {
  Actions,
  Default,
} from '../../../../../apps/storybook/stories/Card.stories'
import { renderDark, renderLight } from '../../test'

it('renders light without error', () => {
  const { asFragment } = renderLight(<Default />)
  expect(asFragment()).toBeDefined()
})

it('renders dark without error', () => {
  const { asFragment } = renderDark(<Default />)
  expect(asFragment()).toBeDefined()
})

it('renders with all sub components', () => {
  const { asFragment } = renderLight(<Actions />)
  expect(asFragment()).toBeDefined()
})
