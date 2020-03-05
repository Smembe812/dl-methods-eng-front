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
  console.log(EditorJS)
//   let [editor, initEditor] = useState(null)
  const init = new EditorJS({ 
    /** 
     * Id of Element that should contain the Editor 
     */ 
    holderId: 'codex-editor', 
    onChange: (data) => console.log(data),
    data: {},
    tools: { ...tools}, 
  })

  console.log(init)
  
//   useEffect(() => {

//      initEditor(init)
//   })


//   const handleChange = () => {
//    const { onChange, onData } = props;

//    if (onChange && typeof onChange === 'function') {
//      onChange();
//    }

//    if (onData && typeof onData === 'function') {
//       eventEmitter(onData);
//    }
//   }

  const eventEmitter = async (editor) => {
     
   try {
      const saved = await editor.save()
      console.log(saved)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div id="codex-editor">

    </div>
  )

}

export default TextEditor