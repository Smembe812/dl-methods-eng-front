import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'
import EditorToJSX from '../EditorToJSX'

import RenderHeader from '../EditorToJSX/RenderHeader'
import RenderParagraph from '../EditorToJSX/RenderParagraph'

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
  const [techniques, setTechniques] = useState([])

  
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
    // setTitle(values.title)
    // setDescription(values.description)
    // setMotivation(values.motivation)
    // setSteps(values.steps)

    setTechniques(data)
  }

  console.log(techniques)

  const renderTechniques = (techniques) => {

    return techniques.map( ({title, description, how, id}) => {
      description = JSON.parse(description)
      
      if (how && description){
        return (
          <div className="item grid__col-3" key={id}>
            <div className="card">
                  <div className="card__header">
                      <span className="card__header-text">Technique</span>
                  </div>
                  <div className="card__body--grid">
                      <h5 className="card__title">
                          {title}
                      </h5>
                      <EditorToJSX 
                        data={description}
                        options={
                          {paragraphClassName:"card__text"}
                        }
                        />
                  </div>
                  <div className="card__footer">
                    <a className="link" href="#">explore more</a>
                  </div>
              </div>
          </div>
        )
      }

      return <></>

    }

    )
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
    
    axios.post(`${BASE_URL}techniques`, payload)
    .then( (data) => console.log(data))
    
  }
  

  return (
    <>
      <div className="grid toolbar toolbar__box-shadow">
        <div className="grid__box--uniform">
            <div className="grid__col">
                <div className="toolbar__title">
                    <span className="toolbar__list-item-text">
                        Techniques >
                    </span>
                </div>
            </div>
            <div className="toolbar__list grid__col flex flex__justify-end">
                <div className="toolbar__list-item">
                    <i className="material-icons">tune</i>
                </div>
                <div className="toolbar__list-item">
                    <i className="material-icons">view_module</i>
                </div>
                <div className="toolbar__list-item">
                    <i className="material-icons">view_list</i>
                </div>
            </div>           
        </div>
    </div>

    <div className="grid">
        <div className="grid__box grid__gap">

            {renderTechniques(techniques)}
        </div>
    </div>
     
    </>
  );
}
