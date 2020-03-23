import React from 'react'
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import renderer from 'react-test-renderer';

import {
    RenderHeader, 
    RenderParagraph,
    RenderList,
    RenderListItem,
    RenderTable
} from './index'

import EditorToJSX from './index'

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

        const orderedListBlock = {
            "type" : "list",
            "data" : {
                "style" : "ordered",
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
                        {
                            className:"class-name",
                            style: "unordered"
                        }
                    }>
                        {
                            listBlock.data.items.map((item, key) => (
                                <RenderListItem 
                                    item={item}
                                    indexKey={key} 
                                    options={{className:"item-class-name"}}/>))}

                </RenderList>
                )
            .toJSON();
        expect(tree).toMatchSnapshot();
        done()
        })

        it("should render ordered list with children", (done) => {
            const tree = renderer
            .create(
                <RenderList block={orderedListBlock}
                    options={
                        {
                            className:"class-name",
                            style: "ordered"
                        }
                    }>
                        {
                            orderedListBlock.data.items.map((item, key) => (
                                <RenderListItem 
                                    item={item}
                                    indexKey={key} 
                                    options={{className:"item-class-name"}}/>
                            )
                        )}

                </RenderList>
                )
            .toJSON();
            expect(tree).toMatchSnapshot();
            done()
        })

        it("should render list item", (done) => {
            const tree = renderer
            .create(
                <RenderListItem 
                    item={listBlock.data.items[0]}
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

    it("should render conversion", (done) => {
        const data = {
            "time" : 1584386788218,
            "blocks" : [
                {
                    "type" : "header",
                    "data" : {
                        "text" : "Editor.js",
                        "level" : 2
                    }
                },
                {
                    "type" : "paragraph",
                    "data" : {
                        "text" : "Hey. Meet the new Editor. On this page you can see it in action — try to edit this text."
                    }
                },
                {
                    "type" : "header",
                    "data" : {
                        "text" : "Key features",
                        "level" : 3
                    }
                },
                {
                    "type" : "list",
                    "data" : {
                        "style" : "unordered",
                        "items" : [
                            "It is a block-styled editor",
                            "It returns clean data output in JSON",
                            "Designed to be extendable and pluggable with a simple API"
                        ]
                    }
                },
                {
                    "type" : "header",
                    "data" : {
                        "text" : "What does it mean «block-styled editor»",
                        "level" : 3
                    }
                },
                {
                    "type" : "paragraph",
                    "data" : {
                        "text" : "Workspace in classic editors is made of a single contenteditable element, used to create different HTML markups. Editor.js <mark class=\"cdx-marker\">workspace consists of separate Blocks: paragraphs, headings, images, lists, quotes, etc</mark>. Each of them is an independent contenteditable element (or more complex structure) provided by Plugin and united by Editor's Core."
                    }
                },
                {
                    "type" : "paragraph",
                    "data" : {
                        "text" : "There are dozens of <a href=\"https://github.com/editor-js\">ready-to-use Blocks</a> and the <a href=\"https://editorjs.io/creating-a-block-tool\">simple API</a> for creation any Block you need. For example, you can implement Blocks for Tweets, Instagram posts, surveys and polls, CTA-buttons and even games."
                    }
                },
                {
                    "type" : "header",
                    "data" : {
                        "text" : "What does it mean clean data output",
                        "level" : 3
                    }
                },
                {
                    "type" : "paragraph",
                    "data" : {
                        "text" : "Classic WYSIWYG-editors produce raw HTML-markup with both content data and content appearance. On the contrary, Editor.js outputs JSON object with data of each Block. You can see an example below"
                    }
                },
                {
                    "type" : "paragraph",
                    "data" : {
                        "text" : "Given data can be used as you want: render with HTML for <code class=\"inline-code\">Web clients</code>, render natively for <code class=\"inline-code\">mobile apps</code>, create markup for <code class=\"inline-code\">Facebook Instant Articles</code> or <code class=\"inline-code\">Google AMP</code>, generate an <code class=\"inline-code\">audio version</code> and so on."
                    }
                },
                {
                    "type" : "paragraph",
                    "data" : {
                        "text" : "Clean data is useful to sanitize, validate and process on the backend."
                    }
                },
                {
                    "type" : "paragraph",
                    "data" : {
                        "text" : "We have been working on this project more than three years. Several large media projects help us to test and debug the Editor, to make it's core more stable. At the same time we significantly improved the API. Now, it can be used to create any plugin for any task. Hope you enjoy. 😏"
                    }
                }
            ],
            "version" : "2.17.0"
        }
        const tree = renderer
            .create(
                <EditorToJSX
                    data={data} 
                    options={{className:"class-name"}}/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
        done()
    })
    it.todo("should render")
    it.todo("should render img")
    describe("Render table", () => {
        const tableBlock = {
            type: "table",
            data:{
                content: [
                    ["Name", "Age"],          
                    ["Paul", "12"],            
                    ["Jude", "13"],         
                    ["Hilda", "10"],         
                    ["Rossana", "11"]
                ]
            }
        }

        it("should render table", (done) => {
            const tree = renderer
                    .create(
                        <RenderTable block={tableBlock}/>)
                    .toJSON();
            expect(tree).toMatchSnapshot();
            done()
        })

        it("should render table with className", (done) => {
            const tree = renderer
                    .create(
                        <RenderTable block={tableBlock}
                            options={{className:"class-name"}}/>)
                    .toJSON();
            expect(tree).toMatchSnapshot();
            done()
        })
    })
    it.todo("should render checklist")
    it("Should always run" , (done) => {
        expect(1).toBe(1)
        done()
    })
});

