import { token, Token } from '@committed/ds-ss'

const keys = ['primary', 'secondary', 'info', 'success', 'error', 'warning']
type Depth = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

export const randomColor = (depth: Depth = 5) => {
  const color = keys[Math.floor(Math.random() * keys.length)]
  return token(`colors.$${color}.${depth}` as Token)
}
