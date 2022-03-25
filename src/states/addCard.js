'use strict';

const { BaseState, printDraft } = require('./base.js');

class AddCardState extends BaseState {
  enter(game) {
    this.printInfo(game);
  }
  execute(game) {
    const { sequence } = game.input;

    switch (sequence) {
      case '0':
        game.changeState('MainMenuState');
        return;
      case '1':
        game.changeState('ReadEnglishState');
        return;
      case '2':
        game.changeState('ReadRussainState');
        return;
      case '3':
        game.changeState('ReadDescriptionState');
        return;
    }
  }

  printInfo(game) {
    game.clear();
    game.write('Creating new card!\n');
    printDraft(game);
    game.write('\n');
    game.write('1: English word.\n');
    game.write('2: Russian word.\n');
    game.write('3: Description.\n');

    game.write('0: Back to main menu.\n');
    game.write('\n');
  }
}

module.exports = AddCardState;
