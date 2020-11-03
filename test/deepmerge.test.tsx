import { deepmerge } from '@material-ui/utils'

const x = {
  foo: { bar: 3 },
  array: [
    {
      does: 'work',
      too: [1, 2, 3],
    },
  ],
}

const y = {
  foo: { baz: 4 },
  quux: 5,
  array: [
    {
      does: 'this array wins',
      too: [4, 5, 6],
    },
    {
      really: 'yes',
    },
  ],
}

const output = {
  foo: {
    bar: 3,
    baz: 4,
  },
  array: [
    {
      does: 'this array wins',
      too: [4, 5, 6],
    },
    {
      really: 'yes',
    },
  ],
  quux: 5,
}

// Checking functionality of materials own deepmerge

test('Should deepmerge, for arrays last array wins', function () {
  expect(deepmerge(x, y)).toEqual(output)
})
