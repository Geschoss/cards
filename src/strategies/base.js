'use strict';

class BaseStrategy {
  name = 'base';
  description = '';
  game = null;

  start(game) {}
  next() {}
  end() {}

  hasNext() {}

  isValid(guess) {
    return this.game.card.russian.includes(guess);
  }

  printInfo() {
    this.game.write(
      `card ${this.index + 1} of ${this.cards.length}\n`
    );
    this.game.write(`english: ${this.game.card.english}\n`);
    this.game.write(`type: ${this.game.card.type}\n`);
  }

  showDescription() {
    this.game.write(
      `description: ${this.game.card.description}\n`
    );
  }
}

module.exports = BaseStrategy;
