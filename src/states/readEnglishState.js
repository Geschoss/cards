'use strict';

const { BaseState, printDraft } = require('./base.js');
const { KEYS } = require('../constants.js');

class ReadEnglishState extends BaseState {
  enter(game) {
    this.word = game.draft.english;
    this.printInfo(game);
  }
  execute(game) {
    const { sequence } = game.input;

    switch (sequence) {
      case KEYS.Enter:
        game.draft.english = this.word;
        this.word = '';
        game.changeState('ReadRussainState');
        return;
      case KEYS.Backspace:
        this.word = this.word.slice(0, -1);
        this.printInfo(game);
        return;
      case '1':
        game.changeState('AddCardState');
        return;
    }
    this.word = this.word + sequence;
    this.printInfo(game);
  }
  printInfo(game) {
    game.clear();
    game.write('Writing english word!\n');
    game.write('\n');

    game.write('Enter: Go next step.\n');
    game.write('0: Go back.\n');
    printDraft(game);
    game.write('\n');
    game.write(`word: ${this.word}`);
  }
}

module.exports = ReadEnglishState;
