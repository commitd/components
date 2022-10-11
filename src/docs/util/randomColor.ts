import { CSS } from '../../'

const keys = ['brandYellow', 'brandGrey', 'info', 'success', 'error', 'warning']
type Depth = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
export const randomColor = (depth: Depth = 5): CSS['color'] => {
  const color = keys[Math.floor(Math.random() * keys.length)]
  return `$${color}${depth}`
}
