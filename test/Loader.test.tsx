import React from 'react'
import { renderLight, renderDark } from './setupTests'
import { Loader } from '../src'
import { Cartesian } from '../stories/util/Cartesian'

it('renders light without crashing', () => {
  const { asFragment } = renderLight(<Loader />)
  expect(asFragment()).toMatchSnapshot()
})

it('renders dark without crashing', () => {
  const { asFragment } = renderDark(<Loader />)
  expect(asFragment()).toMatchSnapshot()
})

it('renders variants without crashing', () => {
  const { asFragment } = renderLight(
    <Cartesian
      component={Loader}
      variant={['draw', 'spin', 'flip', 'scale']}
      loading={[true, false]}
    />
  )
  expect(asFragment()).toMatchSnapshot()
})
