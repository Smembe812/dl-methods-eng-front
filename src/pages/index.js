import React, {useState} from 'react'
import Header from '../components/header'
import TableOfContents from '../components/TableOfContents'
import TechniqieBody from '../components/TechniqueBody'
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText'
import TextEditor from '../components/EditorJS'

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

const TechniquesPage = () => {
  const classes = useStyles();
  const [inputData, saveInputData] = useState({})
  
  return (
  
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
        <List>
          {['Processes', 'Process Elements', 'Techniques', 'Experieces'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Knowledge Resources', 'Examples', 'Templates'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
    </Drawer>
    <div className="grid" style={{width: '100%'}}>
      <main className={`grid__col-9 ${classes.content}`}>
        <div className={classes.toolbar} />
        <div className="dl-container">
            <TechniqieBody TextEditor={TextEditor}/>
            <div id="editorjs-container"/>
            <div className="readable">
              <h3>Topic</h3> 
              <div className="text-editor-container">
                <TextEditor
                  holderId="editor1"
                  data={inputData}
                  onData={(data) => console.log(data)}
                  onChange={(e) => console.log('Something is changing!!', e)}
                  />
              </div>
            </div>
        </div> 
      </main>
      <sidebar className={`grid__col-3 ${classes.content}`}>
        <div className={classes.toolbar} />
        <div className="dl-container">
          <TableOfContents/>
        </div>
      </sidebar>

    </div>

    <footer>
    </footer>

    <style jsx>{`
    `}</style>

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
          font-weight: 400;
          font-size: 1em;
      }
      
    `}</style>
  
  </div>
)
}

export default TechniquesPage
