import { Meta, Story } from '@storybook/react'
import React, { useState } from 'react'
import { FormControl, FormControlHelp } from '.'
import { rotateCheckedState, withFormData } from '../../docs/util'
import { Checkbox, CheckedState } from '../Checkbox'
import { Form, FormButton } from '../Form'
import { Inline } from '../Inline'
import { Input } from '../Input'
import { Label, LabelOptional } from '../Label'
import { Radio, RadioGroup } from '../RadioGroup'
import { Select, SelectItem } from '../Select'
import { Slider } from '../Slider'
import { Stack } from '../Stack'
import { TextArea } from '../TextArea'

export default {
  title: 'Components/FormControl',
  component: FormControl,
  subcomponents: {
    FormControlHelp,
    Label,
    Input,
    TextArea,
    Select,
    Checkbox,
    RadioGroup,
  },
} as Meta

export const Default: Story = () => (
  <FormControl>
    <Input label="Demo" name="demo" />
    <FormControlHelp
      defaultText="This is the help"
      errorText="This is the error"
      validText="This is the valid text"
    />
  </FormControl>
)

export const API_1: Story = () => {
  const [required, setRequired] = useState<CheckedState>('indeterminate')
  const [disabled, setDisabled] = useState(false)
  const [error, setError] = useState(false)
  const [valid, setValid] = useState(false)
  const [native, setNative] = useState(false)

  const rotate = rotateCheckedState(setRequired)

  return (
    <Stack spacing="large">
      <Inline>
        <Checkbox
          checked={required}
          onCheckedChange={rotate}
          label="Required"
        ></Checkbox>
        <Checkbox
          checked={disabled}
          onCheckedChange={setDisabled}
          label="Disabled"
        ></Checkbox>
        <Checkbox
          checked={error}
          onCheckedChange={setError}
          label="Error"
        ></Checkbox>
        <Checkbox
          checked={valid}
          onCheckedChange={setValid}
          label="Valid"
        ></Checkbox>
        <Checkbox
          checked={native}
          onCheckedChange={setNative}
          label="Native"
        ></Checkbox>
      </Inline>

      <FormControl>
        <Input
          type="text"
          id="test"
          label="Test"
          error={error}
          valid={valid}
          disabled={disabled}
          native={native}
          required={required === 'indeterminate' ? undefined : required}
        />
        <FormControlHelp
          defaultText="This is the help"
          errorText="This is the error"
          validText="This is the valid text"
        />
      </FormControl>
    </Stack>
  )
}

export const Example: Story = () => {
  type TextFields = 'email' | 'password' | 'touched'
  type FieldErrors = Record<TextFields, string | null>

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function validateEmail(testEmail: unknown) {
    if (typeof testEmail !== 'string' || testEmail.length < 3) {
      throw Error('Usernames must be at least 3 characters long')
    }

    // You can do real email validation here. This is just to keep it simple and
    // illustrate the point :)
    if (!testEmail.includes('@')) {
      throw Error('Invalid email')
    }
  }

  function validatePassword(testPassword: unknown) {
    if (typeof testPassword !== 'string' || testPassword.length < 6) {
      throw Error('Passwords must be at least 6 characters long')
    }
    if (!/[!@.$^*()]/.test(testPassword)) {
      throw Error('Passwords must contain at least 1 special character')
    }
  }

  const fieldErrors: FieldErrors = {
    email: null,
    password: null,
    touched: 'Not filled in',
  }

  if (!!email || !!password) {
    fieldErrors.touched = null
    if (!email) {
      fieldErrors.email = 'Email is required'
    } else {
      try {
        validateEmail(email)
      } catch (e) {
        if (e instanceof Error) {
          fieldErrors.email = e.message
        } else if (typeof e === 'string') {
          fieldErrors.email = e
        } else {
          fieldErrors.email = 'There was an error with this field'
        }
      }
    }

    if (!password) {
      fieldErrors.password = 'Password is required' // nosonar
    } else {
      try {
        validatePassword(password)
      } catch (e) {
        if (e instanceof Error) {
          fieldErrors.password = e.message
        } else if (typeof e === 'string') {
          fieldErrors.password = e
        } else {
          fieldErrors.password = 'There was an error with this field' // nosonar
        }
      }
    }
  }

  return (
    <Form onSubmit={withFormData(alert)}>
      <FormControl>
        <Input
          name="email"
          id="signin-email"
          label="Email"
          type="email"
          value={email}
          onValueChange={setEmail}
          placeholder="hello@committed.io"
          error={!!fieldErrors?.email}
          valid={email.length > 3}
          required
        />
        <FormControlHelp
          defaultText="Input your email address"
          errorText={fieldErrors?.email}
        />
      </FormControl>
      <FormControl>
        <Input
          name="password"
          id="signin-password"
          type="password"
          label="Password"
          value={password}
          onValueChange={setPassword}
          error={!!fieldErrors?.password}
          required
        />
        <FormControlHelp
          defaultText="Input your password"
          errorText={fieldErrors?.password}
        />
      </FormControl>
      <FormButton errors={fieldErrors} />
    </Form>
  )
}

