// import { ComponentsProvider, ThemeProviderPropsWithoutChildren } from '@committed/ds'
import {
  Card,
  CardContent,
  ComponentsProvider,
  Monospace,
  ThemeProviderPropsWithoutChildren,
  ToastProvider as toast,
  TooltipProvider as tooltip,
  ToastViewport as viewport,
} from '@committed/ds'
import { Meta, StoryObj } from '@storybook/react'

// For docs only
export const theme: React.FC<ThemeProviderPropsWithoutChildren> = (
  _props: ThemeProviderPropsWithoutChildren,
) => null

const meta: Meta<typeof ComponentsProvider> = {
  title: 'Components/ComponentsProvider',
  component: ComponentsProvider,
  subcomponents: {
    theme,
    tooltip,
    toast,
    viewport,
  },
  excludeStories: ['theme'],
}

export default meta

export const Default: StoryObj<typeof ComponentsProvider> = {
  render: (
    { theme, ...args }, // NOSONAR
  ) => (
    <ComponentsProvider theme={{ ...theme, local: true }} {...args}>
      <Card>
        <CardContent>
          The <Monospace>ComponentsProvider</Monospace> should wrap your
          application.
        </CardContent>
      </Card>
    </ComponentsProvider>
  ),
}
