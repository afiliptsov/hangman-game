const guessLetter = (req, res) => {
  console.log("LETTER", req.body);
  console.log("WORD", req.session.wordScore.initialWord);
  console.log("SESSION END", req.session.id);
  console.log("111111", req.session.wordScore.initialWord);
  //Negative scenario, if user guessed a wrong letter
  // add req.session. to wordScores

  if (!req.session.wordScore.initialWord.includes(req.body.letter)) {
    //If user last life, game is Lost
    // if (req.session.wordScore.totalLive === 0) {
    //   req.session.wordScore.lost = true;
    //   res.status(200).json({
    //     state: "gameLost",
    //     lost: req.session.wordScore.lost,
    //     initialWord: req.session.wordScore.initialWord,
    //     live: req.session.wordScore.totalLive
    //   });
    // } else {
    //If user have more than 1 life, subtract 1 life
    req.session.wordScore.totalLive -= 1;
    if (req.session.wordScore.totalLive < 0) {
      res.status(404).json({
        message: "Hmmm, i think someone is trying to cheat?"
      });
    } else if (req.body.letter.length > 1) {
      res.status(404).json({
        message: "Sorry, one letter at the time"
      });
    } else if (req.session.wordScore.totalLive === 0) {
      req.session.wordScore.usedLetters += req.body.letter;
      req.session.wordScore.invalidGuess += req.body.letter;
      req.session.wordScore.lost = true;
      res.status(200).json({
        state: "gameLost",
        lost: req.session.wordScore.lost,
        initialWord: req.session.wordScore.initialWord,
        live: req.session.wordScore.totalLive
      });
    } else {
      req.session.wordScore.usedLetters += req.body.letter;
      req.session.wordScore.invalidGuess += req.body.letter;
      res.status(200).json({
        state: "letterNotGuessed",
        live: req.session.wordScore.totalLive,
        guessed: false,
        usedLetters: req.session.wordScore.usedLetters,
        invalidGuess: req.session.wordScore.invalidGuess
      });
    }
  }
  // }
  //Positive scenario
  if (req.session.wordScore.initialWord.includes(req.body.letter)) {
    let { initialWord } = req.session.wordScore;
    let word = req.session.wordScore.initialWord;

    console.log("INITIAL WORD", word);
    req.session.wordScore.guessedLetter += req.body.letter;
    console.log("GUESSED LETTER", req.body.letter);

    let regexp = new RegExp(
      "[^" + req.session.wordScore.guessedLetter + "]",
      "g"
    );
    let displayWord = word.replace(regexp, "_");

    console.log(displayWord);

    if (req.body.letter.length > 1) {
      res.status(404).json({
        message: "Sorry, one letter at the time"
      });
    } else if (initialWord === displayWord) {
      req.session.wordScore.endGameTime = new Date().getTime();
      req.session.wordScore.timeToGuess =
        req.session.wordScore.endGameTime - req.session.wordScore.startGameTime;
      req.session.wordScore.won = true;
      req.session.wordScore.guessedLetter = "";
      res.status(200).json({
        state: "gameWon",
        won: true,
        initialWord: req.session.wordScore.initialWord,
        live: req.session.wordScore.totalLive,
        guessedWordArr: req.session.wordScore.initialWord.split(""),
        time: req.session.wordScore.timeToGuess
      });
    } else {
      console.log("SESSION", req.session);
      console.log("REQUEST", req.body.letter);
      console.log("DISPLAYWORD", displayWord);

      guessedWordArr = displayWord.split("").map(e => {
        return (e = "_");
      });

      req.session.wordScore.usedLetters += req.body.letter;
      req.session.wordScore.validGuess += req.body.letter;

      res.status(200).json({
        state: "letterGuessed",
        guessedWordArr: displayWord.split(""),
        guessed: true,
        live: req.session.wordScore.totalLive,
        usedLetters: req.session.wordScore.usedLetters,
        validGuess: req.session.wordScore.validGuess
      });
    }
    console.log(displayWord);
  }
};

module.exports = {
  guessLetter
};
