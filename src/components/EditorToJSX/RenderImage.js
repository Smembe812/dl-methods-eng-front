import React from 'react'

const RenderImage = ({resource, caption}) => {
    if (!resource)
        return null

        
    return(
        <>
            <div className="image__container">
                <img src={resource} className="image" alt="Image title"/>
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