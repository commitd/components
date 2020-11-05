import MaterialCheckbox, {
  CheckboxProps as MaterialCheckboxProps,
} from '@material-ui/core/Checkbox'
import React from 'react'
import { CheckMark } from './CheckMark'
import { CheckMarkProps } from 'components/checkbox/CheckMark'

export type CheckboxProps = MaterialCheckboxProps

export const Checkbox: React.FC<CheckboxProps> = (props: CheckboxProps) => {
  let checkedIcon = props.checkedIcon
  if (!props.icon && !props.checkedIcon) {
    var color: CheckMarkProps['color'] = 'inherit'
    if (props.disabled) {
      color = 'disabled'
    } else if (props.color !== 'default') {
      color = props.color
    }
    checkedIcon = <CheckMark color={color} />
  }

  return <MaterialCheckbox checkedIcon={checkedIcon} {...props} />
}
