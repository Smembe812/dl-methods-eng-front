import React, {useState} from 'react';

import ToCLink from './ToC-Link'
import TocItem from './ToC-Item'

function TableOfContents() {
  return (
      <ul className="toc">
        <TocItem>
          <ToCLink href="#description">
            Description
          </ToCLink>

          <ul className="toc__sub-toc">
            <ToCLink href="#introduction">
              Introduction
            </ToCLink>
          </ul>
        </TocItem>
        <TocItem>
          <ToCLink href="#motivation">
            Motivation
          </ToCLink>
        </TocItem>
        <TocItem>
          <ToCLink href="#steps">
            Steps
          </ToCLink>
        </TocItem>
        <TocItem>
          <ToCLink href="#related-to">
            Related to
          </ToCLink>
        </TocItem>
        <TocItem>
          <ToCLink href="#resources">
            Resources
          </ToCLink>
        </TocItem>
      </ul>
  );
}



export default TableOfContents