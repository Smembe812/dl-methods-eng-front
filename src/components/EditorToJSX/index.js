//Todo convert Editor JS data to JSX elements & content
import React from 'react'

import RenderList from './RenderList'
import RenderListItem from './RenderListItem'
import RenderHeader from './RenderHeader'
import RenderParagraph from './RenderParagraph'

function EditorToJSX({data, options, children}){
    const {blocks} = data

    const converted = blocks.map(block => {
        const {type} = block
        if (type === "header"){
            return <RenderHeader block={block}/>
        }
        if (type === "list"){
            return <RenderList block={block}/>
        }
        if (type === "paragraph"){
            return  <RenderParagraph block={block}/>
        }

        return null
    })

    return converted
}

export default EditorToJSX

export {
    RenderHeader, 
    RenderList, 
    RenderListItem, 
    RenderParagraph
}