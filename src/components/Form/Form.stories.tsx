import { Meta, Story } from '@storybook/react'
import React, { useState } from 'react'
import { Form, FormButton } from '.'
import { withFormData } from '../../docs/util'
import { FormControl, FormControlHelp } from '../FormControl'
import { Input } from '../Input'

export default {
  title: 'Components/Form',
  component: Form,
  subcomponents: { FormButton },
} as Meta

export const Default: Story = (args) => {
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
    <Form {...args} onSubmit={withFormData(alert)}>
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
