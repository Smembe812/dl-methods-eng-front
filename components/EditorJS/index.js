import dynamic from 'next/dynamic';
const EditorJS = dynamic(import("@editorjs/editorjs"),{ssr:false});
const Header = dynamic(import("@editorjs/header"),{ssr:false});
const Embed = dynamic(import ('@editorjs/embed'),{ssr:false});
const Table = dynamic(import ('@editorjs/table'),{ssr:false});
const List = dynamic(import ( "@editorjs/list"),{ssr:false});
const Warning = dynamic(import( "@editorjs/warning"),{ssr:false});
const Code = dynamic(import( "@editorjs/code"),{ssr:false});
const LinkTool = dynamic(import( "@editorjs/link"),{ssr:false});
const Image = dynamic(import( "@editorjs/image"),{ssr:false});
const Raw = dynamic(import( "@editorjs/raw"),{ssr:false});
const Quote = dynamic(import( "@editorjs/quote"),{ssr:false});
const Marker = dynamic(import( "@editorjs/marker"),{ssr:false});
const CheckList = dynamic(import( "@editorjs/checklist"),{ssr:false});
const Delimiter = dynamic(import( "@editorjs/delimiter"),{ssr:false});
const InlineCode = dynamic(import( "@editorjs/inline-code"),{ssr:false});
const SimpleImage = dynamic(import( "@editorjs/simple-image"),{ssr:false});

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