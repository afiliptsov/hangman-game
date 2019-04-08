import * as actionTypes from "../actions/actions";
import axios from "axios";

const initialState = {
  wordLength: 0,
  guessedWord: ""
};

const wordReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REQUEST_LENGTH:
      return { ...state, loading: true };
    case actionTypes.RECEIVE_LENGTH:
      return { ...state, guessedWord: action.wordLength, loading: false };
    default:
      return state;
  }
};

export default wordReducer;
