import React from "react";

function RenderParagraph({block, options={}}){
    const {className} = options
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
            return <p className={className}>{text}</p>
        }

        return <p>{text}</p>
    }
}

export default RenderParagraph