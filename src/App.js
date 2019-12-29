import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css' // using CSS directly, instead of JSS

import { CssBaseline } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import { makeStyles, createMuiTheme } from '@material-ui/core/styles'

import Header from './Header'
import Home from './Home'
import Footer from './Footer'

// const contentViewportHeight = theme => 'calc(100vh - 64px - 64px)'

// Override the default MUI theme:
// https://material-ui.com/customization/default-theme/
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0087be', // dull blue
      dark: '#282c34' // React default dark background
    }
  }
})

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    minHeight: '100vh',
    backgroundColor: '#0087be'
  },

  content: {
    // backgroundColor: theme.palette.primary.dark,
    backgroundColor: '#282c34', // default overrides don't work here?
    display: 'flex',
    flexGrow: 1,

    // Position fixed tip: https://stackoverflow.com/a/4069794
    position: 'fixed',
    top: theme.spacing(8),
    bottom: 64,
    width: '100vw',
    justifyContent: 'center',
    overflowX: 'hidden'
  }
}))

const App = props => {
  const classes = useStyles(props)

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <div className={classes.root}>
            <Switch>
              <Route component={Header} />
            </Switch>

            <main className={classes.content}>
              <Switch>
                <Route component={Home} />
              </Switch>
            </main>

            <Switch>
              <Route component={Footer} />
            </Switch>
          </div>
        </Router>
      </ThemeProvider>
    </React.Fragment>
  )
}

export default App
