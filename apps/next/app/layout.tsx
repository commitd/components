import { ComponentsProvider } from '@committed/ds'
import { ReactNode } from 'react'
import { BackgroundContextProvider } from '../src/parts/Background'
import './panda.css'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ComponentsProvider>
          <BackgroundContextProvider>{children}</BackgroundContextProvider>
        </ComponentsProvider>
      </body>
    </html>
  )
}
