import { Dispatch, FormEvent, SetStateAction } from 'react'
import { CheckedState } from '../../components/Checkbox'

export * from './Colors'
export * from './Copy'
export * from './randomColor'
export * from './SemanticColors'
export * from './Variants'

export function toJson(callback: (...args: any[]) => void) {
  return (object: any): void => {
    callback(JSON.stringify(object, null, 2))
  }
}

export function withFormObject(callback: (...args: any[]) => void) {
  return (e: FormEvent): void => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    let object: any = {}
    formData.forEach((value, key) => {
      // Reflect.has in favor of: object.hasOwnProperty(key)
      if (!Reflect.has(object, key)) {
        object[key] = value
        return
      }
      if (!Array.isArray(object[key])) {
        object[key] = [object[key]]
      }
      object[key].push(value)
    })
    callback(object)
  }
}

export function withFormData(callback: (...args: any[]) => void) {
  return withFormObject(toJson(callback))
}

export const rotateCheckedState =
  (setChecked: Dispatch<SetStateAction<CheckedState>>) => () => {
    setChecked((checked) => {
      if (checked === 'indeterminate') {
        return true
      } else if (checked) {
        return false
      } else {
        return 'indeterminate'
      }
    })
  }
