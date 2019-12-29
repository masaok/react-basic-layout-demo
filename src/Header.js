import React from "react"

import { makeStyles } from "@material-ui/core/styles"

import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.common.white
  },
  appBar: {
    top: 0
  }
}))

const Header = props => {
  const classes = useStyles(props)
  return (
    // https://stackoverflow.com/questions/52653103/what-is-appbar-vs-toolbar
    <AppBar className={classes.appBar}>
      <Toolbar>
        <div>THIS IS THE HEADER</div>
      </Toolbar>
    </AppBar>
  )
}

export default Header