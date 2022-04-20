import { action } from '@storybook/addon-actions'
import { Meta, Story } from '@storybook/react'
import React from 'react'
import {
  ConfirmDialog,
  ConfirmDialogAction,
  ConfirmDialogActions,
  ConfirmDialogActionsWrapper,
  ConfirmDialogCancel,
  ConfirmDialogContent,
  ConfirmDialogDescription,
  ConfirmDialogTitle,
  ConfirmDialogTrigger,
} from '.'
import { Button } from '../'

export default {
  title: 'Components/ConfirmDialog',
  component: ConfirmDialog,
  subcomponents: {
    ConfirmDialogContent,
    ConfirmDialogTitle,
    ConfirmDialogDescription,
    ConfirmDialogActions,
    ConfirmDialogActionsWrapper,
    ConfirmDialogAction,
    ConfirmDialogCancel,
    ConfirmDialogTrigger,
  },
} as Meta

export const Default: Story = (args) => (
  <ConfirmDialog {...args}>
    <ConfirmDialogTrigger>
      <Button>Show Dialog</Button>
    </ConfirmDialogTrigger>
    <ConfirmDialogContent
      title="Confirm Dialog"
      description="Are you sure this is a confirm dialog?"
    >
      <ConfirmDialogActions confirm="Confirm" onConfirm={action('confirm')} />
    </ConfirmDialogContent>
  </ConfirmDialog>
)

/**
 *  The separate parts of the `ConfirmDialog` are also supplied to give more flexibility.
 *  This example shows their normal composition.
 **/
export const Parts: Story = (args) => (
  <ConfirmDialog>
    <ConfirmDialogTrigger>
      <Button>Show Dialog</Button>
    </ConfirmDialogTrigger>
    <ConfirmDialogContent>
      <ConfirmDialogTitle>Confirm Dialog</ConfirmDialogTitle>
      <ConfirmDialogDescription>
        Are you sure this is a confirm dialog?
      </ConfirmDialogDescription>
      <ConfirmDialogActionsWrapper>
        <ConfirmDialogCancel onClick={action('cancel')}>
          Cancel
        </ConfirmDialogCancel>
        <ConfirmDialogAction onClick={action('confirm')}>
          Confirm
        </ConfirmDialogAction>
      </ConfirmDialogActionsWrapper>
    </ConfirmDialogContent>
  </ConfirmDialog>
)

/*
 * For destructive actions use a destructive button
 */
export const Destructive: Story = (args) => (
  <ConfirmDialog {...args}>
    <ConfirmDialogTrigger>
      <Button>Show Dialog</Button>
    </ConfirmDialogTrigger>
    <ConfirmDialogContent
      title="Confirm Delete"
      description="Are you sure, this can not be undone?"
    >
      <ConfirmDialogActions
        confirm="Delete"
        onConfirm={action('delete')}
        destructive
      />
    </ConfirmDialogContent>
  </ConfirmDialog>
)
