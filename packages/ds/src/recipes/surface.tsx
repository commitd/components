import { RecipeVariantProps, cva } from '@committed/ss/css'

export const surfaceRecipe = cva({
  variants: {
    // surface: {
    //   neutral: {
    //     surface: 'neutral',
    //   },
    //   solid: {
    //     surface: 'solid',
    //   },
    //   glass: {
    //     surface: 'glass',
    //   },
    //   transparent: {
    //     surface: 'transparent',
    //   },
    // },
  },
})

export type SurfaceVariants = RecipeVariantProps<typeof surfaceRecipe>
