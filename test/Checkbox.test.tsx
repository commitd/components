import React from 'react'
import { renderLight, renderDark, userEvent } from './setupTests'
import { Checkbox, colors, FormControlLabel } from '../src'
import { Icons } from '../stories/util/Icons'

it('renders light without crashing', () => {
  const { asFragment } = renderLight(<Checkbox />)
  expect(asFragment()).toMatchSnapshot()
})

it('renders dark without crashing', () => {
  const { asFragment } = renderDark(<Checkbox />)
  expect(asFragment()).toMatchSnapshot()
})

it('expect click to call handler', () => {
  const onClick = jest.fn()
  const { getByRole } = renderLight(<Checkbox onChange={onClick} />)
  userEvent.click(getByRole('checkbox'))
  expect(onClick).toHaveBeenCalled()
})

it('expect click to call handler from click on label', () => {
  const text = 'Test'
  const onClick = jest.fn()
  const { getByText } = renderLight(
    <FormControlLabel
      value="top"
      control={<Checkbox color="primary" />}
      label={text}
      onChange={onClick}
    />
  )
  userEvent.click(getByText(text))
  expect(onClick).toHaveBeenCalled()
})

it('renders variants without crashing', () => {
  const { asFragment } = renderLight(
    <>
      <Checkbox color="default" />
      <Checkbox
        checked={true}
        color="default"
        value="checkedA"
        inputProps={{
          'aria-label': 'checkbox',
        }}
      />
      <Checkbox
        checked={false}
        color="primary"
        inputProps={{
          'aria-label': 'primary checkbox',
        }}
      />
      <Checkbox
        inputProps={{
          'aria-label': 'uncontrolled-checkbox',
        }}
      />
      <Checkbox
        disabled={true}
        inputProps={{
          'aria-label': 'disabled checkbox',
        }}
      />
      <Checkbox
        disabled={true}
        checked={true}
        inputProps={{
          'aria-label': 'disabled checked checkbox',
        }}
      />
      <Checkbox
        indeterminate={true}
        inputProps={{
          'aria-label': 'indeterminate checkbox',
        }}
      />
      <Checkbox
        defaultChecked={true}
        color="default"
        inputProps={{
          'aria-label': 'checkbox with default color',
        }}
      />
      <Checkbox
        style={{ color: 'red' }}
        icon={<Icons.FavoriteBorder />}
        checkedIcon={<Icons.Favorite />}
      />
      <Checkbox
        icon={<Icons.BookmarkBorder style={{ color: colors.grey[600] }} />}
        checkedIcon={
          <Icons.Bookmark style={{ color: colors.lightBlue[400] }} />
        }
      />
    </>
  )
  expect(asFragment()).toMatchSnapshot()
})
