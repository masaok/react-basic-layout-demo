import React from "react"

import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"

function Header() {
  return (
    // https://stackoverflow.com/questions/52653103/what-is-appbar-vs-toolbar
    <AppBar>
      <Toolbar>
        <div>THIS IS THE HEADER</div>
      </Toolbar>
    </AppBar>
  )
}

export default Header
