import React from "react";

function RenderHeader({block, options={}}){
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
    const {type, data: {text, level}} = receivedBlock
    
    if(type === "header"){
        switch(level){
            case 1:
                if(className){
                    return <h1 className={className}>{text}</h1>
                }
                return <h1>{text}</h1>
            case 2:
                if(className){
                    return <h2 className={className}>{text}</h2>
                }
                return <h2>{text}</h2> 
            case 3:
                if(className){
                    return <h3 className={className}>{text}</h3>
                }
                return <h3>{text}</h3>
            case 4:
                if(className){
                    return <h4 className={className}>{text}</h4>
                }
                return <h4>{text}</h4>
            case 5:
                if(className){
                    return <h5 className={className}>{text}</h5>
                }
                return <h5>{text}</h5>
            case 6:
                if(className){
                    return <h6 className={className}>{text}</h6>
                }
                return <h6>{text}</h6>
            default:
                return null
        }
    }
}

export default RenderHeader