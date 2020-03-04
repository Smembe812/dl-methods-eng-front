import React from 'react';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: 230,
  },
});

export default function TableOfContents() {
  const classes = useStyles();

  return (
      <MenuList>
        <MenuItem>
            Description
        </MenuItem>
        <MenuItem>
            Motivation
        </MenuItem>
        <MenuItem>
            Steps
        </MenuItem>
        <MenuItem>
          Related to
        </MenuItem>
        <MenuItem>
          Resources
        </MenuItem>
      </MenuList>
  );
}