import dynamic from 'next/dynamic';
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

export const EDITOR_JS_TOOLS = {
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
