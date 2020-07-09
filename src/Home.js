import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

// import logo from './logo.svg'

import { boldStuffStyle } from './constants'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.dark,
    textAlign: 'center',
    fontSize: 20,
    alignItems: 'center',
  },

  appBar: {
    top: 0,
  },

  someStuff: boldStuffStyle(theme),
}))

const rows = []
for (var i = 1; i <= 100; i++) {
  rows.push(<div>test vertical scroll {i}</div>)
}

const Home = props => {
  const classes = useStyles(props)
  return (
    <div className={classes.root}>
      <div className={classes.someStuff}>This stuff should be bold</div>
      {rows}
    </div>
  )
}

export default Home
