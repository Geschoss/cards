'use strict';

const { BaseState } = require('./base.js');

class PlayingState extends BaseState {
  enter(game) {
    game.shufflуDeck();

    this.translate = '';
    this.guesses = [];
    this.showDescription = false;
    this.printInfo(game);
  }

  execute(game) {
    const { sequence } = game.input;

    switch (sequence) {
      case '1':
        this.translate = '';
        this.showDescription = true;
        this.printInfo(game);
        return;
      case '0':
        game.changeState('MainMenuState');
        return;
      case '\r':
        if (this.isValid(game)) {
          game.changeState('SuccessState');
          return;
        }
        this.guesses.push(this.translate);
        this.translate = '';
        this.printInfo(game);
        return;
      case '\x7F':
        this.translate = this.translate.slice(0, -1);
        this.printInfo(game);
        return;
    }

    this.translate = this.translate + sequence;
    this.printInfo(game);
  }

  printInfo(game) {
    game.clear();
    game.write('Playing\n');
    game.write('1: Show description.\n');
    game.write('0: Back to main menu.\n');
    game.write('\n');

    game.write(`english: ${game.card.english}\n`);
    if (this.showDescription) {
      game.write(`description: ${game.card.description}\n`);
    }
    game.write(`guesses: [${this.guesses.join(',')}]`);
    game.write('\n');
    game.write(`> ${this.translate}`);
  }

  isValid(game) {
    return game.card.russian.includes(this.translate);
  }
}

module.exports = PlayingState;
