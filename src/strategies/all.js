'use strict';

const BaseStrategy = require('./base.js');
const array = require('../lib/array.js');

class AllStrategy extends BaseStrategy {
  name = 'all';
  description = 'training all shuffled cards';
  index = -1;
  game = null;
  cards = [];

  hasNext() {
    return this.index + 1 < this.cards.length;
  }

  start(game) {
    this.game = game;
    this.cards = array.shuffle([
      ...this.game.getCards(),
    ]);
  }

  next() {
    this.index = this.index + 1;
    this.game.card = this.cards[this.index];
  }

  end() {
    this.index = -1;
  }
}

module.exports = AllStrategy;
