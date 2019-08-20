import * as React from "react"
import MaterialCheckbox, {
  CheckboxProps as MaterialCheckboxProps
} from "@material-ui/core/Checkbox"

export type CheckboxProps = MaterialCheckboxProps

export const Checkbox: React.FC<CheckboxProps> = (props: CheckboxProps) => (
  <MaterialCheckbox {...props} />
)

export default Checkbox
