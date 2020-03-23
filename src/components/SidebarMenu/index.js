import React from 'react';

import SidebarMenuLink from "./SidebarMenuLink"

function SidebarMenu({data}) {
    function renderListItems(data){

        const items = data.map((item, key) => {

            return  <SidebarMenuLink
                            key={key}
                            title={item}
                            to={`/${item.toLowerCase()}`}
                        />   
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