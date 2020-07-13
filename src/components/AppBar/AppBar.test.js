import React from "react";
import { shallow } from "enzyme";
import AppBar from "./AppBar";
import { findByTestAttr } from "./../../Util";

const setUp = (props = {}) => {
    const component = shallow(<AppBar {...props} />);
    return component;
};
describe("AppBar Component", () => {
    describe("AppBar Component with no props", () => {
        let component;
        beforeEach(() => {
            component = setUp();
        });
        test("AppBar Component should render", () => {
            const wrapper = findByTestAttr(component, "appBarComponent");
            expect(wrapper.length).toBe(1);
        });
    });

    describe("AppBar Component with props", () => {
        let component;
        beforeEach(() => {
            const props = {
                title: "title test",
            };
            component = setUp(props);
        });

        test("appbarName should render", () => {
            const wrapper = findByTestAttr(component, "appBarComponent");
            expect(wrapper.length).toBe(1);
        });

        test("appbarName should have right text", () => {
            const wrapper = findByTestAttr(component, "appBarComponent");
            expect(wrapper.text()).toEqual("title test");
        });
    });
});