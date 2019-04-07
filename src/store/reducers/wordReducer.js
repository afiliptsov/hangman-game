import * as actionTypes from "../actions/actions";
import axios from "axios";

const initialState = {
  wordLength: 0,
  guessedWord: ""
};

export function startGame() {
  return {
    type: actionTypes.START_GAME,
    payload: axios.post(`http://localhost:3033/api/game`, { difficulty: "3" })
  };
}

const wordReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.START_GAME:
      return {
        ...state,
        wordLength: action.payload.data
      };
  }
  return state;
};

export default wordReducer;
