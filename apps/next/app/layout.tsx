import { ComponentsProvider } from '@committed/ds'
import { ReactNode } from 'react'
import './panda.css'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ComponentsProvider theme={false}>{children}</ComponentsProvider>
      </body>
    </html>
  )
}
