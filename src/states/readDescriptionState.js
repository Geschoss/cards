'use strict';

const { BaseState, printDraft } = require('./base.js');
const { KEYS } = require('../constants.js');

class ReadDescriptionState extends BaseState {
  enter(game) {
    this.word = game.draft.description;
    this.printInfo(game);
  }
  execute(game) {
    const { sequence } = game.input;

    switch (sequence) {
      case KEYS.Enter:
        game.draft.description = this.word;
        this.word = '';
        game.changeState('EndingState');
        return;
      case KEYS.Backspace:
        this.word = this.word.slice(0, -1);
        this.printInfo(game);
        return;
      case '0':
        this.word = '';
        game.changeState('AddCardState');
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
    game.write('Enter: Go next step.\n');
    game.write('0: Go back.\n');
    game.write('\n');
    game.write(`word: ${this.word}`);
  }
}

module.exports = ReadDescriptionState;
