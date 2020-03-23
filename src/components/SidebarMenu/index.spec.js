import React from 'react'
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { MemoryRouter } from "react-router-dom";
import renderer from 'react-test-renderer';

import SidebarMenu from './index'

describe('Render Sidebar', () => {
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

    it("should render", (done) => {
        act(() => {
            render(<SidebarMenu/>, container);
          });
      
          // const linkElement = getByText(/learn react/i);
          console.log(typeof container.textContent)
        expect(typeof container.textContent).toBe("string");
        done()
    })

    it("render sidebar", (done) => {
        const sidebarContent = [
            'Processes', 
            'Process Elements', 
            'Techniques', 
            'Experiences'
        ]

        const tree = renderer
        .create(
            <MemoryRouter initialEntries={['/']}>
                <SidebarMenu 
                    data={sidebarContent}/>
            </MemoryRouter>
        )
        .toJSON();
        expect(tree).toMatchSnapshot();
        done()
    })
});
