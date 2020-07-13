import { BASEURL } from "./../Util";
import {
  setQuestions,
  setQuestion,
  setVote,
  setAlert,
  setError,
} from "./actions";

export const getQuestions = () => (dispatch) => {
  const url = `${BASEURL}/questions`;
  var obj = {
    method: "GET",
    headers: new Headers({
      "Content-Type": "application/json",
    }),
  };
  fetch(url, obj)
    .then((response) => response.json())
    .then((result) => {
      if (result) {
        dispatch(setQuestions(result));
      }
    })
    .catch((error) => {
      dispatch(setError(error));
    });
};

export const getQuestion = (questionId) => (dispatch) => {
  const url = `${BASEURL}/questions/${questionId}`;
  var obj = {
    method: "GET",
    headers: new Headers({
      "Content-Type": "application/json",
    }),
  };
  fetch(url, obj)
    .then((response) => response.json())
    .then((result) => {
      if (result) {
        dispatch(setQuestion(result));
      } else {
      }
    })
    .catch((error) => {
      dispatch(setError(error));
    });
};

export const postVote = (choice, questionId) => (dispatch) => {
  const url = `${BASEURL}${choice.url}`;
  var obj = {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
    }),
  };
  fetch(url, obj)
    .then((response) => response.json())
    .then((result) => {
      if (result) {
        dispatch(setVote(result));
        localStorage.setItem(questionId, result.choice);
        dispatch(showAlert(`Choice '${result.choice}' is voted`, "primary"));
      }
    })
    .catch((error) => {
      dispatch(setError(error));
    });
};

export const createQuestion = (newQuestion) => (dispatch) => {
  return new Promise((resolve, reject) => {
    const url = `${BASEURL}/questions`;
    const data = {
      question: newQuestion.question,
      choices: newQuestion.choiceList,
    };
    var obj = {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(data),
    };
    fetch(url, obj)
      .then((response) => response.json())
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        dispatch(setError(error));
      });
  });
};

export const showAlert = (text, type) => (dispatch) => {
  dispatch(setAlert({ alertOn: true, text, type }));
  window.setTimeout(() => {
    dispatch(setAlert({ alertOn: false }));
  }, 2000);
};
