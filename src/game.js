'use strict';

const FSM = require('./fsm.js');

const makeDraft = () => ({
  english: '',
  russian: [],
  description: '',
});

class Game extends FSM {
  constructor({ deck, process, states, strategies }) {
    super({ states });
    this.deck = deck;
    this.input = {};
    this.card = {};
    this.process = process;
    this.strategies = strategies;
    this.strategy = null;
    this.draft = makeDraft;
  }

  saveCard() {
    this.deck.addCard(this.draft);
    this.draft = makeDraft();
  }

  start() {
    this.process.stdin.setRawMode(true);
    this.process.stdin.on('keypress', this.keypress);

    this.state = this.states['MainMenuState'];
    this.state.enter(this);
  }

  keypress = (_, key) => {
    this.input = key;
    this.update();
  };

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
