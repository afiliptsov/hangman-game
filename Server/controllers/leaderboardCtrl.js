const submitScore = (req, res) => {
  req.app
    .get("db")
    .submitScore([
      req.session.wordScore.name,
      req.session.wordScore.gameDifficulty,
      req.session.wordScore.wordSize,
      req.session.wordScore.timeToGuess,
      req.session.wordScore.initialWord
    ])
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => console.log(err));
};

const getAllScore = (req, res) => {
  req.app
    .get("db")
    .getAllScore()
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => console.log(err));
};

const getScoreByDiffLevel = (req, res) => {
  req.app
    .get("db")
    .getScoreByDiffLevel(req.params.difficulty)
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => res.status(500).json(err));
};

module.exports = {
  submitScore,
  getAllScore,
  getScoreByDiffLevel
};
