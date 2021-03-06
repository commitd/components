import React from 'react'
import * as C from '../../src'
import { Icons } from '../util/Icons'
import commmitImage from '../../public/images/Avatar1-YellowTrans-32px.png'

export const Overview = () => (
  <>
    <C.Caption>
      <C.Link href="/components/?path=/docs/components-button--default-story">
        Buttons
      </C.Link>
    </C.Caption>
    <C.Column flexWrap="wrap">
      <C.Card
        display="flex"
        flexGrow={1}
        p={3}
        m={1}
        justifyContent="space-evenly"
      >
        <C.Column>
          <C.Button m={3}>Default</C.Button>
          <C.Button m={3} color="primary">
            Primary
          </C.Button>
          <C.Button m={3} color="secondary">
            Secondary
          </C.Button>
        </C.Column>
        <C.Column>
          <C.Button m={3} variant="outlined">
            Default
          </C.Button>
          <C.Button m={3} variant="outlined" color="primary">
            Primary
          </C.Button>
          <C.Button m={3} variant="outlined" color="secondary">
            Secondary
          </C.Button>
        </C.Column>
        <C.Column>
          <C.Button m={3} variant="text">
            Default
          </C.Button>
          <C.Button m={3} variant="text" color="primary">
            Primary
          </C.Button>
          <C.Button m={3} variant="text" color="secondary">
            Secondary
          </C.Button>
        </C.Column>
        <C.Column>
          <C.Button disabled={true} m={3}>
            Default
          </C.Button>
          <C.Button disabled={true} m={3} color="primary">
            Primary
          </C.Button>
          <C.Button disabled={true} m={3} color="secondary">
            Secondary
          </C.Button>
        </C.Column>
      </C.Card>
      <C.Caption>
        <C.Link href="/components/?path=/docs/components-iconbutton--default-story">
          Icon Buttons
        </C.Link>
      </C.Caption>
      <C.Card
        display="flex"
        flexGrow={1}
        p={3}
        m={1}
        justifyContent="space-evenly"
      >
        <C.IconButton aria-label="delete">
          <Icons.Delete />
        </C.IconButton>
        <C.IconButton aria-label="delete" disabled color="primary">
          <Icons.Delete />
        </C.IconButton>
        <C.IconButton color="secondary" aria-label="add an alarm">
          <Icons.Alarm />
        </C.IconButton>
        <C.IconButton color="primary" aria-label="add to shopping cart">
          <Icons.AddShoppingCart />
        </C.IconButton>
      </C.Card>
      <C.Caption>
        <C.Link href="/components/?path=/docs/components-badge--default-story">
          Badges
        </C.Link>
      </C.Caption>
      <C.Card
        display="flex"
        flexGrow={1}
        p={3}
        pt={4}
        m={1}
        justifyContent="space-evenly"
      >
        <C.Badge badgeContent={'default'}>
          <C.IconButton>
            <Icons.Mail />
          </C.IconButton>
        </C.Badge>
        <C.Badge color="primary" badgeContent={4}>
          <C.IconButton>
            <Icons.Mail />
          </C.IconButton>
        </C.Badge>
        <C.Badge color="secondary" badgeContent={87}>
          <C.IconButton>
            <Icons.Mail />
          </C.IconButton>
        </C.Badge>
        <C.Badge color="error" badgeContent={1000}>
          <C.IconButton>
            <Icons.Mail />
          </C.IconButton>
        </C.Badge>
      </C.Card>
    </C.Column>
    <C.Caption>
      <C.Link href="/components/?path=/docs/components-avatar--default-story">
        Avatars
      </C.Link>
    </C.Caption>
    <C.Card
      display="flex"
      flexGrow={1}
      p={3}
      pt={4}
      m={1}
      justifyContent="space-evenly"
    >
      <C.Avatar m={1} bgcolor="primary.main" color="primary.contrastText">
        CF
      </C.Avatar>
      <C.Avatar m={1} bgcolor="secondary.main" color="secondary.contrastText">
        SH
      </C.Avatar>
      <C.Avatar m={1}>
        <Icons.Folder />
      </C.Avatar>
      <C.Avatar m={1} bgcolor="black" color="white">
        <Icons.Pageview />
      </C.Avatar>
      <C.Avatar m={1} bgcolor="primary.light" color="text.primary">
        <Icons.Assignment />
      </C.Avatar>
    </C.Card>
    <C.Caption>
      <C.Link href="/components/?path=/docs/components-chip--default-story">
        Chips
      </C.Link>
    </C.Caption>
    <C.Card
      display="flex"
      flexGrow={1}
      p={3}
      m={1}
      justifyContent="space-evenly"
    >
      <C.Chip
        avatar={<C.Avatar src={commmitImage} />}
        label="Chip"
        onDelete={() => {}}
      />
      <C.Chip label="Chip" />
      <C.Chip
        icon={<Icons.Face />}
        label="Chip"
        onClick={() => {}}
        onDelete={() => {}}
        color="primary"
      />
      <C.Chip
        variant="outlined"
        icon={<Icons.AccountCircle />}
        label="Chip"
        onClick={() => {}}
        color="secondary"
      />
    </C.Card>
    <C.Caption>
      <C.Link href="/components/?path=/docs/components-textfield--simple">
        Text Fields
      </C.Link>
    </C.Caption>
    <C.Card
      display="flex"
      flexGrow={1}
      p={3}
      pt={4}
      m={1}
      justifyContent="space-evenly"
    >
      {React.createElement(() => {
        const currencies = [
          {
            value: 'USD',
            label: '$',
          },
          {
            value: 'EUR',
            label: '€',
          },
          {
            value: 'BTC',
            label: '฿',
          },
          {
            value: 'JPY',
            label: '¥',
          },
        ]
        const [values, setValues] = React.useState({
          name: 'Cat in the Hat',
          age: '',
          multiline: 'Controlled',
          currency: 'EUR',
        })
        const handleChange = (name: string) => (
          event: React.ChangeEvent<HTMLInputElement>
        ) => setValues({ ...values, [name]: event.target.value })
        return (
          <C.Form noValidate autoComplete="off">
            <C.Flex flexWrap="wrap" alignContent="space-between">
              <C.TextField
                flexGrow={1}
                m={3}
                id="standard-name"
                label="Name"
                value={values.name}
                onChange={handleChange('name')}
              />
              <C.TextField
                flexGrow={1}
                m={3}
                id="standard-uncontrolled"
                label="Uncontrolled"
                defaultValue="foo"
              />
              <C.TextField
                flexGrow={1}
                m={3}
                required
                id="standard-required"
                label="Required"
                defaultValue="Hello World"
              />
              <C.TextField
                flexGrow={1}
                m={3}
                error
                id="standard-error"
                label="Error"
                defaultValue="Hello World"
              />
              <C.TextField
                flexGrow={1}
                m={3}
                disabled
                id="standard-disabled"
                label="Disabled"
                defaultValue="Hello World"
              />
              <C.TextField
                flexGrow={1}
                m={3}
                id="standard-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
              />
              <C.TextField
                flexGrow={1}
                m={3}
                id="standard-multiline-flexible"
                label="Multiline"
                multiline
                rowsMax="4"
                value={values.multiline}
                onChange={handleChange('multiline')}
              />
              <C.TextField
                flexGrow={1}
                m={3}
                id="standard-multiline-static"
                label="Multiline"
                multiline
                rows="4"
                defaultValue="Default Value"
              />
              <C.TextField
                flexGrow={1}
                m={3}
                id="standard-read-only-input"
                label="Read Only"
                defaultValue="Hello World"
                InputProps={{
                  readOnly: true,
                }}
              />
              <C.TextField
                flexGrow={1}
                m={3}
                id="standard-helperText"
                label="Helper text"
                defaultValue="Default Value"
                helperText="Some important text"
              />
              <C.TextField
                flexGrow={1}
                m={3}
                id="standard-number"
                label="Number"
                value={values.age}
                onChange={handleChange('age')}
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <C.TextField
                flexGrow={1}
                m={3}
                id="standard-select-currency"
                select
                label="Select"
                value={values.currency}
                onChange={handleChange('currency')}
                helperText="Please select your currency"
              >
                {currencies.map((option) => (
                  <C.MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </C.MenuItem>
                ))}
              </C.TextField>
              <C.TextField
                flexGrow={1}
                m={3}
                id="standard-select-currency-native"
                select
                label="Native select"
                value={values.currency}
                onChange={handleChange('currency')}
                SelectProps={{
                  native: true,
                }}
                helperText="Please select your currency"
              >
                {currencies.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </C.TextField>
            </C.Flex>
          </C.Form>
        )
      })}
    </C.Card>
    <C.Caption>
      <C.Link href="/components/?path=/docs/components-checkbox--default-story">
        Checkbox
      </C.Link>
      ,{' '}
      <C.Link href="/components/?path=/docs/components-radio--default-story">
        Radio
      </C.Link>{' '}
      and{' '}
      <C.Link href="/components/?path=/docs/components-switch--default-story">
        Switch
      </C.Link>
    </C.Caption>
    {React.createElement(() => {
      const [checked, setChecked] = React.useState(true)
      return (
        <C.Card
          display="flex"
          flexGrow={1}
          p={3}
          pt={4}
          m={1}
          justifyContent="space-evenly"
        >
          <C.Column justifyContent="center">
            <C.Checkbox
              checked={checked}
              onChange={(event) => setChecked(event.target.checked)}
              color="primary"
            />
            <C.Checkbox
              checked={!checked}
              onChange={(event) => setChecked(!event.target.checked)}
              color="secondary"
            />
          </C.Column>
          <C.Column justifyContent="center">
            <C.Radio
              checked={checked}
              onChange={(event) => setChecked(event.target.checked)}
              color="primary"
            />
            <C.Radio
              checked={!checked}
              onChange={(event) => setChecked(!event.target.checked)}
              color="secondary"
            />
          </C.Column>
          <C.Column justifyContent="center">
            <C.Switch
              checked={checked}
              onChange={(event) => setChecked(event.target.checked)}
              color="primary"
            />
            <C.Switch
              checked={!checked}
              onChange={(event) => setChecked(!event.target.checked)}
              color="secondary"
            />
          </C.Column>
        </C.Card>
      )
    })}
    <C.Caption>
      <C.Link href="/components/?path=/docs/components-slider--default-story">
        Slider
      </C.Link>
    </C.Caption>
    <C.Card
      display="flex"
      flexGrow={1}
      flexDirection="column"
      p={3}
      pt={4}
      m={1}
    >
      <C.Slider m={3} flexGrow={1} aria-labelledby="continuous-slider" />
      <C.Slider
        m={3}
        flexGrow={1}
        defaultValue={80}
        step={10}
        valueLabelDisplay="on"
      />
      <C.Slider m={3} flexGrow={1} value={30} disabled={true} />
    </C.Card>
    <C.Caption>
      <C.Link href="/components/?path=/docs/components-list--default-story">
        Lists
      </C.Link>
    </C.Caption>
    <C.Card
      display="flex"
      flexGrow={1}
      flexDirection="column"
      p={3}
      pt={4}
      m={1}
    >
      <C.Box minWidth={500} m={3} bgcolor="background.paper">
        <C.List component="nav" aria-label="main mailbox folders">
          <C.ListItem button>
            <C.ListItemIcon>
              <Icons.Inbox />
            </C.ListItemIcon>
            <C.ListItemText primary="Inbox" />
          </C.ListItem>
          <C.ListItem button>
            <C.ListItemIcon>
              <Icons.Drafts />
            </C.ListItemIcon>
            <C.ListItemText primary="Drafts" />
          </C.ListItem>
        </C.List>
        <C.Divider />
        <C.List component="nav" aria-label="secondary mailbox folders">
          <C.ListItem button>
            <C.ListItemText primary="Trash" />
          </C.ListItem>
          <C.ListItem button>
            <C.ListItemText primary="Spam" />
          </C.ListItem>
        </C.List>
      </C.Box>
    </C.Card>
    <C.Card
      display="flex"
      flexGrow={1}
      flexDirection="column"
      p={3}
      pt={4}
      m={1}
    >
      <C.Box minWidth={500} m={3} bgcolor="background.paper">
        <C.List>
          {['18 June 2014', '20 July 2015', '3 January 2018'].map(
            (item, index) => (
              <C.ListItem key={index} role={undefined} dense button>
                <C.ListItemIcon>
                  <C.Checkbox
                    edge="start"
                    tabIndex={-1}
                    disableRipple
                    inputProps={{
                      'aria-labelledby': '1',
                    }}
                  />
                </C.ListItemIcon>
                <C.ListItemText
                  id={'' + index}
                  primary={`Line item ${index + 1}`}
                  secondary={item}
                />
                <C.ListItemSecondaryAction>
                  <C.IconButton edge="end">
                    <Icons.Comment />
                  </C.IconButton>
                </C.ListItemSecondaryAction>
              </C.ListItem>
            )
          )}
        </C.List>
      </C.Box>
    </C.Card>
    <C.Caption>
      <C.Link href="/components/?path=/docs/components-card--default-story">
        Cards
      </C.Link>
    </C.Caption>
    <C.Card display="flex" flexGrow={1} flexWrap="wrap" p={3} pt={4} m={1}>
      <C.Card m={3} elevation={3}>
        <C.Box height={100} bgcolor="primary.main" />
        <C.CardHeader bgcolor="primary.main" color="primary.contrastText">
          Committed Card
        </C.CardHeader>
        <C.CardContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Id nibh
          tortor id aliquet lectus. Feugiat nibh sed pulvinar proin gravida
          hendrerit lectus. Facilisis magna etiam tempor orci eu lobortis
          elementum.
        </C.CardContent>
        <C.CardActions>
          <C.Button color="primary" variant="text">
            Yes
          </C.Button>
          <C.Button color="primary" variant="text">
            No
          </C.Button>
        </C.CardActions>
      </C.Card>
      <C.Card m={3} elevation={6}>
        <C.CardHeader bgcolor="secondary.main" color="secondary.contrastText">
          Card
        </C.CardHeader>
        <C.CardActions>
          <C.Checkbox
            icon={
              <Icons.FavoriteBorder style={{ color: C.colors.grey[600] }} />
            }
            checkedIcon={<Icons.Favorite style={{ color: 'red' }} />}
          />
          <C.Checkbox
            icon={
              <Icons.BookmarkBorder style={{ color: C.colors.grey[600] }} />
            }
            checkedIcon={
              <Icons.Bookmark style={{ color: C.colors.lightBlue[400] }} />
            }
          />
          <C.IconButton>
            <Icons.Share />
          </C.IconButton>
        </C.CardActions>
      </C.Card>
      <C.Card elevation={8}>
        <C.Flex>
          <C.CardContent>
            <C.Heading.h5 mb={1}>Title</C.Heading.h5>
            <C.Subheading.h5 mt={0} mb={2} color="textSecondary">
              Subtitle
            </C.Subheading.h5>
            <C.Flex alignItems="center" p={3}>
              <C.IconButton size="small">
                <Icons.SkipPrevious fontSize="small" />
              </C.IconButton>
              <C.IconButton>
                <Icons.PlayArrow fontSize="large" />
              </C.IconButton>
              <C.IconButton size="small">
                <Icons.SkipNext fontSize="small" />
              </C.IconButton>
            </C.Flex>
          </C.CardContent>
          <C.CardMedia
            width="200px"
            height="200px"
            image="https://picsum.photos/id/645/200/200"
            title="Picsum"
          />
        </C.Flex>
      </C.Card>
    </C.Card>
    <C.Caption>
      <C.Link href="/components/?path=/docs/components-table--default-story">
        Tables
      </C.Link>
    </C.Caption>
    <C.Card
      display="flex"
      flexGrow={1}
      flexDirection="column"
      p={3}
      pt={4}
      m={1}
    >
      <C.Box m={2} p={3} bgcolor="background.paper">
        <C.Table>
          <C.TableHead>
            <C.TableRow>
              <C.TableCell>Dessert (100g serving)</C.TableCell>
              <C.TableCell align="right">Calories</C.TableCell>
              <C.TableCell align="right">Fat&nbsp;(g)</C.TableCell>
              <C.TableCell align="right">Carbs&nbsp;(g)</C.TableCell>
              <C.TableCell align="right">Protein&nbsp;(g)</C.TableCell>
            </C.TableRow>
          </C.TableHead>
          <C.TableBody>
            {[
              ['Frozen yoghurt', 159, 6.0, 24, 4.0],
              ['Ice cream sandwich', 237, 9.0, 37, 4.3],
              ['Eclair', 262, 16.0, 24, 6.0],
              ['Cupcake', 305, 3.7, 67, 4.3],
              ['Gingerbread', 356, 16.0, 49, 3],
            ].map((row) => (
              <C.TableRow key={row[0]}>
                <C.TableCell component="th" scope="row">
                  {row[0]}
                </C.TableCell>
                <C.TableCell align="right">{row[1]}</C.TableCell>
                <C.TableCell align="right">{row[2]}</C.TableCell>
                <C.TableCell align="right">{row[3]}</C.TableCell>
                <C.TableCell align="right">{row[4]}</C.TableCell>
              </C.TableRow>
            ))}
          </C.TableBody>
        </C.Table>
      </C.Box>
    </C.Card>
    <C.Caption>
      <C.Link href="/components/?path=/docs/components-tabs--appbar">
        Tabs
      </C.Link>
    </C.Caption>
    <C.Card
      display="flex"
      flexGrow={1}
      flexDirection="column"
      p={3}
      pt={4}
      m={1}
    >
      {React.createElement(() => {
        const [value, setValue] = React.useState(0)
        function handleChange(
          _event: React.ChangeEvent<HTMLInputElement>,
          newValue: number
        ) {
          setValue(newValue)
        }
        return (
          <C.Box>
            <C.AppBar position="static">
              <C.Tabs
                value={value}
                onChange={handleChange}
                aria-label="simple tabs example"
              >
                <C.Tab label="Item One" />
                <C.Tab label="Item Two" />
                <C.Tab label="Item Three" />
              </C.Tabs>
            </C.AppBar>
            <C.TabPanel p={3} selected={value} index={0}>
              Item One
            </C.TabPanel>
            <C.TabPanel p={3} selected={value} index={1}>
              Item Two
            </C.TabPanel>
            <C.TabPanel p={3} selected={value} index={2}>
              Item Three
            </C.TabPanel>
          </C.Box>
        )
      })}
    </C.Card>
    <C.Caption>
      <C.Link href="/components/?path=/docs/design-system-typography--typography">
        Typography
      </C.Link>
    </C.Caption>
    <C.Card display="flex" flexGrow={1} p={3} pt={4} m={1}>
      <C.Box width={1 / 2}>
        <C.Typography>System Typography</C.Typography>
        <C.Heading.h2 gutterBottom>h2. Heading</C.Heading.h2>
        <C.Heading.h3 gutterBottom>h3. Heading</C.Heading.h3>
        <C.Heading.h4 gutterBottom>h4. Heading</C.Heading.h4>
        <C.Subheading.h3 gutterBottom>
          subheading. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Quos blanditiis tenetur
        </C.Subheading.h3>
        <C.Typography variant="body1" gutterBottom>
          body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur.
        </C.Typography>
        <C.Typography variant="body2" gutterBottom>
          body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur.
        </C.Typography>
      </C.Box>
      <C.Box width={1 / 2}>
        <C.Text>Disply Typography</C.Text>
        <C.Display.d1 gutterBottom>d1. Heading</C.Display.d1>
        <C.Display.d2 gutterBottom>d2. Heading</C.Display.d2>
        <C.Text gutterBottom>
          Text. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur.
        </C.Text>
        <C.Monospace wrap>
          Monospace. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur.
        </C.Monospace>
      </C.Box>
    </C.Card>
  </>
)
