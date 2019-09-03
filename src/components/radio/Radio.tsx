import * as React from 'react'
import MaterialRadio, {
  RadioProps as MaterialRadioProps
} from '@material-ui/core/Radio'

export type RadioProps = MaterialRadioProps
export const Radio = MaterialRadio

export default Radio as React.FC<RadioProps>
