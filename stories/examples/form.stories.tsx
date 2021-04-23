// import React from 'react'
// import {
//   Alert,
//   AlertTitle,
//   Autocomplete,
//   Box,
//   Button,
//   Card,
//   CardActions,
//   CardContent,
//   CardHeader,
//   Checkbox,
//   Form,
//   FormControlLabel,
//   Monospace,
//   Typography,
//   TextField,
//   RadioGroup,
//   Radio,
// } from '../../src'
// import { listOfCountries } from '../util/data'

// export default {
//   title: 'Examples/Form',
// }

// export const Example = () => {
//   const [submitted, setSubmitted] = React.useState(null)

//   const handleSubmit = (e) => {
//     const elements = e.target.elements
//     e.preventDefault()
//     setSubmitted({
//       name: elements.name.value,
//       email: elements.email.value,
//       country: elements.country.value,
//       notify_email: elements.notify_email.checked,
//       notify_txt: elements.notify_txt.checked,
//       notify_browser: elements.notify_browser.checked,
//       role: elements.role.value,
//     })
//   }

//   return (
//     <Box bgcolor="background.paper">
//       {submitted && (
//         <Alert severity="info">
//           <AlertTitle>Form Submitted</AlertTitle>
//           <Monospace>{JSON.stringify(submitted, null, 2)}</Monospace>
//         </Alert>
//       )}
//       <Form onSubmit={handleSubmit}>
//         <Card m={3}>
//           <CardHeader>Form</CardHeader>
//           <CardContent>
//             <TextField my={2} id="name" label="Name" />
//             <TextField my={2} id="email" label="Email" />
//             <Autocomplete
//               id="country"
//               options={listOfCountries}
//               getOptionLabel={(option) => option?.title}
//               renderInput={(params) => (
//                 <TextField my={2} {...params} label="Country" />
//               )}
//             />
//             <Typography>Get notifications by:</Typography>
//             <FormControlLabel
//               control={<Checkbox id="notify_email" color="primary" />}
//               label="Email"
//               labelPlacement="end"
//             />
//             <FormControlLabel
//               control={<Checkbox id="notify_txt" color="primary" />}
//               label="Txt"
//               labelPlacement="end"
//             />
//             <FormControlLabel
//               control={<Checkbox id="notify_browser" color="primary" />}
//               label="Browser"
//               labelPlacement="end"
//             />
//             <Typography>Please Specify your role:</Typography>
//             <RadioGroup aria-label="role" name="role">
//               <FormControlLabel
//                 value="director"
//                 color="primary"
//                 control={<Radio color="primary" />}
//                 label="Director"
//               />
//               <FormControlLabel
//                 value="developer"
//                 control={<Radio color="primary" />}
//                 label="Developer"
//               />
//               <FormControlLabel
//                 value="tester"
//                 control={<Radio color="primary" />}
//                 label="Tester"
//               />
//               <FormControlLabel
//                 value="other"
//                 control={<Radio color="primary" />}
//                 label="Other"
//               />
//             </RadioGroup>
//           </CardContent>
//           <CardActions>
//             <Button type="submit" color={'primary'}>
//               Submit
//             </Button>
//           </CardActions>
//         </Card>
//       </Form>
//     </Box>
//   )
// }
