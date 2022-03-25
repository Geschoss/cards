'use strict';

const { BaseState } = require('./base.js');

class PlayingState extends BaseState {
  enter(game) {
    if (!game.strategy.hasNext()) {
      game.changeState('GameOverState');
      return;
    }
    game.strategy.next();
    this.guess = '';
    this.guesses = [];
    this.printInfo(game);
  }

  execute(game) {
    const { sequence } = game.input;

    switch (sequence) {
      case '1':
        this.guess = '';
        this.showDescription = true;
        this.printInfo(game);
        return;
      case '0':
        game.changeState('MainMenuState');
        game.strategy.end();
        return;
      case '\r':
        if (game.strategy.isValid(this.guess)) {
          game.changeState('SuccessState');
          return;
        }
        this.guesses.push(this.guess);
        this.guess = '';
        this.printInfo(game);
        return;
      case '\x7F':
        this.guess = this.guess.slice(0, -1);
        this.printInfo(game);
        return;
    }

    this.guess = this.guess + sequence;
    this.printInfo(game);
  }

  printInfo(game) {
    game.clear();
    game.write('Playing\n');
    game.write('1: Show description.\n');
    game.write('0: End.\n');
    game.write('\n');
    game.strategy.printInfo();
    game.write('\n');
    game.write(`guesses: [${this.guesses.join(',')}]`);
    game.write('\n');
    game.write(`> ${this.guess}`);
  }
}

module.exports = PlayingState;
