'use strict';

const BaseState = require('./base.js');

class MainMenuState extends BaseState {
  enter(game) {
    game.clear();
    game.write('Main menu:\n');
    game.write('1: Play\n');
    game.write('2: Add new card\n');
    game.write('\n');
    game.write('0: Exit\n');
  }
  execute(game) {
    const { sequence } = game.input;

    switch (sequence) {
      case '0':
        game.exit();
        break;
      case '1':
        game.changeState('PlayingState');
        break;
    }
  }
}

module.exports = MainMenuState;
