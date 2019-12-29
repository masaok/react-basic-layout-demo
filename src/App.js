import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import logo from "./logo.svg"
import "./App.css"

import { CssBaseline } from "@material-ui/core"
import { ThemeProvider } from "@material-ui/styles"
import { makeStyles, createMuiTheme } from "@material-ui/core/styles"

import Header from "./Header"
import Footer from "./Footer"

// Override the default MUI theme: https://material-ui.com/customization/default-theme/
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#0087be" // dull blue
    }
  }
})

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    minHeight: "100vh"
  }
}))

// function App() {
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

            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React
                </a>
              </header>
            </div>

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
