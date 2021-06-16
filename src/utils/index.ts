export * from './ConditionalWrapper'

import type { CSS } from 'stitches.config'

const keys = ['yellow', 'grey', 'blue', 'green', 'red', 'orange']
type Depth =
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
export const randomColor = (depth: Depth = '500'): CSS['color'] => {
  const color = keys[Math.floor(Math.random() * keys.length)]
  return `$${color}${depth}`
}
