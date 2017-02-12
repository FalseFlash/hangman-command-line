var letter = require('./Letter');

/**
 * Setup the word.
 * @param word
 * @constructor
 */
var Word = function (word) {
    if (word == null)
        throw new Error('Missing word!');

  this.word = word;
  this.correct = 0;
  this.letters = [];
};

/**
 * Add the letters to an array for easy searching.
 */
Word.prototype.getLettersFromWord = function () {
    if (this.word.length <= 0 || this.word == null)
        throw new Error('Word is missing!');

    for (var i = 0; i <= this.word.length-1; i++) {
        this.letters.push(new letter(this.word[i]));
    }
};

/**
 * Check to see if the guessed letter is in the array.
 * @param letter
 * @returns {boolean}
 */
Word.prototype.guessLetter = function (letter) {
    if (letter == null)
        throw new Error('Missing letter!');

    var returned = false; // Doing the return like this incase of multiple letters.

    for (var i = 0; i < this.letters.length; i++) {
        if (this.letters[i].letter == letter) {
            this.letters[i].isLine = false;

            this.correct++;
            returned = true;
        }
    }

    return returned;
};

/**
 * Output a blank line or a letter.
 */
Word.prototype.show = function (){
    if (this.word == null)
        throw new Error('Missing word!');

    var word = "";

    for (var i = 0; i <= this.letters.length-1; i++) {
        if (word.length == 0)
            word += this.letters[i].show();
        else
            word += " " + this.letters[i].show();
    }

    console.log(word);
};


module.exports = Word;