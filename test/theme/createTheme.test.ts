import { mergeOptions } from '../../src/theme/createTheme'
import {
  createCommittedThemes,
  createMaterialThemes,
  mergeArrayOptions,
} from '../../src/theme/createTheme'

interface TestOptions {
  test?: string
  testing?: number
  object?: {
    test: string
  }
}
const defaultOptions: TestOptions = {
  test: 'default',
  testing: 1,
  object: {
    test: 'deep',
  },
}

test('mergeOptions should return defaults if options spec is undefined', function () {
  expect(mergeOptions<TestOptions>(defaultOptions, undefined)).toEqual(
    defaultOptions
  )
})

test('mergeOptions should return deep merge if options spec is object', function () {
  expect(
    mergeOptions<TestOptions>(defaultOptions, { test: 'merge' })
  ).toEqual({
    test: 'merge',
    testing: 1,
    object: {
      test: 'deep',
    },
  })
})

test('mergeOptions should return function call if options spec is function', function () {
  expect(
    mergeOptions<TestOptions>(defaultOptions, (_defaults) => ({
      test: 'winner',
    }))
  ).toEqual({
    test: 'winner',
  })
})

test('mergeArrayOptions should return merged object', function () {
  expect(
    mergeArrayOptions<TestOptions>([
      defaultOptions,
      { test: 'merge' },
      {
        object: {
          test: 'deepest',
        },
      },
    ])
  ).toEqual({
    test: 'merge',
    testing: 1,
    object: {
      test: 'deepest',
    },
  })
})

test('mergeArrayOptions should return cope with undefined', function () {
  expect(
    mergeArrayOptions<TestOptions>([
      defaultOptions,
      { test: 'merge' },
      undefined,
      {
        object: {
          test: 'deepest',
        },
      },
      undefined,
    ])
  ).toEqual({
    test: 'merge',
    testing: 1,
    object: {
      test: 'deepest',
    },
  })
})

test('createMaterialTheme with no options gives default material theme', function () {
  const themes = createMaterialThemes()
  expect(themes.light).toMatchSnapshot()
  expect(themes.dark).toMatchSnapshot()
})

test('createCommittedTheme with no options give existing defaults', function () {
  const themes = createCommittedThemes()
  expect(themes.light).toMatchSnapshot()
  expect(themes.dark).toMatchSnapshot()
})
