// import {
//   DeleteSharp,
//   FastForwardSharp,
//   ReplyAllSharp,
//   ReplySharp,
// } from '@material-ui/icons'
// import React from 'react'
// import {
//   AppBar,
//   Avatar,
//   Box,
//   Card,
//   CardContent,
//   Heading,
//   IconButton,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   Row,
//   Text,
//   ThemeProvider,
//   ThemeSwitch,
//   Toolbar,
// } from '../../src'
// import { randomColor } from '../util/colors'

// export default {
//   title: 'Examples/Inbox',
// }

// export const Example = () => {
//   const Header = () => (
//     <AppBar position="relative">
//       <Toolbar>
//         <Avatar src="https://i.pravatar.cc/40" />
//         <Box flexGrow={1} justifyItems="center" px={2}>
//           <Heading.h1>Inbox</Heading.h1>
//         </Box>
//         <ThemeSwitch variant="celestial" />
//       </Toolbar>
//     </AppBar>
//   )

//   const Email = () => (
//     <Box mx={5} my={1}>
//       <Row>
//         <Box flexGrow={1} />
//         <IconButton>
//           <DeleteSharp />
//         </IconButton>
//         <IconButton>
//           <ReplySharp />
//         </IconButton>
//         <IconButton>
//           <ReplyAllSharp />
//         </IconButton>
//         <IconButton>
//           <FastForwardSharp />
//         </IconButton>
//       </Row>
//       <Box my={1} p={4} bgcolor="background.paper">
//         <ListItem>
//           <ListItemIcon>
//             <Avatar size="small" m={1} bgcolor={randomColor()}>
//               CC
//             </Avatar>
//           </ListItemIcon>
//           <ListItemText
//             primary={'This is the best email ever'}
//             secondary="test@committed.test"
//           />
//         </ListItem>
//         <CardContent>
//           <Text bold upper>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
//             accusantium dicta quo eveniet, nesciunt unde quam dolorum accusamus
//             omnis eligendi similique id hic.
//           </Text>
//           <img src={`https://picsum.photos/300/200?random=1`} />
//           <Text>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
//             accusantium dicta quo eveniet, nesciunt unde quam dolorum accusamus
//             omnis eligendi similique id hic. Qui voluptates modi soluta facilis
//             ullam maiores.
//           </Text>
//           <img src={`https://picsum.photos/300/200?random=2`} />
//           <Text>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
//             accusantium dicta quo eveniet, nesciunt unde quam dolorum accusamus
//             omnis eligendi similique id hic. Qui voluptates modi soluta facilis
//             ullam maiores.
//           </Text>
//         </CardContent>
//       </Box>
//     </Box>
//   )

//   const EmailItem = ({ initials, subject, from }) => (
//     <ListItem button key={subject}>
//       <ListItemIcon>
//         <Avatar m={1} bgcolor={randomColor()}>
//           {initials}
//         </Avatar>
//       </ListItemIcon>
//       <ListItemText primary={subject} secondary={from} />
//     </ListItem>
//   )

//   const Emails = () => (
//     <Box>
//       <Card height={1}>
//         <List>
//           <EmailItem
//             initials="CF"
//             from="opensource@committed.test"
//             subject="Checkout Components"
//           />
//           <EmailItem
//             initials="SH"
//             from="test@committed.test"
//             subject="Checkout Components!!!"
//           />
//           <EmailItem
//             initials="JE"
//             from="je@committed.test"
//             subject="Checkout Components 🎉🎉🎉"
//           />
//           <EmailItem
//             initials="ST"
//             from="st@committed.test"
//             subject="Checkout Components!🎉"
//           />
//           <EmailItem
//             initials="MC"
//             from="mc@committed.test"
//             subject="Checkout Components ✨✨✨"
//           />
//           <EmailItem
//             initials="KA"
//             from="ka@committed.test"
//             subject="🔥🔥🔥 Checkout Components"
//           />
//         </List>
//       </Card>
//     </Box>
//   )

//   return (
//     <ThemeProvider>
//       <Box position="relative" minHeight="50vh" bgcolor="background.default">
//         <Header />
//         <Row>
//           <Emails />
//           <Email />
//         </Row>
//       </Box>
//     </ThemeProvider>
//   )
// }
