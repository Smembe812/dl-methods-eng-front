import React from "react";
import RenderListItem from './RenderListItem'

function RenderList({block, options={}, children}){
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
            return renderUnorderedList(items, {className, classNameItem})
        }

        if(style === "ordered" && !children){
            return renderOrderedList(items, {className, classNameItem})
        }

        if(children){
            if (className && options.style === "unordered"){
                return(
                    <ul className={className}>
                        {children}
                    </ul>
                )
            }

            if (className && options.style === "ordered"){
                return(
                    <ol className={className}>
                        {children}
                    </ol>
                )
            }

            return <ul>{children}</ul>
        }
        
        return null
    }
    
    function renderUnorderedList(items, options=null){
        const listItems = items.map((item, key) => {
            if(options && classNameItem){
                return <RenderListItem 
                            options={{className: classNameItem}} 
                            key={item}>
                            {item}
                        </RenderListItem>
            }
            return <RenderListItem key={item}>{item}</RenderListItem>
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
    
    function renderOrderedList(items, options=null){
        const listItems = items.map((item, key) => {
            if(options && classNameItem){
                return <RenderListItem 
                            options={{className: classNameItem}} 
                            key={item}>
                            {item}
                        </RenderListItem>
            }
            return <RenderListItem key={item}>{item}</RenderListItem>
        })
        if(options && className){
            return(
                <ol className={className}>
                    {listItems}
                </ol>
            )
        }
        return(
            <ol>
                {listItems}
            </ol>
        )

    }
}

export default RenderList