'use client'

import { Backdrop, Button, Spinner } from '@committed/ds'
import { useBoolean, useTimeout } from '@committed/hooks'

export const BackdropExample = () => {
  const [open, { setTrue, setFalse }] = useBoolean(false)
  useTimeout(setFalse, open ? 1000 : null)
  return (
    <>
      <Button variant="solid" onClick={setTrue}>
        Show Backdrop
      </Button>
      <Backdrop open={open}>
        <Spinner size="$8" variant="spin" />
      </Backdrop>
    </>
  )
}
