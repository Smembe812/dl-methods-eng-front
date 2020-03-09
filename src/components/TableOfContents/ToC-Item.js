import React, {useState} from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

function ToCLink({children}){
    const [aClassName, setAclassName] = useState('toc__item')

    const handleClick = (e) => {
        setAclassName('toc__item toc__item--active')
    }

    const handleClickAway = (e) => {
        setAclassName('toc__item')
    }
    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <li className={aClassName} onClick={handleClick}>
              {children}
            </li>
        </ClickAwayListener>
    )
}

export default ToCLink