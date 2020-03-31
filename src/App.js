import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Header from './components/header'
import Drawer from '@material-ui/core/Drawer';
import TechniquesPage from './pages'
import SidebarMenu from './components/SidebarMenu'
import List from '@material-ui/core/List';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import './App.css'
import TechniqueArticle from './components/TechniqueBody/article';


const routes = [
  // {
  //   path: "/techiniques",
  //   component: TechniqueArticle
  // },
  {
    path: "/techniques",
    component: TechniquesPage,
  },
  // {
  //   path: "/tacos",
  //   component: Tacos,
  //   routes: [
  //     {
  //       path: "/tacos/bus",
  //       component: Bus
  //     },
  //     {
  //       path: "/tacos/cart",
  //       component: Cart
  //     }
  //   ]
  // }
];

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: (theme.zIndex.drawer),
  },
  drawer: {
    width: '300px',
    flexShrink: 0,
  },
  drawerPaper: {
    width: '300px',
  },
  content: {
    padding: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar,
}));

function App() {
  const classes = useStyles();
  
  const sidebarContent = [
      'Processes', 
      'Process Elements', 
      'Techniques', 
      'Experiences'
  ]

  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline/>
        <Header args={{classArgs: classes}}/>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.toolbar} />
            <SidebarMenu data={sidebarContent}/>
      </Drawer>
        <Switch>
            {routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))}
        </Switch>
      </div>
    </Router>
  )
}


function RouteWithSubRoutes(route) {

  console.log(route.path)
  return (
    <>
      <Route
        path={route.path}
        render={props => (
          // pass the sub-routes down to keep nesting
          <route.component {...props} routes={route.routes} />
        )}
      />
    </>
  );
}

export default App;
