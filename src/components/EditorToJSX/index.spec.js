import React from 'react'
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import renderer from 'react-test-renderer';

import RenderHeader from './RenderHeader'
import RenderParagraph from './RenderParagraph'

describe('Convert EditorJS data to JSX', () => {
    let container = null;
    beforeEach((done) => {
      // setup a DOM element as a render target
      container = document.createElement("div");
      document.body.appendChild(container);
      done()
    });
    
    afterEach((done) => {
      // cleanup on exiting
      unmountComponentAtNode(container);
      container.remove();
      container = null;
      done()
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
                render(<RenderHeader block={headerBlocks[0]}
                    options={{className:"class-name"}}/>, container);
              });
          
              // const linkElement = getByText(/learn react/i);
              
            expect(container.textContent).toBe("Editor.js");
            done()
        })
    
        it("should render h1 with className", (done) => {
            const tree = renderer
                .create(
                <RenderHeader 
                    block={headerBlocks[0]} 
                    options={{className:"class-name"}}/>)
                .toJSON();
            expect(tree).toMatchSnapshot();
            done()
        })

        it("should render h2 with className", (done) => {
            const tree = renderer
                .create(
                <RenderHeader 
                    block={headerBlocks[1]}
                    options={{className:"class-name"}}/>)
                .toJSON();
            expect(tree).toMatchSnapshot();
            done()
        })

        it("should render h3 with className", (done) => {
            const tree = renderer
                .create(<RenderHeader block={headerBlocks[2]}
                    options={{className:"class-name"}}/>)
                .toJSON()
            expect(tree).toMatchSnapshot();
            done()
        })

        it("should render h4 with className", (done) => {
            const tree = renderer
                .create(<RenderHeader block={headerBlocks[3]}
                    options={{className:"class-name"}}/>)
                .toJSON();
            expect(tree).toMatchSnapshot();
            done()
        })

        it("should render h5 with className", (done) => {
            const tree = renderer
                .create(<RenderHeader block={headerBlocks[4]}
                    options={{className:"class-name"}}/>)
                .toJSON();
            expect(tree).toMatchSnapshot();
            done()
        })

        it("should render h6 with className", (done) => {
            const tree = renderer
                .create(<RenderHeader block={headerBlocks[5]}
                    options={{className:"class-name"}}/>)
                .toJSON();
            expect(tree).toMatchSnapshot();
            done()
        })
    })


    describe("render paragraph", () => {

        const paragraphBlock = [
            {
                "type" : "paragraph",
                "data" : {
                    "text" : "Editor.js"
                }
            }
        ]
        it("should render a pragraph with className", (done) => {
            const tree = renderer
                    .create(
                        <RenderParagraph block={paragraphBlock[0]}
                            options={{className:"class-name"}}/>)
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

