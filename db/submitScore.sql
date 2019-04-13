INSERT INTO leaderboard
    (user_name,game_difficulty,word_length, game_time)
VALUES($1, $2, $3, $4)
RETURNING *;