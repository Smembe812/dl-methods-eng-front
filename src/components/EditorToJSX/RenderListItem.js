import React from "react";

function RenderListItem({item, key, options={}, children}){
    const {className} = options

    if(typeof item === "string"){
        if (className){
            return <li className={className} key={key}>{item}</li>
        }

        return <li key={key}>{item}</li>
    }

    if(children){
        if (className){
            return <li className={className} key={key}>{children}</li>
        }
        return <li key={key}>{children}</li>
    }
}

export default RenderListItem