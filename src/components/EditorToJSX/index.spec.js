import React from 'react'
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import renderer from 'react-test-renderer';

import RenderHeader from './RenderHeader'
import RenderParagraph from './RenderParagraph'
import RenderList from './RenderList'
import RenderListItem from './RenderListItem'

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
    describe("render lists", () => {
        const listBlock = {
            "type" : "list",
            "data" : {
                "style" : "unordered",
                "items" : [
                    "It is a block-styled editor",
                    "It returns clean data output in JSON",
                    "Designed to be extendable and pluggable with a simple API"
                ]
            }
        }

        it("should render lists", (done) => {
            const tree = renderer
            .create(
                <RenderList block={listBlock}
                    options={
                        {className:"class-name"},
                        {classNameItem:"item-class-name"}
                    }/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
        done()
        })

        it("should render lists with children", (done) => {
            const tree = renderer
            .create(
                <RenderList block={listBlock}
                    options={
                        {className:"class-name"}
                    }>
                        {
                            listBlock.data.items.map(
                                item => (<RenderListItem 
                                            item={item} 
                                            options={{className:"item-class-name"}}/>))}

                </RenderList>
                )
            .toJSON();
        expect(tree).toMatchSnapshot();
        done()
        })

        it("should render list item", (done) => {
            const tree = renderer
            .create(
                <RenderListItem item={listBlock.data.items[0]}
                    options={{className:"class-name"}}/>)
            .toJSON();
            expect(tree).toMatchSnapshot();
            done()
        })

        it("should render list item as child", (done) => {
            const tree = renderer
            .create(
                <RenderListItem options={{className:"class-name"}}>
                    {listBlock.data.items[0]}
                 </RenderListItem>)
            .toJSON();
            expect(tree).toMatchSnapshot();
            done()
        })

    })
    it.todo("should render")
    it.todo("should render img")
    it.todo("should render table")
    it.todo("should render checklist")
    it("Should always run" , (done) => {
        expect(1).toBe(1)
        done()
    })
});

