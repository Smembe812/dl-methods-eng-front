import React, {useEffect, useState} from 'react'
import Header from "@editorjs/header"
import Embed from  '@editorjs/embed'
import Table from  '@editorjs/table'
import List from   "@editorjs/list"
import Warning from  "@editorjs/warning"
import Code from  "@editorjs/code"
import LinkTool from  "@editorjs/link"
import Image from  "@editorjs/image"
import Raw from  "@editorjs/raw"
import Quote from  "@editorjs/quote"
import Marker from  "@editorjs/marker"
import CheckList from  "@editorjs/checklist"
import Delimiter from  "@editorjs/delimiter"
import InlineCode from  "@editorjs/inline-code"
import SimpleImage from  "@editorjs/simple-image"
import EditorJS from "@editorjs/editorjs"

const tools = {
  embed: Embed,
  table: Table,
  marker: Marker,
  list: List,
  warning: Warning,
  code: Code,
  linkTool: LinkTool,
  image: Image,
  raw: Raw,
  header: {
      class:Header,
      shortcut: 'CMD+SHIFT+H',
    },
  quote: Quote,
  checklist: CheckList,
  delimiter: Delimiter,
  inlineCode: InlineCode,
  simpleImage: SimpleImage
};


function TextEditor(props){
  //TODO: consider supporting OnBlur, onReady, OnData, onFocus method props
  let editor;
  const [isReady, setIsReady] = useState(false)
  const {holder, placeholder, data} = props

  let  placeholderConfig = placeholder? `${placeholder}...` : "Write Something..."

  useEffect(() => {
    console.log(isReady)
    // if (isReady){
    //   // destroyInstance()
    //     initEditor()
    //     // .catch(err => console.log(err))
      
    //   // initEditor()
    // }else{

      initEditor()
    // }
    return () => destroyInstance()
    // if(onData && typeof onData == 'function'){
    //   emmitIsReady(onData)
    // }

  }, [isReady])


  async function initEditor() {
   editor = new EditorJS({ 
      holder,
      onChange: changeEmitter,
      onReady: () => setIsReady(true),
      data,
      tools: { 
        ...tools, 
        paragraph: {
          config: {
            placeholder: placeholderConfig
          }
        }
      }
   })
 }

//  const emmitIsReady = async (cb) => {
//   console.log('ready af', editor)
//   // editor.configuration.data = data
//   cb(editor.isReady)
//  }


const destroyInstance = async () => {
  if (editor) {
    try {
      await editor.isReady;

      editor.destroy();
      return Promise.resolve(true)
    } catch (err) {
      console.error(err);
      return Promise.reject(err)
    }
  }

  return false;
}
  const changeEmitter = async () => {
     const {onChange} = props
     console.log(editor)
   try {
      const saved = await editor.save()
      onChange(saved)
      console.log(saved)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div id={`${holder}`}>

    </div>
  )

}

export default TextEditor