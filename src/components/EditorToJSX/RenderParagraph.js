import React from "react";
import ReactHtmlParser from 'react-html-parser';

function RenderParagraph({block, options={}}){
    const {className, HtmlParser} = options
    let receivedBlock;
    if(typeof block === "string"){
        receivedBlock = JSON.parse(block)
    }
    else if (typeof block === "object"){
        receivedBlock = block
    }
    else{
        return null
    }
    
    const {type, data: {text}} = receivedBlock
    
    if(type === "paragraph"){
        if (className){
            return <p className={className}>{ ReactHtmlParser(text) }</p>
        }

        return <p>{ ReactHtmlParser(text) }</p>
       
    }
}

export default RenderParagraph