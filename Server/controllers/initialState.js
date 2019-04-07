let wordScore = {
  initialWord: "",
  totalLive: 6,
  lost: false,
  won: false,
  guessed: "",

  removeLife: () => {
    wordScore.totalLive -= 1;
  }
};

module.exports = {
  wordScore
};
