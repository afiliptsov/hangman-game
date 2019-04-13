import * as actionTypes from "../actions/actions";
import axios from "axios";

const initialState = {
  wordLength: 0,
  playerName: "",
  live: 6,
  guessedWordArr: [],
  guessed: false,
  initialWord: "",
  usedLetters: "",
  invalidGuess: "",
  validGuess: "",
  minutes: 0,
  seconds: 0
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
        guessedWordArr: action.guessedWordArr,
        initialWord: action.initialWord,
        invalidGuess: action.invalidGuess,
        state: action.state,
        usedLetters: action.usedLetters,
        validGuess: action.validGuess,
        loading: false
      };
    case actionTypes.POST_LETTER:
      return { ...state, loading: true };
    case actionTypes.RECEIVE_GAME_LOST:
      return {
        ...state,
        state: action.state,
        initialWord: action.initialWord,
        live: action.live
      };
    case actionTypes.RECEIVE_LIFE_LOST:
      return {
        ...state,
        state: action.state,
        live: action.live,
        guessed: action.guessed,
        usedLetters: action.usedLetters,
        invalidGuess: action.invalidGuess
      };
    case actionTypes.RECEIVE_GAME_WON:
      return {
        ...state,
        state: action.state,
        initialWord: action.initialWord,
        guessedWordArr: action.guessedWordArr,
        live: action.live,
        minutes: action.minutes,
        seconds: action.seconds
      };
    case actionTypes.RECEIVE_GUESSED_LETTER:
      return {
        ...state,
        state: action.state,
        guessedWordArr: action.guessedWordArr,
        guessed: action.guessed,
        usedLetters: action.usedLetters,
        validGuess: action.validGuess
      };
    default:
      return state;
  }
};

export default wordReducer;
