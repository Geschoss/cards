'use strict';

const readline = require('readline');
readline.emitKeypressEvents(process.stdin);

const { Game } = require('./src/game.js');
const { states } = require('./src/states');
const { strategies } = require('./src/strategies');
const { createDeck } = require('./src/deck.js');
const { FileStorage } = require('./src/storage.js');

const storage = new FileStorage('./src/dictionary.txt');

const main = async () => {
  const deck = await createDeck(storage);
  const game = new Game({
    deck,
    states,
    process,
    strategies,
  });
  game.start();
};

main().catch(console.error);
