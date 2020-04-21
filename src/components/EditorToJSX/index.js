//Todo convert Editor JS data to JSX elements & content
import React from 'react'

import RenderList from './RenderList'
import RenderListItem from './RenderListItem'
import RenderHeader from './RenderHeader'
import RenderParagraph from './RenderParagraph'
import RenderTable from './RenderTable'
import RenderImage from './RenderImage'


function EditorToJSX({data, options={}, children}){
    const {headerClassName, paragraphClassName, listClassName} = options
    
    const {blocks} = data
    if (blocks){
        const converted = blocks.map(block => {
            const {type} = block
            if (type === "header"){
                return <RenderHeader block={block} 
                            options={
                                {className:headerClassName}
                            }
                            />
            }
            if (type === "list"){
                return <RenderList 
                            block={block}
                            options={
                                {className:listClassName}
                            }/>
            }
            if (type === "paragraph"){
                return  <RenderParagraph 
                            block={block} 
                            options={
                                {className:paragraphClassName}
                            }
                            />
            }
    
            if (type === "table"){
                return <RenderTable block={block}/>
            }

            if (type === "image"){
                return <RenderImage block={block}/>
            }
    
            return null
        })
    
        return converted
    }

    return null
}

export default EditorToJSX

export {
    RenderHeader, 
    RenderList, 
    RenderListItem, 
    RenderParagraph,
    RenderTable,
    RenderImage
}