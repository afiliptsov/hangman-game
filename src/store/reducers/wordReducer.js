import * as actionTypes from "../actions/actions";
import axios from "axios";

const initialState = {
  wordLength: 0,
  playerName: "",
  live: 6,
  lost: false,
  won: false,
  guessedWordArr: [],
  guessed: false,
  initialWord: ""
};

const wordReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REQUEST_WORD:
      return { ...state, loading: true };
    case actionTypes.RECEIVE_WORD:
      return {
        ...state,
        wordLength: action.wordLength,
        playerName: action.playerName,
        live: action.live,
        lost: action.lost,
        won: action.won,
        guessedWordArr: action.guessedWordArr,
        loading: false
      };
    case actionTypes.POST_LETTER:
      return { ...state, loading: true };
    case actionTypes.RECEIVE_POST_LETTER_RESPONSE:
      return {
        ...state,
        guessedWordArr: action.guessedWordArr,
        guessed: action.guessed,
        live: action.live,
        won: action.won,
        lost: action.lost,
        loading: false
      };
    default:
      return state;
  }
};

export default wordReducer;
