import { CSS } from '../../'

const keys = ['primary', 'info', 'success', 'error', 'warning']

export const randomColor = (): CSS['backgroundColor'] => {
  const color = keys[Math.floor(Math.random() * keys.length)]
  return `$${color}6`
}
