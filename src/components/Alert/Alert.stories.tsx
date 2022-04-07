import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Alert, AlertTitle, AlertContent } from '.'
import { Column } from '../'

export default {
  title: 'Components/Alert',
  component: Alert,
  subcomponents: { AlertTitle, AlertContent },
  argTypes: {
    severity: {
      control: {
        type: 'select',
        options: ['error', 'warning', 'info', 'success', 'ghost'],
      },
      defaultValue: 'error',
      description: 'Set the severity of the alert',
    },
  },
} as Meta

const Template: Story = (args) => (
  <Alert {...args}>
    <AlertTitle>Alert Title</AlertTitle>
    <AlertContent>
      This is the alert content, the content is optional but should usually give
      further explanation about the alert and if any action is required.
    </AlertContent>
  </Alert>
)
export const Default = Template.bind({})
Default.args = {
  severity: 'error',
}

export const Severity: Story = () => (
  <Column css={{ gap: '$3' }}>
    <Alert severity="error">
      <AlertTitle>This is an error alert</AlertTitle>
    </Alert>
    <Alert severity="warning">
      <AlertTitle>This is a warning alert</AlertTitle>
    </Alert>
    <Alert severity="info">
      <AlertTitle>This is an info alert</AlertTitle>
    </Alert>
    <Alert severity="success">
      <AlertTitle>This is a success alert</AlertTitle>
    </Alert>
    <Alert severity="ghost">
      <AlertTitle>This is a ghost alert</AlertTitle>
    </Alert>
  </Column>
)

export const WithContent: Story = () => (
  <Column css={{ gap: '$3' }}>
    <Alert severity="ghost">
      <AlertTitle>Ghost</AlertTitle>
      <AlertContent>
        This is a ghost alert — <strong>check it out!</strong>
      </AlertContent>
    </Alert>
    <Alert severity="error">
      <AlertTitle>Error</AlertTitle>
      <AlertContent>
        This is an error alert — <strong>check it out!</strong>
      </AlertContent>
    </Alert>
    <Alert severity="warning">
      <AlertTitle>Warning</AlertTitle>
      <AlertContent>
        This is a warning alert — <strong>check it out!</strong>
      </AlertContent>
    </Alert>
    <Alert severity="info">
      <AlertTitle>Info</AlertTitle>
      <AlertContent>
        This is an info alert — <strong>check it out!</strong>
      </AlertContent>
    </Alert>
    <Alert severity="success">
      <AlertTitle>Success</AlertTitle>
      <AlertContent>
        This is a success alert — <strong>check it out!</strong>
      </AlertContent>
    </Alert>
  </Column>
)
