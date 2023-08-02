import { cva, RecipeVariantProps } from '@committed/ss/css'
import { styled } from '@committed/ss/jsx'
import { CComponent, component } from '../../utils'

const DEFAULT_TAG = 'div'

const container = cva({
  base: {
    boxSizing: 'border-box',
    flexShrink: 0,

    // Custom
    ml: 'auto',
    mr: 'auto',
    px: '$5',
  },
  variants: {
    maxWidth: {
      sm: {
        maxWidth: 'calc(token(sizes.$sm) - token(sizes.$8))',
      },
      md: {
        maxWidth: 'calc(token(sizes.$md) - token(sizes.$9))',
      },
      lg: {
        maxWidth: 'calc(token(sizes.$lg) - token(sizes.$10))',
      },
      xl: {
        maxWidth: 'calc(token(sizes.$xl) - token(sizes.$11))',
      },
      responsive: {
        maxWidth: {
          sm: 'calc(token(sizes.$sm) - token(sizes.$8))',
          md: 'calc(token(sizes.$md) - token(sizes.$9))',
          lg: 'calc(token(sizes.$lg) - token(sizes.$10))',
          xl: 'calc(token(sizes.$xl) - token(sizes.$11))',
        },
      },
    },
  },
  defaultVariants: {
    maxWidth: 'lg',
  },
})

type ContainerVariants = RecipeVariantProps<typeof container>

/**
 * Container component
 *
 * Use a container to keep the content within the maxWidth set by a breakpoint.
 */
export const Container: CComponent<typeof DEFAULT_TAG, ContainerVariants> =
  styled(component(DEFAULT_TAG, 'c-container'), container)
Container.displayName = 'Container'
