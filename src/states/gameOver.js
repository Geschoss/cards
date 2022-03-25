'use strict';

const { BaseState } = require('./base.js');
const { KEYS } = require('../constants.js');

class GameOverState extends BaseState {
  enter(game) {
    // TODO show stats
    this.printInfo(game);
  }
  execute(game) {
    const { sequence } = game.input;

    switch (sequence) {
      case KEYS.Enter:
        game.changeState('MainMenuState');
        return;
    }
  }

  printInfo(game) {
    game.clear();
    game.write('Game over!\n');
    game.write('\n');
    game.write('Enter: Go to Main menu.\n');
  }
}

module.exports = GameOverState;