/**
 * The `native` prop can be added to allow the use of the native html `:invalid` and `:valid` pseudo-classes.
 *
 * This is not the default as can have negative user experience when required forms show initial error.
 *
 * This is useful for styling the inputs when using the native html validation attributes.
 * The is added for checkbox, radio, and select inputs too but uses the :has selector which has limited support.
 */
export const Native: Story = () => {
  return (
    <Form onSubmit={withFormData(alert)}>
      <FormControl>
        <Input
          name="email"
          label="Email"
          type="email"
          placeholder="hello@committed.io"
          minLength={3}
          required
          native
        />
        <FormControlHelp defaultText="Input your email address" />
      </FormControl>
      <FormControl>
        <Input
          name="password"
          type="password"
          label="Password"
          pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
          required
          native
          title="Password must have minimum eight characters, at least one letter, one number and one special character"
        />
        <FormControlHelp defaultText="Input your password" />
      </FormControl>
      <FormButton />
    </Form>
  )
}

/**
 * Behavioural test/demo. Use the checkboxes to add these properties to all form elements.
 */
export const Controls: Story = () => {
  const [required, setRequired] = useState<CheckedState>('indeterminate')
  const [disabled, setDisabled] = useState(false)
  const [error, setError] = useState(false)
  const [valid, setValid] = useState(false)
  const [native, setNative] = useState(false)

  const rotate = rotateCheckedState(setRequired)

  const state = {
    error,
    valid,
    disabled,
    required: required === 'indeterminate' ? undefined : required,
    native,
  }

  return (
    <Stack spacing="large">
      <Inline>
        <Checkbox
          checked={required}
          onCheckedChange={rotate}
          label="Required"
        ></Checkbox>
        <Checkbox
          checked={disabled}
          onCheckedChange={setDisabled}
          label="Disabled"
        ></Checkbox>
        <Checkbox
          checked={error}
          onCheckedChange={setError}
          label="Error"
        ></Checkbox>
        <Checkbox
          checked={valid}
          onCheckedChange={setValid}
          label="Valid"
        ></Checkbox>
        <Checkbox
          checked={native}
          onCheckedChange={setNative}
          label="Native"
        ></Checkbox>
      </Inline>

      <Form onSubmit={withFormData(alert)}>
        <FormControl>
          <Input
            {...state}
            name="demo1"
            label="Demo 1"
            type="email"
            placeholder="hello@committed.io"
          />
        </FormControl>
        <FormControl>
          <Label htmlFor="demo-2">
            Own Label
            <LabelOptional />
          </Label>
          <Input {...state} name="demo2" type="password" />
          <FormControlHelp defaultText="This is a demo" />
        </FormControl>
        <FormControl>
          <Input {...state} name="demo3" label="Demo 3" />
          <FormControlHelp
            defaultText="This is a demo"
            errorText="This is an error"
          />
        </FormControl>
        <FormControl>
          <Select {...state} name="demo4" label="Demo 4" defaultValue="one">
            <SelectItem value="one">One</SelectItem>
            <SelectItem value="two">Two</SelectItem>
            <SelectItem value="three">Three</SelectItem>
          </Select>
          <FormControlHelp
            defaultText="This is a demo"
            errorText="This is an error"
            validText="This is an error"
          />
        </FormControl>
        <FormControl>
          <Checkbox {...state} name="demo5" label="Demo 5" />
          <FormControlHelp defaultText="Check the box" />
        </FormControl>
        <FormControl>
          <RadioGroup {...state} name="demo6" label="Demo 6">
            <Radio value="mobx" label="Mobx" />
            <Radio value="redux" label="Redux" />
            <Radio value="context" label="Context" />
          </RadioGroup>
          <FormControlHelp
            defaultText="This is a demo"
            errorText="This is an error"
            validText="This is an error"
          />
        </FormControl>
        <FormControl>
          <Input {...state} name="demo7" placeholder="No label!!" />
        </FormControl>
        <FormControl>
          <TextArea {...state} name="demo8" label="Demo 8" />
          <FormControlHelp
            defaultText="This is a demo"
            errorText="This is an error"
            validText="This is an error"
          />
        </FormControl>
        <FormControl>
          <Slider {...state} name="demo9" label="Demo 9" />
          <FormControlHelp
            defaultText="This is a demo"
            errorText="This is an error"
            validText="This is an error"
          />
        </FormControl>
        <FormButton />
      </Form>
    </Stack>
  )
}

