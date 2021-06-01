import { useHover } from '@committed/hooks'
import type * as Polymorphic from '@radix-ui/react-polymorphic'
import { Range, Root, Thumb, Track } from '@radix-ui/react-slider'
import { useCallbackRef } from '@radix-ui/react-use-callback-ref'
import { useControllableState } from '@radix-ui/react-use-controllable-state'
import React, {
  FC,
  forwardRef,
  ForwardRefExoticComponent,
  useMemo,
  useRef,
} from 'react'
import { CSS, StitchesVariants, styled } from 'stitches.config'
import { Tooltip } from '../Tooltip'

type LabelStyle = 'always' | 'hover' | 'none'
type LabelSide = React.ComponentProps<typeof Tooltip>['side']

const SliderTrack = styled(Track, {
  position: 'relative',
  flexGrow: 1,
  borderRadius: '$default',
  '&[data-orientation="horizontal"]': {
    height: 2,
  },
  '&[data-orientation="vertical"]': {
    width: 2,
    height: 100,
  },
})

const SliderRange = styled(Range, {
  position: 'absolute',
  background: '$primary',
  borderRadius: 'inherit',
  '&[data-orientation="horizontal"]': {
    height: '100%',
  },
  '&[data-orientation="vertical"]': {
    width: '100%',
  },
})

const StyledThumb = styled(Thumb, {
  position: 'relative',
  display: 'block',
  width: 15,
  height: 15,
  outline: 'none',
  boxShadow: '$1',
  borderRadius: '$round',

  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: -2,
    backgroundColor: '$transparency1',
    transform: 'scale(1)',
    borderRadius: '$round',
    transition: 'transform 200ms cubic-bezier(0.22, 1, 0.36, 1)',
  },

  '&:focus': {
    '&::after': {
      transform: 'scale(2)',
    },
  },
})

export const StyledSlider = styled(Root, {
  $$track: '$colors$grey3',
  $$trackHover: '$colors$grey4',
  $$range: '$colors$default',

  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  flexShrink: 0,
  userSelect: 'none',
  touchAction: 'none',
  height: 15,
  flexGrow: 1,

  '&[data-orientation="vertical"]': {
    flexDirection: 'column',
    width: 15,
  },

  [`& ${SliderTrack}`]: {
    backgroundColor: '$$track',
  },

  [`& ${StyledThumb}`]: {
    backgroundColor: '$$range',
  },

  [`& ${SliderRange}`]: {
    backgroundColor: '$$range',
  },

  '@hover': {
    '&:hover': {
      [`& ${SliderTrack}`]: {
        backgroundColor: '$$trackHover',
      },
    },
  },

  variants: {
    variant: {
      primary: {
        $$range: '$colors$brandYellow',
      },
      secondary: {
        $$range: '$colors$default',
      },
    },
  },

  defaultVariants: {
    variant: 'secondary',
  },
})

type SliderThumbProps = Polymorphic.OwnProps<typeof Thumb> & {
  labelStyle: LabelStyle
  value: number | string
  labelSide: LabelSide
  portalled: boolean
}

export const SliderThumb: FC<SliderThumbProps> = ({
  value,
  labelStyle,
  labelSide,
  portalled,
  ...props
}) => {
  const trackRef = useRef<HTMLSpanElement>(null)
  const [isHovered] = useHover(trackRef)

  const isOpen = useMemo(() => {
    if (labelStyle == 'always') {
      return true
    }
    if (labelStyle == 'none') {
      return false
    }
    return isHovered
  }, [isHovered, labelStyle])

  return (
    <Tooltip
      open={isOpen}
      side={labelSide}
      content={value}
      portalled={portalled}
    >
      <StyledThumb {...props} ref={trackRef} />
    </Tooltip>
  )
}

type SliderCSSProp = { css?: CSS }
type SliderVariants = StitchesVariants<typeof StyledSlider>
type SliderOwnProps = Polymorphic.OwnProps<typeof Root> &
  SliderVariants &
  SliderCSSProp & {
    /** Add labels to the markers, permanently, on hover or none */
    labelStyle?: LabelStyle
    /** Move the label location */
    labelSide?: LabelSide
    /** Label function, to configure the displayed value */
    labelFunction?: (value: number) => string | number
    /** Set `false` to turn off the use of portals for labels */
    portalled?: boolean
  }

/**
 * Sliders can be used for selection from a (numeric) range of values.
 *
 * Based on [Radix Slider](https://radix-ui.com/primitives/docs/components/slider).
 */
export const Slider: ForwardRefExoticComponent<SliderOwnProps> = forwardRef<
  HTMLSpanElement,
  SliderOwnProps
>(
  (
    {
      min = 0,
      value,
      defaultValue = [min],
      onValueChange,
      labelStyle = 'hover',
      labelSide = 'top',
      labelFunction = (val) => val,
      portalled = true,
      ...props
    },
    forwardedRef
  ) => {
    if (process.env.NODE_ENV !== 'production') {
      const hasRange = Array.isArray(defaultValue || value)
      if (!hasRange) {
        console.warn(
          '[Slider] The provided value, or defaultValue must be an array of numbers.'
        )
      }
    }
    const [values = [], setValues] = useControllableState({
      prop: value,
      defaultProp: defaultValue,
      onChange: onValueChange,
    })
    const handleLabelFunction = useCallbackRef((val: number) =>
      labelFunction(val)
    )

    return (
      <StyledSlider
        {...props}
        min={min}
        value={values}
        onValueChange={setValues}
        ref={forwardedRef}
      >
        <SliderTrack>
          <SliderRange />
        </SliderTrack>
        {values.map((val: number, i: number) => (
          <SliderThumb
            key={i}
            value={handleLabelFunction(val)}
            labelStyle={labelStyle}
            labelSide={labelSide}
            portalled={portalled}
          />
        ))}
      </StyledSlider>
    )
  }
)
