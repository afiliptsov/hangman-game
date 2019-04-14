const axios = require("axios");
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
  console.log(req);
  console.log("SESSION START", req.session.id);
  console.log("BODY IS HERE", req.body.difficulty);
  req.session.wordScore = {
    name: "",
    initialWord: "",
    guessedWordArr: [],
    totalLive: 6,
    guessedLetter: "",
    notGuessedLetters: "",
    guessedLetters: "",
    validGuess: "",
    invalidGuess: "",
    status: ""
  };
  let wordsArray = [];
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
  guessedWordArr = correctWord.split("").map(e => {
    return (e = "_");
  });

  // req.session.wordScore.removeLife();

  //Execute when game starts. Updating initials state of the game. Adding it to the session.
  req.session.wordScore.name = req.body.name;
  req.session.wordScore.initialWord = correctWord;
  req.session.wordScore.guessedLetter = "";
  req.session.wordScore.totalLive = 6;
  req.session.wordScore.guessedWordArr = guessedWordArr;
  req.session.wordScore.usedLetters = "";
  req.session.wordScore.state = "";
  req.session.wordScore.notGuessedLetters = [];
  req.session.wordScore.guessedLetters = [];
  req.session.wordScore.startGameTime = new Date().getTime();
  req.session.wordScore.gameDifficulty = req.body.difficulty;
  req.session.wordScore.wordSize = 0;

  console.log("WORD", req.session.wordScore.initialWord);

  res.status(200).json({
    name: req.session.wordScore.name,
    length: correctWord.length,
    live: req.session.wordScore.totalLive,
    guessedWordArr: guessedWordArr,
    initialWord: "",
    invalidGuess: "",
    state: "",
    usedLetters: "",
    validGuess: ""
  });
};

module.exports = {
  startGame
};
