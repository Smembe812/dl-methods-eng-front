import React from 'react'
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import renderer from 'react-test-renderer';

import RenderHeader from './RenderHeader'

describe('Convert EditorJS data to JSX', () => {
    let container = null;
    beforeEach(() => {
      // setup a DOM element as a render target
      container = document.createElement("div");
      document.body.appendChild(container);
    });
    
    afterEach(() => {
      // cleanup on exiting
      unmountComponentAtNode(container);
      container.remove();
      container = null;
    });

    describe("render header", () => {
        const headerBlocks = [
            {
                "type" : "header",
                "data" : {
                    "text" : "Editor.js",
                    "level" : 1
                }
            },
            {
                "type" : "header",
                "data" : {
                    "text" : "Editor.js",
                    "level" : 2
                }
            },
            {
                "type" : "header",
                "data" : {
                    "text" : "Editor.js",
                    "level" : 3
                }
            },
            {
                "type" : "header",
                "data" : {
                    "text" : "Editor.js",
                    "level" : 4
                }
            },
            {
                "type" : "header",
                "data" : {
                    "text" : "Editor.js",
                    "level" : 5
                }
            },
            {
                "type" : "header",
                "data" : {
                    "text" : "Editor.js",
                    "level" : 6
                }
            }
        ]
        it("should render header", (done) => {
            act(() => {
                render(<RenderHeader block={headerBlocks[0]}/>, container);
              });
          
              // const linkElement = getByText(/learn react/i);
              
            expect(container.textContent).toBe("Editor.js");
            done()
        })
    
        it("should render h1", (done) => {
            const tree = renderer
                .create(<RenderHeader block={headerBlocks[0]}/>)
                .toJSON();
            expect(tree).toMatchSnapshot();
            done()
        })

        it("should render h2", (done) => {
            const tree = renderer
                .create(<RenderHeader block={headerBlocks[1]}/>)
                .toJSON();
            expect(tree).toMatchSnapshot();
            done()
        })

        it("should render h3", (done) => {
            const tree = renderer
                .create(<RenderHeader block={headerBlocks[2]}/>)
                .toJSON()
            expect(tree).toMatchSnapshot();
            done()
        })

        it("should render h4", (done) => {
            const tree = renderer
                .create(<RenderHeader block={headerBlocks[3]}/>)
                .toJSON();
            expect(tree).toMatchSnapshot();
            done()
        })

        it("should render h5", (done) => {
            const tree = renderer
                .create(<RenderHeader block={headerBlocks[4]}/>)
                .toJSON();
            expect(tree).toMatchSnapshot();
            done()
        })

        it("should render h6", (done) => {
            const tree = renderer
                .create(<RenderHeader block={headerBlocks[5]}/>)
                .toJSON();
            expect(tree).toMatchSnapshot();
            done()
        })
    })

    it.todo("should render")
    it.todo("should render img")
    it.todo("should render lists")
    it.todo("should render table")
    it.todo("should render checklist")
    it.todo("should render paragraph")
    it("Should always run" , (done) => {
        expect(1).toBe(1)
        done()
    })
});

