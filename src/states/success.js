'use strict';

const { BaseState } = require('./base.js');

class SuccessState extends BaseState {
  enter(game) {
    game.clear();
    game.write('Success!\n');
    game.write('\n');

    game.write(`english: ${game.card.english}\n`);
    game.write(`russian: ${game.card.russian.join(' ')}\n`);
    game.write(`description: ${game.card.description}\n`);
    game.write('\n');

    game.write('1: Play again\n');
    game.write('0: Go ot main menu\n');
  }
  execute(game) {
    const { sequence } = game.input;

    switch (sequence) {
      case '0':
        game.changeState('MainMenuState');
        break;
      case '1':
        game.changeState('PlayingState');
        break;
    }
  }
}

module.exports = SuccessState;
