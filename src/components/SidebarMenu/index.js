import React, {useState} from 'react';

import ToCLink from '../TableOfContents/ToC-Link'
import TocItem from '../TableOfContents/ToC-Item'

function SidebarMenu({data}) {
    function renderListItems(data){

        const items = data.map((item, key) => {
            return <TocItem key={key}>
                        <ToCLink>
                        {item}
                        </ToCLink>
                    </TocItem>   
        })

        return items
    }

    if (data){
        return (
            <ul className="toc">
                {renderListItems(data)}
            </ul>
        );
    }

    return null

}



export default SidebarMenu