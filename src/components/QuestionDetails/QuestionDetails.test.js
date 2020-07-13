import React from "react";
import { shallow } from "enzyme";
import QuestionDetails from "./QuestionDetails";
import { findByTestAttr } from "../../Util";

const setUp = (props = {}) => {
    const component = shallow(<QuestionDetails {...props} />);
    return component;
};
describe("QuestionList Component", () => {

    describe("QuestionDetails Component with choices", () => {
        let component;
        beforeEach(() => {
            const props = {
                question: {
                    question: 'this is question',
                    choices: [{choice: 'choice1', votes: 5, url: 'url1'}, {choice: 'choice2', votes: 3, url: 'url2'}]
                },
                buttonText: 'Save Vote',
                handleVote: function () { }, 
                headerList: ['first', 'second', 'third','fourth'],
            };
            component = setUp(props);
        });

        test("QuestionDetails should render", () => {
            const wrapper = findByTestAttr(component, "questionDetailsComponent");
            expect(wrapper.length).toBe(1);
        });
        test("QuestionDetails button should render", () => {
            const wrapper = findByTestAttr(component, "saveVoteButton");
            expect(wrapper.length).toBe(1);
        });

        test("QuestionDetails save button should have right text", () => {
            const wrapper = findByTestAttr(component, "saveVoteButton");
            expect(wrapper.text()).toEqual("Save Vote");
        });

        test("QuestionDetails header 1 should have right text", () => {
            const wrapper = findByTestAttr(component, "questionDetailsHeader1");
            expect(wrapper.text()).toEqual("first");
        });

        test("QuestionDetails header 2 should have right text", () => {
            const wrapper = findByTestAttr(component, "questionDetailsHeader2");
            expect(wrapper.text()).toEqual("second");
        });

        test("QuestionDetails header 3 should have right text", () => {
            const wrapper = findByTestAttr(component, "questionDetailsHeader3");
            expect(wrapper.text()).toEqual("third");
        });

        test("QuestionDetails header 4 should have right text", () => {
            const wrapper = findByTestAttr(component, "questionDetailsHeader4");
            expect(wrapper.text()).toEqual("fourth");
        });

        test("QuestionDetails choices should have right 2 items exactly", () => {
            const wrapper = findByTestAttr(component, "choiceItem");
            expect(wrapper.length).toBe(2);
        });

        test("QuestionDetails choices should have right 2 items exactly", () => {
            const wrapper = findByTestAttr(component, "votes");
            expect(wrapper.length).toBe(2);
        });

        test("QuestionDetails first item votes should have right text", () => {
            const wrapper = findByTestAttr(component, "votes");
            expect(wrapper.at(0).text()).toEqual("5");
        });

        test("QuestionDetails second item votes should have right text", () => {
            const wrapper = findByTestAttr(component, "votes");
            expect(wrapper.at(1).text()).toEqual("3");
        });
    });

    describe("QuestionDetails Component with no choices", () => {
        let component;
        beforeEach(() => {
            const props = {
                question: {
                    question: 'this is question',
                    choices: []
                },
                buttonText: 'Save Vote',
                handleVote: function () { }, 
                headerList: ['first', 'second', 'third','fourth'],
            };
            component = setUp(props);
        });

        test("QuestionDetails choices should have right 0 items exactly", () => {
            const wrapper = findByTestAttr(component, "choiceItem");
            expect(wrapper.length).toBe(0);
        });

        test("QuestionDetails choices should have right 2 items exactly", () => {
            const wrapper = findByTestAttr(component, "votes");
            expect(wrapper.length).toBe(0);
        });

    });
});