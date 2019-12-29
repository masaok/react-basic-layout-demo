import React from "react"

import { makeStyles } from "@material-ui/core/styles"

import Toolbar from "@material-ui/core/Toolbar"

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.main
  },
  footer: {}
}))

const Footer = props => {
  const classes = useStyles(props)

  // AppBar creates a "header" basic HTML tag, which doesn't make sense for the footer
  return <Toolbar className={classes.root}>THIS IS THE FOOTER</Toolbar>
}

export default Footer
