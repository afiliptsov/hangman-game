const submitScore = (req, res) => {
  console.log(req.user);
  req.app
    .get("db")
    .submitScore([
      req.session.wordScore.name,
      req.session.wordScore.gameDifficulty,
      req.session.wordScore.wordSize,
      req.session.wordScore.timeToGuess
    ])
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => console.log(err));
};

module.exports = {
  submitScore
};
