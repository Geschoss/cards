'use strict';

class Game {
  constructor({ deck, process, states }) {
    this.deck = deck;
    this.card = {};
    this.input = {};
    this.states = states;
    this.process = process;
  }

  start() {
    this.process.stdin.setRawMode(true);
    this.process.stdin.on('keypress', this.keypress);

    this.state = this.states['MainMenuState'];
    this.state.enter(this);
  }

  shufflуDeck() {
    this.card = this.deck.getCard();
  }

  keypress = (_, key) => {
    this.input = key;
    this.update();
  };

  update() {
    this.state.execute(this);
  }

  changeState(newStateName) {
    const state = this.states[newStateName];
    this.state.exit(this);
    this.state = state;
    this.state.enter(this);
  }

  // TODO вынести в cli
  write(str) {
    this.process.stdout.write(str);
  }
  clear() {
    this.write('\x1Bc');
  }

  exit() {
    this.process.exit();
  }
}

module.exports = {
  Game,
};
