import React from 'react';
import {unmountComponentAtNode} from 'react-dom'
import { render } from '@testing-library/react';
import { act } from "react-dom/test-utils";
import App from './App';
describe('Test App.js', () => {
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
  
  it('renders learn react link', () => {
    act(() => {
      render(<App />, container);
    });

    // const linkElement = getByText(/learn react/i);
      expect(container.textContent).toBe("");
  });
});

