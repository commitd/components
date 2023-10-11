import { Alert, AlertContent, AlertTitle, Stack } from '@committed/ds'

export const AlertExample = () => (
  <Stack spacing="small">
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
  </Stack>
)
