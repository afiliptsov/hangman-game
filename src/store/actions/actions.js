import axios from "axios";

export const REQUEST_WORD = "REQUEST_WORD";
export const RECEIVE_WORD = "RECEIVE_WORD";

export const POST_LETTER = "POST_LETTER";

export const RECEIVE_GAME_LOST = "RECEIVE_GAME_LOST";
export const RECEIVE_LIFE_LOST = "RECEIVE_LIFE_LOST";
export const RECEIVE_GAME_WON = "RECEIVE_GAME_WON";
export const RECEIVE_GUESSED_LETTER = "RECEIVE_GUESSED_LETTER";

export const requestWord = () => ({
  type: REQUEST_WORD
});

export const receivedWord = json => ({
  type: RECEIVE_WORD,
  wordLength: json.length,
  playerName: json.name,
  live: json.live,
  guessedWordArr: json.guessedWordArr,
  initialWord: json.initialWord,
  invalidGuess: json.invalidGuess,
  state: json.state,
  usedLetters: json.state,
  validGuess: json.state
});

export function getWordLength(name, diff, guessArr) {
  return function(dispatch) {
    dispatch(requestWord(name, diff, guessArr));
    return axios
      .post(`/api/game`, { name: name, difficulty: diff })
      .then(req => {
        dispatch(receivedWord(req.data));
      });
  };
}

export const postLetter = () => ({
  type: POST_LETTER
});

export const receivePostLetterResponse = json => {
  switch (json.state) {
    case "gameLost":
      return {
        type: RECEIVE_GAME_LOST,
        state: json.state,
        initialWord: json.initialWord,
        live: json.live
      };
    case "letterNotGuessed":
      return {
        type: RECEIVE_LIFE_LOST,
        state: json.state,
        live: json.live,
        guessed: json.guessed,
        usedLetters: json.usedLetters,
        invalidGuess: json.invalidGuess
      };
    case "gameWon":
      return {
        type: RECEIVE_GAME_WON,
        state: json.state,
        initialWord: json.initialWord,
        guessedWordArr: json.guessedWordArr,
        live: json.live
      };
    case "letterGuessed":
      return {
        type: RECEIVE_GUESSED_LETTER,
        state: json.state,
        guessedWordArr: json.guessedWordArr,
        guessed: json.guessed,
        usedLetters: json.usedLetters,
        validGuess: json.validGuess
      };

    default:
      break;
  }
};

export function pushLetter(letter) {
  return function(dispatch) {
    dispatch(postLetter(letter));
    return axios.post("/api/letter", { letter: letter }).then(req => {
      dispatch(receivePostLetterResponse(req.data));
    });
  };
}
