import React from 'react'

const RenderImage = ({block}) => {

    if (!block)
        return null
    
    const { type, data : { file : { url }, caption, ...rest} } = block

    if(!type){
        return null
    }
    
    if (!url)
        return null
  
    return(
        <>
            <div className="image__container">
                <img src={url} className="image" alt="Image title"/>
            </div>
            {
                caption ?
                <div className="image__caption">
                    <p>{caption}</p>
                </div> :
                null
            }
        </>
    )
}

export default RenderImage