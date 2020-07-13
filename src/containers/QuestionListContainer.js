import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { QuestionList } from "./../components";
import { getQuestions } from "./../store/ApiHelper";
import { useHistory } from "react-router-dom";

const QuestionListContainer = () => {
  const dispatch = useDispatch();
  const history  = useHistory();
  //redux store states
  const { questions } = useSelector((store) => store);

  const handleQuestionClick = (url) => {
    history.push(url);
  }

  const routeNewQuestion = () => {
    history.push('/create');
  }

  useEffect(() => {
    dispatch(getQuestions());
  }, [dispatch]);

  return <QuestionList routeNewQuestion = {routeNewQuestion} buttonText = 'Create New Question' questions={questions} handleQuestionClick = {handleQuestionClick} />;
};

export default QuestionListContainer;
