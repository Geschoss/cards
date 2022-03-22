'use strict';

const { BaseState, printDraft } = require('./base.js');
const { KEYS } = require('../constants.js');

class ReadRussainState extends BaseState {
  enter(game) {
    this.words = game.draft.russian;
    this.word = '';
    this.printInfo(game);
  }
  execute(game) {
    const { sequence } = game.input;

    switch (sequence) {
      case KEYS.Enter:
        this.words.push(this.word);
        this.word = '';
        this.printInfo(game);
        return;
      case KEYS.Backspace:
        this.word = this.word.slice(0, -1);
        this.printInfo(game);
        return;
      case '0':
        this.word = '';
        this.words = [];
        game.changeState('AddCardState');
        return;
      case '1':
        game.draft.russian = this.words;
        this.word = '';
        this.words = [];
        game.changeState('ReadDescriptionState');
        return;
    }
    this.word = this.word + sequence;
    this.printInfo(game);
  }
  printInfo(game) {
    game.clear();
    game.write('Writing russian word!\n');
    printDraft(game);
    game.write('\n');
    game.write('Enter: Add word.\n');
    game.write('1: Go next step.\n');
    game.write('0: Go back.\n');
    game.write('\n');
    game.write(`words: ${this.words}`);
    game.write('\n');
    game.write(`word: ${this.word}`);
  }
}

module.exports = ReadRussainState;
