import type * as Polymorphic from '@radix-ui/react-polymorphic'
import { useControllableState } from '@radix-ui/react-use-controllable-state'
import React, { forwardRef } from 'react'
import type { CSSProps, StitchesVariants } from 'stitches.config'
import { styled } from 'stitches.config'
import { ChevronDown } from '../Icons'
import { inputStyles } from '../Input/Input'
import {
  Menu,
  MenuContent,
  MenuRadioGroup,
  MenuRadioItem,
  MenuTrigger,
} from '../Menu'
import { Svg } from '../Svg'

const DEFAULT_TAG = 'input'
const StyledSelect = styled(DEFAULT_TAG, {
  ...inputStyles,
  cursor: 'pointer',
  textAlign: 'left',
})
export const SelectItem = MenuRadioItem

type SelectVariants = StitchesVariants<typeof StyledSelect>
type SelectOwnProps = CSSProps &
  SelectVariants & {
    /** Add a label to the Select */
    label?: string
    /** To supply a controlled value */
    value?: string
    /** Supply a starting value for uncontrolled instance */
    defaultValue?: string
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
    position: 'relative',
    right: '$6',
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
  ({ value, onValueChange, defaultValue, children, ...props }, ref) => {
    const [internalValue, setValue] = useControllableState({
      prop: value,
      defaultProp: defaultValue,
      onChange: onValueChange,
    })

    return (
      <Menu>
        <MenuTrigger>
          <Root>
            <StyledSelect {...props} ref={ref} value={internalValue} />
            <ChevronDown />
          </Root>
        </MenuTrigger>
        <MenuContent align="start" sideOffset={4} alignOffset={4}>
          <MenuRadioGroup value={internalValue} onValueChange={setValue}>
            {children}
          </MenuRadioGroup>
        </MenuContent>
      </Menu>
    )
  }
) as SelectComponent
Select.toString = () => 'Select'
