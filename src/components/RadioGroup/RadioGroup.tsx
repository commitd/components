import { Indicator, Item, Root } from '@radix-ui/react-radio-group'
import React, {
  ComponentProps,
  forwardRef,
  ForwardRefExoticComponent,
} from 'react'
import { styled } from 'stitches.config'
import { Check } from '../Icons'
import { Label } from '../Label'
import { ConditionalWrapper } from '../../utils'

const StyledRadio = styled('div', {
  // Reset
  alignItems: 'center',
  appearance: 'none',
  boxSizing: 'border-box',
  display: 'inline-flex',
  justifyContent: 'center',
  lineHeight: '$none',
  margin: '0',
  outline: 'none',
  padding: '0',
  textDecoration: 'none',
  userSelect: 'none',
  flexShrink: 0,
  verticalAlign: 'middle',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },

  overflow: 'hidden',
  borderRadius: '$round',
  width: '28px',
  height: '28px',
  fontSize: '$0',
  cursor: 'pointer',
  backgroundColor: 'transparent',

  '& + *': { marginLeft: '$2' },

  transition: 'background 0.5s',
  backgroundPosition: 'center',
  border: 'solid 2px',

  '&:active': {
    backgroundSize: '100%',
    transition: 'background 0s',
  },

  '&:disabled': {
    pointerEvents: 'none',
  },
})

const StyledItem = styled(Item, {
  $$main: '$colors$primary',
  $$mainHover: '$colors$primaryHighlight',
  $$contrast: '$colors$primaryContrast',
  $$active: '$colors$defaultActive',
  $$default: '$colors$default',
  $$defaultHover: '$colors$defaultHighlight',
  $$lowlight: '$colors$defaultLowlight',

  // Reset
  alignItems: 'center',
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  display: 'inline-flex',
  justifyContent: 'center',
  lineHeight: '$none',
  margin: '0',
  outline: 'none',
  padding: '0',
  textDecoration: 'none',
  userSelect: 'none',
  flexShrink: 0,
  verticalAlign: 'middle',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },

  color: '$text',
  fontSize: '$0',
  cursor: 'pointer',
  backgroundColor: 'transparent',

  '&:hover': {
    [`& ${StyledRadio}`]: {
      background:
        '$$hover radial-gradient(circle, transparent 1%, $$hover 1%) center/15000%',
    },
  },

  '&:active': {
    [`& ${StyledRadio}`]: {
      backgroundColor: '$$active',
      backgroundSize: '100%',
      transition: 'background 0s',
    },
  },

  '&:disabled': {
    $$main: '$$lowlight',
    $$default: '$$lowlight',
    pointerEvents: 'none',
  },

  [`&[data-state=unchecked]:focus  > ${StyledRadio}`]: {
    backgroundColor: '$$defaultHover',
  },
  [`&[data-state=checked]:focus  > ${StyledRadio}`]: {
    backgroundColor: '$$defaultHover',
    color: '$$default',
  },

  variants: {
    variant: {
      primary: {
        $$active: '$colors$primaryActive',
        $$lowlight: '$colors$primaryLowlight',
        $$hover: '$$defaultHover',
        [`& > ${StyledRadio}`]: {
          color: '$$contrast',
          borderColor: '$$main',
        },
        [`&[data-state=checked] > ${StyledRadio}`]: {
          backgroundColor: '$$main',
        },
      },
      secondary: {
        $$hover: '$$defaultHover',
        [`& > ${StyledRadio}`]: {
          color: '$$default',
          borderColor: '$$default',
        },
      },
    },
    destructive: {
      true: {
        $$main: '$colors$error',
        $$mainHover: '$colors$errorHighlight',
        $$contrast: '$colors$errorContrast',
        $$active: '$colors$errorActive',
        $$default: '$colors$error',
        $$defaultHover: '$colors$errorBackground',
        $$lowlight: '$colors$errorLowlight',
      },
    },
  },

  defaultVariants: {
    variant: 'secondary',
  },
})

const StyledIndicator = styled(Indicator, {
  alignItems: 'center',
  display: 'flex',
  height: '24px',
  justifyContent: 'center',
  width: '24px',
})

type RadioProps = ComponentProps<typeof StyledItem> & {
  /** Add a label */
  label?: string
}

export const Radio: ForwardRefExoticComponent<RadioProps> = forwardRef<
  HTMLButtonElement,
  RadioProps
>(({ children, label, ...props }, forwardedRef) => {
  return (
    <ConditionalWrapper
      condition={label}
      wrapper={(children) => (
        <Label variant="wrapping">
          {children}
          {label}
        </Label>
      )}
    >
      <StyledItem {...props} ref={forwardedRef}>
        <StyledRadio>
          <StyledIndicator>
            <Check />
          </StyledIndicator>
        </StyledRadio>
        {children}
      </StyledItem>
    </ConditionalWrapper>
  )
}) as ForwardRefExoticComponent<RadioProps>
Radio.displayName = 'Radio'

// This should be all that is required but until next release of Radio group we add a fix to map the event to the value below
const TempRadioGroup: React.FC<ComponentProps<typeof Root>> = styled(Root, {
  display: 'flex',
  '&[data-orientation=vertical]': {
    flexDirection: 'column',
    alignItems: 'flex-start',
    '& > *': { marginTop: '$3' },
    ':first-child,& button:first-of-type': { marginTop: 0 },
  },
  '&:not([data-orientation=vertical])': {
    '& > *': { marginLeft: '$3' },
    ':first-child,& button:first-of-type': { marginLeft: 0 },
  },
}) as React.FC<ComponentProps<typeof Root>>

type FixedRadioGroupProps = Omit<
  ComponentProps<typeof Root>,
  'onValueChange'
> & {
  onValueChange?: (value: string) => void
}

/**
 * Radios can be used to choose between a set of more than two options.
 *
 * Use a checkbox or on/off switch when single select/deselect option,
 * use radio when one option of more then two choices; [further info](https://www.nngroup.com/articles/checkboxes-vs-radio-buttons/). * * Radios should always be used with a `RadioGroup` to handle the state control and layout.
 *
 * Based on [Radix Radio Group](https://radix-ui.com/primitives/docs/components/radio-group).
 */
export const RadioGroup: ForwardRefExoticComponent<FixedRadioGroupProps> = forwardRef(
  ({ onValueChange, ...props }, forwardedRef) => (
    <TempRadioGroup
      {...props}
      onValueChange={(e) => onValueChange && onValueChange(e.target.value)}
      ref={forwardedRef}
    />
  )
)
RadioGroup.displayName = 'RadioGroup'
