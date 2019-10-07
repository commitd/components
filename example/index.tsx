import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as C from '../dist'
import logo from './images/Committed - Yellow Trans-128px.png'

const footerHeight = '200px'

const Header = () => (
  <C.AppBar position="relative">
    <C.Toolbar>
      <C.Box flexGrow={1}>
        <C.Heading.h1>Example</C.Heading.h1>
      </C.Box>
      <C.Avatar src="https://i.pravatar.cc/40" />
      <C.Button color="inherit" variant="text">
        Logout
      </C.Button>
    </C.Toolbar>
  </C.AppBar>
)

const Post = ({ name, index }: { name: string; index: number }) => (
  <C.Card m={5} p={0}>
    <C.Flex flexDirection="column" bg="primary.main" color="secondary.main">
      <img src={`https://picsum.photos/300/200?random=${index}`} />
      <C.CardActionArea>
        <C.Box mt={0} p={2} pb={3}>
          <C.Text upper>{name}</C.Text>
        </C.Box>
      </C.CardActionArea>
    </C.Flex>
  </C.Card>
)

const Content = () => (
  <C.Container>
    <C.Display.d1 align="center">Our work and Open Source</C.Display.d1>
    <C.Text align="center">
      We believe we can all move forward faster by being open. Learn more about
      our contributions.
    </C.Text>
    <C.Divider my={3} />
    <C.Flex justifyContent="center" alignContent="center" flexWrap="wrap">
      {[
        'Speedy Spotless',
        'ARGA',
        'Eastern Galaxy',
        'Pribox',
        'Rejux',
        'Baleen'
      ].map((name, index) => (
        <Post name={name} index={index} />
      ))}
    </C.Flex>
    <C.Box mb={5}>
      <C.Loader size={128} />
    </C.Box>
  </C.Container>
)

const Footer = () => (
  <C.Flex
    p={3}
    position="absolute"
    bottom="0"
    width="100%"
    height={footerHeight}
    justifyContent="space-around"
    bgcolor="primary.main"
    color="white"
    component="footer"
  >
    <C.Flex flexDirection="column" justifyContent="center" alignItems="center">
      <img width="128px" src={logo} alt="Committed Logo" />
    </C.Flex>
    <C.Flex flexDirection="column">
      <C.Heading.h5 mb={0}>Links</C.Heading.h5>
      <C.Link color="inherit">Work</C.Link>
      <C.Link color="inherit">Blog</C.Link>
      <C.Link color="inherit">Careers</C.Link>
      <C.Link color="inherit">Contact</C.Link>
    </C.Flex>
    <C.Flex flexDirection="column">
      <C.Flex p={3}>
        <C.Box p={1} color="secondary.dark">
          <C.Icons.Call />
        </C.Box>
        <C.Text p={1}>(+44) 01242 220 347</C.Text>
      </C.Flex>
      <C.Flex p={3}>
        <C.Box p={1} color="secondary.dark">
          <C.Icons.Email />
        </C.Box>
        <C.Text p={1}>contct@committed.io</C.Text>
      </C.Flex>
    </C.Flex>
    <C.Flex flexDirection="column">
      <C.Heading.h5 mb={0}>Address</C.Heading.h5>
      <C.Text>3 Strand Court</C.Text>
      <C.Text>Bath Road</C.Text>
      <C.Text>Cheltenham</C.Text>
      <C.Text>Gloucestershire</C.Text>
      <C.Text>GL53 7LW</C.Text>
    </C.Flex>
  </C.Flex>
)

const App = () => (
  <C.ThemeProvider>
    <C.Box position="relative" minHeight="100vh">
      <C.Box pb={footerHeight} bg="background.default">
        <Header />
        <Content />
      </C.Box>
      <Footer />
    </C.Box>
  </C.ThemeProvider>
)

ReactDOM.render(<App />, document.getElementById('root'))
