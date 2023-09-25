import { RecipeVariantProps, cva } from '@committed/ss/css'
import { styled } from '@committed/ss/jsx'
import { CComponent } from '../../utils'
import { Logo } from '../Logo'

const spinner = cva({
  base: {
    transformOrigin: 'center center',
    color: { base: '$neutral.6', _dark: '$neutral.2' },
    _motionReduce: {
      animation: `pulse 2s ease infinite`,
    },
  },
  variants: {
    variant: {
      draw: {},
      spin: {},
      scale: {},
      pulse: {},
    },
    active: {
      false: {},
      true: {},
    },
  },

  compoundVariants: [
    {
      active: true,
      variant: 'draw',
      css: {
        stroke: 'currentColor',
        _motionSafe: {
          animation: `stroke 3s cubic-bezier(.24,0,.37,1) alternate infinite, fill 3s cubic-bezier(1, 0, .5, 0) alternate infinite`,
        },
        _motionReduce: {
          animation: `pulse 2s ease infinite`,
        },
      },
    },
    {
      active: true,
      variant: 'spin',
      css: {
        _motionSafe: {
          animation: `spin 1.5s ease infinite`,
        },
        _motionReduce: {
          animation: `pulse 2s ease infinite`,
        },
      },
    },
    {
      active: true,
      variant: 'scale',
      css: {
        _motionSafe: {
          animation: `scale 1.5s cubic-bezier(0.190, 1.000, 0.220, 1.000) infinite alternate both;`,
        },
        _motionReduce: {
          animation: `pulse 2s ease infinite`,
        },
      },
    },
    {
      active: true,
      variant: 'pulse',
      css: {
        animation: `pulse 2s ease infinite`,
      },
    },
  ],
  defaultVariants: {
    variant: 'draw',
    active: true,
  },
})

type SpinnerVariants = RecipeVariantProps<typeof spinner>

export const Spinner = styled(Logo, spinner) as CComponent<
  typeof Logo,
  SpinnerVariants
>
Spinner.displayName = 'Spinner'
