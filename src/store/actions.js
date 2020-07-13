import {
    SET_QUESTIONS,
    SET_QUESTION,
    SET_VOTE,
    SET_ALERT,
    SET_ERROR
  } from "./../constants";

export const setQuestions = (questions) => {
    return {
        type: SET_QUESTIONS,
        payload: {questions}
    }
}

export const setQuestion = (question) => {
    return {
        type: SET_QUESTION,
        payload: {question}
    }
}

export const setVote = (vote) => {
    return {
        type: SET_VOTE,
        payload: vote
    }
}

export const setAlert = (alert) => {
    return {
        type: SET_ALERT,
        payload: alert
    }
}

export const setError = (error) => {
    return {
        type: SET_ERROR,
        payload: error
    }
}