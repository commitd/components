import CallSharp from '@material-ui/icons/CallSharp'
import EmailSharp from '@material-ui/icons/EmailSharp'
import React from 'react'
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Card,
  CardActionArea,
  Column,
  Container,
  Display,
  Divider,
  Flex,
  Heading,
  Link,
  Loader,
  Row,
  Text,
  ThemeProvider,
  ThemeSwitch,
  Toolbar,
  useThemeController,
} from '../../src'

export default {
  title: 'Examples/Website',
}

const footerHeight = '200px'

export const Example = () => {
  const Header = () => (
    <AppBar position="relative">
      <Toolbar>
        <Box flexGrow={1}>
          <Heading.h1>Website</Heading.h1>
        </Box>
        <Avatar src="https://i.pravatar.cc/40" />
        <ThemeSwitch variant="celestial" />
        <Button color="inherit" variant="text">
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  )

  const Post = ({ name, index }: { name: string; index: number }) => (
    <Card m={5} p={0}>
      <Flex
        flexDirection="column"
        bgcolor="primary.main"
        color="secondary.dark"
      >
        <img src={`https://picsum.photos/300/200?random=${index}`} />
        <CardActionArea>
          <Box mt={0} p={2} pb={3}>
            <Text bold upper>
              {name}
            </Text>
          </Box>
        </CardActionArea>
      </Flex>
    </Card>
  )

  const Content = () => (
    <Container>
      <Display.d1 p={4} align="center">
        Our work and Open Source
      </Display.d1>
      <Text align="center">
        We believe we can all move forward faster by being open. Learn more
        about our contributions.
      </Text>
      <Divider my={3} />
      <Flex justifyContent="center" alignContent="center" flexWrap="wrap">
        {[
          'Speedy Spotless',
          'ARGA',
          'Eastern Galaxy',
          'Pribox',
          'Rejux',
          'Baleen',
        ].map((name, index) => (
          <Post key={name} name={name} index={index} />
        ))}
      </Flex>
      <Box mb={5}>
        <Loader size={128} />
      </Box>
    </Container>
  )

  const Logo = () => {
    const [choice] = useThemeController()
    const logo =
      choice == 'light'
        ? 'https://committed.software/Committed_Dark.svg'
        : 'https://committed.software/Committed_Light.svg'
    return <img width="128px" src={logo} alt="Committed Logo" />
  }

  const Footer = () => (
    <Row
      p={3}
      position="absolute"
      bottom="0"
      width="100%"
      height={footerHeight}
      justifyContent="space-around"
      bgcolor="primary.main"
      color="primary.contrastText"
    >
      <Column justifyContent="center" alignItems="center">
        <Logo />
      </Column>
      <Column>
        <Heading.h5 mb={0}>Links</Heading.h5>
        <Link color="inherit">Work</Link>
        <Link color="inherit">Blog</Link>
        <Link color="inherit">Careers</Link>
        <Link color="inherit">Contact</Link>
      </Column>
      <Column>
        <Flex p={3}>
          <Box p={1} color="secondary.dark">
            <CallSharp />
          </Box>
          <Text p={1}>(+44) 01242 220 347</Text>
        </Flex>
        <Flex p={3}>
          <Box p={1} color="secondary.dark">
            <EmailSharp />
          </Box>
          <Text p={1}>contct@committed.io</Text>
        </Flex>
      </Column>
      <Column>
        <Heading.h5 mb={0}>Address</Heading.h5>
        <Text>3 Strand Court</Text>
        <Text>Bath Road</Text>
        <Text>Cheltenham</Text>
        <Text>Gloucestershire</Text>
        <Text>GL53 7LW</Text>
      </Column>
    </Row>
  )

  return (
    <ThemeProvider>
      <Box position="relative" maxHeight="80vh" bgcolor="background.paper">
        <Box pb={footerHeight} maxHeight="80vh" overflow={'scroll'}>
          <Header />
          <Content />
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  )
}
