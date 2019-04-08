import axios from "axios";

export const REQUEST_LENGTH = "REQUEST_LENGTH";
export const RECEIVE_LENGTH = "RECEIVE_LENGTH";

export const requestLength = (name, diff, guessArr) => ({
  type: REQUEST_LENGTH
});

export const receivedLength = json => ({
  type: RECEIVE_LENGTH,
  wordLength: json.length,
  playerName: json.name,
  guessedWordArr: json.guessedWordArr
});

export function getWordLength(name, diff, guessArr) {
  console.log("DATA IN ACTION", name, diff, guessArr);
  return function(dispatch) {
    dispatch(requestLength(name, diff, guessArr));
    return axios
      .post(`http://localhost:3033/api/game`, { name: name, difficulty: diff })
      .then(req => {
        dispatch(receivedLength(req.data));
      });
  };
}
