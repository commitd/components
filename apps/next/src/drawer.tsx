'use client'

import { Button, Drawer, DrawerContent, DrawerTrigger } from '@committed/ds'

export const DrawerExample = () => (
  <Drawer>
    <DrawerTrigger>
      <Button>Show Drawer</Button>
    </DrawerTrigger>
    <DrawerContent>This is a Drawer</DrawerContent>
  </Drawer>
)
