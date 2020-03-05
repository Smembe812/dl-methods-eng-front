import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
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
      color: "black"
    }
  }));

function Header ({args: {classArgs}}){
    const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.AppBar}>
        <Toolbar className={classes.toolbar}>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            DL
          </IconButton>
            Design Methodology
        </Toolbar>
      </AppBar>
    </div>
  );
}


export default Header