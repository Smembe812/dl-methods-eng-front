import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import {
  NavLink,
} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    AppBar:{
      zIndex: 1230
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    toolbar: {
      background: 'white',
      color: "black",
    },
  }));

function Header ({args: {classArgs}}){
    const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.AppBar}>
        <Toolbar className={classes.toolbar}>
          <NavLink to="/" className="logo-link">
            <IconButton edge="start" className={`${classes.menuButton} logo-button`} color="inherit" aria-label="menu">
              DL
            </IconButton>
          </NavLink>
            Design Methodologies & Guidelines
        </Toolbar>
      </AppBar>
    </div>
  );
}


export default Header