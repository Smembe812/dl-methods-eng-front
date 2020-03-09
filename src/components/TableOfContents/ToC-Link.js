import React, {useState} from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

function ToCLink({text, href, children}){
    const [aClassName, setAclassName] = useState('toc__a')

    const handleOnClick = (e) => {
        // const className = "toc__a toc__a--active"
        // e.target.className = className
        // return className

        setAclassName('toc__a toc__a--active')
    }

    const handleClickAway = (e) => {
        // const className = "toc__a"
        // e.target.className = className
        // return className
        setAclassName('toc__a')
    }
    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <a href={href || "#"} className={aClassName} onClick={handleOnClick}>
                {text || children}
            </a>
        </ClickAwayListener>
    )
}

export default ToCLink