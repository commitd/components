import { useLabelContext } from '@radix-ui/react-label'
import { useControllableState } from '@radix-ui/react-use-controllable-state'
import React, {
  ComponentProps,
  ElementRef,
  forwardRef,
  useMemo,
  Children,
  isValidElement,
} from 'react'
import type { CSSProps, VariantProps } from '../../stitches.config'
import { styled } from '../../stitches.config'
import { ChevronDown } from '../Icons'
import { inputStyles } from '../Input/Input'
import { Label } from '../Label'
import { useId } from '@radix-ui/react-id'
import {
  Menu,
  MenuContent,
  MenuItem,
  MenuRadioGroup,
  MenuRadioItem,
  MenuTrigger,
} from '../Menu'
import { Svg } from '../Svg'

const DEFAULT_TAG = 'input'
const StyledSelect = styled(DEFAULT_TAG, inputStyles, {
  cursor: 'pointer',
  textAlign: 'left',
  pointerEvents: 'none',
})
export const SelectItem = MenuRadioItem

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

type SelectVariants = VariantProps<typeof StyledSelect>
type SelectProps = CSSProps &
  SelectVariants & {
    /** Add a label to the Select */
    label?: string
    /** To supply a controlled value */
    value?: string
    /** Supply a starting value for uncontrolled instance */
    defaultValue?: string
    /** Supply a starting placeholder value for uncontrolled instance */
    placeholder?: string
    /** Supply a header for the select menu  */
    header?: string
    /** Called on Select change with new value */
    onValueChange?: (value: string) => void
  } & ComponentProps<typeof DEFAULT_TAG>

const SELECT_CLASS_NAME = 'c-select'

/**
 * Select component
 *
 * ___!! This is a temporary implementation, to be replaced on release of radix-ui select. !!___
 *
 *
 */
export const Select = forwardRef<ElementRef<typeof StyledSelect>, SelectProps>(
  (
    {
      label,
      id: idProp,
      value,
      onValueChange,
      defaultValue,
      children,
      placeholder,
      header,
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

    const id = useId(idProp)
    const labelId = useLabelContext()

    const valueToText = useMemo<Record<string, string>>(() => {
      const mapped: Record<string, string> = {}
      Children.forEach(Children.toArray(children), (child) => {
        if (
          isValidElement(child) &&
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          typeof child?.props?.children === 'string'
        ) {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
          mapped[child.props.value] = child.props.children
        }
      })
      return mapped
    }, [children])

    return (
      <>
        {label && (
          <Label variant="above" htmlFor={id || labelId}>
            {label}
          </Label>
        )}
        <Menu>
          <MenuTrigger>
            <Root disabled={disabled} className={SELECT_CLASS_NAME}>
              <StyledSelect
                id={id}
                aria-labelledby={labelId}
                disabled={disabled}
                {...props}
                ref={ref}
                placeholder={placeholder}
                value={internalValue && valueToText[internalValue]}
                // Just there to suppress warning
                onChange={() => null}
              />
              <ChevronDown />
            </Root>
          </MenuTrigger>
          <MenuContent align="start" sideOffset={4} alignOffset={4}>
            {header && <MenuItem disabled>{header}</MenuItem>}
            <MenuRadioGroup value={internalValue} onValueChange={setValue}>
              {children}
            </MenuRadioGroup>
          </MenuContent>
        </Menu>
      </>
    )
  }
)
Select.toString = () => `.${SELECT_CLASS_NAME}`
