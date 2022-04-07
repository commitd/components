import { Meta, Story } from '@storybook/react'
import React from 'react'
import { ComponentsProvider, ThemeProviderPropsWithoutChildren } from '.'
import { Card, CardBody } from '../Card'
import { Monospace } from '../Text'
import { ToastProvider as toast, ToastViewport as viewport } from '../Toast'
import { TooltipProvider as tooltip } from '../Tooltip'

// For docs only
export const theme: React.FC<ThemeProviderPropsWithoutChildren> = (
  props: ThemeProviderPropsWithoutChildren
) => null

export default {
  title: 'Components/ComponentsProvider',
  component: ComponentsProvider,
  subcomponents: {
    theme,
    tooltip,
    toast,
    viewport,
  },
  excludeStories: ['theme'],
} as Meta

export const Default: Story = ({ theme, ...args }) => (
  <ComponentsProvider theme={{ ...theme, local: true }} {...args}>
    <Card>
      <CardBody>
        The <Monospace>ComponentsProvider</Monospace> should wrap your
        application.
      </CardBody>
    </Card>
  </ComponentsProvider>
)
