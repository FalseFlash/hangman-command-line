/**
 * Setup the letter.
 * @param letter
 * @constructor
 */
var Letter = function (letter) {
    if (letter === null)
        throw new Error('Missing letter!');

    this.letter = letter;
    this.isLine = true; // Will show _ if set to true;
};

/**
 * Setup the letter to either show the line or the actual letter if it was guessed.
 * @returns {*}
 */
Letter.prototype.show = function () {
    if (this.isLine)
        return "_";
    else
        return this.letter.toString();
};

module.exports = Letter;