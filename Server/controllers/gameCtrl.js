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
    req.session.wordScore.usedLetters += req.body.letter;
    if (req.session.wordScore.totalLive === 0) {
      req.session.wordScore.lost = true;
      res.status(200).json({
        state: "gameLost",
        lost: req.session.wordScore.lost,
        initialWord: req.session.wordScore.initialWord,
        live: req.session.wordScore.totalLive
      });
    } else {
      res.status(200).json({
        state: "letterNotGuessed",
        live: req.session.wordScore.totalLive,
        guessed: false,
        usedLetters: req.session.wordScore.usedLetters
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

    if (initialWord === displayWord) {
      req.session.wordScore.won = true;
      req.session.wordScore.guessedLetter = "";
      res.status(200).json({
        state: "gameWon",
        won: true,
        initialWord: req.session.wordScore.initialWord,
        live: req.session.wordScore.totalLive,
        guessedWordArr: req.session.wordScore.initialWord.split("")
      });
    } else {
      console.log("SESSION", req.session);
      console.log("REQUEST", req.body.letter);
      console.log("DISPLAYWORD", displayWord);

      guessedWordArr = displayWord.split("").map(e => {
        return (e = "_");
      });

      req.session.wordScore.usedLetters += req.body.letter;

      res.status(200).json({
        state: "letterGuessed",
        guessedWordArr: displayWord.split(""),
        guessed: true,
        live: req.session.wordScore.totalLive,
        usedLetters: req.session.wordScore.usedLetters
      });
    }
    console.log(displayWord);
  }
};

module.exports = {
  guessLetter
};
