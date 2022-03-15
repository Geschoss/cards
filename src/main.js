'use strict';

const CSVStorage = require('./storage.js');
const { createDeck } = require('./deck.js');

const CSVkeys = ['english', 'russian', 'description'];
const storage = new CSVStorage('./src/dictionary.csv', CSVkeys);

const main = async () => {
  const deck = await createDeck(storage);

  console.log(deck.getRandom());
};

main().catch(console.error);
