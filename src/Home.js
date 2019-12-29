import React from "react"

import { makeStyles } from "@material-ui/core/styles"

import logo from "./logo.svg"

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.common.white
  },
  appBar: {
    top: 0
  }
}))

const Home = props => {
  const classes = useStyles(props)
  return (
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
        <div className={classes.root}>more stuff</div>
        <div>more stuff to test vertical scroll</div>
        <div>more stuff to test vertical scroll</div>
        <div>more stuff to test vertical scroll</div>
        <div>more stuff to test vertical scroll</div>
        <div>more stuff to test vertical scroll</div>
        <div>more stuff to test vertical scroll</div>
        <div>more stuff to test vertical scroll</div>
        <div>more stuff to test vertical scroll</div>
      </header>
    </div>
  )
}

export default Home
