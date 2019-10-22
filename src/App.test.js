import React from "react";
import App from "./App.js";
import Enzyme, { mount } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});

test("Render app", () => {
  // Render a checkbox with label in the document
  const app = mount(<App />);

  expect(app.text()).toEqual("hello world");
});
