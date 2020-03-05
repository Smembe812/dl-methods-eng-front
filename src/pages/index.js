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
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar,
}));

const TechniquesPage = () => {
  const classes = useStyles();
  const [inputData, saveInputData] = useState({})

  const handleSave = async (editor) =>{
    try {
      const saved = await editor.save()
      console.log(saved)
      saveInputData(saved)
    } catch (error) {
      console.log(error)
    }
  }
  
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
    <div className="grid">
      <main className={`grid__col-9 ${classes.content}`}>
        <div className={classes.toolbar} />
        <div className="dl-container">
            <TechniqieBody/>
            <div id="editorjs-container"/>
            <TextEditor
              data={inputData}
              onData={(data) => console.log(data)}
              onChance={() => console.log('Something is changing!!')}
              />
            {/* <Editor
              autofocus
              holder="editorjs-container"
              onChange={() => console.log('Something is changing!!')}
              onData={(data) => console.log(data)}
              customTools={EDITOR_JS_TOOLS}
              onReady={() => console.log('Start!')}
              data={{
                "time" : 1554920381017,
                "blocks" : [
                    {
                        "type" : "header",
                        "data" : {
                            "text" : "Hello Editor.js",
                            "level" : 2
                        }
                    },
                ],
                "version" : "2.12.4"
              }}
            /> */}

{/* <CKEditor
                    editor={ ClassicEditor }
                    data="<p>Hello from CKEditor 5!</p>"
                    onInit={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                /> */}

           {/* <EditorJs
              tools={EDITOR_JS_TOOLS}
              data={{
                time: 1556098174501,
                blocks: [
                  {
                    type: "header",
                    data: {
                      text: "Editor.js",
                      level: 2
                    }
                  },
                  {
                    type: "paragraph",
                    data: {
                      text:
                        "Hey. Meet the new Editor. On this page you can see it in action — try to edit this text."
                    }
                  },
                  {
                    type: "header",
                    data: {
                      text: "Key features",
                      level: 3
                    }
                  },
                  {
                    type: "list",
                    data: {
                      style: "unordered",
                      items: [
                        "It is a block-styled editor",
                        "It returns clean data output in JSON",
                        "Designed to be extendable and pluggable with a simple API"
                      ]
                    }
                  },
                  {
                    type: "header",
                    data: {
                      text: "What does it mean «block-styled editor»",
                      level: 3
                    }
                  },
                  {
                    type: "paragraph",
                    data: {
                      text:
                        'Workspace in classic editors is made of a single contenteditable element, used to create different HTML markups. Editor.js <mark class="cdx-marker">workspace consists of separate Blocks: paragraphs, headings, images, lists, quotes, etc</mark>. Each of them is an independent contenteditable element (or more complex structure) provided by Plugin and united by Editor\'s Core.'
                    }
                  },
                  {
                    type: "paragraph",
                    data: {
                      text:
                        'There are dozens of <a href="https://github.com/editor-js">ready-to-use Blocks</a> and the <a href="https://editorjs.io/creating-a-block-tool">simple API</a> for creation any Block you need. For example, you can implement Blocks for Tweets, Instagram posts, surveys and polls, CTA-buttons and even games.'
                    }
                  },
                  {
                    type: "header",
                    data: {
                      text: "What does it mean clean data output",
                      level: 3
                    }
                  },
                  {
                    type: "paragraph",
                    data: {
                      text:
                        "Classic WYSIWYG-editors produce raw HTML-markup with both content data and content appearance. On the contrary, Editor.js outputs JSON object with data of each Block. You can see an example below"
                    }
                  },
                  {
                    type: "paragraph",
                    data: {
                      text:
                        'Given data can be used as you want: render with HTML for <code class="inline-code">Web clients</code>, render natively for <code class="inline-code">mobile apps</code>, create markup for <code class="inline-code">Facebook Instant Articles</code> or <code class="inline-code">Google AMP</code>, generate an <code class="inline-code">audio version</code> and so on.'
                    }
                  },
                  {
                    type: "paragraph",
                    data: {
                      text:
                        "Clean data is useful to sanitize, validate and process on the backend."
                    }
                  },
                  {
                    type: "delimiter",
                    data: {}
                  },
                  {
                    type: "paragraph",
                    data: {
                      text:
                        "We have been working on this project more than three years. Several large media projects help us to test and debug the Editor, to make it's core more stable. At the same time we significantly improved the API. Now, it can be used to create any plugin for any task. Hope you enjoy. 😏"
                    }
                  },
                  {
                    type: "image",
                    data: {
                      file: {
                        url:
                          "https://codex.so/upload/redactor_images/o_e48549d1855c7fc1807308dd14990126.jpg"
                      },
                      caption: "",
                      withBorder: true,
                      stretched: false,
                      withBackground: false
                    }
                  }
                ],
                version: "2.12.4"
              }}
            />*/}
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
          font-size: 1.2em;
      }
      .dl-container{
        padding: 3em 1em !important;
      }
      * {
        box-sizing: border-box;
      }

      .btn {
        background: blue; }
      
      /**grid Container*/
      .grid {
        display: grid;
        grid-template-columns: repeat(12, 1fr [col-start]);
        grid-auto-rows: auto;
        /**
              __col-start, col-end, row-end, row-start can be attached to item element
          */
        /** where column should end*/
        /** where column should start*/ }
        .grid__box {
          display: grid;
          grid-column-start: 1;
          grid-column-end: 13;
          grid-template-columns: repeat(12, 1fr); }
        .grid__box--uniform {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
          grid-column-start: 1;
          grid-column-end: 13; }
        .grid__col-start-1 {
          grid-column-start: 1; }
        .grid__col-start-2 {
          grid-column-start: 2; }
        .grid__col-start-3 {
          grid-column-start: 3; }
        .grid__col-start-4 {
          grid-column-start: 4; }
        .grid__col-start-5 {
          grid-column-start: 5; }
        .grid__col-start-6 {
          grid-column-start: 6; }
        .grid__col-start-7 {
          grid-column-start: 7; }
        .grid__col-start-8 {
          grid-column-start: 8; }
        .grid__col-start-9 {
          grid-column-start: 9; }
        .grid__col-start-10 {
          grid-column-start: 10; }
        .grid__col-start-11 {
          grid-column-start: 11; }
        .grid__col-start-12 {
          grid-column-start: 12; }
        .grid__col-end-1 {
          grid-column-end: 1; }
        .grid__col-end-2 {
          grid-column-end: 2; }
        .grid__col-end-3 {
          grid-column-end: 3; }
        .grid__col-end-4 {
          grid-column-end: 4; }
        .grid__col-end-5 {
          grid-column-end: 5; }
        .grid__col-end-6 {
          grid-column-end: 6; }
        .grid__col-end-7 {
          grid-column-end: 7; }
        .grid__col-end-8 {
          grid-column-end: 8; }
        .grid__col-end-9 {
          grid-column-end: 9; }
        .grid__col-end-10 {
          grid-column-end: 10; }
        .grid__col-end-11 {
          grid-column-end: 11; }
        .grid__col-end-12 {
          grid-column-end: 12; }
        .grid__col-end-13 {
          grid-column-end: 13; }
        .grid__row-start-1 {
          grid-row-start: 1; }
        .grid__row-start-2 {
          grid-row-start: 2; }
        .grid__row-end-2 {
          grid-row-end: 2; }
        .grid__row-end-3 {
          grid-row-end: 3; }
        .grid__col-1 {
          grid-column-end: span 1; }
        .grid__col-2 {
          grid-column-end: span 2; }
        .grid__col-3 {
          grid-column-end: span 3; }
        .grid__col-4 {
          grid-column-end: span 4; }
        .grid__col-5 {
          grid-column-end: span 5; }
        .grid__col-6 {
          grid-column-end: span 6; }
        .grid__col-7 {
          grid-column-end: span 7; }
        .grid__col-8 {
          grid-column-end: span 8; }
        .grid__col-9 {
          grid-column-end: span 9; }
        .grid__col-10 {
          grid-column-end: span 10; }
        .grid__col-11 {
          grid-column-end: span 11; }
        .grid__col-12 {
          grid-column-end: span 12; }
        .grid__col {
          grid-column: span auto; }
      
      .header {
        padding: .5rem 1rem; }
        .header__nav-item {
          padding: 1em 0.5em;
          text-align: center; }
      
      .link {
        text-decoration: none;
        color: yellow; }
    `}</style>
  </div>
)
}

export default TechniquesPage
