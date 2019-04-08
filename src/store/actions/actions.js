import axios from "axios";

export const REQUEST_LENGTH = "REQUEST_LENGTH";
export const RECEIVE_LENGTH = "RECEIVE_LENGTH";

export const requestLength = () => ({
  type: REQUEST_LENGTH
});

export const receivedLength = json => ({
  type: RECEIVE_LENGTH,
  wordLength: json.length
});

export function getWordLength(difficulty) {
  return function(dispatch) {
    dispatch(requestLength());
    return axios
      .post(`http://localhost:3033/api/game`, { difficulty: "3" })
      .then(req => {
        dispatch(receivedLength(req.data));
      });
  };
}
