'use strict';

const readline = require('readline');
readline.emitKeypressEvents(process.stdin);

const { Game } = require('./game.js');
const { createDeck } = require('./deck.js');
const { FileStorage } = require('./storage.js');

const keys = ['english', 'russian', 'description'];
const storage = new FileStorage('./src/dictionary.txt', keys);

const main = async () => {
  const deck = await createDeck(storage);

  const game = new Game({
    deck,
    process,
  });

  game.start();
};

main().catch(console.error);