/**
 * Behavioural test/demo with ids, to ensure elements are correctly referenced in aria. Use the checkboxes to add these properties to all form elements.
 */
export const WithIds: Story = () => {
  const [required, setRequired] = useState<CheckedState>('indeterminate')
  const [disabled, setDisabled] = useState(false)
  const [error, setError] = useState(false)
  const [valid, setValid] = useState(false)
  const [native, setNative] = useState(false)

  const rotate = rotateCheckedState(setRequired)

  const state = {
    error,
    valid,
    disabled,
    required: required === 'indeterminate' ? undefined : required,
    native,
  }

  return (
    <Stack spacing="large">
      <Inline>
        <Checkbox
          checked={required}
          onCheckedChange={rotate}
          label="Required"
        ></Checkbox>
        <Checkbox
          checked={disabled}
          onCheckedChange={setDisabled}
          label="Disabled"
        ></Checkbox>
        <Checkbox
          checked={error}
          onCheckedChange={setError}
          label="Error"
        ></Checkbox>
        <Checkbox
          checked={valid}
          onCheckedChange={setValid}
          label="Valid"
        ></Checkbox>
        <Checkbox
          checked={native}
          onCheckedChange={setNative}
          label="Native"
        ></Checkbox>
      </Inline>

      <Form onSubmit={withFormData(alert)}>
        <FormControl>
          <Input
            {...state}
            name="demo1"
            id="demo-1"
            label="Demo 1"
            type="email"
            placeholder="hello@committed.io"
          />
        </FormControl>
        <FormControl>
          <Label htmlFor="demo-2">
            Own Label
            <LabelOptional />
          </Label>
          <Input {...state} name="demo2" id="demo-2" type="password" />
          <FormControlHelp defaultText="This is a demo" />
        </FormControl>
        <FormControl>
          <Input {...state} name="demo3" id="demo-3" label="Demo 3" />
          <FormControlHelp
            defaultText="This is a demo"
            errorText="This is an error"
          />
        </FormControl>
        <FormControl>
          <Select
            {...state}
            name="demo4"
            id="demo-4"
            label="Demo 4"
            defaultValue="one"
          >
            <SelectItem value="one">One</SelectItem>
            <SelectItem value="two">Two</SelectItem>
            <SelectItem value="three">Three</SelectItem>
          </Select>
          <FormControlHelp
            defaultText="This is a demo"
            errorText="This is an error"
          />
        </FormControl>
        <FormControl>
          <Checkbox {...state} name="demo5" id="demo-5" label="Demo 5" />
          <FormControlHelp defaultText="Check the box" />
        </FormControl>
        <FormControl>
          <RadioGroup {...state} name="demo6" id="demo-6" label="Demo 6">
            <Radio value="mobx" label="Mobx" />
            <Radio value="redux" label="Redux" />
            <Radio value="context" label="Context" />
          </RadioGroup>
          <FormControlHelp
            defaultText="This is a demo"
            errorText="This is an error"
          />
        </FormControl>
        <FormControl>
          <Input {...state} name="demo7" id="demo-7" placeholder="No label!!" />
        </FormControl>
        <FormControl>
          <TextArea {...state} name="demo8" id="demo-8" label="Demo 8" />
          <FormControlHelp
            defaultText="This is a demo"
            errorText="This is an error"
          />
        </FormControl>
        <FormControl>
          <Slider {...state} name="demo9" id="demo-9" label="Demo 9" />
          <FormControlHelp
            defaultText="This is a demo"
            errorText="This is an error"
            validText="This is an error"
          />
        </FormControl>
        <FormButton />
      </Form>
    </Stack>
  )
}
