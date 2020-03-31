import React, {useState} from 'react'
import Header from '../components/header'
import TableOfContents from '../components/TableOfContents'
import TechniqueBody from '../components/TechniqueBody'
import TechniqueArticle from '../components/TechniqueBody/article'
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText'
import TextEditor from '../components/EditorJS'
import EditorToJSX from '../components/EditorToJSX'
import SidebarMenu from '../components/SidebarMenu'

import {
  Switch,
  Route,
} from "react-router-dom";

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

const TechniquesPage = ({routes}) => {
  const classes = useStyles();
  const [inputData, saveInputData] = useState({})

  return (
    <div className="grid" style={{width: '100%'}}>
      <main className={`grid__col-12 ${classes.content}`}>
        <div className={classes.toolbar} />
        <div className="dl-container">
            
            <Switch>
              <Route exact path="/techniques">
                <TechniqueBody/>
              </Route>
              <Route
                path="/techniques/:slug"
                render={props => (
                  <TechniqueArticle {...props} TextEditor={TextEditor}/>
                )}/>
            </Switch>
        </div> 
      </main>

    </div>
)
}

export default TechniquesPage
