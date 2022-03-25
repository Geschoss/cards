'use strict';

const BaseStrategy = require('./base.js');

const shuffle = (arr) => {
  arr.sort(() => Math.random() - 0.5);
  return arr;
};

class AllStrategy extends BaseStrategy {
  name = 'all';
  description = 'training all shuffled cards';
  index = -1;
  game = null;
  cards = [];

  init(game) {
    this.index = this.index + 1;
    this.game = game;
    this.cards = shuffle([...this.game.deck.getCards()]);
    this.game.card = this.cards[this.index];
  }

  isValid(guess) {
    return this.game.card.russian.includes(guess);
  }

  printInfo() {
    this.game.write(
      `card ${this.index + 1} of ${this.game.deck.size}\n`
    );
    this.game.write(`english: ${this.game.card.english}\n`);
  }

  reset() {
    this.index = -1;
  }
}

module.exports = AllStrategy;
