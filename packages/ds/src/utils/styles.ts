import { RecipeVariantProps, cva } from '@committed/ss/css'

/* spacing variants for use in layout components */
export const spacing = cva({
  variants: {
    spacing: {
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
        gap: {
          base: '$2',
          md: '$3',
          lg: '$6',
        },
      },
    },
  },
  defaultVariants: {
    spacing: 'default',
  },
})
export type SpacingVariants = RecipeVariantProps<typeof spacing>

export const box = cva({
  base: {
    boxSizing: 'border-box',
  },
  variants: {
    variant: {
      grow: {
        flex: 1,
      },
      high: {
        height: '100%',
      },
      wide: {
        width: '100%',
      },
      max: {
        height: '100%',
        width: '100%',
      },
      fullscreen: {
        width: '100%',
        height: '100vh',
      },
    },
  },
})
export type BoxVariants = RecipeVariantProps<typeof box>
