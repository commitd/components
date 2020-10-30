import MaterialCheckbox, {
  CheckboxProps as MaterialCheckboxProps,
} from '@material-ui/core/Checkbox'
import React from 'react'
import { CheckMark } from './CheckMark'

export type CheckboxProps = MaterialCheckboxProps

export const Checkbox: React.FC<CheckboxProps> = (props: CheckboxProps) => {
  let checkedIcon = props.checkedIcon
  if (!props.icon && !props.checkedIcon) {
    checkedIcon = (
      <CheckMark color={props.color === 'default' ? 'inherit' : props.color} />
    )
  }

  return <MaterialCheckbox checkedIcon={checkedIcon} {...props} />
}
