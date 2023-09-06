import {
  States,
  Default as Switch,
} from '../../../../../apps/storybook/stories/Switch.stories'
import { renderDark, renderLight, screen, userEvent } from '../../test'

it('renders light without error', () => {
  const onClickSpy = jest.fn()
  renderLight(<Switch onClick={onClickSpy} />)
  const buttonElement = screen.getByRole('switch')
  buttonElement.click()
  expect(onClickSpy).toHaveBeenCalled()
})

it('renders and can be accessed with keyboard', () => {
  const onClickSpy = jest.fn()
  renderLight(<Switch onClick={onClickSpy} />)
  userEvent.tab()
  userEvent.keyboard('{enter}')
  expect(onClickSpy).toHaveBeenCalled()
})

it('renders disabled without role', async () => {
  renderDark(<Switch disabled />)
  const buttons = await screen.findAllByRole('switch')
  buttons.forEach((b) => expect(b).toHaveAttribute('disabled'))
})

it('renders all variants without error', () => {
  const { asFragment } = renderDark(<States />)
  expect(asFragment()).toBeDefined()
})
