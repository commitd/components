import { Input } from '.'
import { Default } from '../../../../../apps/storybook/stories/Input.stories'
import { renderDark, renderLight, screen, userEvent } from '../../test'

it('renders light without error', () => {
  const { asFragment } = renderLight(<Default />)
  expect(asFragment()).toBeDefined()
})

it('renders dark without error', () => {
  const { asFragment } = renderDark(<Default />)
  expect(asFragment()).toBeDefined()
})

it('onValueChange is called on change', () => {
  const onValueChange = jest.fn()
  renderLight(
    <Input id="name-value" label="Name" onValueChange={onValueChange} />,
  )
  userEvent.type(screen.getByLabelText('Name'), 't')
  expect(onValueChange).toHaveBeenCalledWith('t')
})
