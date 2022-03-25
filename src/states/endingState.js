'use strict';

const { BaseState, printDraft } = require('./base.js');
const { KEYS } = require('../constants.js');

class EndingStateState extends BaseState {
  enter(game) {
    this.printInfo(game);
  }
  execute(game) {
    const { sequence } = game.input;

    switch (sequence) {
      case KEYS.Enter:
        game.saveCard();
        game.changeState('MainMenuState');
        return;
      case '0':
        game.changeState('AddCardState');
        return;
    }
  }

  printInfo(game) {
    game.clear();
    game.write('Saving!\n');
    printDraft(game);
    game.write('\n');
    game.write('Enter: Save card.\n');
    game.write('0: Go back.\n');
  }
}

module.exports = EndingStateState;
