import React, { FC } from 'react'
import MaterialCheckbox, {
  CheckboxProps as MaterialCheckboxProps,
} from '@material-ui/core/Checkbox'
import { Box } from '../box/Box'
export type CheckboxProps = MaterialCheckboxProps

export const Checkbox: FC<CheckboxProps> = (props: CheckboxProps) => {
  const { checked: checkedProp, defaultChecked, onChange } = props
  const { current: isControlled } = React.useRef(checkedProp != null)
  const [checkedState, setCheckedState] = React.useState(
    Boolean(defaultChecked)
  )

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    if (!isControlled) {
      setCheckedState(checked)
    }

    if (onChange) {
      onChange(event, checked)
    }
  }

  const checked = isControlled ? checkedProp : checkedState
  if (!props.icon && !props.checkedIcon) {
    let color = 'transparent'
    if (checked && !props.disabled) {
      if (props.color === 'primary') {
        color = 'secondary.dark'
      }
      if (props.color === 'secondary') {
        color = 'primary.main'
      }
    }
    let paddingLeft = '14px'
    let paddingRight = '14px'
    if (props.edge === 'start') {
      paddingLeft = '0'
    } else if (props.edge === 'end') {
      paddingRight = '0'
    }

    return (
      <Box position="relative">
        <MaterialCheckbox
          {...props}
          style={{ zIndex: 110, ...props.style }}
          onChange={handleInputChange}
        />
        <Box
          width="100%"
          height="100%"
          paddingY="14px"
          paddingLeft={paddingLeft}
          paddingRight={paddingRight}
          bgcolor={color}
          position="absolute"
          zIndex={100}
          top={0}
          left={0}
          style={{ backgroundClip: 'content-box' }}
        />
      </Box>
    )
  } else {
    return (
      <MaterialCheckbox {...props} style={{ zIndex: 110, ...props.style }} />
    )
  }
}
