import React from "react";

function RenderListItem({item, indexKey, options={}, children}){
    const {className} = options

    if(typeof item === "string"){
        if (className){
            return <li className={className} key={indexKey}>{item}</li>
        }

        return <li key={indexKey}>{item}</li>
    }

    if(children){
        if (className){
            return <li className={className} key={indexKey}>{children}</li>
        }
        return <li key={indexKey}>{children}</li>
    }

    return <></>
}

export default RenderListItem