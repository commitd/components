'use client'

import { Button, Dialog, DialogContent, DialogTrigger } from '@committed/ds'

export const DialogExample = () => (
  <Dialog>
    <DialogTrigger>
      <Button>Show Dialog</Button>
    </DialogTrigger>
    <DialogContent>This is a dialog</DialogContent>
  </Dialog>
)
