// TODO: Change to react's version when upgrading to react 18.
import { useId } from '@radix-ui/react-id'
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useLayoutEffect,
  useMemo,
} from 'react'

export type FieldState = 'invalid' | 'valid' | undefined

export interface FormControlBaseProps {
  /** Add to mark an error in the control */
  error: boolean
  /** Add to mark the control as disabled */
  disabled: boolean
  /** Add to mark as required */
  required: boolean | undefined
  /** Add to mark input as valid */
  valid: boolean
}

export interface UseFormControlProps extends Partial<FormControlBaseProps> {
  /** supply a static id for the control */
  id?: string
}

export interface FormControlState extends FormControlBaseProps {
  formControlId: string
  state: FieldState
}

export const DEFAULT_FORM_STATE: FormControlState = {
  formControlId: '',
  error: false,
  disabled: false,
  required: undefined,
  valid: false,
  state: undefined,
}

export const FormControlContext = createContext<
  [FormControlState, Dispatch<SetStateAction<FormControlState>>] | undefined
>(undefined)
FormControlContext.displayName = 'FormControlContext'

if (process.env.NODE_ENV !== 'production') {
  FormControlContext.displayName = 'FormControlContext'
}

/**
 * To be use within the supported FormControls (e.g. Input, TextArea, Select, Checkbox, Radio) or in you own form controls.
 * @param the control props
 * @returns [string, FormControlState]  the id to use in the control and form state derived from the props.
 */
export function useFormControl<Props extends UseFormControlProps>({
  id: providedId,
  disabled = DEFAULT_FORM_STATE.disabled,
  required = DEFAULT_FORM_STATE.required,
  error = DEFAULT_FORM_STATE.error,
  valid = DEFAULT_FORM_STATE.valid,
  ...props
}: Props): [
  string,
  FormControlState,
  Omit<Props, 'id' | keyof FormControlBaseProps>
] {
  const formControlId = useId(providedId)
  const context = useContext(FormControlContext)

  const resolvedState = useMemo(() => {
    let state: FieldState = undefined
    if (!disabled) {
      if (valid) {
        state = 'valid'
      }
      if (error) {
        state = 'invalid'
      }
    }

    return {
      formControlId,
      disabled,
      required,
      error,
      valid,
      state,
    }
  }, [formControlId, disabled, required, error, valid])

  useLayoutEffect(() => {
    if (context !== undefined) {
      const [, setFormControlSate] = context
      setFormControlSate(resolvedState)
    }
  }, [context, resolvedState])

  return [formControlId, resolvedState, props]
}

/**
 * For use in components that can be used outside the FormControl component.
 */
export function usePossibleFormControlState(): FormControlState | undefined {
  const context = useContext(FormControlContext)
  return context ? context[0] : undefined
}

/**
 * For use in internal FormControl components to get the current form control state.
 */
export function useFormControlState(): FormControlState {
  const context = useContext(FormControlContext)
  if (context === undefined) {
    throw new Error(`useFormControlState must be used within a FormControl`)
  }
  return context[0]
}
