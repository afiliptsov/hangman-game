import axios from "axios";

export const REQUEST_WORD = "REQUEST_WORD";
export const RECEIVE_WORD = "RECEIVE_WORD";

export const POST_LETTER = "POST_LETTER";
export const RECEIVE_POST_LETTER_RESPONSE = "RECEIVE_POST_LETTER_RESPONSE";

export const requestWord = () => ({
  type: REQUEST_WORD
});

export const receivedWord = json => ({
  type: RECEIVE_WORD,
  wordLength: json.length,
  playerName: json.name,
  live: json.live,
  lost: json.lost,
  won: json.won,
  guessedWordArr: json.guessedWordArr
});

export function getWordLength(name, diff, guessArr) {
  return function(dispatch) {
    dispatch(requestWord(name, diff, guessArr));
    return axios
      .post(`http://localhost:3033/api/game`, { name: name, difficulty: diff })
      .then(req => {
        dispatch(receivedWord(req.data));
      });
  };
}

export const postLetter = () => ({
  type: POST_LETTER
});

export const receivePostLetterResponse = json => ({
  type: RECEIVE_POST_LETTER_RESPONSE,
  guessedWordArr: json.guessedWordArr,
  guessed: json.guessed,
  live: json.live,
  won: json.won,
  lost: json.lost
});

export function pushLetter(letter) {
  return function(dispatch) {
    dispatch(postLetter(letter));
    return axios
      .post("http://localhost:3033/api/letter", { letter: "e" })
      .then(req => {
        dispatch(receivePostLetterResponse(req.data));
      });
  };
}
