import React, { FC, HTMLAttributes } from 'react'
import MaterialCheckbox, {
  CheckboxProps as MaterialCheckboxProps
} from '@material-ui/core/Checkbox'
import { Box } from '../box/Box'
export type CheckboxProps = MaterialCheckboxProps

export const Checkbox: FC<CheckboxProps> = (props: CheckboxProps) => {
  if (!props.icon && !props.checkedIcon) {
    let color = 'transparent'
    if (
      ((props.value && props.value !== 'false') || props.checked) &&
      !props.disabled
    ) {
      if (props.color === 'primary') {
        color = 'secondary.dark'
      }
      if (props.color === 'secondary') {
        color = 'primary.main'
      }
    }
    return (
      <Box position="relative">
        <MaterialCheckbox {...props} style={{ zIndex: 110, ...props.style }} />
        <Box
          width="100%"
          height="100%"
          padding="14px"
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

// For documentation only
export type CheckboxDocsProps = Omit<
  CheckboxProps,
  keyof HTMLAttributes<HTMLElement>
>
export const CheckboxDocs: FC<CheckboxDocsProps> = () => null
