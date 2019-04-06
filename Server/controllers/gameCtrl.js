const axios = require("axios");

//16100 amount of words in multiple difficulty level (1-10)

const startGame = async (req, res) => {
  let wordsArray = [];
  console.log(req.body);
  await axios
    .get(
      `http://app.linkedin-reach.io/words?difficulty=${
        req.body.difficulty
      }&start=10&count=200`
    )
    .then(res => {
      console.log(res.data), (wordsArray = res.data.split("\n"));
    });
  res.status(200).json(selectRandom(wordsArray));
};

let selectRandom = arr => {
  var rand = arr[Math.floor(Math.random() * arr.length)];
  return rand;
};

module.exports = {
  startGame
};
