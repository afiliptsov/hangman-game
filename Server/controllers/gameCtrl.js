const axios = require("axios");

//16100 amount of words in multiple difficulty level (1-10)

let correctWord = "";

const startGame = async (req, res) => {
  let wordsArray = [];
  console.log(req.body);
  await axios
    .get(
      `http://app.linkedin-reach.io/words?difficulty=${
        req.body.difficulty
      }&start=${getRandomNumber(1, 16100)}&count=200`
    )
    .then(res => {
      console.log(res.data), (wordsArray = res.data.split("\n"));
    });
  correctWord = selectRandom(wordsArray);
  res.status(200).json(correctWord);
};

let selectRandom = arr => {
  var rand = arr[Math.floor(Math.random() * arr.length)];
  return rand;
};

let getRandomNumber = (start, end) => {
  let number = Math.floor(Math.random() * end) + start;
};

module.exports = {
  startGame
};
