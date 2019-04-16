INSERT INTO leaderboard
    (user_name,game_difficulty,word_length, game_time, secret_word)
VALUES($1, $2, $3, $4, $5)
RETURNING *;