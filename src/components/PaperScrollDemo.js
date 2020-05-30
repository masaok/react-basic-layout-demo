import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

// import logo from './logo.svg'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.dark,
    textAlign: 'center',
    fontSize: 20,
    alignItems: 'center'
  },
  appBar: {
    top: 0
  }
}))

const rows = []
for (var i = 1; i <= 100; i++) {
  rows.push(<div>test vertical scroll {i}</div>)
}

const PaperScrollDemo = (props) => {
  const classes = useStyles(props)
  return (
    <div className={classes.root}>
      <Paper>{rows}</Paper>
    </div>
  )
}

export default PaperScrollDemo
