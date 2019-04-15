const guessLetter = (req, res) => {
  //Negative scenario, if user guessed a wrong letter

  if (!req.session.wordScore.initialWord.includes(req.body.letter)) {
    req.session.wordScore.totalLive -= 1;
    if (req.session.wordScore.totalLive < 0) {
      // If someone decided to use Rest API to continue game after life 0.(Cheating)
      res.status(404).json({
        message: "Hmmm, i think someone is trying to cheat?"
      });
    } else if (req.body.letter.length > 1) {
      // if user tries to send multiple letters at the same time.
      res.status(404).json({
        message: "Sorry, one letter at the time"
      });
    } else if (req.session.wordScore.totalLive === 0) {
      // lost game Scenario
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
      //letter not guessed, life-1
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
  //Positive scenario
  if (req.session.wordScore.initialWord.includes(req.body.letter)) {
    let { initialWord } = req.session.wordScore;
    let word = req.session.wordScore.initialWord;
    req.session.wordScore.guessedLetter += req.body.letter;

    let regexp = new RegExp(
      "[^" + req.session.wordScore.guessedLetter + "]",
      "g"
    );
    let displayWord = word.replace(regexp, "_");

    if (req.body.letter.length > 1) {
      // if user tries to send multiple letters at the same time.
      res.status(404).json({
        message: "Sorry, one letter at the time"
      });
    } else if (initialWord === displayWord) {
      // If user Won
      req.session.wordScore.endGameTime = new Date().getTime();
      req.session.wordScore.timeToGuess =
        (req.session.wordScore.endGameTime -
          req.session.wordScore.startGameTime) /
        1000;
      req.session.wordScore.won = true;
      req.session.wordScore.guessedLetter = "";
      res.status(200).json({
        state: "gameWon",
        won: true,
        initialWord: req.session.wordScore.initialWord,
        live: req.session.wordScore.totalLive,
        guessedWordArr: req.session.wordScore.initialWord.split(""),
        time: req.session.wordScore.timeToGuess,
        minutes: ~~((req.session.wordScore.timeToGuess % 3600) / 60),
        seconds: parseInt(req.session.wordScore.timeToGuess % 60)
      });
    } else {
      // If used guessed letter
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
  }
};

module.exports = {
  guessLetter
};
