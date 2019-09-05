import React from 'react'
import { shallow } from 'enzyme'
import Typography from './Typography'

test('Renders Typography', () => {
  const text = 'Testing 123'
  const typography = shallow(<Typography>{text}</Typography>)

  expect(typography.render()).toBeTruthy()
})
