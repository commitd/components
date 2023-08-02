import { cva } from '@committed/ss/css'
import { styled } from '@committed/ss/jsx'

const DEFAULT_TAG = 'div'

const BASE_COLOR = '$grey5'
const HIGHLIGHT_COLOR = '$grey7'

/**
 * StyledSkeleton base component
 */
const skeleton = cva({
  base: {
    backgroundColor: BASE_COLOR,
    position: 'relative',
    overflow: 'hidden',

    _after: {
      bottom: 0,
      content: '""',
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
      },
      title: {
        height: '$5',
      },
      heading: {
        height: '$7',
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
          animationName: `$ripple`,
          animationDuration: '2s',
          animationDirection: 'normal',
          animationIterationCount: 'infinite',
          animationTimingFunction: 'ease-in-out',
          backgroundImage: `linear-gradient(
            to right,
            ${BASE_COLOR} 4%,
            ${HIGHLIGHT_COLOR} 25%,
            ${BASE_COLOR} 35%
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
          animationName: `$pulse`,
          animationDuration: '1s',
          animationDirection: 'alternate',
          animationIterationCount: 'infinite',
          animationTimingFunction: 'ease-in-out',
          backgroundColor: HIGHLIGHT_COLOR,
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

export const Skeleton = styled(DEFAULT_TAG, skeleton)
