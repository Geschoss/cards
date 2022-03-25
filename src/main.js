'use strict';

const readline = require('readline');
readline.emitKeypressEvents(process.stdin);

const { Game } = require('./game.js');
const { states } = require('./states/');
const { strategies } = require('./strategies');
const { createDeck } = require('./deck.js');
const { FileStorage } = require('./storage.js');

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
