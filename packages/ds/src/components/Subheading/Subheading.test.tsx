import {
  Default,
  Variants,
} from '../../../../../apps/storybook/stories/Subheading.stories'
import { renderDark, renderLight } from '../../test'

it('renders light without error', () => {
  const { asFragment } = renderLight(<Default />)
  expect(asFragment()).toBeDefined()
})

it('renders dark without error', () => {
  const { asFragment } = renderDark(<Default />)
  expect(asFragment()).toBeDefined()
})

it('renders all variants without error', () => {
  const { asFragment } = renderLight(<Variants />)
  expect(asFragment()).toBeDefined()
})
