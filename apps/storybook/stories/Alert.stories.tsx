import { Alert, AlertContent, AlertTitle, Column } from '@committed/ds'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  subcomponents: { AlertTitle, AlertContent },
  argTypes: {
    severity: {
      control: {
        type: 'select',
        options: ['error', 'warn', 'info', 'success', 'ghost'],
      },
      defaultValue: 'error',
      description: 'Set the severity of the alert',
    },
  },
}
export default meta
type Story = StoryObj<typeof Alert>

export const Default: Story = {
  render: (args) => (
    <Alert {...args}>
      <AlertTitle>Alert Title</AlertTitle>
      <AlertContent>
        This is the alert content, the content is optional but should usually
        give further explanation about the alert and if any action is required.
      </AlertContent>
    </Alert>
  ),
  args: {},
}

export const Severity: Story = {
  render: () => (
    <Column css={{ gap: '$3' }}>
      <Alert severity="error">
        <AlertTitle>This is an error alert</AlertTitle>
      </Alert>
      <Alert severity="warn">
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
  ),
}

export const WithContent: Story = {
  render: () => (
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
      <Alert severity="warn">
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
  ),
}
