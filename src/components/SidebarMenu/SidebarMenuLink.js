import React from 'react';

import {
    NavLink,
    useRouteMatch
  } from "react-router-dom";

function SidebarMenuLink({ title, to, activeOnlyWhenExact, ...otherProps }) {
    let match = useRouteMatch({
      path: to,
      exact: activeOnlyWhenExact
    });
  
    return (
      <li className={match ? "toc__item toc__item--active" : "toc__item"}>
        <NavLink 
            className="toc__a" 
            activeClassName="toc__a--active" 
            to={to}
            {...otherProps}
        >
            {title}       
        </NavLink>
      </li>
    );
  }

export default SidebarMenuLink