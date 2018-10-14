import AppBar from "@material-ui/core/AppBar";
import React from "react";
import ToolBar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const Navbar = props => {
  return (
    <div>
      <AppBar position="static">
        <ToolBar>
          <Typography
            color="inherit"
            variant="title"
          >
            React & Material-UI Sample App
          </Typography>
        </ToolBar>
      </AppBar>
    </div>
  );
};

export default Navbar;
