import { SET_QUESTIONS, SET_QUESTION, SET_VOTE, SET_ALERT, SET_ERROR } from "./../constants";

const initialState = {
  questions: [],
  question: {
    choices: [],
  },
  alert: {
    alertOn: false,
    text: "",
    type: ''
  },
  error: false
};

const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_QUESTIONS:
      return {
        ...state,
        questions: action.payload.questions,
        error: false,
      };
    case SET_QUESTION:
      return {
        ...state,
        question: action.payload.question,
        error: false,
      };
    case SET_VOTE:
      return {
        ...state,
        question: {
          ...state.question,
          choices: state.question.choices.map((choice, i) =>
          choice.choice === action.payload.choice ? { ...choice, votes: action.payload.votes } : choice
          ),
        },
        error: false,
      };
      case SET_ALERT:
        return {
          ...state,
          alert: {
            ...state.alert,
            alertOn: action.payload.alertOn,
            text: action.payload.text,
            type: action.payload.type
          },
          error: false,
        };
        case SET_ERROR:
          return {
            ...state,
            error: true,
          };
    default:
      return state;
  }
};

export default questionReducer;
