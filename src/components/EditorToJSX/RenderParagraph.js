import React from "react";

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
        if (className && HtmlParser){
            return <p className={className}>{ HtmlParser(text) }</p>
        }

        if(HtmlParser){
            return <p>{ HtmlParser(text) }</p>
        }

        return <p>{ text }</p>

    }
}

export default RenderParagraph