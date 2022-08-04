import { useHover, useMergedRefs } from '@committed/hooks'
import { Arrow, Content, Portal } from '@radix-ui/react-popover'
import { Range, Root, Thumb, Track } from '@radix-ui/react-slider'
import { useCallbackRef } from '@radix-ui/react-use-callback-ref'
import { useControllableState } from '@radix-ui/react-use-controllable-state'
import React, {
  ComponentProps,
  ElementRef,
  FC,
  forwardRef,
  useMemo,
  useRef,
} from 'react'
import type { CSSProps, VariantProps } from '../../stitches.config'
import { styled } from '../../stitches.config'
import { ConditionalWrapper } from '../../utils'
import { Popover, PopoverAnchor } from '../Popover'
import { Tooltip, tooltipArrowStyles, tooltipContentStyles } from '../Tooltip'

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
    '@motion': {
      transition: 'transform 200ms cubic-bezier(0.22, 1, 0.36, 1)',
    },
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

type SliderThumbProps = ComponentProps<typeof Thumb> & {
  showLabel?: boolean
  value: number | string
  labelSide: LabelSide
  portalled: boolean
}

const StyledPopoverContent = styled(Content, tooltipContentStyles)
const StyledPopoverArrow = styled(Arrow, tooltipArrowStyles)

type ThumbPopoverContentProps = ComponentProps<typeof Content> & {
  /** By default, portals your content parts into the body, set false to add at dom location. */
  portalled?: boolean
  /** Specify a container element to portal the content into. */
  container?: ComponentProps<typeof Portal>['container']
}

const ThumbPopoverContent = forwardRef<
  ElementRef<typeof StyledPopoverContent>,
  ThumbPopoverContentProps
>(({ portalled = true, container, children, ...props }, forwardedRef) => (
  <ConditionalWrapper
    condition={portalled}
    wrapper={(child) => <Portal container={container}>{child}</Portal>}
  >
    <StyledPopoverContent {...props} ref={forwardedRef}>
      <StyledPopoverArrow offset={-1} />
      {children}
    </StyledPopoverContent>
  </ConditionalWrapper>
))
ThumbPopoverContent.toString = () => `.${StyledPopoverContent.className}`

export const SliderThumb: FC<SliderThumbProps> = ({
  value,
  showLabel,
  labelSide,
  portalled = true,
  ...props
}) => {
  return (
    <Popover open={showLabel}>
      <PopoverAnchor>
        <StyledThumb {...props} />
      </PopoverAnchor>
      <ThumbPopoverContent side={labelSide} portalled={portalled}>
        {value}
      </ThumbPopoverContent>
    </Popover>
  )
}

type SliderVariants = VariantProps<typeof StyledSlider>
type SliderProps = ComponentProps<typeof Root> &
  SliderVariants &
  CSSProps & {
    /** Add labels to the markers, permanently, on hover or none */
    labelStyle?: LabelStyle
    /** Move the label location */
    labelSide?: LabelSide
    /** Label function, to configure the displayed value */
    labelFunction?: (value: number) => string | number
    /** Set `false` to turn off the use of portals for labels */
    portalled?: boolean
  }
type SliderRef = ElementRef<typeof StyledSlider>

/**
 * Sliders can be used for selection from a (numeric) range of values.
 *
 * Based on [Radix Slider](https://radix-ui.com/primitives/docs/components/slider).
 */
export const Slider = forwardRef<SliderRef, SliderProps>(
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

    const internalRef = useRef<SliderRef>(null)
    const [isHovered] = useHover(internalRef)
    const mergedRef = useMergedRefs<SliderRef>(internalRef, forwardedRef)

    const showLabels = useMemo(() => {
      if (labelStyle == 'always') {
        return true
      }
      if (labelStyle == 'none') {
        return false
      }
      return isHovered //hover.reduce((acc, cur) => acc || cur, false)
    }, [isHovered, labelStyle])

    return (
      <StyledSlider
        {...props}
        min={min}
        value={values}
        onValueChange={setValues}
        ref={mergedRef}
      >
        <SliderTrack>
          <SliderRange />
        </SliderTrack>
        {values.map((val: number, i: number) => (
          <SliderThumb
            key={i}
            value={handleLabelFunction(val)}
            showLabel={showLabels}
            labelSide={labelSide}
            portalled={portalled}
          />
        ))}
      </StyledSlider>
    )
  }
)
Slider.toString = () => `.${StyledSlider.className}`
