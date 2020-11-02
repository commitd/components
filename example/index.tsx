import 'react-app-polyfill/ie11'
import './main.css'
import 'typeface-lato'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as C from '../dist'
import { useThemeController } from '../dist'
import CallSharp from '@material-ui/icons/CallSharp'
import EmailSharp from '@material-ui/icons/EmailSharp'
import logoLight from './images/Committed - Yellow Trans-128px.png'
import logoDark from './images/Committed - Black-128px.png'

const footerHeight = '200px'

const Header = () => (
  <C.AppBar position="relative">
    <C.Toolbar>
      <C.Box flexGrow={1}>
        <C.Heading.h1>Example</C.Heading.h1>
      </C.Box>
      <C.Avatar src="https://i.pravatar.cc/40" />
      <C.ThemeSwitch variant="celestial" />
      <C.Button color="inherit" variant="text">
        Logout
      </C.Button>
    </C.Toolbar>
  </C.AppBar>
)

const Post = ({ name, index }: { name: string; index: number }) => (
  <C.Card m={5} p={0}>
    <C.Flex
      flexDirection="column"
      bgcolor="primary.main"
      color="secondary.dark"
    >
      <img src={`https://picsum.photos/300/200?random=${index}`} />
      <C.CardActionArea>
        <C.Box mt={0} p={2} pb={3}>
          <C.Text bold upper>
            {name}
          </C.Text>
        </C.Box>
      </C.CardActionArea>
    </C.Flex>
  </C.Card>
)

const Content = () => (
  <C.Container>
    <C.Display.d1 p={4} align="center">
      Our work and Open Source
    </C.Display.d1>
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
        'Baleen',
      ].map((name, index) => (
        <Post key={name} name={name} index={index} />
      ))}
    </C.Flex>
    <C.Box mb={5}>
      <C.Loader size={128} />
    </C.Box>
  </C.Container>
)

const Logo = () => {
  const [choice] = useThemeController()
  const logo = choice == 'light' ? logoLight : logoDark
  return <img width="128px" src={logo} alt="Committed Logo" />
}

const Footer = () => (
  <C.Row
    p={3}
    position="absolute"
    bottom="0"
    width="100%"
    height={footerHeight}
    justifyContent="space-around"
    bgcolor="primary.main"
    color="primary.contrastText"
  >
    <C.Column justifyContent="center" alignItems="center">
      <Logo />
    </C.Column>
    <C.Column>
      <C.Heading.h5 mb={0}>Links</C.Heading.h5>
      <C.Link color="inherit">Work</C.Link>
      <C.Link color="inherit">Blog</C.Link>
      <C.Link color="inherit">Careers</C.Link>
      <C.Link color="inherit">Contact</C.Link>
    </C.Column>
    <C.Column>
      <C.Flex p={3}>
        <C.Box p={1} color="secondary.dark">
          <CallSharp />
        </C.Box>
        <C.Text p={1}>(+44) 01242 220 347</C.Text>
      </C.Flex>
      <C.Flex p={3}>
        <C.Box p={1} color="secondary.dark">
          <EmailSharp />
        </C.Box>
        <C.Text p={1}>contct@committed.io</C.Text>
      </C.Flex>
    </C.Column>
    <C.Column>
      <C.Heading.h5 mb={0}>Address</C.Heading.h5>
      <C.Text>3 Strand Court</C.Text>
      <C.Text>Bath Road</C.Text>
      <C.Text>Cheltenham</C.Text>
      <C.Text>Gloucestershire</C.Text>
      <C.Text>GL53 7LW</C.Text>
    </C.Column>
  </C.Row>
)

const App = () => (
  <C.ThemeProvider
    createFonts={() =>
      Object.assign(C.fonts.defaultFonts, {
        typography: { fontFamily: 'Lato' },
        display: { fontFamily: 'Arciform' },
      })
    }
  >
    <C.Box position="relative" minHeight="100vh" bgcolor="background.paper">
      <C.Box pb={footerHeight}>
        <Header />
        <Content />
      </C.Box>
      <Footer />
    </C.Box>
  </C.ThemeProvider>
)

ReactDOM.render(<App />, document.getElementById('root'))
