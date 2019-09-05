import React from 'react'
import { shallow } from 'enzyme'
import { CardHeader } from './Card'

test('Renders card header child', () => {
  const titleString = 'Hello'
  const card = shallow(<CardHeader>{titleString}</CardHeader>)

  expect(card.findWhere(e => e.render().val() === titleString)).toBeTruthy()
})
