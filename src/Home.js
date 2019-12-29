import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

// import logo from './logo.svg'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    // flexGrow: 1,
    color: theme.palette.common.white,
    backgroundColor: '#282c34',
    textAlign: 'center',
    fontSize: 20,
    // minHeight: '100vh',
    height: 'calc(100vh - 64px)',
    alignItems: 'center'
    // justifyContent: 'center'
  },
  appBar: {
    top: 0
  }
}))

const rows = []
for (var i = 0; i < 100; i++) {
  rows.push(<div>test vertical scroll {i}</div>)
}

const Home = props => {
  const classes = useStyles(props)
  return (
    <div className={classes.root}>
      {/* <img src={logo} className="App-logo" alt="logo" />
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
      </a> */}
      {rows}
    </div>
  )
}

export default Home
