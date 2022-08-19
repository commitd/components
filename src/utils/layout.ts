/* spacing variants for use in layout components */
export const spacing = {
  small: {
    gap: '$2',
  },
  default: {
    gap: '$3',
  },
  large: {
    gap: '$6',
  },
  responsive: {
    gap: '$2',
    '@md': {
      gap: '$3',
    },
    '@lg': {
      gap: '$6',
    },
  },
}
