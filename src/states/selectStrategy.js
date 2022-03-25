'use strict';

const { BaseState } = require('./base.js');

class SelectStrategyState extends BaseState {
  enter(game) {
    game.clear();
    game.write('Select strategy!\n');
    game.write('\n');

    game.strategies.forEach((strategy, index) => {
      game.write(
        `${index + 1}: ${strategy.name} (${
          strategy.description
        })\n`
      );
    });

    game.write('\n');
    game.write('0: Go ot main menu\n');
  }
  execute(game) {
    const { sequence } = game.input;

    if (sequence === '0') {
      game.changeState('MainMenuState');
      return;
    }

    try {
      const selectedStrategy = parseInt(sequence, 10);
      const strategy =
        game.strategies[selectedStrategy - 1];
      if (strategy) {
        game.strategy = strategy;
        game.strategy.start(game);
        game.changeState('PlayingState');
        return;
      }
    } catch (error) {}
  }
}

module.exports = SelectStrategyState;
