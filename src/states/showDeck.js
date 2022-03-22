'use strict';

const { BaseState } = require('./base.js');

class ShowDeckState extends BaseState {
  enter(game) {
    game.clear();
    game.write('Deck\n');
    game.write('\n');
    game.write('0: Go back\n');

    for (const card of game.deck.getCards()) {
      const { english, russian } = card;
      game.write(`[${english} - ${russian}]\n`);
    }
  }
  execute(game) {
    const { sequence } = game.input;

    switch (sequence) {
      case '0':
        game.changeState('MainMenuState');
        break;
    }
  }
}

module.exports = ShowDeckState;
