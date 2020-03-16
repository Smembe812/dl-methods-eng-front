import React from "react";

function RenderListItem({item, options={}}){
    const {className} = options

    if(typeof item === "string"){
        if (className){
            return <li className={className}>{item}</li>
        }

        return <li>{item}</li>
    }
}

export default RenderListItem