const { wordScore } = require(`${__dirname}/initialState`);

const guessLetter = (req, res) => {
  //Negative scenario, if user guessed a wrong letter
  if (!wordScore.initialWord.includes(req.body.letter)) {
    //If user last life, game is Lost
    if (wordScore.totalLive === 1) {
      wordScore.lost = true;
      res.status(200).json({
        lost: wordScore.lost,
        initialWord: wordScore.initialWord
      });
    } else {
      //If user have more than 1 life, subtract 1 life
      wordScore.totalLive -= 1;
      res.status(200).json({ live: wordScore.totalLive, guessed: false });
    }
  }
  //Positive scenario
  if (wordScore.initialWord.includes(req.body.letter)) {
    let word = wordScore.initialWord;
    wordScore.guessed += req.body.letter;

    let regexp = new RegExp("[^" + wordScore.guessed + "]", "g");
    let displayWord = word.replace(regexp, "_");

    if (wordScore.initialWord === displayWord) {
      wordScore.won = true;
      wordScore.guessed = "";
      res.status(200).json({
        won: true,
        initialWord: wordScore.initialWord
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
