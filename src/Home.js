import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

import logo from './logo.svg'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    color: theme.palette.common.white,
    backgroundColor: '#282c34',
    textAlign: 'center',
    fontSize: 12,
    minHeight: '100vh',
    alignItems: 'center',
    justifyContent: 'center'
  },
  appBar: {
    top: 0
  }
}))

const Home = props => {
  const classes = useStyles(props)
  return (
    <div className={classes.root}>
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
      <div>more stuff to test vertical scroll</div>
      <div>more stuff to test vertical scroll</div>
      <div>more stuff to test vertical scroll</div>
      <div>more stuff to test vertical scroll</div>
      <div>more stuff to test vertical scroll</div>
      <div>more stuff to test vertical scroll</div>
      <div>more stuff to test vertical scroll</div>
      <div>more stuff to test vertical scroll</div>
      <div>more stuff to test vertical scroll</div>
      <div>more stuff to test vertical scroll</div>
      <div>more stuff to test vertical scroll</div>
      <div>more stuff to test vertical scroll</div>
      <div>more stuff to test vertical scroll</div>
      <div>more stuff to test vertical scroll</div>
    </div>
  )
}

export default Home
