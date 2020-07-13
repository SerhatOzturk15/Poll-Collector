import React, { useReducer } from "react";
import { QuestionCreate, Alert } from "./../components";
import { useDispatch, useSelector } from "react-redux";
import { createQuestion, showAlert } from "./../store/ApiHelper";
import { useHistory } from "react-router-dom";

const QuestionCreateContainer = ({ match }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [newQuestion, setNewQuestion] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      question: "",
      choiceList: ["", "", "", ""],
    }
  );
  const { alert } = useSelector((store) => store);

  const handleQuestionChange = (e, index) => {
    if (index >= 0) {
      const updatedQuestion = (newQuestion.choiceList[index] = e.target.value);
      setNewQuestion(updatedQuestion);
    } else {
      const name = e.target.name;
      const newValue = e.target.value;
      setNewQuestion({ [name]: newValue });
    }
  };

  const handleCreateQuestion = () => {
    const filteredList = newQuestion.choiceList.filter((val) => val !== "");
    const filteredQuestion = {
      question: newQuestion.question,
      choiceList: filteredList,
    };
    if (!filteredQuestion.question) {
      dispatch(showAlert("Question cannot be empty", "danger"));
      return;
    }
    if (filteredQuestion.choiceList.length < 2) {
      dispatch(showAlert("There should be more than 1 choice", "danger"));
      return;
    }
    dispatch(createQuestion(filteredQuestion)).then((data) => {
      history.push(data.url);
    });
  };
  return (
    <div style={{ padding: "40px" }}>
      <h3 style={{ padding: "16px" }}>New Question</h3>
      <QuestionCreate
        handleCreateQuestion={handleCreateQuestion}
        handleQuestionChange={handleQuestionChange}
        newQuestion={newQuestion}
        title="Question Details"
        buttonText="Create Question"
      />{" "}
      {alert && <Alert alert={alert} />}
    </div>
  );
};

export default QuestionCreateContainer;
