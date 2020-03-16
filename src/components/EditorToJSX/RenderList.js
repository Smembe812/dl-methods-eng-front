import React from "react";
import RenderListItem from './RenderListItem'

function RenderList({block, children, options={}}){
    const {className, classNameItem} = options
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
    const {type, data: {style, items}} = receivedBlock
    
    if(type === "list"){
        if(style === "unordered" && !children){
            return renderUnorderdList(items, {className, classNameItem})
        }

        if(children){
            if (className){
                return(
                    <ul className={className}>
                        {children}
                    </ul>
                )
            }
            return <ul>{children}</ul>
        }
        
        return null
    }
    
    function renderUnorderdList(items, options=null){
        const listItems = items.map((item) => {
            if(options && classNameItem){
                return <RenderListItem 
                            options={{className: classNameItem}}>
                            {item}
                        </RenderListItem>
            }
            return <RenderListItem>{item}</RenderListItem>
        })
        if(options && className){
            return(
                <ul className={className}>
                    {listItems}
                </ul>
            )
        }
        return(
            <ul>
                {listItems}
            </ul>
        )
    }
    function renderOrderdList(){}
}

export default RenderList