import React from "react";
import { shallow } from "enzyme";
import QuestionList from "./QuestionList";
import { findByTestAttr } from "../../Util";

const setUp = (props = {}) => {
    const component = shallow(<QuestionList {...props} />);
    return component;
};
describe("QuestionList Component", () => {

    describe("QuestionList Component with 2 questions", () => {
        let component;
        beforeEach(() => {
            const props = {
                questions: [
                {question: 'first', url:'url',choices:['','',''],published_at:'111111111'},
                {question: 'second', url:'url2',choices:[],published_at:'111111111'}
                ],
                handleQuestionClick: function () { }, 
                routeNewQuestion: function () { },
                buttonText: 'create question' 
            };
            component = setUp(props);
        });

        test("QuestionList should render", () => {
            const wrapper = findByTestAttr(component, "questionListComponent");
            expect(wrapper.length).toBe(1);
        });
        test("QuestionList button should render", () => {
            const wrapper = findByTestAttr(component, "createQuestionButton");
            expect(wrapper.length).toBe(1);
        });

        test("QuestionList create button should have right text", () => {
            const wrapper = findByTestAttr(component, "createQuestionButton");
            expect(wrapper.text()).toEqual("create question");
        });

        test("QuestionList items should have right 2 items exactly", () => {
            const wrapper = findByTestAttr(component, "questionListItem");
            expect(wrapper.length).toBe(2);
        });

        test("QuestionList item should have right choices length exactly", () => {
            const wrapper = findByTestAttr(component, "questionListChoices");
            expect(wrapper.first().text()).toEqual("Number of Choices : 3");
        });
        
        test("QuestionList second item should have right 0 items exactly", () => {
            const wrapper = findByTestAttr(component, "questionListChoices");
            expect(wrapper.at(1).text()).toEqual("Number of Choices : 0");
        });
    });

    describe("QuestionList Component with 0 questions", () => {
        let component;
        beforeEach(() => {
            const props = {
                questions: [
                ],
                handleQuestionClick: function () { }, 
                routeNewQuestion: function () { },
                buttonText: 'create question' 
            };
            component = setUp(props);
        });

        test("QuestionList should render", () => {
            const wrapper = findByTestAttr(component, "questionListComponent");
            expect(wrapper.length).toBe(1);
        });
        test("QuestionLis create button should render", () => {
            const wrapper = findByTestAttr(component, "createQuestionButton");
            expect(wrapper.length).toBe(1);
        });

        test("QuestionList create button should have right text", () => {
            const wrapper = findByTestAttr(component, "createQuestionButton");
            expect(wrapper.text()).toEqual("create question");
        });

        test("QuestionList items should have right 0 items exactly", () => {
            const wrapper = findByTestAttr(component, "questionListItem");
            expect(wrapper.length).toBe(0);
        });

    });
});