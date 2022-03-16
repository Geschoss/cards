'use strict';

const { states } = require('./states.js');

class Game {
  constructor({ deck, process }) {
    this.deck = deck;
    this.input = {};
    this.process = process;
  }

  start() {
    this.process.stdin.setRawMode(true);
    this.process.stdin.on('keypress', this.keypress);

    this.state = states['MainMenuState'];
    this.changeState(states['MainMenuState']);
  }

  keypress = (_, key) => {
    this.input = key;
    this.update();
  };

  update() {
    this.state.execute(this);
  }

  changeState(newState) {
    this.state.exit(this);
    this.state = newState;
    this.state.enter(this);
  }

  write(str) {
    this.process.stdout.write(str);
  }
  clear() {
    this.write('\x1Bc');
  }
}

module.exports = {
  Game,
};
