import { createCss } from '@stitches/react'

export const {
  styled,
  css,
  global: globalCss,
  keyframes,
  getCssString,
  theme,
} = createCss({
  theme: {
    colors: {
      background: 'white',
      text: 'black',
    },
  },
})

export const lightTheme = theme('light-theme', {})

export const darkTheme = theme('dark-theme', {
  colors: {
    background: 'black',
    text: 'white',
  },
})

export const globalStyles = globalCss({
  '@global': {
    textSizeAdjust: '100%',
    textRendering: 'optimizeLegibility',
  },
  html: {
    overflowX: 'hidden',
  },
  body: {
    margin: 0,
  },
  '*': { margin: 0, padding: 0 },
  svg: { display: 'block' },
})
// TODO:
//   {
//   '@global': {
//     'button, input, optgroup, select, textarea': {
//       fontFamily: 'inherit',
//       fontSize: 'inherit',
//     },
//   },

//   //'body, button': {
//   // fontFamily: '$untitled',
//   //},

//   // 'pre, code': { margin: 0, fontFamily: '$mono' },

//   // '::selection': {
//   //   backgroundColor: '$violet300',
//   // },
// })
