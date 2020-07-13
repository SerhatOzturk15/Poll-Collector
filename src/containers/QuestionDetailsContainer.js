import React, { useEffect } from "react";
import { QuestionDetails, Alert } from "./../components";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getQuestion, postVote, showAlert } from "./../store/ApiHelper";

const QuestionDetailsContainer = ({ match }) => {

  const history = useHistory();
  const dispatch = useDispatch();
  const questionId = parseInt(match.params.id);
  const { question, alert } = useSelector((store) => store);
  useEffect(() => {
    dispatch(getQuestion(questionId));
  }, [dispatch, questionId]);

  const handleVote = (choice) => {
    if(localStorage.getItem(questionId)){
      dispatch(showAlert(`You have already voted this question as ${localStorage.getItem(questionId)}`, 'danger'));
      return;
    }
    dispatch(postVote(choice, questionId));
  }
  const headerList = ['Choice', 'Vote Count', 'Ratio', 'Status'];
  return (
    <div style ={{padding: '40px'}}>
      <h3 style={{ padding: "16px" }}>Question Details</h3>
      {question && <QuestionDetails question={question} headerList = {headerList} handleVote = {handleVote} title = {'Question Details'} buttonText = 'Save Vote' />}
      {alert && <Alert alert={alert} />}
    </div>
  );
};

export default QuestionDetailsContainer;
