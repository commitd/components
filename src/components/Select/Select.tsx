import type * as Polymorphic from '@radix-ui/react-polymorphic'
import { useControllableState } from '@radix-ui/react-use-controllable-state'
import React, { forwardRef } from 'react'
import type { CSSProps, VariantProps } from '../../stitches.config'
import { styled } from '../../stitches.config'
import { ChevronDown } from '../Icons'
import { inputStyles } from '../Input/Input'
import {
  Menu,
  MenuContent,
  MenuItem,
  MenuRadioGroup,
  MenuRadioItem,
  MenuTrigger,
} from '../Menu'
import { Svg } from '../Svg'
import { useLabelContext } from '@radix-ui/react-label'
import { Label } from '../Label'

const DEFAULT_TAG = 'input'
const StyledSelect = styled(DEFAULT_TAG, inputStyles, {
  cursor: 'pointer',
  textAlign: 'left',
})
export const SelectItem = MenuRadioItem

type SelectVariants = VariantProps<typeof StyledSelect>
type SelectOwnProps = CSSProps &
  SelectVariants & {
    /** Add a label to the Select */
    label?: string
    /** To supply a controlled value */
    value?: string
    /** Supply a starting value for uncontrolled instance */
    defaultValue?: string
    /** Supply a starting placeholder value for uncontrolled instance */
    placeholder?: string
    /** Called on Select change with new value */
    onValueChange?: (value: string) => void
  }

type SelectComponent = Polymorphic.ForwardRefComponent<
  typeof DEFAULT_TAG,
  SelectOwnProps
>

const Root = styled('div', {
  boxSizing: 'border-box',
  position: 'relative',
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  width: '100%',
  [`& ${Svg}`]: {
    position: 'absolute',
    right: '$4',
  },
  variants: {
    disabled: {
      true: {
        pointerEvents: 'none',
      },
    },
  },
})

/**
 * Select component
 *
 * ___!! This is a temporary implementation, to be replaced on release of radix-ui select. !!___
 *
 *
 */
export const Select = forwardRef(
  (
    {
      label,
      id,
      value,
      onValueChange,
      defaultValue,
      children,
      placeholder,
      disabled,
      ...props
    },
    ref
  ) => {
    const [internalValue, setValue] = useControllableState({
      prop: value,
      defaultProp: defaultValue || placeholder,
      onChange: onValueChange,
    })
    const labelId = useLabelContext()

    return (
      <>
        {label && (
          <Label variant="above" htmlFor={id || labelId}>
            {label}
          </Label>
        )}
        <Menu>
          <MenuTrigger>
            <Root disabled={disabled}>
              <StyledSelect
                id={id}
                aria-labelledby={labelId}
                disabled={disabled}
                {...props}
                ref={ref}
                value={internalValue}
                // Just there to suppress warning
                onChange={() => null}
              />
              <ChevronDown />
            </Root>
          </MenuTrigger>
          <MenuContent align="start" sideOffset={4} alignOffset={4}>
            {placeholder && <MenuItem disabled>{placeholder}</MenuItem>}
            <MenuRadioGroup value={internalValue} onValueChange={setValue}>
              {children}
            </MenuRadioGroup>
          </MenuContent>
        </Menu>
      </>
    )
  }
) as SelectComponent
Select.toString = () => 'Select'
