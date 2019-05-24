import React from "react";
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Thypography from "@material-ui/core/Typography"

const NavBar = () => {
  return(
    <div>
      <AppBar position ="static">
        <Toolbar>
          <Thypography variant="title" color="inherit">
            Home
          </Thypography>
        </Toolbar>
      </AppBar>

    </div>
  )
}
export default NavBar;
