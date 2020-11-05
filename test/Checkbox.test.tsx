import React from 'react'
import { render } from './test-utils'
import { Checkbox, colors } from '../src'
import { Icons } from '../stories/util/Icons'

describe('Checkbox', () => {
  it('renders without crashing', () => {
    const { asFragment } = render(
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
})
