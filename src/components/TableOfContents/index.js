import React, {useState} from 'react';

function TableOfContents() {
  //TODO: {function} to handle when clicking outside a component

  const handleOnClick = (e) => {
    const className = "toc__a toc__a--active"
    e.target.className = className
    return className
  }

  const handleOnBlur = (e) => {
    const className = "toc__a"
    e.target.className = className
    return className
  }

  return (
      <ul className="toc">
        <li className="toc__item">
          <a href="#description" className="toc__a" onClick={handleOnClick}>Description</a>
            <ul className="toc__sub-toc">
              <li className="toc__item">
                <a href="#introduction" className="toc__a">Description</a>
              </li>
              <li className="toc__item">
                  <a href="#introduction" className="toc__a">Motivation</a>
              </li>
            </ul>
        </li>
        <li className="toc__item">
        <a href="#motivation" className="toc__a">Motivation</a>
            
        </li>
        <li className="toc__item">
          <a href="#steps" className="toc__a">Steps</a>
        </li>
        <li className="toc__item">
        <a href="#related-to" className="toc__a">Related to</a>
        </li>
        <li className="toc__item">
          <a href="#resources" className="toc__a">Resources</a>
        </li>
      </ul>
  );
}

export default TableOfContents