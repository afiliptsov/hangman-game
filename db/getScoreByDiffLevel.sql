SELECT *
FROM leaderboard
WHERE game_difficulty = $1
ORDER BY game_time ASC;