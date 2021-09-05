import { keyframes, styled } from '../../stitches.config'

const DEFAULT_TAG = 'div'

const BASE_COLOR = '$grey5'
const HIGHLIGHT_COLOR = '$grey7'

export const ripple = keyframes({
  '0%': {
    backgroundPosition: '-1000px 0',
  },
  '100%': {
    backgroundPosition: '1000px 0',
  },
})

export const pulse = keyframes({
  '0%': { opacity: 0 },
  '50%': { opacity: '100%' },
  '100%': { opacity: '100%' },
})

/**
 * StyledSkeleton base component
 */
export const Skeleton = styled(DEFAULT_TAG, {
  backgroundColor: BASE_COLOR,
  position: 'relative',
  overflow: 'hidden',

  '&::after': {
    bottom: 0,
    content: '""',
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
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
        '&::after': {
          animationName: `${ripple}`,
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
        '&::after': {
          animationName: `${pulse}`,
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
        size: '$5',
      },
    },
    {
      variant: 'avatar',
      size: 'large',
      css: {
        size: '$9',
      },
    },
  ],
  defaultVariants: {
    variant: 'text',
    animation: 'ripple',
  },
})
