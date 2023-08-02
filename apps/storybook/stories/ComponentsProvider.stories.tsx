// import { ComponentsProvider, ThemeProviderPropsWithoutChildren } from '@committed/ds'
import { ComponentsProvider } from '@committed/ds'
import { Meta, StoryObj } from '@storybook/react'
import { FC, PropsWithChildren } from 'react'
// import { Card, CardBody } from '../Card'
// import { Monospace } from '../Text'
// import { ToastProvider as toast, ToastViewport as viewport } from '../Toast'
// import { TooltipProvider as tooltip } from '../Tooltip'

const Card: FC<PropsWithChildren> = ({ children }) => (
  <div>
    {'Card'}
    {children}
  </div>
)
const CardContent: FC<PropsWithChildren> = ({ children }) => (
  <div>
    {'CardContent'}
    {children}
  </div>
)
const Monospace: FC<PropsWithChildren> = ({ children }) => (
  <div>
    {'Monospace'}
    {children}
  </div>
)
const toast: FC<PropsWithChildren> = ({ children }) => (
  <div>
    {'toast'}
    {children}
  </div>
)
const viewport: FC<PropsWithChildren> = ({ children }) => (
  <div>
    {'viewport'}
    {children}
  </div>
)
const tooltip: FC<PropsWithChildren> = ({ children }) => (
  <div>
    {'tooltip'}
    {children}
  </div>
)
const theme: FC<PropsWithChildren> = ({ children }) => (
  <div>
    {'theme'}
    {children}
  </div>
)

// For docs only
// export const theme: React.FC<ThemeProviderPropsWithoutChildren> = (
//   _props: ThemeProviderPropsWithoutChildren
// ) => null

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
