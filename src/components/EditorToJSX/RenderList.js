import React from "react";

function RenderList({block, options={}}){
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
    
    console.log("in null game", type)
    if(type === "list"){
        if (className){
            return <p className={className}>{text}</p>
        }

        return <p>{text}</p>
    }
}

export default RenderList