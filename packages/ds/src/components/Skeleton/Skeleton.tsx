import { RecipeVariantProps, cva, styled } from '@committed/ss'
import { CComponent, component } from '../../utils'

const DEFAULT_TAG = 'div'

/**
 * StyledSkeleton base component
 */
const skeleton = cva({
  base: {
    backgroundColor: '$neutral.5',
    position: 'relative',
    overflow: 'hidden',

    _after: {
      bottom: 0,
      content: "''",
      left: 0,
      position: 'absolute',
      right: 0,
      top: 0,
    },
  },
  variants: {
    variant: {
      avatar: {
        borderRadius: '$round',
        size: '$7',
      },
      text: {
        height: '$4',
        width: '100%',
      },
      title: {
        height: '$5',
        width: '100%',
      },
      heading: {
        height: '$7',
        width: '100%',
      },
      button: {
        borderRadius: '$default',
        height: '$6',
        width: '$8',
      },
    },
    size: {
      small: {},
      default: {},
      large: {},
    },
    animation: {
      ripple: {
        _after: {
          animation: `ripple 3s ease-in-out infinite`,
          backgroundImage: `linear-gradient(
            to right,
            token(colors.$neutral.4) 4%,
            token(colors.$neutral.7) 25%,
            token(colors.$neutral.4) 35%
          )`,
          backgroundSize: '1000px 100%',
          backgroundRepeat: 'no-repeat',
          borderRadius: 'inherit',
          lineHeight: '$default',
          width: '100%',
        },
      },
      pulse: {
        _after: {
          animation: `pulse 1s alternate ease-in-out infinite`,
          backgroundColor: '$neutral.7',
        },
      },
    },
  },
  compoundVariants: [
    {
      variant: 'button',
      size: 'small',
      css: {
        height: '$5',
        width: '$7',
      },
    },
    {
      variant: 'button',
      size: 'large',
      css: {
        height: '$7',
        width: '$9',
      },
    },
    {
      variant: 'avatar',
      size: 'small',
      css: {
        height: '$5',
        width: '$5',
      },
    },
    {
      variant: 'avatar',
      size: 'large',
      css: {
        height: '$9',
        width: '$9',
      },
    },
  ],
  defaultVariants: {
    variant: 'text',
    animation: 'ripple',
  },
})

type SkeletonVariants = RecipeVariantProps<typeof skeleton>

export const Skeleton: CComponent<'div', SkeletonVariants> = styled(
  component(DEFAULT_TAG, 'c-skeleton'),
  skeleton,
)
