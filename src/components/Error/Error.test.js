import React from "react";
import { shallow } from "enzyme";
import Error from "./Error";
import { findByTestAttr } from "./../../Util";

const setUp = (props = {}) => {
  const component = shallow(<Error {...props} />);
  return component;
};
describe("Error Component", () => {
  describe("Error Component with props", () => {
    let component;
    beforeEach(() => {
      const props = {
        text: "error text",
      };
      component = setUp(props);
    });

    test("Error component should render", () => {
      const wrapper = findByTestAttr(component, "errorComponent");
      expect(wrapper.length).toBe(1);
    });

    test("Error component should have right text", () => {
      const wrapper = findByTestAttr(component, "errorComponent");
      expect(wrapper.text()).toEqual("error text");
    });
  });
});
