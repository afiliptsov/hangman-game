import axios from "axios";

export const START_GAME = "START_GAME";

export const loadWord = () => {
  return dispatch => {
    return axios
      .post(`http://localhost:3033/api/game`, { difficulty: "3" })
      .then((req, res) => {
        dispatch(changeWordLength(res.data.length));
      });
  };
};

export const changeWordLength = length => {
  console.log("length", length);
  return {
    type: START_GAME,
    wordLength: length
  };
};
