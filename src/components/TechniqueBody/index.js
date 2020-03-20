import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'
import EditorToJSX from '../EditorToJSX'

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

const BASE_URL = process.env.REACT_APP_BACKEND_SERVER

export default function TechniqieBody({TextEditor}) {
  const classes = useStyles();
  
  const [title, setTitle] = useState(null)
  const [description, setDescription] = useState({})
  const [motivation, setMotivation] = useState({})
  const [steps, setSteps] = useState({})
  const [isRead, setIsRead] = useState(true)
  const [isEditTitle, setIsEditTitle] = useState(false)

  
  useEffect(() => {
    loadData()
  },[])
  
  const data = {
      "time" : 1584386788218,
      "blocks" : [
          {
              "type" : "header",
              "data" : {
                  "text" : "Editor.js",
                  "level" : 2
              }
          },
          {
              "type" : "paragraph",
              "data" : {
                  "text" : "Hey. Meet the new Editor. On this page you can see it in action — try to edit this text."
              }
          },
          {
              "type" : "header",
              "data" : {
                  "text" : "Key features",
                  "level" : 3
              }
          },
          {
              "type" : "list",
              "data" : {
                  "style" : "unordered",
                  "items" : [
                      "It is a block-styled editor",
                      "It returns clean data output in JSON",
                      "Designed to be extendable and pluggable with a simple API"
                  ]
              }
          },
          {
              "type" : "header",
              "data" : {
                  "text" : "What does it mean «block-styled editor»",
                  "level" : 3
              }
          },
          {
              "type" : "paragraph",
              "data" : {
                  "text" : "Workspace in classic editors is made of a single contenteditable element, used to create different HTML markups. Editor.js <mark class=\"cdx-marker\">workspace consists of separate Blocks: paragraphs, headings, images, lists, quotes, etc</mark>. Each of them is an independent contenteditable element (or more complex structure) provided by Plugin and united by Editor's Core."
              }
          },
          {
              "type" : "paragraph",
              "data" : {
                  "text" : "There are dozens of <a href=\"https://github.com/editor-js\">ready-to-use Blocks</a> and the <a href=\"https://editorjs.io/creating-a-block-tool\">simple API</a> for creation any Block you need. For example, you can implement Blocks for Tweets, Instagram posts, surveys and polls, CTA-buttons and even games."
              }
          },
          {
              "type" : "header",
              "data" : {
                  "text" : "What does it mean clean data output",
                  "level" : 3
              }
          },
          {
              "type" : "paragraph",
              "data" : {
                  "text" : "Classic WYSIWYG-editors produce raw HTML-markup with both content data and content appearance. On the contrary, Editor.js outputs JSON object with data of each Block. You can see an example below"
              }
          },
          {
              "type" : "paragraph",
              "data" : {
                  "text" : "Given data can be used as you want: render with HTML for <code class=\"inline-code\">Web clients</code>, render natively for <code class=\"inline-code\">mobile apps</code>, create markup for <code class=\"inline-code\">Facebook Instant Articles</code> or <code class=\"inline-code\">Google AMP</code>, generate an <code class=\"inline-code\">audio version</code> and so on."
              }
          },
          {
              "type" : "paragraph",
              "data" : {
                  "text" : "Clean data is useful to sanitize, validate and process on the backend."
              }
          },
          {
              "type" : "paragraph",
              "data" : {
                  "text" : "We have been working on this project more than three years. Several large media projects help us to test and debug the Editor, to make it's core more stable. At the same time we significantly improved the API. Now, it can be used to create any plugin for any task. Hope you enjoy. 😏"
              }
          },
          {
            "type": "table",
            "data":{
                "content": [
                    ["Name", "Age"],          
                    ["Paul", "12"],            
                    ["Jude", "13"],         
                    ["Hilda", "10"],         
                    ["Rossana", "11"]
                ]
            }
        }
      ],
      "version" : "2.17.0"
  }

  const toggleIsRead = () => {
    setIsRead(!isRead)
  }

  const toggleIsEditTitle = () => {
    setIsEditTitle(!isEditTitle)
  }

  const handleOnTitleChange = (e) => {
    const {target: {value}} = e

    setTitle(value)
  }
  
  async function loadData(){
    const {data} =  await axios.get(`${BASE_URL}techniques`)
    const latestTech = data.pop()

    const values = {
      title: latestTech.title,
      description: JSON.parse(latestTech.description),
      motivation: JSON.parse(latestTech.aim),
      steps: JSON.parse(latestTech.how)
    }
    setTitle(values.title)
    setDescription(values.description)
    setMotivation(values.motivation)
    setSteps(values.steps)
  }
        
  console.log({title, description, motivation, steps})
  
  const handleSave = () => {
    console.log('description', description)
    console.log('motivation', motivation)
    console.log('steps', steps)
    
    const payload = {
      title, 
      aim: JSON.stringify(motivation), 
      description: JSON.stringify(description),
      how: JSON.stringify(steps)
    }
    
    axios.post(`http://localhost:3000/api/techniques`, payload)
    .then( (data) => console.log(data))
    
  }
  

  return (
    <>
      <button className="dl-btn dl-btn__dark" 
          onClick={toggleIsRead}>{isRead ? "Edit" : "Read"}</button>
      <div className={`readable ${classes.root}`}>
      {
        isRead ? 
          <>
            <h4 className="typography__heading-four">
              {title}
            </h4>
            <setion id="description">
              <EditorToJSX
                  data={description} 
                  options={{
                    headerClassName:"typography__heading-six",
                    paragraphClassName: "typography__paragraph"
                  }}/>
            </setion>
            <section id="motivation">
              <h5 className="typography__heading-five">
                Motivation
              </h5>
              <EditorToJSX
                    data={motivation} 
                    options={{
                      headerClassName:"typography__heading-six",
                      paragraphClassName: "typography__paragraph"
                    }}/>
            </section>
            <section id="steps">
              <h5 className="typography__heading-five">
                How
              </h5>
              <EditorToJSX
                    data={steps} 
                    options={{
                      headerClassName:"typography__heading-six",
                      paragraphClassName: "typography__paragraph"
                    }}/>
            </section>
          </>
              
          :

        <>
          <section id="title">
            <div>
              <span>
                <h4 className="typography__heading-five">
                  Title
                </h4>
                <input 
                  onChange={handleOnTitleChange}
                  value={title}
                  type="text" 
                  className="typography__heading-five input__title" 
                  placeholder="Edit Title" 
                  title="Click here to edit title"/>
              
              </span>
            </div>
          </section>
          <section id="description">
            <div>
              <h4 className="typography__heading-five">Introduction</h4>
              <div className="text-editor-container">
                <TextEditor holder="description-editor"
                  data={description}
                  onChange={(e) => setDescription(e)}
                  />
              </div>
            </div>
          </section>
          <section id="motivation">
            <h5 className="typography__heading-five">Motivation</h5>
            <div className="text-editor-container">
              <TextEditor holder="motivation-editor"
                data={motivation}
                onData={(data) => console.log(data)}
                onChange={(e) => setMotivation(e)}
                />
            </div>
            {/* <p className="typography__paragraph">
              body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
              unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
              dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam. body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
              unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
              dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
              
              body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
              unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
              dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </p> */}

          </section>
          <section id="steps">

            <h5 className="typography__heading-five">
              How
            </h5>
            <div className="text-editor-container">
                <TextEditor holder="steps-editor"
                  data={steps}
                  onData={(data) => console.log(data)}
                  onChange={(e) => setSteps(e)}
                />
              </div>
            {/* <h6 className="typography__heading-six">
              Step 1
              </h6>
            <p className="typography__paragraph">
            body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
              unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
              dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.

              body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
              unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
              dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </p>
            
            <h6 className="typography__heading-six">
            Step 2
            </h6>
            <p className="typography__paragraph">
              body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
              unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
              dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.

              body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
              unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
              dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
              </p>
            <h6 className="typography__heading-six">
            Step 3
            </h6>
            <p className="typography__paragraph">
            body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
            unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
            dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
            
              body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
              unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
              dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </p> */}
          </section>

          <br/>
          <br/>
          <button className="dl-btn dl-btn__dark" onClick={handleSave}>Save</button>
          <button className="dl-btn dl-btn__secondary" onClick={loadData}>load</button>
        </>
      }
      </div>
    </>
  );
}
