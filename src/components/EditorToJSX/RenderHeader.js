import React from "react";

function RenderHeader({block}){
    console.log(typeof block)
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
    const {type, data: {text, level}} = receivedBlock
    
    if(type === "header"){
        switch(level){
            case 1:
                return <h1>{text}</h1>
            case 2:
                return <h2>{text}</h2> 
            case 3:
                return <h3>{text}</h3>
            case 4:
                return <h4>{text}</h4>
            case 5:
                return <h5>{text}</h5>
            case 6:
                return <h6>{text}</h6>
            default:
                return null
        }
    }
}

export default RenderHeader