'use strict';

const FSM = require('./fsm.js');

class Game extends FSM {
  constructor({ deck, process, states }) {
    super({ states });
    this.deck = deck;
    this.card = {};
    this.input = {};
    this.process = process;
    this.draft = {
      english: '',
      russian: [],
      description: '',
    };
  }

  saveCard() {
    this.deck.addCard(this.draft);
    this.draft = {
      english: '',
      russian: [],
      description: '',
    };
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
