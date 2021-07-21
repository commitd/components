import React, { FormEvent, useState } from 'react'
import {
  Alert,
  AlertTitle,
  Button,
  Card,
  CardBody,
  CardHeading,
  Checkbox,
  Column,
  Flex,
  Input,
  Monospace,
  Radio,
  RadioGroup,
  Select,
  SelectItem,
  Text,
  CheckedState,
} from '../../components'
import { listOfCountries } from '../util/data'

export default {
  title: 'Examples/Form',
}

export const Form = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [country, setCountry] = useState('')
  const [role, setRole] = useState('')
  const [notifyEmail, setNotifyEmail] = useState<CheckedState>(true)
  const [notifyTxt, setNotifyTxt] = useState<CheckedState>(true)
  const [notifyBrowser, setNotifyBrowser] = useState<CheckedState>(true)
  const [submitted, setSubmitted] = React.useState<{}>()
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted({
      name,
      country,
      email,
      notifyEmail,
      notifyTxt,
      notifyBrowser,
      role,
    })
  }
  return (
    <Column css={{ width: '100%', padding: '$3', gap: '$3' }}>
      {submitted && (
        <Alert severity="info">
          <AlertTitle>Form Submitted</AlertTitle>
          <Monospace>{JSON.stringify(submitted, null, 2)}</Monospace>
        </Alert>
      )}
      <Card
        as="form"
        onSubmit={handleSubmit}
        css={{ width: '100%', padding: '$3' }}
      >
        <CardHeading>Form</CardHeading>
        <CardBody>
          <Flex css={{ flexDirection: 'column', gap: '$3' }}>
            <Input
              id="name"
              label="Name"
              name="name"
              onValueChange={(value) => setName(value)}
              value={name}
            />
            <Input
              id="email"
              label="Email"
              type="email"
              onValueChange={(value) => setEmail(value)}
            />
            <Select
              id="country"
              label="Country"
              onValueChange={(value) => setCountry(value)}
            >
              {listOfCountries.map((country) => (
                <SelectItem value={country.title}>{country.title}</SelectItem>
              ))}
            </Select>
            <Text>Get notifications by:</Text>
            <Checkbox
              label="Email"
              id="notify_email"
              onCheckedChange={(checked) => setNotifyEmail(checked)}
              checked={notifyEmail}
            />
            <Checkbox
              label="Txt"
              id="notify_txt"
              onCheckedChange={(checked) => setNotifyTxt(checked)}
              checked={notifyTxt}
            />
            <Checkbox
              label="Browser"
              id="notify_browser"
              color="primary"
              onCheckedChange={(checked) => setNotifyBrowser(checked)}
              checked={notifyBrowser}
            />
            <Text>Please Specify your role:</Text>
            <RadioGroup value={role} onValueChange={(v) => setRole(v)}>
              <Radio value="director" label="Director" />
              <Radio value="developer" label="Developer" />
              <Radio value="tester" label="Tester" />
            </RadioGroup>
            <Button css={{ mt: '$4' }} type="submit" variant="primary">
              Submit
            </Button>
          </Flex>
        </CardBody>
      </Card>
    </Column>
  )
}
