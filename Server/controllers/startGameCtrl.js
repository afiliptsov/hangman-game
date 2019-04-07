const axios = require("axios");
const { wordScore } = require(`${__dirname}/initialState`);

//16100 amount of words in multiple difficulty level (1-10)

let correctWord = "";

let selectRandom = arr => {
  var rand = arr[Math.floor(Math.random() * arr.length)];
  return rand;
};

let getRandomNumber = (start, end) => {
  return Math.floor(Math.random() * end) + start;
};

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
      wordsArray = res.data.split("\n");
    });
  correctWord = selectRandom(wordsArray);

  wordScore.removeLife();

  //Execute when game starts. Updating initials state of the game.
  wordScore.initialWord = correctWord;
  wordScore.guessed = "";
  wordScore.totalLive = 6;
  wordScore.lost = false;
  wordScore.won = false;
  res.status(200).json({ word: correctWord, length: correctWord.length });
};

module.exports = {
  startGame
};
