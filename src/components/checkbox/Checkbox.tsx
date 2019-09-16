import * as React from 'react'
import MaterialCheckbox, {
  CheckboxProps as MaterialCheckboxProps
} from '@material-ui/core/Checkbox'
import { Box } from '../box/Box'
export type CheckboxProps = MaterialCheckboxProps

export const Checkbox: React.FC<CheckboxProps> = (props: CheckboxProps) => {
  let color = 'transparent'
  if (props.checked && !props.disabled) {
    if (props.color === 'primary') {
      color = 'secondary.dark'
    }
    if (props.color === 'secondary') {
      color = 'primary.main'
    }
  }
  return (
    <Box position="relative">
      <MaterialCheckbox {...props} />
      <Box
        width="100%"
        height="100%"
        padding="14px"
        bgcolor={color}
        position="absolute"
        zIndex={0}
        top={0}
        left={0}
        style={{ backgroundClip: 'content-box' }}
      />
    </Box>
  )
}

export default Checkbox
