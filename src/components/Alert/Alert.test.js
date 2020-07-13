import React from "react";
import { shallow } from "enzyme";
import Alert from "./Alert";
import { findByTestAttr } from "./../../Util";

const setUp = (props = {}) => {
  const component = shallow(<Alert {...props} />);
  return component;
};
describe("Alert Component", () => {
  describe("Alert Component with props", () => {
    let component;
    beforeEach(() => {
      const props = {
        alert: {
          type: "danger",
          text: "this is alert",
        },
      };
      component = setUp(props);
    });

    test("Alert should render", () => {
      const wrapper = findByTestAttr(component, "alertComponent");
      expect(wrapper.length).toBe(1);
    });

    test("Alert component should have right text", () => {
      const wrapper = findByTestAttr(component, "alertComponent");
      expect(wrapper.text()).toEqual("this is alert");
    });
  });
});
