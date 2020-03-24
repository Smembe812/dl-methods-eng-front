import React from "react";

function RenderListItem({item, options={}, children}){
    const {className} = options

    if(typeof item === "string"){
        if (className){
            return <li className={className}>{item}</li>
        }

        return <li>{item}</li>
    }

    if(children){
        if (className){
            return <li className={className}>{children}</li>
        }
        return <li>{children}</li>
    }

    return <></>
}

export default RenderListItem