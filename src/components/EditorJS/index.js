import React from 'react'
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


function TextEditor(){
  console.log(EditorJS)
  const editor = new EditorJS({ 
    /** 
     * Id of Element that should contain the Editor 
     */ 
    holderId: 'codex-editor', 

    tools: { ...tools}, 

    data: {
      "time": 1550476186479,
      "blocks": [
         {
            "type": "header",
            "data": {
               "text": "Editor.js",
               "level": 2
            }
         },
         {
            "type": "paragraph",
            "data": {
               "text": "Hey. Meet the new Editor. On this page you can see it in action — try to edit this text. Source code of the page contains the example of connection and configuration."
            }
         },
         {
            "type": "header",
            "data": {
               "text": "Key features",
               "level": 3
            }
         },
         {
            "type": "list",
            "data": {
               "style": "unordered",
               "items": [
                  "It is a block-styled editor",
                  "It returns clean data output in JSON",
                  "Designed to be extendable and pluggable with a simple API"
               ]
            }
         },
         {
            "type": "header",
            "data": {
               "text": "What does it mean «block-styled editor»",
               "level": 3
            }
         },
         {
            "type": "paragraph",
            "data": {
               "text": "Workspace in classic editors is made of a single contenteditable element, used to create different HTML markups. Editor.js <mark class=\"cdx-marker\">workspace consists of separate Blocks: paragraphs, headings, images, lists, quotes, etc</mark>. Each of them is an independent contenteditable element (or more complex structure) provided by Plugin and united by Editor's Core."
            }
         }
      ],
      "version": "2.8.1"
   }
  })

  return (
    <div id="codex-editor">

    </div>
  )

}

export default TextEditor