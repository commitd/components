import React from 'react'
import MaterialCheckbox, {
  CheckboxProps as MaterialCheckboxProps,
} from '@material-ui/core/Checkbox'
import { useTheme } from '@material-ui/core/styles'
import { Box } from '../box/Box'
export type CheckboxProps = MaterialCheckboxProps

export const Checkbox: React.FC<CheckboxProps> = (props: CheckboxProps) => {
  const theme = useTheme()
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
        color = 'brand.main'
      }
      if (props.color === 'secondary') {
        color = theme.palette.getContrastText(theme.palette.secondary.main)
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
