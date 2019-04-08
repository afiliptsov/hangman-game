const guessLetter = (req, res) => {
  const { initialWord, totalLive } = req.session.wordScore;
  //Negative scenario, if user guessed a wrong letter
  // add req.session. to wordScores
  if (!initialWord.includes(req.body.letter)) {
    //If user last life, game is Lost
    if (totalLive === 1) {
      req.session.wordScore.lost = true;
      res.status(200).json({
        lost: req.session.wordScore.lost,
        initialWord: req.session.wordScore.initialWord
      });
    } else {
      //If user have more than 1 life, subtract 1 life
      req.session.wordScore.totalLive -= 1;
      res
        .status(200)
        .json({ live: req.session.wordScore.totalLive, guessed: false });
    }
  }
  //Positive scenario
  if (initialWord.includes(req.body.letter)) {
    let word = req.session.wordScore.initialWord;
    req.session.wordScore.guessedLetter += req.body.letter;

    let regexp = new RegExp("[^" + req.session.wordScore.guessed + "]", "g");
    let displayWord = word.replace(regexp, "_");

    if (initialWord === displayWord) {
      req.session.wordScore.won = true;
      req.session.wordScore.guessedLetter = "";
      res.status(200).json({
        won: true,
        initialWord: req.session.wordScore.initialWord
      });
    } else {
      res.status(200).json({ guessedWord: displayWord, guessed: true });
    }
    console.log(displayWord);
  }
};

module.exports = {
  guessLetter
};
