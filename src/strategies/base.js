'use strict';

class BaseStrategy {
  name = 'base';
  description = '';
  game = null;

  init(game) {}
  isValid(guess) {}
  printInfo() {}
  reset() {}
}

module.exports = BaseStrategy;
