import React from "react";

function RenderTable({block, children, options={}}){
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
    const {type, data: {content}} = receivedBlock

    if (type === "table" && content instanceof Array){

        const [tableHeading, ...tableBody] = content

        if (className){
            return (
                <table className={className}>
                    <thead>
                        {renderHeaderRow(tableHeading)}
                    </thead>
                    <tbody>
                        {renderRestOfBody(tableBody)}
                    </tbody>
                </table>
            )
        }

        return (
            <table>
                <thead>
                        {renderHeaderRow(tableHeading)}
                    </thead>
                    <tbody>
                        {renderRestOfBody(tableBody)}
                    </tbody>
            </table>
        )
    }

    return null

    function renderHeaderRow(tableHeading){
        return (
            <tr>
                {tableHeading.map((col, key) => {
                    return <th key={key}>{col}</th>
                })}
            </tr>
        )
    }

    function renderRestOfBody(tableBody){
        return tableBody.map((row, rowKey) => {
            const tr = row.map((col, key) => { 
                return <td key={key}>{col}</td>
            })

            return <tr key={rowKey}>{tr}</tr>
        })
    }
    
}

export default RenderTable