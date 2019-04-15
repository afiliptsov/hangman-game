# React-Hangman.com



React-Hangman is implementation of Hangman game using ReactJs, NodeJs and PosrgreSQL.

# How to play? 
In this game player will have a 6 lives to guess a correct word. If he guess a correct word, the secret-keeper will reveal all occurrences of that letter in the word occurrences If the guesser runs out of guesses before the whole word is discovered,the game is over and player 1 has won.

# New Features!

  - User is able to save his score.
  - The Game is mobile responsive now.
  - Recieved SSL certificate. 





### Tech


* [ReactJS] - library to build great user interfaces.
* [NodeJS] - awesome javascript run-time environment. (Server)
* [SCSS] - superset of CSS cyntax. Also knows as "Sassy CSS".
* [Redux] - better state management for react
* [Express] fast node.js network app framework
* [Digitalocean] cloud hosting of webapp.


And of course react-hangman itself is open source with a [public repository]
 on GitHub.

### Installation

React-Hangman requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies to start the server.

```sh
$ cd hangman-game
$ npm i
```

Start a server first.
```sh
$ node Server/
```
Start a wep app.
```sh
$ npm start
```
You will need to create a .env file in root of the poject.
This file should have a reference to DB connection and Session.
Example:
```sh
$ SESSION_SECRET=1mgKwqP09d
CONNECTION_STRING=postgres://someDBUrl?ssl=true

```
For DB I am using Heroku PostgreSQL.


#### Building for source
For production release:
```sh
$ npm run build
```

### Todos

 - Write MORE Tests
 - Add Sockets to the game. (Enable Multiplayer)
 - Improve UI of Leaderboard page.

License
----

MIT

   [ReactJS]: <https://reactjs.org/>
   [Nodejs]: <https://nodejs.org/en/>
   [scss]: <https://sass-lang.com/>
   [df1]: <http://daringfireball.net/projects/markdown/>
   [markdown-it]: <https://github.com/markdown-it/markdown-it>
   [Redux]: <https://redux.js.org/>
   [express]: <http://expressjs.com>
   [digitalocean]:<https://m.do.co/c/0168372e4d12>
   [public repository]:<https://github.com/afiliptsov/hangman-game>



