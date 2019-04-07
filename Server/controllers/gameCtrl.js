const { wordScore } = require(`${__dirname}/initialState`);

let { initialWord, totalLive, lost, won } = wordScore;

const guessLetter = (req, res) => {
  console.log(req.body.letter);
  if (!initialWord.includes(req.body.letter)) {
    if (wordScore.totalLive === 1) {
      wordScore.lost = true;
      res.status(200).json({
        lost: wordScore.lost,
        initialWord: wordScore.initialWord
      });
    }
    wordScore.totalLive -= 1;
    res.status(200).json({ live: wordScore.totalLive, guessed: false });
  }
};

module.exports = {
  guessLetter
};
