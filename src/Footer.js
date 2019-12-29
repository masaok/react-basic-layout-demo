import React from "react"

import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"

import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.common.white
  },
  appBar: {
    top: "auto",
    bottom: 0
  }
}))

const Footer = props => {
  const classes = useStyles(props)

  return (
    // https://stackoverflow.com/questions/52653103/what-is-appbar-vs-toolbar
    <AppBar position="fixed" color="primary" className={classes.appBar}>
      <Toolbar>
        <div>THIS IS THE FOOTER</div>
      </Toolbar>
    </AppBar>
  )
}

export default Footer
