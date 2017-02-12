var prompt = require('prompt');
var word = require('./word');

var wordArray = [
    'tank',
    'proud',
    'color',
    'inspector',
    'trend',
    'soil',
    'seed',
    'insight',
    'cage',
    'addition'
];

prompt.start();

/**
 * Calling this will start a new hangman game.
 * @constructor
 */
var Game = function () {
    this.selectedWord = new word(wordArray[Math.floor(Math.random() * wordArray.length)]);
    this.selectedWord.getLettersFromWord(); // Add letters to array.
    this.maxGuesses = 10;
    this.gusses = 0;
    this.guessedLetters = [];

    this.promptUser();
};

/**
 * Prompt the user to guess the letter. If it's wrong then prompt again.
 * @returns {*}
 */
Game.prototype.promptUser = function () {
    var _self = this;
    if (this.gusses > 10) {
        return console.log("Sorry, you're out of guesses. \nThe word was: " + this.selectedWord.word);
    } else if(this.gusses == 10) {
        console.log('This is your last guess. Be careful!');
    }
    _self.selectedWord.show();
    prompt.get(['letterGuess'], function (error, result) {
        if (result.letterGuess.length > 1) {
            console.log('You can only guess one letter at a time.');
            return _self.promptUser();
        }

        if (_self.guessedLetters.indexOf(result.letterGuess) == -1) {
            _self.guessedLetters.push(result.letterGuess);

            if (_self.selectedWord.guessLetter(result.letterGuess) && _self.gusses < 10) {
                console.log('Correct!');

                if(_self.selectedWord.correct != _self.selectedWord.word.length) {
                    _self.promptUser();
                } else {
                    _self.selectedWord.show();
                    return console.log("You've won!");
                }
            } else {
                _self.gusses++;
                console.log('Incorrect.');
                _self.promptUser();
            }
        } else {
            console.log('You already guessed that letter!');
            _self.promptUser();
        }
    });
};

if (process.argv[2] == 'test')
    return "OK";

console.log('Guess the word:');
var curGame = new Game();

//console.log(curGame.selectedWord);