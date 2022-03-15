'use strict';

const fs = require('fs');

const split = (splitter) => (str) => str.split(splitter);

class CSVStorage {
  constructor(path, keys) {
    this.path = path;
    this.keys = keys;
  }

  async read() {
    const data = await fs.promises.readFile(this.path, 'utf8');

    return data
      .split('\n')
      .filter((row) => row !== '')
      .map(split(','))
      .map(this.cardFromRow);
  }
  async append(card) {
    const row = this.rowFromCard(card);
    await fs.promises.appendFile(this.path, `${row}\n`);
  }

  cardFromRow = (row) =>
    this.keys.reduce((acc, key, index) => ({ ...acc, [key]: row[index] }), {});

  rowFromCard = (card) =>
    this.keys.reduce((acc, key) => [...acc, card[key]], '').join(',');
}

module.exports = CSVStorage;
