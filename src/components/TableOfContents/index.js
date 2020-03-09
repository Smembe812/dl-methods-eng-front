import React, {useState} from 'react';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import './toc.css'

const useStyles = makeStyles({
  root: {
    width: 230,
  },
});



function TableOfContents() {
  const classes = useStyles();

  const handleOnClick = (e) => {
    const className = "toc__a toc__a--active"
    e.target.className = className
    return className
  }

  const handleOnBlur = (e) => {
    const className = "toc__a"
    e.target.className = className
    return className
  }

  return (
      // <MenuList>
      //   <MenuItem>
      //       Description
      //   </MenuItem>
      //   <MenuItem>
      //       Motivation
      //   </MenuItem>
      //   <MenuItem>
      //       Steps
      //   </MenuItem>
      //   <MenuItem>
      //     Related to
      //   </MenuItem>
      //   <MenuItem>
      //     Resources
      //   </MenuItem>
      // </MenuList>
      <ul className="toc">
        <li>
          <a href="#description" className="toc__a" onClick={handleOnClick}>Description</a>
            <ul className="toc">
              <li >
                <a href="#introduction" className="toc__a">Description</a>
              </li>
              <li>
                  <a href="#introduction" className="toc__a">Motivation</a>
              </li>
            </ul>
        </li>
        <li>
        <a href="#motivation" className="toc__a">Motivation</a>
            
        </li>
        <li>
          <a href="#steps" className="toc__a">Steps</a>
        </li>
        <li>
        <a href="#related-to" className="toc__a">Related to</a>
        </li>
        <li>
          <a href="#resources" className="toc__a">Resources</a>
        </li>
      </ul>
  );
}

export default TableOfContents