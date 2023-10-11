'use client'
import { useHover, useMergedRefs } from '@committed/hooks'
import {
  RecipeVariantProps,
  SystemStyleObject,
  css,
  cva,
  cx,
  styled,
} from '@committed/ss'
import { SurfaceVariants } from '@committed/utilities'
import { Arrow, Content, Portal } from '@radix-ui/react-popover'
import { Range, Root, Thumb, Track } from '@radix-ui/react-slider'
import { useCallbackRef } from '@radix-ui/react-use-callback-ref'
import { useControllableState } from '@radix-ui/react-use-controllable-state'
import React, {
  ComponentProps,
  ElementRef,
  ReactNode,
  useCallback,
  useMemo,
  useRef,
} from 'react'
import {
  CComponent,
  ColorPaletteProps,
  ConditionalWrapper,
  component,
  forwardRefExtend,
} from '../../utils'
import { UseFormControlProps, useFormControl } from '../FormControl'
import { Label } from '../Label'
import { Popover, PopoverAnchor } from '../Popover'
import { Tooltip } from '../Tooltip'
import { tooltipArrowStyles, tooltipContentCva } from '../Tooltip/Tooltip'

type LabelStyle = 'always' | 'hover' | 'none'
type LabelSide = React.ComponentProps<typeof Tooltip>['side']

const SLIDER_CLASS = 'c-slider'
const SLIDER_TRACK_CLASS = 'c-slider-track'
const SLIDER_RANGE_CLASS = 'c-slider-range'
const SLIDER_THUMB_CLASS = 'c-slider-thumb'

const SliderTrack = component(
  Track,
  SLIDER_TRACK_CLASS,
  css({
    position: 'relative',
    flexGrow: 1,
    borderRadius: '$default',
    backgroundColor: '$neutral.4',
    _horizontal: {
      height: '$1',
    },
    _vertical: {
      width: '$1',
      height: '100px', //??? test,
    },
    _groupHover: {
      backgroundColor: '$neutral.5',
    },
  }),
)
SliderTrack.displayName = 'SliderTrack'

const SliderRange = component(
  Range,
  SLIDER_RANGE_CLASS,
  css({
    position: 'absolute',
    background: 'var(--range-default)',
    borderRadius: 'inherit',
    _horizontal: {
      height: '100%',
    },
    _vertical: {
      width: '100%',
    },
    _groupHover: {
      backgroundColor: 'var(--range-hover)',
    },
  }),
)
SliderRange.displayName = 'SliderRange'

const StyledThumb = styled(
  component(
    Thumb,
    SLIDER_THUMB_CLASS,
    css({
      position: 'relative',
      display: 'block',
      size: '$4',
      outline: 'none',
      boxShadow: '$1',
      borderRadius: '$round',
      _after: {
        content: '""',
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: -2,
        backgroundColor: 'var(--thumb-background)',
        transform: 'scale(1)',
        borderRadius: '$round',
        _motionReduce: { transition: 'none' },
        _motionSafe: {
          transition: 'transform 200ms cubic-bezier(0.22, 1, 0.36, 1)',
        },
      },

      _focus: {
        _after: {
          transform: 'scale(2)',
        },
      },

      _disabled: {
        backgroundColor: '$neutral.5',
      },
    }),
  ),
)
StyledThumb.displayName = 'Thumb'

const slider = cva({
  base: {
    '--range-default': 'token(colors.colorPalette.9)',
    '--range-hover': 'token(colors.colorPalette.10)',
    '--thumb-background': 'token(colors.colorPalette.3.a)',

    colorPalette: '$neutral',

    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    flexShrink: 0,
    userSelect: 'none',
    touchAction: 'none',
    height: '15px',
    flexGrow: 1,

    _vertical: {
      flexDirection: 'column',
      width: '15px',
    },
  },
})

export const StyledSlider = styled(Root, slider)

type SliderThumbProps = {
  showLabel?: boolean
  value: number | string
  labelSide: LabelSide
  portalled: boolean
} & SurfaceVariants

const StyledPopoverContent = styled(Content, tooltipContentCva)
const StyledPopoverArrow = component(Arrow, tooltipArrowStyles)

type ThumbPopoverContentProps = {
  /** By default, portals your content parts into the body, set false to add at dom location. */
  portalled?: boolean
  /** Specify a container element to portal the content into. */
  container?: ComponentProps<typeof Portal>['container']
}

const ThumbPopoverContent = forwardRefExtend<
  typeof StyledPopoverContent,
  ThumbPopoverContentProps
>(({ portalled = true, container, children, ...props }, forwardedRef) => {
  const wrapper = useCallback(
    (child: ReactNode) => <Portal container={container}>{child}</Portal>,
    [container],
  )
  return (
    <ConditionalWrapper condition={portalled} wrapper={wrapper}>
      <StyledPopoverContent {...props} ref={forwardedRef}>
        <StyledPopoverArrow offset={-1} />
        {children}
      </StyledPopoverContent>
    </ConditionalWrapper>
  )
})
ThumbPopoverContent.displayName = 'ThumbPopoverContent'

export const SliderThumb: CComponent<typeof Thumb, SliderThumbProps> = ({
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
SliderThumb.displayName = 'SliderThumb'

type SliderVariants = RecipeVariantProps<typeof slider>
type SliderProps = ColorPaletteProps &
  SliderVariants &
  SurfaceVariants &
  UseFormControlProps & {
    /** Add a label to the Slider */
    label?: string
    /** Add labels to the markers, permanently, on hover or none */
    labelStyle?: LabelStyle
    /** Move the label location */
    labelSide?: LabelSide
    /** Label function, to configure the displayed value */
    labelFunction?: (value: number) => string | number
    /** Set `false` to turn off the use of portals for labels */
    portalled?: boolean
    /** additional css styles */
    css?: SystemStyleObject
  }
type SliderRef = ElementRef<typeof Root>

/**
 * Sliders can be used for selection from a (numeric) range of values.
 *
 * Based on [Radix Slider](https://radix-ui.com/primitives/docs/components/slider).
 */
export const Slider = forwardRefExtend<typeof Root, SliderProps>(
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
      surface = 'solid',
      css,
      label,
      className,
      ...props
    },
    forwardedRef,
  ) => {
    if (process.env.NODE_ENV !== 'production') {
      const hasRange = Array.isArray(defaultValue || value)
      if (!hasRange) {
        console.warn(
          '[Slider] The provided value, or defaultValue must be an array of numbers.',
        )
      }
    }
    const [id, { disabled }, remainingProps] = useFormControl(props)

    const [values = [], setValues] = useControllableState({
      prop: value,
      defaultProp: defaultValue,
      onChange: onValueChange,
    })
    const handleLabelFunction = useCallbackRef((val: number) =>
      labelFunction(val),
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

    const withLabel = useCallback(
      (children: ReactNode) => (
        <Label id={`label-${id}`} variant="wrapping">
          {label}
          {children}
        </Label>
      ),
      [label, id],
    )

    return (
      <ConditionalWrapper condition={label} wrapper={withLabel}>
        <StyledSlider
          {...remainingProps}
          id={id}
          css={css}
          disabled={disabled}
          min={min}
          value={values}
          onValueChange={setValues}
          className={cx(SLIDER_CLASS, 'group', className)}
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
              surface={surface}
              labelSide={labelSide}
              portalled={portalled}
            />
          ))}
        </StyledSlider>
      </ConditionalWrapper>
    )
  },
)
Slider.displayName = 'Slider'
