let wordScore = {
  initialWord: "",
  totalLive: 6,
  lost: false,
  won: false,

  removeLife: () => {
    wordScore.totalLive -= 1;
  }
};

module.exports = {
  wordScore
};
